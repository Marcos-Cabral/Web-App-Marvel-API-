const series={
    render:()=>{        
        const urlAPI='https://gateway.marvel.com:443/v1/public/series?seriesType=collection&contains=comic&ts=1&apikey=938f757a837832b9f5bce2a655f45c33&hash=01100778499f7adf93107b7ab0183022';
 
        const container = document.querySelector('#marvel-serie-row');
        let contentHTML='';

        fetch(urlAPI)
        .then(res => res.json())
        .then((json)=>{
            //console.log(json.data.results)
            for(const serie of json.data.results){
                let urlSerie=serie.urls[0].url;
                if(!serie.thumbnail.path.includes('image_not_available')){
                    contentHTML+=`
                    <div class="col-md-4 mt-sm color">                    
                            <a class="container-heroe" href="${urlSerie}" target="_blank">
                            <img src="${serie.thumbnail.path}.${serie.thumbnail.extension}" alt="${serie.title}" class="img-thumbnail efecto">
                            </a>                    
                        <h4 class="title center">${serie.title}</h4>
                         
                    </div>`;
                }
            }
            container.innerHTML=contentHTML;
        })
    }
};
series.render();