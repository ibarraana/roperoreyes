import { useState } from "react"
import { crearUsuario } from "../../services/usuarios-services"

function RegistroComponent({ cambiarVisualizacion }) {

    const [usuarioData, setUsuarioData] = useState(
        {
            nombre: "",
            email: "",
            passwordUsuario: "",
            telefono: "",
            calle: "",
            piso: "",
            departamento: "",
            ciudad: "",
            provincia: "",
            codigoPostal: "",
            idRol: 2
        }
    )

    function enviarInformacion(event) {
        let nombreCampo = event.target.name
        let valorCampo = event.target.value

        setUsuarioData({
            ...usuarioData,
            [nombreCampo]: valorCampo
        })
    }

    function manejarEnvio(event) {
        event.preventDefault()

        crearUsuario(usuarioData)
            .then((response) => {
                console.log("Usuario creado exitosamente:", response)
                cambiarVisualizacion()
            })
            .catch((error) => {
                console.error("Error al crear el usuario:", error)
            })
    }

    return (
        <div className="flex justify-center items-center w-full py-6">

            <form onSubmit={manejarEnvio} className="bg-white/85 backdrop-blur-md rounded-2xl shadow-2xl text-sm text-gray-700 border border-white/40 p-8 py-10 w-full max-w-xl">
                <p className="text-2xl font-bold text-center mb-6">
                    <span className="text-rose-700">Registro de Usuarios</span>
                </p>

                <div className="space-y-4">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <label className="font-medium text-gray-700 sm:w-2/5">Ingrese el Nombre:</label>
                        <input type="text" value={usuarioData.nombre} onChange={enviarInformacion} name="nombre"
                            placeholder="Escribir el nombre aqui..." required
                            className="border border-gray-200 rounded-lg p-2.5 outline-indigo-500 bg-white/70 w-full sm:w-3/5" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <label className="font-medium text-gray-700 sm:w-2/5">Ingrese el Email:</label>
                        <input type="email" value={usuarioData.email} onChange={enviarInformacion} name="email"
                            placeholder="Escribir el email aqui..." required
                            className="border border-gray-200 rounded-lg p-2.5 outline-indigo-500 bg-white/70 w-full sm:w-3/5" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <label className="font-medium text-gray-700 sm:w-2/5">Ingrese la Password:</label>
                        <input type="password" value={usuarioData.passwordUsuario} onChange={enviarInformacion} name="passwordUsuario"
                            placeholder="Escribir la contraseña aqui..." required
                            className="border border-gray-200 rounded-lg p-2.5 outline-indigo-500 bg-white/70 w-full sm:w-3/5" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <label className="font-medium text-gray-700 sm:w-2/5">Ingrese el Teléfono:</label>
                        <input type="text" value={usuarioData.telefono} onChange={enviarInformacion} name="telefono"
                            placeholder="Escribir el teléfono aqui..." required
                            className="border border-gray-200 rounded-lg p-2.5 outline-indigo-500 bg-white/70 w-full sm:w-3/5" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <label className="font-medium text-gray-700 sm:w-2/5">Ingrese la calle:</label>
                        <input type="text" value={usuarioData.calle} onChange={enviarInformacion} name="calle"
                            placeholder="Escribir la calle aqui..." required
                            className="border border-gray-200 rounded-lg p-2.5 outline-indigo-500 bg-white/70 w-full sm:w-3/5" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <label className="font-medium text-gray-700 sm:w-2/5">Ingrese el piso:</label>
                        <input type="text" value={usuarioData.piso} onChange={enviarInformacion} name="piso"
                            placeholder="Escribir el piso aqui..." required
                            className="border border-gray-200 rounded-lg p-2.5 outline-indigo-500 bg-white/70 w-full sm:w-3/5" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <label className="font-medium text-gray-700 sm:w-2/5">Ingrese el departamento:</label>
                        <input type="text" value={usuarioData.departamento} onChange={enviarInformacion} name="departamento"
                            placeholder="Escribir el departamento aqui..." required
                            className="border border-gray-200 rounded-lg p-2.5 outline-indigo-500 bg-white/70 w-full sm:w-3/5" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <label className="font-medium text-gray-700 sm:w-2/5">Ingrese la ciudad:</label>
                        <input type="text" value={usuarioData.ciudad} onChange={enviarInformacion} name="ciudad"
                            placeholder="Escribir la ciudad aqui..." required
                            className="border border-gray-200 rounded-lg p-2.5 outline-indigo-500 bg-white/70 w-full sm:w-3/5" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <label className="font-medium text-gray-700 sm:w-2/5">Ingrese la provincia:</label>
                        <input type="text" value={usuarioData.provincia} onChange={enviarInformacion} name="provincia"
                            placeholder="Escribir la provincia aqui..." required
                            className="border border-gray-200 rounded-lg p-2.5 outline-indigo-500 bg-white/70 w-full sm:w-3/5" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <label className="font-medium text-gray-700 sm:w-2/5">Ingrese el código postal:</label>
                        <input type="text" value={usuarioData.codigoPostal} onChange={enviarInformacion} name="codigoPostal"
                            placeholder="Escribir el codigo postal aqui..." required
                            className="border border-gray-200 rounded-lg p-2.5 outline-indigo-500 bg-white/70 w-full sm:w-3/5" />
                    </div>
                </div>

                <div className="flex gap-4 mt-6">
                    <button type="submit" className="bg-green-600 hover:bg-green-700 transition-all text-white w-full py-2.5 rounded-lg font-medium cursor-pointer shadow-md shadow-green-600/10">
                        REGISTRAR
                    </button>

                    <button type="button" className="bg-red-600 hover:bg-red-700 transition-all text-white w-full py-2.5 rounded-lg font-medium cursor-pointer shadow-md shadow-red-600/10" onClick={cambiarVisualizacion}>
                        CANCELAR
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegistroComponent
