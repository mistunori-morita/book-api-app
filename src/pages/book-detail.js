import React, {Component} from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import BookDetail from '../components/books-detail/book-detail';
import axios from 'axios'


class BookDetailPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      book: {},
      isLoading: true,
    }
  }

  componentDidMount(){
    axios
      .get("https://www.googleapis.com/books/v1/volumes/" + this.props.bookId)
      .then(response => {
        console.log(response)
        this.setState({
          isLoading: false,
          book: response.data
        })
      })
      .catch(error => {
        console.log(error);
      })
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
