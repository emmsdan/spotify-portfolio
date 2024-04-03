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
import { MainDashboard } from './pages/Dashboard/MainDashboard';
import { AudioContext } from './store/audioContext';

const router = createBrowserRouter([
  {
    path: '',
    element: (<IsProtectedRoute>
      <Landing />
    </IsProtectedRoute>),
  },
  {
    path: routes.dashboard(),
    element: <IsProtectedRoute><DashboardPage /></IsProtectedRoute>,
    children: [
      {
        path: '',
        element: <MainDashboard />
      },
      {
        path: routes.playlist(),
        element: <h1>After tomoooo</h1>
      },
    ]
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
  const [audio, setAudio] = React.useState({
    playing: '',
    next: '',
    prev: '',
})
const update = (playing, next, prev) => {
  setAudio({ playing, next, prev })
}
  return <>
    <AudioContext.Provider value={{audio, update}}>
      <Toaster />
      <RouterProvider router={router} />
    </AudioContext.Provider>
  </>
}

// returns JSX, and the naming is PascalCase

// Component name must be PascalCase
// NavigationBar

// not navigationBar, navigation-bar, navigation_bar
