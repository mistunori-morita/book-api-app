import React, { Component } from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import BooksSection from './pages/books-section';
import BookDetail from './pages/book-detail';
import PageNotFound from './pages/page-not-found';

class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <Header />
        <BooksSection />
        <BookDetail />
        <Footer />
        <PageNotFound />
      </div>
    );
  }
}

export default App;
