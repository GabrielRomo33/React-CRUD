import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../app/features/tasks/taskSlice';
import { Link } from 'react-router-dom';

export const TaskList = () => {

  const task = useSelector(state => state.task);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  }

  return (
    <div>
      <h1>Task: {task.length}</h1>
      <Link to="/create-task">
        Add new task
      </Link>
      {
        task.map(task => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <Link to={`/edit-task/${task.id}`}>Editar</Link>
          </div>
        ))
      }
    </div>
  )
}

