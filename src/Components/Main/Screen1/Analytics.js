import React from "react";
import CaretUpOutlined, { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Typography } from "antd";
import Chart from "./Chart.js";

const items = [
  {
    key: "1",
    label: "January",
  },
  {
    key: "2",
    label: "February",
  },
  {
    key: "3",
    label: "March",
  },
];

function Analytics() {
  return (
    <>
      <div className="flex w-full p-8 border black rounded-2xl mb-5">
        <div className="w-1/2">
          <span className="text-xl font-bold text-gray-700">
            Total Sales & Cost
          </span>
          <br />
          <div className="text-xs text-gray-400 mb-2">Last 60 days</div>
          <br />
          <span className="text-[var(--palette-color)] text-2xl font-bold ">
            $956.82k
            <span className="text-xs font-normal text-white bg-green-400 h-12 w-12 rounded-xl p-1 ml-3">
              <CaretUpOutlined className="" />
              +2.4%
            </span>
          </span>
          <br />
          <span className="text-xs text-gray-400">
            <span className="text-green-400">+8.20k</span>
            vs prev. 60 days
          </span>
        </div>

        <div className="w-1/2  ml-28">
          <div className="w-full flex justify-between mb-5">
            <div>
              <span className="font-bold text-gray-700">Analytic</span>
              <span className="text-xs text-green-400 font-bold ml-1">
                +2.4%
              </span>
            </div>
            <div>
              <Dropdown
                menu={{
                  items,
                  selectable: true,
                  defaultSelectedKeys: ["1"],
                }}
              >
                <Typography.Link>
                  <span className="text-gray-700">
                    Month
                    <span className="ml-1 text-xs">
                      <CaretDownOutlined />
                    </span>
                  </span>
                </Typography.Link>
              </Dropdown>
            </div>
          </div>
          <div>
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Analytics;
