import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import NoteListNav from './NoteListNav'
import NotePageNav from './NotePageNav'
import dummyStore from './dummy-store'
import { findNote, findFolder } from './notes-helpers'


class App extends React.Component {
  state = {
    notes: [],
    folders: []
  }

  componentDidMount() {
    setTimeout(() => this.setState(dummyStore), 600)
    console.log(dummyStore)
  }

  renderNavRoutes() {
    const { notes, folders } = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => (
              <NoteListNav
                folders={folders}
                notes={notes}
                {...routeProps}
              />
            )}
          />
        ))}
        <Route
          path="/note/:noteId"
          render={routeProps => {
            const { noteId } = routeProps.match.params;
            const note = findNote(notes, noteId) || {};
            const folder = findFolder(folders, note.folderId);
            return <NotePageNav {...routeProps} folder={folder} />;
          }}
        />
        <Route path="/add-folder" component={NotePageNav} />
        <Route path="/add-note" component={NotePageNav} />
      </>
    );
  }




  render() {
    return (
      <div>
        <nav>{this.renderNavRoutes()}</nav>
        <header>
          <h1>
            <Link to='/'>Noteful</Link>{' '}
          </h1>
        </header>
        <Route>
          <NotePageNav />
        </Route>

      </div>
    )
  }
}

export default App;

NoteListNav.defaultProps = {
  folders: []
}
