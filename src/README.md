# Noteful React

## Components Structure
* __Index.js__ (stateless)
    * __App.js__ (statefull)
        * __ShowFolders.js__ (stateless) - gets the _"folders"_ and the _"notes"_ from the __App.js__
            * __CircleButton.js__ (stateless) - gets the _"className"_  and the _"children"_ from the __ShowFolders.js__
        * __AddFolder.js__ (stateful) - gets the _"handleSubmit"_ and the _"handleChange"_call back prop from the __App.js__
        * __ShowNotes.js__ (stateless)  - gets the _"notes"_ from the __App.js__
            * __ShowOneNote.js__ (stateless) - gets the _"note"_ from the __ShowNotes.js__
                * __ShowOneNoteDetails.js__ (stateless) - gets the _"id"_ and the _"name"_  and _"modified"_ from the __ShowOneNote.js__
                * __CircleButton.js__ (stateless) - gets the _"className"_  and the _"children"_ from the __ShowOneNote.js__
        * __AddNote.js__ (stateful)  - gets the _"handleSubmit"_ and the _"handleChange"_call back prop from the __App.js__
        * __dummy-store.js__ (stateless) 
            