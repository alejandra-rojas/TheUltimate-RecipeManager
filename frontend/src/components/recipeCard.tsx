/* eslint-disable @typescript-eslint/no-unused-vars */
interface RecipeCardProps {
  comments: string | null;
  createdAt: string;
  creationSource: string | null;
  name: string;
  servings: number;
  ingredients: string;
  instructions: string;
  image: string | undefined;
  key: string;
  source: string | null;
  rating: number;
}

function recipeCard({
  comments,
  createdAt,
  name,
  servings,
  ingredients,
  instructions,
  image,
  source,
  rating,
}: RecipeCardProps) {
  return (
    <article className="flex flex-col flex-1 min-w-[280px] w-full max-w-[599px] border border-gray-200 rounded-lg overflow-hidden sm:flex-[1_1_calc(50%-1rem)] lg:flex-[1_1_calc(25%-1.125rem)]">
      <img
        className="w-full h-auto object-cover aspect-[210/155]"
        src={image}
        alt="Coastal view"
      />
      <div className="p-10 pb-5 flex flex-col gap-5 flex-grow bg-white  cursor-default lg:p-7 lg:pb-6 lg:gap-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="flex flex-col flex-grow justify-between">
          <div className="flex justify-between mt-10 items-center lg:mt-6">
            <div className="flex gap-2">
              <button className="text-black text-xs bg-white py-2 px-2 border-[0.75px] border-black rounded-md cursor-pointer transition-colors duration-200 hover:text-white hover:bg-black">
                Read
              </button>
              <button className="text-black text-xs bg-white py-2 px-2 border-[0.75px] border-black rounded-md cursor-pointer transition-colors duration-200 hover:text-white hover:bg-black">
                Share
              </button>
            </div>
            <p className="text-[0.8rem] text-right">400 words</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default recipeCard;
