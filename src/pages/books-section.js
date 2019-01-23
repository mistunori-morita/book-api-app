import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import BooksSection from '../components/books-section/books-section'

const BooksSectionPage = () => {
  return (
    <div className="has-fixed-footer">
      <Header />
        <BooksSection />
      <Footer />
    </div>
    
  )
}

export default BooksSectionPage
