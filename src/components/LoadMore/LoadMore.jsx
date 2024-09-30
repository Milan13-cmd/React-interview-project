import React, { useEffect, useState } from 'react'
import './style.css'

const LoadMoreData = () => {

  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ disableButton, setDisableButton] = useState(false);

  async function fetchProducts(){
    try{
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
        const data = await response.json();

        if(data && data.products.length && data.products){
          setProducts([...products, ...data.products])
          setLoading(false)
        }
        console.log(data);
    }
    catch(e){
      setLoading(false)
      console.log(e)
    }
  }

  useEffect(() =>{
     fetchProducts()
  }, [count])

  useEffect(() => {
    if(products.length >= 100) setDisableButton(true);
  }, [products])

  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div className='container'>
      <div className='product-container'>
        {
          products && products.length ?
          products.map((item) =>(
            <div key={item.id}  className='product-card'>
              <img src={item.thumbnail}
              style={{
                width: '100px',
                height: '100px',
              }}/>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          ))
          
          :null
        }
      </div>
      <div className='button-container'> 
      <button disabled={disableButton} onClick={() => setCount( count +1)}>Load More Products</button>
      {
        disableButton ? <p>You have reach  the end of the products</p> : null

      }
      </div>
    </div>
  )
}

export default LoadMoreData