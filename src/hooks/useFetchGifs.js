import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        // recibo el listado de imágenes
        const newImages = await getGifs(category);
        
        // cambio el estado
        setImages(newImages)
        setIsLoading(false)
    }

    // Lo que se ejecuta una vez que se carga el componente.
    // Un useEffect no puede ser asíncrono pero si puede
    // ejecutar una function que sea asíncrona.
    useEffect(() => {
        getImages();
    }, []);


    // devuelvo los estados como un objeto
    // si el key = value, solo se pone el key.
    // return {
    //     images: images,
    //     isLoading: isLoading
    // }
    return {
        images,
        isLoading
    }
}
