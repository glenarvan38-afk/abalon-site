import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">A</span>
            </div>
            <div>
              <div className="font-display text-xl text-dark">Abalon</div>
              <div className="text-xs text-gray-500 -mt-1">Construction Management</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/categories" className="text-dark hover:text-primary transition">
              {t('header.categories')}
            </Link>
            <Link to="/how-it-works" className="text-dark hover:text-primary transition">
              {t('header.howItWorks')}
            </Link>
            <Link to="/pricing" className="text-dark hover:text-primary transition">
              {t('header.forContractors')}
            </Link>
            <LanguageSwitcher />
            <Link to="/login" className="text-dark hover:text-primary transition">
              {t('header.login')}
            </Link>
            <Link to="/customer-request" className="btn btn-secondary">
              {t('header.postRequest')}
            </Link>
            <Link to="/contractor-signup" className="btn btn-outline">
              {t('header.joinContractor')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link to="/categories" className="block py-2 text-dark hover:text-primary">
              {t('header.categories')}
            </Link>
            <Link to="/how-it-works" className="block py-2 text-dark hover:text-primary">
              {t('header.howItWorks')}
            </Link>
            <Link to="/pricing" className="block py-2 text-dark hover:text-primary">
              {t('header.forContractors')}
            </Link>
            <div className="py-2">
              <LanguageSwitcher />
            </div>
            <Link to="/login" className="block py-2 text-dark hover:text-primary">
              {t('header.login')}
            </Link>
            <Link to="/customer-request" className="btn btn-secondary w-full mt-2">
              {t('header.postRequest')}
            </Link>
            <Link to="/contractor-signup" className="btn btn-outline w-full">
              {t('header.joinContractor')}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
