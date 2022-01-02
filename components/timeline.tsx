import { Box } from "@chakra-ui/react";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { ExperianceItem, SkillsTypes } from "../types/resume.types";
import { DescriptionColor } from "./BasicComponents";

const SkillItem = ({
  timeline,
  workname,
  company,
  description,
}: ExperianceItem) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work bg-review-background"
      contentStyle={{
        background: "rgb(25 28 42 / var(--tw-bg-opacity))",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={timeline}
    >
      <div className="flex flex-col space-y-2 text-xl">
        <h3 className="text-blue-500 font-bold">{workname}</h3>
        <h6> {company} </h6>
        <div className="text-gray-500">{description}</div>
      </div>
    </VerticalTimelineElement>
  );
};
interface TimeLineTypes {
  items: ExperianceItem[];
  text: string;
  icon: React.ReactNode;
}
function TimeLine({ items, text, icon }: TimeLineTypes) {
  return (
    <Box className="flex-col flex items-center">
      <div className="flex !text-2xl space-x-3 p-4">
        {icon}
        <DescriptionColor
          className="!text-white !text-3xl break-words font-bold"
          text={text}
        />
      </div>
      <VerticalTimeline>
        {items.map((item, i) => (
          <SkillItem {...item} key={i} />
        ))}
      </VerticalTimeline>
    </Box>
  );
}

export default TimeLine;
