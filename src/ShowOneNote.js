import React from 'react'
import ShowOneNoteDetails from './ShowOneNoteDetails'
import CircleButton from './CircleButton'

class ShowOneNote extends React.Component {
  render() {
    return (
      <section>
        <h2>SHOW ONE NOTE</h2>
        <ShowOneNoteDetails
          id={this.props.note.id}
          name={this.props.note.name}
          modified={this.props.note.modified}
        />
        <div className='paragraph'>
          {this.props.note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>PARAGRAPH COMPONENT: {para} </p>
          )}
        </div>
        <CircleButton
          tag='button'
          role='link'
          onClick={() => this.props.history.goBack()}>
          Go Back
        </CircleButton>
      </section>
    )
  }
}

ShowOneNote.defaultProps = {
  note: {
    content: '',
  },
  history: {
    goBack: () => { }
  }
}

export default ShowOneNote