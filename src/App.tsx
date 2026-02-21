import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Theme } from './settings/types';
import ScholarSparkInvestorLandingPage from './components/generated/ScholarSparkInvestorLandingPage';
import AboutPage from './components/generated/AboutPage';
import SmoothScroll from './components/ui/SmoothScroll';
import BrainTrustPage from './pages/BrainTrustPage';
import FoundersPage from './pages/FoundersPage';
import TeamPage from './pages/TeamPage';
import CompetitiveLandscapePage from './pages/CompetitiveLandscapePage';

let theme: Theme = 'dark';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return (
    <Router>
      <SmoothScroll>
        <Routes>
          {/* Homepage routes */}
          <Route path="/" element={<ScholarSparkInvestorLandingPage />} />
          <Route path="/home" element={<ScholarSparkInvestorLandingPage />} />

          {/* About page route */}
          <Route path="/about" element={<AboutPage />} />

          {/* Brain Trust page */}
          <Route path="/brain-trust" element={<BrainTrustPage />} />

          {/* Founders page */}
          <Route path="/founders" element={<FoundersPage />} />

          {/* Team page */}
          <Route path="/team" element={<TeamPage />} />

          {/* Competitive Landscape page */}
          <Route path="/competitive-landscape" element={<CompetitiveLandscapePage />} />

          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SmoothScroll>
    </Router>
  );
}

export default App;
