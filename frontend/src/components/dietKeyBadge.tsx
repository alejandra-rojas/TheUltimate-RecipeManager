export default function dietKeyBadge(props: { children: React.ReactNode }) {
  return (
    <>
      <span className="flex items-center justify-center text-[0.55rem] text-black w-6.5 h-5 px-2 py-1 rounded-full border-gray-800 border-solid border-[0.5px] whitespace-nowrap">
        {props.children}
      </span>
    </>
  );
}
