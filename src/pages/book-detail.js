import React, {Component} from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import BookDetail from '../components/books-detail/book-detail';

class BookDetailPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      book: {},
      isLoading: true,
    }
  }
  render(){
    return (
      <div className="has-fixed-footer">
        <Header />
        {this.state.isLoading
          ?
          <p>.....isLoading</p>
          :
          <BookDetail book={this.state.book}/>
        }
          <Footer />
      </div>
    )
  }
}

export default BookDetailPage
