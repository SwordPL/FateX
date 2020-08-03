module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "rules": {
    },
    "globals": {
        "Hooks": "writable",
        "CONFIG": "writable",
        "Actor": "writable",
        "Actors": "writable",
        "ActorSheet": "writable",
        "Item": "writable",
        "Items": "writable",
        "ItemSheet": "writable",
        "game": "writable",
        "Dialog": "writable",
        "duplicate": "writable",
        "mergeObject": "writable",
        "Roll": "writable",
        "ChatMessage": "writable",
        "renderTemplate": "writable",
        "CONST": "writable",
        "$": "writable",
        "FormApplication": "writable",
        "Settings": "writable",
        "Handlebars": "writable",
        "loadTemplates": "writable",
        "isNewerVersion": "writable",
    }
};
