import Footer from '../components/Footer.js';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer></Footer>
    </>)
    ;
}