import Contact from '@/pages/Contact';
import Profile from '@/pages/Profile';
import TechStack from '@/pages/TechStack';
import PortFolio from '@/pages/PortFolio';
import Title from './Title';

export default function Home() {
  return (
    <><div><Title /></div>
      <div><Profile /></div>
      <div><TechStack /></div>
      <div><PortFolio /></div>
      <div><Contact /></div>
    </>
  );
}
