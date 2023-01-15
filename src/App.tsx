import styles from './App.module.css';
import Header from './components/header/Header';

function App() {
  return (
    <div className={styles.overallWrapper}>
      <Header title="Jason" />
    </div>
  );
}

export default App;
