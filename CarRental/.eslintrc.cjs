module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
     
  ],
  "overrides": [

  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      project: "CarRental/tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-no-bind": 0,
    "react/no-unstable-nested-components": 0,
  },
}
