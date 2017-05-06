# Huge Navigation Exercise

## Overview

This exercise will have the candidate build a responsive site navigation driven by an AJAX request while following rudimentary style guidelines.

Here are the guardrails for this exercise - please follow closely:

* No javascript frameworks or libraries (e.g. jQuery, Angular, React).
* CSS Pre-Compilers are fine (LESS, SASS), but no mixin libraries (Compass, Bourbon, Neat, Foundation, etc.)
* Chrome compliance is all that's required, all functions and features available in latest Chrome are in play.
* Nav must be responsive.
* Code must run after the following command, please ensure your code runs as you expect it to from a fresh checkout with these commands before submission.
* Page should look good across all realistic viewport sizes.
* ZIP file and contained folder must be YourName_ElephantNavExercise.zip.
* Please do not include node_modules folder in the ZIP.

```
$ npm i && npm start
```

Nice to haves (things that we look for):

* Adherence to accessibility standards
* Documentation
* Unit and/or E2E tests

At a high level the navigation will have two main states:

* <768px: Mobile. Hamburger icon will display in the top-left of the page. Clicking the hamburger will cause a card to push in and move the main content to the right. The card will contain nav and sub-nav items defined in the JSONP response.
* \>= 768px: Desktop. The nav will display as a horizontal nav. Top level nav items will display sub-nav items when clicked. No hamburger will be shown.

## Version
0.2.0

## Files

* ./bin/www - node.js server that will host the site and provie the api to construct the nav

## API

* GET /api/nav.json - returns a JSON response representing the items in the nav.

## Get Started

###Requirements
* Node.js and npm (You get both when you <a href="https://docs.npmjs.com/getting-started/installing-node">install Node.js</a>.)

## Design Specifications

Use http://helloelephant.com for inspiration.

### Typography

* **Eyebrow** 18/48 Tracking 350 Founders Grotesk Semibold
* **Primary Navigation** 18/48 Founders Grotesk Semibold
* **Secondary Navigation** 18/48 Founders Grotesk Regular
* **Headline (Desktop)** 120/126 Founders Grotesk Light
* **Body Copy (Desktop)** 30/35 Founders Grotesk Light
* **Headline (Mobile)** 48/50 Founders Grotesk Light
* **Body Copy (Mobile)** 22/30 Founders Grotesk Light
* **Copyright (Mobile)** 18/22 Founders Grotesk Light

### Colors

* **Black** #000000
* **Gray** #a7aaa9
* **White** #ffffff
* **Translucent Black** rgba(0, 0, 0, 0.5)

### Measurements

Measurements are specified in pixels. Dimensions should be fluid unless specified.

### Interactions

#### Desktop

* On hover, Primary Navigation reverses color.
* On click, if item contains a URL, Primary Navigation navigates to a new page.
* On click, if item contains other items, Secondary Navigation appears (see Desktop, Secondary Navigation).
* Menu appears containing Secondary Navigation.
* Translucent mask appears over content, behind menu.
* On hover in, Secondary Navigation changes color (black/gray).
* On click, Secondary navigates to a new page.
* On click outside of menu, menu and mask are hidden.

#### Mobile

* When a user clicks the open navigation icon (“hamburger”), the navigation should “push” from left to right.
* The Elephant logo and navigation toggle slide left to right.
* The open navigation icon should change to the close navigation icon (“x”).
* Translucent mask appears over content, right of navigation.
* The Primary Navigation should include link items and menu items.
* When a user hovers a Primary Navigation item, it should change color (black/gray).
* When a user clicks a Primary Navigation link item, the browser should navigate to a new page.
* When a user clicks a Primary Navigation menu item, the Secondary Navigation should “push” down, the chevron should rotate * 180°.
* When a user hovers a Secondary Navigation item, it should change color (black/gray).
* When a user clicks a Secondary Navigation item, browser should navigate to a new page.
* When a user clicks outside of the navigation, the navigation should close.
* When the navigation closes:
  * the menu should “pull” from right to left
  * the logo and toggle button should “slide” from right to left
  * the close icon should change to the open icon
  * the mask should be hidden
