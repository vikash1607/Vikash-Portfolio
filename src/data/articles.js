import React from "react";

function article_1() {
	return {
		date: "Aug 2023",
		title: "Blockchain and Fog Computing in Healthcare ",
		description:
			"Enable secure, privacy-preserving data management and real-time processing at the edge for healthcare applications, such as remote patient monitoring and telemedicine",
		keywords: [
			"Blockchain and Fog Computing in Healthcare",
			"Vikash K",
			"Vikash K",
			"Vikash Kumar",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<p>Enabled secure, privacy-preserving data management and real-time processing at the edge for healthcare applications, such as remote patient monitoring and telemedicine.<br /></p>
							Expertise in blockchain and fog computing to reduce healthcare costs by streamlining administrative processes and eliminating the need for intermediaries</div><br />
					<img
						src="https://www.annauniv.edu/cccdm/img/research1.jpg"
						alt="random"
						style={{height:300, width:500}}
						className="randImage"
					/>
					<br />
						<h1 ><a href="https://drive.google.com/file/d/1d6pGlg_IhhaXKfRv1KiquWqG6WGcf1XI/view?usp=drivesdk">LINK OF RESEARCH PAPER</a></h1>
				</div>
			</React.Fragment>
		),
	};
}

// function article_2() {
// 	return {
// 		date: "7 May 2023",
// 		title: "Artificial Intelligence in Healthcare",
// 		description:
// 			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
// 		style: ``,
// 		keywords: [
// 			"Artificial Intelligence in Healthcare",
// 			"Tharindu",
// 			"Tharindu N",
// 			"Tharindu Nayanajith",
// 		],
// 		body: (
// 			<React.Fragment>
// 				<h1>Content of article 2</h1>
// 			</React.Fragment>
// 		),
// 	};
// }

const myArticles = [article_1];

export default myArticles;
