import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typewriter from "typewriter-effect"
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I am a <br />

          <Typewriter options={{

            autoStart: true,
            loop: true,
          }} onInit={(typewriter) => { typewriter.typeString("developer.").pauseFor(3000).deleteAll().typeString("designer.").pauseFor(3000).deleteAll().typeString("programmer.").pauseFor(3000).deleteAll().start(); }} />

        </SectionTitle>
        <SectionText>
          Hello , My name is Vishnu Priy Agnihotri . I am a fourth year Computer Science undergraduate at NIT Uttarakhand with an interest in Web Development and Flutter Android App Development.
        </SectionText>
        <Button onClick={() => window.location = 'https://github.com/iamvpa/vpa/blob/main/vpaResumeV3.pdf'}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;