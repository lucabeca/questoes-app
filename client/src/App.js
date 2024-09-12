import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuestaoPage from './components/QuestaoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questao/:id" element={<QuestaoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
