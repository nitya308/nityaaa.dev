import Extracurriculars from '../components/Extracurriculars.js';
import styles from '../styles/scope.module.css';
import NavBar from '../components/Navbar.js';
import Work from '../components/Work.js';
import Art from '../components/Art.tsx';
import MoreProjects from '../components/MoreProjects.js';

export default function SmartScope() {
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.container}>
        <div className={styles.col}>
          <div className={styles.introContainer}>
            <h1 className={styles.mainheading}>Smart Microscope</h1>
            A smart assistant for viewing digital slides under a microscope
          </div>
          <div className={styles.scope}>
            <div className={styles.scopeItem}>
              <div className={styles.slab}>CONTEXT</div>
              The DALI Lab
            </div>
            <div className={styles.scopeItem}>
              <div className={styles.slab}>TEAM</div>
              3 Designers <br></br>
              3 Developers <br></br>
              3 Data devs & 1 PM
            </div>
            <div className={styles.scopeItem}>
              <div className={styles.slab}>TIMELINE</div>
              10 weeks
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
        <img src="images/scope/s1.png" className={styles.mainImg2} />
      </div>

      {/* the problem */}
      <div className={styles.container2}>
        <div className={styles.slab}>THE PROBLEM</div>
        <h2 className={styles.secheading}>Diagnosing & Using AI in Digital Pathology</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li> Viewing digital slides on the computer is <b>time consuming</b> and <b>ineffective</b> </li>
          <br />
          <li>Pathologists want to use AI to aid in diagnosis but lack an accessible interface, <b>tools</b> and <b>information</b> about available models</li>
          <br />
          <li>Ordering stains and levels on slides is <b>tedious</b> and complicated on a computer</li>
        </ul>
      </div>

      <div className={styles.container3}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.slab1}>THE OPPORTUNITY</div>
            <h2 className={styles.secheading2}>Smart Microscope</h2>
            <span>A team at DALI Lab along with Dr. Sriharan at DHMC, developed a smart microscope, a tool to view digital slides under a microscope as if they were real. It uses space tracking on the fake slide and zoom technology to achieve the speed and precision of a real microscope.</span>
            <br />
            <span><b>Smart Assistant</b> is the tablet interface that controls the microscope.</span>
            <br />
            <span><b>How might we</b> help pathologists diagnose cases, order additional tests and use AI to aid diagnosis on the SmartScope?</span>
          </div>
          <div className={styles.secimg5}>
            <img src="images/scope/s2.png" />
          </div>
        </div>


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
        <h2 className={styles.secheading}>Tablet App: Smart Assistant</h2>
        <div className={styles.row}>
          <div className={styles.secimg4}>
            <img src="images/scope/hifi1.png" />
          </div>
          <div className={styles.col}>
            <div>
              <h1 className={styles.heading}>Diagnosing Cases</h1>
              Each tray in traditional pathology contains slides from up to 20 cases. Smart Assistant allows you to work through each tray, highlightling progress on the current case as you work. It displays key information adobe the slides an additional details upon selecting each slide.
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col}>
            <div>
              <h1 className={styles.heading}>AI Assistant</h1>
              Recommends AI models based on the type of cell in the slide. We display metrics about models in a simple way, explaining terms such as ROC curves and clearly informing doctors of the model’s performance and intended use cases.
            </div>
          </div>
          <div className={styles.secimg3}>
            <img src="images/scope/aiflow.gif" style={{ borderRadius: 10 }} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.secimg4}>
            <img src="images/scope/hifi3.png" />
          </div>
          <div className={styles.col}>
            <div>
              <h1 className={styles.heading}>Shelf View</h1>
              Equips doctors with an overview of their trays and cases for the day, three categories of cases to tackle and allows for planning workload. Also emphasizes progress throughout the workday.
            </div>
          </div>
        </div>

      </div>



      <div className={styles.container3}>
        <h2 className={styles.secheading2}>The Design Process</h2>
        From user interviews to market research and our testing process, our ideas changed a lot through the course of this project! Here's how we created our product.
      </div>


      <div className={styles.container2}>
        <div className={styles.slab}>RESEARCH</div>
        <h2 className={styles.secheading}>User Interviews</h2>
        I interviewed pathologists across DHMC about their work. I focused both on their experiences and challenges in traditional pathology, to see what could be improved in a digital version and on their experiences with digital slides and using AI.
        <br /><br />
        Here are some quotes from my interviews that explain users' frustrations
        <br /><br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/scope/interviews.png" style={{ maxWidth: 1000 }} />
        </div>
      </div>

      <div className={styles.container3}>
        <div className={styles.slab1}>RESEARCH</div>
        <h2 className={styles.secheading2}>Competitive Research</h2>
        I researched AI assistant technologies in the market and gained insight on which aspects were doing well and which were not through my interviews.
        <br /><br />
        <div className={styles.row}>
          <div className={styles.secimg4}>
            <img src="images/scope/ind1.png" style={{ borderRadius: 10 }} />
          </div>
          <div className={styles.col}>
            <ul style={{ paddingLeft: 20, paddingTop: 50 }}>
              <li> Option to switch between slides quickly on the left </li>
              <br />
              <li>Limited information and explanation about model, less beginner-friendly</li>
              <br />
              <li>Viewing results through a trackpad scroll and zoom is difficult</li>
            </ul>
          </div>
        </div>
        <br /><br />
        <div className={styles.row}>
          <div className={styles.secimg4}>
            <img src="images/scope/ind2.png" style={{ borderRadius: 10 }} />
          </div>
          <div className={styles.col}>
            <ul style={{ paddingLeft: 20, paddingTop: 50 }}>
              <li> Important case details are highlighted on the left </li>
              <br />
              <li>Slide view is small and not intuitively placed in the middle right</li>
              <br />
              <li>Can track status of orders through the “orders” tab</li>
            </ul>
          </div>
        </div>
        {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/scope/interviews.png" style={{ maxWidth: 1000 }} />
        </div> */}
      </div>


      <div className={styles.container2}>
        <div className={styles.slab}>DEFINE</div>
        <h2 className={styles.secheading}>Personas & Journey Maps</h2>
        Based on our interviews we created a user persona of a pathologist new to digital pathology and AI, but excited for a better diagnostic experience.
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/scope/persona.png" style={{ maxWidth: 800 }} />
        </div>
        <br /><br />
        We then created a <b>journey map</b> to understand the pain points and opportunities for delight in the user’s journey
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/scope/map.png" style={{ maxWidth: 800 }} />
        </div>
      </div>

      <div className={styles.container3}>
        <div className={styles.slab1}>DEFINE</div>
        <h2 className={styles.secheading2}>POVs & Needs</h2>
        We then defined some needs for our user group based on their journey.
        <br></br><br></br>
        Pathologists using the Smart Microscope need to
        <ul style={{ paddingLeft: 20 }}>
          <li>diagnose cases in a flow that equips them with key information: number of slides, MRN, DOB and patient info, maximizes speed moving through slides and minimizes the risk of error in missing slides</li>
          <br />
          <li>learn about AI models available and choose the right model for a case in a beginner-friendly way</li>
          <br />
          <li>ordering stains and levels on slides through a simple process and be apprised on the status and waiting time for these slides to return.</li>
        </ul>
      </div>


      <div className={styles.container2}>
        <div className={styles.slab}>IDEATE</div>
        <h2 className={styles.secheading}>Sketching</h2>
        After our first whiteboard brainstorm and seeing different directions we could go in, we realised that part of what could make travel experiences more authentic was taking people back to their childhood and special, deep memories, contained in scrapbooks.
        <br /><br />
        These could help spotlight some of the deeper connection with places and their culture that tourism loses. We could try to encourage people to share their culture of their hometown and explore other ones through real experiences of people local to the place.
        <br /><br />
        With this idea, we made some crazy 8 sketches to brainstorm features that could be useful and delightful in such an app.
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/scope/gray.png" />
        </div>
        <br />
      </div>


      <div className={styles.container3}>
        <div className={styles.slab1}>PROTOTYPING</div>
        <h2 className={styles.secheading2}>Low Fidelity Grayscales</h2>
        I wanted to deeply understand the information pathologists look at first while viewing slides. To this end, I created grayscale to user test. We prototyped ways of navigating to the AI assistant, presenting information about models and tracking case diagnosis.
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/scope/grey.png" style={{ maxWidth: 1200 }} />
        </div>
        <br /><br />
        Based on the feedback highlighted above, I iterated and refined to make further prototypes.
      </div>

      <div className={styles.container2}>
        <div className={styles.slab}>PROTOTYPING & TESTING</div>
        <h2 className={styles.secheading}>High Fidelity Prototypes</h2>

        <h3>Your Shelf Display</h3>
        The first thing each pathologist sees every morning is a list of current cases for the day.
        We separate the trays into <b>three categories</b>. Each category has different sets of important information.
        <div style={{ height: 20 }} />
        Based on interviews, I designed for a sense of <b>progress</b>. A doctor gets a visual sense of their work throughout the day and is equipped with the information to plan out their workload.
        <br /><br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/scope/yourshelf.png" style={{ maxWidth: 1300 }} />
        </div>
        <br /><br />

        <h3>Diagnosing Cases</h3>
        A key insight from my interviews was that pathologists have to keep track of many cases with multiple parts and slides. An easy error is signing off a case without looking at all slides and having to backtrack.
        <br /><br />
        Pathologists loved visually seeing how much more is available before making a decision on a case– something which is a pain point with physical trays and slides.
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/scope/track.png" style={{ maxWidth: 1200 }} />
        </div>
        <br /><br />

        <h3>AI Assistant</h3>
        I focused on making this flow feel <b>accessible</b> and <b>informative</b> to pathologists new to AI.
        <br />
        Categories are automatically recommended based on the cell type on the slide. The catalog focuses on the most important information, an image of the type of result, a description and developer. An information button is available to provide detailed metrics without cluttering the window for repeat users.
        <br /><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/scope/aiflow.gif" style={{ borderRadius: 10, maxWidth: 300 }} />
        </div>
        <br /><br />

        <h3>Ordering Stains and Levels</h3>
        A common frustration, especially at Dartmouth Hitchcock Medical Center, is that ordering additional tests on a slide called “stains and levels” is tedious. It is usually 8 clicks and a combination of many keyboard shortcuts on a computer.
        <br /><br />
        I aimed to simplify this via a 3 step ordering process: category → test name → order
        <div style={{ height: 50 }} />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src="images/scope/order.png" style={{ maxWidth: 1300 }} />
        </div>
        <br /><br />


      </div>

      {/* TESTING */}
      <div className={styles.container3}>
        <div className={styles.slab1}>TESTING</div>
        <h2 className={styles.secheading2}>Feedback & Insights</h2>
        <h3>1. A Training or Onboarding Flow</h3>
        Talking to first time users at Technigala (our termly tech showcase), I noticed a need for onboarding for first time users. Physical aspects of the scope, such as pressing the hardware button on the microscope to activate the AI mode, require some explanation for new users. Integrating hardware tutorials into the app is a next step.
        <br /><br />

        <h3>2. User-Friendly Interface</h3>
        Users who tried it described it as “the most user-friendly thing out there for pathologists.” They found the switching of slides through a case, the presentation of the AI options and especially being able to order a test with 3 clicks intuitive and easy to use.
        <br /><br />
      </div>

      {/* next steps */}
      <div className={styles.container2}>
        <div className={styles.slab}>ITERATION</div>
        <h2 className={styles.secheading}>Takeaways and Next Steps</h2>
        While this project was challenging, I enjoyed the process of researching, designing and testing an app in 10 weeks.
        <div style={{ height: 20 }} />
        These designs are slated to be implemented in the Spring of 2024 and tested further in studies at DHMC to test the effectiveness of the smart microscope.
        <div style={{ height: 20 }} />
        Here are some of my takeaways from the project:

        <div className={styles.row}>
          <div className={styles.col2}>
            <h3>Understanding foreign terms</h3>
            I dived deep, learning about medical terms that once seemed unfamiliar. Asking questions about these helped me understand what they meant to doctors and what information they were actually gaining from different words and screens.
          </div>
          <div className={styles.col2}>
            <h3>Considering all stakeholders</h3>
            I learnt to consider not only pathologists, but also hospital technicians, researchers & the developers of AI models and what they wanted to showcase. Balancing these needs is a valuable skill I learnt.
          </div>
          <div className={styles.col2}>
            <h3>Designing for simplicity</h3>
            Doctors’ chief complaint about current medical interfaces was complexity which slowed them down. With this in mind, I tried to keep any action to within 3 clicks, optimizing for speed. Many doctors have also low familiarity with technology so I supplemented cues with words.
          </div>
        </div>

        <div style={{ height: 20 }} />
        I’d like to thank our partner, Dr. Sriharan, my design mentor, Daniel Lubliner, Professor. Lorie and the entire Smart Microscope team for making this wonderful project come to life.
      </div>
      <MoreProjects></MoreProjects>
    </>
  );
}