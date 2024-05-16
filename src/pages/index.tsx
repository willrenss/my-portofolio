import { Link } from 'react-router-dom';
import Layout from "../components/Layout/layout";
import Foto from '@/images/FotoProfile.png'
import logo from '@/images/logo.png'
import SkillCard from '../components/Layout/myskill';



const Home = () => {
  const fileId = '1SXPI-uNG_PmchkNVTpqr1HZsGHolQu03';
  const fileUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
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
        { name: 'MySql' },
        { name: 'Sql Server' }
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
                  <button className='secondary-filled-btn plr-20 animation-child mt-20'>
                    <Link className='txt-link-nd' to={fileUrl}>
                      My Resume
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div id='skill' className='background-section-third'>
          <div className='container-layout'>
            <p className='fz-80 txt-center txt-primary isBold '>My Skill</p>
            <p className='txt-center isBold txt-secondaryS mt-10 fw-400'>Here are some of my skills that i have learn until now</p>
            <div className='fullCenter-flexColumn isWrap'>
            {mySkill.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
            </div>
          </div>
        </div>
      </section>
      <section id='project'>
        <div className='background-section-fourth'>
          <div className='container-layout'>

          </div>
        </div>
      </section>
      <section id='contact'>
        <div className='background-section-fifth'>
          <div className='container-layout-50'>

          </div>
        </div>
      </section>
    </Layout>
  );
};



export default Home;