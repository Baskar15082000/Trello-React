export const reduce = (state, action) => {
  switch (action.type) {
    case "Fetch_Success":
      return {
        post: action.payload,
        error: "",
      };
    case "Error":
      return {
        post: [],
        error: "error",
      };
    case "Delete":
      return { post: action.payload };
    case "Add":
      return { post: [...state.post, action.payload] };
    case "Check":
      return {
        post: action.payload,
      };
    default:
      return state;
  }
};
