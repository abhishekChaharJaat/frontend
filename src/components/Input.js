import React, { useContext, useState } from "react";
import { myContext } from "../contexts/myContext";

const Input = () => {
  const { addPerson } = useContext(myContext);
  const [person, setPerson] = useState({ title: "", description: "", tag: "" });
  const add = () => {
    if (person.description === "" || person.title === "" || person.tag === "") {
      alert("Plese Enter Details");
      return;
    }
    addPerson(person.title, person.description, person.tag);
    setPerson({ title: "", description: "", tag: "" });
  };

  const onchage = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };
  return (
    <div className="input-div">
      <form className="details-form">
        <h3 className="create-note-heading">Create your notes here</h3>
        <label className="input-labels">Title:</label>
        <input
          type="text"
          className="input-details"
          name="title"
          value={person.title}
          onChange={onchage}
        ></input>
        <label className="input-labels">Description:</label>
        <textarea
          rows="3"
          type="text"
          className="input-details"
          name="description"
          value={person.description}
          onChange={onchage}
        ></textarea>
        <label className="input-labels">Tag: </label>
        <input
          type="text"
          className="input-details"
          name="tag"
          value={person.tag}
          onChange={onchage}
        ></input>
        <button type="button" className="addPerson-btn" onClick={add}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Input;
