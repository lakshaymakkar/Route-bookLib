import React from 'react'
import { connect } from 'react-redux'


class Child extends React.Component{
  constructor(props){
    super(props);
  }

  render()
  {
    const id= this.props.match.params.bookval;
    return(
      <div>
        {this.props.data.books[id].title}
        {this.props.data.books[id].author}
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
    return { data : state.bookReducer }
}

export default connect(mapStateToProps)(Child);
