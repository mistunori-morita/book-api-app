import React from 'react'

const BookDetail = () => {
  return (
<section id='book-detail'>
          <div className='container'>
            <div className='book-container'>
              <div className='book-img'>
                <img src='' alt='' />
              </div>

              <div className='book-info'>
                <div className='book-title'>
                  <h1>Book title</h1>
                </div>
                <div className='book-author'>
                  <h3>Book Author</h3>
                </div>
                <div className='book-description'>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae harum perspiciatis tenetur, ex odit
                    quod placeat, ab saepe quasi nulla quia, magni pariatur quibusdam provident quisquam laboriosam fuga nisi
                    a.</p>
                </div>
              </div>

              <div className='book-review-container'>
                <div className='book-stars'>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className='book-review'>
                  (11)
                </div>
              </div>

            </div>
          </div>
        </section>
  )
}

export default BookDetail
