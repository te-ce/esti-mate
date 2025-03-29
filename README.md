![Esti-Mate Logo](./public/192.png)

Esti-mate - Your last mate to estimate your tickets (or something like that)

# About

## How to start

You need [pnpm](https://pnpm.io/) installed.
Then simply just `pnpm install` and `pnpm dev`

## Motivation

Goal of this project is to build a tool that can help to estimate the tickets. At best this is implemented without the need of an actual Server (WebRTC?). Motivation is to learn and understand the basics of web (html semantics, forms, 'real time' connections, templates, web components, ...).
Yes, this would have been much easier and faster with something like [React](https://react.dev/) or even [Next](https://nextjs.org/), but that is not the goal here.

## Features

- Create, invite and join custom rooms ✅
- Add multiple tickets with url links at once as a comma separated string ✅
- Keep track of current state of room and user estimations ✅
- Add estimations to current ticket ✅
- Skip through tickets, show current ticket with relevant url to all room users ✅
- Visualize sum of estimations and sum of all tickets with their estimations 🚧
- Remove the need of self hosted server (implement WebRTC with the use of a free public STUN/TURN Server) 🚧
- Implement random avatars with [dicebear](https://www.dicebear.com/) 🚧

## Roadmap

First implementation will be with a server (and [socket.io](https://socket.io/) for communication with the [vite plugin](https://github.com/vite-plugin-socket-io/vite-plugin-socket-io)), understand how HTML and forms work. Then try to implement to strip away the server.
If I feel lucky, I might add random avatar generation with [dicebear](https://www.dicebear.com/).

This was scaffolded with the [vite](https://vite.dev/) cli command `pnpm create vite`. We also use [tailwind CSS](https://tailwindcss.com/) for styling. Besides that, we use the usual tools for elevating the developer experience: [prettier](https://prettier.io/) for formatting (don't forget the [tailwind plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)), [eslint](https://eslint.org/) for linting, [husky](https://typicode.github.io/husky/) for running commands before every commit. Not to forget [pnpm](https://pnpm.io/) as package manager.

## FAQ

- Why use tailwind and not pure CSS?
  - Tailwind has many benefits to me and does not abstract CSS that much, that I could'nt write vanilla CSS anymore. Also it solves many problems that vanilla CSS would have, like naming things, gotchas (declaration order), etc. [See Theo's video "is tailwind the right default" on this](https://www.youtube.com/watch?v=oL0_PITvFto)
- Why use a vite plugin to get socket.io running on the vite server instead of building an extra express server with socket.io running?
  - I don't see a real learning benefit there, since setting up an express server wouldn't be that much more, but would need a second server running.
