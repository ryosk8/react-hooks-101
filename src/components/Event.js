import React from "react";

const Event = ({ event, dispatch }) => {
    const  handleClickDeleteButton =() =>{
       const id = event.id;
       dispatch({ type: "DELETE_EVENT", id });
    }
        
  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <butoon
          type="button"
          className="btn btn-danger"
          onClick={handleClickDeleteButton}
        >
          削除
        </butoon>
      </td>
    </tr>
  );
};
export default Event;
