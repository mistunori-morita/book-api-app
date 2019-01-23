import React, { Component } from 'react';
import BooksSection from './pages/books-section';
import BookDetail from './pages/book-detail';
import PageNotFound from './pages/page-not-found';

class App extends Component {
  render() {
    return (
      <div classNameName="App">
        {/* <BooksSection /> */}
        {/* <BookDetail /> */}
        <PageNotFound />
      </div>
    );
  }
}

export default App;
