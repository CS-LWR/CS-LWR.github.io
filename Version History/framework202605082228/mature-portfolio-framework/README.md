# Mature Personal Website Framework

This is a modular static website framework for an academic / engineering personal website.

## 1. Folder structure

```text
mature-portfolio-framework/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── data/
│   └── site-data.js
├── assets/
│   ├── images/
│   │   └── README.md
│   └── docs/
│       └── README.md
└── README.md
```

## 2. What each file does

### `index.html`
The website skeleton. It defines the main sections:

- Hero
- About
- Research
- Projects
- Publications / technical writing
- Experience
- Contact

You normally do not need to edit this file often unless you want to add or remove a full section.

### `css/styles.css`
The visual design file. It controls:

- Color theme
- Font sizes
- Layout
- Responsive mobile layout
- Card design
- Dark mode
- Buttons
- Navigation menu

Edit this file when you want to change the website appearance.

### `data/site-data.js`
The main content file. Most website text is stored here:

- About text
- Skills
- Research directions
- Project cards
- Publications
- Experience
- Contact links

This is the file you will update most often.

### `js/main.js`
The dynamic behavior file. It controls:

- Project card generation
- Project category filtering
- Dynamic image insertion
- Mobile menu
- Dark / light mode
- Scroll reveal animation
- Active navigation highlight

You edit this file when you want new interaction logic.

### `assets/images/`
Put your images here. Recommended names:

```text
profile.jpg
research-mi.jpg
research-eeg.jpg
research-wireless.jpg
project-mi-inversion.jpg
project-forward.jpg
project-eeg.jpg
project-website.jpg
project-communication.jpg
```

The website already references these names in `data/site-data.js`. If the files do not exist, the website still works and shows gradient placeholders.

### `assets/docs/`
Put downloadable files here. Recommended names:

```text
CV.pdf
transcript.pdf
research-statement.pdf
portfolio.pdf
```

The current CV button expects:

```text
assets/docs/CV.pdf
```

## 3. How to put it into your GitHub Pages folder

If your GitHub Pages repository is:

```text
CS-LWR.github.io/
```

then copy the files like this:

```text
CS-LWR.github.io/
├── index.html
├── css/
├── js/
├── data/
├── assets/
└── README.md
```

Do not put the whole `mature-portfolio-framework` folder inside the repository unless you want the site to be available under a subfolder.

Correct:

```text
CS-LWR.github.io/index.html
CS-LWR.github.io/css/styles.css
CS-LWR.github.io/js/main.js
```

Wrong for a root GitHub Pages website:

```text
CS-LWR.github.io/mature-portfolio-framework/index.html
```

## 4. How to run locally

Open `index.html` directly in your browser.

For a cleaner local preview, use Python:

```bash
cd CS-LWR.github.io
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## 5. How to update content

Edit:

```text
data/site-data.js
```

For example, to add a new project, add a new object inside `projects`:

```js
{
  title: "New Project Title",
  category: "MI",
  description: "Short description of the project.",
  image: "assets/images/new-project.jpg",
  tags: ["Python", "Inversion", "Visualization"]
}
```

If you add a new category, also add it to:

```js
projectCategories: ["All", "MI", "EEG", "Website", "Communication", "New Category"]
```

## 6. How to upload to GitHub

From your website repository folder:

```bash
git add .
git commit -m "Build mature personal website framework"
git push
```

Then check your GitHub Pages site after GitHub finishes deployment.

## 7. Suggested next improvements

After the basic site works, you can add:

- A dedicated `pages/` folder for separate project pages
- A bilingual Chinese / English language switch
- A publication BibTeX download button
- A research blog section
- A project detail modal
- A JSON-based content loader
- Google Analytics or privacy-friendly analytics
- Search and tag filtering
