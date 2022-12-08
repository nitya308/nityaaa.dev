import Extracurriculars from '../components/Extracurriculars.js';
import Introduction from '../components/Introduction.js';
import NavBar from '../components/Navbar.js';
import Work from '../components/Work.js';
import Art from '../components/Art.tsx';

export default function Home() {
  return (
    <>
      <NavBar active={"About"}></NavBar>
      <Introduction></Introduction>
      <Work></Work>
      <Extracurriculars></Extracurriculars>
      <Art></Art>
    </>
  );
}