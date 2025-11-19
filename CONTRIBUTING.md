# Contributing Guidelines 🖋️
Before we start, a heartfelt thank you ❤️ for taking the time out and considering contributing to Elementa. We welcome your contributions to our icon library! Now, please follow these guidelines to ensure a smooth process. We use pull-requests to accept any kind of contribution to Elementa.

# 1. Check the Icons Master List 🔍
Before you start, check our [Icons Master List - Google Sheets](https://docs.google.com/spreadsheets/d/1mHxUlf_VPezuC638yyFCMEsodvKEnlS_-m5Mo3nRutw/edit?gid=1213227839#gid=1213227839) to see if your desired icon already exists. This helps prevent duplication of effort.

# 2. Suggestions
We understand not all people want to contribute by committing code to our repositories but help us by suggesting new icons or categories to expand out library.

We welcome suggestions. Before you make your suggestions, please ensure that there are no existing icons or categories in the master list provided above. This helps us avoid duplications.

Also check whether there are any open issues with the same category or icon suggestion as yours. Once you have verified that your suggestions are truly new, please create a new issue @ [Issues](https://github.com/deriva-inc/elementa-icons/issues).

## 2.1  Naming Categories and Icons
Use kebab-case (hyphen-separated, lowercase) for all category and icon IDs and filenames. Do not use underscores, spaces, or camelCase in IDs or filenames. Examples:
- Correct ID/filename: `user-profile`, `arrow-up-right`
- Incorrect ID/filename: `user_profile`, `UserProfile`, `arrow_up_right`

The "Name" field may contain spaces only (human-friendly, Title Case recommended). Do not include underscores, camelCase, or other separators in the Name. Examples:
- Name (allowed): User Profile
- Name (not allowed): User_Profile, UserProfile

When creating a suggestion or PR, provide both fields:
- Name — human-friendly name (spaces allowed)
- ID — kebab-case identifier (required)

This rule applies to filenames, IDs, issue titles, and any metadata you add to the Icons Master List or repository.

## 2.2 Creating Suggestion Issue
Please follow these steps to avoid issue closure because of non-adherence to issue creation guidelines:
1. Title - new category/new icon - category/icon name
- if you are suggestion more than one category please restrain to writing only one category in the Title, and mention the rest in the description field.
- if you are suggesting more than one icon, mention the category of any one icon and provide more details in the description field.
2. Description
- Category
<br />Please provide the following details for each category:
`Name`, `ID`, and `Description`
- Icon
<br />Please provide **inspiration** and the `category` for each icon.
3. Assignees
- Assign to any active repository maintainer.
4. Labels
- Please select either category-suggestion or icon-suggestion depending on the issue
5. Type
- Please select Feature

# 3. Icons Contribution
## 3.1 New Icons
If you already have a new SVG for a new icon, it mush follow the icon design principles as mentioned on [Elementa - Guide | Icon Design Principles](http://localhost:3000/guide#contributing).

## 3.2 Local Setup
Please clone the repository from `master` branch on your local machine. You should be using `master` for taking the latest production code. Then run the following command to get up and running:
```bash
yarn install
```

To build the library please run
```bash
yarn build
```

**NOTE:** Please use **`yarn`** as the package manager for active development on Elementa.

## 3.3 Project Structure
```
elementa
├── .github/workflows
│   ├── publish.yml
├── src
│   ├── icons
│   ├── lib
│   ├── index.ts
└── scripts
```

## 3.4 Adding New Icons
1. Create React icon from your SVG using command:
```bash
yarn svgr input.svg --out-dir output
```

2. Once the React icon code has been generated, please format the code in accordance with the existing icons to maintain code consistency.
Also please upload the SVG of your icon in the respective category folder here [](https://drive.google.com/drive/folders/1oQQvCuENmEoZ1zz5Z-NGgoKI1M_PHYjY?usp=sharing).

3. Please name your icon **icon-id/pr-number**.
Example: `user-profile/pr-45.svg`

4. In your PR, please only include the TSX code and not the SVG version. The library hosts all the SVGs, and equivalent PNGs on a Google Cloud Storage bucket. Once your PR is merged, maintainers will take the SVG, convert it into PNG and upload it on the bucket.

5. Bump up the version of the library in `package.json`. Follow semantic versioning.

6. Create a PR with your changes. A side but important note here; if you are adding multiple icons, please group the PRs by category. Don't create a single PR having multiple icons across the categories. There PRs will unfortunately be closed my maintainers.

## 3.5 Testing
Link your local `elementa-icons` library into a local clone of the `elementa.dev` repository, add your icons to the categories on the website, run the site, and verify the icon appears on [elementa | Icons](http://localhost:3000/icons).

### 3.5.1 Clone elementa.dev on your local:
```bash
git clone https://github.com/deriva-inc/elementa.dev.git
```
### 3.5.2 Linking `elementa-icons` locally
- In the `elementa-icons` project root:
```bash
yarn link
```
- In the `elementa.dev` project root:
```bash
yarn link elementa-icons
```
### 3.5.3 Ensure builds are current
- Build `elementa-icons` by running:
```bash
yarn build
```

### 3.5.4 Add the icon to the your respective category:
1. In the elementa.dev repo, open the category file:
  - lib/utils/icons/food-beverage.ts
  (path is relative to the root of elementa.dev)
2. Add your icon export according to the project’s icon shape/format. Example pattern (match existing entries):
  - export const myNewFoodIcon = { /* svg/path data and metadata */ };
  - Or add to a default export/array if that’s how icons are aggregated in your repo.
3. Save changes.

<!-- ToDO: Resume here -->
Run the dev server
1. In the elementa.dev root directory:
  - npm run dev
    or
  - yarn dev
    or
  - pnpm dev
2. Open your browser and go to:
  - http://localhost:<port>/icons
  - (Default port is often 3000; check the console output from the dev server.)

Verify the icon
- On the /icons page, find the “Food & Beverage” category and confirm your new icon is rendered.
- If it’s not visible:
  - Restart the dev server.
  - Ensure elementa-icons build output is up-to-date (rebuild elementa-icons if needed).
  - Check the console for import/export or runtime errors.
  - Confirm the exported name and the category mapping match what the site expects (category key: "food-beverage").

Troubleshooting tips
- If using npm/yarn link and you see stale code, unlink and relink or restart the dev server:
  - npm unlink --no-save elementa-icons (in elementa.dev)
  - npm link elementa-icons (in elementa.dev)
- If the site uses a bundler cache (e.g., .next, dist), clear it and restart.
- Inspect the component tree with browser devtools to ensure the icon component receives the expected props/SVG data.
- Check TypeScript compiler errors or ESLint messages if the new export fails to import.

Verification checklist
- [ ] elementa-icons is linked or referenced locally by elementa.dev
- [ ] lib/utils/icons/food-beverage.ts contains the new icon export
- [ ] elementa-icons build (if required) was run after changes
- [ ] elementa.dev dev server running
- [ ] New icon appears under Food & Beverage on /icons

<!-- TODO: End here -->

## 3.6 How to create and open a PR?
Depending on the type of work, please name your branch `feat/*` or `bugfix/*`. Branches not adhering to nomenclature will not open a PR to master.

## 3.7 Publishing New Version
When a PR is merger to the master branch the GitHub Action workflow file automatically pushed the new version of the library to npm.

## 3.2 Improving Library
Any contributions other than new icons include (but not limited to):
1. improving the performance of the library
2. support for other frameworks (Vue, Angular, and etc.)
3. reducing the library footprint
4. improving CI/CD pipeline for our deployments
5. bug fixes, improving current icons/categories/codebase
6. and much more

Please create a new PR with your changes to `master`. One of the project maintainer will review your PR.

You can also check the open issues here - [Elementa | Issues](http://github.com/deriva-inc/elementa-icons/issues?q=is%3Aissue%20state%3Aopen%20label%3Abug%20label%3Adocumentation%20label%3Aenhancement%20label%3A%22good%20first%20issue%22%20label%3A%22help%20wanted%22)

P.S.: If you have a killer marketing idea to increase the adoption of Elementa across web please reach out to [support@elementa.dev](mailto:support@elementa.dev) with the email title: **Let's make the icons of the web fun**

# 4. Website Contribution
Elementa is hosted on Google Cloud Run powered by Firebase Hosting. The codebase is @ [elementa.dev](https://github.com/deriva-inc/elementa.dev). If you want to contribute to the website, please refer [elementa.dev | CONTRIBUTING](https://github.com/deriva-inc/elementa.dev/blob/main/CHANGELOG.md).

# 5. Package Contribution
Current Elementa only supports React. We are looking for contributions on supporting Elementa on the following frameworks:
1. Angular
2. Svelte
3. Solid
4. Vue
5. React Native
6. Bare Bone - (Raw SVG support)

If you want to contribute in supporting the above frameworks please reach out @ [support@elementa.dev](mailto:support@elementa.dev) with the title: **Let's make icons more fun on [framework-name]**

# 6. Donation and Support
Elementa needs sponsors to survive and keep providing huge set of icon libraries for free forever. We started as an open-source project and we aim to keep that goal intact. If you like our work, and want to support us please consider donating a small amount of money by visiting [Elementa - Donation](https://elementa.dev/donate)

For further queries and support please reach out to support@elementa.dev

Keep building 🚀

<!-- TODO: # 7. Rockstars -->
<!-- TODO: Active list of contributors -->

