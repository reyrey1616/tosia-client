import React, { useEffect } from "react";
const SchoolContactDetails = ({ data }) => {
	useEffect(() => {}, [data]);
	return (
		<div className="mb-4 pr-3 pl-3">
			<div className="flex flex-wrap mb-2">
				<div className="col-12 col-md-12 p-half mb-0">
					<label htmlFor="font-18 text-black">School Name</label>
					<p className="font-17 text-orange fw-600">
						{" "}
						{data && data.schoolName}{" "}
					</p>
				</div>
				<div className="col-12 col-md-12 p-half mb-0">
					<label htmlFor="font-18 text-black">
						School Head Name
					</label>
					<p className="font-17 text-orange fw-600">
						{" "}
						{data && data.schoolHeadName}{" "}
					</p>
				</div>

				<div className="col-12 col-md-12 p-half mb-0">
					<label htmlFor="font-18 text-black">
						School Address
					</label>
					<p className="font-17 text-orange fw-600">
						{" "}
						{data && data.schoolAddress}{" "}
					</p>
				</div>
				<div className="col-12 col-md-12 p-half mb-0">
					<label htmlFor="font-18 text-black">
						Telephone No.
					</label>
					<p className="font-17 text-orange fw-600">
						{" "}
						{data && data.schoolContactNumber}{" "}
					</p>
				</div>
				<div className="col-12 col-md-12 p-half mb-0">
					<label htmlFor="font-18 text-black">Fax No.</label>
					<p className="font-17 text-orange fw-600">
						{" "}
						{data && data.schoolFaxNumber}{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SchoolContactDetails;
