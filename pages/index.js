import Head from 'next/head';
import Footer from '../components/footer';
import Introduction from '../components/introduction';
import Projects from '../components/projects';

export default function Home() {
  return (
    <>
      <Introduction></Introduction>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
}