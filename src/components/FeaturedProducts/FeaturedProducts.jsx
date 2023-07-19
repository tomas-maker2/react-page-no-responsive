import React from 'react'
import './featuredProducts.css'
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id:1,
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice:19,
            price:12,
            img:"https://con-actitud.com.ar/wp-content/uploads/2021/05/let-it.jpg",
            img2:"https://con-actitud.com.ar/wp-content/uploads/2021/05/2-2.jpg",
        },
        {
            id:2,
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice:19,
            price:12,
            img:"https://con-actitud.com.ar/wp-content/uploads/2021/05/let-it.jpg",
            img2:"https://con-actitud.com.ar/wp-content/uploads/2021/05/2-2.jpg",
        },
        {
            id:3,
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice:19,
            price:12,
            img:"https://con-actitud.com.ar/wp-content/uploads/2021/05/let-it.jpg",
            img2:"https://con-actitud.com.ar/wp-content/uploads/2021/05/2-2.jpg",
        },
        {
            id:4,
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice:19,
            price:12,
            img:"https://con-actitud.com.ar/wp-content/uploads/2021/05/let-it.jpg",
            img2:"https://con-actitud.com.ar/wp-content/uploads/2021/05/2-2.jpg",
        }
    ]
    
  return (
    <div className="featuredProducts">
        <div className="top">
            <h1>{type} products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quasi at harum eveniet impedit est ullam accusamus, dolore earum, eum fugiat ab, nostrum architecto! Maiores, sit ipsum ex suscipit amet, expedita necessitatibus repudiandae totam harum voluptatum excepturi, at deserunt officiis!</p>
        </div>
        <div className="bottom">
            {
                data.map(item => (
                    <Card item={item} key={item.id}/>
                ))
            }
        </div>
    </div>
  )
}

export default FeaturedProducts