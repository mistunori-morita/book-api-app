import React from 'react'
import BookContainer from './book-container';

const BookDetail = (props) => {
  return (
    <section id='book-detail'>
    <div className='container'>
      <BookContainer book={props.book}/>
    </div>
  </section>
  )
}

export default BookDetail
