

function LoginComponent() {
    return (
        <>
            <h2>Este es el login de usuarios</h2>

            <br />

            <form>
                <table>
                    <tr>
                        <td>Ingrese el email:</td>
                        <td><input type="text" value="Aqui va el mail..." /></td>
                    </tr>
                    <tr>
                        <td>Ingrese la contraseña:</td>
                        <td><input type="password" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="button" value="Validar" /></td>
                    </tr>
                </table>
            </form>
        </>
    )
}

export default LoginComponent