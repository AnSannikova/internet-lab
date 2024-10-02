import { FaQ } from '../faq';
import { Footer } from '../footer';
import { Form } from '../form';
import { Header } from '../header';
import { Research } from '../research';
import { Reviews } from '../reviews';
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
        <Reviews />
        <FaQ />
        <Research />
        <Form />
      </main>
      <Footer />
    </div>
  );
};
