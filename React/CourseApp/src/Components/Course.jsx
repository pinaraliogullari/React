import React from 'react'

const Course = ({ course }) => {

    const { id, title, description, price, link, image } = course; //destructuring. eğer bunu yapmazsak kullanacağımız yerlerde course.id, course.title vs dememiz gerekir.
    return (
        <div className='course'>
            <img src={image} width={250} height={150} />
            <h4 className='course-title'>{title}</h4>
            <p className='course-desc'>{description}</p>
            <h3 className='course-price'>{price} ₺</h3>
            <div className='course-link'><a style={{ textDecoration: 'none' }} href={link}>Satın almak için</a></div>
        </div>
    )
}

export default Course