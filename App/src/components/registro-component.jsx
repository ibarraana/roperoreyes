
import { useState } from "react"
import { crearUsuario } from "../services/usuarios-services"

function RegistroComponent({ cambiarVisualizacion }) {

    const [usuarioData, setUsuarioData] = useState(
        {
            nombre: "",
            email: "",
            password: "",
            telefono: "",
            calle: "",
            piso: "",
            departamento: "",
            ciudad: "",
            provincia: "",
            codigoPostal: ""
        }
    )

    function enviarInformacion(event) {
        let nombreCampo = event.target.name
        let valorCampo = event.target.value

        let nuevoEstado = Object.assign({}, usuarioData)

        nuevoEstado[nombreCampo] = valorCampo

        setUsuarioData(nuevoEstado)
    }


    function manejarEnvio(event) {
        event.preventDefault()

        crearUsuario(usuarioData)
            .then((response) => {
                console.log("Usuario creado exitosamente:", response)
                cambiarVisualizacion()
            }
            )
            .catch((error) => {
                console.error("Error al crear el usuario:", error)
            }
            )
    }


    return (
        <>
            <form onSubmit={manejarEnvio} class="bg-white rounded-lg shadow-xl text-sm text-gray-500 border border-gray-200 p-8 py-12 w-80 sm:w-[352px]">
                <p class="text-2xl font-medium text-center">
                    <span class="text-rose-700">Registro de Usuarios</span>
                </p>

                <div class="mt-4">
                    <label class="block">Ingrese el Nombre:</label>
                    <input type="text" value={usuarioData.nombre} onChange={enviarInformacion} name="nombre"
                        placeholder="Escribir el nombre aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>

                <div class="mt-4">
                    <label class="block">Ingrese el Email:</label>
                    <input type="email" value={usuarioData.email} onChange={enviarInformacion} name="email"
                        placeholder="Escribir el email aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>


                <div class="mt-4">
                    <label class="block">Ingrese la Password:</label>
                    <input type="password" value={usuarioData.password} onChange={enviarInformacion} name="password"
                        placeholder="Escribir la contraseña aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>

                <div class="mt-4">
                    <label class="block">Ingrese el Teléfono:</label>
                    <input type="text" value={usuarioData.telefono} onChange={enviarInformacion} name="telefono"
                        placeholder="Escribir el teléfono aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>

                <div class="mt-4">
                    <label class="block">Ingrese la calle donde vive:</label>
                    <input type="text" value={usuarioData.calle} onChange={enviarInformacion} name="calle"
                        placeholder="Escribir la calle aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>

                <div class="mt-4">
                    <label class="block">Ingrese el piso:</label>
                    <input type="text" value={usuarioData.piso} onChange={enviarInformacion} name="piso"
                        placeholder="Escribir el piso aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>

                <div class="mt-4">
                    <label class="block">Ingrese el departamento:</label>
                    <input type="text" value={usuarioData.departamento} onChange={enviarInformacion} name="departamento"
                        placeholder="Escribir el departamento aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>

                <div class="mt-4">
                    <label class="block">Ingrese la ciudad:</label>
                    <input type="text" value={usuarioData.ciudad} onChange={enviarInformacion} name="ciudad"
                        placeholder="Escribir la ciudad aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>

                <div class="mt-4">
                    <label class="block">Ingrese la provincia:</label>
                    <input type="text" value={usuarioData.provincia} onChange={enviarInformacion} name="provincia"
                        placeholder="Escribir la provincia aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>


                <div class="mt-4">
                    <label class="block">Ingrese el codigo postal:</label>
                    <input type="text" value={usuarioData.codigoPostal} onChange={enviarInformacion} name="codigoPostal"
                        placeholder="Escribir el codigo postal aqui..." required
                        class="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                </div>


                <button type="submit" class="bg-green-500 hover:bg-green-600 transition-all text-white w-full py-2 rounded-md mt-4 cursor-pointer">
                    REGISTRAR
                </button>

                <button type="button" class="bg-red-500 hover:bg-red-950 transition-all text-white w-full py-2 rounded-md mt-4 cursor-pointer" onClick={cambiarVisualizacion}>
                    CANCELAR
                </button>
            </form>
        </>
    )
}

export default RegistroComponent
