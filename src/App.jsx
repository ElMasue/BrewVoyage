import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Cookies from './pages/cookies/Cookies';
import TermsAndConditions from './pages/terms-conditions/TermsConditions';
import CommentsPage from "./pages/comments-page/CommentsPage";
import RssPage from "./pages/Rss/RssPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/comments" element={<CommentsPage />} />
        <Route path="/rss" element={<RssPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;