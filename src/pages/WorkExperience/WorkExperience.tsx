import React from "react";
import "./WorkExperience.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkExperienceCard from "../../components/WorkExperienceCard/WorkExperienceCard";
import CompanyLogo from "../../components/CompanyLogo/CompanyLogo";
import workExperiences from "../../data/workExperienceData";
import companyLogos from "../../utils/companyLogos";

const WorkExperiences: React.FC = () => {
  return (
    <div className="work-experience">
      <div className="work-experience-container">
        <h2 className="section-title">Work Experience</h2>
        <VerticalTimeline layout="1-column" lineColor="#99b9e8">
          {workExperiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{ background: "#fff", color: "#000" }}
              contentArrowStyle={{ borderRight: "7px solid #fff" }}
              dateClassName="vertical-timeline-date"
              icon={
                <CompanyLogo
                  title={experience.company}
                  imageUrl={companyLogos[experience.logoName]}
                />
              }
            >
              <WorkExperienceCard experience={experience} />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperiences;
