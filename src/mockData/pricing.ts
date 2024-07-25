import { IPricingCard } from "@/types";

export const PricingMockData: { [key: string]: IPricingCard[] } = {
  Monthly: [
    {
      id: 0,
      title: "Free",
      subTitle: "Perfect for testing",
      price: 0,
      options: ["1 channels", "30 posts per month"],
      duration: "Monthly",
    },
    {
      id: 1,
      title: "Standard",
      subTitle: "Perfect for independent creators",
      price: 30,
      options: [
        "5 channels",
        "400 posts per month",
        "AI auto-complete",
      ],
      duration: "Monthly",
      isPopular: true,
    },
    {
      id: 2,
      title: "Pro",
      subTitle: "Perfect for large teams",
      price: 40,
      options: [
        "8 channel",
        "Unlimited posts per month",
        "Unlimited team members",
        "AI auto-complete",
      ],
      duration: "Monthly",
    },
  ],
  Yearly: [
    {
      id: 0,
      title: "Free",
      subTitle: "Perfect for testing",
      price: 0,
      options: ["2 channels", "30 posts per month"],
      duration: "Yearly",
    },
    {
      id: 1,
      title: "Standard",
      subTitle: "Perfect for independent creators",
      price: 288,
      options: [
        "5 channels",
        "400 posts per month",
        "AI auto-complete",
      ],
      duration: "Yearly",
      isPopular: true,
    },
    {
      id: 2,
      title: "Pro",
      subTitle: "Perfect for large teams",
      price: 384,
      options: [
        "8 channel",
        "Unlimited posts per month",
        "Unlimited team members",
        "AI auto-complete",
      ],
      duration: "Yearly",
    },
  ],
};
