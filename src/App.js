import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import ShowFolders from './ShowFolders'
import AddFolder from './AddFolder'
import ShowNotesForFolder from './ShowNotesForFolder'
import ShowOneNote from './ShowOneNote'
import AddNote from './AddNote'
import config from './config';
import NotefulContext from './NotefulContext';


class App extends React.Component {
    state = {
        notes: [],
        folders: []
    };

    componentDidMount() {
        Promise.all([
            fetch(`${config.API_ENDPOINT}/notes`),
            fetch(`${config.API_ENDPOINT}/folders`)
        ])
            .then(([notesRes, foldersRes]) => {
                if (!notesRes.ok)
                    return notesRes.json().then(e => Promise.reject(e));
                if (!foldersRes.ok)
                    return foldersRes.json().then(e => Promise.reject(e));

                return Promise.all([notesRes.json(), foldersRes.json()]);
            }) 
            .then(([notes, folders]) => {
                this.setState({notes, folders});
            })
            .catch(error => {
                console.error({error});
            });
            
    }

    handleDeleteNote = noteId => {
        this.setState({
            notes: this.state.notes.filter(note => note.id !== noteId)
        })
    }

    renderNavRoutes() {
        return (
            <>
                {['/', '/folder/:folderId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        component={ShowFolders}
                    />
                ))}
                <Route path="/note/:noteId"  />
                <Route path="/add-folder" component={AddFolder} />
                <Route path="/add-note" component={AddNote} />
            </>
        );
    }

    renderMainRoutes() {
        return (
            <>
                {['/', '/folder/:folderId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        component={ShowNotesForFolder}
                    />
                ))}
                <Route path="/note/:noteId" component={ShowOneNote} />
            </>
        );
    }

    render() {
        const value = {
            notes: this.state.notes,
            folders: this.state.folders,
        };
        return (
            <NotefulContext.Provider value={value}>
                <div className="App">
                    <nav>{this.renderNavRoutes()}</nav>
                    <header >
                        <h1>
                            <Link to="/">Noteful</Link>{' '}
                        </h1>
                    </header>
                    <main>{this.renderMainRoutes()}</main>
                </div>
            </NotefulContext.Provider>
        );
    }
}

export default App;