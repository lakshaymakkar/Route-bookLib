import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../../actions/bookActions';
import { bindActionCreators } from 'redux'
import { Child } from './child'
import { Link } from 'react-router-dom'

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '' ,
          bauthor :''
        }
        this.submitBook  = this.submitBook.bind(this)
        this.titleChange = this.titleChange.bind(this)
        this.authorChange = this.authorChange.bind(this)
        this.renderBooks  = this.renderBooks.bind(this)
    }

    titleChange(e) {
        this.setState({title: e.target.value})
    }

    authorChange(e) {
        this.setState({bauthor: e.target.value})
    }

    submitBook() {
        this.props.createBook(this.state);
    }

    renderBooks(){
      const books = this.props.data.books
      return Object.keys(books).map((key) => {
        return (
          <li key={key}>
            <Link to= {`/books/${key}`} >{books[key].title}</Link>
          </li>
        )
      })
    }

    render() {
        return (
            <div>
                <h3>Books</h3>
                <ul>
                    {/*this.props.books.map((i) => <li key={i}>{i}</li>)*/}
                    {this.renderBooks()}
                </ul>
                <div>
                    <h3>Books Form</h3>
                    <h5>Title</h5>
                    <input placeholder='Title' value={this.state.title} type="text" name="title" onChange={this.titleChange}/>
                    <h5>Author</h5>
                    <input placeholder='Author' value={this.state.bauthor} type="text" name="author" onChange={this.authorChange}/>
                    <button onClick={this.submitBook}> submit</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.bookReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({createBook}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
