import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import BooksSection from '../components/books-section/books-section'

const BooksSectionPage = (props) => {
  let books = [1,2,3,4,5]
  return (
    <div className="has-fixed-footer">
      <Header />
        <BooksSection title={props.categoryName} books={books}/>
      <Footer />
    </div>
    
  )
}

BooksSectionPage.defaultProps = {
  categoryName: 'HTML'
}

export default BooksSectionPage
