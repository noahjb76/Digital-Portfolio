# Noah Brown — Engineering Portfolio

A plain HTML/CSS/JS portfolio site. No build step, no installs — just open
`index.html` in a browser to view it.

## How to add a new project

1. **Add your images.** Create a new folder under `images/`, named after your
   project, e.g. `images/drone-build/`, and put your photos/screenshots/CAD
   renders in it.

2. **Open `js/projects-data.js`.** Copy the commented-out `TEMPLATE` object
   near the top of the file, paste it into the `PROJECTS` array below, and
   fill in the fields:

   - `id` — a short unique slug (letters, numbers, dashes only). This becomes
     the project's URL, e.g. `id: "drone-build"` → `index.html#drone-build`.
   - `category` — short tag shown above the title (e.g. `"Independent Project"`).
   - `title`, `summary` — the project name and a one-sentence description
     (the summary shows up on the home page card).
   - `status` — `"Complete"` or `"In Progress"`.
   - `role`, `tools`, `team` — shown in the meta row at the bottom of the
     project's detail page.
   - `what`, `how`, `result` — one short paragraph each, same structure as
     the existing projects.
   - `images` — a list of `{ src, caption }` pairs pointing at the files you
     added in step 1, e.g.:
     ```js
     images: [
       { src: "images/drone-build/frame.png", caption: "3D-printed frame" }
     ]
     ```

3. **Save the file and refresh the page.** The new project card appears on
   the home page automatically, and its detail page is live at
   `index.html#your-id`. No other files need to change.

## How to add/update "Current / In Progress" work

For work that's underway but not ready for a full write-up, use the lighter
`IN_PROGRESS_PROJECTS` array further down in `js/projects-data.js` instead:
copy its `TEMPLATE` object, fill in `title`, `category`, `description`, and
`started`, and add it to the array. These show up as simple (non-clickable)
cards in the "Current / In Progress" section — no images or id required.

Once one of these is finished and you've written up the full case study,
move it into the `PROJECTS` array above (using the regular template) and
delete it from `IN_PROGRESS_PROJECTS`.

## Filling in the placeholders

- **Resume:** replace `resume.pdf` in this folder with your latest resume,
  keeping the same filename — the "Download Resume" button will pick it up
  automatically.
- **Full portfolio PDF:** replace `portfolio.pdf` the same way to update the
  "Full Portfolio" download.

## Publishing updates

This site is live on GitHub Pages at
https://noahjb76.github.io/Digital-Portfolio/, served straight from the
`main` branch of this repo. Whenever you (or Claude) commit and
`git push`, the live site rebuilds automatically within about a minute —
no extra steps needed.

## File structure

```
index.html              Page shell (hero, about, contact, project-detail template)
css/styles.css           All styling
js/projects-data.js      All project content — edit this to add projects (PROJECTS and IN_PROGRESS_PROJECTS)
js/app.js                Renders the project grid + detail view, handles routing
images/<project-id>/     Images for each project
resume.pdf                Your resume, linked from the Contact section
portfolio.pdf              The original portfolio PDF, linked from the Contact section
```
