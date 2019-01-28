import React from 'react'
import Book from './book';

const BooksContainer = (props) => {
  return (
    <div className='books-container'>
    {props.books.map((item, index) => {
      return (
        <Book book={item} key={index} />
      )
    })}
   </div>
  )
}

export default BooksContainer
