const sorter = (data, prop) => {
	return data?.sort((a, b) => {
		var dateA = new Date(a[prop]);
		var dateB = new Date(b[prop]);
		return dateB - dateA;
	});
};

export default sorter;
