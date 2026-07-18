# Getting your muse + gather site live — step by step

This guide takes you from the files in this `site/` folder to a **live website** you can update from your browser at `yoursite.netlify.app/admin`. No coding — just follow along and paste what I tell you to paste. Take it one section at a time.

There are 4 parts:
1. Put the site on GitHub (your files' home)
2. Connect it to Netlify (makes it live on the internet)
3. Turn on the browser editor (so you can write posts)
4. Add your Flodesk newsletter + your photo

---

## Before you start
Create two free accounts (use the same email for both):
- **GitHub** → https://github.com/signup
- **Netlify** → https://app.netlify.com/signup — choose **"Sign up with GitHub"** so they're linked.

That's it. You do **not** need to install anything on your computer.

---

## Part 1 — Put the site on GitHub

GitHub is where your website's files live. Netlify watches this folder and rebuilds the site whenever something changes.

1. Download this `site` folder to your computer (ask me for a zip if you don't have it — I can hand you one).
2. Go to https://github.com/new
3. **Repository name:** `muse-gather-site` · keep it **Public** (or Private, both work) · **don't** check "Add a README" · click **Create repository**.
4. On the next page, click the link **"uploading an existing file"**.
5. Open the downloaded `site` folder, select **everything inside it** (the `src` folder, `admin` folder, `package.json`, `netlify.toml`, `.eleventy.js`, etc.) and drag it all into the browser upload box.
   - ⚠️ Upload the **contents** of the `site` folder, not the folder itself. `package.json` must sit at the top level of the repository.
6. Click **Commit changes**.

Done — your files are on GitHub.

---

## Part 2 — Connect it to Netlify (go live)

1. Go to https://app.netlify.com → **Add new site → Import an existing project**.
2. Choose **GitHub**, authorize it, and pick your `muse-gather-site` repository.
3. Netlify reads the included `netlify.toml` and fills these in automatically — just confirm:
   - **Build command:** `npm run build`
   - **Publish directory:** `_site`
4. Click **Deploy**. Wait ~1–2 minutes.
5. You'll get a live address like `https://gentle-wildflower-1234.netlify.app`. Click it — your site is live! 🎉
   - Rename it under **Site configuration → Change site name** if you like (e.g. `muse-and-gather`).

Every time you (or the editor) save a change, Netlify rebuilds automatically in about a minute.

---

## Part 3 — Turn on the browser editor (Decap CMS)

This is what lets you log in and write posts without touching code.

1. In your Netlify site, go to **Integrations** (older menus call it **Identity**) → enable **Netlify Identity**.
   - If you see **Identity** in the top menu: click it → **Enable Identity**.
2. Under Identity → **Registration**, set it to **Invite only** (so only you can log in).
3. Under Identity → **Services → Git Gateway**, click **Enable Git Gateway**.
4. Still in Identity, click **Invite users** and enter your own email address.
5. Check your inbox → click the invite link → set a password.
6. Now go to `https://YOUR-SITE.netlify.app/admin/` and log in.

You'll see **Essays** and **Events** with a big **New** button. Write, fill in the fields, and click **Publish**. About a minute later it's live on the site. That's the whole workflow from now on.

> Tip: each essay has Title, Category, Date, Summary, Topics (tags), an optional Cover image, and the Body. Events have date, location, price, and a **Ticket link** field — paste your Flodesk booking link there.

---

## Part 4 — Newsletter (Flodesk) + your photo

### Newsletter signup
1. In Flodesk: **Forms → create an Inline form → Share → Embed → copy the code.**
2. In your repo, open `src/_includes/signup.njk`.
3. Replace the `<form>…</form>` line with your pasted Flodesk embed code (the file has a comment showing exactly where).
4. Commit. Every signup box on the site updates at once.

### Event payments / signups
Paste your Flodesk **checkout or signup link** into the **Ticket / booking link** field when you create an event in the editor. The "Reserve" button will point there.

### Your About photo
1. Go to `/admin/` → (or) in the repo open `src/about.njk`.
2. Find the line with `[ your front-porch photograph goes here ]`.
3. Replace that whole placeholder `<div>…</div>` with:
   `<img src="/assets/uploads/your-photo.jpg" alt="Jeannie Sullivan" style="width:100%;border-radius:var(--r-xl)">`
4. Upload the photo through the editor's image picker (or drop it in `src/assets/uploads/`).
   - Send me the photo and I'll wire this up for you if you'd rather not.

---

## Later: your real domain
When you're ready to use **jeanniesullivan.com** instead of the Netlify address: Netlify → **Domain management → Add a domain** → follow the prompts. I can walk you through it when you get there.

---

## Optional: preview on your own computer
Not required, but if you ever want to see changes before pushing:
1. Install Node.js (the "LTS" version) from https://nodejs.org
2. Open Terminal in the `site` folder and run: `npm install` then `npm run serve`
3. Open http://localhost:8080

---

### Stuck on any step?
Tell me which part and what you see on screen — I'll get you unstuck. Nothing here can break the site; you can always retry.