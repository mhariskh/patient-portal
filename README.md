### Prerequisites

- Node.js 18 atleast
- pnpm should be installed on global level

### Installation Steps

1. Clone this repository

```bash
git clone https://github.com/mhariskh/patient-portal.git

```

2. Install dependencies

```bash
pnpm install
```

3. Start development server

```bash
pnpm run dev

```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Accessibility Considerations

### Implemented Accessibility Features

- Full keyboard navigation support with logical tab order
- ARIA attributes for interactive elements to support screen readers - by default present in shadcn
- Focus management on different tab navigation
- High contrast color scheme meeting WCAG AA standards - that is black and white
- Form labels and clear error messages
- Added loading states.

### Accessibility Challenges

#### Challenge: Complex Filtering UI

Though slider is many of the times discouraged, but for a fast ui for changing values quickly we needed it so shadcn slider helped us make sure it is controllable from both keyboard arrows and mouse

#### Challenge: Tab navigation

We normally use tab index wherever reqired for tab naviagtion but the shadcn components used already are working correctly so there was no need to add manually

### Challenge: Enter should move to next field of add note form / form validations -  Not done due to Less time due to travel 

This needs to be done but due to less time as I am travelling constantly during these days due to family matter till 28 april I could not get the time to do this and also the form validations but they can easily be added in normal time constraints with zod/yup validation in form schema with react form hook too .
