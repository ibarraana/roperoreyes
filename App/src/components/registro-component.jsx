
function RegistroComponent() {
    return (
        <>
            <h2>Registro de Usuarios</h2>
            
            <form>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div>
                    <label htmlFor="telefono">Teléfono:</label>
                    <input type="text" id="telefono" name="telefono" />
                </div>
                <div>
                    <label htmlFor="calle">Calle:</label>
                    <input type="text" id="calle" name="calle" />
                </div>
                <div>
                    <label htmlFor="piso">Piso:</label>
                    <input type="text" id="piso" name="piso" />
                </div>
                <div>
                    <label htmlFor="departamento">Departamento:</label>
                    <input type="text" id="departamento" name="departamento" />
                </div>
                <div>
                    <label htmlFor="ciudad">Ciudad:</label>
                    <input type="text" id="ciudad" name="ciudad" />
                </div>
                <div>
                    <label htmlFor="provincia">Provincia:</label>
                    <input type="text" id="provincia" name="provincia" />
                </div>
                <div>
                    <label htmlFor="codigoPostal">Codigo Postal:</label>
                    <input type="text" id="codigoPostal" name="codigoPostal" />
                </div>
                <button type="submit">Registrar</button>
                <button type="button">Cancelar</button>
            </form>
        </>
    )
}

export default RegistroComponent
