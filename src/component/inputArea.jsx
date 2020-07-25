import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

import { useDispatch } from "react-redux";

const inputArea = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    value: "",
    status: false,
  });
  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value });
  };
  const addTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_TODO",
      payload: {
        value: data.value,
        status: data.status,
      },
    });
  };
  console.log(data);
  return (
    <div className="inputArea">
      <input type="text" name="value" onChange={handleChange("value")} />
      <button className="enterBtn" onClick={addTodo}>
        add
      </button>
    </div>
  );
};

export default inputArea;
