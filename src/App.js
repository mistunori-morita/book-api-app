import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BooksSectionPage from './pages/books-section';
import BookDetailPage from './pages/book-detail';
import PageNotFound from './pages/page-not-found';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={BooksSectionPage}/>
          <Route path="/books/category/:categoryName" exact render={(props) => {
            return <BooksSectionPage categoryName={props.match.params.categoryName} />}
            }/>
          <Route path="/book/:bookId" component={BookDetailPage}/>
          <Route component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
