import React, { createContext, useState } from "react";

const myContext = createContext();

const MyContext = (props) => {
  let people = [
    {
      title: 2242000011,
      description: "Creola Katherine Johnson",
      tag: "mathematician",
    },
  ];

  const [data, setData] = useState(people);

  // get all notes
  const getAllNotes = async () => {
    const response = await fetch(
      "https://backend-9ua4.onrender.com/api/notes/fetchallnotes",
      {
        method: "GET",
        headers: {
          "content-type": "application/jssson",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    let details = await response.json();
    setData(details);
  };

  // add a person
  const addPerson = async (title, description, tag) => {
    await fetch(`https://backend-9ua4.onrender.com/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    getAllNotes();
  };

  //delete Person
  const deletePerson = async (id) => {
    await fetch(
      `https://backend-9ua4.onrender.com/api/notes/deletenotes/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
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
