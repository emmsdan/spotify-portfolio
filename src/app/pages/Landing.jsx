import { Features } from '../components/Features';
import Footer from '../components/Footer';
import { LandingPageHeader } from '../components/Header/LandingPageHeader'
import { Hero } from '../components/Hero';
import { PricingSection } from '../components/Pricing';

export function Landing() {
  return (
  <div>
    <LandingPageHeader />
    <Hero 
      title="Get Premium free for 7 days"
      amount={'$232'}
     />
     <Features />
     <PricingSection />
     <Footer />
  </div>
  );
}

// returns JSX, and the naming is PascalCase

// Component name must be PascalCase
// NavigationBar

// not navigationBar, navigation-bar, navigation_bar
