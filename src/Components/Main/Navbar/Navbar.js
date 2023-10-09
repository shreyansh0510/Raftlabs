import React from "react";
import "../../../index.css";
import { SearchOutlined, BellOutlined, DownOutlined } from "@ant-design/icons";
import { Avatar, Badge, Dropdown, Typography } from "antd";

const Navbar = () => {
  return (
    <div className="w-full max-w-full h-24 py-8 px-4 flex">
      <div className="flex w-3/4 justify-between px-2  items-center">
        <div className="flex">
          <div>
            <Badge count={5} offset={[0, 10]} color="var(--palette-color)">
              <img
                src="../../images/avatar.png"
                alt="avatar"
                className="h-14 w-14 border-2 border-[var(--palette-color)]-200 rounded-full p-1"
              />
            </Badge>
          </div>

          <div className="ml-5">
            <span className="text-3xl font-semibold text-gray-600">
              Good Evening Team!
            </span>
            <br />
            <span className="text-xs font-light text-gray-400">
              Have an in-depth look at the metrics within your dashboard
            </span>
          </div>
        </div>

        <div>
          <span className="rounded-full bg-gray-200 p-3">
            <SearchOutlined className="text-gray-400 mb-1 text-lg" />
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center w-1/4 px-2">
        <div>
          <Badge size="large" offset={[-5, 0]} color="var(--palette-color)" dot>
            <BellOutlined style={{ fontSize: 18 }} className="text-gray-500" />
          </Badge>
        </div>

        <div>
          <Dropdown>
            <div className="text-lg text-gray-800 rounded-3xl p-1 px-2 flex items-center shadow-md">
              <Typography>
                <Avatar
                  src="../../../images/avatar.png"
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-sm font-semibold ml-2">John Doe</span>
                <span className="ml-3 text-[10px] text-gray-800">
                  <DownOutlined />
                </span>
              </Typography>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
