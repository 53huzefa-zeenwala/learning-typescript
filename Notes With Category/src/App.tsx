import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import NewNotes from "./pages/NewNotes";
import { useLocalStorage } from "./useLocalStorageHook";
import { useMemo } from "react";
import {v4 as uuidv4} from 'uuid'

export type Note = {
  id: String
} & NoteData

export type RowNote = {
  id: String
} & RowNoteData

export type RowNoteData = {
  title: String
  markdown: String
  tagIds: String[]
}

export type NoteData = {
  title: String
  markdown: String
  tags: Tag[]
}

export type Tag = {
  id: String
  label: String
}

function App() {
  const [notes, setNotes] = useLocalStorage<RowNote[]>("NOTES", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

  const notesWithTags = useMemo(() => {
    return notes.map(note => {
      return {...note, tags: tags.filter(tag => note.tagIds.includes(tag.id))}
    })
  }, [notes, tags])

  function onCreateNote(data: NoteData) {
    setNotes(prevNotes => {
      return [...prevNotes, {...data, id: uuidv4(), tagIds: tags.map(tag => tag.id)}]
    })
  }
  function addTag(tag: Tag) {
    setTags(prev => {
      return [...prev, tag]
    })
  }
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNotes onSubmit={onCreateNote} onAddTag={addTag} availableTags={tags}/>} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
