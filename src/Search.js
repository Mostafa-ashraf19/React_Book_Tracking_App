import React, {Component} from 'react'
// import BookGallery from './BookGallery'
import {Link} from 'react-router-dom'
import BookShelves from './BookShelves'

export default class Search extends Component {
    state = {
        query:'',
        books: []
    }
    handleQuery = (e)=>{
        /*
        Mynote:
        state is asychronous method so if you print new state after update you will see still not updated,
        so you should use some thing like this to check your new value.
        this.setState(()=>({query:query.trim()}),() => {console.log('new q is ', this.state.query);});
        it's really amazing!!
        Link: https://stackoverflow.com/questions/53129899/state-not-updating-when-printing-on-same-function-where-updating-in-react-js
        */
        
    //     this.setState({query:e.target.value},(()=>{
    //     // console.log('query is ',this.state.query)
    //     // console('props is', props)
    // //    this.setState({books:this.props.FindQ(this.state.query)}) 
    //         this.updatebooks()
    //     }))
    
    this.setState({query:e.target.value},this.updatebooks)
    }
    updatebooks(){
        console.log('props is', this.props)

        this.setState({books:this.props.FindQ(this.state.query)}) 

        
    }
    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">      
                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleQuery}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                <BookShelves Books={this.state.books} updateShelf={this.props.updateShelf}/>
              </ol>
            </div>
          </div>
        )
    }
}