## Harsha Ramireddy Portfolio

Personal portfolio website built with React, customized for aerospace/electrical systems design experience and prepared for deployment on **GitHub Pages**.

## Tech Stack

- React
- React Bootstrap
- CSS3

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm start
   ```

## Deploy to GitHub Pages

1. Ensure `homepage` in `package.json` is:
   ```text
   https://hersheeyyzz.github.io/Portfolio
   ```
2. Publish to `gh-pages` branch:
   ```bash
   npm run deploy
   ```
3. In GitHub repository settings, go to **Pages** and set source to:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`

After deployment, open:
`https://hersheeyyzz.github.io/Portfolio`

If you only see README, your Pages source is likely still pointing to `main` branch instead of `gh-pages`.
