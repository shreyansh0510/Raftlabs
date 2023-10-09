import React from "react";
import "../../index.css";
import {
  HomeOutlined,
  BarChartOutlined,
  SearchOutlined,
  ShopOutlined,
  InboxOutlined,
  AppstoreOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  FolderOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  return (
    <>
      <div className="border-r border-gray-200 w-2/12 max-h-full p-8 max-w-full hidden sm:hidden lg:block ">
        <div className="fixed">
          <div className="flex items-center space-x-2 mb-8 ">
            <span className="text-4xl">
              <AppstoreOutlined className="text-[var(--palette-color)]" />
            </span>
            <span class="text-2xl font-semibold">Omoi</span>
          </div>

          <div>
            <ul>
              <li className="mb-3 text-base font-light text-white  bg-[var(--palette-color)] rounded-lg py-1 pl-2">
                <HomeOutlined />
                <span className="ml-3">Home</span>
              </li>
              <li className="mb-3 text-base font-light text-gray-700">
                <BarChartOutlined />
                <span className="ml-3">Analytic</span>
              </li>
              <li className="mb-3 text-base font-light text-gray-700">
                <SearchOutlined />
                <span className="ml-3">Explore</span>
              </li>
              <li className="mb-3 text-base font-light text-gray-700">
                <ShopOutlined />
                <span className="ml-3">Shop</span>
              </li>
              <li className="mb-3 text-base font-light text-gray-700">
                <InboxOutlined />
                <span className="ml-3">Inbox</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-sm text-gray-400">Tools</span>
            <ul className="ml-2 mt-3">
              <li className="mb-3 text-base font-light text-gray-700 ">
                <span>
                  <SettingOutlined />
                </span>
                <span className="ml-3">Settings</span>
              </li>
              <li className="mb-3 text-base font-light text-gray-700 ">
                <span>
                  <QuestionCircleOutlined />
                </span>
                <span className="ml-3">Help</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-sm text-gray-400">Projects</span>
            <ul className="ml-2 mt-3">
              <li className="mb-3 text-base font-light text-gray-700 ">
                <span>
                  <FolderOutlined />
                </span>
                <span className="ml-3">Amazon</span>
              </li>
              <li className="mb-3 text-base font-light text-gray-700 flex">
                <span>
                  <FolderOutlined />
                </span>
                <span className="ml-3 flex">Invinity HQ</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
