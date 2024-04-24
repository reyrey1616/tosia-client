import React from "react";
import { Table, Avatar, Image, Button } from "antd";

import { useHistory } from "react-router-dom";
import { Confirmation } from "../../global/alerts/alerts.component";

const StudentsTable = ({ data, userType, removeStudent, isReport }) => {
  const history = useHistory();
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (val) => (
        <Avatar
          size={60}
          shape="square"
          src={
            <Image
              src={`${process.env.REACT_APP_MEDIA_DIRECTORY}students/${val}`}
            />
          }
        />
      ),
    },
    {
      title: "Fullname",
      dataIndex: "fname",
      key: "fname",
      render: (col, row) => `${row.fname} ${row.mname} ${row.lname}`,
    },
    {
      title: "School",
      dataIndex: "schoolName",
      key: "schoolName",
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Evaluation",
      dataIndex: "isDoneEvaluated",
      key: "isDoneEvaluated",
      render: (val) => (val === true ? "Finished" : "Not Finish Yet"),
    },
    {
      title: "Action",
      render: (val) => {
        let url =
          userType === "evaluator"
            ? `/evaluator/student-profile/${val._id}`
            : `/admin/student-profile/${val._id}`;

        if (isReport) {
          url = `/admin/student-score/${val._id}`;
        }

        return (
          <div className="flex">
            <Button
              className="m-half"
              onClick={() => {
                history.push(url);
              }}
            >
              {" "}
              View
            </Button>
            {userType === "admin" && !isReport && (
              <Confirmation
                title="Click Yes to remove this student"
                confirmFn={() => {
                  if (val._id) {
                    removeStudent(val);
                  }
                }}
              >
                <Button className="m-half" danger>
                  {" "}
                  Remove
                </Button>
              </Confirmation>
            )}
          </div>
        );
      },
    },
  ];
  return (
    <Table
      dataSource={data && data}
      rowKey={`_id`}
      columns={columns}
      pagination={{ defaultPageSize: 5 }}
    />
  );
};

export default StudentsTable;
