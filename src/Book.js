import React, {Component} from 'react'
import './App.css'
// each component should have a root

const LookupTable = {
    'currentlyReading':1,
    'wantToRead':2,
    'read':3,
    'none':4
};
export default class Book extends Component {
    handleSelection = (e)=>{
    //   if(LookupTable[e.target.value] !== LookupTable[this.props.BookInfo.shelf])
      if(e.target.value !== this.props.BookInfo.shelf)
          {
            this.props.ChangeShelf(LookupTable[e.target.value]);    
            console.log('new shelf is ',e.target.value);
            this.setState({bookShelf:e.target.value})
            console.log('current shelf is ',this.props.BookInfo.shelf);
            console.log('Book title', this.props.BookInfo.title)
        }
    }
    state = {
        bookShelf:this.props.BookInfo.shelf
    }
    updateShelf = (_NShelf) => {
        this.setState({bookShelf:_NShelf})   
    }
    render(){
    const {title,Authors,Image} = this.props.BookInfo;
    return (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${Image})` }}></div>
            <div className="book-shelf-changer">
                <select value={this.state.bookShelf} onChange={this.handleSelection}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{Authors.map((author)=>(<span key={author}>{author}, </span>))}</div>
       
        </div>
    );
  }
}


