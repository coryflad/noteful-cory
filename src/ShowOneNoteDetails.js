import React from 'react'
import { Link } from 'react-router-dom'


export default function ShowOneNoteDetails(props) {
  return (
    <div className='noteComponent'>
      <p>Show One Note Details</p>
      <h2>
        <Link to={`/note/${props.id}`}>
          {props.name}
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
            {(props.modified)}
          </span>
        </div>
      </div>
    </div>
  )
}