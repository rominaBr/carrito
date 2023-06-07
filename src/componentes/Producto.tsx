import { useState } from 'react';
import './producto.css'

type Props = {
    nombre: string;
    precio: number;
    descripcion: string;
    sumarAlCarrito: () => void;
    restarAlCarrito: () => void;
}


function Producto(props: Props){
    const [cantidad, setCantidad] = useState(0);

    const sumarAlCarrito = () => {
        setCantidad(cantidad+1);
        props.sumarAlCarrito();
    }

    const restarAlCarrito = () => {
        if(cantidad > 0){
            setCantidad(cantidad-1);
            props.restarAlCarrito();
        }        
    }
        
    return(        

        <div className="tarjeta">
            <div>
                <h2>Nombre: {props.nombre}</h2>
                <p>Precio: ${props.precio}</p>
                <p>Descripcion: {props.descripcion}</p>
            </div>
            <div className="footer">
                <button onClick={restarAlCarrito}>-</button>
                <p>{cantidad}</p>
                <button onClick={sumarAlCarrito}>+</button>                
            </div>            
        </div>
    )
}

export default Producto