import { Header } from '../header';
import { Steps } from '../steps';
import styles from './styles.module.css';

export const App = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Steps />
      </main>
    </div>
  );
};
