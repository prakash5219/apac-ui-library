## @apac/ui-library

Shared React UI components for micro-frontends.

### Install

```bash
npm install @apac/ui-library
# or
pnpm add @apac/ui-library
# or
yarn add @apac/ui-library
```

### Usage

Import both the components and the compiled CSS:

```tsx
import '@apac/ui-library/style.css';
import { FloatingButton } from '@apac/ui-library';

export default function Example() {
  return (
    <FloatingButton
      ariaLabel="Create"
      icon={<span>+</span>}
      position="bottom-right"
      size="md"
      onClick={() => console.log('FAB clicked')}
    />
  );
}
```

If your app already uses Tailwind, you can still import the compiled CSS above, or opt to consume only the components and rely on your app's Tailwind setup.

### Development

- Build library
```bash
npm run build
```

- Dev mode (library build in watch)
```bash
npm run dev
```

### Local usage (without publishing)

Use the library locally in another project right away using one of the options below.

1) Install from a local tarball (recommended snapshot):
```bash
# in this library repo
npm run build
npm pack
# outputs: apac-ui-library-0.1.0.tgz

# in your consuming project give your own folder path
npm i /Users/gauravprakash/Desktop/TuringSolutions/llmServiceWorkflow/apac-ui-library/apac-ui-library-0.1.0.tgz
```

2) Install from local folder path:
```bash
# in your consuming project give your own folder path
npm i file:/Users/gauravprakash/Desktop/TuringSolutions/llmServiceWorkflow/apac-ui-library
```

3) Link for active development (live edits):
```bash
# in this library repo
npm link

# in your consuming project
npm link @apac/ui-library
```

Then import in your app:
```tsx
import '@apac/ui-library/style.css';
import { FloatingButton } from '@apac/ui-library';
```

### Publishing to npm

1. Ensure you are logged in to npm for the `@apac` scope:
```bash
npm login --scope=@apac
```
2. Update version in `package.json`.
3. Publish:
```bash
npm publish --access public
```

### Peer Dependencies

- react >= 17
- react-dom >= 17
