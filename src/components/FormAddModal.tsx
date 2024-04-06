import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import FormAdd from "./FormAdd";
import Modal from "./Modal";

export default function FormAddModal({ open, setOpen, onAdd }) {
  const [item, setItem] = useState<any>({});
  const [error, setError] = useState<any>({});

  const handleChange = (key, value) => {
    setItem((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleAdd = () => {
    // handle validate
    if (!item.title || item.title === "") {
      setError({
        title: "Title is require",
      });
      return;
    }
    onAdd(item);
    setItem({});
    setOpen(false);
  };

  return (
    <Modal isOpen={open} setOpen={setOpen}>
      <div className="bg-white">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-black">Add task</h1>
          <p onClick={() => setOpen(false)}>Close</p>
        </div>
        <div>
          <div>
            <p className="text-gray-500">Task</p>
            <input
              value={item?.title}
              onChange={(e) => handleChange("title", e.target.value)}
              type="text"
              className="border border-gray-300 w-full px-3 py-2 rounded-lg focus:outline-none"
              placeholder="Type your task here"
            />
            {error && error.title && (
              <p className="text-red-500">{error.title}</p>
            )}
          </div>
          <div>
            <p className="text-gray-500">Priority</p>
            <div className="flex flex-row space-x-2">
              <div
                onClick={() => handleChange("priority", "High")}
                className="px-3 py-2 text-red-500 border border-red-500 w-[80px] rounded-md font-bold flex items-center justify-center"
              >
                <p>High</p>
              </div>
              <div
                onClick={() => handleChange("priority", "Medium")}
                className="px-3 py-2 text-yellow-500 border border-yellow-500 w-[80px] rounded-md font-bold flex items-center justify-center"
              >
                <p>Medium</p>
              </div>
              <div
                onClick={() => handleChange("priority", "Low")}
                className="px-3 py-2 bg-green-500 text-white  w-[80px] rounded-md font-bold flex items-center justify-center"
              >
                <p>Low</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  w-full justify-end mt-5">
          <div
            onClick={handleAdd}
            className="px-3 py-2 bg-gray-500 text-white  w-[80px] rounded-md font-bold flex items-center justify-center"
          >
            <p>Add</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
