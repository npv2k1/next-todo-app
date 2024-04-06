import React from "react";

const ButtonAdd = ({onClick}) => {

  
  return (
    <div onClick={onClick} className="bg-[#703eff] text-white rounded-[16px] flex items-center justify-center px-3 py-2 font-bold space-x-1 cursor-pointer">
      <div>+</div>
      <div>Add task</div>
    </div>
  );
};

export default ButtonAdd;
