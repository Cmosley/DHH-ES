import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '@styles/Index.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <div className={styles.sos}>SOS</div>
          <div className={styles.options}>Locate ME</div>
          <div className={styles.options}>CHAT</div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
