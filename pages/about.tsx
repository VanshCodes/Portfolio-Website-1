import { Image } from "@chakra-ui/react";
import { DescriptionColor, NameColor } from "../components/BasicComponents";
import Carousel from "nuka-carousel";
import * as itemLists from "../config/about.config";
import * as basicComponents from "../components/BasicComponents";
import homeConfig from "../config/home.config";

const AboutPage = ({}) => {
  return (
    <div className="flex flex-col space-y-6 ">
      <basicComponents.HeadingItem text="About" />
      <div className="flex flex-col md:flex-row items-center lg:items-start  lg:space-y-6 space-x-2">
        <Image
          className="object-contain w-5/12"
          src="https://tf-react-chester.vercel.app/images/about-image.jpg"
        />
        <div className="flex flex-col p-2 lg:p-6 space-y-7">
          <div className="text-3xl md:text-4xl font-semibold space-y-2 text-center lg:text-left">
            {"I am "}
            <NameColor text={homeConfig.name} className="" />
            <DescriptionColor
              text={homeConfig.description}
              className="text-sm md:text-base lg:text-lg !text-left lg:w-2/3 break-all"
            />
          </div>
          <div className="flex flex-col ">
            {itemLists.AboutItemItems.map((item, i) => {
              return <basicComponents.AboutItem {...item} key={i} />;
            })}
          </div>
        </div>
      </div>
      <basicComponents.HeadingItem text="Services" />
      <div className="flex flex-col lg:flex-row p-3">
        {itemLists.ServicesItemLists.map((item, i) => {
          return <basicComponents.ServicesItem {...item} key={i} />;
        })}
      </div>
      <basicComponents.HeadingItem text="Reviews" />

      <Carousel autoplayReverse={true} autoplay={true} withoutControls={true}>
        {itemLists.ReviewsItemLists.map((item, i) => {
          return <basicComponents.ReviewItem {...item} key={i} />;
        })}
      </Carousel>
    </div>
  );
};
export default AboutPage;
