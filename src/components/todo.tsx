import React, { useState } from "react";

interface TodoProps {
  onAdd: (todoItem: any) => void;
}

export const Todo: React.FC<TodoProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleOnAdd = () => {
    onAdd({ title: title, description: description });
  };

  return (
    <div className="">
      <div>
        <div>
          <label>Title</label>
          <input onChange={handleTitle} type="text" />
        </div>
        <div>
          <label>Description</label>
          <input onChange={handleDescription} type="text" />
        </div>
      </div>
      <button onClick={handleOnAdd}>Add</button>
    </div>
  );
};
