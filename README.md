# Week 3 – Art is Actually Useful

[tapping of keyboard]

I am _confusion_. ...this one is not Ar-kansas? America explain!

---

## Getting Started

Make a copy of this template on you or your partner's personal GitHub account.

```sh
git checkout -b development
```

Install packages:

```sh
yarn
```

Finally:

```sh
yarn start
```

and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

If you're using VSCode, edit your settings:

```json
"eslint.codeActionsOnSave.mode": "all"
```

and

```json
"editor.formatOnSave": true
```

---

## Project Phases

You will be building out the buttons and cards from the [Clicked design system](https://www.figma.com/file/8n0CwE4ED1PjMzUbB57nQh/Design-System?node-id=148%3A197) in React using Storybook. Clicked was a former WDB industry project, so this is good example of the type of work you'd be doing as a front end or full-stack dev.

**Phase 1 (recommended Monday)** – Set up the [typography](https://www.figma.com/file/8n0CwE4ED1PjMzUbB57nQh/Design-System?node-id=148%3A2) (including fonts, sizes, weights, etc.) and [colors](https://www.figma.com/file/8n0CwE4ED1PjMzUbB57nQh/Design-System?node-id=0%3A1) based on the design system in Figma

- Use Figma inspector to see details
- Tutorials are linked in Notion

**Phase 2 (rec. Tuesday)** – [Button, Hint, and Tag Components](https://www.figma.com/file/8n0CwE4ED1PjMzUbB57nQh/Design-System?node-id=158%3A814)

- You'll need six files, two for each type of component.
  - Remember each component will need a `.tsx` file and a `.stories.tsx` file
- Since there's alredya a `Button.tsx/.stories.tsx`, you'll either need to delete it or use a different name for yours

**Phase 3 (rec. Thursday)** – [Card Components](https://www.figma.com/file/8n0CwE4ED1PjMzUbB57nQh/Design-System?node-id=158%3A810)

- Before you start the code for this phase, look at the Figma with your partner(s) and take a mental notes on how the different variants each card has. This will help save time.
  - For example, most of the regular (not milestone) cards have an image, but one of them does not.

## Requirements

**Functional Requirements**

- Everything should look exactly like the Figma
  - Use the inspect and select features to find exact values for things like spacing
- Milestone cards should expand and collapse
- Only use [icons](https://www.figma.com/file/8n0CwE4ED1PjMzUbB57nQh/Design-System?node-id=174%3A280) from the design system
  - Use Figma export to export them as `.png` at 5x resolution

**Technical Requirements**

- Most cards have a variable number of tags and hints. This should be implemented by configuring your component props to take an array of `<Tag/>`s and `<Hint/>`s in Typescript.
  - ```ts
    interface MilestoneCardProps {
      // Some props not shown
      tags: JSX.Element[];
      hints: JSX.Element[];
    }
    ```
- Instead of creating separate components for each different type of card/tag/hint, define variants in the Chakra `theme.ts` file and use conditional rendering to make one component render differently depending on its props. This will keep your namespace from getting cluttered.

## Submission

**Add** your team information to [this spreadsheet](https://docs.google.com/spreadsheets/d/1dXsNPQxYvZUX6gAXzCfX8q1HVj6jUGKO1bn1RNyhZsI/edit?usp=sharing).

For each phase, **create** a PR from development to `main`.

**Send** the link to `#bootcamp-devs-checkoffs` on Slack for review.
