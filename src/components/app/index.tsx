import { Header } from '../header';
import { Steps } from '../steps';
import { ThirdBlock } from '../third-block';
import styles from './styles.module.css';

export const App = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Steps />
        <ThirdBlock />
      </main>
    </div>
  );
};
