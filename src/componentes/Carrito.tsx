import { useState } from "react"
import Producto from "./Producto"
import './carrito.css'

type DatosProducto = {
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
    sumarAlCarrito?: () => void;
    restarAlCarrito?: () => void;
}

function Carrito() {

    const [lista, setLista] = useState<DatosProducto[]>([])
    const [datosProducto, setDatosProducto] = useState({nombre: "", precio: "", descripcion:""})
    const [precioTotal, setPrecioTotal] = useState<number>(0)

    const agregarAListado = (e: React.FormEvent) => {
        e.preventDefault();
        const producto: DatosProducto = {
            id: Date.now(),
            nombre: datosProducto.nombre,
            precio: parseFloat(datosProducto.precio),
            descripcion: datosProducto.descripcion,            
        }
        setLista([...lista, producto])
        setDatosProducto({nombre:"", precio: "", descripcion:""})        
    }

    const cambiarValor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDatosProducto({...datosProducto, [e.target.name]: e.target.value})
    }    

    const sumarAlCarrito = (precio: number) => {
        setPrecioTotal(precioTotal+precio)
    }

    const restarAlCarrito = (precio: number) => {
        setPrecioTotal(precioTotal-precio)
    }

    return(
        <>
        
        <nav>
            <div>
                <i className="fa-solid fa-cart-shopping"></i>
                ${precioTotal}
            </div>                
        </nav>
        <main className="contenedor">   
            <div className="carrito">
                <div>                    
                    <form className="formulario" onSubmit={agregarAListado}>
                        <h4>Nuevo Producto</h4>
                        
                        <input className="datos" type="text" name="nombre" value={datosProducto.nombre} onChange={cambiarValor} placeholder="Nombre" required/>
                    
                        <input className="datos" type="number" name="precio" value={datosProducto.precio} onChange={cambiarValor} placeholder="Precio" min={1} required/>
                        
                        <input className="datos" type="text" name="descripcion" value={datosProducto.descripcion} onChange={cambiarValor} placeholder="Descripción"/>
                        
                        <button className="boton" type="submit">Agregar</button>
                    </form>              
                        
                    
                    </div>
                <div className="listado">
                    
                    {
                        lista.map((product) => (                                                                          
                            <div>
                                <Producto nombre={product.nombre} precio={product.precio} descripcion={product.descripcion} 
                                sumarAlCarrito={() => sumarAlCarrito(product.precio)}
                                restarAlCarrito={() => restarAlCarrito(product.precio)} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
        </>
    )
}

export default Carrito