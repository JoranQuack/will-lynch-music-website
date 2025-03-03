<div align="center">
  <a href="https://will-lynch-music-website.vercel.app/">
    <img src="wlm-logo.svg" alt="Will Lynch Music" height="140">
  </a>
</div>

# will-lynch-music-website
Codebase for Will Lynch Music public web suite.

## Tech Stack

| Package                                                                            | Description                                                                                           |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [`NextJS`](https://nextjs.org/)                                                    | Used for public routing and front end                                                                 |
| [`Typescript`](https://www.typescriptlang.org/)                                    | Used for Type Safety                                                                                  |
| [`Tailwind`](https://tailwindcss.com/)                                             | Used as an alternative to pure css allowing styling to be done directly in html                       |

## Repo Structure

| Path                               | Description                                                                                                                            |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [`public`](public)                 | Contains static assets for the website                                                    |
| [`src/app`](src/app)               | Contains the next-js routing file structure and all page/layout specific files                     |
| [`src/components`](src/components) | Contains front-end (or server rendered) code (not neccesarily react components)                                                        |
| [`src/utils`](src/utils)           | Contains utility files such as send-email.ts                                    |

## Environment

Config for the project is done with an untracked `.env` file.

> [!IMPORTANT]
> This project has not been setup to work without API secrets from our services such as Google reCAPTCHA, so you will not be able to run this without being part of the dev team.

## Commands

| Command                    | Description                                              |
| -------------------------- | ----------------------------------------------------------------|
| `npm run dev`              | Runs a development instance of the NextJS website.   |
| `npm run build`            | This will build the NextJS server. It is recommended you run this before pushing. |
| `npm run start`            | This will run an instance of the last compiled NextJS website (`npm run build`)   |
| `npm run lint`             | Runs the linter                         |
| `npm run format`             | Runs Prettier formatter                                |

## Dev tools

If using vscode, it is recommended you use the following packages:

* [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). This one is **HEAVILY** recommended so you don't commit incorrect code style
* [Tailwind CSS InteliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
