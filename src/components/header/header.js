import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <header id='header'>
        <div className='container'>
          <nav>
            <NavLink to='/' className="logo"><i className="fas fa-book-open"></i></NavLink>
            <ul className="categories">
              <li className="active"><a to='/books/category/HTML'>HTML</a></li>
              <li><NavLink to='/books/category/CSS'>CSS</NavLink></li>
              <li><NavLink to='/books/category/JavaScript'>JavaScript</NavLink></li>
              <li><NavLink to='/books/category/React'>React</NavLink></li>
              <li><NavLink to='/books/category/NodeJs'>NodeJs</NavLink></li>
            </ul>
          </nav>
        </div>
    </header>
  )
}

export default Header
