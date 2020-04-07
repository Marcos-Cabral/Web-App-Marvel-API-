const eventos={
    render:()=>{            

        const urlAPI='https://gateway.marvel.com:443/v1/public/events?&ts=1&apikey=938f757a837832b9f5bce2a655f45c33&hash=01100778499f7adf93107b7ab0183022';
        
        const container = document.querySelector('#eventos-row');
        let contentHTML='';

        fetch(urlAPI)
        .then(res => res.json())
        .then((json)=>{
            //console.log(json.data.results)
            for(const eventos of json.data.results){
                
                contentHTML+=`
                <div class="col-md-4 mt-md color">   
                    <div class="eventos-contenido">    
                    <a class="container-heroe" href="${eventos.urls[0].url}" target="_blank">
                    <img src="${eventos.thumbnail.path}.${eventos.thumbnail.extension}" alt="${eventos.title}" class="img-thumbnail efecto">
                    </a>
                        <div class="eventos-texto center">    
                        <h2 class="mt-sm">${eventos.title}</h2>
                        <p>numero de cómic: ${eventos.id}</p>
                        </div>
                   </div>
                </div>`;
               
                
            }
            container.innerHTML=contentHTML;
        })
    }
};
eventos.render();