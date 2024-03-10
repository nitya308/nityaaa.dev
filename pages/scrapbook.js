import Extracurriculars from '../components/Extracurriculars.js';
import styles from '../styles/scrapbook.module.css';
import NavBar from '../components/Navbar.js';
import Work from '../components/Work.js';
import Art from '../components/Art.tsx';

export default function Scrapbook() {
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.container}>
        <div className={styles.col}>
          <div className={styles.introContainer}>
            <h1 className={styles.heading}>Scrapbook</h1>
            A pocketable, community scrapbook for clips of your day-to-day adventures.
          </div>
          <div className={styles.scope}>
            <div className={styles.scopeItem}>
              <div className={styles.slab}>CONTEXT</div>
              CS 25.01 Final Project
            </div>
            <div className={styles.scopeItem}>
              <div className={styles.slab}>TEAM</div>
              Nitya Agarwala <br></br>
              Ishita Singh
            </div>
            <div className={styles.scopeItem}>
              <div className={styles.slab}>SKILLS</div>
              User Research,
              UX Design,
              UI Design,
              Prototyping
            </div>
            <div className={styles.scopeItem}>
              <div className={styles.slab}>TIMELINE</div>
              2 weeks
            </div>
            <div className={styles.scopeItem}>
              <div className={styles.slab}>DELIVERABLES</div>
              Mobile application prototype <br />
              Style guide
            </div>
          </div>
        </div>
        <img src="images/sbook.png" className={styles.mainImg} />
      </div>

      {/* the problem */}
      <div className={styles.container2}>
        <div className={styles.slab}>THE PROBLEM</div>
        <h2 className={styles.secheading}>Making Authentic Connections as a Traveller</h2>
        <img src="images/sbook1.png" className={styles.secimg} />
      </div>

      <div className={styles.container3}>
        <div className={styles.slab}>THE OPPORTUNITY</div>
        <h2 className={styles.secheading}>How Might We</h2>
        Help people easily share and appreciate their cultural experiences and engage with others’ ?
      </div>

      {/* <div className={styles.container2}>
        <div className={styles.slab}>OUR PRIORITIES</div>
        <div>
          1
          <div>
            Keep it simple. Keep it fun.
            <div>While making both UX and UI decisions we wanted our app to feel uncomplicated and handmade. We focussed more on the
              scrapbooking experience - sticky notes, lots of pictures, turning pages  </div>
          </div>
        </div>
      </div> */}

      <div className={styles.container2}>
        <div className={styles.slab}>THE SOLUTION</div>
        <h2 className={styles.secheading}>A Mobile App</h2>
        <div className={styles.row}>
          <div className={styles.secimg1}>
            <img src="images/sbook3.png" />
          </div>
          <div className={styles.secimg2}>
            <img src="images/sbook2.png" />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col}>
            <div>
              <h1 className={styles.heading}>Creating and sharing clips</h1>
              Encourages people to share their culture around their hometown by creating and sharing scrapbook clips. Creating is a mix of short form videos, gallery images and sticky notes– a real momento of the places that are special in your culture without being time-consuming to create,
            </div>
          </div>
          <div className={styles.secimg3}>
            <img src="images/sbook5.png" />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.secimg3}>
            <img src="images/sbook4.png" />
          </div>
          <div className={styles.col}>
            <div>
              <h1 className={styles.heading}>Finding adventures</h1>
              We organised everything by lists, making it easy to filter and search for clips. We also avoided the infinite scroll, we really want users to click on each clip and take the time to explore people’s scrapbook memories
            </div>
          </div>
        </div>

      </div>



      <div className={styles.container3}>
        <h2 className={styles.secheading}>The Design Process</h2>
        From user interviews to market research and our testing process, our ideas changed a lot through the course of this project! Here's how we created our product.
      </div>


      <div className={styles.container2}>
        <div className={styles.slab}>RESEARCH & DEFINE</div>
        <h2 className={styles.secheading}>User Interviews</h2>
        Given the prompt: connecting across generations and cultures, we conducted 8 in depth interviews with Dartmouth students, ranging from students who travelled often and loved exploring other cultures, to students who had studied abroad and those who struggled to connect with other places.
        <br/><br/>
        To organise our findings, we created detailed empathy maps for each user interview.
      </div>
    </>
  );
}