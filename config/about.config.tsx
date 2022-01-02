import { MdBrush, MdCode, MdPhoneAndroid } from "react-icons/md";
import * as typesItem from "../types/about.types.";

export const AboutItemItems: typesItem.AboutItemProps[] = [
  { left: "Full Name", right: "Devid Chester" },
  { left: "Age", right: "24 Years" },
  { left: "Nationality", right: "American" },
  { left: "Languages", right: "English,French" },
  { left: "Address", right: "121 King Street, Melbourne, Australia" },
];
export const ServicesItemLists: typesItem.ServicesItems[] = [
  {
    icon: <MdBrush />,
    heading: "Web Design",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
  },
  {
    icon: <MdCode />,
    heading: "Web Developement",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
  },
  {
    icon: <MdPhoneAndroid />,
    heading: "Mobile Application",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
  },
];
export const ReviewsItemLists: typesItem.ReviewsItemProps[] = [
  {
    review:
      "Mughe nahi pata mote njafjjdfsfns sdfsdjoifsjfsf sfjspdsdjfspdv sdfsdfsdpojsdfpsd fsfspdofspofsjfzsvjdvdgfegfnkfsfjsp fsfsdof sdif sjdf hof hoifs hfosdof",
    name: "Wangton",
    type: "Client",
  },
  {
    review:
      "ta mote njafjjdfsfns sdfsdjoifsjfsf sfjspdsdjfspdv sdfsdfsdpojsdfpsd fsfspdofspofsjfzsvjdvdgfegfnkfsfjsp fsfsdof sdif sjdf hof hoifs hfosdof",
    name: "Negetion",
    type: "Flere Client",
  },
  {
    review:
      "Mughe nahi pata mote njafjjdfsfns sdfsdjoifsjfsf sfjspdsdjfspdv sdfsdfsdpojsdfpsd fsfspdofspofsjfzsvjdvdgfegfnkfsfjsp fsfsdof sdif sjdf hof hoifs hfosdof",
    name: "Toppers",
    type: "Client",
  },
];
