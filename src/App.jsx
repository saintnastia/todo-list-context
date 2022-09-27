import React from "react";

import TodoList from "./components/TodoList";

const App = () => {
  return(
      <div style={{width: "980px", margin: "0 auto", textAlign: "center"}}>
          <h1>Todos</h1>
          <TodoList/>
      </div>
  )
}

export default App;
