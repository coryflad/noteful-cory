import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { countNotesForFolder } from './notes-helpers'
import CircleButton from './CircleButton'

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
                <CircleButton
                    tag={Link}
                    to='/add-folder'
                >
                    Add Folder
                </CircleButton>
            </div>
        </div>
    )
}

export default NoteListNav