import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelves from './BookShelves'

export default class BookGallery extends Component{
    state = {
        books:[]
    }
    updateShelf = (bookname,newShelfName)=>{
        console.log('Hello from update shelf');
    }
    componentDidMount(){
        // return promise, and want to acces ourbooks 
        /*
        note this is asynchronous method 
        */
        BooksAPI.getAll().then((ourbooks)=>{
        this.setState((currentSate)=>({
            books: [...currentSate.books,...ourbooks.map((book)=>(
                {title:book.title,Authors:book.authors,
                    Image:book.imageLinks.thumbnail,shelf:book.shelf}
            )) ]
        }))
        
    })
    }

    render() {
        return (
            // <h1>Hello from gallery</h1>
            <BookShelves Books={this.state.books} updateShelf={this.updateShelf}/>
        )
    }

}
