import React from 'react'
import Note from './Note'

export default function NotePageMain(props) {
  return (
    <section>
      <Note
        id={props.note.id}
        name={props.note.name}
        modified={props.note.modified}
      />
      <div className='paragraph'>
        {props.note.content.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>
            PARAGRAPH COMPONENT: 
            {para}</p>
        )}
      </div>
    </section>
  )
}

NotePageMain.defaultProps = {
  note: {
    content: '',
  }
}