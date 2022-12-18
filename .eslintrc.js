module.exports = {
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "airbnb",
      "airbnb/hooks",
      "plugin:prettier/recommended"
    ],
    env: {
      browser: true,
      jest: true
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      "import/prefer-default-export": "off",
      "react/function-component-definition": "off",
      'prettier/prettier': [
        'error',
        {
          'endOfLine': 'auto',
        }
      ]
    },
    plugins: ["prettier"],
    ignorePatterns: [".eslintrc.js"],
    settings: {
      "import/resolver": {
        node: {
          paths: ["src"]
        }
      }
    }
  };
  