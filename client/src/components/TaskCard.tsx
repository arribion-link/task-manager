import React from 'react'

const TaskCard = () => {
  return (
    <div className="">
      <div>
        <div>
          <h3>Title</h3>
        </div>
        <div>
          <p> time: 10/20/2025 - 11:13pm</p>
        </div>
      </div>
      <div>
        <p>Description</p>
        <div>
          <button>edit</button>
          <button>delete</button>
        </div>
      </div>
          <div>
            <div>
                <p>status</p>
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
