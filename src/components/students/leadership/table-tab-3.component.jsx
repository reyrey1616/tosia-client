import React from "react";
import { Table, Avatar, Image, Button } from "antd";
import { Confirmation, notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { deleteLeadership } from "../../../functions/leadership";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
import EvaluationForm from "../../shared/evaluation-form.component";
import moment from "moment";
import sorter from "../../../utils/sorter";
const AwardsAndCitationsReceivedTable = ({
  data,
  userType,
  docId,
  student,
}) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const columns = [
    {
      title: "Leadership Awards and Citations Received ",
      dataIndex: "citationReceived",
      key: "citationReceived",
    },

    {
      title: "Name of the Organization/Institution that gave the award",
      dataIndex: "organization",
      key: "organization",
    },
    {
      title: "Level the award was given",
      dataIndex: "levelAwardGiven",
      key: "levelAwardGiven",
    },
    {
      title: "Date Received",
      dataIndex: "dateReceived",
      key: "dateReceived",
      render: (val) => moment(val).format("MMMM DD, YYYY"),
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
              subAwardType: "citation",
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
                      type: "citation",
                      row_id: val.id,
                    },
                    () => {
                      notify("Award/Citation Deleted");
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
      dataSource={data && sorter(data, "dateReceived")}
      rowKey={`id`}
      columns={columns}
      pagination={{ defaultPageSize: 5 }}
    />
  );
};

export default AwardsAndCitationsReceivedTable;
