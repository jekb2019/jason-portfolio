import styles from './App.module.css';
import Header from './components/header/Header/Header';
import AboutPage from './components/pages/AboutPage/AboutPage';
import IntroPage from './components/pages/IntroPage/IntroPage';

function App() {
  return (
    <div className={styles.overallWrapper}>
      <Header title="Jason" />
      <IntroPage />
      <AboutPage />
    </div>
  );
}

export default App;
