import { useState, useEffect } from "react";
import { extraerProductos } from "../../services/producto-services";

function ProductoComponent({ esAdministrador, cambiarVisualizacion }) {

  const [listaProductos, setListaProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    extraerProductos()
      .then((data) => {
        setListaProductos(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar la tabla de productos:", error);
        setCargando(false);
      });
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto py-6">
      
      <div className="bg-white/60 backdrop-blur-xs px-6 py-2 rounded-full shadow-xs mb-6 w-fit mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800">Listado de Productos</h1>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            
            <div className="overflow-hidden bg-white rounded-xl shadow-lg border border-gray-200">
              
              <table className="min-w-full text-center text-sm font-light text-gray-700">
                <thead className="border-b border-gray-200 bg-[#332D2D] font-medium text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4">#</th>                    
                    <th scope="col" className="px-6 py-4">Nombre</th>
                    <th scope="col" className="px-6 py-4">Precio</th>
                    <th scope="col" className="px-6 py-4">Stock</th>
                    <th scope="col" className="px-6 py-4">Imagen</th>
                    <th scope="col" className="px-6 py-4">Categoría</th>
                    <th scope="col" className="px-6 py-4">Talle</th>
                    <th scope="col" className="px-6 py-4">Color</th>
                  </tr>
                </thead>
                
                <tbody className="divide-y divide-gray-100 bg-white">
                  {cargando ? (
                    <tr>
                      <td colSpan="8" className="px-6 py-10 text-base font-medium text-gray-500">
                        Cargando productos...
                      </td>
                    </tr>
                  ) : listaProductos.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="px-6 py-10 text-base font-medium text-gray-500">
                        No hay productos disponibles.
                      </td>
                    </tr>
                  ) : (

                    listaProductos.map((prod, index) => (
                      <tr key={prod.idProducto} className="hover:bg-gray-50 transition-colors">
                        <td className="whitespace-nowrap px-6 py-4 font-semibold text-gray-900">
                          {index + 1}
                        </td>                        
                        <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-800">
                          {prod.nombre}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-800">
                          {prod.precio}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-800">
                          {prod.stock}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-800">
                          { prod.imagen }
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-800">
                          {prod.idCategoria}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-800">
                          {prod.idTalle}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-800">
                          {prod.idColor}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>

      {esAdministrador && ( 
        <div className="mt-6 flex justify-end">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-5 rounded-lg shadow-md shadow-indigo-600/20 cursor-pointer transition-all"
          onClick={cambiarVisualizacion}>
            Cargar nuevo producto
          </button>
        </div>
      )}

    </div>
  );
}

export default ProductoComponent;