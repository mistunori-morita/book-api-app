import React from 'react'
import Book from './book';

const BooksContainer = (props) => {
  let books = [1,2,3,4,5]

  
  return (
    <div className='books-container'>
    <Book />
    <Book />
    <Book />
  </div>
  )
}

export default BooksContainer
