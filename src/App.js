import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BooksSection from './pages/books-section';
import BookDetail from './pages/book-detail';
import PageNotFound from './pages/page-not-found';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={BooksSection}/>
          <Route path="/books/category/:categoryName" exact component={BooksSection}/>
          <Route path="/book/:bookId" component={BookDetail}/>
          <Route component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
