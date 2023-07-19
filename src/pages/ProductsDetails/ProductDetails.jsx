import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ApiContext } from '../../components/ApiContext/ApiContext'
import './details.css'

const ProductDetails = () => {

    const { id } = useParams();
    const { products, loading } = useContext(ApiContext);

    if (loading) {
        return <p>Loading...</p>;
    }

    const product = products.find((p) => p.id === parseInt(id));

    return (
        <div className='contenedor'>
            <h1 className='titulo'>Detalles del Producto</h1>
            <div className='contenedor_contenido'>
                <img src={product.image} alt="" />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <p>{product.category}</p>
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ProductDetails