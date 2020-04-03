import React from 'react'
import CircleButton from './CircleButton'
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react'


class AddNote extends React.Component {
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
        const note = {
            note_name: name.value
        };
        console.log(note)
    }

    render() {
        return (
            <div className='addNote'>
                <p>ADD NOTE</p>
                {this.props.note && (
                    <h3>
                        Note Name: {this.props.note.name}
                    </h3>
                )}
                <form className="addNoteForm" onSubmit={e => this.handleSubmit(e)}>
                    <legend><h3>Add Note</h3></legend>
                    <label htmlFor="name"><h4>Note Name</h4></label>
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

AddNote.defaultProps = {
    history: {
        goBack: () => { }
    }
}

export default AddNote