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
