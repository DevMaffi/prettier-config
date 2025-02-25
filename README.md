# @devmaff1/prettier-config

A shareable Prettier configuration.

This package provides a consistent Prettier configuration that can be easily shared across multiple projects.

## Installation

```bash
npm install --save-dev --save-exact @devmaff1/prettier-config prettier
```

```bash
yarn add --dev --exact @devmaff1/prettier-config prettier
```

```bash
pnpm add --save-dev --save-exact @devmaff1/prettier-config prettier
```

> [!IMPORTANT]
> Prettier version `3.0.0` or higher is required as a peer dependency. Please ensure it is installed in your project's `devDependencies`.

## Usage

### Basic Usage

To use the shared configuration, simply add the following to your `.prettierrc` file in your project's root directory:

```json
"@devmaff1/prettier-config"
```

This will apply the 👇[default configuration](#default-configuration)👇 defined in this package to your project.

#### Default Configuration

The default configuration provided by `@devmaff1/prettier-config` is as follows:

```json
{
    "printWidth": 80,
    "tabWidth": 4,
    "useTabs": false,
    "semi": false,
    "singleQuote": false,
    "quoteProps": "consistent",
    "jsxSingleQuote": false,
    "trailingComma": "all",
    "bracketSpacing": true,
    "objectWrap": "preserve",
    "bracketSameLine": false,
    "arrowParens": "avoid",
    "endOfLine": "lf",
    "embeddedLanguageFormatting": "off",
    "singleAttributePerLine": false
}
```

These settings are designed to enforce a consistent and readable code style across your projects.

### Extending the Configuration

If you need to customize or override some of the defaults, you can create a `prettier.config.js`, `.prettierrc.js`, `prettier.config.mjs`, or `.prettierrc.mjs` file in your project's root directory.

Here's an example of how to extend the configuration:

```js
// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

import devmaff1PrettierConfig from "@devmaff1/prettier-config"

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...devmaff1PrettierConfig,
  semi: true, // Override the 'semi' rule
  // Add or override other Prettier options as needed
}

export default config
```

In this example, we import the shared configuration and then override the `semi` option to `true`. You can add or override any other Prettier [options](https://prettier.io/docs/options) as needed.

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please feel free to open an [issue](https://github.com/DevMaffi/prettier-config/issues).

## Links

- [npm](https://www.npmjs.com/package/@devmaff1/prettier-config)
- [github](https://github.com/DevMaffi/prettier-config)
