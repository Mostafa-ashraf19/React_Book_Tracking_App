// import { array } from 'prop-types'
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
        // searchBooks:[]
    }
    updateShelf = async (book,newShelfName)=>{
        
        // console.log('Hello from update shelf');
        // console.log('Book id from updateShelf is',book);
        // const vals =  await BooksAPI.update(book,newShelfName)
        await BooksAPI.update(book,newShelfName)
        // return vals
        // this.setState((currentState)=>{
        //     let temp = Object.assign({},currentState.books)
        //     temp.update = !temp.update
        //     temp.BookList.pop()
        //     return temp;
        //     // update:{...currentState.books
        //     //     ,update:!currentState.state.books.update},
        //  })
        // this.forceUpdate();
        // this.setState(this.state)
        // console.log('my state is',this.state)
        // console.log('updated books is', vals)

    }
    componentDidMount(){
        // return promise, and want to acces ourbooks 
        /*
        note this is asynchronous method 
        */
        BooksAPI.getAll().then((ourbooks)=>{
            // console.log('getted books is ',ourbooks)
        this.setState((currentSate)=>({
            books: {...currentSate.books,BookList:[...currentSate.books.BookList,...ourbooks.map((book)=>(
                {title:book.title,Authors:(!book.authors)?[]:book.authors,
                    Image:book.imageLinks.thumbnail,shelf:book.shelf,id:book.id}
            )) ]}
        }))
       
        
    })
    }
     _find = async (query) =>{
        //  console.log('hi')
             const resolvedProm = await BooksAPI.search(query);
            //  console.log('resolvedProm  from _find befor edit is len is', resolvedProm.length);
             if(Array.isArray(resolvedProm)){   
             const books =  resolvedProm.map((book)=>{
                try {
                    return {title:book.title,Authors:(!book.authors)?[]:book.authors,
                        Image:book.imageLinks.thumbnail,id:book.id}
                }
                catch{
                    return {title:'',Authors:[],
                        Image:'',id:''}
                }
             }
            ).filter((book)=>book.title !== '')
            //  console.log('retuned from _find books after edit is', books);

            return books
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
