This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



{My new understanding/learning while making this project }

############################ Custom Form Field ############################
I learned about Custom Props and how good they are. 
Custom Props are like defined field of a form that you must provide to use that component so in future you will not miss out any value while using that component vs code will automatically throw error that this components needs these attributes as well but if don't use custom props then you will have to pass props without knowing exactly how many childs you have to send along with that vs code helps in autocompletion if we make custom props so it makes easier to understand.

We used interface to define custom prop -> interface is a keyword that we use to define the structure of a component here it is acting as a blueprint of custom prop. interface is just like a map of a house which we build it so that we know what are required and we have the blueprint before hand.