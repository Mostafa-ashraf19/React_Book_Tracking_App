import React, {Component} from 'react'
import './App.css'
// each component should have a root

export default class Book extends Component {
    handleSelection = (e)=>{
      if(e.target.value !== this.props.BookInfo.shelf)
          {
            this.props.ChangeShelf({id:this.props.BookInfo.id},e.target.value);    
            this.setState({bookShelf:e.target.value})
        }
    }
    state = {
        bookShelf:this.props.BookInfo.shelf,
        id:this.props.BookInfo.id
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


