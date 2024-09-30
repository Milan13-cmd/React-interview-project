import React, { useEffect, useState } from 'react'
import {BsArrowRightCircleFill, BsArrowLeftCircleFill} from 'react-icons/bs'
import './style.css'

const ImageSlider = ({url, limit= 5, page= 1}) => {
  
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errormsg, setErrorMsg] = useState(null);


  async function fetchImages(getUrl){
    try{
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      
      if(data){
        setImages(data);
        setLoading(false);
      }
    }
    catch(error){
      setErrorMsg(error.message);
      setLoading(false)
    }
  }
   
  function handlePrevious(){
    setCurrentSlide(currentSlide === 0 ? images.length-1  : currentSlide - 1)
  }

  function handleNext(){
    setCurrentSlide(currentSlide === images.length-1 ? 0: currentSlide + 1)
  }


  useEffect(() => {
   if(url !== '') fetchImages(url);
  }, [url])

  console.log(images)

  if(loading){
    return <div className="loading">Loading...</div>
  }

  if(errormsg !== null){
    return <div>Error ocuured {errormsg}</div>
  }

  return (
    <div className='container'>
      <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left'/>
        {
          images && images.length ? 
          images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.author}
              className={currentSlide === index ? 'current-image' : 'current-image hide-image'}
            />
          ))
          : null
        }
        <BsArrowRightCircleFill onClick={ handleNext} className='arrow arrow-right'/>
        <span className='circle-indicators'>
          {
            images && images.length ? 
             images.map((_, index) => (
              <button
              key={index}
              className={currentSlide === index ? 'current-indicator': ' current-indicator inactive-indicator' }
              onClick={() => setCurrentSlide(index)}
              >
              </button>
             ))
            : null
          }
        </span>
    </div>
  )
}

export default ImageSlider