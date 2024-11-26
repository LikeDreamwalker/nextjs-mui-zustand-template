## nextjs-mui-zustand-template

[Live Demo](https://nextjs-mui-zustand-template.ldwid.com/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world)

A template for a Next.js project with Material-UI and Zustand and so on amazing repositories.

- Based on [Next.js 15](https://github.com/vercel/next.js) [App Router](https://nextjs.org/docs/app/building-your-application/routing/defining-routes)
- Uses [Mui V6](https://github.com/mui/material-ui) for styling
- Uses [Zustand V5](https://github.com/pmndrs/zustand) for state management, and has a Out-of-the-box store
  - Also uses [Immer V10](https://github.com/immerjs/immer) to enhance the store
- Uses [next-intl V3](https://github.com/amannn/next-intl) to support i18n
- Has examples of RSC between client-side components, layout codes, reactive state, and dark mode

```json
  "@mui/material": "^6.1.8",
  "@mui/material-nextjs": "^6.1.8",
  "immer": "^10.1.1",
  "next": "15.0.3",
  "next-intl": "^3.25.2",
  "react": "19.0.0-rc-66855b96-20241106",
  "react-dom": "19.0.0-rc-66855b96-20241106",
  "zustand": "^5.0.1"
```

## Getting Started

This template uses pnpm by default.

```bash
pnpm install
pnpm run dev
```

Open http://localhost:3000 with your browser to see the result.

## More

Feel free to PR and open an issue if you have any suggestions or questions, or other best practices you want to know. I will try to update this repo with the latest solutions and best practices.
