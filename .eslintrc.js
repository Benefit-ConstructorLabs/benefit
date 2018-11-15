module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "object-curly-newline": ["error", {
      "ImportDeclaration": "never"
    }],
    "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }],
    "func-names": ["error", "never"],
    "jsx-a11y/label-has-for": [2, {
      "components": ["Label"],
      "required": {
        "some": ["nesting", "id"]
      },
      "allowChildren": false
    }],
    "jsx-a11y/label-has-associated-control": [0, {
      "labelComponents": ["CustomInputLabel"],
      "labelAttributes": ["label"],
      "controlComponents": ["CustomInput"],
      "depth": 3,
    }],
  },
};