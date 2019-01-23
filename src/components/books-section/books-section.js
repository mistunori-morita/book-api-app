import React from 'react'
import BooksContainer from './books-container';

const BooksSection = () => {
  return (
    <section id='books-section'>
    <div className='container'>
      <div className='section-title'>
        <h1>HTML Books</h1>
      </div>

     <BooksContainer />
    </div>
  </section>
  )
}

export default BooksSection
