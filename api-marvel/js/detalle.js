const detalle={
    render:()=>{            

        const urlAPI='https://gateway.marvel.com:443/v1/public/characters/1011334/comics?&ts=1&apikey=938f757a837832b9f5bce2a655f45c33&hash=01100778499f7adf93107b7ab0183022';
        
        const container = document.querySelector('#detalle-row');
        let contentHTML='';

        fetch(urlAPI)
        .then(res => res.json())
        .then((json)=>{
            //console.log(json.data.results)
            for(const detalle of json.data.results){
                
                if(detalle.id!=22300 && detalle.description && !detalle.thumbnail.path.includes('image_not_available')){
                    contentHTML+=`
                    <div class="col-md-4 mt-md color">   
                        <div class="detalle-contenido">    
                            <a class="container-heroe" href="${detalle.urls[0].url}" target="_blank">
                                <img class="img" src="${detalle.thumbnail.path}.${detalle.thumbnail.extension}">
                            </a>
                            <div class="detalle-texto center">    
                                <p>${detalle.id}</p>
                                <p>${detalle.title}</p>
                                <p>${detalle.description}</p>
                                <p>${detalle.format}</p>
                                <p>$${detalle.prices[0].price}</p>
                                <a href="${detalle.urls[0].url}" target="_blank" class="btn btn-dark">VER AHORA</a>
                            </div>
                       </div>
                    </div>`;
                }
               
                
            }
            container.innerHTML=contentHTML;
        })
    }
};
detalle.render();