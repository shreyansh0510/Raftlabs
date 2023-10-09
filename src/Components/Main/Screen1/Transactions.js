import React from "react";
import { DownOutlined, CalendarOutlined } from "@ant-design/icons";
import { Avatar, Badge, Divider, Dropdown, Typography } from "antd";

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

const dummyData = [
  {
    customer: "John Doe",
    email: "johndoe@gmail.com",
    status: "Success",
    date: "Nov 2, 2023",
    invoice: "$100,00",
    people: "",
  },
  {
    customer: "John Doe",
    email: "johndoe@gmail.com",
    status: "Pending",
    date: "Nov 2, 2023",
    invoice: "$100,00",
    people: "",
  },
];

function Transactions() {
  return (
    <>
      <div className="flex justify-between mb-4">
        <div>
          <div className="text-2xl font-semibold text-gray-700">
            Transaction History
          </div>

          <div className="flex mt-3">
            <div className="text-lg text-gray-800 border gray rounded-md mr-2 p-1 px-3 bg-slate-200 flex items-center">
              <Typography>
                <span className="text-sm font-medium">Recepients</span>
                <span className="ml-2 text-[10px] text-gray-800">
                  <DownOutlined />
                </span>
              </Typography>
            </div>

            <div className="text-lg text-gray-800 border gray rounded-md mr-2 p-1 px-3 bg-slate-200 flex items-center">
              <Typography>
                <span className="text-sm font-medium">Amount</span>
                <span className="ml-2 text-[10px] text-gray-800">
                  <DownOutlined />
                </span>
              </Typography>
            </div>

            <div className="text-lg text-gray-800 border gray rounded-md mr-2 p-1 px-3 bg-slate-200 flex items-center">
              <Typography>
                <span className="text-sm font-medium">Status</span>
                <span className="ml-2 text-[10px] text-gray-800">
                  <DownOutlined />
                </span>
              </Typography>
            </div>
          </div>
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
              <div className="text-lg text-gray-800 border gray rounded-md p-1 px-3 flex items-center">
                <Typography>
                  <span className="mr-1 text-md text-gray-400">
                    <CalendarOutlined />
                  </span>
                  <span className="text-sm font-semibold">Month</span>
                  <span className="ml-1 text-[10px] text-gray-800">
                    <DownOutlined />
                  </span>
                </Typography>
              </div>
            </Typography.Link>
          </Dropdown>
        </div>
      </div>

      <div className="w-full my-8 ">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th>
                <Typography className="text-md font-normal text-gray-400">
                  Customer
                </Typography>
              </th>
              <th>
                <Typography className="text-md font-normal text-gray-400">
                  Status
                </Typography>
              </th>
              <th>
                <Typography className="text-md font-normal text-gray-400">
                  Date
                </Typography>
              </th>
              <th>
                <Typography className="text-md font-normal text-gray-400">
                  Invoice
                </Typography>
              </th>
              <th>
                <Typography className="text-md font-normal text-gray-400">
                  People
                </Typography>
              </th>
              <Divider />
            </tr>
          </thead>
          <tbody>
            {dummyData.map((items, index) => {
              return (
                <tr className="border-b" key={index}>
                  <td className="flex items-center mb-5 mt-5">
                    <span>
                      <Typography>
                        <img
                          src="../../../images/avatar.png"
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      </Typography>
                    </span>
                    <span className="ml-5">
                      <Typography className="text-md font-semibold text-gray-700">
                        {items.customer}
                      </Typography>
                      <Typography className="text-sm font-normal text-gray-400">
                        {items.email}
                      </Typography>
                    </span>
                  </td>
                  <td>
                    <Typography className="text-md font-semibold text-gray-700 ">
                      <span className="border black rounded-2xl px-3 py-1">
                        {items.status.toLocaleLowerCase() === "success" ? (
                          <Badge status="success" />
                        ) : (
                          <Badge status="warning" />
                        )}
                        <span className="ml-2">{items.status}</span>
                      </span>
                    </Typography>
                  </td>
                  <td>
                    <Typography className="text-md font-semibold text-gray-700">
                      {items.date}
                    </Typography>
                  </td>
                  <td>
                    <Typography className="text-md font-semibold text-gray-700">
                      {items.invoice}
                    </Typography>
                  </td>
                  <td>
                    <Typography className="text-md font-semibold text-gray-700">
                      <Avatar.Group
                        maxCount={2}
                        maxStyle={{
                          color: "#f56a00",
                          backgroundColor: "#fde3cf",
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
                    </Typography>
                  </td>
                  <Divider />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Transactions;
