import React, { useState, useEffect } from "react";
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
import Loader from "../../components/Loader/Loader";

const WorkExperiences: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 750);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="work-experience">
      <div className="work-experience-container">
        {loading ? (
          <Loader loading={loading} />
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default WorkExperiences;
