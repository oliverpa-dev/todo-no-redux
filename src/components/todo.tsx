import React from "react";

export const Todo = () => {
  return (
    <div className="">
      <div>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Description</label>
          <input type="text" />
        </div>
      </div>
      <button>Add</button>
    </div>
  );
};
