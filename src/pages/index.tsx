import { Link } from 'react-router-dom';
import Layout from "../components/layout/layout";
import Foto from '@/images/FotoProfile.png'
import logo from '@/images/logo.png'
import SkillCard from '../components/layout/myskill';



const Home = () => {
  const resumeId = '1fcthzGZiVhREVRuWTGiug6WIGDrpenvY';
  const resumeUrl = `https://drive.google.com/uc?export=download&id=${resumeId}`;
  const portofolioId = '1JLAh6Iuou0qDdiLgBX_5kpyMptmxbyUK';
  const portofolioUrl = `https://drive.google.com/uc?export=download&id=${portofolioId}`;
  const mySkill = [
    {
      name: 'Front End Developer',
      languages: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'SCSS' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'Dart' },
      ],
      supports: [
        { name: 'Figma' },
        { name: 'Adobe Illustrator' },
      ],
      tools: [
        { name: 'Vite' },
        { name: 'Axios' },
        { name: 'Bootstrap, Tailwind, Bulma' },
        { name: 'Eslint' },
        { name: 'Vue JS' },
        { name: 'React JS' },
        { name: 'Flutter' },
      ]
    },
    {
      name: 'Back End Developer',
      languages: [
        { name: 'PHP' },
        { name: 'JavaScript' },
        { name: 'C#' },
      ],
      supports: [
        { name: 'MySQL' },
        { name: 'SQL Server' }
      ],
      tools: [
        { name: 'Postman' },
        { name: 'Swagger' },
        { name: 'Git, Github, Gitlab' },
        { name: 'Terminal' },
        { name: 'Laravel' },
        { name: '.Net' },
      ]
    }
  ];

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);

    if (element) {
      // Adjusting for the navbar height
      const navbar = document.querySelector('.navbar') as HTMLElement | null;
      if (navbar) {
        // Adjusting for the navbar height
        const navbarHeight = navbar?.offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offset = elementPosition - navbarHeight;

        window.scrollBy({ top: offset, behavior: 'smooth' });
      }
    }
  };




  return (
    <Layout>
      <section id='top'>
        <div id='myprofile' className='background-section-first'>
          <div className='container-layout fullCenter-flex'>
            <div className='fullCenter-flex isWrap home-layout'>
              <div className="wd-800-max">
                <img className="wd-600-max obj-fit-cover" src={Foto} alt="" />
              </div>
              <div className="txt-left mr-500">
                <p className="isBold fz-40 txt-default mt-20">I'm William</p>
                <p className="fw-500 fz-40 txt-secondaryS mt-20 typewriter"> A Software Developer</p>
                <button className='primary-outlined-btn plr-40 mt-20 isBold' onClick={() => {
                  scrollToElement('about');
                }}>About Me</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div id='about' className='background-section-second'>
          <div className='container-layout-50 fullCenter-flex'>
            <div className='flipper background-resume wd-1000-max rd-10 r-flex resume'>
              <div className='fullCenter-flex resume-content'>
                <div className='p-20 fullCenter-flex rd-ltlb-10 '>
                  <img className='square-300-max p-20' src={logo} alt="" />
                </div>
                <div className='p-20 rd-rtrb-10 txt-secondaryS fw-500 txt-left center-flexColumn wd-600-max'>
                  <h3 className='isBold fz-40 mb-10'>About Me</h3>
                  <p className='fz-13 fw-500'>  Hello my name is William and I'm a dedicated freelance web developer at Solid Team,
                    harnessing my skills in both front-end and backend engineering to the fullest.
                    It's my pride to graduate from <a href='https://www.uajy.ac.id/' className='txt-link-nd txt-primary'> Atma Jaya Yogyakarta</a>, where I not only excelled academically but also dived into several challenging freelance projects. Additionally, I've served as a coordinator for national events at UAJY and acted as an ambassador, showcasing our university's achievements to various high schools.
                  </p>                
                  <p className='fz-13  fw-500'>
                    These experiences have enriched me with a solid foundation in both technical aspects of web development and soft skills. I'm not just proficient in coding but also possess qualities like perseverance and patience in making crucial decisions. I remain deeply enthusiastic about continually learning and advancing in my role
                  </p>
                  <div className='flex isWrap'>
                    <button className='secondary-filled-btn plr-20 animation-child mt-20 mr-5'>
                      <Link className='txt-link-nd' to={resumeUrl}>
                        Resume
                      </Link>
                    </button>
                    <button className='primary-filled-btn plr-20 animation-child mt-20'>
                      <Link className='txt-link-nd' to={portofolioUrl}>
                        Portofolio
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div id='skill' className='background-section-third overflow-hidden'>
          <div className='container-layout'>
            <p className='fz-80 txt-center txt-primary isBold slide-bottom'>My Skill</p>
            <p className='txt-center isBold txt-secondaryS mt-10 fw-400 slide-bottom'>Here are some of my skills that i have learn until now</p>
            <div className='fullCenter-flexColumn isWrap'>
            {mySkill.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
            </div>
          </div>
        </div>
      </section>
      {/* <section id='project'>
        <div className='background-section-fourth'>
          <div className='container-layout'>

          </div>
        </div>
      </section> */}
      <section id='contact'>
        <div className='background-section-fifth overflow-hidden'>
          <div className='container-layout-30 txt-center fullCenter-flexColumn'>
            <p className='fz-80 txt-secondary txt-whtie isBold slide-bottom'>Contact Me</p>
            <div className='fullCenter-flex isWrap slide-Top'>
              <div className="isRounded svg-wrap mt-5">
                <a className='txt-link-nd' href="https://www.linkedin.com/in/willrens">
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                  </svg>
                </a>
              </div>
              <div className="isRounded svg-wrap mt-5">
                <a className='txt-link-nd' href="https://github.com/willrenss">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path></svg>
                </a>
              </div>
              <div className="isRounded svg-wrap mt-5">
                <a className='txt-link-nd' href="https://www.linkedin.com/in/willrens">
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                </a>
              </div>
              <div className="isRounded svg-wrap mt-5">
                <a className='txt-link-nd' href="mailto:wlourensius@gmail.com">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path></svg>
                </a>
              </div>
            </div>
          </div>        
        </div>
      </section>
    </Layout>
  );
};



export default Home;