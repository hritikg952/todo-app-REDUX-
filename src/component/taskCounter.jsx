import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const taskCounter = () => {
  const inputState = useSelector((state) => state.inputs);
  const [values, setValues] = useState({
    total: 0,
    pending: 0,
  });
  useEffect(() => {
    if (Array.isArray(inputState)) {
      let t = inputState.length;
      let pendingTask = inputState.filter((input) => input.status === false)
        .length;
      setValues({
        ...values,
        total: t,
        pending: pendingTask,
      });
    }
  }, [inputState]);
  return (
    <div className="taskCounterContainer">
      <p>Task Pendding:{values.pending}</p>
      <p>Total Task: {values.total}</p>
    </div>
  );
};

export default taskCounter;
