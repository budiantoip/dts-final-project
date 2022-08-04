import Desserts from "../components/Sections/Dessert";
import Menu from "../components/Sections/Menu";
import Showcase from "../components/Showcase/Showcase";

const HomePage = () => {
  return (
    <div className='flex w-full h-auto flex-col items-center justify-center'>
      <Showcase />
      <Desserts />
      <Menu />
    </div>
  );
};

export default HomePage;
