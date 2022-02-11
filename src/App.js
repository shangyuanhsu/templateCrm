import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './view/NavBar';
import Dashboard from './view/Dashboard';
import SetDashboard from './view/SetDashboard';
import Member from './view/Member';
import SetBar from './view/SetBar';
import Product from './view/Product';


const App = () => {
  return (
    <div className="App">

      <NavBar />
      <main>
      <SetBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="setDashboard" element={<SetDashboard />} />
          <Route path="member" element={<Member />} />
          <Route path="product" element={<Product />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
