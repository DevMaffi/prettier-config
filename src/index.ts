import { type Config } from "prettier"

const config: Config = {
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    semi: false,
    singleQuote: false,
    quoteProps: "consistent",
    jsxSingleQuote: false,
    trailingComma: "all",
    bracketSpacing: true,
    objectWrap: "preserve",
    bracketSameLine: false,
    arrowParens: "avoid",
    endOfLine: "lf",
    embeddedLanguageFormatting: "off",
    singleAttributePerLine: false,
}

export default config
