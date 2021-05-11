import React from "react";
import { Statistic, Card, Row, Col, Skeleton } from "antd";

const OverallSummary = ({
	collegeCount,
	jhsCount,
	totalCount,
	submittedCount,
	verifiedCount,
	evaluatedCount,
}) => {
	return (
		<div className="col-12">
			<Row gutter={16} className="mb-1">
				<Col span={8}>
					<Card>
						{totalCount || totalCount === 0 ? (
							<Statistic
								title="Total Students"
								value={totalCount && totalCount}
								valueStyle={{ color: "#3f8600" }}
							/>
						) : (
							<Skeleton row={1} active />
						)}
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						{collegeCount || collegeCount === 0 ? (
							<Statistic
								title="College"
								value={collegeCount && collegeCount}
								valueStyle={{ color: "#3f8600" }}
							/>
						) : (
							<Skeleton row={1} active />
						)}
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						{jhsCount || jhsCount === 0 ? (
							<Statistic
								title="Junior High School"
								value={jhsCount && jhsCount}
								valueStyle={{ color: "#3f8600" }}
							/>
						) : (
							<Skeleton row={1} active />
						)}
					</Card>
				</Col>
			</Row>
			<Row gutter={16} className="mb-1">
				<Col span={8}>
					<Card>
						{submittedCount || submittedCount === 0 ? (
							<Statistic
								title="Students Submitted"
								value={submittedCount && submittedCount}
								valueStyle={{ color: "#3f8600" }}
							/>
						) : (
							<Skeleton row={1} active />
						)}
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						{verifiedCount || verifiedCount === 0 ? (
							<Statistic
								title="Verified Students"
								value={verifiedCount && verifiedCount}
								valueStyle={{ color: "#3f8600" }}
							/>
						) : (
							<Skeleton row={1} active />
						)}
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						{evaluatedCount || evaluatedCount === 0 ? (
							<Statistic
								title="Students Evaluated"
								value={evaluatedCount && evaluatedCount}
								valueStyle={{ color: "#3f8600" }}
							/>
						) : (
							<Skeleton row={1} active />
						)}
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default OverallSummary;
