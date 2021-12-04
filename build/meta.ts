{
    "parts": [
        {
            "title": "基本",
            "template": "<f-button-group>\n    <f-button>Default</f-button>\n    <f-button type=\"info\">info</f-button>\n    <f-button type=\"success\">Success</f-button>\n    <f-button type=\"danger\">Danger</f-button>\n    <f-button type=\"warning\">Warning</f-button>\n    <f-button type=\"noble\">noble</f-button>\n</f-button-group>"
        },
        {
            "title": "填充",
            "template": "<f-button-group>\n    <f-button fillMode=\"outline\">Default</f-button>\n    <f-button fillMode=\"outline\" type=\"primary\">Primary</f-button>\n    <f-button fillMode=\"outline\" type=\"success\">Success</f-button>\n    <f-button fillMode=\"outline\" type=\"danger\">Danger</f-button>\n    <f-button fillMode=\"outline\" type=\"warning\">Warning</f-button>\n</f-button-group>",
            "script": "import { FCard, FButtonGroup, FButton } from '@phoeon/free-ui'\nconst data = {}",
            "style": "body{\n    color:red;\n}"
        }
    ],
    "title": "button"
}