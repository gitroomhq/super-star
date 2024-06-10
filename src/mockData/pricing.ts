import { IPricingCard } from "@/types";

export const PricingMockData: { [key: string]: IPricingCard[] } = {
  Monthly: [
    {
      id: 0,
      title: "Essential",
      subTitle: "Perfect for testing and small projects",
      price: 15,
      options: ["3 channel", "30 posts per month"],
      duration: "Monthly",
    },
    {
      id: 1,
      title: "Launch",
      subTitle: "Perfect for mid size projects",
      price: 30,
      options: [
        "1 channel",
        "400 posts per month",
        "Import content from channels (coming soon)",
        "AI auto-complete (coming soon)",
      ],
      duration: "Monthly",
      isPopular: true,
    },
    {
      id: 2,
      title: "Team",
      subTitle: "Perfect for large projects",
      price: 45,
      options: [
        "1 channel",
        "Unlimited posts per month",
        "Unlimited team members",
        "Import content from channels (coming soon)",
        "Community features (coming soon)",
        "AI auto-complete (coming soon)",
        "Become featured by Gitroom (coming soon)",
      ],
      duration: "Monthly",
    },
  ],
  Yearly: [
    {
      id: 0,
      title: "Essential",
      subTitle: "Perfect for testing and small projects",
      price: 15,
      options: ["3 channel", "30 posts per month"],
      duration: "Yearly",
    },
    {
      id: 1,
      title: "Launch",
      subTitle: "Perfect for mid size projects",
      price: 30,
      options: [
        "1 channel",
        "400 posts per month",
        "Import content from channels (coming soon)",
        "AI auto-complete (coming soon)",
      ],
      duration: "Yearly",
      isPopular: true,
    },
    {
      id: 2,
      title: "Team",
      subTitle: "Perfect for large projects",
      price: 45,
      options: [
        "1 channel",
        "Unlimited posts per month",
        "Unlimited team members",
        "Import content from channels (coming soon)",
        "Community features (coming soon)",
        "AI auto-complete (coming soon)",
        "Become featured by Gitroom (coming soon)",
      ],
      duration: "Yearly",
    },
  ],
};
