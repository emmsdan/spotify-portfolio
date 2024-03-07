import './App.css';
import { Features } from './components/Features';
import { LandingPageHeader } from './components/Header/LandingPageHeader'
import { Hero } from './components/Hero';

export function App() {
  return (
  <div>
    <LandingPageHeader />
    <Hero 
      title="Get Premium free for 7 days"
      amount={'$232'}
     />
     <Features />
  </div>
  );
}

// returns JSX, and the naming is PascalCase

// Component name must be PascalCase
// NavigationBar

// not navigationBar, navigation-bar, navigation_bar
