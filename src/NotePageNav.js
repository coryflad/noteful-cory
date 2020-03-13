import React from 'react'


function NotePageNav(props) {
    return (
        <div>
            <p>note page nav</p>
            <button
                tag='button'
                role='link'
                onClick={() => props.history.goBack()}
            >
                Go Back
                </button>
            {props.folder && (
                <h3>
                    {props.folder.name}
                </h3>
            )}
        </div>
    )
}

NotePageNav.defaultProps = {
    history: {
        goBack: () => { }
    }
}

export default NotePageNav