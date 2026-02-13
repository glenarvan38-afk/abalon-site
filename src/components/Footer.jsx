import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
              <div>
                <div className="font-display text-lg text-white">Abalon</div>
                <div className="text-xs text-gray-400">Construction Management</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              {t('footer.tagline')}
            </p>
          </div>

          {/* For Customers */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.forCustomers')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/customer-request" className="hover:text-white transition">{t('footer.postRequest')}</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition">{t('footer.howItWorks')}</Link></li>
              <li><Link to="/categories" className="hover:text-white transition">{t('footer.browseCategories')}</Link></li>
              <li><Link to="/faq" className="hover:text-white transition">{t('footer.faq')}</Link></li>
            </ul>
          </div>

          {/* For Contractors */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.forContractors')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contractor-signup" className="hover:text-white transition">{t('footer.joinAbalon')}</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition">{t('footer.pricing')}</Link></li>
              <li><Link to="/contractor-login" className="hover:text-white transition">{t('footer.contractorLogin')}</Link></li>
              <li><Link to="/benefits" className="hover:text-white transition">{t('footer.benefits')}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="hover:text-white transition">{t('footer.terms')}</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition">{t('footer.privacy')}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">{t('footer.contact')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
