import { DiNpm } from 'react-icons/di';
import Container from './Container';
import HeroContainer from './HeroContainer';

const Hero = () => (
  <div className="flex justify-center flex-col">
    <HeroContainer>
      <Container flexDirection="column">
        <div>
          <h1 className="text-5xl lg:text-6xl font-extrabold">Frontend Libraries</h1>
          <div className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-lg">
            Best Frontend Libraries which are used by professionals working at facebook, Google,
            Microsoft and many other top companies.
          </div>
        </div>
        <div className="text-red-500">
          <DiNpm size="300px" />
        </div>
      </Container>
    </HeroContainer>
  </div>
);

export default Hero;
