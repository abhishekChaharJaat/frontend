import React, { useContext, useEffect } from "react";
import { myContext } from "../contexts/myContext";
import "../css/home.css";

const ComC = () => {
  const { data, deletePerson, getAllNotes } = useContext(myContext);

  useEffect(() => {
    getAllNotes();
  });
  return (
    <>
      {data.map((user) => {
        return (
          <div className="item" key={user._id}>
            <p className="id">Title : {user.title}</p>
            <p className="name">Description : {user.description}</p>
            <p className="profession">Tag : {user.tag}</p>
            <div className="btn-icon">
              <i
                className="fa fa-trash"
                aria-hidden="true"
                onClick={() => {
                  deletePerson(user._id);
                }}
              ></i>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ComC;
