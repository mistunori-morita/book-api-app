import React, {Component} from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import BooksSection from '../components/books-section/books-section'

class BooksSectionPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      books: [],
      isLoading: true
    }
  }


  render(){
    if(this.state.isLoading){
      return <p>Loading ....</p>
    }else{
      return (
        <div className="has-fixed-footer">
          <Header />
            <BooksSection title={this.props.categoryName} books={this.state.books}/>
          <Footer />
        </div>
      )
    }
  }
}

BooksSectionPage.defaultProps = {
  categoryName: 'HTML'
}

export default BooksSectionPage
