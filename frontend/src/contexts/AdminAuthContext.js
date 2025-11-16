import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminAuthContext = createContext();

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider');
  }
  return context;
};

export const AdminAuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check for existing session on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('adminAuth');
    if (savedAuth) {
      const authData = JSON.parse(savedAuth);
      setIsAuthenticated(true);
      setAdmin(authData.admin);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simple authentication - replace with real API call in production
    // For now, using hardcoded credentials
    if (email === 'admin@pilgrimportal.com' && password === 'Admin123!') {
      const adminData = {
        id: '1',
        email: email,
        name: 'Admin User',
        role: 'admin'
      };

      setIsAuthenticated(true);
      setAdmin(adminData);
      
      // Save to localStorage
      localStorage.setItem('adminAuth', JSON.stringify({ admin: adminData }));
      
      return { success: true };
    } else {
      return { success: false, error: 'Invalid credentials' };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAdmin(null);
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  const value = {
    isAuthenticated,
    admin,
    login,
    logout,
    loading
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};
