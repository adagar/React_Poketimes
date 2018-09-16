const initState = {
  posts: [
    { id: "1", title: "Squirtle laid an egg", body: "lorem ipsum, 123" },
    { id: "2", title: "charmander burned someone", body: "lorem ipsum, 123" },
    { id: "3", title: "New fossil found", body: "lorem ipsum, 123" }
  ]
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return post.id !== action.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
