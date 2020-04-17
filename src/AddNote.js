import React from 'react'
import CircleButton from './CircleButton'
import config from './config'
import NotefulContext from './NotefulContext'


class AddNote extends React.Component {

    static contextType = NotefulContext

    state = {
        name: '',
        folderId: '',
        content: '',
    }

    updateFolderID(folderId) {
        this.setState({ folderId: { value: folderId, touched: true } })
    }


    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value.trim() });
        console.log(this.state)
    }

    handleSubmit(e) {
        e.preventDefault();
        const { name, folderId, content } = e.target;
        const note = {
            note_name: name.value,
            folder_id: folderId.value,
            content: content.value,
            // modified: newDate()
        };

        fetch(config.API_NOTES, {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    });
                }
                return res.json();
            })
            .then(data => {
                name.value = '';
                content.value = '';
                folderId.value = '';
                this.context.addNote(data);
                this.setState({ data });
                this.props.history.push('/', data);
            })
    }

    render() {

        const folders = this.context.folders

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <legend>
                        <h3>Add Note</h3>
                    </legend>
                    <label htmlFor='name'>
                        <h4>Note Name</h4>
                    </label>
                    <input
                        type='text'
                        name='content'
                        id='content'
                        defaultValue=''
                        onChange={this.handleChange}
                    />
                    <select
                        id='folderId'
                        name='folderId'
                        value={this.state.folderId}
                        onChange={this.handleChange}
                    >
                        <option>Select a folder</option>
                        {folders.map(folder => (<option key={folder.id} value={folder.id}>{folder.folder_name}</option>))}
                    </select>
                    <button
                        type='submit'
                        id='submit-btn'
                    >
                        Submit
                </button>
                    <br />

                </form>
                <CircleButton
                    tag='button'
                    role='link'
                    onClick={() => this.props.history.goBack()}
                >
                    Go Back
                </CircleButton>
            </div>
        )
    }

}

AddNote.defaultProps = {
    name: '',
    history: {
        goBack: () => { }
    }
}

export default AddNote