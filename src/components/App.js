import React  from 'react'
import { Link } from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
        <div>
            <Link to = '/books'>Go to books</Link>
            <Link to = '/about'>Go to about</Link>
            <p>Hello</p>
        </div>
    )
  }
}

export default App
