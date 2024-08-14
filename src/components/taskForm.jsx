import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid} from 'uuid'
import { addTask, EditTask } from '../app/features/tasks/taskSlice';

export const TaskForm = () => {

  const [Task, setTask] = useState({
    title: '',
    description: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.task);

  const handelChange = (e) => {
    setTask({
      ...Task,
      [e.target.name]: e.target.value,
    })
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(params.id){
      dispatch(EditTask(Task));
    }else {
      dispatch(addTask({
        id: uuid(),
        ...Task,
        completed: false
      }));
    }
    navigate('/');
  }
  
  useEffect(() => {
    if(params.id){
      setTask(tasks.find((tasks) => tasks.id === params.id));
      console.log(Task);
    }
  }, []);
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name='title'
        placeholder='title'
        onChange={handelChange}
        value={Task.title}/>
      <textarea 
        name="description" 
        id="" 
        placeholder='description'
        onChange={handelChange}
        value={Task.description}>
      </textarea>
      <button type='submit'>Save</button>
    </form>
  )
}
