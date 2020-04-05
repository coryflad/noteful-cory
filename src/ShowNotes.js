import React from 'react'
import { Link } from 'react-router-dom'
import ShowOneNoteDetails from  './ShowOneNoteDetails'
import CircleButton from './CircleButton'
import './CircleButton.css'

export default function ShowNotes(props) {
    return (
        <section className='showNotes'>
            <ul>
                <p>SHOW NOTES</p>
                {props.notes.map(note =>
                    <li key={note.id}>
                        <ShowOneNoteDetails
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

ShowNotes.defaultProps = {
    notes: [],
}