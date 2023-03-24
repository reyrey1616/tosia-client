import React from "react";
import { Table, Avatar, Image, Button } from "antd";
import { Confirmation, notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { deleteLeadership } from "../../../functions/leadership";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
import EvaluationForm from "../../shared/evaluation-form.component";

const OrganizationInvolvementTable = ({ data, userType, docId, student }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const columns = [
    {
      title: "Name of the Organization",
      dataIndex: "organizationName",
      key: "organizationName",
    },
    {
      title: "Position/Designation",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "At what level does the organization operate?",
      dataIndex: "levelOperate",
      key: "levelOperate",
    },
    {
      title: "Level the Organization Operate",
      dataIndex: "levelOperate",
      key: "levelOperate",
    },
    {
      title: "Inclusive Dates",
      dataIndex: "inclusiveDate",
      key: "inclusiveDate",
    },
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
              src={`${process.env.REACT_APP_MEDIA_DIRECTORY}leadership/${val}`}
            />
          }
        />
      ),
    },
    {
      title: userType === "admin" ? "Points" : "Action",
      render: (val) => {
        if (userType === "admin") {
          return val?.points;
        }
        return userType === "evaluator" ? (
          <EvaluationForm
            data={{
              evaluator: currentUser && currentUser._id,
              student,
              parentAward: docId,
              awardType: "leadership",
              subAwardId: val.id,
              subAwardType: "org_envolvement",
              point: val?.points,
            }}
          />
        ) : (
          <Confirmation
            title="Are you sure you want to delete this data?"
            confirmFn={() => {
              if (val.id) {
                dispatch(
                  deleteLeadership(
                    currentUser && currentUser._id,
                    {
                      type: "org_envolvement",
                      row_id: val.id,
                    },
                    () => {
                      notify("Organization Involvement Deleted");
                    }
                  )
                );
              }
            }}
          >
            {!currentUser?.isFinished && (
              <Button hidden={false} danger>
                {" "}
                Delete
              </Button>
            )}
          </Confirmation>
        );
      },
    },
  ];
  return (
    <Table
      dataSource={data && data}
      rowKey={`id`}
      columns={columns}
      pagination={{ defaultPageSize: 5 }}
    />
  );
};

export default OrganizationInvolvementTable;
