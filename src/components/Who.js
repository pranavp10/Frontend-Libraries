import Image from 'next/image';
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import Container from './Container';

const Who = () => (
  <div>
    <div className="flex flex-col justify-center text-center">
      <div>
        <h5 className="mb-4">
          New npm
          <br />
          packages ?
        </h5>
        <div className="max-w-xs m-auto">
          I am always starving to try out new npm packages so that I can implement those in my up
          coming projects. Do you know any other packages that I could try out? Hit me up, let's
          discuss and will try to add it in the list.
        </div>
        <div className="text-center">
          <a href="mailto:pranavkp.me@outlook.com?subject=libraries.now.sh&body=package%20name%3A-%0D%0Agithub%20link%3A-%0D%0Awebsite%3A-">
            Email Me
          </a>
        </div>
      </div>
      <div className="text-center">
        <div>
          <Image width={72} height={72} name="Pranav Patel" src="/author.jpeg" />
          <p>Meet The Author</p>
        </div>
        <h6>Pranav Patel</h6>
        <p>Software Engineer</p>
        <p className="max-w-xs  m-auto">
          JavaScript, React, Design Systems, a software engineer by passion, loves solving problems.
          Most loved thing in js is the closure property, figuring out life's purpose.
        </p>
        <div className="text-center">
          <a href="https://www.linkedin.com/in/pranav-p-241914183">
            <AiFillLinkedin />
          </a>
          <a link="https://twitter.com/thatspranav">
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </div>
  </div>
);
export default Who;
