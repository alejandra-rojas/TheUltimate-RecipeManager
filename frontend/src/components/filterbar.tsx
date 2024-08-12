function filterbar({
  filterText,
  onFilterTextChange,
}: {
  filterText: string;
  onFilterTextChange: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <section className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between">
        <div className="flex gap-2">
          <DietKeyFilter>S</DietKeyFilter>
          <DietKeyFilter>C</DietKeyFilter>
          <DietKeyFilter>N</DietKeyFilter>
          <DietKeyFilter>V</DietKeyFilter>
          <DietKeyFilter>GF</DietKeyFilter>
        </div>
        <div className="relative">
          <label htmlFor="Search" className="sr-only">
            Search
          </label>

          <input
            type="text"
            id="Search"
            value={filterText}
            placeholder="Search by name..."
            onChange={(e) => onFilterTextChange(e.target.value)}
            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </section>
  );
}

export default filterbar;

export function DietKeyFilter(props: { children: React.ReactNode }) {
  return (
    <>
      <span className="flex items-center justify-center text-[0.55rem] w-6.5 h-5 px-2 py-1 text-gray-600 bg-gray-100 rounded-full hover:text-gray-300 hover:bg-gray-100 hover:bg-transparent border-solid border-[0.5px] whitespace-nowrap cursor-pointer">
        {props.children}
      </span>
    </>
  );
}
