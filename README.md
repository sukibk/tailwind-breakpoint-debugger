# Tailwind Breakpoint Debugger

A lightweight React component to help developers visualize and debug Tailwind CSS breakpoints during development.

## Features

- 📏 Shows current active breakpoint
- 🔍 Works with custom Tailwind breakpoints
- 💻 Development mode only
- 🎨 Minimal, non-intrusive design

## Installation

Install the package using npm:

```bash
npm install tailwind-breakpoint-debugger
```

Or yarn:

```bash
yarn add tailwind-breakpoint-debugger
```

## Usage

Import the BreakpointDebugger in your React component:

```typescript
import BreakpointDebugger from 'tailwind-breakpoint-debugger';

function MyApp() {
  return (
    <>
      {/* Your app components */}
      <BreakpointDebugger />
    </>
  );
}
```

### Customizing Breakpoints

You can customize which breakpoints are displayed:

```typescript
// Show only specific breakpoints
<BreakpointDebugger breakpoints={['xs', 'md', 'lg']} />
```

## Requirements

- React 18+
- Tailwind CSS 3.0+

## Configuration

Ensure your Tailwind configuration includes the breakpoints you want to debug:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
}
```

## Notes

- Only renders in development mode
- Positioned at bottom-left of the screen
- Does not affect production builds

## License

MIT License