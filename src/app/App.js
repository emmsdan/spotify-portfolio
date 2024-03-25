import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { useNavigation } from './hooks/useNavigation';
import { Landing } from './pages/Landing';
import { LoginPage } from './pages/Login';
import { IsProtectedRoute } from './hoc/IsProtectedRoute';

const router = createBrowserRouter([
  {
    path: '',
    element: (<IsProtectedRoute>
      <Landing />
      </IsProtectedRoute>),
  },
  {
    path: 'dashboard',
    element: <IsProtectedRoute><LoginPage /></IsProtectedRoute>
  },
  {
    path: 'login',
    element: <LoginPage />
  },
  {
    path: '*',
    element: <h1 style={{ color: 'black', fontSize: 100 }}>404</h1>
  }
])
export function App() {
 return <RouterProvider router={router} />
}

// returns JSX, and the naming is PascalCase

// Component name must be PascalCase
// NavigationBar

// not navigationBar, navigation-bar, navigation_bar
