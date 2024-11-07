import JavaScript from '@/assets/skill-icon/JavaScript.svg';
import React from '@/assets/skill-icon/React-Light.svg';
import VueJs from '@/assets/skill-icon/VueJS-Light.svg';
import Typescript from '@/assets/skill-icon/TypeScript.svg';
import Next from '@/assets/skill-icon/NextJS-Light.svg';

export interface IMockStackData {
  skillName:string,
  iconSrc:string,
}

const mockStackData:IMockStackData[] = [
  {
    skillName: 'Javascript',
    iconSrc: JavaScript,
  },
  {
    skillName: 'Typescript',
    iconSrc: Typescript,
  },
  {
    skillName: 'Vue',
    iconSrc: VueJs,
  },
  {
    skillName: 'React',
    iconSrc: React,
  },
  {
    skillName: 'Next',
    iconSrc: Next,
  },
];

export default mockStackData;
