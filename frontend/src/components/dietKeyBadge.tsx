export default function dietKeyBadge(props: { children: React.ReactNode }) {
  return (
    <>
      <span className="flex items-center justify-center text-[0.55rem] text-gray-600 bg-gray-100 w-6.5 h-5 px-2 py-1 rounded-full  border-solid border-[1px] whitespace-nowrap">
        {props.children}
      </span>
    </>
  );
}
