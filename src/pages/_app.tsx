import "@github20k/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {!!process.env.G_TAG_ANALYTICS && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_TAG_ANALYTICS}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', '${process.env.G_TAG_ANALYTICS}');
            `}
          </Script>
        </>
      )}
      {!!process.env.FACEBOOK_PIXEL && (
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.FACEBOOK_PIXEL}');
            fbq('track', 'PageView');`}
        </Script>
      )}

      {!!process.env.LINKEDIN_PIXEL && (
        <Script id="linkedin-pixel" strategy="afterInteractive">
          {`
            var _linkedin_partner_id = "${process.env.LINKEDIN_PIXEL}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            
            (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);})(window.lintrk);
            `}
        </Script>
      )}

      {!!process.env.TWITTER_PIXEL && (
        <Script id="twitter-pixel" strategy="afterInteractive">
          {`
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            twq('config','${process.env.TWITTER_PIXEL}');
          `}
        </Script>
      )}
      {!!process.env.SEGMENT_ID && (
        <Script id="segment" strategy="afterInteractive">
          {`
              !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="DuLfCJIweoFDtv0HSjrIZ3ggtKyoV8E6";;analytics.SNIPPET_VERSION="4.15.3";
              analytics.load("${process.env.SEGMENT_ID}");
              analytics.page();
              }}();
          `}
        </Script>
      )}
      {!!process.env.REDDIT_PIXEL && (
        <Script id="reddit" strategy="afterInteractive">
          {`
!function(w, d) {
    if (!w.rdt) {
        var p = w.rdt = function() {
            p.sendEvent ? p.sendEvent.apply(p, arguments) : p.callQueue.push(arguments)
        };
        p.callQueue = [];
        var t = d.createElement("script");
        t.src = "https://www.redditstatic.com/ads/pixel.js", t.async = !0;
        var s = d.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(t, s)
    }
}(window, document);
rdt('init', '${process.env.REDDIT_PIXEL}', {
    "optOut": false,
    "useDecimalCurrencyValues": true
});
rdt('track', 'PageVisit');
`}
        </Script>
      )}
      {!!process.env.REWARDFUL_ID && (
        <>
          <Script id="rewardful-api" strategy="afterInteractive">
            {`(function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,'rewardful');`}
          </Script>
          <Script
            async
            src="https://r.wdfl.co/rw.js"
            data-rewardful={process.env.REWARDFUL_ID!}
            strategy="afterInteractive"
          />
        </>
      )}
      <Head>
        <title>{process.env.COURSE_NAME}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
