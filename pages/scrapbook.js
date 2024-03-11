import Extracurriculars from '../components/Extracurriculars.js';
import styles from '../styles/scrapbook.module.css';
import NavBar from '../components/Navbar.js';
import Work from '../components/Work.js';
import Art from '../components/Art.tsx';
import MoreProjects from '../components/MoreProjects.js';

export default function Scrapbook() {
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.container}>
        <div className={styles.col}>
          <div className={styles.introContainer}>
            <h1 className={styles.mainheading}>Scrapbook</h1>
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
              <div className={styles.slab}>TIMELINE</div>
              2 weeks
            </div>
            <div className={styles.scopeItem}>
              <div className={styles.slab}>SKILLS</div>
              User Research,
              UX Design,
              UI Design,
              Prototyping
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
          <div className={styles.secimg3}>
            <img src="images/sbook3.png" />
          </div>
          <div className={styles.col}>
            <div>
              <h1 className={styles.heading}>Scrapbook</h1>
              A pocketable, community scrapbook for clips of your day-to-day adventures. We're a repository of special memories from locals & travelers.
              <br /><br />
              Combining old school scrapbooks & modern short-form content
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col}>
            <div>
              <h1 className={styles.heading}>Finding adventures</h1>
              We organised everything by lists, making it easy to filter and search for clips. We also avoided the infinite scroll, we really want users to click on each clip and take the time to explore people’s scrapbook memories
            </div>
          </div>
          <div className={styles.secimg3}>
            <img src="images/sbook4.gif" style={{ borderRadius: 50 }} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.secimg4}>
            <img src="images/sbook5.png" />
          </div>
          <div className={styles.col}>
            <div>
              <h1 className={styles.heading}>Creating and sharing clips</h1>
              Encourages people to share their culture around their hometown by creating and sharing scrapbook clips. Adding clips is a mix of short form videos, gallery images and sticky notes– a real momento of the places that are special in your culture without being time-consuming to create.
            </div>
          </div>
        </div>

      </div>



      <div className={styles.container4}>
        <h2 className={styles.secheading}>The Design Process</h2>
        From user interviews to market research and our testing process, our ideas changed a lot through the course of this project! Here's how we created our product.
      </div>


      <div className={styles.container2}>
        <div className={styles.slab}>RESEARCH</div>
        <h2 className={styles.secheading}>User Interviews</h2>
        Given the prompt: connecting across generations and cultures, we conducted 8 in depth interviews with Dartmouth students, ranging from students who travelled often and loved exploring other cultures, to students who had studied abroad and those who struggled to connect with other places.
        <br /><br />
        To organise our findings, we created detailed empathy maps for each user interview.
        <br /><br />
        <img src="images/sbook6.png" />
        <br /><br />
        <h2 className={styles.secheading}>Key Insights</h2>
        We learned 3 main things from our 6 user interviews.
        <div className={styles.row}>
          <div className={styles.col2}>
            <img src="images/s7.png" style={{ maxWidth: 300, marginLeft: 'auto', marginRight: 'auto' }} />
            <h3>Authenticity vs Branded Tourism</h3>
            People tend to stray away from branded tourist experiences because they focus on sightseeing not really exploring the “culture”
          </div>
          <div className={styles.col2}>
            <img src="images/s8.png" style={{ maxWidth: 300, marginLeft: 'auto', marginRight: 'auto' }} />
            <h3>Finding the Best Places</h3>
            The best spots in people’s hometowns are not always on Yelp, the places connected to their culture and their special memories are things they can only share in a more personal way
          </div>
          <div className={styles.col2}>
            <img src="images/s9.png" style={{ maxWidth: 300, marginLeft: 'auto', marginRight: 'auto' }} />
            <h3>Engaging With People’s Lives</h3>
            People get more out of travel when they immerse themselves in locals’ lives, such as going to an art class or having everyday experiences and picking up on cultural differences through that
          </div>
        </div>


      </div>


      <div className={styles.container3}>
        <div className={styles.slab}>DEFINE</div>
        <h2 className={styles.secheading}>Personas & Journey Maps</h2>
        Based on our interviews, we decided to focus on these three insights and improving the experience of connecting with other cultures through bringing delight to these aspects of the experience.
        <br /><br />
        To further empathise with our user, we created a <b>user persona</b>:
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/s10.png" style={{ maxWidth: 800 }} />
        </div>
        <br /><br />
        We then created a <b>journey map</b> to understand the pain points and opportunities for delight in the user’s journey
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/s11.png" style={{ maxWidth: 800 }} />
        </div>
        <br /><br />
        <h2 className={styles.secheading}>POVs & Needs</h2>
        We then defined some needs for our user group based on their journey.
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/s12.png" style={{ maxWidth: 800 }} />
        </div>
        <br /><br />
        We decided to focus on the part of the journey where people are searching for ways to connect with different cultures and looking a friendly guide or inspiration. We wanted to provide a platform for users to be able to be exposed to different facets of people’s lives from different cultures.
      </div>


      <div className={styles.container2}>
        <div className={styles.slab}>IDEATE</div>
        <h2 className={styles.secheading}>How Might We</h2>
        To help in the process of ideation, we came up with a few how might we questions to guide our brainstorming.
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/s13.png" style={{ maxWidth: 800 }} />
        </div>
        <br /><br />

        <h2 className={styles.secheading}>Brainstorm</h2>
        After our first whiteboard brainstorm and seeing different directions we could go in, we realised that part of what could make travel experiences more authentic was taking people back to their childhood and special, deep memories, contained in scrapbooks.
        <br /><br />
        These could help spotlight some of the deeper connection with places and their culture that tourism loses. We could try to encourage people to share their culture of their hometown and explore other ones through real experiences of people local to the place.
        <br /><br />
        With this idea, we made some crazy 8 sketches to brainstorm features that could be useful and delightful in such an app.
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/s14.png" />
        </div>
        <br /><br />
        After discussing each of these as a team and asking for some user feedback on what users would like to see, we decided to prioritise this list of key features:

        <ul style={{ paddingLeft: 100 }}>
          <li>Homepage with a search by location</li>
          <li>Surprise me: to find new locations</li>
          <li>Displaying clips by locations with search and filters</li>
          <li>Individual clip scrapbooks: ability to connect with people through them</li>
          <li>Profile pages</li>
          <li>Appreciation walls: for people to leave appreciative notes on experiences they loved</li>
          <li>Bookmarked memories with filters to find what you need</li>
          <li>My clips: sorted by date</li>
          <li>A shuffle/memory of the day for my clips</li>
        </ul>
      </div>


      <div className={styles.container3}>
        <div className={styles.slab}>PROTOTYPING</div>
        <h2 className={styles.secheading}>Low Fidelity Grayscales</h2>
        To experiment with alignment, hierarchy and usability on our screens, we converted our sketches to greyscale mockups. We tried different ways to navigate the app without it being confusing to perform different tasks and different ways to make the interface engaging but not addictive.
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/s15.png" style={{ maxWidth: 800 }} />
        </div>
        <br /><br />
        We took our favourite iterations from our user-testing into our high fidelity prototype.
      </div>

      <div className={styles.container2}>
        <div className={styles.slab}>PROTOTYPING & TESTING</div>
        <h2 className={styles.secheading}>High Fidelity Prototypes</h2>

        <h3>Searching for a clip</h3>
        The main purpose of our app is to make it an easy experience for users to find activities and local spots in a new place.
        <br /><br />
        To this end, we crafted carefully thought out <b>filters</b> for our search page. The primary search is by location, however users can then narrow in on activities they like, seasons they are planning to visit in and what age group’s activities they might connect best with.
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/s16.png" style={{ maxWidth: 1200 }} />
        </div>
        <br /><br />

        <h3>Clips & walls</h3>
        Each clip is crafted with <b>personal connection</b> in mind. You see personal memories and anecdotes from the creator as your browse and understand why this memory is important to them.
        <br /><br />
        You also see personal stories and anecdotes from people who engaged in the activity
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/s17.png" style={{ maxWidth: 1200 }} />
        </div>
        <br /><br />

        <h3>Surprise me</h3>
        For the more thrill seeking population we interviewed, we added a surprise me modal. It takes you to a random clip from a random location within your preferred distance; a place you may not even know exists, but whose culture you can now explore.
        <br /><br />
        This slider was added after much deliberation on what was non-negotiable to someone looking for adventure. We decided on driving distance because travel time came up as one of the biggest factors from our interviews especially for people planning something spontaneous.
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/s18.png" style={{ maxWidth: 1200 }} />
        </div>
        <br /><br />

        <h3>Creating A clip</h3>
        This flow focuses on creating a memory that is special and detailed without too much effort or time-consumption. We incorporated multimedia while keeping the traditional scrapbook experience alive.
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/s19.png" style={{ maxWidth: 1200 }} />
        </div>
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/s20.png" style={{ maxWidth: 1000 }} />
        </div>
        <br /><br />
      </div>

      {/* TESTING */}
      <div className={styles.container3}>
        <div className={styles.slab}>TESTING</div>
        <h2 className={styles.secheading}>Feedback & Insights</h2>
        <h3>1. Confirmation Modals</h3>
        From our user testing, one of the biggest takeaways was that users were unsure whether clips had been created and confused by the navigation following that page. This lead us to add more confirmation popups, reassuring the user that the task had been completed successfully.
        <br /><br />

        <h3>2. Intuitive Terminology</h3>
        Hearing users go through the app and use terms like ‘clip’, ‘explore’, ‘digital diary’, etc. to describe elements of our design inspired us to incorporate some of those terms into our branding. Why not use the labels users intuitively come up with instead of choosing different ones for them to get used to.
        <br /><br />

        <h3>3. Nostalgic Scrapbook Feel</h3>
        The overwhelming positive feedback that we received from users was that they were pleasantly surprised with the realism, creativity and nostalgia that our UI provided.  We worked to further build on this design by adding both decorative elements and additional, editable screens with the same theme.
        <br /><br />
      </div>

      {/* next steps */}
      <div className={styles.container2}>
        <div className={styles.slab}>ITERATION</div>
        <h2 className={styles.secheading}>Takeaways and Next Steps</h2>
        We created Scrapbook to bring delight to those looking to connect with other cultures and to help them bring inspiration from real, everyday memories of people from around to world, local to a diverse range of cultures into their experience.
        <br /><br />
        From users who loved the old school feel of the UI, transporting them back to their special scrapbook days, to those who expressed that they would constantly use the surprise me feature and drive to recommended, random places to experience a memory from the book of a stranger and fulfil their thirst for everyday exploration, we received so much positive feedback.
        <br /><br />
        Our testing also inspired us to ideate <b>future directions</b> for this project. Some of these are:
        <ul>
          <li>Notifications– We want to inspire people to share more of their daily lives and culture with the world. Whether it’s a weekly bump, asking “what’s something special you did this week?” to a more infrequent reminder that scrapbook is out there, ready to add some exploration to their lives, we want to continue to experiment with ways to engage users. </li>
          <br />
          <li>More spontaneity– users loved the ‘surprise me’ feature. While the filters and searching were remarked on as great for people who knew what they were looking to explore, most users loved the thrill of exploring the culture of a place that they couldn’t even point out on a map. We want to customise these ‘surprise’ recommendations more based on user’s interests, from art to cooking, we want to personalise the app to help them find something they can immediately connect with in an unfamiliar place.</li>
        </ul>
        <br />
        We’d like to thank Professor Lorie and our wonderful TAs for the experience we had. While this project was challenging under a 2 week timeline, we learnt so much about testing, prototyping, iterating on feedback and producing a solution that brought joy to our users. We’d love to conduct more testing and continue to iterate and refine on our MVP in the future.
      </div>

      <MoreProjects/>
      
    </>
  );
}