import React, { useContext, useState } from "react";
import "./addnote.css";
import { dataContext } from "../../contexts/MyContext";
const Addnote = () => {
  const { userName, addNote } = useContext(dataContext);
  const [details, setDetails] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const add = () => {
    if (
      details.description === "" ||
      details.title === "" ||
      details.tag === ""
    ) {
      alert("Plese Enter Details");
      return;
    }
    addNote(details.title, details.description, details.tag);
    setDetails({ title: "", description: "", tag: "" });
  };

  const onchage = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <div className="input-div">
      <form className="details-form">
        <h3 className="create-note-heading">
          Hello <span>{userName}</span> <br />
          Create your notes here...
        </h3>
        <label className="input-labels">Title:</label>
        <input
          type="text"
          className="input-details"
          name="title"
          value={details.title}
          onChange={onchage}
        ></input>
        <label className="input-labels">Description:</label>
        <textarea
          rows="4"
          type="text"
          className="input-details"
          name="description"
          value={details.description}
          onChange={onchage}
        ></textarea>
        <label className="input-labels">Tag: </label>
        <input
          type="text"
          className="input-details"
          name="tag"
          value={details.tag}
          onChange={onchage}
        />
        <button type="button" className="adddetails-btn" onClick={add}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Addnote;
