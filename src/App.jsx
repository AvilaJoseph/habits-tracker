import { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './pages/Home';
import { Habits } from './pages/Habits';
import { Todo } from './pages/Todo';
import { Settings } from './pages/Settings';
import { Stats } from './pages/Stats';
import { RouteLoadingScreen } from './components/ui/RouteLoadingScreen';

function App(){
  const location = useLocation();
  const [isRouteLoading, setIsRouteLoading] = useState(false);
  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    setIsRouteLoading(true);
    const timeoutId = setTimeout(() => {
      setIsRouteLoading(false);
    }, 320);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return(
    <>
      {isRouteLoading && <RouteLoadingScreen />}

      <div className={isRouteLoading ? 'pointer-events-none select-none' : ''}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<h1>About</h1>} />
          <Route path='/Habits' element={<Habits/>} />
          <Route path='/To-do' element={<Todo/>} />
          <Route path='/Settings' element={<Settings/>} />
          <Route path='/Analytics' element={<Stats/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;