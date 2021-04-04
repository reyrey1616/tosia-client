import React from "react";
import { PlusOutlined } from "@ant-design/icons";

const UploadWithPreview = ({ image, handleChange, label, name }) => {
	return (
		<div className="mb-1">
			<label htmlFor={name}>
				{image ? (
					<img
						src={image && image}
						alt="Image preview"
						className="image-preview width-100"
						style={{ objectFit: "cover" }}
					/>
				) : (
					<div className="image-preview bg-dirtywhite flex align-items-flex-center justify-content-center width-100">
						<div>
							<center>
								<PlusOutlined />
								<p>{label} </p>
							</center>
						</div>
					</div>
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

export default UploadWithPreview;
