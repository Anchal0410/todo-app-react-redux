import React from "react";
import { FiStar, FiTrash2, FiPlusCircle, FiCalendar, FiRepeat } from "react-icons/fi";

const TaskDetails = ({ task, onClose }) => {
  return (
    <div className="task-details-container">
      <div className="task-details-header">
        <input type="checkbox" id="task-check" className="task-checkbox" />
        <label htmlFor="task-check" className="task-title">{task.title}</label>
        <FiStar className="task-star" />
      </div>

      <div className="task-details-options">
        <div className="task-option">
          <FiPlusCircle className="task-option-icon" />
          <span>Add Step</span>
        </div>
        <div className="task-option">
          <FiCalendar className="task-option-icon" />
          <span>Set Reminder</span>
        </div>
        <div className="task-option">
          <FiCalendar className="task-option-icon" />
          <span>Add Due Date</span>
        </div>
        <div className="task-option">
          <FiRepeat className="task-option-icon" />
          <span>Repeat</span>
        </div>
      </div>

      <textarea
        className="task-notes"
        placeholder="Add Notes"
        rows="4"
      ></textarea>

      <div className="task-footer">
        <span>Created Today</span>
        <FiTrash2
          className="task-delete"
          onClick={() => onClose(task.id)}
        />
      </div>
    </div>
  );
};

export default TaskDetails;
