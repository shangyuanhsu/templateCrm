import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './componets/NavBar';
import Dashboard from './view/Dashboard';
import SetDashboard from './view/SetDashboard';
import Member from './view/Member';
import SetBar from './componets/SetBar';
import Product from './view/Product';
import NavProvider from './contexts/Nav';
import NavBg from './componets/NavBg';
import ToDoContextProvider from "./contexts/ToDoContext";

const App = () => {

  return (
    <div className="App">
     <NavProvider>
      <NavBar />
      <main>
      <SetBar />
      <ToDoContextProvider>
        <Routes>
        
          <Route path="/" element={<Dashboard />} />
          <Route path="setDashboard" element={<SetDashboard />} />
  
          <Route path="member" element={<Member />} />
          <Route path="product" element={<Product />} />
        </Routes>
        </ToDoContextProvider>
      </main>

        <NavBg />
      </NavProvider>
    </div>
  );
}

export default App;
