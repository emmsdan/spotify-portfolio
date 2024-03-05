import './App.css';
import { LandingPageHeader } from './components/Header/LandingPageHeader'
import { Hero } from './components/Hero';

export function App() {
  return (
  <div>
    <LandingPageHeader />
    <Hero />
  </div>
  );
}

// returns JSX, and the naming is PascalCase

// Component name must be PascalCase
// NavigationBar

// not navigationBar, navigation-bar, navigation_bar
