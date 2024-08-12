import { DietKeyTypes, RecipeType } from "../types";
import DietKeyBadge from "./dietKeyBadge";
import RecipeTypeBadge from "./recipeTypeBadge";

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

function recipeCard({ name, imgURL, recipeType, dietKeys }: RecipeCardProps) {
  return (
    <article className="group flex min-w-[280px] w-full bg-gray-50  lg:max-w-[389px] border border-gray-200 hover:border-gray-400 overflow-hidden sm:flex-[1_1_calc(50%-1rem)] lg:flex-[1_1_calc(33%-1.125rem)] hover:bg-gray-50 hover:cursor-pointer shadow">
      <img
        className="p-1.5 h-auto object-cover w-28 hover:filter-none transition duration-300 ease-in-out"
        src={imgURL}
        alt={name}
      />

      <div className="pt-6 px-2 flex flex-col flex-grow cursor-default pointer-events-none ">
        <RecipeTypeBadge recipeType={RecipeType[recipeType]}>
          {RecipeType[recipeType]}
        </RecipeTypeBadge>
        <h3 className="text-xl pt-3 pl-1.5 font-[500] text-[#2a0000] leading-none">
          {name}
        </h3>

        <div className="flex flex-grow items-end gap-1 pl-1.5 pt-6 pb-4 ">
          {dietKeys.map((dietKey, index) => {
            const upperChars = DietKeyTypes[dietKey].replace(/[^A-Z]/g, "");
            return <DietKeyBadge key={index}>{upperChars}</DietKeyBadge>;
          })}
        </div>
      </div>
    </article>
  );
}

export default recipeCard;
