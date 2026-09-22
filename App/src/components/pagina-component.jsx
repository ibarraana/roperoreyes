
function PaginaComponent( { esAdministrador} ) {

    return (
        <>
            {esAdministrador===true ? <h1 className="text-3xl font-semibold text-center mx-auto">Bienvenido <span className="text-indigo-500">Administrador</span>, gracias por loguearse</h1> : <h1 className="text-3xl font-semibold text-center mx-auto">Bienvenidos a la pagina, gracias por loguearse</h1>}
            
            <h3 className="text-3xl font-semibold text-center mx-auto">Pudiste acceder correctamente</h3>

        </>
    )
}

export default PaginaComponent