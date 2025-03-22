import React from 'react';

const MessageSkeleton = () => {
  return (
    <>
      {/* Receiver Side Skeleton */}
      <div role='status' className='flex max-w-sm animate-pulse mb-4'>
        <div className='flex-shrink-0'>
          <span className='flex justify-center items-center bg-gray-300 rounded-full w-8 h-8'></span>
        </div>
        <div className='ml-4 mt-2 w-full'>
          <h3 className='h-2 bg-gray-300 rounded-full w-48 mb-4'></h3>
          <p className='h-1 bg-gray-300 rounded-full w-[320px] mb-2.5'></p>
          <p className='h-1 bg-gray-300 rounded-full w-[320px] mb-2.5'></p>
        </div>
      </div>

      {/* Sender Side Skeleton */}
      <div role='status' className='flex max-w-sm animate-pulse justify-end mb-4'>
        <div className='mr-4 mt-2 w-full'>
          <h3 className='h-2 bg-gray-300 rounded-full w-48 mb-4 ml-auto'></h3>
          <p className='h-1 bg-gray-300 rounded-full w-[320px] mb-2.5 ml-auto'></p>
          <p className='h-1 bg-gray-300 rounded-full w-[320px] mb-2.5 ml-auto'></p>
        </div>
        <div className='flex-shrink-0 ml-1'>
          <span className='flex justify-center items-center bg-gray-300 rounded-full w-8 h-8'></span>
        </div>
      </div>
    </>
  );
};

export default MessageSkeleton;