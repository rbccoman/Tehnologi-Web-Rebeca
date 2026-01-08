import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addNote, deleteNote } from "../actions/actions";

const noteListSelector = (state) => state.list.notes;

const NoteList = () => {
  const notes = useSelector(noteListSelector, shallowEqual);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then((data) => {
       data.forEach((u) => dispatch(addNote(u)));
      });
  }, [dispatch]);

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      dispatch(deleteNote(id));
    }
  };

  return (
    <div>
      <div>
        <h3>list of notes</h3>
        {notes.map((n) => (
          <div key={n.id}>
            <b>{n.name}</b> ({n.email}) [{n.type}]
            <button onClick={() => handleDelete(n.id)}>delete</button>
          </div>
        ))}
      </div>

      <div>
        <h3>add a note</h3>
        <input
          type="text"
          placeholder="name"
          onChange={(evt) => setContent(evt.target.value)}
        />
        <input
          type="button"
          value="add"
          onClick={() => {
            
            dispatch(
              addNote({
                id: Date.now(),
                name: content,
                email: `${content}@example.com`,
                type: "regular",
              })
            );
          }}
        />
      </div>
    </div>
  );
};

export default NoteList;
