import Extracurriculars from '../components/Extracurriculars.js';
import Introduction from '../components/Introduction.js';
import NavBar from '../components/Navbar.js';
import Work from '../components/Work.js';

export default function Home() {
  return (
    <>
      <NavBar active={"About"}></NavBar>
      <Introduction></Introduction>
      <Work></Work>
      <Extracurriculars></Extracurriculars>
    </>
  );
}