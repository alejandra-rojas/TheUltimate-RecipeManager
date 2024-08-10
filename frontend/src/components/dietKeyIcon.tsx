export default function dietKeyIcon(props: { children: React.ReactNode }) {
  return (
    <>
      <span className="whitespace-nowrap rounded-full border-gray-500 border-solid border-[0.75px] w-6.5 h-5 px-2 py-1  flex items-center justify-center text-xs text-gray-700 ">
        {props.children}
      </span>
    </>
  );
}
