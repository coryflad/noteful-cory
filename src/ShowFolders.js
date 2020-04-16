import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { countNotesForFolder } from './notes-helpers'
import CircleButton from './CircleButton'
import NotefulContext from './NotefulContext'

class ShowFolders extends React.Component {

    static contextType = NotefulContext

    render() {
        const { folders = [] } = this.context
        console.log(this.context)
        const folderId = folders.map(folder => folder.id)
        
        const findFolder = (folders = [], folderId) =>
            {
                console.log(folders, folderId)
                folders.find(folder => folder.id == folderId)
            }
            

        const folderDisplay = findFolder(folders, folderId);
        console.log(folderDisplay)
        return (
            <div className='showFolders'>
                <ul>
                    <p>SHOW FOLDERS</p>
                    <p>Folders: </p>
                    {this.props.folders.map(folder =>
                        <li key={folder.id}>
                            <NavLink
                                to={`/folder/${folder.id}`}
                            >
                                <span>
                                    {countNotesForFolder(this.props.notes, folder.id)}
                                </span>
                                {folder.name}
                            </NavLink>
                            {folderDisplay}.....
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

}

export default ShowFolders