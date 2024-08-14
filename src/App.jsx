import './App.css'
import { useSelector } from 'react-redux'
import { TaskForm, TaskList } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  //bg-zinc-900 h-screen text-white
  return (
    <>
    <div className='bg-zinc-900 h-screen text-white'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/create-task' element={<TaskForm />} />
          <Route path='/edit-task/:id' element={<TaskForm />} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
