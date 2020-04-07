const marvel ={
    render:()=>{
        
        const urlAPI='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=938f757a837832b9f5bce2a655f45c33&hash=01100778499f7adf93107b7ab0183022';
        const container = document.querySelector('#marvel-row');
        let contentHTML='';

        fetch(urlAPI)
        .then(res => res.json())
        .then((json)=>{
            for(const hero of json.data.results){
                let urlHero= hero.urls[0].url;
                if(!hero.thumbnail.path.includes('image_not_available')){
                    contentHTML+=`
                    <div class="col-md-4 mt-sm color">                    
                            <a class="container-heroe" href="${urlHero}" target="_blank">
                            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail efecto">
                            </a>                    
                        <h3 class="title center">${hero.name}</h3>
                    </div>`;
                }
            }
            container.innerHTML=contentHTML;
        })
    }
};

marvel.render();

