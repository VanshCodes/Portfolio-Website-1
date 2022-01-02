import HomeConfig from "../config/home";

interface NameColorProps {
  className?: string;
}
export const NameColor = ({ className }: NameColorProps) => {
  return (
    <span className={`text-blue-500 py-2 break-words ${className}`}>
      {HomeConfig.name}
    </span>
  );
};

export const DescriptionColor = ({ className }: NameColorProps) => {
  return (
    <h3
      className={`text-base text-center md:text-lg lg:text-xl text-gray-400 ${className}`}
    >
      {HomeConfig.description}
    </h3>
  );
};
