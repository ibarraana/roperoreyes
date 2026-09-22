import { useState, useEffect } from "react"
import { crearProducto } from "../../services/producto-services"

function RegistroProductoComponent({ cambiarVisualizacion }) {

  const [productoData, setProductoData] = useState({
    nombre: "",
    precio: "",
    stock: "",
    imagen: "",
    idCategoria: "",
    idTalle: "",
    idColor: "",
  })

  function enviarInformacion(event) {
    const nombreCampo = event.target.name;
    const valorCampo = event.target.value;

    setProductoData({
      ...productoData,
      [nombreCampo]: valorCampo,
    });
  }

  function manejarEnvio(event) {
    event.preventDefault();

    const productoAEnviar = {
      ...productoData,
      precio: parseFloat(productoData.precio),
      stock: parseInt(productoData.stock, 10),
      idCategoria: parseInt(productoData.idCategoria, 10),
      idTalle: parseInt(productoData.idTalle, 10),
      idColor: parseInt(productoData.idColor, 10),
    };

    crearProducto(productoAEnviar)
      .then((response) => {        
        cambiarVisualizacion()

        setProductoData({
          nombre: "",
          precio: "",
          stock: "",
          imagen: "",
          idCategoria: "",
          idTalle: "",
          idColor: "",
        });

      })
      .catch((error) => {
        console.error("Error al registrar el producto:", error);        
      });
  }

  return (
    <div className="flex justify-center items-center w-full py-6">
      <form onSubmit={manejarEnvio} className="bg-white/85 backdrop-blur-md rounded-2xl shadow-2xl text-sm text-gray-700 border border-white/40 p-8 py-10 w-full max-w-xl">
        <p className="text-2xl font-bold text-center mb-6 text-blue-700">
          Registrar Nuevo Producto
        </p>

        <div className="space-y-4">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <label className="font-medium text-gray-700 sm:w-2/5">Nombre de la Prenda:</label>
            <input type="text" value={productoData.nombre} onChange={enviarInformacion} name="nombre" placeholder="Ej: Buzo pequeño" required className="border border-gray-200 rounded-lg p-2.5 outline-indigo-500 bg-white/70 w-full sm:w-3/5" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <label className="font-medium text-gray-700 sm:w-2/5">Precio:</label>
            <input type="number" step="0.01" value={productoData.precio} onChange={enviarInformacion} name="precio" placeholder="Ej: 4500.00"  required className="border border-gray-200 rounded-lg p-2.5 outline-indigo-500 bg-white/70 w-full sm:w-3/5" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <label className="font-medium text-gray-700 sm:w-2/5">Cantidad en Stock:</label>
            <input type="number" value={productoData.stock} onChange={enviarInformacion} name="stock" placeholder="Ej: 15" required className="border border-gray-200 rounded-lg p-2.5 outline-indigo-500 bg-white/70 w-full sm:w-3/5" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <label className="font-medium text-gray-700 sm:w-2/5">Enlace de la Imagen:</label>
            <input 
              type="text" 
              value={productoData.imagen} 
              onChange={enviarInformacion} 
              name="imagen"
              placeholder="https://ejemplo.com" 
              required
              className="border border-gray-200 rounded-lg p-2.5 outline-indigo-500 bg-white/70 w-full sm:w-3/5" 
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <label className="font-medium text-gray-700 sm:w-2/5">Categoría:</label>                    
            <input 
              type="number" 
              value={productoData.idCategoria} 
              onChange={enviarInformacion} 
              name="idCategoria"
              placeholder="Ej: 1" 
              required
              className="border border-gray-200 rounded-lg p-2.5 outline-indigo-500 bg-white/70 w-full sm:w-3/5" 
            />              
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <label className="font-medium text-gray-700 sm:w-2/5">Talle:</label>            

            <input 
              type="number" 
              value={productoData.idTalle} 
              onChange={enviarInformacion} 
              name="idTalle"
              placeholder="Ej: 1" 
              required
              className="border border-gray-200 rounded-lg p-2.5 outline-indigo-500 bg-white/70 w-full sm:w-3/5" 
            />   
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <label className="font-medium text-gray-700 sm:w-2/5">Color:</label>            
            <input type="number" value={productoData.idColor} onChange={enviarInformacion} name="idColor" placeholder="Ej: 1" required className="border border-gray-200 rounded-lg p-2.5 outline-indigo-500 bg-white/70 w-full sm:w-3/5" />   
          </div>
        </div>

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition-all text-white w-full py-2.5 rounded-lg mt-6 font-medium cursor-pointer shadow-lg shadow-blue-600/20">
          GUARDAR PRODUCTO
        </button>
      </form>
    </div>
  )
}

export default RegistroProductoComponent
