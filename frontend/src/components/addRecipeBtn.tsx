export default function addRecipeBtn({
  modalVisibility,
  setModalVisibility,
}: {
  modalVisibility: boolean;
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      onClick={() => setModalVisibility(!modalVisibility)}
      className={`inline-block rounded-lg border border-indigo-600 px-5 py-2 text-sm font-medium  hover:bg-transparent hover:text-white hover:bg-indigo-600 ${
        modalVisibility ? "text-white bg-indigo-600" : "text-indigo-600"
      } transition-colors duration-300`}
    >
      Add Recipe
    </button>
  );
}
