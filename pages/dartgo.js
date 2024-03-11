import Extracurriculars from '../components/Extracurriculars.js';
import styles from '../styles/dartgo.module.css';
import NavBar from '../components/Navbar.js';
import Work from '../components/Work.js';
import Art from '../components/Art.tsx';

export default function DartGo() {
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.container}>
        <div className={styles.col}>
          <div className={styles.introContainer}>
            <h1 className={styles.mainheading}>DartGo</h1>
            Connecting Dartmouth students on FSPs through experience
          </div>
          <div className={styles.scope}>
            <div className={styles.scopeItem}>
              <div className={styles.slab}>CONTEXT</div>
              ENGS12 Final Project
            </div>
            <div className={styles.scopeItem}>
              <div className={styles.slab}>TEAM</div>
              Nitya Agarwala <br></br>
              Mason McIlwain<br></br>
              Anna Wu<br></br>
              Vivian Tran
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
        <img src="images/dartgo/main.png" className={styles.mainImg} />
      </div>

      {/* the problem */}
      <div className={styles.container2}>
        <div className={styles.slab}>THE PROBLEM</div>
        <h2 className={styles.secheading}>Students on study abroad programs often feel overwhelmed </h2>
        <ul style={{ paddingLeft: 20 }}>
          <li> Students are <b style={{ color: '#015B35' }}>unfamiliar with the city</b>, with ways to connect with people and locals, find safe areas, take public transport and find their spaces.</li>
          <br />
          <li> Students often <b style={{ color: '#015B35' }}>don't know people</b> in their study abroad programs. Living with host families far from other Dartmouth students sometimes makes it hard to reach out and connect and being away from friends on campus often feels isolating. </li>
          <br />
          <li> FSP-goers feel a <b style={{ color: '#015B35' }}>guilt of inaction</b> for not immediately making the most of the place, for feeling overwhelmed in a new city and for feeling afraid to reach out to others on the program. </li>
        </ul>
      </div>

      <div className={styles.container3}>
        <div className={styles.slab}>THE OPPORTUNITY</div>
        <h2 className={styles.secheading}>A Way To Merge</h2>
        <h3 className={styles.secheading}>Want for new connections + Want for new experiences</h3>
        We want to make it feel less overwhelming for students to step out of their comfort zone and explore a foreign city while getting to know the people on their program.
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
        <h2 className={styles.secheading}>DartGo, an FSP Friend</h2>
        <div className={styles.row}>
          <div className={styles.secimg4}>
            <img src="images/dartgo/g1.png" />
          </div>
          <div className={styles.col}>
            <div>
              <h1 className={styles.heading}>Feel Excited</h1>
              Looking at different, heartwarming experiences other students had on FSPs can makes you feel excited and find footing on where you start exploring. One user described it as similar to the thrill of perusing Zillow; you can image yourself in the place.
              <br /><br />
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col}>
            <div>
              <h1 className={styles.heading}>Feel Comforted</h1>
              We encourage upperclassmen to share personal memories from their adventures, including information on price & safety. Our <b>directions</b> features include safe and easy directions to the place including a note from past goers on public transport and its safety after hours.
            </div>
          </div>
          <div className={styles.secimg4}>
            <img src="images/dartgo/g3.gif" style={{ borderRadius: 20 }} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.secimg4}>
            <img src="images/dartgo/g2.png" />
          </div>
          <div className={styles.col}>
            <div>
              <h1 className={styles.heading}>Feel Connected</h1>
              Students can start adding experiences that they find exciting to their <b>bucketlist</b> before they even start their program. They can request to be <b>matched</b> with another Dartmouth student (or a group) on their program who's interested in the same activity! It reduces the friction of getting to know people and start exploring.
            </div>
          </div>
        </div>

      </div>



      <div className={styles.container4}>
        <h2 className={styles.secheading}>Pathway To Our Solution</h2>
        Our initial prompt for this project was to design an experience that improves the experiences of Dartmouth students on an off-term.
        <br />
        From housing for internships, to career search, there were plenty of off-term challenges to tackle, but after learning that over 30% of students at Dartmouth participate in a study abroad or <b>foreign study program (FSP)</b>, we decided that this would be our research space.
      </div>


      <div className={styles.container2}>
        <div className={styles.slab}>RESEARCH</div>
        <h2 className={styles.secheading}>User Interviews</h2>
        In our initial set of 15 interviews, students on FSPs described feeling lost and disconnected, especially their first few weeks. They didn’t know many people on their programs and missed their friends and support systems back home. We synthesized findings from our interviews below
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/dartgo/interviews.png" style={{ maxWidth: 1000 }} />
        </div>
        <br /><br />
      </div>


      <div className={styles.container3}>
        <div className={styles.slab}>DEFINE</div>
        <h2 className={styles.secheading}>Need Finding</h2>
        Based on these insights, we came up with our initial definition of what we thought was a challenge that could be tackled
        <br /><br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/dartgo/need.png" style={{ maxWidth: 1000 }} />
        </div>
        <br /><br />
      </div>


      <div className={styles.container2}>
        <div className={styles.slab}>RESEARCH</div>
        <h2 className={styles.secheading}>Secondary interviews</h2>
        We lined up 10 secondary interviews to further develop our HMW and POV statements and understand students lack of connection. However, our interviewees were less than excited about what we were trying to achieve.
        <br /><br />
        This one quote in particular stood out to us.
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/dartgo/i1.png" style={{ maxWidth: 1000 }} />
        </div>
        <br /><br />
        We realized that we may have <b>misinterpreted</b> the lack of connection and support system that FSP students were feeling as a desire to stay connected to Dartmouth.
        <br /><br />
        In our follow up interviews, we dug deep specifically into this aspect and tried to understand what users really wanted.
      </div>

      <div className={styles.container3}>
        <div className={styles.slab}>RESEARCH</div>
        <h2 className={styles.secheading}>Dig Deeper</h2>
        In our secondary interviews, students elaborated on these challenges.
        <br /><br />
        <div className={styles.row}>
          <div className={styles.col2}>
            <img src="images/dartgo/int2.png" style={{ borderRadius: 20 }} />
          </div>
          <div className={styles.col2}>
            <img src="images/dartgo/int1.png" style={{ borderRadius: 20 }} />
          </div>
          <div className={styles.col2}>
            <img src="images/dartgo/int3.png" style={{ borderRadius: 20 }} />
          </div>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.slab}>RESEARCH</div>
        <h2 className={styles.secheading}>Key Insights</h2>
        We grouped our user interview insights into 3 main buckets:
        <br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/dartgo/analysis.png" style={{ maxWidth: 800 }} />
        </div>
      </div>

      <div className={styles.container4}>
        <h2 className={styles.secheading}>Pivot</h2>
        This was our big pivot- we went from trying to find ways to keep FSP students feeling connected to Dartmouth to helping them feel comfortable, excited and energized to make connections and make the best of their study abroad.
      </div>

      <div className={styles.container2}>
        <div className={styles.slab}>DEFINE</div>
        <h2 className={styles.secheading}>Personas & POV</h2>
        To further empathise with our user, we created a <b>user persona</b>:
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/dartgo/pov.png" style={{ maxWidth: 800 }} />
        </div>
        <br /><br />
      </div>

      <div className={styles.container3}>
        <div className={styles.slab}>DEFINE</div>
        <h2 className={styles.secheading}>Journey Maps & Dimensions of Difference</h2>
        <div className={styles.row}>
          <div className={styles.col}>
            We mapped out in detail what a user's journey from applying to committing to an FSP looks like!
            <br /><br />
            We accounted for the process of making GroupMes with fellow members, booking flights and travelling, arriving and that first night's dinner.
            <br /><br />
            We also included our user's different interests, activities our personas may be interested in and others in this detailed map
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <img src="images/dartgo/pov2.jpg" style={{ maxWidth: 500, borderRadius: 20 }} />
          </div>
        </div>
      </div>


      <div className={styles.container2}>
        <div className={styles.slab}>IDEATE</div>
        <h2 className={styles.secheading}>How Might We</h2>
        We mapped our interview insights into How Might We statements, to guide our brainstorming
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/dartgo/prob.png" style={{ maxWidth: 800 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/dartgo/hmw.png" style={{ maxWidth: 800 }} />
        </div>
      </div>

      <div className={styles.container3}>
        <div className={styles.slab}>IDEATE</div>
        <h2 className={styles.secheading}>Brainstorm</h2>
        Our first whiteboard brainstorm was full of <b>icebreaker activities</b> for the first night.
        <br /><br />
        We considered card games and questions that would help students bond and understand what experiences they wanted to share in common.
        <br /><br />
        However, the <span style={{ color: '#14A266', fontWeight: 600 }}>initial feedback</span> on these was that often people lived far from each other on an FSP. They were excited to start exploring the new place but didn’t always know <b>where</b> or <b>with who</b>.
        <br /><br />
        Also people didn’t always bond well in large groups but preferred <b>one-on-one</b> friendships, formed through common interests or a small <b>shared experience</b>.
        <br /><br />
        This led to our solution- DartGo. We decided to have upperclassmen post places they loved in different locations. New FSP-goers could then add these to a bucket list and match with either one person or a group of people on the same FSP who were also interested.
        <br /><br />
        Here were our initial sketches
        <br /><br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/dartgo/sketch.png" style={{ maxWidth: 1000 }}/>
        </div>
        <br />
      </div>

      <div className={styles.container2}>
        <div className={styles.slab}>PROTOTYPING</div>
        <h2 className={styles.secheading}>Low Fidelity Grayscales</h2>
        Here we focused on information display: what felt most important to know about a shared experience. Grayscaling allowed us to dive deep into hierarchy of information
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/dartgo/gray.png" style={{ maxWidth: 1200 }} />
        </div>
        <br /><br />
        Later, when we came to UI, we focused on colors and feels that made the app feel exciting and comforting at the same time.
      </div>

      <div className={styles.container3}>
        <div className={styles.slab}>PROTOTYPING</div>
        <h2 className={styles.secheading}>Experiental Prototype</h2>
        We made Hanover our "fake FSP", collected recommendations and pictures from upperclassmen and sent 3 pairs of new freshman off on some adventures that they expressed a common interest in.
        <br /><br />
        Here's a video from one of our prototypes and some <b>feedback</b>:
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <iframe width="1038" height="584"
            src="https://www.youtube.com/embed/guZtyGfvOTc?start=42"
            title="DartGo" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
        <br /><br />
      </div>

      <div className={styles.container2}>
        <div className={styles.slab}>PROTOTYPING & TESTING</div>
        <h2 className={styles.secheading}>High Fidelity Prototypes</h2>

        <h3>Intro to Rome? Paris? Cape Town?</h3>
        For the part of the journey when you’ve just been accepted into a study abroad program, we want to make the destination feel as comforting and exciting as possible. We map out the places Dartmouth students have been to and all the exciting adventures you could have.
        <div style={{ height: 20 }} />
        As you get closer, the $$$ signs, upvotes and reviews help you make your decision about where to start. We want to alleviate some of the feeling lost and feeling like this is a completely unknown place.
        <div style={{ height: 50 }} />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/dartgo/proto3.gif" style={{ maxWidth: 800 }} />
        </div>
        <br /><br />

        <h3>Choosing An Adventure</h3>
        Our testing showed that people love getting recommendations from people they know or know of. Including a range of reviews and pictures from fellow Dartmouth students who have been on this FSP follows from this idea. We hope someone sees a friend they recognize in a picture and is able to imagine themselves in the place.
        <div style={{ height: 20 }} />
        On the practical side- we have ratings for a quick glance, information on price and safety. Directions include modes of transport to get there, linking to maps with reviews on safety of public transport from past students.
        <div style={{ height: 50 }} />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/dartgo/g3.gif" style={{ maxWidth: 800, borderRadius: 20 }} />
        </div>
        <br /><br />

        <h3>Bucketlists & Matching</h3>
        Students can start adding experiences that they find exciting to their bucket list before they even start their program. They can request to be matched with another Dartmouth student (or a group) on their program who's interested in the same activity! We cater to both the more introverted and those who love bigger groups
        <div style={{ height: 20 }} />
        It reduces the friction of getting to know people and finding someone to go with you on an activity that you are interested in.
        <div style={{ height: 50 }} />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/dartgo/g2.png" style={{ maxWidth: 800 }} />
        </div>
        <br /><br />
      </div>

      {/* TESTING */}
      <div className={styles.container3}>
        <div className={styles.slab}>TESTING</div>
        <h2 className={styles.secheading}>Feedback & Insights</h2>
        <h3>1. Diverse experiences </h3>
        One user said that more niche experiences sometimes connect people better- for example she went to a salsa dancing class while abroad and would have loved to find someone in her program who also enjoyed that. We want to encourage users to share more niche and unique experiences like that that appeal to diverse interests
        <br /><br />

        <h3>2. Price range</h3>
        Some of the activities in the experiental prototype were on the pricier end. Having a filter and ability to filter out such activities appealed to users. They liked the $ signs but thought it could go further. Users also loved the browsing feel and comfort but wanted to balance practicality with it.
        <br /><br />

        <h3>3. Messaging in app? Initial ice-breakers?</h3>
        Users loved hanging out with new people through the app. They expressed that messaging in the app, rather than having to immediately give out a number to a new person to meet up could be positive! They also expressed an interest in initial icebreakers with your match/conversation starters through the app itself.
        <br /><br />
      </div>

      {/* next steps */}
      <div className={styles.container2}>
        <div className={styles.slab}>ITERATION</div>
        <h2 className={styles.secheading}>Takeaways and Next Steps</h2>
        We loved seeing users experience the joy of meeting new people and finding new adventures through DartGo. They described the app as comforting, making it feel easy and frictionless to meet people and find a new place.
        <br /><br />
        My biggest takeaway from this project is the importance of <b>pivoting</b> when we understand that our ideas don’t fit with the true experiences of our users. There can often be a gap between what we think users want and what they actually want and as designers, constant research and feedback at every stage helps us fill that gap!

        <br /><br />
        Our testing also inspired us to ideate <b>future directions</b> for this project. Some of these are:
        <ul>
          <li> A better matching algorithm</li>
          <li>Adding more budget-friendly & nuanced options</li>
          <li>Testing it on an actual study abroad location</li>
        </ul>
        <br />
        Our team would like to thank Professor Rafe and our wonderful TAs in ENGS12 Winter 2022 edition, for the experience we had. While this project was challenging under a 2 week timeline, we learnt so much about testing, prototyping, iterating on feedback and producing a solution that brought joy to our users.
      </div>
    </>
  );
}