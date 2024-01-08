import React from "react";
import { Chrono } from "react-chrono";

interface TimelineProps {
  events: Array<{
    title: string;
    cardTitle: string;
    cardSubtitle: string;
    cardDetailedText: string;
  }>;
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div>
      <Chrono items={events} mode="VERTICAL" />
    </div>
  );
};

export default Timeline;
