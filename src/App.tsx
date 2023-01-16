import styles from './App.module.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header/Header';
import AboutPage from './components/pages/AboutPage/AboutPage';
import IntroPage from './components/pages/IntroPage/IntroPage';
import MyWorkPage from './components/pages/MyWorkPage/MyWorkPage';
import SkillsPage from './components/pages/SkillsPage/SkillsPage';
import TestimonialPage from './components/pages/TestimonialPage/TestimonialPage';

function App() {
  return (
    <div className={styles.overallWrapper}>
      <Header title="Jason" />
      <IntroPage />
      <AboutPage />
      <SkillsPage />
      <MyWorkPage />
      <TestimonialPage />
      <Footer email="jekb2019@gmail.com" />
    </div>
  );
}

export default App;
