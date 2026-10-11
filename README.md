# Pakistan Local Business Template

A no-build, GitHub Pages-ready lead generation template for a clinic, salon, gym, or similar local business. The public website is `index.html`; the authenticated lead dashboard is `admin.html`.

## File structure

```text
.
|- index.html       # Public conversion website, styles, and booking form logic
|- admin.html       # Supabase Auth protected lead dashboard and CSV export
|- config.js        # All client-facing content, colours, links, and Supabase keys
|- supabase.sql     # leads table, validation, RLS policies, and permissions
|- sitemap.xml      # Replace the placeholder website URL before launch
|- robots.txt       # Crawling instructions; keeps admin out of search
`- README.md        # Setup and deployment guide
```

## Customise a client in minutes

Open `config.js` and edit the `window.BUSINESS_CONFIG` object:

1. Replace the details in `business`: name, type, contact details, address, hours, and WhatsApp number.
2. Change `theme.accent`, `theme.accentRgb`, and `theme.accentDark` to use the client's single accent colour. `accentRgb` is the comma-separated RGB value, for example `233, 169, 108`.
3. Replace the copy in `hero` and `sections`, plus the service list, gallery URLs/alt text, pricing, testimonials, FAQs, social links, and Google Maps embed URL.
4. Set the live domain in `seo.canonicalUrl` and `seo.ogImage`. Update `seo.schemaType` for another business type, such as `BeautySalon` or `HealthClub`.
5. Paste the Supabase project URL and anon key into `supabase` after completing the next section.

All editable business content used by both pages is centralised in `config.js`. The stock image URLs are only placeholders; replace them with the client's real photography before launch.

## Supabase setup

1. Create a project at [Supabase](https://supabase.com/).
2. In **SQL Editor**, open a new query, paste all of `supabase.sql`, and run it.
3. Open **Project Settings > API** (or **Connect**) and copy the project URL and anon/public key. Paste them into `config.js`.
4. In **Authentication > Providers**, keep Email enabled. In **Authentication > Users**, create or invite the owner/manager who should access `admin.html`.
5. Do not add a public sign-up form. If your Supabase project permits public email sign-ups, disable that option in the email authentication settings so only approved staff can have an account.
6. Open `admin.html` from the deployed site and sign in with that authorised email and password.

### Database security model

The SQL enables Row Level Security and grants:

- `anon`: `INSERT` only, through one insert policy. It has no select, update, or delete grant or policy.
- `authenticated`: `SELECT` only, through the authenticated admin session used by `admin.html`.

The browser anon key is safe to publish when these policies are in place. It is not a secret key. Never put the Supabase `service_role` key in `config.js`, `index.html`, or any public repository.

The public form also has required-field validation, a hidden honeypot field, HTML input limits, database check constraints, and a one-minute browser rate limit. These measures reduce casual spam but cannot stop a determined bot because the form is public. For high-volume campaigns, add a server-side anti-bot service such as Turnstile before accepting leads.

## GitHub Pages deployment

1. Create a new GitHub repository and add these files to its root.
2. Commit and push the files to the `main` branch.
3. In the repository, open **Settings > Pages**.
4. Set **Source** to **Deploy from a branch**, select `main`, choose `/(root)`, then save.
5. After GitHub publishes the site, copy the live Pages URL, for example `https://your-github-username.github.io/your-repository/`.
6. Replace the placeholder URL in `config.js` (`seo.canonicalUrl`), `sitemap.xml`, and `robots.txt`, then commit and push again.
7. The public site is at the Pages URL. The lead dashboard is at `https://your-github-username.github.io/your-repository/admin.html`.

For a custom domain, add it in **Settings > Pages**, complete the DNS setup requested by GitHub, and then use the custom HTTPS URL in `config.js`, `sitemap.xml`, and `robots.txt`.

## Pre-launch checks

1. Submit a test booking and confirm it appears in `admin.html` after signing in.
2. Attempt to open the REST endpoint in a private browser with the anon key. A select request should be rejected by RLS.
3. Test call links, the WhatsApp prefilled message, map pin, mobile menu, FAQ, and CSV export on a phone.
4. Replace all demo testimonials and placeholder photography with approved client material.
5. Confirm the canonical URL, Open Graph image, sitemap, robots URL, and LocalBusiness schema are using the live domain and correct business details.