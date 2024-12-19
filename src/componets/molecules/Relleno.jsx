const Relleno = ({ id, nombre, precio, setSeleccionados, seleccionados }) => {
    const manejarSeleccion = (id, checked) => {
        setSeleccionados((prev) => ({
            ...prev,
            [id]: checked,
        }));
    };
    
    return (
        <div className="contenedor-relleno">
            {nombre} - ${precio}
            <label>
                <input
                    type="checkbox"
                    checked={!!seleccionados[id]}
                    onChange={(e) => manejarSeleccion(id, e.target.checked)}
                />

            </label>
        </div>
    );
}

export default Relleno;