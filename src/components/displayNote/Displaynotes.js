import React, { useContext, useEffect } from "react";
import "./displayNotes.css";
import { dataContext } from "../../contexts/MyContext";
import Loader from "../loader/Loader";

const Displaynotes = () => {
  const { data, loading, getAllNotes, deleteNote } = useContext(dataContext);

  useEffect(() => {
    getAllNotes();
  });
  return (
    <div>
      <div className="allNotes">
        {loading && <Loader />}
        {data.map((note, idx) => {
          return (
            <>
              {!loading && (
                <div className="item" key={idx}>
                  <p className="id">Title : {note.title}</p>
                  <p className="name">Description : {note.description}</p>
                  <p className="profession">Tag :{note.tag} </p>
                  <div className="btns">
                    <i
                      className="fa fa-trash"
                      aria-hidden="true"
                      onClick={() => {
                        deleteNote(note._id);
                      }}
                    ></i>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Displaynotes;
