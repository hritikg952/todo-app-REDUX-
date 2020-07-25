import { v4 as uuidv4 } from "uuid";
const initialState = [];

const inputReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CREATE_TODO":
      return [
        ...state,
        {
          id: uuidv4(),
          value: payload.value,
          status: payload.status,
        },
      ];
    case "DELETE_TODO":
      const copyState = [...state];
      const i = copyState.findIndex((s) => s.id === payload.id);
      copyState.splice(i, 1);
      return [...copyState];

    case "TOGGLE_TODO":
      const cState = [...state];
      for (var j in cState) {
        if (cState[j].id === payload.id) {
          cState[j].status = payload.status;
          break;
        }
      }

      return [...cState];
    case "EDIT_TODO":
      const cpyState = [...state];
      for (var k in cpyState) {
        if (cpyState[k].id === payload.id) {
          cpyState[k].value = payload.value;
          break;
        }
      }
      return [...cpyState];
    default:
      return state;
  }
  return state;
};

export default inputReducer;
