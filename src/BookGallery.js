import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

export default class BookGallery extends Component{
    state = {
        books:[]
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
        console.log('books in state ',this.state.books)
    })
    }
    render() {
        return (
            <h1>Hello from gallery</h1>
        )
    }

}
