import React from "react";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";

export type ItemProps = {
  title: string;
  priority: string;
  status: string;
};

const Item: React.FC<ItemProps> = ({ title, priority, status }) => {
  return (
    <div className="bg-white rounded-xl  flex flex-row justify-between items-center px-3 py-2">
      <div className="flex flex-col">
        <p className="text-gray-400">Task</p>
        <p>{title}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-gray-400">Priority</p>
        <p>{priority}</p>
      </div>
      <div className="px-2 py-1 bg-gray-200 rounded-md">{status}</div>
      <div>{/* Icon */}</div>
      <div className="flex flex-row space-x-2">
        {/* action */}
        <EditIcon />
        <DeleteIcon />
      </div>
    </div>
  );
};

export default Item;
