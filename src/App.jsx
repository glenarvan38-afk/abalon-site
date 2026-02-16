import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CustomerRequestPage from './pages/CustomerRequestPage';
import ContractorSignupPage from './pages/ContractorSignupPage';
import SuccessPage from "./pages/SuccessPage";

// Placeholder pages
const CategoriesPage = () => <div className="container-custom py-20"><h1 className="text-4xl font-display">Equipment Categories</h1><p className="mt-4">Coming soon...</p></div>;
const HowItWorksPage = () => <div className="container-custom py-20"><h1 className="text-4xl font-display">How It Works</h1><p className="mt-4">Coming soon...</p></div>;
const PricingPage = () => <div className="container-custom py-20"><h1 className="text-4xl font-display">Pricing for Contractors</h1><p className="mt-4">$50/year - Unlimited leads</p></div>;
const ContactPage = () => <div className="container-custom py-20"><h1 className="text-4xl font-display">Contact Us</h1><p className="mt-4">Email: info@abalon.us</p></div>;
const NotFoundPage = () => <div className="container-custom py-20 text-center"><h1 className="text-4xl font-display">404</h1><p className="mt-4">Page not found</p></div>;

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/customer-request" element={<CustomerRequestPage />} />
          <Route path="/contractor-signup" element={<ContractorSignupPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
