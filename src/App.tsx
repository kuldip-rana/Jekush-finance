import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About'; // We might remove this if we only use the sub-pages
import Services from './pages/Services'; // Same here
import Tools from './pages/Tools';
import ContactUs from './pages/ContactUs';
import Blogs from './pages/Blogs';

// About Pages
import CompanyProfile from './pages/about/CompanyProfile';
import OurTeams from './pages/about/OurTeams';

// Services Pages
import FinancialAssessment from './pages/services/FinancialAssessment';
import InsuranceAssessment from './pages/services/InsuranceAssessment';
import RetirementAssessment from './pages/services/RetirementAssessment';

// Products Pages
import MutualFunds from './pages/products/MutualFunds';
import InsuranceProducts from './pages/products/Insurance';
import ModelPortfolio from './pages/products/ModelPortfolio';
import RealEstate from './pages/products/RealEstate';
import Equity from './pages/products/Equity';
import PortfolioManagement from './pages/products/PortfolioManagement';
import AlternateInvestment from './pages/products/AlternateInvestment';
import Loan from './pages/products/Loan';
import SuccessionPlanning from './pages/products/SuccessionPlanning';

import './App.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blogs" element={<Blogs />} />

          {/* About Routes */}
          <Route path="/about/company-profile" element={<CompanyProfile />} />
          <Route path="/about/our-teams" element={<OurTeams />} />

          {/* Services Routes */}
          <Route path="/services/finance" element={<FinancialAssessment />} />
          <Route path="/services/insurance" element={<InsuranceAssessment />} />
          <Route path="/services/retirement" element={<RetirementAssessment />} />

          {/* Products Routes */}
          <Route path="/products/mutual-funds" element={<MutualFunds />} />
          <Route path="/products/insurance" element={<InsuranceProducts />} />
          <Route path="/products/model-portfolio" element={<ModelPortfolio />} />
          <Route path="/products/real-estate" element={<RealEstate />} />
          <Route path="/products/equity" element={<Equity />} />
          <Route path="/products/portfolio-management" element={<PortfolioManagement />} />
          <Route path="/products/alternate-investment" element={<AlternateInvestment />} />
          <Route path="/products/loan" element={<Loan />} />
          <Route path="/products/succession-planning" element={<SuccessionPlanning />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
