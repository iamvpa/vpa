import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Portfolio
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