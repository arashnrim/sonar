There are **three** primary pages in this project: the main index page, the experience page, and the pricing page. Each of the pages have its own respective purpose:

- Index page: To give a brief overview on what Sonar is and include links that point to the other two pages which describe in greater detail.
  - Rationale: I wanted to introduce the user to the service in a way that isn't overwhelming and easy to digest. Therefore, I had the idea to only present information through sections and each section would then redirect the user to its own page if the user is interested.
- Experience page: To give an outline of the features that Sonar provides and what the user can do if they use the service.
  - Rationale: Most of the time, I as a user want to know what something can do for me. This page answers all that by giving examples and listing them out easily in one place.
- Pricing page: To give an overview on how much the user needs to pay and comparisons.
  - Rationale: At this page, users may want to think about how much they're willing to pay for the service and maybe even compare. There is a small comparison table in the page and a contact form if they want to ask any more questions before trying.

# Index page

## Technical breakdown

The following files are explicitly affiliated with the index page:

- `index.html`
- `js/index.js`
- `styles/index/experience.css`
- `styles/index/listen.css`
- `styles/index/pricing.css`
- `styles/index/style.css`

## Design breakdown

This page has three sections:

- a section featuring large circles, possibly with artist images;

  <img src="https://user-images.githubusercontent.com/47273556/205260730-2ec94daf-6394-411c-9397-c0a33fe792fd.png" width="640" />

- a section featuring two split cards with even width; and

  <img src="https://user-images.githubusercontent.com/47273556/205260842-0ba65347-bb2c-4c48-85d8-d582fda80f05.png" width="640" />

- a section with three cards, but originally planned for a plan-based pricing scheme

  <img src="https://user-images.githubusercontent.com/47273556/205260972-0b560914-2b8a-424b-8ab1-70f93994b865.png" width="640" />

These were translated into the following sections in the final product:

|             Section              |                                                            Wireframe                                                            |                                                              Final                                                              |
| :------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| Large circles with artist images | <img src="https://user-images.githubusercontent.com/47273556/205260730-2ec94daf-6394-411c-9397-c0a33fe792fd.png" width="768" /> | <img src="https://user-images.githubusercontent.com/47273556/205261926-27c0dfc4-fd8a-4e0a-a608-80f48e7ff9e5.png" width="768" /> |
| Two split cards with even width  | <img src="https://user-images.githubusercontent.com/47273556/205260842-0ba65347-bb2c-4c48-85d8-d582fda80f05.png" width="768" /> | <img src="https://user-images.githubusercontent.com/47273556/205262537-251a3f30-f241-4ab2-82e1-c03d233d1048.png" width="768" /> |
| Pricing section with three cards | <img src="https://user-images.githubusercontent.com/47273556/205260972-0b560914-2b8a-424b-8ab1-70f93994b865.png" width="768" /> | <img src="https://user-images.githubusercontent.com/47273556/205262801-15d8441e-b70c-42d8-b8f8-03b4db861b1e.png" width="768" /> |

# Experience page

## Technical breakdown

The following files are explicitly affiliated with the experience page:

- `experience.html`
- `js/experience.js`
- `styles/experience/features.css`
- `styles/experience/hero.css`
- `styles/experience/style.css`
- `styles/experience/summary.css`

## Design breakdown

This page has two main sections:

- a section with some text and a screenshot; and

  <img src="https://user-images.githubusercontent.com/47273556/205263852-53658803-d8d9-44f3-8768-5947c7b4bd87.png" width="640" />

- a section with a grid (in a bento box-like format)

  <img src="https://user-images.githubusercontent.com/47273556/205263928-b8db1008-1f11-4940-9a0d-f3e918925539.png" width="640" />

These were translated into the following sections in the final product:

|       Section       |                                                            Wireframe                                                            |                                                              Final                                                              |
| :-----------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| Text and screenshot | <img src="https://user-images.githubusercontent.com/47273556/205263852-53658803-d8d9-44f3-8768-5947c7b4bd87.png" width="768" /> | <img src="https://user-images.githubusercontent.com/47273556/205264248-9dde89af-2e00-4d1d-bfd6-f57f36460be3.png" width="768" /> |
| Bento box-like grid | <img src="https://user-images.githubusercontent.com/47273556/205263928-b8db1008-1f11-4940-9a0d-f3e918925539.png" width="768" /> | <img src="https://user-images.githubusercontent.com/47273556/205264355-8095b7ce-c55e-496e-81cf-9d2172f1644f.png" width="768" /> |

# Pricing page

The following files are explicitly affiliated with the pricing page:

- `pricing.html`
- `styles/pricing/comparison.css`
- `styles/pricing/overview.css`
- `styles/pricing/questions.css`
- `styles/pricing/style.css`

## Design breakdown

This page has three main sections:

- an overview with three cards, originally meant for plans;

<img src="https://user-images.githubusercontent.com/47273556/205266897-bc90cb50-4b16-4910-a68a-a56b4ef3abd4.png" width="640" />

- an table comparing Sonar and other services; and

<img src="https://user-images.githubusercontent.com/47273556/205267068-9145d751-4252-4b21-8c96-431fac96b94e.png" width="640" />

- a contact form and FAQ section

<img src="https://user-images.githubusercontent.com/47273556/205267116-4f4e6f71-ab61-4c6d-adce-5eb33221fc1d.png" width="640" />

These were translated into the following sections in the final product:

|        Section        |                                                            Wireframe                                                            |                                                              Final                                                              |
| :-------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| Overview with pricing | <img src="https://user-images.githubusercontent.com/47273556/205266897-bc90cb50-4b16-4910-a68a-a56b4ef3abd4.png" width="768" /> | <img src="https://user-images.githubusercontent.com/47273556/205267633-32ed4637-224e-4bd4-b283-92fe3d5152b0.png" width="768" /> |
|   Comparison table    | <img src="https://user-images.githubusercontent.com/47273556/205267068-9145d751-4252-4b21-8c96-431fac96b94e.png" width="768" /> | <img src="https://user-images.githubusercontent.com/47273556/205267896-501b36fd-da99-44ff-9ff5-8f7191279d90.png" width="768" /> |
| Contact form and FAQ  | <img src="https://user-images.githubusercontent.com/47273556/205267116-4f4e6f71-ab61-4c6d-adce-5eb33221fc1d.png" width="768" /> | <img src="https://user-images.githubusercontent.com/47273556/205268091-21d958ae-eb4f-42ce-bffd-91008d1cfd6a.png" width="768" /> |

# Shared affiliations

The following files are not specific to any one page or section but rather contributes globally to the site:

- `js/navigation.js`
- `styles/fonts.css`
- `styles/footer.css`
- `styles/header.css`
- `styles/header.css`
- `styles/hero.css`
- `styles/normalize.css`
- `styles/style.css` (global styles)
