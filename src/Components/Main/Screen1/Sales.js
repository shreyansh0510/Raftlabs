import React from "react";

function Sales() {
  return (
    <div className="w-full bg-[var(--palette-color)] p-8 rounded-2xl mb-5">
      <div className="flex justify-between">
        <div className="flex items-center">
          <span>
            <img
              src="../../images/avatar.png"
              alt="avatar"
              className="h-14 w-14 rounded-full"
            />
          </span>
          <div className="flex flex-col ml-4 text-white">
            <span className="text-sm text-gray-200 mb-1">Monthly Revenue</span>
            <span className="font-semibold mb-1">
              $3.500
              <span className="text-sm font-normal text-[var(--palette-color)] bg-white h-12 w-12 rounded-xl p-1 ml-2">
                +2.4%
              </span>
            </span>
            <span className="text-sm text-gray-200">
              Previous Month <span className="font-semibold">$1.7K</span>
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <span>
            <img
              src="../../images/avatar.png"
              alt="avatar"
              className="h-14 w-14 rounded-full"
            />
          </span>
          <div className="flex flex-col ml-4 text-white">
            <span className="text-sm text-gray-200 mb-1">Monthly Revenue</span>
            <span className="font-semibold mb-1">
              $3.500
              <span className="text-sm font-normal text-[var(--palette-color)] bg-white h-12 w-12 rounded-xl p-1 ml-2">
                +2.4%
              </span>
            </span>
            <span className="text-sm text-gray-200">
              Previous Month <span className="font-semibold">$1.7K</span>
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <span>
            <img
              src="../../images/avatar.png"
              alt="avatar"
              className="h-14 w-14 rounded-full"
            />
          </span>
          <div className="flex flex-col ml-4 text-white">
            <span className="text-sm text-gray-200 mb-1">Monthly Revenue</span>
            <span className="font-semibold mb-1">
              $3.500
              <span className="text-sm font-normal text-[var(--palette-color)] bg-white h-12 w-12 rounded-xl p-1 ml-2">
                +2.4%
              </span>
            </span>
            <span className="text-sm text-gray-200">
              Previous Month <span className="font-semibold">$1.7K</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
