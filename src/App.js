import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import ShowFolders from './ShowFolders'
import AddFolder from './AddFolder'
import ShowNotesForFolder from './ShowNotesForFolder'
import ShowOneNote from './ShowOneNote'
import AddNote from './AddNote'
import dummyStore from './dummy-store'
import { findNote, getNotesForFolder } from './notes-helpers'
import config from './config';
import NotefulContext from './NotefulContext';


class App extends React.Component {
  state = {
    notes: [],
    folders: []
  }

  componentDidMount() {
    // setTimeout(() => this.setState(dummyStore), 500)
    // console.log(dummyStore)

    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`)
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok)
          return notesRes.json().then(e => Promise.reject(e))
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e))

        return Promise.all([notesRes.json(), foldersRes.json()])
      })
      .then(([notes, folders]) => {
        // console.log(notes, folders)
        this.setState({ notes, folders })
        console.log(this.state)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  addFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder]
    })
  }

  // getFolders = () => {
  //   fetch(config.API_FOLDERS, {
  //     method: 'GET',
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   .then(res => {
  //     if (!res.ok) {
  //       throw new Error(res.status)
  //     }
  //     return res.json()
  //   })
  //   .then((response) => {
  //     console.log(response)
  //     // this.setState({ notes, folders })
  //     // console.log(this.state)
  //   })
  //   .then(this.setFolders)
  //   .catch(error => this.setState({ foldersError: error}))
  // }
 

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
              <ShowFolders
                folders={folders}
                notes={notes}
                {...routeProps}
              />
            )}
          />
        ))}
        <Route path="/note/:noteId" />
        <Route path="/add-folder" component={AddFolder} />
        <Route path="/add-note" component={AddNote} />
      </>
    );
  }

  renderMainRoutes() {
    const { notes } = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => {
              const { folderId } = routeProps.match.params;
              const notesForFolder = getNotesForFolder(
                notes,
                folderId
              );
              return (
                <ShowNotesForFolder
                  {...routeProps}
                  notes={notesForFolder}
                />
              );
            }}
          />
        ))}
        <Route
          path="/note/:noteId"
          render={routeProps => {
            const { noteId } = routeProps.match.params;
            const note = findNote(notes, noteId);
            return <ShowOneNote {...routeProps} note={note} />;
          }}
        />
      </>
    );
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      addFolder: this.addFolder,

    }
    return (
      <NotefulContext.Provider value={contextValue}>
      <div className='app'>
        <nav>{this.renderNavRoutes()}</nav>
        <header>
          <h1>
            <Link to='/'>Noteful</Link>{' '}
          </h1>
        </header>
        <main>{this.renderMainRoutes()}</main>

      </div>
      </NotefulContext.Provider>

    )
  }
}

export default App;

ShowFolders.defaultProps = {
  folders: []
}
