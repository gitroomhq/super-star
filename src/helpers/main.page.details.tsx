import Link from "next/link";

export const mainPageDetails = {
  header: {
    github: 'https://github.com/nevo-david',
    title: (
      <span className="title-shadow-add">
        THE GITHUB
        <br />
        <span className="inline-block bg-hero-span leading-none italic px-2 md:pr-4 lg:pr-6">
          GROWTH
        </span>
        <br />
        COURSE
      </span>
    ),
    description: (
      <>
        Learn how to gain{" "}
        <span className="text-brand-main-medium bg-brand-plum-light">
          a major GitHub library growth
        </span>{" "}, boosting your library credibility, increasing metrics, and
        attracting regular attention.
      </>
    ),
    myName: "Nevo David",
    profileDescription: (
      <>
        Experienced full-stack developer with a decade of expertise. Working at{" "}Novu, the open-source notification infrastructure startup.
      </>
    ),
  },
  aboutMe: {
    title: "Why this course?",
    text: (
      <>
        I{"'"}ve been a developer for a long time, working in various companies.
        <br />
        Four years ago, I started my own startup, built and sold it
        <br />
        single-handedly, which was extremely challenging.
        <br />
        <br />
        Since then, I joined Novu with one goal in mind -{" "}
        <span className="text-brand-main-medium bg-brand-plum-light">
          to gain traction and achieve Product Market Fit.
        </span>{" "}
        <br />
        In my previous startup, as a one-man-show, I did straightforward
        marketing: selling services to Marketing and Sales professionals who are
        not the most sophisticated personas.
        <br />
        <br />
        However, it all changed when I joined Novu.
        <br />
        Developers don{"'"}t tolerate nonsense, and marketing to them requires a
        completely different approach.
        <br />
        <br />
        When I tried to search for{" "}
        <span className="text-brand-main-medium bg-brand-plum-light">
          {'"'}How to market to developers{'"'}
        </span>{" "}
        on Google, I found no results.
        <br />
        So, I had to figure it out on my own over the course of a year, and I
        developed practical tactics, not just theoretical ones.
        <br />
      </>
    ),
  },
  testimonials: [
    {
      profile: {
        picture:
          "https://user-images.githubusercontent.com/100117126/231681615-825f10e9-232a-4fae-8c92-fc7d0bbc817b.png",
      },
      name: "Zevi Reinitz",
      title: (
        <>
          Head of Product Marketing @{" "}
          <Link href="https://github.com/livecycle/preevy">Livecycle</Link>
        </>
      ),
      text: "The content is clear, creative and practical, and can have an immediate impact, highly recommend to anyone looking to grow their Github library.",
      background: {
        picture: "/assets/bg-2.png",
      },
    },
    {
      profile: {
        picture: "https://avatars.githubusercontent.com/u/34749692",
      },
      name: "Teja Kummarikuntla",
      title: (
        <>
          Developer Advocate @{" "}
          <Link href="https://github.com/ToolJet/ToolJet">ToolJet</Link>
        </>
      ),
      text: "Nevo's thoughts were insightful, his ideas and strategies are experimented with regular improvements towards the growth of GitHub stargazers and contributors",
      background: {
        picture: "/assets/bg-4.png",
      },
    },
  ],
  section1: {
    title: (
      <>
        The 20k <br /> Stars course
      </>
    ),
    description: (
      <>
        Learn how to boost your open-source project{"'"}s visibility and growth
        with proven strategies.
        <br />
        <br />
        From trending on GitHub to leveraging Reddit and DEV.to, using
        influencers, creating custom events, writing converting marketing
        materials, and mastering the call to action, this course covers it all.
        <br />
        <br />
        You{"'"}ll also learn effective communication with developers, finding
        content writers, and utilizing community-building tools like badges and
        certificates
      </>
    ),
  },
  section2: {
    title: "ALSO: Video about your library",
    description: (
      <>
        I will create a concise video about your library and upload it to my
        YouTube channel.
        <br />
        <br />
        Please be aware that I am only able to provide technical explanations
        using JS and PHP.
        <br />
        <br />
        If the library is in a different programming language, I may provide a
        more generalized overview.
      </>
    ),
  },
  section3: {
    title: "ALSO: Personal meeting",
    description: (
      <>
        Get guidance on how to boost your GitHub with a one hour call with me.
        We{"'"}ll dive into your GitHub library, analyze its strengths and
        weaknesses, and craft a customized funnel strategy to help you reach
        your goal of 20k stars.
      </>
    ),
  },
  section4: {
    title: "ALSO: Technical Content Writers Slack Group",
    description: (
      <>
        Finding content writers who are both technical and capable of writing
        marketing content can be difficult.
        <br />
        <br />
        However, I have managed to identify and add the top 1% of content
        writers to a Slack Group over the year.
      </>
    ),
  },
  payment: {
    title: "Register to the course",
    bullets: [
      {
        title: "The 20K Stars course",
      },
      {
        title: "Video about your library",
      },
      {
        title: "Personal Meeting",
      },
      {
        title: "Technical content writers Slack group",
      },
    ],
    underPrice: {
      description: (
        <>
          <p className="text-xs md:text-lg xl:text-xl/8 font-semibold">
            Not sure this is a safe purchase?
          </p>
          <Link
            className="text-xs md:text-xl/8 text-[#E67168] underline"
            href={`https://github.com/${process.env.GITHUB_REPO}/blob/main/src/services/payment/providers/stripe.service.ts`}
          >
            Here is the source code of the purchase area
          </Link>
        </>
      ),
    },
    callToAction: {
      text: "Purchase Now",
    },
    warrenty: (
      <>
        If it doesn{"'"}t work for you in 14 days, you will get all your money
        back -{" "}
        <span className="text-brand-main-medium bg-brand-plum-light leading-4 md:leading-normal md:my-2 inline-block">
          no questions asked.
        </span>
        <br />
        So you can basically completed the entire course, and ask for a refund.
      </>
    ),
  },
  faq: [
    {
      title: "Why do I need GitHub stars?",
      description:
        "GitHub stars are a vanity metric. Growing stars is similar to growing revenue. If you have earned stars legitimately (without buying them), you will likely experience increased user engagement, forks, social media activity, credibility, and a stronger brand presence.",
    },
    {
      title: "Does it matter when I buy the course?",
      description:
        "Yes! The course is mostly about tactics, and tactics might not last forever. When they stop working, I will have to come up with new tactics to update the course or remove it",
    },
    {
      title:
        "Can your course help my closed-source SDK/tech product reach 20k stars?",
      description:
        "While you might be able to gain a decent number of stars, it may not be sustainable for long-term growth within the community. Here's a helpful trick: you don't necessarily have to open-source your existing product. Instead, you can create an additional open-source library. A great example of this approach is builder.io with Quik.",
    },
    {
      title: "I don't have a social presence, will it work for me?",
      description:
        "Yes, the course does not rely on social media platforms such as Twitter, so you can still benefit from it even if you don't have a social presence.",
    },
    {
      title: "What if it's not working for me?",
      description:
        "If you have completed the course and find that it's not delivering the expected results, you can request a refund within 14 days with no questions asked. Your money will be returned to you.",
    },
    {
      title:
        "I am not a funded company / I have low resources, will it work for me?",
      description:
        "Absolutely! The course provides strategies that can help you delegate tasks, However, If you prefer to do everything on your own, that's also possible. As an example, I am the only marketing person at Novu.",
    },
    {
      title: "Why the course is so expensive?",
      description:
        "The course may appear costly compared to Udemy courses, However, I have learned that many people do not follow through with those low-priced courses. By investing more in this course, you are paying for greater long-term benefits, as it offers substantial value and potential for significant gains in the future.",
    },
    {
      title:
        "How do the tactics taught in the course differ from traditional marketing methods?",
      description:
        "The course focuses on more Growth - doing things in short term to get a massive amount of stars, and it's very different than traditional marketing.",
    },
    {
      title: "Can any library get to 20k stars?",
      description:
        "No, the ability to reach 20k stars largely depends on factors such as the programming language used and the nature of the library. For example, Novu, being a full-stack JS frontend and backend, may have a higher likelihood of gaining a larger number of stars compared to a COBOL library due to differences in usage and popularity. However, it's important to note that even if reaching 20k stars may not be feasible for all libraries, it's still possible to gain a significant number of stars for your library from day 1",
    },
    {
      title:
        "Are the tactics taught in the course considered ethical and legitimate by the GitHub community?",
      description: "Yes, everything is 100% legitimate.",
    },
    {
      title:
        "Can I access the course content indefinitely after purchasing it?",
      description:
        "Yes, you would also get free course updates - when there are new tactics",
    },
    {
      title:
        "Can I help you sell this course, and make some money in the process?",
      description: (
        <>
          Yes, I have an affiliate program, feel free to{" "}
          <a href="https://github-20k.getrewardful.com/signup">register here</a>
        </>
      ),
    },
    {
      title: "I want to build my own course, can I use your sales page?",
      description: (
        <>
          Yes, this course is completely open-sourced (under MIT license) feel
          free to{" "}
          <a href="https://github.com/github-20k/super-star">clone it</a>, and
          read the <a href="https://docs.github20k.com/intro">docs here</a>.
        </>
      ),
    },
    {
      title: "I don't like sales pages like this",
      description:
        " I understand, as a programmer, I also tend to dislike sales pages. Rest assured, my course will not rely on traditional sales tactics. However in order to make it more friendly I have open-sourced it completely",
    },
  ],
};
