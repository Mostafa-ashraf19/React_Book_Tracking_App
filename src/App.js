import React from 'react'
import './App.css'
import BookGallery from './BookGallery'
import {Route,Link} from 'react-router-dom'

class BooksApp extends React.Component {
  
  render() {
    return (
      <div className="app">

        <Route exact path='/' render={()=>(
            
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                      <BookGallery  search={false}/>
                  </div>
                </div>
                <div className="open-search">
                  <Link id='Search' to='/Search'>Add a book</Link>                  
                </div>
              </div>

        )}/>

        <Route exact path='/Search'>
          <BookGallery  search={true}/>
        </Route>


        
      </div>
    )
  }
}

export default BooksApp
