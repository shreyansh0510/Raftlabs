import { ClockCircleOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Divider, Typography } from "antd";
import React from "react";

function Calendar() {
  return (
    <div>
      <Typography>
        <div className="flex justify-between">
          <div className="flex justify-between">
            <div className="flex self-center justify-self-center  bg-slate-200 rounded-full p-2">
              💻
            </div>
            <div className="ml-5">
              <div className="font-semibold">Meeting with Client</div>
              <div className=" text-slate-400">
                <VideoCameraOutlined />
                <span className="ml-1"> Google Meet</span>
              </div>
            </div>
          </div>
          <div className="flex text-slate-400 self-end">
            <span>
              <ClockCircleOutlined />
            </span>
            <span className="ml-1">12pm</span>
          </div>
        </div>
        <Divider />
      </Typography>

      <Typography>
        <div className="flex justify-between">
          <div className="flex justify-between">
            <div className="flex self-center justify-self-center  bg-slate-200 rounded-full p-2">
              📚
            </div>
            <div className="ml-5">
              <div className="font-semibold">Weekly Report</div>
              <div className=" text-slate-400">
                <VideoCameraOutlined />
                <span className="ml-1">Google Meet</span>
              </div>
            </div>
          </div>
          <div className="flex text-slate-400 self-end">
            <span>
              <ClockCircleOutlined />
            </span>
            <span className="ml-1 ">3pm</span>
          </div>
        </div>
        <Divider />
      </Typography>

      <Typography>
        <div className="flex justify-between ">
          <div className="flex justify-between ">
            <div className="flex self-center justify-self-center  bg-slate-200 rounded-full p-2">
              🗒️
            </div>
            <div className="ml-5">
              <div className="font-semibold">Daily Scrum Meeting </div>
              <div className=" text-slate-400">
                <VideoCameraOutlined />
                <span className="ml-1"> Google Meet</span>
              </div>
            </div>
          </div>
          <div className="flex text-slate-400 self-end">
            <span>
              <ClockCircleOutlined />
            </span>
            <span className="ml-1 ">5pm</span>
          </div>
        </div>
      </Typography>
    </div>
  );
}

export default Calendar;
