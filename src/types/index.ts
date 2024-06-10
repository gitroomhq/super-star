export interface IGithubInfo {
  id: number;
  imageUrl?: string;
  headerTitle: string;
  hasTitleGradient?: boolean;
  headerSubTitle: string;
  hasSubTitleGradient?: boolean;
  title: string;
  author: string;
  date: string;
  avatarUrl: string;
  description: string;
  style?: number;
}

export enum EnumNavMenus {
  "Home" = "",
  "CommuntyDeals" = "Community Deals",
  "OSSFriends" = "OSS Friends",
  "Blog" = "Blog",
}

export interface ICommunityCard {
  id: number;
  logoSrc: string;
  title: string;
  description: string;
  coupons: [number, number];
  contentTitle: string;
  contentSubTitle: string;
  cardType: EnumCommunityCardType;
}

export enum EnumCommunityCardType {
  payingCustomersAccepted = "Paying customer accepted",
  freeUsersAccepted = "Free users accepted",
}

export interface IOSSCard {
  id: number;
  logoSrc: string;
  rating: string;
  title: string;
  description: string;
  link: string;
}

export interface IAccordion {
  id: number;
  title: string | React.ReactNode | React.ReactNode[];
  content: string | React.ReactNode | React.ReactNode[];
}

export interface IPricingCard {
  id: number;
  title: string;
  subTitle: string;
  price: number;
  options: string[];
  duration: "Monthly" | "Yearly";
  isPopular?: boolean;
}

export interface IFaq {
  id: number;
  question: string;
  answer: string;
}

export interface IFilter {
  id: number;
  content: string;
}
