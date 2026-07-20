module.exports = {
  title: "muse + gather",
  author: "Jeannie Sullivan",
  tagline: "You only get one life. Make it true.",
  description: "Unhurried essays on writing, attention, and living deliberately, from Jeannie Sullivan.",
  email: "hello@jeanniesullivan.com",
  instagram: "@jeanniesul",
  url: "https://museandgather.com",

  // Flodesk form link — paste your form's shareable URL here (Flodesk → the
  // form → Share → copy the Link / full-page URL). The signup buttons open it.
  newsletterUrl: "https://museandgather.myflodesk.com/pen-pals",

  // Used by Person schema (JSON-LD) on every page.
  jobTitle: "Essayist & Writing Coach",
  // Add your other sites / profiles here — each becomes a verified link
  // in the Person schema so AI + search know they're all you.
  sameAs: [
    "https://instagram.com/jeanniesul",
    "https://www.linkedin.com/in/jeanniersullivan/",
    "https://medium.com/@jeannie_sul",
  ],
  knowsAbout: ["Writing", "Essays", "Attention", "Creative practice", "Writing coaching"],

  // Plain-language FAQ. Rendered on /about/ AND emitted as FAQPage schema —
  // edit here and both stay in sync.
  faq: [
    { q: "What is muse + gather?",
      a: "muse + gather is a personal blog and newsletter by Jeannie Sullivan — unhurried essays and field notes on writing, attention, and living deliberately, plus creative projects and things worth keeping." },
    { q: "Who writes it?",
      a: "Jeannie Sullivan, an essayist and writing coach. Everything here is written and gathered by her." },
    { q: "How often is it updated?",
      a: "Irregularly. New pieces arrive when they're ready rather than on a schedule — the easiest way to read along is the free email letter." },
    { q: "Is this a business or a sales site?",
      a: "No. It's a personal blog and newsletter, not a store or company site. Writing coaching is offered separately, described on this About page for anyone who asks." },
    { q: "How do I follow along?",
      a: "Subscribe to the free newsletter — the occasional essay, delivered by email when it's ready. You can unsubscribe anytime." },
    { q: "Can I get in touch?",
      a: "Yes — email hello@jeanniesullivan.com for coaching enquiries, event questions, or just to share a sentence that stopped you." },
  ],

  nav: [
    { text: "Essays", url: "/essays/", key: "essays" },
    { text: "Events", url: "/events/", key: "events" },
    { text: "Collection", url: "/collection/", key: "collection" },
    { text: "About", url: "/about/", key: "about" },
  ],
};
