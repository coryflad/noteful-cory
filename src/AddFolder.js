import React from 'react'
import CircleButton from './CircleButton'
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react'


class AddFolder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
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
        console.log(folder)
        console.log(this.state)
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