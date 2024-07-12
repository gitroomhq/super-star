import { NextSeo } from "next-seo";
import clsx from "clsx";
import styles from "@/components/pages/home/styles.module.css";

export const PrivacyPolicyComponent = () => {
  return (
    <>
      <NextSeo
        title={process.env.COURSE_NAME! + ' Privacy Policy'}
        description="Learn the best tips and trick to grow your GitHub repository - Privacy Policy"
        canonical={process.env.COURSE_URL + '/privacy-policy'}
        additionalLinkTags={[{
          rel: 'alternate', type: 'application/rss+xml', href: 'https://gitroom.com/feed.xml',
        }]}
        openGraph={{
          url: process.env.COURSE_URL, title: process.env.COURSE_NAME, description: 'Learn the best tips and trick to grow your GitHub library', images: [{
            url: process.env.COURSE_URL + "/github-blog.png", width: 1200, height: 630, alt: process.env.COURSE_NAME, type: "image/png",
          }], siteName: process.env.COURSE_NAME,
        }}
        twitter={{
          handle: "@nevodavid", site: "@nevodavid", cardType: "summary_large_image",
        }}
      />
      <div className={clsx(styles.header, 'flex justify-center items-center')}>
        <h1 className="mt-[28px] w-full max-w-[480px] md:max-w-[860px] text-center text-white font-chakra-petch font-[600] text-[28px] leading-[32px] md:text-[60px] md:leading-[66px]">Privacy Policy</h1>
        <div className="content text-white w-full max-w-[800px] mt-[28px]">
          <div>
            <h1>Privacy Policy for Gitroom</h1>
            <p>At Gitroom LLC (“Company,” “we,” “us,” or “our”), we are committed to protecting the privacy and security of our users’ personal information. This Privacy Policy outlines how we collect, use, and safeguard the personal information collected on our website. By accessing or using our website, registering for the Website, and providing your personal information, you agree to the terms and conditions of this Privacy Policy.</p>
            <h2>1. Our Services</h2>
            <h3>Gitroom LLC Services</h3>
            <p>Gitroom LLC’s suite of social media management and social care tools is accessible via our websites and mobile applications. These tools allow you to combine all your social media accounts for easy access and management through a single online platform. Through this platform, you can manage your social media, marketing, and advertising campaigns, engage with your audiences, schedule and publish messages, manage customer care communications, and analyze the results of these activities.&nbsp;</p>
            <h3>Social Networks</h3>
            <p>Any collection, use, and management of personal information by the social networks, including Facebook, Instagram, Twitter, LinkedIn, and TikTok (collectively, the “Social Networks”) are governed by their respective privacy policies and terms. When using Social Networks, you must comply with their privacy policies and terms. We recommend carefully reviewing their privacy policies and terms, as Gitroom LLC is not responsible for Social Networks.</p>
            <h3>Your Privacy Obligations</h3>
            <p>We rely on you to comply with applicable privacy laws when collecting, using, or disclosing information about individuals through the Services, including obtaining any necessary consents and providing any necessary notices. If we receive any questions or complaints regarding your use of the Services, we will direct the request to you for further assistance.</p>
            <h3>Business Purposes</h3>
            <p>Our Services are not intended for use by children and should only be accessed by individuals at least 18 years old and are using the Services for business purposes.</p>
            <p />
            <h2>2. What information do we collect?</h2>
            <p>We collect information about you as reasonably necessary for the following activities:</p>
            <h3><strong>Using our Services</strong></h3>
            <p>We may collect the following information when you use our Services:</p>
            <h4>Account information:</h4>
            <ul>
              <li>Your contact and profile information, including your name, email address, organization name, and address; your preferences such as language, time zone, and the types of communications you would like to receive from us; and image (if you choose to provide this). We may also obtain this information if you use a social login service like Facebook Login to create or access your account.</li>
              <li>Billing and other payment information (if you sign up for a paid service), including payment method details, such as credit card number.</li>
              <li>The Services you have acquired from us, including the type of plan, number of team members, and transaction information related to the Services.</li>
            </ul>
            <h4>Content:</h4>
            <ul>
              <li>Your social profile information for Social Networks you choose to connect to the Services. For example, your Facebook profile information may include your Facebook username and profile image.</li>
              <li>If you share this information, please provide a specific location, such as an address, a city, or a place (for example, a restaurant).</li>
              <li>Your messages, posts, comments, images, and other material you curate on and upload to the Services, as well as information collected from the social networks you choose to connect to and display on our Services.</li>
              <li>Social media content and other user-generated content (for example, posts, comments, pages, profiles, likes, and feeds)</li>
              <li>Messaging content that individuals choose to share (for example, social media messages, in-app messages)</li>
              <li>Social media and messaging metadata (for example, number of social media followers, number of posts, number of tweets)</li>
              <li>Content that you may send and receive through Social Networks and other messaging services, such as SMS, may contain personal information of third parties. This may include information such as names, photos, age, gender, geographic location, opinions, preferences, and phone numbers that are provided or posted by social media users.</li>
            </ul>
            <h4>Logs, usage, and support data:</h4>
            <ul>
              <li>Log data, which may include your IP address, the address of the web page you visited before using the Services, your browser type and settings, your device information (such as make, model, and OS), the date and time when you used the Services, information about your browser configuration, language preferences, unique identifiers, and&nbsp;cookies.</li>
              <li>Usage data and analytics may include the frequency of logins and the different types of activity users undertake, such as frequently accessed service areas.</li>
              <li>General Location information, such as IP address and the region in which you are located when logging in and using the Services, by the settings on your device.</li>
              <li>Customer support questions, issues, and general feedback that you choose to provide.</li>
            </ul>
            <h3><strong>Surveys, events, marketing, and other activities</strong></h3>
            <p>Surveys, contests, and events (such as webinars and in-person events) for those we host or are affiliated with:</p>
            <ul>
              <li>Contact information includes your name, email address, telephone number, organization name, and address.</li>
              <li>Participation, attendance, feedback, and opinions.</li>
              <li>General information about the organization you choose to provide includes annual company revenue, number of employees, and industry. We may also use service providers to obtain additional business-related information about your organization, such as the legal name, size, and publicly available revenue, to assist us in offering services appropriate to your organization’s needs.</li>
            </ul>
            <p>Other interactions:</p>
            <ul>
              <li>Social media: Your messages, posts, and other interactions with our brand and social media accounts.</li>
              <li>Email interactions and analytics: Information on how you engage with our emails, such as email open and click rates, whether a link is clicked, which web pages are visited after opening the email, the type of browser and email clients you use, and general location (i.e., country and region) information.</li>
              <li>Teleconference, videoconference, and other meetings: Your preferences, feedback, opinions, and business needs; and recordings of these sessions if you agree.</li>
              <li>Accessing resources (e.g. videos, whitepapers or case studies) on our website: Your name and contact information, and engagement analytics such as the type and frequency of resources accessed, viewed and downloaded.</li>
            </ul>
            <h3><strong>Browsing our websites</strong></h3>
            <p>When you browse our websites, we collect information about you as described below, some of which is collected automatically:</p>
            <ul>
              <li>When you use automated chat functionality (chatbots) to make an inquiry, provide feedback, or make another request, we may collect information about you such as your name and email address, your specific feedback or request, and information related to your use of our Services.</li>
              <li>Gitroom LLC and our authorized service providers use cookies and similar tracking technologies, including web beacons, pixels, and software tokens, on our websites and services.</li>
              <li>Website usage data including engagement rate, the address of the previous web page that directed you to our website, browser type,&nbsp;session experience and replay, and mouse movements.</li>
            </ul>
            <h2>3. How do we use your information?</h2>
            <p>We use your information for the purposes described below:</p>
            <h3><strong>Providing and securing our Services</strong></h3>
            <ul>
              <li>We need to identify and authenticate our users to ensure, for example, that only those authorized users are able to use the Services for their organization, and to make changes to their accounts.</li>
              <li>We use information that you provide when signing up to set up your account, process payments, contact you regarding the Services, and manage your account.</li>
              <li>We use your contact information and information related to your request to respond to your inquiries, manage our contract with you, respond to your questions and requests, and send you updates and information about the Services.</li>
              <li>We use logging and other data such as general location information—for example, the IP address of your browser or device, to help us manage the performance, security and compliance of the Services.</li>
              <li>Where you have chosen to share your specific location information, we use this information to provide location based features, such as enabling you to share your location on your posts for Social Networks that support this functionality, and to use any functionality that relies on location information.</li>
              <li>We analyze your information, including usage information, social media metadata, your feedback, support queries, and survey responses to identify issues and help us understand how you use the Services so that we can make improvements to our Services and to provide aggregated user analytics, insights and measurement reports.</li>
              <li>We use Content, information that you send and receive through Social Networks, and other information from these Social Networks (such as your messages, posts, comments, images, advertising, and other material you curate on and upload to the Services) in order to provide the Services.</li>
            </ul>
            <h3><strong>Communicating with you</strong></h3>
            <p>We use your contact information where appropriate to send you information about our Services, events, marketing communications (consistent with your preferences</p>
            <p>We use email statistics, such as open rates, to assess the effectiveness of, and to make improvements to our communications. We also use engagement analytics to better understand your needs so that we can provide the information and services that would be more suitable for you.</p>
            <h3><strong>Improving our websites and applications</strong></h3>
            <p>We use information about you to help us understand usage patterns and other activities on our websites and applications so that we can diagnose problems and make improvements, including enhancing usability and security. We also use website personalization software to help us present information on our websites that may be more relevant to you, such as displaying resources applicable to your industry or organization size.</p>
            <p>If you choose to provide information about you, your usage of social media services and other feedback during telephone calls and other interactions to our customer support and sales teams, we may use, monitor, and record this information for training purposes, to make improvements to our internal sales and marketing processes, and to improve our Services.</p>
            <h2>4. What are your rights regarding the information about you?</h2>
            <h3>Services information</h3>
            <p>When using our Services, you may access, update, or correct most of your Account information by logging in to your account to edit your profile or organization record.</p>
            <p>If you have requests that cannot be carried out by logging in to your account, such as accessing additional information or deleting information about you, for the Gitroom LLC services, please email our&nbsp;<a href="mailto:nevo@gitroom.com">privacy team</a>. Please note that we may need to retain certain information about you for as long as you maintain an account for our Services, to provide you with our Services, for record keeping purposes, for payment processing, to comply with our legal and regulatory obligations, to resolve disputes, or to enforce the&nbsp;<a href="https://Gitroom LLC.com/terms-of-service">Gitroom LLC terms of service</a>,&nbsp;or other agreement in place between you (or your organization) and Gitroom LLC (collectively, the “Terms of Service”).</p>
            <p>Requests to access, correct, update, or delete your information can be made in writing to our&nbsp;<a href="mailto:nevo@gitroom.com">privacy team</a>&nbsp;and will be handled within thirty (30) days unless they are unusually extensive or complex, in which case we will advise you of the expected timeline for handling your request.</p>
            <p>If you have authorized us to access your Social Network account to provide the Services, you may revoke this access at any time by emailing our support team&nbsp;<a href="mailto:nevo@gitroom.com">here</a>. For example, if you have authorized us to access your information via the YouTube API services, in addition to our normal procedure for deleting stored data, you may revoke our access to your data via the Google security settings page, located&nbsp;<a href="https://security.google.com/settings/security/permissions">here</a>.</p>
            <p>You can contact our Support team for other general requests&nbsp;<a href="mailto:nevo@gitroom.com">here</a>.</p>
            <h3><strong>Marketing emails, advertising and website browsing</strong></h3>
            <p>For marketing communications, you may opt out of marketing communications sent by Gitroom LLC by accessing by clicking on the unsubscribe link in the marketing email you receive.&nbsp;Please note that if you are a Gitroom LLC user, unsubscribing from marketing communications will not affect product-generated emails sent in connection with your use of our Services.</p>
            <p>Gitroom LLC participates in interest-based advertising (where you may have visited our websites or another website which allows us to display advertising relating to our Services). The Network Advertising Initiative has developed a tool that may help you understand which third parties have currently enabled cookies for your browser and how to opt out of those cookies. For more information and to opt out of interest-based advertising, you can visit this&nbsp;<a href="http://optout.networkadvertising.org/?c=1#!%2F">page</a>.</p>
            <p>For more information on how to opt out of marketing cookies, review our&nbsp;Cookie Notice.</p>
            <h2>5. Who has access to your information?</h2>
            <p>Gitroom LLC does not rent or sell your information. We restrict access to your information to authorized employees and we do not share your information with third parties except in the circumstances explained below.</p>
            <h3><strong>Authorized Contractors</strong></h3>
            <p>Our authorized contractors may need to access information about you when they require this information to perform their job. For example, a customer support representative would need access to your account to validate your identity and respond to your question or request; our email communications team would need access to your contact information to ensure this information is sent correctly and any unsubscribe requests are properly managed; and our security staff would need to review information to investigate attempted denial of service attacks, fraudulent account activity, or other attempts to compromise the Services.</p>
            <p>All our employees and contractors are required to agree to maintain the confidentiality and protect the privacy of your information.</p>
            <h3><strong>Service Providers, Authorized Resellers, and Partners</strong></h3>
            <p>We will share limited information about you to authorized service providers we use for marketing services, communicating with you, managing our customer database, the provision of professional services, and providing and managing the Services (including hosting data centers, securing our Services, and payment processing).</p>
            <p>We limit the number of service providers who are permitted to process your Content for the purpose of assisting us in delivering the Services.</p>
            <p>Where you have purchased a service from an authorized reseller or partner, we may provide information about you to (and may receive information about you from) the reseller or partner as necessary to support your use of the service you purchased.</p>
            <p>When sharing your information with any of the above service providers, resellers and partners, we ensure they agree to obligations consistent with this Privacy Policy and any other appropriate confidentiality and security measures, and only use your information to carry out the Services and your requests.</p>
            <p>We may also participate in and run marketing events (e.g. conferences, webinars, and provide resources) with sponsors and other organizations. Where the sponsors or other organizations wish to collect your information for their marketing purposes, while we may facilitate this (e.g. information may be collected on the same registration form), they will be doing so independently under their own policies. We will advise you and provide you an opportunity for you to share your information with the sponsors or other organizations for such purposes, either upon registration or during the event.</p>
            <h3><strong>Social Networks and Third-Party Services</strong></h3>
            <p>Where you are using our Services and have chosen to connect your Social Networks to the Services, or if you authorize a Third-Party Service to access your account, you are agreeing to provide information about you to the Social Networks and the Third-Party Services under their respective terms and privacy policies. For example, if you choose to connect your YouTube account to the Services, this connection uses YouTube’s API services, and the Google Privacy Policy (located&nbsp;<a href="https://www.google.com/policies/privacy">here</a>) will apply to you.</p>
            <h3><strong>Customer Organizations</strong></h3>
            <p>Where your employer or an entity has purchased Services on your behalf, we may disclose information about you such as your name and email address, and some usage information including whether a user has logged in to the Service, frequency of login, time spent using the Services, and enrollment and completion of Gitroom LLC Academy courses to assist your employer or the entity in managing its use and maximizing the value of the Services.</p>
            <h3><strong>Successor and Affiliated Entities</strong></h3>
            <p>We may share information about you among Gitroom LLC-controlled affiliates and subsidiaries, and they will protect your information in a manner that is consistent with this Privacy Policy and where applicable, in accordance with the privacy policy specific to the entity.</p>
            <p>We may also disclose your information as part of a corporate transaction such as a merger or sale of assets. If we do, we will inform such entities of the requirement to handle your information in accordance with this Privacy Policy, or inform you that you are covered by a new privacy policy.</p>
            <h3><strong>Law Enforcement, Government Agencies, and Professional Advisors</strong></h3>
            <p>We may need to disclose information about you where we believe that it is reasonably necessary to comply with a law or regulation, or if we are otherwise legally required to do so, such as in response to a court order or legal process, or to establish, protect, or exercise our legal rights or to defend against legal claims or demands. For governmental data access requests concerning you or your organization, we would first attempt to redirect the request to you and/or we would first attempt to notify you unless we are legally prohibited from doing so.</p>
            <p>In addition, we may disclose information about you if we believe it is necessary to investigate, prevent, or take action: (a) against illegal activities, fraud, situations involving potential threats to our rights or property (or to the rights or property of those who use our Services), or to protect the personal safety of any person; or (b) regarding situations that involve the security of our Services, abuse of the Services infrastructure, or the Internet in general (such as voluminous spamming, or denial of service attacks).</p>
            <p>We also use professional advisors, including lawyers and accountants, and may be required to disclose information about you when engaging them for their services and as necessary for audits, financial and other regulatory reviews.</p>
            <h2>6. What international data transfers occur at Gitroom LLC?</h2>
            <p>Under the General Data Protection Regulation (GDPR) and other data protection laws, information about you may only be transferred from your region to other regions if certain requirements are met. For instance, under the GDPR, information about you may be transferred from the European Economic Area (EEA) to outside the EEA if adequate data protections are in place.</p>
            <p>Our Services are managed by Gitroom LLC headquarters in USA. As the European Commission considers USA to be a country which provides adequate data protection, information about you may be transferred from the EEA to USA. </p>
            <p>Gitroom LLC also uses third-party service providers, such as managed hosting providers, credit card processors, and technology partners to provide the software, networking, infrastructure and other services required to operate the Services. These third-party providers may process or store personal data on servers outside of the the US. We rely on adequacy and standard contractual clauses (if sent to the US or onward to other countries) to ensure that information about you is lawfully transferred under EU law.</p>
            <p>By its nature, social media data can be shared with people around the globe. The Social Networks and Third-Party Services that you choose to integrate with our Services may collect, store, and process your information from various locations around the world according to their own terms and privacy policies.</p>
            <h2>7. How do we safeguard your information?</h2>
            <p>Gitroom LLC maintains industry standard security safeguards to protect your information. This includes ensuring our employees receive appropriate security and privacy training and guidance so they are aware of the measures they need to implement to protect your information.</p>
            <p>Access controls are in place to limit access to your information to those who need it to perform their jobs. For example, information about you may be provided to our customer support specialists to help you with your requests. Individuals who are permitted to handle your information must adhere to confidentiality obligations.</p>
            <p>We encrypt data in transit and at rest, where appropriate, to ensure that your information is kept private. We undertake service provider security and privacy reviews to ensure that service providers follow our stringent requirements to safeguard your information, and we also enter into data protection agreements with our service providers. All payment information is fully encrypted and handled only by PCI certified organizations.</p>
            <h2>8. How long do we retain your information?</h2>
            <p>In general for the Gitroom LLC Services, we do not permanently store Content from Social Networks.&nbsp;Rather, when you login to the Services, we retrieve data from Social Networks in real time so that it is displayed in the platform for viewing during your session. We store other Content that you produce (such as draft Content for publication on Social Networks) so that you can easily access this material on the Services.</p>
            <p>Aggregated data is used by Gitroom LLC for analysis, product improvement, and troubleshooting purposes. In some cases, Content may continue to exist on the Social Networks even after you or we delete it from our Services, and you will need to contact the relevant Social Network directly if you want it to remove this Content.</p>
            <p>We retain your information as long as required to provide the Services requested by you, for record keeping purposes, to comply with our legal obligations, resolve disputes, and enforce the terms for the Services. After it is no longer necessary for us to retain information about you, or otherwise upon your request, we will dispose of it in a secure manner or anonymize the information.</p>
            <h2><strong>9. Gitroom LLC’s roles under the GDPR and UK data protection laws</strong></h2>
            <p>Depending on the situation and the type of data involved, Gitroom LLC may act as a data controller or a data processor.</p>
            <h3><strong>Gitroom LLC as a data controller</strong></h3>
            <p>Gitroom LLC may act as a data controller when we are:</p>
            <ul>
              <li>Collecting information from you to set up and administer your Gitroom LLC account (for example, Account information such as your name and email address);</li>
              <li>Monitoring usage information on our website;</li>
              <li>Managing your contact and other related information to send marketing, Services, and other communications to you;</li>
              <li>Responding to a support or general inquiry; and</li>
              <li>Recruiting individuals for job opportunities.</li>
            </ul>
            <h3><strong>Legal bases for processing when Gitroom LLC is a data controller</strong></h3>
            <p>The legal bases for processing information about you include:</p>
            <ul>
              <li>Your consent (for example, when you have provided your information to sign up for an account or a webinar, or you have provided your employment history when applying for a job). Where we rely on your consent to process personal data, you can withdraw your consent at any time.</li>
              <li>It is necessary to perform a contract (for example, we may need your information to fulfill our obligations to provide you with Services under the terms relevant to the Services you have acquired).</li>
              <li>Legitimate interest (for example, to provide, maintain and improve the Services for you, to maintain the security of the Services, and to attract new customers to maintain demand for the Services.</li>
              <li>In some cases, we may have a legal obligation to process your personal data to comply with relevant laws (for example, processing payroll and tax information to comply with relevant employment and tax legislation); or processing is necessary to protect your vital interests or those of another person (for example, obtaining health-related information during a medical emergency).</li>
            </ul>
            <h3><strong>Your rights when Gitroom LLC is a data controller</strong></h3>
            <p>Where Gitroom LLC is acting as a data controller, we have outlined certain rights in the “What are your privacy rights?” section.</p>
            <p>In addition, you may have the following rights:</p>
            <ul>
              <li>Right to object to processing: You may request that Gitroom LLC stop processing information about you (for example, stop sending you marketing communications).</li>
              <li>Right to restrict processing: You may request that we restrict the processing of information about you (for example, where you believe that this information is inaccurate).</li>
              <li>Right to data portability: You may request that we provide you with information Gitroom LLC has about you in a structured, machine-readable, and commonly used format or transfer this information to another data controller.</li>
            </ul>
            <p>If you would like assistance on any of the above requests, please email our&nbsp;<a href="mailto:nevo@gitroom.com"><u>Privacy team</u></a>.</p>
            <h3><strong>Gitroom LLC as a data processor</strong></h3>
            <p>When you use our Services and make decisions about the personal data being processed in them (including selecting the Social Network accounts you wish to connect to the Services or uploading and using Content), you are acting as a data controller, and Gitroom LLC is acting as a data processor.</p>
            <p>As a data controller, you have certain obligations under the GDPR, including managing Content on the Services. As a data processor, Gitroom LLC will only access and process Content to provide you with the Services by your instructions (which you provide through the Services), the Terms of Service, the Social Networks’ terms, and applicable laws. As part of delivering the Services, we may process Content to improve further the Services, such as enhancing usability and developing new features.</p>
            <p>As a data controller, suppose you require Gitroom LLC to agree to data protection requirements under Article 28, GDPR, or UK data protection laws. In that case, Gitroom LLC makes available a data processing addendum that meets these requirements.</p>
            <p>If you are using the Services as an authorized user of a Gitroom LLC customer (whether that customer is your employer, another organization, or an individual), that customer determines its own policies (if any) regarding storage, access, modification, deletion, sharing, and retention of personal data and Content, which may apply to your use of the Services. Please check with that customer about the policies and settings it has in place.</p>
            <h2><strong>10. Your California Privacy Rights</strong></h2>
            <p>Suppose you are a consumer as defined in the California Consumer Privacy Act (CCPA) and as amended by the California Privacy Rights Act (CPRA) (collectively, “California Privacy Laws’). In that case, the following provisions apply to you. Definitions of terms are set out in the California Privacy Laws.</p>
            <h3><strong>Your Rights</strong></h3>
            <p>We have outlined certain rights in the section “What are your privacy rights?”</p>
            <p>Under the California Privacy Laws, you may have the following specific rights:</p>
            <ul>
              <li>The right to know about the personal information collected about you, which we have set out under “here”</li>
              <li>The right to have your personal information deleted.</li>
              <li>The right to correct inaccurate personal information.</li>
              <li>The right not to be discriminated against for exercising consumer rights under California Privacy Laws</li>
            </ul>
            <p>You may access, update, or correct most of your Account information by logging in to your account; or you may exercise your rights by emailing our&nbsp;<a href="mailto:nevo@gitroom.com"><u>Privacy team</u></a>.</p>
            <p>While we disclose personal information to service providers for the purpose of managing our relationship with you (e.g. distributing marketing communications) and providing the Services, we do not sell your personal information.</p>
            <h2>11. Changes to this Privacy Policy</h2>
            <p>We may change this privacy policy at any time to reflect updates to our Services, applicable laws, and other factors. If we make any material changes, we will include a prominent notice on this website and/or our Services, but we encourage you to review this policy periodically to stay informed.</p>
          </div>
        </div>
      </div>
    </>)
}