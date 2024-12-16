import { useNavigate } from "react-router-dom";

const Card = ({id,nombre,descripcion,precio,imagen, children}) => {

    const navigate = useNavigate();
    const handleClick =()=>{
        navigate(`/producto/${id}`);

    }

    return ( 
        <li className="card">
            <img className="img-card" src={`/${imagen}`} alt={nombre} />
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p>Precio: ${precio}</p>
        {children}
  
        <button className="btn-loquiero" onClick={handleClick} >VER PRODUCTO</button>
    </li>
     );
}
 
export default Card;