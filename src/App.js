import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Admin from './admin/Admin';
import Client from './client/Client';
import Login from './admin/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Client />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
