function random_gen(){
    const items = [
        /* historias */
        "/historias/aroma-a-ciruela",
        "/historias/dialogos-con-una-pintura",
        "/historias/noche-de-las-luciernagas",
        "/historias/un-chorro",
        "/historias/dianne-de-routchet",
        "/historias/dime-algo-sobre-el-mundo",

        /* artículos */
        "/articulos/los-rebeldes",
        "/articulos/al-final-del-camino",

        /* canciones */
        "/canciones/anderande",
        "/canciones/el-valle",
        "/canciones/nomeolvides"
    ];
    
    var random_link = items[Math.floor(Math.random() * items.length)];

    window.location.href = "https://romantic-hawking-416dff.netlify.app" + random_link;
}