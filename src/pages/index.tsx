import ButtonAdd from "@/components/ButtonAdd";
import FormAdd from "@/components/FormAdd";
import FormAddModal from "@/components/FormAddModal";
import Item from "@/components/Item";
import Layout from "@/components/Layout";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [todoList, setTodoList] = useState<any>([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTodoList(data);
      });
  }, []);

  const handleAdd = (item) => {
    setTodoList((prev) => [...prev, item]);
  };

  return (
    <div className="p-[5px] bg-[#f1f2f6]">
      <div className="flex flex-row justify-between items-center  ">
        <h1 className="text-[#08163a] text-5xl font-black">Task List</h1>
        <ButtonAdd onClick={() => setOpen(true)} />
      </div>
      <div className="flex flex-col space-y-[5px] mt-5 h-[500px] overflow-y-auto">
        {todoList.map((todo) => (
          <Item
            key={todo.title}
            title={todo.title}
            priority={todo.priority}
            status={todo.status}
          />
        ))}
      </div>

      <FormAddModal
        open={open}
        setOpen={setOpen}
        onAdd={(item) => handleAdd(item)}
      />
    </div>
  );
}
