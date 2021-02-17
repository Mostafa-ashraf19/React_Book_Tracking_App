import React, {Component} from 'react'
import './App.css'
// each component should have a root
/*
Book sample

<div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">To Kill a Mockingbird</div>
                          <div className="book-authors">Harper Lee</div>
                        </div>

*/
const LookupTable = {
    'currentlyReading':1,
    'wantToRead':2,
    'read':3,
    'none':4
};
class Book extends Component {
    
    handleSelection = (e)=>{
            console.log('value is ',LookupTable[e.target.value]);
        // this.props.ChangeStatus(LookupTable[e.target.value]);    
    }
    render(){
    const {title,Author,Image,Categoriy,Status} = this.props.info 
        
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
            <div className="book-authors">{Author}</div>
        </div>
    );}
}


export default Book;


// export default class Book extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             Name:'',
//             Author:'',
//             Categoriy:'',
//             Breif:'',


//         }
//     }
// }