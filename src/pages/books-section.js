import React, {Component} from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import BooksSection from '../components/books-section/books-section'
import axios from 'axios'
class BooksSectionPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      books: [],
      isLoading: true
    }
  }

  componentDidMount(){
    axios
      .get("")
      .then(response =>{
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }


  render(){
    return (
      <div className="has-fixed-footer">
        <Header />
        {this.state.isLoading ?
          <p>is Loading.....</p> :
          <BooksSection title={this.props.categoryName} books={this.state.books}/>
        }
        <Footer />
      </div>
    )
  }
}

BooksSectionPage.defaultProps = {
  categoryName: 'HTML'
}

export default BooksSectionPage
