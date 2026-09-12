/* Westpark Dental Studio — renders the auto-scrolling Google review carousel.
   Reviews come from window.WPDS_REVIEWS (see reviews-data.js). If none are
   present, the carousel stays hidden and the rating badge/links still show. */
(function () {
  "use strict";
  var data = (window.WPDS_REVIEWS || []).filter(function (r) { return r && r.text; });
  var mount = document.getElementById("reviews-carousel");
  if (!mount || !data.length) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function stars(n) {
    n = Math.max(0, Math.min(5, n || 5));
    var s = "";
    for (var i = 0; i < 5; i++) s += i < n ? "★" : "☆";
    return s;
  }

  function makeCard(r) {
    var c = document.createElement("figure");
    c.className = "rv-card";

    var st = document.createElement("div");
    st.className = "rv-card__stars";
    st.setAttribute("aria-hidden", "true");
    st.textContent = stars(r.rating);

    var q = document.createElement("blockquote");
    q.className = "rv-card__text";
    q.textContent = r.text;

    var cap = document.createElement("figcaption");
    cap.className = "rv-card__meta";
    var nm = document.createElement("span");
    nm.className = "rv-card__name";
    nm.textContent = r.name || "Verified patient";
    var src = document.createElement("span");
    src.className = "rv-card__src";
    src.textContent = "Google review";
    cap.appendChild(nm);
    cap.appendChild(src);

    c.appendChild(st);
    c.appendChild(q);
    c.appendChild(cap);
    return c;
  }

  var track = document.createElement("div");
  track.className = "reviews__track";
  data.forEach(function (r) { track.appendChild(makeCard(r)); });
  // duplicate the set once so the marquee can loop seamlessly (translateX -50%)
  if (!reduce) data.forEach(function (r) { track.appendChild(makeCard(r)); });
  mount.appendChild(track);

  // slow, steady glide — scale duration with the number of reviews
  if (!reduce) {
    var seconds = Math.max(36, data.length * 7);
    track.style.animationDuration = seconds + "s";
  }
})();
