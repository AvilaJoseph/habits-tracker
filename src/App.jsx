import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Habits } from './pages/Habits';
import { Todo } from './pages/Todo';
import { Settings } from './pages/Settings';

function App(){
  return(
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<h1>About</h1>} />
      <Route path='/Habits' element={<Habits/>} />
      <Route path='/To-do' element={<Todo/>} />
      <Route path='/Settings' element={<Settings/>} />
    </Routes>
  );
}

export default App;