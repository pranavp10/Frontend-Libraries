import CheckMark from './CheckMark';

const Why = () => (
  <div className="flex justify-center flex-col">
    <div className="flex max-w-5xl w-full p-8 mx-auto lg:my-8 flex-col lg:flex-row">
      <div>
        <h3 className="text-4xl font-extrabold mb-4">Why These Packages?</h3>
        <div className="text-lg mb-4">
          <ol className="list-decimal ml-4 font-medium text-gray-500 dark:text-gray-400 text-xl">
            <li>
              These Packages are one of the most used packages in production. The reason I've
              created and shared this list is because I wanted to make it easy for everyone.
            </li>
            <li>
              When I was searching for these, I was unable to find all the packages at one place.
              That sparked a thought in me "Why not create site where everything can be found in a
              single place? " Awesome right? So this is where that thought landed.
            </li>
          </ol>
        </div>
        <div className="space-y-2 mt-4">
          <CheckMark text="Used in Production" tried />
          <CheckMark text="Still need to learn & try" />
        </div>
      </div>
    </div>
  </div>
);

export default Why;
