import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelves from './BookShelves'
import Search from './Search'


export default class BookGallery extends Component{
    state = {
        books:[]
        // searchBooks:[]
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
                {title:book.title,Authors:(!book.authors)?[]:book.authors,
                    Image:book.imageLinks.thumbnail,shelf:book.shelf}
            )) ]
        }))
       
        
    })
    }
    _find = (query) =>{
        // const resolvedProm = BooksAPI.search(query);
        // const books = resolvedProm.then(ourbooks => {
        //     console.log('returned our books is', ourbooks)
        //     return ourbooks

        // })
         BooksAPI.search(query).then((ourbooks)=>{
            console.log('returned our books is', ourbooks)
        })
    }
    render() {
        
        return  this.props.search? (
            
            <Search FindQ={this._find} updateShelf={this.updateShelf}/>     

        ) :
            (            
            <BookShelves Books={this.state.books} updateShelf={this.updateShelf}/>
            )
        
    }

}
