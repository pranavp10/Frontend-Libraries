import Image from 'next/image';
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const Who = () => (
  <div>
    <div className="flex max-w-5xl m-auto items-center flex-col p-6 sm:flex-row  justify-center lg:justify-between my-48">
      <div>
        <h5 className="mb-4 text-6xl font-extrabold">
          New npm
          <br />
          packages ?
        </h5>
        <div className="max-w-md m-auto text-xl my-7">
          I am always starving to try out new npm packages so that I can implement those in my up
          coming projects. Do you know any other packages that I could try out? Hit me up, let's
          discuss and will try to add it in the list.
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:pranavkp.me@outlook.com?subject=libraries.now.sh&body=package%20name%3A-%0D%0Agithub%20link%3A-%0D%0Awebsite%3A-">
          <div className="text-center p-3 bg-red-500 text-white rounded-md text-xl font-bold">
            Email Me
          </div>
        </a>
      </div>
      <div className="text-center mt-8 lg:mt-0">
        <Image
          className="rounded-full"
          width={150}
          height={150}
          name="Pranav Patel"
          src="/author.jpeg"
        />
        <h6 className="text-5xl font-extrabold">Pranav Patel</h6>
        <p className="text-xl text-gray-500 dark:text-gray-400 my-2">Software Engineer</p>
        <p className="max-w-xs m-auto text-lg">
          JavaScript, React, Design Systems, a software engineer by passion, loves solving problems.
          Most loved thing in js is the closure property, figuring out life's purpose.
        </p>
        <div className="text-center flex justify-center space-x-2 mt-5">
          <a
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/pranav-p-241914183">
            <AiFillLinkedin size="34px" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/thatspranav"
            className="text-blue-500 hover:text-blue-700">
            <AiOutlineTwitter size="34px" />
          </a>
        </div>
      </div>
    </div>
  </div>
);
export default Who;
