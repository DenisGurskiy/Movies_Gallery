export default function Skeleton() {
  return (
    <li className="col-span-6 ss:col-span-4 lg:col-span-3 animate-pulse">
      <div className="h-[300px] rounded-md overflow-hidden p-[12px] shadow-md shadow-gray-300 text-[12px] ">
        <div className="relative w-full h-[200px] mb-[8px] bg-gray-200"></div>
        <div>
          <h2 className="w-3/4 h-[12px] mb-[8px] rounded bg-gray-200"></h2>
          <p className="w-1/4 h-[12px] rounded bg-gray-200"></p>
        </div>
      </div>
    </li>
  );
}
