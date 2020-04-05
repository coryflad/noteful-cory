import React from 'react'
import Note from './ShowOneNoteDetails'

export default function ShowOneNote(props) {
  return (
    <section>
      <h2>SHOW ONE NOTE</h2>
      <Note
        id={props.note.id}
        name={props.note.name}
        modified={props.note.modified}
      />
      <div className='paragraph'>
        {props.note.content.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>PARAGRAPH COMPONENT: {para} </p>
        )}
      </div>
    </section>
  )
}

ShowOneNote.defaultProps = {
  note: {
    content: '',
  }
}