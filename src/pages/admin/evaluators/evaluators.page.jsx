import React, { useEffect, useState } from "react";
import EvaluatorsTable from "../../../components/admin/evaluators-table/evaluators-table.component";
import { useSelector } from "react-redux";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Spinner from "../../../components/hoc/spinner/spinner.component";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
import { getEvaluators } from "../../../functions/evaluators";

const EvaluatorsPage = () => {
	const userData = useSelector(selectCurrentUser);
	const [evaluators, setEvaluators] = useState([]);
	const [searchText, setSearchText] = useState("");
	// const [categorySelected, setCategory] = useState("");
	useEffect(async () => {
		const data = await getEvaluators();
		setEvaluators(data);
	}, [getEvaluators]);

	const filteredData = () => {
		return (
			evaluators &&
			evaluators?.filter((item) => {
				return (
					item?.fname
						.toLowerCase()
						.includes(searchText.toLowerCase()) ||
					item?.lname
						.toLowerCase()
						.includes(searchText.toLowerCase())
				);
			})
		);
	};
	return !!userData ? (
		<div className="admin-page-content">
			<h2 className="text-subtitle text-orange m-1">Evaluators</h2>

			<div className="flex m-1">
				<div className="col-5 col-md-8">
					<Input
						onChange={(e) => setSearchText(e.target.value)}
						size="large"
						prefix={<SearchOutlined />}
						placeholder="Search Evaluator"
					/>
				</div>
			</div>
			<EvaluatorsTable
				data={evaluators && filteredData()}
				userType="admin"
			/>
		</div>
	) : (
		<Spinner />
	);
};

export default EvaluatorsPage;
