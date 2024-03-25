import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { useNavigation } from './hooks/useNavigation';
import { Landing } from './pages/Landing';
import { LoginPage } from './pages/Login';
import { IsProtectedRoute } from './hoc/IsProtectedRoute';
import { Toaster } from 'react-hot-toast';
import { routes } from './routes';
import { DashboardPage } from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '',
    element: (<IsProtectedRoute>
      <Landing />
      </IsProtectedRoute>),
  },
  {
    path: routes.dashboard(),
    element: <IsProtectedRoute><DashboardPage /></IsProtectedRoute>
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
 return <>
  <Toaster />
  <RouterProvider router={router} />
 </>
}

// returns JSX, and the naming is PascalCase

// Component name must be PascalCase
// NavigationBar

// not navigationBar, navigation-bar, navigation_bar
