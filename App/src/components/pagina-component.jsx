
function PaginaComponent( { cambiarVisualizacion} ) {

    return (
        <>
            <h1 className="text-3xl font-semibold text-center mx-auto">Bienvenidos a la pagina, gracias por loguearse</h1>

            <h3 className="text-3xl font-semibold text-center mx-auto">Pudiste acceder correctamente</h3>

            <button onClick={cambiarVisualizacion} className="bg-red-500 hover:bg-red-900 text-white py-2 px-4 rounded-md">
                Cerrar sesión
            </button>
        </>
    )
}

export default PaginaComponent