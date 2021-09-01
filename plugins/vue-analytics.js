export default function(context) {
  if (process.client) {
    window.dataLayer = window.dataLayer || [];

    gtag("js", new Date());
    gtag("config", context.env.GA_ID);
  }

  function gtag() {
    window.dataLayer.push(arguments);
  }
}
