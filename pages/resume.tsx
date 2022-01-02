import { Box, Progress, Stack } from "@chakra-ui/react";
import styles from "../styles/Resume.module.css";
import ProgressBar from "react-customizable-progressbar";
import { DescriptionColor, HeadingItem } from "../components/BasicComponents";
import { useEffect, useState } from "react";
import { ExperianceItem, SkillsTypes } from "../types/resume.types";
import { ExperItems, SchoolItems, SkillsItems } from "../config/resume.config";
import { MdCircle, MdOutlineBook, MdOutlineCases } from "react-icons/md";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimeLine from "../components/timeline";

const SkillsItem = ({ progress, name }: SkillsTypes) => {
  return (
    <div className="flex flex-col p-3">
      <h3>{name}</h3>
      <div className="flex items-center space-x-10">
        <div>{progress}%</div>
        <Progress
          className="w-full"
          value={progress}
          size="xs"
          colorScheme="blue"
        />{" "}
      </div>
    </div>
  );
};

const ResumePage = () => {
  return (
    <Box className="w-full ">
      <HeadingItem text="MY SKILLS" />
      <div className="flex flex-col">
        {SkillsItems.map((item, i) => {
          return <SkillsItem {...item} key={i} />;
        })}
      </div>
      <HeadingItem text="RESUME" />

      {/* SchoolItems */}
      <TimeLine
        icon={<MdOutlineCases />}
        text="Working Experiance"
        items={ExperItems}
      />
      <TimeLine
        icon={<MdOutlineBook />}
        text="Educational Qualification"
        items={SchoolItems}
      />
    </Box>
  );
};
export default ResumePage;
