import React from 'react'
import ShowOneNoteDetails from './ShowOneNoteDetails'
import NotefulContext from './NotefulContext'
import { findNote } from './notes-helpers'
import CircleButton from './CircleButton'

class ShowOneNote extends React.Component {

  static defaultProps = {
    match: {
      params: {}
    }
  }
  
  static contextType = NotefulContext

  render() {
    const { notes = [] } = this.context
    const { noteId } = this.props.match.params
    const note = findNote(notes, noteId) || { content: '' }
    return (
      <section>
        <h2>SHOW ONE NOTE</h2>
        <ShowOneNoteDetails
          id={note.id}
          name={note.name}
          modified={note.modified}
          
        />
        <div className='paragraph'>
          {note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>PARAGRAPH COMPONENT: {para} </p>
          )}
        </div>
        <CircleButton
          tag='button'
          role='link'
          onClick={() => this.props.history.goBack()}>
          Go Back
        </CircleButton>
      </section>
    )
  }
}

ShowOneNote.defaultProps = {
  note: {
    content: '',
  },
  history: {
    goBack: () => { }
  }
}

export default ShowOneNote