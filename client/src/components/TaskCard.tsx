import React from 'react'

const TaskCard = () => {
  return (
    <div className="border-indigo-500 rounded m-4 p-4 border bg-gray-100 min-w-full">
      <div className="flex justify-between py-4">
        <div>
          <h3>Title</h3>
        </div>
        <div>
          <p> time: 10/20/2025 - 11:13pm</p>
        </div>
      </div>
      <div className="flex justify-between py-12">
        <p>Description</p>
        <div className="">
          <div>
            <button className="bg-green-300 py-1.5 px-8 rounded-2xl">
              edit
            </button>
          </div>
          <div>
            <button className="bg-red-300 py-1.5 px-8 rounded-2xl">
              delete
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <p className="">status</p>
          <p>priority</p>
        </div>
        <div>
          <p>tags</p>
        </div>
      </div>
    </div>
  );
}

export default TaskCard
