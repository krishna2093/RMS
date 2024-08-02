import React from "react";
import { DeleteOutlined } from "@ant-design/icons";

const Feedbacklist = ({ feedback, onDelete }) => {
  return (
    <div>
      <div className="card" style={{ width: "20rem", padding: "12px", backgroundColor:"black", color:"white", margin: "10px"}}>
        <div className="card-body">
          <p className="card-text">
          <h5 className="card-title"><b>Name: </b>{feedback.name}</h5>
            <h5>Phone Number:  {feedback.phone} </h5>
            <h5>Message:  {feedback.message} </h5>
          </p>
          {onDelete && (
            <DeleteOutlined
              className="delete-icon"
              onClick={() => onDelete(feedback._id)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedbacklist;
