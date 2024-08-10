import {
  PencilSquareIcon,
  PhotoIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

function NewRecipeModal({ modalVisibility }: { modalVisibility: boolean }) {
  return (
    <section
      className={`rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6 flex flex-col gap-10 ${
        modalVisibility ? "block" : "hidden"
      }`}
    >
      <span className="flex items-center">
        <span className="h-px flex-1 bg-gray-200"></span>
        <h3 className="font-robotomono shrink-0 px-6 mt-0.5 text-lg font-medium text-gray-600">
          Add a new recipe
        </h3>
        <span className="h-px flex-1 bg-gray-200"></span>
      </span>

      <nav className="flex flex-col gap-6 sm:flex-row justify-around px-16">
        <NewOption disabled={false} Icon={PencilSquareIcon}>
          Using the form
        </NewOption>
        <NewOption disabled={true} Icon={PhotoIcon}>
          From a picture
        </NewOption>
        <NewOption disabled={true} Icon={LinkIcon}>
          From a link
        </NewOption>
      </nav>
    </section>
  );
}

export default NewRecipeModal;

const NewOption = ({
  disabled,
  children,
  Icon,
}: {
  disabled: boolean;
  children: React.ReactNode;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) => {
  return (
    <button
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
        className={`inline-flex items-center gap-1 text-lg font-medium text-gray-400  ${
          disabled ? "" : "group-hover:text-indigo-600"
        } transition-colors duration-300 `}
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
