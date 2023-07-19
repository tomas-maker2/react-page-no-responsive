import React from 'react'
import './list.css'
import Card from '../Card/Card'

const List = () => {

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
    <div className="list">
        {
            data.map(item => (
                <Card item={item} key={item.id}/>
            ))
        }
    </div>
  )
}

export default List