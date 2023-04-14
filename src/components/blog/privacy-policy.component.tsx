import { FC } from "react";
import { BlogLayout } from "@github20k/components/blog/blog.layout";

export const PrivacyPolicyComponent: FC<{
  stargazers_count: number;
}> = (props) => {
  const { stargazers_count } = props;

  return (
    <>
      <BlogLayout stargazers_count={stargazers_count} image="">
        <div className="blog-container">
          <h1>Privacy Policy for Linvo, Inc. - GitHub 20K Course</h1>

          <p>
            At Linvo, Inc. ({'"'}Company{'"'}, {'"'}we{'"'}, {'"'}us{'"'}, or {'"'}our{'"'}), we are committed
            to protecting the privacy and security of the personal information
            of our users. This Privacy Policy outlines how we collect, use, and
            safeguard the personal information collected on our website,
            including during the registration process for our GitHub 20K Course
            ({'"'}Course{'"'}). By accessing or using our website, registering for the
            Course, and providing your personal information, you agree to the
            terms and conditions of this Privacy Policy.
          </p>

          <h2>1. Information We Collect</h2>

          <p>
            We may collect personal information from you when you register for
            the Course, subscribe to our newsletter, make a payment, or interact
            with our website. The types of personal information we may collect
            include:
          </p>

          <ul>
            <li>Name, email address, and other contact information</li>
            <li>Payment information, including credit card details</li>
            <li>
              Information provided during the registration process, such as
              GitHub username
            </li>
            <li>
              Information provided in communication with us, such as emails or
              messages
            </li>
            <li>
              Automatically collected information, such as IP address, browser
              type, operating system, and cookies
            </li>
          </ul>

          <h2>2. Use of Information</h2>

          <p>
            We may use the personal information we collect for the following
            purposes:
          </p>

          <ul>
            <li>Providing and improving our Course and services</li>
            <li>Sending newsletters and marketing communications</li>
            <li>Processing payments for Course registration</li>
            <li>
              Responding to inquiries, providing customer support, and
              communicating with you about the Course
            </li>
            <li>
              Monitoring and analyzing website usage, trends, and effectiveness
            </li>
            <li>
              Complying with applicable laws, regulations, and legal
              requirements
            </li>
          </ul>

          <h2>3. Sharing of Information</h2>

          <p>
            We do not sell, rent, or trade your personal information with third
            parties for their marketing purposes. However, we may share your
            personal information with the following entities or under the
            following circumstances:
          </p>

          <ul>
            <li>
              Service Providers: We may engage third-party service providers,
              such as payment processors or email marketing platforms, to assist
              us in providing and improving our Course and services. These
              service providers may have access to your personal information
              only for the purpose of performing their services on our behalf
              and are obligated not to disclose or use it for any other purpose.
            </li>
            <li>
              Legal Requirements: We may disclose your personal information as
              required by law, regulation, legal process, or government request,
              or to protect our rights, property, or safety, as well as the
              rights, property, or safety of our users or others.
            </li>
            <li>
              Business Transfers: In the event of a merger, acquisition, sale,
              or transfer of assets, your personal information may be
              transferred to the acquiring entity or third party as part of the
              transaction.
            </li>
          </ul>

          <h2>4. Cookies and Tracking Technologies</h2>

          <p>
            We may use cookies and other tracking technologies, such as web
            beacons, to collect information about your use of our website and to
            improve your experience. Cookies are small text files that are
            stored on your device when you visit a website. You can control the
            use of cookies at the individual browser level, but if you disable
            cookies, you may not be able to use certain features of our website.
          </p>

          <h2>5. Marketing Communications</h2>

          <p>
            If you have subscribed to our newsletter or provided us with your
            contact information, we may send you marketing communications about
            our Course, services, promotions, and other relevant information.
            You can opt-out of receiving marketing communications from us by
            following the instructions provided in the communications or by
            contacting us directly.
          </p>

          <h2>6. Data Security</h2>

          <p>
            We take reasonable measures to protect the security of your personal
            information, including using encryption and implementing appropriate
            technical, administrative, and physical safeguards to prevent
            unauthorized access, use, or disclosure. However, no method of
            transmission over the internet or electronic storage is completely
            secure, and we cannot guarantee absolute security.
          </p>

          <h2>7. Your Rights and Choices</h2>

          <p>
            You have certain rights and choices regarding your personal
            information. You may update, correct, or delete your personal
            information by contacting us. You may also opt-out
          </p>
        </div>
      </BlogLayout>
    </>
  );
};
