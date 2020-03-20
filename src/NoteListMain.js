import React from 'react'
import { Link } from 'react-router-dom'
import Note from  './Note'
import CircleButton from './CircleButton'
import './CircleButton.css'

export default function NoteListMain(props) {
    return (
        <section className='noteListMain'>
            <ul>
                <p>NOTE LIST MAIN COMPONENT</p>
                {props.notes.map(note =>
                    <li key={note.id}>
                        <Note
                            id={note.id}
                            name={note.name}
                            modified={note.modified}
                        />
                    </li>
                )}
            </ul>
            <div>
                <CircleButton
                    tag={Link}
                    to='/add-note'
                    >
                    Add Note
                 </CircleButton>
            </div>
        </section>
    )
}

NoteListMain.defaultProps = {
    notes: [],
}