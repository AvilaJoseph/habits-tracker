
import { BrowserRouter } from 'react-router-dom'
import { TodosProvider } from './state/TodosContext.jsx';
import { HabitsProvider } from './state/HabitsContext.jsx';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'   
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TodosProvider>
      <HabitsProvider>
      <App />
      </HabitsProvider>
    </TodosProvider>
  </BrowserRouter>,
)
