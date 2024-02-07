## Overview/Usage
Welcome! This is my submission for the Spectrum take home assessment. It is a static site with no package manager, and can be run by cloning the repo and opening the index.html file in your browser. It has been tested in Chrome and Firefox. For demonstration purposes, Contact Manager > contacts is already open and is the only screen. The Contact Manager section can be expanded and collapsed. Action buttons can also be expanded.

## UI/UX 
The UI is similar to the example provided with a few changes. My goal was to keep the design clean, intuitive, functional, and aesthetically pleasing.  

First, the dashboard, website, and client feedback menu items have been arranged vertically within the sidebar like the other menu items. Assuming clicking those buttons has similar behavior to the other menu buttons, it made sense to format them as such.

Second, I wanted to have a bit more whitespace on the page, so I moved the page navigation buttons to the bottom. This is a common format I've seen in other apps, under the assumption that users would want to read through all entries before going to the next page, or filter entries instead of searching page by page. But, at the end of the day, this should be designed based on user preference. 

Finally, I wanted to add color to the page to help with aesthetic and draw the users attention to important features. This is especially true for the "status" column, as it is a clear indicator of organic and paid sources.

The page is designed with horizontal desktop users in mind but is also reactive to vertical displays. On a horizontal display the contact view and sidebar can be scrolled independently. On a horizontal view the sidebar and contact view are displayed as rows and are scrolled together. Note that there are only 6 contacts on this screen for demonstration purposes, but this could be changed or customizable based on user preference.

## Structure
As mentioned the app is a static site using Vanilla HTML/CSS/JS. All HTML is contained in index.js. Styles are defined globally in index.css. JS is defined in index.js (to populate location data) and listeners.js (to change the expansion icon). For a larger project, I would consider using a bundler like webpack or a framework like Next.js to support features like js/css modules, state management, declarative markup, and SSR. 

Thank you. I appreciate the opportunity!