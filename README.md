# Dr. Rahul B. Adhao — Author Website

This is a static website. It has no build step or package dependencies.

## Local preview

From the project root, start a local web server:

```powershell
python -m http.server 8000
```

Open <http://localhost:8000> in a browser. Alternatively, open the project root in Visual Studio Code and use the Live Server extension.

## Deploy to Cloudflare Pages

### Git-connected deployment

1. Push this project to a Git provider supported by Cloudflare Pages.
2. In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git** and select the repository.
3. Set the framework preset to **None**, leave the build command empty, and set the build output directory to `.` (the project root).
4. Deploy. The site is served directly from `index.html`; no build command is required.

### Direct Upload

1. In **Workers & Pages**, create a Pages project using **Direct Upload**.
2. Upload the project contents, keeping `index.html`, `styles.css`, `script.js`, and the `assets` directory together at the deployment root.
3. Deploy the uploaded files.

## Before production

- Add a `<link rel="canonical" href="https://YOUR-PRODUCTION-DOMAIN/">` to `index.html` after the production domain is assigned. Do not publish the placeholder URL.
- Replace the disabled book purchase button's `data-purchase-url="REPLACE_WITH_BOOK_PURCHASE_URL"` value with the real retailer destination, then enable it as a link.
- Confirm the custom domain and HTTPS are configured in Cloudflare Pages.

Image and stylesheet/script URLs are relative to the site root so they work on static hosting.
