import Introduction from '../components/Introduction.js';
import NavBar from '../components/Navbar.js';
import Projects from '../components/Projects.js';

export default function Home() {
  return (
    <>
      <NavBar active={"Home"}></NavBar>
      <Introduction></Introduction>
      <Projects></Projects>
    </>
  );
}