import Head from 'next/head';
import Footer from '../components/footer';
import Introduction from '../components/introduction';
import NavBar from '../components/navbar';
import Projects from '../components/projects';
import Work from '../components/work';

export default function Home() {
  return (
    <>
      <NavBar active={"About"}></NavBar>
      <Introduction></Introduction>
      <Work></Work>
    </>
  );
}