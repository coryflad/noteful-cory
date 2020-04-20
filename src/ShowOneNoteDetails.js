import React from 'react'
import { Link } from 'react-router-dom'
import NotefulContext from './NotefulContext'
import config from './config'

class ShowOneNoteDetails extends React.Component {

  static contextType = NotefulContext

  static defaultProps = {
    onDeleteNote: () => {}
  }

  handleClickDelete = e => {
    e.preventDefault()
    const noteId = this.props.id

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        console.log('hello')
        // this.context.onDeleteNote(noteId)
        this.props.onDeleteNote(noteId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {

    const { name, id, modified } = this.props
    return (
      <div className='noteComponent'>
        <p>Show One Note Details</p>
        <h2>
          <Link to={`/note/${id}`}>
            {name}
          </Link>
        </h2>
        <button 
        type='button'
        onClick={this.handleClickDelete}
        >
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