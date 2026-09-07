# NEIVCE Trading PLT website

A responsive company website with a public site and a simple content-management admin panel. It is intentionally built with plain HTML, CSS, and JavaScript so it can be deployed to Vercel without a build step.

## Features

- Home, About Us, Services, and Contact sections
- Company information, enquiry form feedback, map link, and mobile navigation
- Admin login and dashboard to edit introduction, announcement, service descriptions, address, and telephone number
- Updates are immediately shown on the public website in the same browser using localStorage

## Run locally

Open `index.html` in a browser, or serve this folder with any static web server.

## Admin demonstration

1. Open `admin.html`.
2. Sign in with password: `neivce2026`.
3. Change content and select **Save and publish**.
4. Open `index.html` (or refresh it) to see the update.

## Deploy to Vercel

1. Create a GitHub repository and upload all project files.
2. In Vercel, select **Add New → Project**, then import the repository.
3. Leave the framework preset as **Other**. No build command is required.
4. Select **Deploy**. Vercel will provide the public URL.

## Note for report

The admin panel uses browser localStorage to keep the project simple for demonstration. Therefore edits are stored per browser/device. A production version should replace it with an authenticated database such as Supabase or Firebase.
