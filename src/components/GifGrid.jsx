import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  // Custom hook donde envío la categoría, inicializo los estados, hago la consulta a la API.
  // Devuelvo los estados
  const { images, isLoading } = useFetchGifs(category)
  

  return (
    <>
      <h3>{category}</h3>
      { isLoading && (<h2>Cargando...</h2>) }
      <div className="card-grid">
        {
          images.map((image) => (
            <GifItem
              key={image.id}
              {...image}
            />
          ))}
        
      </div>
    </>
  )
}
