![Esti-Mate Logo](./public/192.png)

Esti-mate - Your last mate to estimate your tickets (or something like that)

# About

## Motivation

Goal of this project is to build a tool that can help to estimate the tickets. At best this is implemented without the need of an actual Server (WebRTC?). Motivation is to learn and understand the basics of web (html semantics, forms, 'real time' connections, ...).

## Roadmap

First implementation will be with a server, understand how HTML and forms work. Then try to implement to strip away the server.

This was scaffolded with the [vite](https://vite.dev/) cli command `pnpm create vite`. We also use [tailwind CSS](https://tailwindcss.com/), since this solves many problems of writing pure CSS ([see Theo's video "is tailwind the right default" on this](https://www.youtube.com/watch?v=oL0_PITvFto)). Besides that, we use the usual tools for elevating the developer experience: [prettier](https://prettier.io/) for formatting (don't forget the [tailwind plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)), [eslint](https://eslint.org/) for linting, [husky](https://typicode.github.io/husky/) for running commands before every commit. Not to forget [pnpm](https://pnpm.io/) as package manager.
