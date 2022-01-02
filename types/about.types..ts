import React from "react";

export interface AboutItemProps {
  left: string;
  right: string;
}
export interface HeadingItemProps {
  text: string;
}
export interface ServicesItems {
  icon: React.ReactNode;
  heading: string;
  subtitle: string;
}
export interface ReviewsItemProps {
  review: string;
  name: string;
  type: string;
}
