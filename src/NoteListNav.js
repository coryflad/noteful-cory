import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { countNotesForFolder } from './notes-helpers'

function NoteListNav(props) {
    return (
        <div className='noteList'>
            <ul>
                <p>NOTE LIST NAV</p>
                <p>Folders: </p>
                {props.folders.map(folder =>
                    <li key={folder.id}>
                        <NavLink
                            to={`/folder/${folder.id}`}
                        >
                            <span>
                                {countNotesForFolder(props.notes, folder.id)}
                            </span>
                            {folder.name}
                        </NavLink>
                    </li>)}
            </ul>
            <div>
                <button
                    tag={Link}
                    to='./add-folder'
                    type='button'
                >
                    Add Folder
                </button>
            </div>
        </div>
    )
}

export default NoteListNav