import HomeConfig from "../config/home.config";
import * as typesItem from "../types/about.types.";

interface NameColorProps {
  className?: string;
  text: string;
}
export const NameColor = ({ className, text }: NameColorProps) => {
  return (
    <span className={`text-blue-500 py-2 break-words ${className}`}>
      {text}
    </span>
  );
};

export const DescriptionColor = ({ className, text }: NameColorProps) => {
  return (
    <h3
      className={`text-base text-center md:text-lg lg:text-xl text-gray-400 ${className}`}
    >
      {text}
    </h3>
  );
};
export const ReviewItem = ({
  review,
  name,
  type,
}: typesItem.ReviewsItemProps) => {
  return (
    <div className="grid [grid-template-rows:repeat(3,0.4fr)] p-5 items-center bg-review-background border-teal-500 break-all border-l-8 place-items-end w-full">
      <div className="p-3 !w-full text-base">{review}</div>
      <div className="text-left text-lg text-teal-400">{name}</div>
      <div className="text-left text-base text-gray-400">{type}</div>
    </div>
  );
};
export const ServicesItem = ({
  heading,
  subtitle,
  icon,
}: typesItem.ServicesItems) => {
  return (
    <div className="flex flex-col bg-review-background p-4 space-y-6 border-2 hover:border-t-blue-400 border-t-4 m-3 transition-all">
      <div className="text-4xl text-blue-400">{icon}</div>
      <h6 className="text-xl">{heading}</h6>
      <div>{subtitle}</div>
    </div>
  );
};

export const AboutItem = ({ left, right }: typesItem.AboutItemProps) => {
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
export const HeadingItem = ({ text }: typesItem.HeadingItemProps) => {
  return <h1 className="page-heading my-20 text-center uppercase">{text}</h1>;
};
