import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";

const UploadWithPreview = ({ image, handleChange, label, name }) => {
	const [withImage, setImage] = useState(true);

	useEffect(() => {
		if (image && image) {
			setImage(true);
		}
	}, [image]);
	return (
		<div className="mb-1">
			<label htmlFor={name}>
				{withImage && image ? (
					<img
						onError={() => setImage(false)}
						src={image && image}
						alt="Profile Photo"
						className="image-preview width-100"
						style={{ objectFit: "cover" }}
					/>
				) : (
					<UploadButton label={label} />
				)}
			</label>

			<input
				onChange={(e) => handleChange(e)}
				onClick={() => console.log(label)}
				name={name}
				type="file"
				id={name}
				style={{ display: "none" }}
			/>
		</div>
	);
};

const UploadButton = ({ label }) => (
	<div className="image-preview bg-dirtywhite flex align-items-flex-center justify-content-center width-100">
		<div>
			<center>
				<PlusOutlined />
				<p>{label} </p>
			</center>
		</div>
	</div>
);

export default UploadWithPreview;
