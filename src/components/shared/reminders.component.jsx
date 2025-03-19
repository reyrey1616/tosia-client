import React from "react";
import { Alert } from "antd";
const Reminders = () => {
  return (
    <div className="col-12 flex-wrap p-half" style={{ width: "100%" }}>
      <div style={{ padding: "3px" }} className="col-12 col-sm-12">
        <Alert
          message="Directions"
          description="This online application aims to gather information about your academic and non-academic performance, leadership and community involvement. Your application details shall be assessed by the Executive Committee based on the requirements which will revolve on TOSIA’s four pillars namely: Academic Excellence, Leadership, Faith and Community Involvement. Accomplish this form and submit it when you’re done. "
          type="info"
        />
      </div>
      <div style={{ padding: "3px" }} className="col-12 col-sm-12">
        <Alert
          message="Reminder"
          description="Reminder: Please complete this form on or before 11:59 PM of March 24, 2025 (Sunday). This portal will automatically close and will stop accepting responses beyond the deadline. Only applicants with complete requirements shall be accepted. Late submissions will not be tolerated."
          type="error"
        />
      </div>
      <div style={{ padding: "3px" }} className="col-12 col-sm-12">
        <Alert
          message="Remember"
          description="You can save your application details as draft and review it before submitting. Once submitted, the encoded information will be considered final and changes can no longer be made. "
          type="warning"
        />
      </div>
    </div>
  );
};

export default Reminders;
