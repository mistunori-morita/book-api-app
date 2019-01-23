import React, { Component } from 'react';
import BooksSection from './pages/books-section';
import BookDetail from './pages/book-detail';
import PageNotFound from './pages/page-not-found';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={BooksSection}/>
          <Route path="/book/category/:categoryName" exact component={BooksSection}/>
          <Route path="/books/:bookId" component={BookDetail}/>
          <Route component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
