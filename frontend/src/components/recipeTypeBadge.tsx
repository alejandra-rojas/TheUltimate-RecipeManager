function recipeTypeBadge(props: { children: React.ReactNode }) {
  return (
    <span className="font-robotomono text-[0.8rem] inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-0.5 text-purple-700">
      <p className="whitespace-nowrap text-sm">{props.children}</p>
    </span>
  );
}

export default recipeTypeBadge;
