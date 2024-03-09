import React, { createContext, useState } from "react";
import serverPort from "./serverports";
const myContext = createContext();

const MyContext = (props) => {
  let people = [];

  const [data, setData] = useState(people);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");

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

  // get all notes
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
  const addPerson = async (title, description, tag) => {
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
  const deletePerson = async (id) => {
    setLoading(true);
    await fetch(`${serverPort}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    getAllNotes();
    setLoading(false);
  };

  // Edit person

  return (
    <myContext.Provider
      value={{
        data,
        loading,
        getAllNotes,
        addPerson,
        deletePerson,
        userName,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default MyContext;
export { myContext };
