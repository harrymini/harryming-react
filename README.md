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

## Environment Configuration

Environment specific variables are provided via `.env` files in the project
root. The following templates are included:

- `.env.local`
- `.env.dev`
- `.env.qa`
- `.env.canary`
- `.env.prod`

Each file defines values such as `NEXT_PUBLIC_ENVIRONMENT` and
`NEXT_PUBLIC_BASE_PATH` along with `NEXT_PUBLIC_API_HOST` and
`NEXT_PUBLIC_ASSETS_HOST`. Adjust these values to match the settings for your
deployment target. The API and asset hosts mirror the proxy configuration from
a previous Vue project:

| Environment | `NEXT_PUBLIC_API_HOST` | `NEXT_PUBLIC_ASSETS_HOST` |
|-------------|-----------------------|---------------------------|
| local       | `http://localhost:8180` | `https://sqa.pulmuone.app/` |
| dev         | `https://dev0shop.pulmuone.online` | `https://sqa.pulmuone.app/` |
| qa          | `https://qashop.pulmuone.online` | `https://sqa.pulmuone.app/` |
| canary      | `https://canshop.pulmuone.online` | `https://s.pulmuone.app/` |
| prod        | `https://shop.pulmuone.co.kr` | `https://s.pulmuone.app/` |

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
