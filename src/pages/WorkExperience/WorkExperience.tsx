import React from "react";
import "./WorkExperience.scss";
import Timeline from "../../components/Timeline/Timeline";

const WorkExperiences: React.FC = () => {
  const events = [
    {
      title: "Event 1",
      cardTitle: "Event 1 Title",
      cardSubtitle: "Event 1 Subtitle",
      cardDetailedText: "Detailed text about Event 1",
    },
    {
      title: "Event 2",
      cardTitle: "Event 2 Title",
      cardSubtitle: "Event 2 Subtitle",
      cardDetailedText: "Detailed text about Event 2",
    },
    {
      title: "Event 3",
      cardTitle: "Event 3 Title",
      cardSubtitle: "Event 3 Subtitle",
      cardDetailedText: "Detailed text about Event 3",
    },
    {
      title: "Event 4",
      cardTitle: "Event 4 Title",
      cardSubtitle: "Event 4 Subtitle",
      cardDetailedText: "Detailed text about Event 4",
    },
    {
      title: "Event 5",
      cardTitle: "Event 5 Title",
      cardSubtitle: "Event 5 Subtitle",
      cardDetailedText: "Detailed text about Event 5",
    },
  ];

  return (
    <div className="work-experience">
      <div className="work-experience-container">
        <h2 className="section-title">Work Experience</h2>
        <Timeline events={events} />
      </div>
    </div>
  );
};

export default WorkExperiences;
