export const getGifs = async (category) => {

    // genero la url para conectar con la API
    const apiKey = 'MR3yFVeUkcRqDB0m5c106967az7fkk1Z';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`);
    const { data } = await (resp.json());

    
    // creo un objeto con los resultados limpios y lo devuelvo
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))
    
    return gifs;


}