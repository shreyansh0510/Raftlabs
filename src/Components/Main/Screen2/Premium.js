import { ArrowRightOutlined, DownOutlined } from "@ant-design/icons";
import { Avatar, Divider, Typography } from "antd";
import React from "react";

function Premium() {
  return (
    <div>
      <div>
        <Typography className="text-[var(--palette-color)] text-md font-semibold mb-1">
          Premium Access
        </Typography>
      </div>
      <div>
        <Typography className="text-2xl font-semibold mb-4">
          Take Back Your Creative Control
          <span>
            <Avatar.Group
              maxCount={2}
              maxStyle={{
                color: "#00000",
                backgroundColor: "#000",
              }}
            >
              <Avatar
                src="../../../images/avatar.png"
                className="h-8 w-8 rounded-full"
              />

              <Avatar
                src="../../../images/avatar.png"
                className="h-8 w-8 rounded-full"
              />

              <Avatar
                style={{
                  backgroundColor: "#1677ff",
                }}
              />

              <Avatar
                style={{
                  backgroundColor: "#1677ff",
                }}
              />
            </Avatar.Group>
          </span>
        </Typography>
      </div>
      <div>
        <Typography className="text-sm text-gray-400 mb-4">
          <span className="mr-2">The Profession Plaform</span>
          <DownOutlined />
        </Typography>
      </div>
      <div>
        <span>
          <div className="text-[var(--palette-color)] text-sm font-light flex justify-between border border-slate-200 px-4 py-2 rounded-xl">
            <span>
              <Typography className="text-[var(--palette-color)] font-normal">
                Upgrade Now
              </Typography>
            </span>
            <ArrowRightOutlined />
          </div>
        </span>
      </div>
      <Divider />
    </div>
  );
}

export default Premium;
