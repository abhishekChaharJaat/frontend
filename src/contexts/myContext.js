import React, { createContext, useState } from "react";
import serverPort from "./serverPorts";

const dataContext = createContext();

const MyContext = (props) => {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  // get user name
  const getUserName = async () => {
    const response = await fetch(`${serverPort}/api/notes/fetchUserName`, {
      method: "GET",
      headers: {
        "content-type": "application/jssson",
        "auth-token": localStorage.getItem("token"),
      },
    });
    let details = await response.json();
    setUserName(details.name);
  };

  // Fetch all notes..
  const getAllNotes = async () => {
    getUserName();
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
  const addNote = async (title, description, tag) => {
    setLoading(true);
    await fetch(`${serverPort}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    getAllNotes();
    setLoading(false);
  };

  //delete note
  const deleteNote = async (id) => {
    setLoading(true);
    await fetch(`${serverPort}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    setLoading(false);
  };

  return (
    <dataContext.Provider
      value={{ data, userName, loading, getAllNotes, addNote, deleteNote }}
    >
      {props.children}
    </dataContext.Provider>
  );
};

export default MyContext;
export { dataContext };
