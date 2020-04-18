import React from 'react'
import { Link } from 'react-router-dom'
import NotefulContext from './NotefulContext'

class ShowOneNoteDetails extends React.Component {
  
  static contextType = NotefulContext

  render() {
    
    const { name, id, modified } = this.props
    console.log(this.context) 
    return (
      <div className='noteComponent'>
        <p>Show One Note Details</p>
        <h2>
          <Link to={`/note/${id}`}>
            {name}
          </Link>
        </h2>
        <button type='button'>
          {' '}
          remove
        </button>
        <div>
          <div>
            Modified:
            {' '}
            <span>
              {modified}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowOneNoteDetails