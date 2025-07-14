---
title: "How this website is made"
date: "2023-01-15"
tags: "coding, next, typescript, tailwind, sanity"
description: "I wanted to write a few words about how this website is made and why I chose to do it this way."
alt: "How this website is made"
---

::Warning
This post is pretty old and this website has been completely rewritten in Nuxt since then. I will soon write a new post about it, so stay tuned!
::

::toc
<!--toc:start-->
- [Is Next App Router good?](#is-next-app-router-good)
- [The good, the bad and the ugly](#the-good-the-bad-and-the-ugly)
<!--toc:end-->
::

### Is Next App Router good?

I made this website using **Next** despite all the hate is getting lately. To be honest I too don't like the direction is taking but I do think it's still a solid choice when it comes to static website.

I'm talking about the **App router**, which is the new way of building Next applications. It was introduced in Next 13 in order to replace the **Pages router**.

### The good, the bad and the ugly

This is a big change and it has spreaded a lot of confusion in the community for sure.

We now have React **server components**, which are able to fetch data from the server and this makes them more flexible. Maybe too much? Before App Router we used to rely on **getStaticProps** and **getServerSideProps** for serverside requests, while now all of a sudden the framework seems more unopinionated about it.

Don't get me wrong, this opens up a lot of possibilities in terms of architecture and I like it to some extent.

But this also means that if you're not a solo-developer you and your team need to adopt a really robust approach or things can become messy pretty fast and you will have a hard time figuring out where the data is flowing from.

A thing which I like is the better separation between server and client side. By default all components runs on the server and if you want to perform some client operation you can write the **'use client'** directive on top of the file and this feels way more declarative. The debugger was also improved and now is able to detect if you're mixing server and client code and it's easier to avoid nasty **hydrations errors**.

Typescript support is great like has always been. It feels naturally integrated with the framework and if you're a Typescript lover like me you'll find a great DX when it comes to it.

The main idea around the new **Layout** is that you can have a **base** one that could wrap the entire app and then you can override it when needed for specific routes. Love it or hate it I guess. I still don't have strong opinions about it.

The middleware could have some more love, it's still a bit confusing what are the best practices to follow when it comes to it.

Markdown support though is really a pain and that's a shame. It felt a bit hacky to make it work for this website and there's not a lot of documentation about it. I remember it was easier to make it work with Pages router, but I'm sure that will change for the better in the near future.

In conclusion, I think the App router is not that bad but I still don't understand what was wrong with the Pages router and that's the main reason I'm not fully on board with it. React server components are also nice but were they really needed? Seems like a lot of other frameworks are not adopting them yet and there's a lot of suspicion around them at the moment. I guess we will see how it develops in the future.

But yeah, overall it's been a good experience until now and working with it still feels pretty fun, which is also important. Stay tuned for more updates about it!
