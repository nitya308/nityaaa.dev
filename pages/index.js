import Head from 'next/head';
import Footer from '../components/footer';
import Introduction from '../components/introduction';
import NavBar from '../components/navbar';
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