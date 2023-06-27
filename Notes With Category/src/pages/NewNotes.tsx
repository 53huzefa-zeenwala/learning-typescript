import NoteForm from "../components/NoteForm";
import { NoteData, Tag } from "../App";

type NewNoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

function NewNotes({ onSubmit, onAddTag, availableTags }: NewNoteFormProps) {
  return (
    <>
      <h1 className="mb-4">New Notes</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}

export default NewNotes;
