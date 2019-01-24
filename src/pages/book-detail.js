import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import BookDetail from '../components/books-detail/book-detail';

const BookDetailPage = () => {
  return (
    <div className="has-fixed-footer">
      <Header />
        <BookDetail/>
        <Footer />
    </div>
  )
}

export default BookDetailPage
