import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Zach.
        </BigTitle>
        <Subtitle>I'm creating web experiences for local businesses, communities, and start-ups.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Duke Advising Network"
            link="#"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            In order to understand student learning which occurs both in and out of the classroom, teach and guide students through an interactive process of observation and performance, allow students and mentors to work together to gather and assess artifacts and evidence of student learning, we helped Duke University launch a student advising network interactive website for the coming academic year.
          </ProjectCard>
          <ProjectCard
            title="Stem Cells Portal"
            link="https://www.stemcellsportal.com/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Articles for STEM CELLS and STEM CELLS Translational Medicine are embargoed for release until 9 a.m. Eastern U.S. time on the day the article is posted online. This policy applies to members of the media, authors, institutions' public information officers, and the public. Authors may not discuss their work with the media until 1 week before the mailing date or 1 week before online posting of the article, whichever is earlier, and must ensure that the media representatives agree to abide by the embargo policy. STEM CELLS Translational Medicine may refuse to publish a manuscript, despite acceptance for publication, if it has been prematurely released to the press.
          </ProjectCard>
          <ProjectCard
            title="Prepare"
            link="https://www.prepareforyourcare.org/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            All online communications via PREPARE are fully confidential. PREPARE collects personal information for use on the website. When you register with PREPARE and sign in, you are not anonymous to us. PREPARE uses information for the following general purposes: to customize the content of the website, fulfill your requests, improve our services, contact you, conduct research, and provide anonymous reporting for internal and external purposes.
          </ProjectCard>
          <ProjectCard
            title="New Stone Realty"
            link="https://newstonerealty.com/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            We build trusted partnerships - for life. We care, and it shows. Most of our new clients are referrals from past clients. Our clients return to us for advice, recommendations, and re-buying and selling because they know that we "have their back" - every step of the way.
          </ProjectCard>
          <ProjectCard
            title="Sagpools"
            link="https://sagpools.net/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Articles for STEM CELLS and STEM CELLS Translational Medicine are embargoed for release until 9 a.m. Eastern U.S. time on the day the article is posted online. This policy applies to members of the media, authors, institutions' public information officers, and the public. Authors may not discuss their work with the media until 1 week before the mailing date or 1 week before online posting of the article, whichever is earlier, and must ensure that the media representatives agree to abide by the embargo policy. STEM CELLS Translational Medicine may refuse to publish a manuscript, despite acceptance for publication, if it has been prematurely released to the press.
          </ProjectCard>
          <ProjectCard
            title="MBolden Ministries"
            link="http://mboldenministries.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Melissa's passions are Jesus, her family, teaching math and emboldening others to walk in their God-given gifts. Melissa loves to teach on God's love, the power of grace, and who we are in Christ. She loves to empower the Body of Christ to walk in freedom from fear and depression. Melissa can often be found writing women's bible studies and leading women into a deeper revelation of the Father's love through weekly bible studies and regular speaking engagements.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            I'm Zach and I recently completed my degrees in Computer Science and Biology at the University of North Carolina at Chapel Hill.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          This fall, I will be starting at the University of North Carolina at Chapel Hill School of Dentistry. I'll work with you to create a website for your personal needs or to represent your business.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Footer>
          &copy; 2019 by Zachary Burk.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
