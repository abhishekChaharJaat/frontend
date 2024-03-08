import React, { createContext, useEffect, useState } from "react";
import serverPort from "./serverports";
const myContext = createContext();

const MyContext = (props) => {
  let people = [];

  const [data, setData] = useState(people);

  // get all notes
  const getAllNotes = async () => {
    const response = await fetch(`${serverPort}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "content-type": "application/jssson",
        "auth-token": localStorage.getItem("token"),
      },
    });
    let details = await response.json();
    setData(details);
  };

  // add a Note
  const addPerson = async (title, description, tag) => {
    await fetch(`${serverPort}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    getAllNotes();
  };

  //delete note
  const deletePerson = async (id) => {
    await fetch(`${serverPort}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    getAllNotes();
  };

  // Edit person

  return (
    <myContext.Provider value={{ data, getAllNotes, addPerson, deletePerson }}>
      {props.children}
    </myContext.Provider>
  );
};

export default MyContext;
export { myContext };
