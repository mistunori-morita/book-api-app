import React from 'react'

const BooksSection = () => {
  return (
    <section id='books-section'>
    <div className='container'>
      <div className='section-title'>
        <h1>HTML Books</h1>
      </div>

      <div className='books-container'>
        <div className='book'>
          <div className='book-img'>
            <img src='' alt='' />
          </div>
          <div className='book-info'>
            <div className='book-title'>
              <h3>Book title</h3>
            </div>
            <div className='book-author'>
              <p>By <em>Author</em></p>
            </div>
            <div className='book-call-to-action'>
              <button className="btn btn-highlight">詳細</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BooksSection
