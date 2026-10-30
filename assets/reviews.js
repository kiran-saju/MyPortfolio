
/*
  Kiran Saju - Google Client Reviews

  Reviews are manually maintained.
  No Google API or external library required.

  Add more reviews to googleReviews when available.
*/

const googleBusinessReviewLink =
  "https://share.google/8plk0joVCO0PRKPlR";

const googleReviews = [

  {
    name: "Mridul Varghese",
    rating: 5,
    source: "Google Review",

    text: `Excellent work and great service! The developer
was professional, supportive, and attentive to my
requirements. The website was designed beautifully,
with a clean look and smooth functionality.
Communication was good, and the overall experience
was satisfying. Highly recommended for anyone looking
for a reliable and talented website developer!`,

    // Replace null with the direct review URL when available.
    url: `https://www.google.com/maps/reviews/@8.9891004,76.5437486,9z/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT21KcVZtVlJkQzE1WlRodVIyOTNPRXRDWTFGUWVsRRAB!2m1!1s0xa096a0285c028bc3:0x19807ba285e9c83?hl=en-US&utm_campaign=ml-ardl&g_ep=Eg1tbF8yMDI2MTAyMF8wIJvbDyoASAJQAQ%3D%3D`
  },

  {
    name: "Gopukrishnan R",
    rating: 5,
    source: "Google Review",

    text: `He is one the dev which i personally recommend...
I have consulted him for review of a webpage work
done by another company.. he was able to provide me
a clear cut report as well as the flaws in the
coding.. he suggested me to include admin page and
ai bot.. i submit this report directly to the team
and helped me in negotiation.. I have given my new
webpage work directly to him.. and for the previous
MNC company now consultant him for SEO and digital
marketing... highly recommend DEV`,

    url:`https://www.google.com/maps/reviews/@8.9891004,76.5437486,9z/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT21KNFJEazVUa2s0V0ZOUFYxTkRlRkY2ZW0xdFlXYxAB!2m1!1s0xa096a0285c028bc3:0x19807ba285e9c83?hl=en-US&utm_campaign=ml-ardl&g_ep=Eg1tbF8yMDI2MTAyMF8wIJvbDyoASAJQAQ%3D%3D`
  },

   {
    name: "Admin Bin Arab Groups",
    rating: 5,
    source: "Google Local Guide",

    text: 
`We had a great experience working with Kiran Saju on our Bin Arab Group website(www.binarab.net). 
He understood our business requirements and delivered a modern, professional, and well-structured website that represents our brand effectively.
His attention to detail, creative approach to website design, and technical knowledge were impressive. He was open to our suggestions, communicated clearly, and focused on making the website visually appealing, user-friendly, and responsive across devices.
We truly appreciate his dedication and professionalism throughout the project. 
We highly recommend Kiran Saju to anyone looking for a reliable freelance web developer for professional website design and development.
`,

    url: "https://www.google.com/maps/contrib/109762038564438621584/reviews/@9.2852937,76.5760918,15z/data=!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D"
  },

    {
    name: "Unni Vijayan",
    rating: 5,
    source: "Google Local Guide",

    text: "Good service",

    url: "https://www.google.com/maps/reviews/@8.9891004,76.5437486,9z/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2s1bmQxSlJhMDV6VDFSMGFYSlRZMUJNZW0xdFowRRAB!2m1!1s0xa096a0285c028bc3:0x19807ba285e9c83"
  },


];


/*
  Render Google review cards.

  Homepage:
    data-limit="4"

  Reviews page:
    data-limit="all"
*/


/*
  Compact Google Review Cards
  With automatic Read More / Read Less
*/

function renderGoogleReviews() {

    const container =
        document.getElementById("googleReviewCards");

    if (!container) return;

    // Homepage displays 4, review page displays all
    const limitValue = container.dataset.limit;

    const limit = limitValue === "all"
        ? googleReviews.length
        : Number.parseInt(limitValue || "4", 10);

    const reviewsToDisplay =
        googleReviews.slice(0, limit);

    container.replaceChildren();

    reviewsToDisplay.forEach((review, index) => {

        // MAIN CARD
        const card = document.createElement("article");
        card.className = "review-card";

        // TOP SECTION
        const top = document.createElement("div");
        top.className = "review-card-top";

        const stars = document.createElement("span");
        stars.className = "review-card-stars";

        stars.textContent =
            "★".repeat(review.rating) +
            "☆".repeat(5 - review.rating);

        stars.setAttribute(
            "aria-label",
            `${review.rating} out of 5 stars`
        );

        const source = document.createElement("span");
        source.className = "review-card-source";
        source.textContent = review.source || "Google Review";

        top.append(stars, source);

        // REVIEW CONTENT
        const quote = document.createElement("blockquote");
        quote.className = "review-card-quote";
        quote.id = `review-quote-${index}`;

        // Remove unnecessary line breaks and extra whitespace
        const cleanText = review.text
            .replace(/\s+/g, " ")
            .trim();

        quote.textContent = `“${cleanText}”`;

        // READ MORE BUTTON
        const readMore = document.createElement("button");
        readMore.type = "button";
        readMore.className = "review-read-more";

        readMore.textContent = "Read more";
        readMore.hidden = true;

        readMore.setAttribute("aria-expanded", "false");
        readMore.setAttribute("aria-controls", quote.id);

        readMore.addEventListener("click", () => {

            const isExpanded =
                quote.classList.toggle("is-expanded");

            readMore.textContent = isExpanded
                ? "Read less"
                : "Read more";

            readMore.setAttribute(
                "aria-expanded",
                String(isExpanded)
            );

        });

        // FOOTER
        const footer = document.createElement("div");
        footer.className = "review-card-footer";

        const author = document.createElement("strong");
        author.className = "review-card-name";
        author.textContent = review.name;

        // GOOGLE PROOF LINK
        const link = document.createElement("a");
        link.className = "review-card-link";

        const hasDirectLink =
            typeof review.url === "string" &&
            review.url.startsWith("https://");

        link.href = hasDirectLink
            ? review.url
            : googleBusinessReviewLink;

        link.target = "_blank";
        link.rel = "noopener noreferrer";

        link.textContent = hasDirectLink
            ? "View original review ↗"
            : "See Google reviews ↗";

        footer.append(author, link);

        // ASSEMBLE CARD
        card.append(
            top,
            quote,
            readMore,
            footer
        );

        container.appendChild(card);

    });

    container.hidden = false;

    // Show Read more only when the text
    // exceeds the 4-line collapsed height
    function updateReadMoreButtons() {

        const cards = container.querySelectorAll(".review-card");

        cards.forEach(card => {

            const quote =
                card.querySelector(".review-card-quote");

            const button =
                card.querySelector(".review-read-more");

            if (!quote || !button) return;

            // Skip measurement while expanded
            if (quote.classList.contains("is-expanded")) {
                return;
            }

            const hasOverflow =
                quote.scrollHeight > quote.clientHeight + 2;

            button.hidden = !hasOverflow;

        });

    }

    // Measure after layout
    requestAnimationFrame(updateReadMoreButtons);

    // Recheck when the viewport changes
    window.addEventListener(
        "resize",
        updateReadMoreButtons,
        { passive: true }
    );

    // Recheck after web fonts finish loading
    if (document.fonts) {
        document.fonts.ready.then(updateReadMoreButtons);
    }

}


// INITIALIZE
if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        renderGoogleReviews
    );

} else {

    renderGoogleReviews();

}


// Run once the document is loaded
if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    renderGoogleReviews
  );
} else {
  renderGoogleReviews();
}

