import Link from "next/link";

export const mainPageDetails = {
  header: {
    github: "https://github.com/nevo-david",
    title: (
      <span className="title-shadow-add">
        GROW YOUR
        <br />
        <span className="inline-block bg-hero-span leading-none italic px-2 md:pr-4 lg:pr-6">
          OPEN-SOURCE
        </span>
        <br />
        LIBRARY
      </span>
    ),
    description: (
      <>
        Learn how we have grown Novu to{" "}
        <span className="text-brand-main-medium bg-brand-plum-light">
          20,000 stars
        </span>
        <br />
        within a year, gaining more stars, forks and users.
        <br />
        subscribe to get my weekly tips
      </>
    ),
    myName: "Nevo David",
    profileDescription: (
      <>
        Experienced full-stack developer with a decade of expertise. Working at{" "}
        Novu, the open-source notification infrastructure startup.
      </>
    ),
  },
  aboutMe: {
    title: "A year of learning",
    text: (
      <>
        Developers don{"'"}t tolerate nonsense, and marketing to them requires a
        completely different approach. When I tried to search for{" "}
        <span className="text-brand-main-medium bg-brand-plum-light">
          {'"'}How to market to developers{'"'}
        </span>{" "}
        on Google, I found no results. So, I had to figure it out on my own.
        During the year, I developed practical tactics that helped me every-day
        and I will be happy to share it with you over my newsletter.
      </>
    ),
  },
  testimonials: [
    {
      profile: {
        picture: "https://avatars.githubusercontent.com/u/8877285",
      },
      name: "Tomer Barnea",
      title: (
        <>
          CEO @{" "}
          <Link href="https://github.com/novuhq/novu" target="_blank">
            Novu
          </Link>
        </>
      ),
      text: "Nevo has achieved great growth for Novu in a remarkably short time. His creative, and practical strategies have resulted in immediate and tangible results.",
      background: {
        picture: "/assets/bg-1.png",
      },
    },
    {
      profile: {
        picture:
          "https://user-images.githubusercontent.com/100117126/232469471-6a4f39cf-49c9-4126-8ff2-fc45e05d6fdc.png",
      },
      name: "Nicklas Gellner",
      title: (
        <>
          COO @{" "}
          <Link href="https://github.com/medusajs/medusa" target="_blank">
            Medusa
          </Link>
        </>
      ),
      text: "Nevo is an outstanding Growth Engineer. He really understands how to create traction around a developer products and his results speak for themselves!",
      background: {
        picture: "/assets/bg-3.png",
      },
    },
    {
      profile: {
        picture:
          "https://user-images.githubusercontent.com/100117126/231681615-825f10e9-232a-4fae-8c92-fc7d0bbc817b.png",
      },
      name: "Zevi Reinitz",
      title: (
        <>
          Head of Product Marketing @{" "}
          <Link href="https://github.com/livecycle/preevy" target="_blank">
            Livecycle
          </Link>
        </>
      ),
      text: "The content is clear, creative and practical, and can have an immediate impact, highly recommend to anyone looking to grow their Github library.",
      background: {
        picture: "/assets/bg-2.png",
      },
    },
    {
      profile: {
        picture:
          "https://user-images.githubusercontent.com/100117126/233274687-c8966a08-6538-47d7-b17b-2a952cf0dddb.png",
      },
      name: "Michael Solati",
      title: (
        <>
          DevRel @{" "}
          <Link
            href="https://github.com/amplication/amplication"
            target="_blank"
          >
            Amplication
          </Link>
        </>
      ),
      text: "Nevo's knowledge and expertise in building communities, engaging with developers, and reaching out to them wherever they are, is invaluable.",
      background: {
        picture: "/assets/bg-5.png",
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
          <Link href="https://github.com/ToolJet/ToolJet" target="_blank">
            ToolJet
          </Link>
        </>
      ),
      text: "Nevo's thoughts were insightful, his ideas and strategies are experimented with regular improvements towards the growth of GitHub stargazers and contributors",
      background: {
        picture: "/assets/bg-4.png",
      },
    },
  ],
  section1: {
    title: <>Trend on GitHub</>,
    description: (
      <>
        Learn how to boost your open-source project{"'"}s visibility and growth
        with proven strategies.
        <br />
        <br />
        From trending on GitHub to leveraging Reddit and DEV.to, using
        influencers, creating custom events, writing converting marketing
        materials, and mastering the call to action.
        <br />
        <br />
        You{"'"}ll also learn effective communication with developers, finding
        content writers, and utilizing community-building tools like badges and
        certificates
      </>
    ),
  },
  section2: {
    title: "Value first",
    description: (
      <>
        Many of my tactics can be found over my{" "}
        <Link href="/blog" className="underline hover:text-pink-800">
          GitHub20k blog
        </Link>
        , I have shared tactics that can help you get your initial growth.
        <br />
        <br />
        Let{"'"}s meet, maybe I can help you out
        <br />
        <a
          href="https://calendly.com/github20k"
          target="_blank"
          className="underline hover:text-pink-800"
        >
          Book a meeting with me here
        </a>{" "}
        and let{"'"}s figure it up together.
      </>
    ),
  },
  section3: {
    title: "Value first",
    description: (
      <>
        Many of my tactics can be found over my{" "}
        <Link href="/blog" className="underline hover:text-pink-800">
          GitHub20k blog
        </Link>
        , I have shared tactics that can help you get your initial growth.
        <br />
        <br />
        Let{"'"}s meet, maybe I can help you out
        <br />
        <a
          href="https://calendly.com/github20k"
          target="_blank"
          className="underline hover:text-pink-800"
        >
          Book a meeting with me here
        </a>{" "}
        and let{"'"}s figure it up together.
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
