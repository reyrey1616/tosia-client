import React from "react";
import { Table, Avatar, Image, Button } from "antd";
import { Confirmation, notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { deleteAcademicExcellence } from "../../../functions/academic-excellence";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
import EvaluationForm from "../../shared/evaluation-form.component";
import moment from "moment";
import sorter from "../../../utils/sorter";
const NonAcademicContestsWonTable = ({ data, userType, docId, student }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const columns = [
    {
      title: "Non-Academic Contests Participated",
      dataIndex: "contestName",
      key: "contestName",
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "Individual/Team Award",
      dataIndex: "awardType",
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
              src={`${process.env.REACT_APP_MEDIA_DIRECTORY}academic/${val}`}
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
              awardType: "academic",
              subAwardId: val.id,
              subAwardType: "non-academic",
              point: val?.points,
            }}
          />
        ) : (
          <Confirmation
            title="Are you sure you want to delete this data?"
            confirmFn={() => {
              if (val.id) {
                dispatch(
                  deleteAcademicExcellence(
                    currentUser && currentUser._id,
                    {
                      type: "non-academic",
                      row_id: val.id,
                    },
                    () => {
                      notify("Non-Academic Award Deleted");
                    }
                  )
                );
              }
            }}
          >
            {!currentUser?.isFinished && (
              <Button danger hidden={false}>
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
      columns={columns}
      pagination={{ defaultPageSize: 5 }}
      rowKey="id"
    />
  );
};

export default NonAcademicContestsWonTable;
