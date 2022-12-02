import Head from 'next/head';
import Footer from '../components/footer';
import Introduction from '../components/introduction';
import NavBar from '../components/navbar';
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