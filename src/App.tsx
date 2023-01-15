import styles from './App.module.css';
import Header from './components/header/Header/Header';
import IntroPage from './components/pages/IntroPage/IntroPage';

function App() {
  return (
    <div className={styles.overallWrapper}>
      <Header title="Jason" />
      <IntroPage />
    </div>
  );
}

export default App;
