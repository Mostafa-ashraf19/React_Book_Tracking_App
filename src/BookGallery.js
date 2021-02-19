import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelves from './BookShelves'
import Search from './Search'


export default class BookGallery extends Component{
    state = {
        books:{
           BookList: [],
        update:false
    }
    }
    updateShelf = async (book,newShelfName)=>{
        const retVal = await BooksAPI.update(book,newShelfName);
        this.setState((currentState)=>{
            const TempBooks = currentState.books;
            TempBooks.BookList = TempBooks.BookList.map((Currentbook)=>{
                if(Currentbook.id === book.id ){Currentbook.shelf = newShelfName}
                return Currentbook
            })
            return {books:TempBooks}
        })   
        return retVal
    }
    componentDidMount(){
        // return promise, and want to acces ourbooks 
        /*
        note this is asynchronous method 
        */
        BooksAPI.getAll().then((ourbooks)=>{
        this.setState((currentSate)=>({
            books: {...currentSate.books,BookList:[...currentSate.books.BookList,...ourbooks.map((book)=>(
                {title:book.title,Authors:(!book.authors)?[]:book.authors,
                    Image:book.imageLinks.thumbnail,shelf:book.shelf,id:book.id}
            )) ]}
        }))
       
        
    })
    }
    _checkBookExists = (id)=> {
        return this.state.books.BookList.some((book)=>{
            return book.id === id
        })
    }
     _find = async (query) =>{
             const resolvedProm = await BooksAPI.search(query);
             if(Array.isArray(resolvedProm)){   
             const returnedBooks =  resolvedProm.map((book)=>{
                try {
                    if(this._checkBookExists(book.id)){
                    return {title:book.title,Authors:(!book.authors)?[]:book.authors,
                        Image:book.imageLinks.thumbnail,id:book.id,shelf:this.state.books.BookList.filter((_book)=>(
                            _book.id  === book.id      
                        ))[0].shelf} 

                    }
                    else {

                        return {title:book.title,Authors:(!book.authors)?[]:book.authors,
                            Image:book.imageLinks.thumbnail,id:book.id,shelf:'none'}
                    }
                }
                catch{
                    return {title:'',Authors:[],
                        Image:'',id:''}
                }
             }
            ).filter((book)=>book.title !== '')
            return returnedBooks
        }

            return []
           
    }
    
    render() {
        
        return  this.props.search? (
            
            <Search FindQ={this._find} updateShelf={this.updateShelf}/>     

        ) :
            (            
            <BookShelves Books={this.state.books.BookList} updateShelf={this.updateShelf}/>
            )
        
    }

}
