export default function dietKeyIcon(props: { children: React.ReactNode }) {
  return (
    <div className="border-gray-600 border-solid border-[0.75px] rounded-full w-6 h-5 flex items-center justify-center">
      <span className="text-gray-600 text-xs">{props.children}</span>
    </div>
  );
}
