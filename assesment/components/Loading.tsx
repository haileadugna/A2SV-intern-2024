import React from 'react'

function Loading() {
  return (
        <div className="flex justify-center items-center mt-32">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-black"></div>
        </div>
    );
}

export default Loading