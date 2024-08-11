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
      className={`inline-block border border-indigo-600 rounded-full px-5 py-2 text-sm font-medium  ${
        modalVisibility
          ? " text-white bg-indigo-600 "
          : " text-indigo-600 hover:text-white hover:bg-indigo-600"
      } transition-all duration-300`}
    >
      {modalVisibility ? "X" : "Add recipe"}
    </button>
  );
}
