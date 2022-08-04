import { motion } from "framer-motion";
// import Action from "./action";
export const SingleFoodItem = ({
  item,
  col,
  admin
}) => {
  // const { id, title, price, calories, imageURL, description } = item;
  const {
    idMeal,
    strMeal,
    strDrinkAlternate,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strTags,
    strYoutube,

  } = item;

  return (
    <motion.div
      whileTap={{ rotate: [0, -1, 1, -1, 0] }}
      className={`${
        !col ? "w-[275px] min-w-[275px]" : "w-[320px] min-w-[320px]"
      } md:w-[300px] md:min-w-[300px] ${
        col ? "my-12" : "my-2 md:my-5"
      } h-auto bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg hover:drop-shadow-sm cursor-pointer`}
    >
      <div className='w-full flex items-center justify-center'>
        <motion.img
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          className='w-40 h-40 md:w-48 md:h-40 object-contain cursor-pointer'
          alt={strMeal}
          src={strMealThumb}
        />
      </div>
      <div className='w-full flex items-center justify-end flex-col'>
        <p className='text-textColor font-semi-bold text-lg'>{strMeal}</p>
      </div>
    </motion.div>
  );
};
