import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apollo-client";
import { Task } from "./Task";
import { AddTask } from "./AddTask";
function App() {
  return (
    <ApolloProvider client={client}>
      <AddTask />
      <Task />
    </ApolloProvider>
  );
}

export default App;
