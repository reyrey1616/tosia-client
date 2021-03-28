import React, { useEffect } from "react";
const FamilyData = ({ data }) => {
	useEffect(() => {}, [data]);
	return (
		<div className="mb-4 pr-3 pl-3">
			<div className="flex flex-wrap mb-2">
				<div className="col-12 flex">
					<div className="col-6 col-md-12 p-half mb-0">
						<label htmlFor="font-18 text-black">
							Father's Name
						</label>
						<p className="font-17 text-orange fw-600">
							{" "}
							{data && data.fatherName}{" "}
						</p>
					</div>
					<div className="col-6 col-md-12 p-half mb-0">
						<label htmlFor="font-18 text-black">
							Father's Occupation
						</label>
						<p className="font-17 text-orange fw-600">
							{" "}
							{data && data.fatherOccupation}{" "}
						</p>
					</div>
				</div>

				<div className="col-12 flex">
					<div className="col-6 col-md-12 p-half mb-0">
						<label htmlFor="font-18 text-black">
							Mother's Name
						</label>
						<p className="font-17 text-orange fw-600">
							{" "}
							{data && data.motherName}{" "}
						</p>
					</div>
					<div className="col-6 col-md-12 p-half mb-0">
						<label htmlFor="font-18 text-black">
							Mother's Occupation
						</label>
						<p className="font-17 text-orange fw-600">
							{" "}
							{data && data.motherOccupation}{" "}
						</p>
					</div>
				</div>

				<div className="col-12 flex">
					<div className="col-6 col-md-12 p-half mb-0">
						<label htmlFor="font-18 text-black">
							Legal Guardian's Name
						</label>
						<p className="font-17 text-orange fw-600">
							{" "}
							{data && data.guardianName}{" "}
						</p>
					</div>
					<div className="col-6 col-md-12 p-half mb-0">
						<label htmlFor="font-18 text-black">
							Legal Guardian's Occupation
						</label>
						<p className="font-17 text-orange fw-600">
							{" "}
							{data && data.guardianOccupation}{" "}
						</p>
					</div>
				</div>
				<div className="col-6 col-md-12 p-half mb-0">
					<label htmlFor="font-18 text-black">
						Number of Siblings
					</label>
					<p className="font-17 text-orange fw-600">
						{" "}
						{data && data.numberOfSiblings}{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default FamilyData;
