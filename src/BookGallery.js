// import { array } from 'prop-types'
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
     _find = async (query) =>{
             const resolvedProm = await BooksAPI.search(query);
            //  console.log('resolvedProm  is', resolvedProm);
             if(Array.isArray(resolvedProm)){   
             const books = resolvedProm.map((book)=>{
                  return    {title:'',Authors:'',
                      Image:'',sheelf:''}
                // if( !book .title || !book.authors || !book.imageLinks.thumbnail ){
                //  return {title:book.title,Authors:(!book.authors)?[]:book.authors,
                //      Image:book.imageLinks.thumbnail,sheelf:'read'}
                //  }
                // return  {title:'',Authors:'',
                //     Image:'',sheelf:''}
             }
            )
             console.log('retuned books is', books);

            return books
        }

            return []
            //  console.log('Books  is', books);
        // async ()={ 
        // const books = resolvedProm.then(ourbooks => {
        //     console.log('returned our books is', ourbooks)
        //     return ourbooks

        // })
        //  BooksAPI.search(query).then((ourbooks)=>{
        //     console.log('returned our books is', ourbooks)
        // })
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
