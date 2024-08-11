interface RecipeTypeBadgeProps {
  recipeType: string;
  children: React.ReactNode;
}

function recipeTypeBadge({ recipeType, children }: RecipeTypeBadgeProps) {
  const typeColorDefinition: { [key: string]: string } = {
    BreakfastAndBrunch: "bg-yellow-100 text-yellow-500",
    Bite: "bg-green-100 text-green-500",
    Cupboard: "bg-pink-100 text-pink-500",
    Main: "bg-red-100 text-red-500",
    Desserts: "bg-yellow-100 text-yellow-500",
    Salads: "bg-green-100 text-green-500",
    SaucesAndDips: "bg-red-100 text-red-500",
    Sides: "bg-red-100 text-red-500",
    Snacks: "bg-green-100 text-green-500",
    SoupsAndStews: "bg-pink-100 text-pink-500",
    Sweets: "bg-purple-100 text-purple-500",
  };

  const colorClasses =
    typeColorDefinition[recipeType] || "bg-gray-100 text-gray-500";

  return (
    <span
      className={`w-fit font-robotomono inline-flex items-center justify-center rounded-full  px-3 py-0.5 ${colorClasses}`}
    >
      <p className="whitespace-nowrap text-[0.75rem]">{children}</p>
    </span>
  );
}

export default recipeTypeBadge;
