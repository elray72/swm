# Getting started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


In the project directory run:
```
npm install
```

To start the project:
```
npm start
```

To publish to GitHub pages (you need to have your ssh set up):
```
npm publish
```

To just build
```
npm run build
```

## Documentation

The initial commits had components copied across from my as of yet incomplete portfolio (react, ts, scss) site found here https://github.com/elray72/portfolio-ts.

### Technical choices

| Item | Description |
| ---- | ----------- |
| Font selection | 7plus.com.au uses Montserrat as the heading font, so that was used for this project. Google fonts is used as it will be faster than self hosting. 700 weight looked closest to the brief. |
| Global styles | Kept in the `/src/themes` folder. Pre-existing global styles I use for lots of previous projects. |
| Prettier | I use this to format my code. |
| Image files | I normally use direct references for images, stored in `public/static/img`. Since GitHub pages expects a `/swm` path, it would break my path references once published. Short of ejecting and customizing my webpack config for prod, I felt it easiest to have the image references as imports. |
| Atoms, molecules, etc. | I just like the folder structure of atomic design. |
| Naming conventions | BEM for styles - it agrees with me most. |
| Helpers | An `em()` helper, similar to how you would use it in scss. |

### Components

Only describing the components that I think need an explanation on.

* **Heading:** I wanted a generic heading component and thought this is a more reliable way than creating a dynamic element type.

* **Tile:** The tile is supposed to take optional logos, and not display the logo in 'responsive' mode under small viewports. It can handle longer than 1 line of text elegantly.
  * **ATile:** Allows the tile to be wrapped in a link. Link variation is done by supplying a href.
  * **Responsive:** The tile itself isn't large, so I made a responsive version triggered by the `theme` prop. Typescript made the `style-components` props a bit more difficult to work with.
  
* **BackgroundImage, LogoImage:** `src` and `alt` props are required because if there's no src then there's no point rendering the image, and `alt` tags should come with all images for accessibility.

### Components

Tests are handled by Jest and Enzyme. Basically, I'm testing if the components render, and if the props are being rendered as expected.

### In hindsight

* I could have combined the `BackgroundImage` and `LogoImage` components since they are essentially the same for this project. That said, there's almost always a real distinction between the two in the real world.

* I wanted to leverage as much of `create-react-app` test setup and avoided my own. As a result, I have to include the Enzyme adapter on each test. I should fix this.