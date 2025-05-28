// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import MedicinePage from './components/MedicinePage';
import {ProtectedRoute} from './components/ProctectedRoute';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm onLoginSuccess={() => {}} />} />
        <Route path="*" element={
          <ProtectedRoute>
            <MedicinePage />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;