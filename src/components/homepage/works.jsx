import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Study and Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/KIIT_logo.svg/1200px-KIIT_logo.svg.png"
								alt="kiit"
								className="work-image"
							/>
							<div className="work-title">KIIT</div>
							<div className="work-subtitle">
								B.Tech in Computer Science
							</div>
							<div className="work-duration">2021 - 2025</div>
						</div>

						<div className="work">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvrd7VvlW5aY6iHixkku1FCaCyy5rTW2nIg&usqp=CAU"
								alt="crtd"
								className="work-image"
							/>
							<div className="work-title">CRTD Technologies</div>
							<div className="work-subtitle">
								React Developer Intern
							</div>
							<div className="work-duration">July-Sept 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
