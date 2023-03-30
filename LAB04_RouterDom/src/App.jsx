import './App.css'
import TodoPage from './pages/TodoPage'
import { Route, Routes } from "react-router-dom";
import CalendarPage from "./pages/Calendar";
import Homepage from "./pages/Homepage";
import TodayPage from "./pages/Todaypage";

function App() {
  return (
    <Routes>
      <Route exect path="/" element={<Homepage/>} />
      <Route path = "/todo" element={<TodoPage/>} />
      <Route path = "/Today" element={<TodayPage/> }/>
      <Route path = "/Calendar" element={<CalendarPage/>}/>
    </Routes>
  );
}

export default App
