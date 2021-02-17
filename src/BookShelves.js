import React, {Component} from 'react'
import Shelf from './Shelf'

export default class BookShelves extends Component{
    shelvesNames = [{'currentlyReading':'Currently Reading'},
    {'wantToRead':'Want To Read'},{'read':'Read'}];

    filterByShelf = (shelfname) => (
        this.props.Books.filter((book)=>(
            book.shelf === shelfname
        ))
    );

    render(){
        return (
            <div>
                {
                    this.shelvesNames.map((name) => (
                        <Shelf key={Object.keys(name)[0]} shelfTitle={name[Object.keys(name)[0]]} changeShelf={this.props.updateShelf} booksList={this.filterByShelf(Object.keys(name)[0])} /> 
                    ))
                }
            </div>
        )
    }
} 
