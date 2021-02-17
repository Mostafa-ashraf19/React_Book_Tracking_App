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
      if(LookupTable[e.target.value] !== LookupTable[this.props.BookInfo.shelf])
          {this.props.ChangeShelf(LookupTable[e.target.value]);    
            console.log('value is ',LookupTable[e.target.value]);}
    }
    render(){
    const {title,Authors,Image} = this.props.BookInfo;
    return (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${Image})` }}></div>
            <div className="book-shelf-changer">
                <select onChange={this.handleSelection}>
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


