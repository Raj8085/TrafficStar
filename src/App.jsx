// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import FeaturesSection from "./component/Features"
// import Footer from "./component/Footer"
// import Header from "./component/Header"
// import HeroSection from "./component/Hero"
// import StatisticsSection from "./component/Static"
// import TestimonialsSection from "./component/Testemonial"

// const App = () => {
//   return (
//       <div className="flex flex-col min-h-screen">
//       <Header/>
//       <main className="flex-grow">
//         <HeroSection/>
//         <FeaturesSection/>
//         <StatisticsSection />
//         <TestimonialsSection />
//       </main>
//       <Footer/>
//     </div>
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import HeroSection from './component/Hero';
import FeaturesSection from './component/Features';
import StatisticsSection from './component/Static';
import TestimonialsSection from './component/Testemonial';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound'; // For handling 404
import Advertisers from './Pages/Advertisers';
import Publishers from './Pages/Publishers';
import Pricing from './Pages/Pricing';
import Blog from './Pages/Blog';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <FeaturesSection />
                <StatisticsSection />
                <TestimonialsSection />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/advertisers" element={<Advertisers />} />
            <Route path="/publishers" element={<Publishers/>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/blog" element={<Blog/>} />




            <Route path="*" element={<NotFound />} /> {/* 404 page */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
