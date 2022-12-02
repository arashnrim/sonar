As I progress through developing the website for Sonar, there may be certain instances which I find pretty interesting to be in. Whether it's a problem that I've encountered or a new way to do things, I hope to be able to document some interesting encounters that I've had while embarking on this project.

Take this as a little devlog of sorts; I'll document my progress making this website, and we'll see how it goes from there!

---

**Style guides** — 22 November, 7.44 p.m.

To make my code fit conventions and standardisations. I came across [Google's style guide](https://google.github.io/styleguide/htmlcssguide.html) and [MDN's style guide](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML) for HTML and CSS and decided to follow them in some capacity.

I was also wondering considering I've seen the use of double underscores (`__`) in some class names and IDs, and upon searching out more, I realised that there's a specification — known as [BEM](https://getbem.com/) — that recommends a guideline for naming class names and IDs. Moving forward, I'll try my best to use this!

---

**Implementing CSS animations in JS** — 21 November, 12.45 a.m.

I was thinking of how to smoothly animate the insertion of the `artist-highlight` div that was created in JS. After searching up "js animate on insert" on Google, I was pointed to MDN (a resource I couldn't possibly be more thankful for) which showed that [there was an `animate()` function](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters) that could be called. I was cautious at first considering I didn't have much experience with JS (at least in the context of vanilla JS and basic front-end dev), but the docs practically pointed out the way.

It was pretty cool to learn of such a way to do things!

---

**Taking a break** — 20 November 2022, 11:49 p.m.

There was an entire rewrite between [4424fbc](https://github.com/arashnrim/sonar/commit/4424fbc92ab197f1e2ebc65789fba1b44b5e0457) and [89f0c56](https://github.com/arashnrim/sonar/commit/89f0c56c2680dc3bf88fa90154c99d0b9c471a31) in which I explored coding the functionality of the listen section in the home page. I was coming in without much preparation, so a lot of time spent in the first commit (which, in total, took around an hour) was used to just play around. I got pretty frustrated by the end of that commit, and decided to take a small break.

Jump cut to about half an hour after a five-minute break, and I have something that I'm happy with! An added bonus is that I've learnt about how to implement CSS animations with JS (see above!). A small break can do wonders sometimes; here's a before and after in the two commits.

|                                                      Before                                                      |                                                      After                                                      |
| :--------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
| ![before](https://user-images.githubusercontent.com/47273556/202915272-19f43685-297c-4860-8a2c-44f5c79b93f9.gif) | ![after](https://user-images.githubusercontent.com/47273556/202915285-b0601249-77b3-40f1-9263-61e0f7f2113e.gif) |
