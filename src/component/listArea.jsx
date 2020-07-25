import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function listArea() {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    status: false,
  });
  const dispatch = useDispatch();
  const inputState = useSelector((state) => state.inputs);

  const deleteTodo = (e, id) => {
    e.preventDefault();
    console.log(id);
    dispatch({
      type: "DELETE_TODO",
      payload: {
        id: id,
      },
    });
  };

  const toggleTodo = (e, id) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: {
        id: id,
        status: e.target.checked,
      },
    });
  };

  const editTodo = (e, id) => {
    e.preventDefault();
    dispatch({
      type: "EDIT_TODO",
      payload: {
        id: id,
        value: edit.value,
      },
    });
    setEdit({ ...edit, status: false });
  };
  return (
    <div className="listArea">
      <ul className="list">
        {inputState.map((input, index) => {
          return (
            <div key={input.id} className="item">
              {edit.status ? (
                edit.id === index ? (
                  <React.Fragment>
                    <input
                      type="text"
                      defaultValue={input.value}
                      onChange={(event) =>
                        setEdit({ ...edit, value: event.target.value })
                      }
                    />
                    <button onClick={(event) => editTodo(event, input.id)}>
                      update
                    </button>
                  </React.Fragment>
                ) : (
                  <li
                    style={{ color: input.status ? "green" : "black" }}
                    onClick={() =>
                      setEdit({ ...edit, id: index, status: true })
                    }
                  >
                    {input.value}
                  </li>
                )
              ) : (
                <li
                  style={{ color: input.status ? "green" : "black" }}
                  onClick={() => setEdit({ ...edit, id: index, status: true })}
                >
                  {input.value}
                </li>
              )}

              <div>
                <input
                  type="checkbox"
                  onChange={(event) => toggleTodo(event, input.id)}
                  disabled={edit.status}
                />
                <button onClick={(event) => deleteTodo(event, input.id)}>
                  X
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default listArea;
