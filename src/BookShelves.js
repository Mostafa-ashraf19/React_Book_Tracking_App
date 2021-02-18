import React, {Component} from 'react'
import Shelf from './Shelf'

export default class BookShelves extends Component{
    shelvesNames = [{'currentlyReading':'Currently Reading'},
    {'wantToRead':'Want To Read'},{'read':'Read'},{'none':'None'}];

    filterByShelf = (shelfname) => (
        this.props.Books.filter((book)=>(
            book.shelf === shelfname
        ))
    );
    _handleShelves(name){
        const books = this.filterByShelf(Object.keys(name)[0])
        if(books.length > 0)
            return <Shelf key={Object.keys(name)[0]} shelfTitle={name[Object.keys(name)[0]]} changeShelf={this.props.updateShelf} booksList={books} />         
    }
    render(){
        return (
            <div>
                {
                    
                this.shelvesNames.map(name => this._handleShelves(name))

                // when use a method down, it's give me warning, WHY?? --> 1st
                // thanks for helping but I'm put from 27 to 31 into {} give me error!! ---> 2nd
                // this.shelvesNames.map(shelfName => {
                //             const books = this.filterByShelf(Object.keys(shelfName)[0])
                //             if(books.length > 0)
                //               return <Shelf key={Object.keys(shelfName)[0]} shelfTitle={shelfName[Object.keys(shelfName)[0]]} changeShelf={this.props.updateShelf} booksList={books} />  
                //   })
                
                }
            </div>
        )
    }
} 
