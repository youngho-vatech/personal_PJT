import React from "react";
import { GET_TASKS } from "./Query";
import { useQuery } from "@apollo/react-hooks";

const Task = () => {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <ul>
      {data.fetchTasks.map(task => (
        <li>{task.task}</li>
      ))}
    </ul>
  );
};

export { Task };
