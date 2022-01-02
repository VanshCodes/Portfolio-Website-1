import { Image } from "@chakra-ui/react";
import { MdBrush, MdCode, MdPhoneAndroid } from "react-icons/md";
import { DescriptionColor, NameColor } from "../components/BasicComponents";
import * as typesItem from "../types/about.types.";
import Carousel from "nuka-carousel";

const AboutItemItems: typesItem.AboutItemProps[] = [
  { left: "Full Name", right: "Devid Chester" },
  { left: "Age", right: "24 Years" },
  { left: "Nationality", right: "American" },
  { left: "Languages", right: "English,French" },
  { left: "Address", right: "121 King Street, Melbourne, Australia" },
];
const ServicesItemLists: typesItem.ServicesItems[] = [
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
const ReviewsItemLists: typesItem.ReviewsItemProps[] = [
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
const ReviewItem = ({ review, name, type }: typesItem.ReviewsItemProps) => {
  return (
    <div className="grid [grid-template-rows:repeat(3,0.4fr)] p-5 items-center bg-review-background border-teal-500 break-all border-l-8 place-items-end w-full">
      <div className="p-3 !w-full text-base">{review}</div>
      <div className="text-left text-lg text-teal-400">{name}</div>
      <div className="text-left text-base text-gray-400">{type}</div>
    </div>
  );
};
const ServicesItem = ({ heading, subtitle, icon }: typesItem.ServicesItems) => {
  return (
    <div className="flex flex-col bg-review-background p-4 space-y-6 border-2 hover:border-t-blue-400 border-t-4 m-3 transition-all">
      <div className="text-4xl text-blue-400">{icon}</div>
      <h6 className="text-xl">{heading}</h6>
      <div>{subtitle}</div>
    </div>
  );
};

const AboutItem = ({ left, right }: typesItem.AboutItemProps) => {
  return (
    <div className="grid grid-cols-3 lg:text-xl text-gray-300 ">
      <h4 className="font-bold ">{left}</h4>
      <div className="grid-cols-2">: {right}</div>
    </div>
    // <div className="flex text-lg space-x-8 text-gray-400">
    //   <h4 className="font-bold">{left}</h4>
    //   <div>:{right}</div>
    // </div>
  );
};
const HeadingItem = ({ text }: typesItem.HeadingItemProps) => {
  return <h1 className="page-heading p-5 uppercase">{text}</h1>;
};

const AboutPage = ({}) => {
  return (
    <div className="flex flex-col space-y-6 ">
      <HeadingItem text="About us" />
      <div className="flex flex-col md:flex-row items-center lg:items-start  lg:space-y-6 space-x-2">
        <Image
          className="object-contain w-5/12"
          src="https://tf-react-chester.vercel.app/images/about-image.jpg"
        />
        <div className="flex flex-col p-2 lg:p-6 space-y-7">
          <div className="text-3xl md:text-4xl font-semibold space-y-2 text-center lg:text-left">
            {"I am "}
            <NameColor className="" />
            <DescriptionColor className="text-sm md:text-base lg:text-lg !text-left lg:w-2/3 break-all" />
          </div>
          <div className="flex flex-col ">
            {AboutItemItems.map((item, i) => {
              return <AboutItem {...item} key={i} />;
            })}
          </div>
        </div>
      </div>
      <HeadingItem text="Services" />
      <div className="flex flex-col p-3">
        {ServicesItemLists.map((item, i) => {
          return <ServicesItem {...item} key={i} />;
        })}
      </div>
      <HeadingItem text="Reviews" />

      <Carousel autoplayReverse={true} autoplay={true} withoutControls={true}>
        {ReviewsItemLists.map((item, i) => {
          return <ReviewItem {...item} key={i} />;
        })}
      </Carousel>

      {/* <Carousel
        autoPlay={true}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        interval={5000}
        showThumbs={false}
        infiniteLoop={true}
        centerMode={true}
        width="100%"
        swipeable={false}
      >
        {ReviewsItemLists.map((item, i) => {
          return <ReviewItem {...item} key={i} />;
        })}
      </Carousel> */}
    </div>
  );
};
export default AboutPage;
