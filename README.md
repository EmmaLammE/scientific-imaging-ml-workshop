# Scientific Imaging and Machine Learning Workshop 2027

Static website for the March 15–18, 2027 workshop in San Juan, Puerto Rico.

## GitHub Pages

This folder is ready to publish from the root of a GitHub repository.

### Step-by-step setup

1. Sign in to GitHub and select **New repository**.
2. Name the repository `scientific-imaging-ml-workshop` and set it to **Public**.
3. Leave **Add a README file**, `.gitignore`, and license unselected, then create the repository.
4. Unzip `workshop-website.zip` on your computer.
5. In the empty repository, select **uploading an existing file** or **Add file → Upload files**.
6. Upload every file inside the unzipped `workshop-website` folder. The repository root should contain `index.html`, `styles.css`, `site.js`, the image files, `README.md`, and `.nojekyll`—not another enclosing `workshop-website` folder.
7. Enter a commit message such as `Publish workshop website` and commit the files to the `main` branch.
8. Open **Settings → Pages** in the repository.
9. Under **Build and deployment**, choose **Deploy from a branch**. Select `main`, select `/(root)`, and click **Save**.
10. Wait for GitHub to finish publishing, then open `https://<your-username>.github.io/scientific-imaging-ml-workshop/`.

For future updates, upload and commit the revised files to the same `main` branch. GitHub Pages will republish the site automatically.

### Choosing the address

- For the exact address `https://scientific-imaging-ml-workshop.github.io`, the GitHub user or organization that owns the repository must be named `scientific-imaging-ml-workshop`, and the repository must be named `scientific-imaging-ml-workshop.github.io`.
- Under an existing account named `<username>`, a repository named `scientific-imaging-ml-workshop` will normally publish at `https://<username>.github.io/scientific-imaging-ml-workshop/`.

Upload the contents of this folder—not the enclosing folder or ZIP archive—to the repository root. Keep the `.nojekyll` file, then enable **Settings → Pages → Deploy from a branch → main → /(root)**.

## Files

- `index.html` — all workshop content and navigation
- `styles.css` — responsive visual design
- `site.js` — mobile navigation and current-section highlighting
- `og.png` — social sharing preview image
- `himalayas-banner.png` — NASA Earth Observatory workshop banner
- `weddell-sea-ice.jpg` — NASA Earth Observatory overview image

All links open their original sources. Image credits and source links appear directly beneath the images and in `THIRD_PARTY_NOTICES.md`.
