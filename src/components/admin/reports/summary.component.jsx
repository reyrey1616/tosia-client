import React from "react";
import { Statistic, Card, Row, Col } from "antd";

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
						<Statistic
							title="Total Students"
							value={totalCount && totalCount}
							valueStyle={{ color: "#3f8600" }}
						/>
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						<Statistic
							title="College"
							value={collegeCount && collegeCount}
							valueStyle={{ color: "#3f8600" }}
						/>
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						<Statistic
							title="Junior High School"
							value={jhsCount && jhsCount}
							valueStyle={{ color: "#3f8600" }}
						/>
					</Card>
				</Col>
			</Row>
			<Row gutter={16} className="mb-1">
				<Col span={8}>
					<Card>
						<Statistic
							title="Students Submitted"
							value={submittedCount && submittedCount}
							valueStyle={{ color: "#3f8600" }}
						/>
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						<Statistic
							title="Verified Students"
							value={verifiedCount && verifiedCount}
							valueStyle={{ color: "#3f8600" }}
						/>
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						<Statistic
							title="Students Evaluated"
							value={evaluatedCount && evaluatedCount}
							valueStyle={{ color: "#3f8600" }}
						/>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default OverallSummary;
