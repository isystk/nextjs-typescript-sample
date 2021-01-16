module.exports = {
  "parser": "@typescript-eslint/parser", 
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true // Allows for the parsing of JSX
    }
  },
  "rules": {
    "react/prop-types": "off",
    "@typescript-eslint/no-empty-interface": 0
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}