export const ContactosReducer = (state = [], action) => {
  switch (action.type) {//acción a ejecutar
    case "add":
      return [...state, action.payload];//payload información que trae el objeto

    default:
      return state;
  }
};
