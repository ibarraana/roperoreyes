
function RegistroComponent() {
    return (
        <>
            <form class="bg-white rounded-lg shadow-xl text-sm text-gray-500 border border-gray-200 p-8 py-12 w-80 sm:w-[352px]">
                <p class="text-2xl font-medium text-center">
                    <span class="text-rose-700">Registro de Usuarios</span>
                </p>

                <div class="mt-4">
                    <label class="block">Ingrese el Nombre:</label>
                    <input type="text" placeholder="Escribir el nombre aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>

                <div class="mt-4">
                    <label class="block">Ingrese el Email:</label>
                    <input type="email" placeholder="Escribir el email aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>


                <div class="mt-4">
                    <label class="block">Ingrese la Password:</label>
                    <input type="password" placeholder="Escribir la contraseña aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>

                <div class="mt-4">
                    <label class="block">Ingrese el Teléfono:</label>
                    <input type="text" placeholder="Escribir el teléfono aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>

                <div class="mt-4">
                    <label class="block">Ingrese la calle donde vive:</label>
                    <input type="text" placeholder="Escribir la calle aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>

                <div class="mt-4">
                    <label class="block">Ingrese el piso:</label>
                    <input type="text" placeholder="Escribir el piso aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>

                <div class="mt-4">
                    <label class="block">Ingrese el departamento:</label>
                    <input type="text" placeholder="Escribir el departamento aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>

                <div class="mt-4">
                    <label class="block">Ingrese la ciudad:</label>
                    <input type="text" placeholder="Escribir la ciudad aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>

                <div class="mt-4">
                    <label class="block">Ingrese la provincia:</label>
                    <input type="text" placeholder="Escribir la provincia aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>


                <div class="mt-4">
                    <label class="block">Ingrese el codigo postal:</label>
                    <input type="text" placeholder="Escribir el codigo postal aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>


                <button type="submit" class="bg-green-500 hover:bg-green-600 transition-all text-white w-full py-2 rounded-md mt-4 cursor-pointer">
                    REGISTRAR
                </button>
            </form>
        </>
    )
}

export default RegistroComponent
