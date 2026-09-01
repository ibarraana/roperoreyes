

function LoginComponent() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
            
            <br />

            {/* De esta pagina hemos sacado el login: https://prebuiltui.com/components/login-form */}

            <form class="bg-white rounded-lg shadow-xl text-sm text-gray-500 border border-gray-200 p-8 py-12 w-80 sm:w-[352px]">
                <p class="text-2xl font-medium text-center">
                    <span class="text-indigo-500">Usuario</span> Login
                </p>

                <div class="mt-4">
                    <label class="block">Ingrese el email:</label>
                    <input type="email" placeholder="Escribir el email aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>

                <div class="mt-4">
                    <label class="block">Ingrese la contraseña:</label>
                    <input type="password" placeholder="Escribir la contraseña aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>

                <p class="mt-4">
                    No tienes una cuenta?
                    <a href="#" class="text-indigo-500">Crear cuenta</a>
                </p>

                <button type="submit" class="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md mt-4 cursor-pointer">
                    INGRESAR
                </button>
            </form>
        </div>



    )
}

export default LoginComponent