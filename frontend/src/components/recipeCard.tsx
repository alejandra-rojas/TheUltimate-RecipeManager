import { DietKeyTypes, RecipeType } from "../types";

interface RecipeCardProps {
  comments: string | null;
  createdAt: string;
  creationSource: string | null;
  dietKeys: DietKeyTypes[];
  name: string;
  servings: number;
  ingredients: string;
  instructions: string;
  imgURL: string;
  key: string;
  source: string | null;
  rating: number;
  recipeType: RecipeType;
}

function recipeCard({
  comments,
  createdAt,
  name,
  servings,
  ingredients,
  instructions,
  imgURL,
  source,
  rating,
  recipeType,
  dietKeys,
}: RecipeCardProps) {
  return (
    <article className="flex flex-col flex-1 min-w-[280px] w-full max-w-[599px] border border-gray-200 rounded-lg overflow-hidden sm:flex-[1_1_calc(50%-1rem)] lg:flex-[1_1_calc(25%-1.125rem)]">
      <img
        className="w-full h-auto object-cover aspect-[210/155]"
        src={imgURL}
        alt={name}
      />
      <div className="p-10 pb-5 flex flex-col gap-5 flex-grow bg-white  cursor-default lg:p-7 lg:pb-6 lg:gap-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="flex flex-col flex-grow justify-between">
          <div className="flex justify-between mt-10 items-center lg:mt-6">
            <div className="flex gap-1">
              {dietKeys.map((key, index) => {
                const upperChars = DietKeyTypes[key].replace(/[^A-Z]/g, "");
                return (
                  <div
                    className="border-gray-600 border-solid border-[0.75px] rounded-full w-6 h-5 flex items-center justify-center"
                    key={index}
                  >
                    <span className="text-gray-600 text-xs">{upperChars}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-[0.8rem] text-right">{RecipeType[recipeType]}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default recipeCard;
