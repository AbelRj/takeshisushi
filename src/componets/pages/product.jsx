import { useNavigate, useParams } from 'react-router-dom';
import platos from '../../data/comidaPeruana.json';
import sushi from '../../data/sushi.json';
import { useContext, useState, useEffect } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import Cantidad from '../molecules/Cantidad';
import SectionSalsa from '../organisms/SectionSalsa';
import SectionRellenos from '../organisms/SectionRellenos';

const Product = () => {
  const { id } = useParams();
  const [cantidad, setCantidad] = useState(1); // Estado para manejar la cantidad
  const [subTotal, setSubTotal] = useState(0); // Estado para manejar el subtotal
  const [sugerencia, setSugerencia] = useState(''); // Estado para manejar la sugerencia
  const { state, dispatch } = useContext(CarritoContext);
  const navigate = useNavigate(); // Hook para redirigir
  const [totalSalsas, setTotalSalsas] = useState(0);
  const [salsasSeleccionadas, setSalsasSeleccionadas] = useState([]); // Estado para las salsas



  // Busca el producto en ambos JSON
  const producto =
    platos.platos_peruanos.find(plato => plato.id === parseInt(id)) ||
    sushi.sushi.flatMap(categoria => categoria.items).find(item => item.id === parseInt(id));

  useEffect(() => {
    if (producto) {
      const itemEnCarrito = state.cart.find((item) => item.id === producto.id);
      if (itemEnCarrito) {
        // Si el producto ya está en el carrito, carga sus valores
        setCantidad(itemEnCarrito.cantidad);
        setSugerencia(itemEnCarrito.sugerencia || ''); // Sugerencia podría no existir
        setSalsasSeleccionadas(itemEnCarrito.salsasSeleccionadas || []); // Cargar salsas seleccionadas

      }
    }
  }, [producto, state.cart]); // Se ejecuta cuando cambia el producto o el carrito

  useEffect(() => {
    if (producto) {
      setSubTotal(producto.precio * cantidad); // Actualiza el subtotal al cambiar la cantidad o el producto
    }
  }, [cantidad, producto]);

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  // Verificar si el producto es de sushi
  const esSushi = sushi.sushi.flatMap(categoria => categoria.items).some(item => item.id === producto.id);

  // Función para manejar el clic y redirigir
  const manejarCompra = () => {
    if (cantidad > 0) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: { ...producto, cantidad, sugerencia,totalSalsas, 
          salsasSeleccionadas // Añadir las salsas seleccionadas
           },
      });

      // Redirigir según el tipo de producto
      navigate(esSushi ? '/sushi' : '/comida-peruana');
    } else {
      alert('Selecciona al menos una cantidad.');
    }
  };

  return (
    <div className='contenedor-producto'>
      <div className='contenedor-img-producto'>
        <img className='img-producto' src={`/${producto.imagen}`} alt={producto.nombre} />
      </div>
      <div className='detalle-producto'>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p>Precio unitario: ${producto.precio}</p>
        <p><strong>Precio total: ${subTotal}</strong></p>
        <textarea
          className='sugerencia-producto'
          placeholder='Escribir sugerencia'
          value={sugerencia} // Enlaza el estado con el campo
          onChange={(e) => setSugerencia(e.target.value)} // Actualiza el estado al escribir
        ></textarea>
        <Cantidad cantidad={cantidad} setCantidad={setCantidad} className="contenedor-cantidad" />
        {/* Solo mostrar ExtraSushi si es un producto de sushi */}
        {esSushi && <SectionSalsa        
                    setTotalSalsas={setTotalSalsas}
                    setSalsasSeleccionadas={setSalsasSeleccionadas}
                   
                  />}
        <br></br>
        {esSushi && <SectionRellenos />}
        {state.cart.find((p) => p.id === producto.id) ? (
          <button
            className="btn-loquiero btn"
            onClick={manejarCompra}>
            Actualizar Compra
          </button>
        ) : (
          <button
            className="btn-loquiero btn"
            onClick={manejarCompra}>
            Enviar al Carrito
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
