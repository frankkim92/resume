export interface IMockStackData {
  skillName:string,
  iconSrc:string,
}

const mockStackData:IMockStackData[] = [
  {
    skillName: 'Javascript',
    iconSrc: './src/assets/skill-icon/Javascript.svg',
  },
  {
    skillName: 'Typescript',
    iconSrc: './src/assets/skill-icon/Typescript.svg',
  },
  {
    skillName: 'Vue',
    iconSrc: './src/assets/skill-icon/VueJS-Light.svg',
  },
  {
    skillName: 'React',
    iconSrc: './src/assets/skill-icon/React.svg',
  },
  {
    skillName: 'Next',
    iconSrc: './src/assets/skill-icon/NextJS-Light.svg',
  },
];

export default mockStackData;
