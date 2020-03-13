import React from 'react'
import { Link } from 'react-router-dom'


export default function Note(props) {
  return (
    <div className='noteComponent'>
      <p>NOTE COMPONENT</p>
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