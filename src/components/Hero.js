import Image from 'next/image';
import Container from './Container';
import HeroContainer from './HeroContainer';

const Hero = () => (
  <div className="flex justify-center flex-col bg-red-900">
    <HeroContainer>
      <Container flexDirection="column">
        <div>
          <h1 className="text-2xl font-bold text-gray-500">Frontend Libraries</h1>
          <div className="text-gray-500 mb-4 text-lg max-w-xs">
            Best Frontend Libraries which are used by professionals working at facebook, Google,
            Microsoft and many other top companies.
          </div>
        </div>
        <div>
          <Image width={500} height={500} src="/box.svg" alt="Man standing with empty box" />
        </div>
      </Container>
    </HeroContainer>
  </div>
);

export default Hero;
