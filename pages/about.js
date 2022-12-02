import Head from 'next/head';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import NavBar from '../components/Navbar';
import Work from '../components/Work';

export default function Home() {
  return (
    <>
      <NavBar active={"About"}></NavBar>
      <Introduction></Introduction>
      <Work></Work>
    </>
  );
}