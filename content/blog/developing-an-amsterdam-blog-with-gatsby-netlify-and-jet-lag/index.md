---
title: Developing an Amsterdam Blog with Gatsby, Netlify and Jet Lag
date: 2021-03-24T04:26:21.447Z
description: web development
---
<!--StartFragment-->

This past weekend, my family and I relocated to Amsterdam for the opening of [Rangle's first European office](https://rangle.io/amsterdam/). When we left our home in Toronto, friends and family said *farewell* and told us to post lots of photos and send updates to them back home.

We decided that the best thing we could do to document our year abroad — for our family and our future selves — is to keep a personal blog that we'd fill with our reflections and stories over the year.\
\
We don't want the blog to be shared widely or *ever* go viral, so in deciding the blog framework to use, I thought it best if we created the blog ourselves, away from the popular community blog websites.

<!--EndFragment-->

<!--StartFragment-->

**My design criteria for developing the blog was as follows:**

<!--EndFragment--><!--StartFragment-->

* Be very quick to set-up
* Be very affordable to host and manage
* Be very easy for my partner and I to update

<!--EndFragment-->

<!--StartFragment-->

I decided the best solution was to use the static-site generator [Gatsby](http://gatsbyjs.org/), with code hosted on [GitHub](https://github.com/), deployments handled by [Netlify](https://netlify.com/), content managed using [Netlify CMS](https://netlifycms.org/) and password protection managed by [Auth0](http://auth0.com/).

Here is how I built my family's Amsterdam blog on the second day of arriving — through the fog of jet lag.

<!--EndFragment-->

<!--StartFragment-->

## **Install Gatsby CLI**

<!--EndFragment-->

<!--StartFragment-->

`npm install -g gatsby-cli`

<!--EndFragment-->

<!--StartFragment-->

## **Create Gatsby project using a starter**

I used the `gatsby-blog-starter` to provide the scaffolding for our project.

`gatsby new amsterdam-blog https://github.com/gatsbyjs/gatsby-starter-blog`

Open the newly created project:

`cd amsterdam-blog`

## **Run locally**

To confirm everything is set up correctly and to see the default behaviour of the starter, run the project locally:

`gastby develop`

There should be three blog posts in the browser, with a default header and footer.

In the root of the `amsterdam-blog` folder, there is a subfolder called `content` that looks like this:

<!--EndFragment-->

<!--StartFragment-->

![](https://rangleio.ghost.io/content/images/2019/09/content-folder.png)

<!--EndFragment-->

<!--StartFragment-->

These markdown files `*.md` are what generate the blog's content.

<!--EndFragment-->