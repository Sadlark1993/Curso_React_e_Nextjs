//reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ChangeTitle': {
      return { ...state, title: action.payload };
    }
  }
  return { ...state };
};
