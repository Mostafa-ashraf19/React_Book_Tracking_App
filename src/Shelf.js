import React from 'react'
import Book from './Book'
import './App.css'

const Shelf = (props)=>{
    const {shelfTitle,booksList,changeShelf} = props;
    return (    
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {booksList.map((book)=>(
                        <li key={book.title}> 
                            <Book BookInfo={book} ChangeShelf={changeShelf}/> 
                        </li>   
                    ))}
                </ol>
                </div>
            </div>  
    );
}
export default Shelf;