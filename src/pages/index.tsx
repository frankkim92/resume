import Profile from './Profile';
import TechStack from './TechStack';
import PortFolio from './PortFolio';
import Title from './Title';

export default function Index() {
  return (
    <><div><Title /></div>
      <div><Profile /></div>
      <div><TechStack /></div>
      <div><PortFolio /></div>
    </>
  );
}
