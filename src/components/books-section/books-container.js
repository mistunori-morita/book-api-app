import React from 'react'
import Book from './book';

const BooksContainer = (props) => {
  let books = [1,2]


  return (
    <div className='books-container'>
    {books.map((item, index) => {
      return (
        <Book key={index} />
      )
    })}
   </div>
  )
}

export default BooksContainer
