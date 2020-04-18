import React from 'react'
import { Link } from 'react-router-dom'
import ShowOneNoteDetails from './ShowOneNoteDetails'
import CircleButton from './CircleButton'
import NotefulContext from './NotefulContext'
import { getNotesForFolder } from './notes-helpers'
import './CircleButton.css'

class ShowNotesForFolder extends React.Component {

    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = NotefulContext

    render() {
        const { folderId } = this.props.match.params
        const { notes = [] } = this.context
        const notesForFolder = getNotesForFolder(notes, folderId)

        return (
            <section className='showNotes'>
                <ul>
                    <p>SHOW NOTES FOR FOLDER</p>
                    {notesForFolder.map(note =>
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

}

export default ShowNotesForFolder