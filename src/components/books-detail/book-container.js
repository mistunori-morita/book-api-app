import React from 'react'
import BookInfo from './book-info';
import BookReviewContainer from './book-review-container';

const BookContainer = () => {
  return (
    <div className='book-container'>
      <div className='book-img'>
        <img src='' alt='' />
      </div>
      <BookInfo />
      <BookReviewContainer />
    </div>
  )
}

export default BookContainer
