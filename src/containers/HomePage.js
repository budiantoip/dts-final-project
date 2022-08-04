import Fruits from "../components/Sections/Fruits";
import Showcase from "../components/Showcase/Showcase";

const HomePage = () => {
  return (
    <div className='flex w-full h-auto flex-col items-center justify-center'>
      <Showcase />
      <Fruits />
    </div>
  );
};

export default HomePage;
