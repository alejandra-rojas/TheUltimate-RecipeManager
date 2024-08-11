import {
  PencilSquareIcon,
  PhotoIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import FormNewRecipe from "./formNewRecipe";
import { useState } from "react";

function NewRecipeModal({
  modalVisibility,
  setModalVisibility,
}: {
  modalVisibility: boolean;
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [formDisplay, setFormDisplay] = useState<boolean>(false);

  return (
    <>
      <section className={`${modalVisibility ? "block" : "hidden"}`}>
        <div
          className={`rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6 flex flex-col gap-10`}
        >
          <span className="flex items-center">
            <span className="h-px flex-1 bg-gray-200"></span>
            <h3 className="font-robotomono shrink-0 px-6 mt-0.5 text-lg font-medium text-gray-600">
              Add a new recipe
            </h3>
            <span className="h-px flex-1 bg-gray-200"></span>
          </span>

          {!formDisplay && (
            <nav className="flex gap-6 justify-evenly px-16">
              <NewOption
                disabled={false}
                Icon={PencilSquareIcon}
                onClick={() => setFormDisplay(true)}
              >
                Using the form
              </NewOption>
              <NewOption disabled={true} Icon={PhotoIcon}>
                From a picture
              </NewOption>
              <NewOption disabled={true} Icon={LinkIcon}>
                From a link
              </NewOption>
            </nav>
          )}
        </div>
        <div className="bg-white">
          {formDisplay && (
            <FormNewRecipe
              modalVisibility={modalVisibility}
              setModalVisibility={setModalVisibility}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default NewRecipeModal;

const NewOption = ({
  disabled,
  children,
  Icon,
  onClick,
}: {
  disabled: boolean;
  children: React.ReactNode;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={!disabled ? onClick : undefined}
      className={`group flex items-center gap-2 ${
        disabled ? "hover: pointer-events-none cursor-pointer" : ""
      }`}
    >
      <span
        className={`inline-block rounded-full  bg-gray-400 p-2 text-gray-200 ${
          disabled ? "" : "group-hover:bg-indigo-600"
        } transition-colors duration-300 `}
      >
        <Icon aria-hidden="true" className="block h-6 w-6" />
      </span>

      <span
        className={`hidden items-center gap-1 text-lg font-medium text-gray-400 sm:inline-flex  ${
          disabled ? "" : "group-hover:text-indigo-600"
        } transition-colors duration-300`}
      >
        {children}
        <span
          aria-hidden="true"
          className={`block transform transition-transform duration-200  ${
            disabled ? "" : "group-hover:translate-x-2"
          } `}
        >
          &rarr;
        </span>
      </span>
    </button>
  );
};
