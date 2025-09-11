import React from 'react'
import Button from './Button'


const Main = () => {
  return (
    <>
    
      <div className='container'>
        <div className='pt-5 text-center bg-light-dark rounded'>
          <h1 className='text-light'>Welcome to Stock Prediction</h1>
          <p className='text-secondary lead'>Get started by registering an account</p>
          <Button text = '' class="btn btn-lg btn-outline-info" url = "/login" />
        </div>
      </div>

    </>

  )
}

export default Main
