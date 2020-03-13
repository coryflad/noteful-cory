import React from 'react'


function NotePageNav(props) {
    return (
        <div className='notePageNav'>
            <p>NOTE PAGE NAV</p>
            {props.folder && (
                <h3>
                    Folder Name: {props.folder.name}
                </h3>
            )}
            <button
                tag='button'
                role='link'
                onClick={() => props.history.goBack()}
            >
                Go Back
                </button>
        </div>
    )
}

NotePageNav.defaultProps = {
    history: {
        goBack: () => { }
    }
}

export default NotePageNav