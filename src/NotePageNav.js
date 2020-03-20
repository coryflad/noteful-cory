import React from 'react'
import CircleButton from './CircleButton'
import { Link } from 'react-router-dom'


function NotePageNav(props) {
    return (
        <div className='notePageNav'>
            <p>NOTE PAGE NAV</p>
            {props.folder && (
                <h3>
                    Folder Name: {props.folder.name}
                </h3>
            )}
            <CircleButton
                tag='button'
                role='link'
                onClick={() => props.history.goBack()}
            >
                Go Back
                </CircleButton>
        </div>
    )
}

NotePageNav.defaultProps = {
    history: {
        goBack: () => { }
    }
}

export default NotePageNav