import React, { useContext } from 'react'
import { productContext } from '../context/ProductContext'

function Product() {

  let {products,setProducts}=useContext(productContext)

  return (


    <>
      <section id='products'>
        {/* <hr style={{width:"5%"}} /> */}
        <h2 style={{ textAlign: "center" }}>
          Featured Products
        </h2>
        <div className='products contain'>
          {
            products.map(product =>
              <div className='product'>
                <img src={product.image} alt="" />
                <div className='product-title'>
                  <p>
                    {product.name}
                  </p>
                  <p>
                    {product.title}
                  </p>
                  <p>
                    <b>{product.price}$</b>
                  </p>
                </div>
              </div>
            )
          }
        </div>
      </section>
    </>
  )
}

export default Product
