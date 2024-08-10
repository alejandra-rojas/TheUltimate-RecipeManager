interface RecipeTypeBadgeProps {
  recipeType: string;
  children: React.ReactNode;
}

function recipeTypeBadge({ recipeType, children }: RecipeTypeBadgeProps) {
  const typeColorDefinition: { [key: string]: string } = {
    BreakfastAndBrunch: "bg-yellow-100 text-yellow-700",
    Bite: "bg-green-100 text-green-700",
    Cupboard: "bg-pink-100 text-pink-700",
    Main: "bg-red-100 text-red-700",
    Desserts: "bg-yellow-100 text-yellow-700",
    Salads: "bg-green-100 text-green-700",
    SaucesAndDips: "bg-red-100 text-red-700",
    Sides: "bg-red-100 text-red-700",
    Snacks: "bg-green-100 text-green-700",
    SoupsAndStews: "bg-pink-100 text-pink-700",
    Sweets: "bg-purple-100 text-purple-700",
  };

  const colorClasses =
    typeColorDefinition[recipeType] || "bg-gray-100 text-gray-700";

  return (
    <span
      className={`font-robotomono text-[0.8rem] inline-flex items-center justify-center rounded-full  px-2.5 py-0.5 ${colorClasses}`}
    >
      <p className="whitespace-nowrap text-sm">{children}</p>
    </span>
  );
}

export default recipeTypeBadge;
