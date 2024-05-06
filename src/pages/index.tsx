import { Link } from 'react-router-dom';
import Layout from "../components/layout/layout";
import Foto from '@/images/FotoProfile.png'

import logo from '@/images/logo.png'
const Home = () => {
  const fileId = '1ci_2jRGNzjx8olZ-q2Hs2QAL0fFBWQpE';
  const fileUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Layout>
      <section>
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
      <section id='about'>
        <div className='background-section-second'>
          <div className='container-layout-50 fullCenter-flex'>
            <div className='fullCenter-flex resume wd-1000-max rd-10 '>
              <div className='p-20 columncenter-flex rd-ltlb-10 ht-300 wd-50-cent'>
                <img className='square-300-max p-20' src={logo} alt="" />
              </div>
              <div className='bg-gray-bg p-20 rd-rtrb-10 txt-secondaryS fw-500 txt-left center-flexColumn wd-600-max ht-400'>
                <p className='isBold fz-40 mb-10'>About Me</p>
                Hello my name is William and I'm a dedicated freelance web developer at Solid Team, harnessing my skills in both front-end and backend engineering to the fullest. It's my pride to graduate from Atma Jaya Yogyakarta, where I not only excelled academically but also dived into several challenging freelance projects. Additionally, I've served as a coordinator for national events at UAJY and acted as an ambassador, showcasing our university's achievements to various high schools.
                <br></br>
                These experiences have enriched me with a solid foundation in both technical aspects of web development and soft skills. I'm not just proficient in coding but also possess qualities like perseverance and patience in making crucial decisions. I remain deeply enthusiastic about continually learning and advancing in my role.
                <Link to={fileUrl}>
                  <button className='secondary-filled-btn plr-20 animation-child mt-20'>My Resume</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='skill'>
        <div className='background-section-third'>
          <div className='container-layout'>

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