import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CreateAccount from './components/CreateAccount';
import SignIn from './components/SignIn';
import AccountSettings from './components/AccountSettings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/account-settings" element={<AccountSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;