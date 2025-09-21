import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthCode from './components/AuthCode';
import Announcements from './components/Announcements';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Contact from './components/Contact';
import UserProfile from './components/UserProfile';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'login':
        return <Login setCurrentPage={setCurrentPage} />;
      case 'register':
        return <Register setCurrentPage={setCurrentPage} />;
      case 'auth-code':
        return <AuthCode setCurrentPage={setCurrentPage} />;
      case 'announcements':
        return <Announcements setCurrentPage={setCurrentPage} />;
      case 'privacy':
        return <Privacy setCurrentPage={setCurrentPage} />;
      case 'terms':
        return <Terms setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      case 'profile':
        return <UserProfile setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <AuthProvider>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        {renderPage()}
      </Layout>
    </AuthProvider>
  );
}

export default App;