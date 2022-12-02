import Head from 'next/head';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import NavBar from '../components/Navbar';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <NavBar active={"Home"}></NavBar>
      <Introduction></Introduction>
      <Projects></Projects>
    </>
  );
}