# Front end developer interview task

## Time

Completing the test should take around 2 hours.

## Task

We want you to build a page using the [Hackney front end pattern library](https://github.com/LBHackney-IT/LBH-frontend). You can see the pattern library components at [https://lbh-frontend.herokuapp.com/](https://lbh-frontend.herokuapp.com/).

Your page should include Hackney branded content, including at least a [header](https://lbh-frontend.herokuapp.com/components/lbh-header), a title, a paragraph (you can find header and paragraph examples [on our typography page](https://lbh-frontend.herokuapp.com/examples/typography)) and a [button](https://lbh-frontend.herokuapp.com/components/lbh-button). We'd also like you to add a simple image component with caption; this component does not exist in the pattern library and will need to be created from scratch.

We have created this basic repository as a starting point, please copy or fork this code to a new public repository and push your work there once finished. Bring a link to the repository along to your interview where we will look at the code you have written.

### Prerequisites

[Node](https://nodejs.org/en/) (built using v10.15.1, you may find ), [npm](https://www.npmjs.com/get-npm)

### Installation:

Run:

```npm install```

### Running

Run:

```npm start``` 

This will start up a local server on host 9000, so you should be able to view the site at http://localhost:9000. It will run a watch task and compile your javascript and styles. We are using [Gulp](https://gulpjs.com/) in this repository but you shouldn't have to touch that side of things - you won't be assessed on anything to do with build tools in this task.

### Structure

You should put your markup (you can use html and/or [nunjucks](https://mozilla.github.io/nunjucks/)) in index.html. If you use nunjucks you may choose to extend our [base nunjucks template](https://github.com/LBHackney-IT/LBH-frontend/blob/master/package/lbh/template.njk).

We have set up a base scss file in `/app/assets/scss/app.scss` which gets built to `/public/app.css`. We have set up a base js file in `/app/assets/js/main.js` which gets built to `/public/main.js`. Use these files to include [styles](https://github.com/LBHackney-IT/LBH-frontend/blob/master/docs/installation/installing-with-npm.md#importing-styles) and [scripts](https://github.com/LBHackney-IT/LBH-frontend/blob/master/docs/installation/installing-with-npm.md#using-javascript) from the pattern library, as well as writing any bespoke code that you need (feel free to add extra files as you see fit).

## Questions

If you have any questions please email [emma.lewis@hackney.gov.uk](mailto:emma.lewis@hackney.gov.uk). Nothing here is meant to trip you up, so if you have problems please do get in touch.

Good luck!

