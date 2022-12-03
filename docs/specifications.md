# Design

## Colours

- #0a0a0a — primary background used throughout the website
- #171717 — card backgrounds
- #333333 — borders (usually accompanying card backgrounds)
- #ffffff — primary content
  - #ffffffaf — primary content on hover

## Fonts

- [TWK Everett](https://www.weltkern.com/shop/detail-typeface/everett) by WELTKERN
  - TWK Everett Regular
  - TWK Everett Bold

WELTKERN offers TWK Everett free to use for educational purposes, such as with this project.

## Typography

Typography is done using `clamp()`, meaning that the size of the font is dynamic and adjusts according to the device's width. The following table highlights the minimum, preferred, and maximum value as defined in `clamp()` in code.

|    Size    |       Minimum size       |      Preferred size       |      Maximum size       |
| :--------: | :----------------------: | :-----------------------: | :---------------------: |
|  `title`   |  2 relative em (`rem`)   | 10 viewport width (`vw`)  |  5 relative em (`rem`)  |
| `subtitle` | 1.5 relative em (`rem`)  |  5 viewport width (`vw`)  |  3 relative em (`rem`)  |
|  `larger`  | 1.35 relative em (`rem`) |  5 viewport width (`vw`)  |  2 relative em (`rem`)  |
|  `large`   | 1.25 relative em (`rem`) |  3 viewport width (`vw`)  | 1.5 relative em (`rem`) |
|   `body`   |  1 relative em (`rem`)   | 2.5 viewport width (`vw`) | 1.5 relative em (`rem`) |

- The hero title is usually `title`.
- For each section, the `h2` that accompanies (usually wrapped in `section-content`) is usually `subtitle`.
- In cards, the `h3` is usually `large`.

## Radius

The border radius used throughout the website gives a unique shape for each elemet it is applied to. The border radius is defined as such:

```css
0.5rem 0 0.5rem 0
```

This gives:

- an upper-left padding of 0.5rem;
- an upper-right padding of 0;
- a bottom-right padding of 0.5rem;
- a bottom-left padding of 0;

# Technical

## Technologies utilised

- HTML — ordering and structuring
- CSS — styling and design
- JavaScript — logic and functionality

- Visual Studio Code — code editing
- Adobe XD — wireframing
