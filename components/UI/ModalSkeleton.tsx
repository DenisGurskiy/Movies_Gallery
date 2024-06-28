export default function ModalSkeleton() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-pulse">
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div className="max-w-[640px] w-[90%] h-auto absolute bg-white z-50 md:rounded-[4px] md:p-[48px] p-[20px] m-[12px]">
        <div className="w-full grid grid-cols-12 gap-[24px]">
          <div className="col-span-4 flex flex-col gap-[12px] text-[12px]">
            <div className="relative w-full aspect-square bg-gray-200"></div>
            <div className="flex justify-end items-center">
              <p className="bg-gray-200 w-1/4"></p>
            </div>
            <ul className="flex flex-wrap gap-[12px]">
              <li className="h-[18px] rounded-md text-center px-[4px] bg-gray-200 w-1/3"></li>
              <li className="h-[18px] rounded-md text-center px-[4px] bg-gray-200 w-1/3"></li>
              <li className="h-[18px] rounded-md text-center px-[4px] bg-gray-200 w-1/3"></li>
            </ul>
          </div>
          <div className="col-span-8 flex flex-col justify-between text-[14px]">
            <div>
              <h2 className="text-[24px] rounded-md font-semibold mb-[12px] w-1/3 bg-gray-200"></h2>
              <p className="w-full rounded-md h-[32px] bg-gray-200"></p>
            </div>
            <div>
              <p className="mb-[12px] rounded-md w-1/4 h-[18px] bg-gray-200"></p>
              <p className="w-1/2 rounded-md h-[18px] bg-gray-200"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
