export default function Loading() {
  return (
    <>
      <div role="status" className="flex flex-col items-center text-center animate-pulse ">
        <div className='relative w-full h-[540px] mt-4'>
          <div className="w-full h-[540px] bg-gray rounded-xl dark:bg-gray-700"></div>
        </div>
        <div className='mt-4 w-full'>
          <div className="w-full h-10  bg-gray rounded-full dark:bg-gray-600 mt-4"></div>
          <div className="w-full h-5 bg-gray rounded-full dark:bg-gray-700 mt-4"></div>
          <div className="w-full h-5 bg-gray rounded-full dark:bg-gray-700 mt-4"></div>
        </div>
      </div>
    </>
  )
}

