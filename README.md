# Apostrophe 3 demo and test project

## Get started

Install dependencies: `npm install`

## Running the project

Run `npm run dev` to build the Apostrophe UI and start the site up. Remember, this is during alpha development, so we're all in "dev mode." The `dev` script will watch for saves in client-side CSS and Javascript and trigger a build and page refresh if they are detected. It will also restart the app when server-side code is saved.

## Demonstrating the bug

Make a "reusable content" piece with some widgets in its body. Then add a "reusable content" widget to the body of the home page. So far it works fine and you can click the "edit" buttons for the widgets, at which point the piece editor modal opens for the "reusable content" piece. So far so good.

Now go back to the home page and try to add a widget above or below the "reusable content" widget. **You can't, editing the page is totally hosed. You can't even remove the reusable content widget.**

This means blog widgets, product widgets, etc. are all essentially broken if developers follow best practices and use our nicest features in the most natural way. It's a terrible bug! We'll fix it.

