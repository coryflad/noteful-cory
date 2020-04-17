import React from 'react'
import CircleButton from './CircleButton'
import NotefulContext from './NotefulContext'
import config from  './config'



class AddFolder extends React.Component {

    static contextType = NotefulContext

   state = {
            name: ''
        }
    

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value.trim() });
        console.log(this.state)
    }

    handleSubmit(e) {
        e.preventDefault();
        const { name } = e.target;
        const folder = {
            folder_name: name.value
        };

        fetch(config.API_FOLDERS, {
            method:'POST',
            body: JSON.stringify(folder),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            return res.json()
        })
        .then(data => {
            name.value = ''
            this.context.addFolder(data)
            this.props.history.push('/')
        })
        .catch(error => {
            this.setState({ appErrror: error})
        })
    }

    render() {
        return (
            <div className='addFolder'>
                <p>ADD FOLDER</p>
                {this.props.folder && (
                    <h3>
                        Folder Name: {this.props.folder.name}
                    </h3>
                )}
                <form className="addFolderForm" onSubmit={e => this.handleSubmit(e)}>
                    <legend><h3>Add Folder</h3></legend>
                    <label htmlFor="name"><h4>Folder Name</h4></label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={this.handleChange}
                    />
                    <button
                        type="submit"
                        id="submit-btn"
                        disabled={this.state.formValid === false}
                    >
                        Submit
                        </button>
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

AddFolder.defaultProps = {
    name: '',
    history: {
        goBack: () => { }
    }
}

export default AddFolder