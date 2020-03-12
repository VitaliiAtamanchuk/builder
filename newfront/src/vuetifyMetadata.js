const data = {
  "v-app": {
    "props": [
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "id",
        "type": "string",
        "default": "'app'"
      }
    ],
    "mixins": [
      "themeable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-app-bar": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "elevation",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "tag",
        "type": "string",
        "default": "'header'"
      },
      {
        "name": "tile",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "absolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "bottom",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "collapse",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "extended",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "extensionHeight",
        "type": [
          "number",
          "string"
        ],
        "default": 48
      },
      {
        "name": "flat",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "floating",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "prominent",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "short",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "src",
        "type": [
          "string",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "scrollTarget",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "scrollThreshold",
        "type": [
          "string",
          "number"
        ],
        "default": "undefined"
      },
      {
        "name": "value",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "fixed",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "app",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "clippedLeft",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "clippedRight",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "collapseOnScroll",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "elevateOnScroll",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fadeImgOnScroll",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnScroll",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "invertedScroll",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "scrollOffScreen",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "shrinkOnScroll",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "v-toolbar",
      "colorable",
      "elevatable",
      "measurable",
      "themeable",
      "scrollable",
      "ssr-bootable",
      "toggleable",
      "applicationable",
      "positionable"
    ],
    "slots": [
      {
        "name": "extension"
      },
      {
        "name": "img",
        "props": {
          "props": "{ height: string, src: string | srcObject }"
        }
      },
      {
        "name": "default"
      }
    ]
  },
  "v-app-bar-nav-icon": {
    "props": [],
    "mixins": [],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-alert": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "elevation",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "tag",
        "type": "string",
        "default": "'div'"
      },
      {
        "name": "tile",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "transition",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "border",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "closeLabel",
        "type": "string",
        "default": "'$vuetify.close'"
      },
      {
        "name": "coloredBorder",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "dismissible",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "icon",
        "type": [
          "boolean",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "prominent",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "text",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "type",
        "type": "string",
        "default": "undefined"
      }
    ],
    "mixins": [
      "v-sheet",
      "colorable",
      "elevatable",
      "measurable",
      "themeable",
      "toggleable",
      "transitionable"
    ],
    "slots": [
      {
        "name": "append"
      },
      {
        "name": "close",
        "props": {
          "toggle": "Function"
        }
      },
      {
        "name": "prepend"
      },
      {
        "name": "default"
      }
    ],
    "events": [
      {
        "name": "input",
        "value": "boolean"
      }
    ],
    "functions": [
      {
        "name": "toggle",
        "signature": "(): void"
      }
    ]
  },
  "v-autocomplete": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "error",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "errorCount",
        "type": [
          "number",
          "string"
        ],
        "default": 1
      },
      {
        "name": "errorMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "messages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rules",
        "type": "array",
        "default": []
      },
      {
        "name": "success",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "successMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "validateOnBlur",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "appendIcon",
        "type": "string",
        "default": "'$dropdown'"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "hideDetails",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hint",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "id",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "label",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loading",
        "type": [
          "boolean",
          "string"
        ],
        "default": false
      },
      {
        "name": "persistentHint",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "prependIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loaderHeight",
        "type": [
          "number",
          "string"
        ],
        "default": 2
      },
      {
        "name": "appendOuterIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "autofocus",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "clearable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "clearIcon",
        "type": "string",
        "default": "'$clear'"
      },
      {
        "name": "counter",
        "type": [
          "boolean",
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "filled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "flat",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fullWidth",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "placeholder",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "prefix",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "prependInnerIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "reverse",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "shaped",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "singleLine",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "solo",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "soloInverted",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "suffix",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "type",
        "type": "string",
        "default": "'text'"
      },
      {
        "name": "valueComparator",
        "type": "function",
        "default": "(a: any, b: any): boolean"
      },
      {
        "name": "noDataText",
        "type": "string",
        "default": "'$vuetify.noDataText'"
      },
      {
        "name": "attach",
        "type": [
          "any"
        ],
        "default": false
      },
      {
        "name": "cacheItems",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "chips",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "deletableChips",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "eager",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideSelected",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "items",
        "type": "array",
        "default": [],
        "example": {
          "text": "string | number | object",
          "value": "string | number | object"
        }
      },
      {
        "name": "itemColor",
        "type": "string",
        "default": "'primary'"
      },
      {
        "name": "itemDisabled",
        "type": [
          "string",
          "array",
          "function"
        ],
        "default": "disabled"
      },
      {
        "name": "itemText",
        "type": [
          "string",
          "array",
          "function"
        ],
        "default": "text"
      },
      {
        "name": "itemValue",
        "type": [
          "string",
          "array",
          "function"
        ],
        "default": "value"
      },
      {
        "name": "menuProps",
        "type": [
          "string",
          "array",
          "object"
        ],
        "default": "{\"closeOnClick\":false, \"closeOnContentClick\":false, \"openOnClick\":false, \"maxHeight\":300, \"offsetY\":true, \"offsetOverflow\":true, \"transition\":false}"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "openOnClear",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "returnObject",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "smallChips",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "allowOverflow",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "autoSelectFirst",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "filter",
        "type": "function",
        "default": "(item: object, queryText: string, itemText: string): boolean"
      },
      {
        "name": "hideNoData",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "noFilter",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "searchInput",
        "type": "string",
        "default": "undefined"
      }
    ],
    "mixins": [
      "v-text-field",
      "v-input",
      "validatable",
      "colorable",
      "registrable-inject",
      "themeable",
      "loadable",
      "comparable",
      "filterable"
    ],
    "slots": [
      {
        "name": "append"
      },
      {
        "name": "default"
      },
      {
        "name": "prepend"
      },
      {
        "name": "append-outer"
      },
      {
        "name": "label"
      },
      {
        "name": "progress"
      },
      {
        "name": "prepend-inner"
      },
      {
        "name": "append-item"
      },
      {
        "name": "prepend-item"
      },
      {
        "name": "item",
        "props": {
          "parent": "VueComponent",
          "item": "object",
          "on": "object",
          "attrs": "object"
        }
      },
      {
        "name": "no-data"
      },
      {
        "name": "selection",
        "props": {
          "parent": "VueComponent",
          "item": "object",
          "index": "number",
          "select": "function",
          "selected": "boolean",
          "disabled": "boolean"
        }
      }
    ],
    "events": [
      {
        "name": "input",
        "value": "any"
      },
      {
        "name": "change",
        "value": "any"
      },
      {
        "name": "update:search-input",
        "value": "string"
      },
      {
        "name": "update:list-index",
        "value": "number"
      },
      {
        "name": "click:prepend",
        "value": "Event"
      },
      {
        "name": "click:append",
        "value": "Event"
      },
      {
        "name": "click:clear",
        "value": "Event"
      },
      {
        "name": "click:append-outer",
        "value": "Event"
      },
      {
        "name": "click:prepend-inner",
        "value": "Event"
      },
      {
        "name": "update:error",
        "value": "boolean"
      },
      {
        "name": "blur",
        "value": "boolean"
      },
      {
        "name": "focus",
        "value": "boolean"
      }
    ]
  },
  "v-avatar": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "left",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "right",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "size",
        "type": [
          "number",
          "string"
        ],
        "default": 48
      },
      {
        "name": "tile",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "colorable",
      "measurable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-badge": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "'primary'"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": true
      },
      {
        "name": "left",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "bottom",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "transition",
        "type": "string",
        "default": "'fab-transition'"
      },
      {
        "name": "overlap",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "colorable",
      "toggleable",
      "positionable",
      "transitionable"
    ],
    "slots": [
      {
        "name": "badge"
      },
      {
        "name": "default"
      }
    ]
  },
  "v-banner": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "elevation",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "tag",
        "type": "string",
        "default": "'div'"
      },
      {
        "name": "tile",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "value",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "icon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "iconColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "mobileBreakPoint",
        "type": [
          "number",
          "string"
        ],
        "default": 960
      },
      {
        "name": "singleLine",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "sticky",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "v-sheet",
      "colorable",
      "elevatable",
      "measurable",
      "themeable",
      "toggleable"
    ],
    "slots": [
      {
        "name": "actions",
        "props": {
          "dismiss": "(): void"
        }
      },
      {
        "name": "icon"
      },
      {
        "name": "default"
      }
    ],
    "functions": [
      {
        "name": "toggle",
        "signature": "(): void"
      }
    ]
  },
  "v-bottom-navigation": {
    "props": [
      {
        "name": "absolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fixed",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "app",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": 56
      },
      {
        "name": "maxHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "inputValue",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "scrollTarget",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "scrollThreshold",
        "type": [
          "string",
          "number"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": "'v-btn--active'"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "grow",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnScroll",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "horizontal",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mandatory",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "shift",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "applicationable",
      "positionable",
      "colorable",
      "measurable",
      "toggleable",
      "proxyable",
      "scrollable",
      "themeable"
    ],
    "events": [
      {
        "name": "change",
        "value": "any"
      },
      {
        "name": "update:input-value",
        "value": "string | number"
      }
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-bottom-sheet": {
    "props": [
      {
        "name": "openDelay",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "closeDelay",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "activator",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "internalActivator",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "openOnHover",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "eager",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "attach",
        "type": [
          "any"
        ],
        "default": false
      },
      {
        "name": "contentClass",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "hideOverlay",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "overlayColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "overlayOpacity",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "returnValue",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fullscreen",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "maxWidth",
        "type": [
          "string",
          "number"
        ],
        "default": "auto"
      },
      {
        "name": "noClickAnimation",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'center center'"
      },
      {
        "name": "persistent",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "retainFocus",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "transition",
        "type": "string",
        "default": "'bottom-sheet-transition'"
      },
      {
        "name": "width",
        "type": [
          "string",
          "number"
        ],
        "default": "auto"
      },
      {
        "name": "inset",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "activatable",
      "delayable",
      "toggleable",
      "dependent",
      "detachable",
      "bootable",
      "overlayable",
      "returnable",
      "stackable",
      "toggleable"
    ],
    "slots": [
      {
        "name": "activator",
        "props": {
          "on": "{ [eventName]: eventHandler }",
          "value": "boolean"
        }
      },
      {
        "name": "default"
      }
    ]
  },
  "v-breadcrumbs": {
    "props": [
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "divider",
        "type": "string",
        "default": "'/'"
      },
      {
        "name": "items",
        "type": "array",
        "default": [],
        "example": [
          {
            "disabled": "boolean",
            "exact": "boolean",
            "href": "string",
            "link": "boolean",
            "text": "string | number",
            "to": "string | object"
          }
        ]
      },
      {
        "name": "large",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "themeable"
    ],
    "slots": [
      {
        "name": "divider"
      },
      {
        "name": "item",
        "props": {
          "item": "any[]"
        }
      },
      {
        "name": "default"
      }
    ]
  },
  "v-breadcrumbs-item": {
    "props": [
      {
        "name": "activeClass",
        "type": "string",
        "default": "'v-breadcrumbs__item--disabled'"
      },
      {
        "name": "append",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "exact",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "exactActiveClass",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "link",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "href",
        "type": [
          "string",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "to",
        "type": [
          "string",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "nuxt",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "replace",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "ripple",
        "type": [
          "boolean",
          "object"
        ],
        "default": false
      },
      {
        "name": "tag",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "target",
        "type": "string",
        "default": "undefined"
      }
    ],
    "mixins": [
      "routable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-breadcrumbs-divider": {
    "props": [],
    "mixins": []
  },
  "v-btn": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "elevation",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "tag",
        "type": "string",
        "default": "'button'"
      },
      {
        "name": "tile",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": ""
      },
      {
        "name": "append",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "exact",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "exactActiveClass",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "link",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "href",
        "type": [
          "string",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "to",
        "type": [
          "string",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "nuxt",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "replace",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "ripple",
        "type": [
          "boolean",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "target",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "absolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "bottom",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fixed",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "left",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "right",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "top",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "large",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "small",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "xLarge",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "xSmall",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "inputValue",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "block",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "depressed",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fab",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "icon",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "loading",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "retainFocusOnClick",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "text",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "type",
        "type": "string",
        "default": "'button'"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      }
    ],
    "mixins": [
      "v-sheet",
      "colorable",
      "elevatable",
      "measurable",
      "themeable",
      "routable",
      "positionable",
      "sizeable",
      "groupable",
      "toggleable"
    ],
    "slots": [
      {
        "name": "loader"
      },
      {
        "name": "default"
      }
    ]
  },
  "v-btn-toggle": {
    "props": [
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": "'v-item--active'"
      },
      {
        "name": "mandatory",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "max",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "borderless",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "shaped",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "tile",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "button-group",
      "proxyable",
      "themeable",
      "colorable"
    ],
    "events": [
      {
        "name": "change",
        "value": "any[] | any"
      }
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-calendar": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "locale",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "now",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "start",
        "type": "string",
        "default": "'2019-12-19'"
      },
      {
        "name": "end",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "weekdays",
        "type": "array",
        "default": [
          0,
          1,
          2,
          3,
          4,
          5,
          6
        ]
      },
      {
        "name": "hideHeader",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "shortWeekdays",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "weekdayFormat",
        "type": "function",
        "default": "null"
      },
      {
        "name": "dayFormat",
        "type": "function",
        "default": "null"
      },
      {
        "name": "events",
        "type": "array",
        "default": []
      },
      {
        "name": "eventStart",
        "type": "string",
        "default": "'start'"
      },
      {
        "name": "eventEnd",
        "type": "string",
        "default": "'end'"
      },
      {
        "name": "eventHeight",
        "type": "number",
        "default": 20
      },
      {
        "name": "eventColor",
        "type": [
          "string",
          "function"
        ],
        "default": "secondary"
      },
      {
        "name": "eventTextColor",
        "type": [
          "string",
          "function"
        ],
        "default": "white"
      },
      {
        "name": "eventName",
        "type": [
          "string",
          "function"
        ],
        "default": "name"
      },
      {
        "name": "eventOverlapThreshold",
        "type": "number",
        "default": 60
      },
      {
        "name": "eventMore",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "eventMoreText",
        "type": "string",
        "default": "'$vuetify.calendar.moreEvents'"
      },
      {
        "name": "eventRipple",
        "type": [
          "boolean",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "eventMarginBottom",
        "type": "number",
        "default": 1
      },
      {
        "name": "type",
        "type": "string",
        "default": "'month'"
      },
      {
        "name": "value",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "minWeeks",
        "type": [
          "any"
        ],
        "default": 1
      },
      {
        "name": "shortMonths",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "showMonthOnFirst",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "monthFormat",
        "type": "function",
        "default": "null"
      },
      {
        "name": "maxDays",
        "type": "number",
        "default": 7
      },
      {
        "name": "shortIntervals",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "intervalHeight",
        "type": [
          "number",
          "string"
        ],
        "default": 40
      },
      {
        "name": "intervalMinutes",
        "type": [
          "number",
          "string"
        ],
        "default": 60
      },
      {
        "name": "firstInterval",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "intervalCount",
        "type": [
          "number",
          "string"
        ],
        "default": 24
      },
      {
        "name": "intervalFormat",
        "type": "function",
        "default": "null"
      },
      {
        "name": "intervalStyle",
        "type": "function",
        "default": "null"
      },
      {
        "name": "showIntervalLabel",
        "type": "function",
        "default": "null"
      }
    ],
    "mixins": [
      "colorable",
      "localable",
      "mouse",
      "themeable",
      "times"
    ],
    "slots": [
      {
        "name": "day",
        "props": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        }
      },
      {
        "name": "day-body",
        "props": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "day-header",
        "props": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        }
      },
      {
        "name": "day-label",
        "props": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        }
      },
      {
        "name": "day-month",
        "props": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        }
      },
      {
        "name": "interval",
        "props": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      }
    ],
    "functions": [
      {
        "name": "checkChange",
        "signature": "(): void"
      },
      {
        "name": "updateTimes",
        "signature": "(): void"
      },
      {
        "name": "next",
        "signature": "(amount: number = 1): void"
      },
      {
        "name": "prev",
        "signature": "(amount: number = 1): void"
      },
      {
        "name": "move",
        "signature": "(amount: number = 1): void"
      },
      {
        "name": "timeToY",
        "signature": "(time: number | string | { hour: number, minute: number }, clamp: boolean = true): number | false"
      },
      {
        "name": "minutesToPixels",
        "signature": "(minutes: number): number"
      },
      {
        "name": "scrollToTime",
        "signature": "(time: number | string | { hour: number, minute: number }): boolean"
      }
    ],
    "events": [
      {
        "name": "input",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        }
      },
      {
        "name": "moved",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        }
      },
      {
        "name": "change",
        "value": {
          "start": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "end": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        }
      },
      {
        "name": "click:date",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "contextmenu:date",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "click:day",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "contextmenu:day",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "mousedown:day",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "mousemove:day",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "mouseup:day",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "mouseenter:day",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "mouseleave:day",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "touchstart:day",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "touchmove:day",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "touchend:day",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "click:time",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "contextmenu:time",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "mousedown:time",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "mousemove:time",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "mouseup:time",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "mouseenter:time",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "mouseleave:time",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "touchstart:time",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "touchmove:time",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "touchend:time",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean",
          "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number"
        }
      },
      {
        "name": "click:interval",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        }
      },
      {
        "name": "contextmenu:interval",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        }
      },
      {
        "name": "mousedown:interval",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        }
      },
      {
        "name": "mousemove:interval",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        }
      },
      {
        "name": "mouseup:interval",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        }
      },
      {
        "name": "mouseenter:interval",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        }
      },
      {
        "name": "mouseleave:interval",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        }
      },
      {
        "name": "touchstart:interval",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        }
      },
      {
        "name": "touchmove:interval",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        }
      },
      {
        "name": "touchend:interval",
        "value": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        }
      }
    ]
  },
  "v-calendar-daily": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "locale",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "now",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "start",
        "type": "string",
        "default": "'2019-12-19'"
      },
      {
        "name": "end",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "weekdays",
        "type": "array",
        "default": [
          0,
          1,
          2,
          3,
          4,
          5,
          6
        ]
      },
      {
        "name": "hideHeader",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "shortWeekdays",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "weekdayFormat",
        "type": "function",
        "default": "null"
      },
      {
        "name": "dayFormat",
        "type": "function",
        "default": "null"
      },
      {
        "name": "maxDays",
        "type": "number",
        "default": 7
      },
      {
        "name": "shortIntervals",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "intervalHeight",
        "type": [
          "number",
          "string"
        ],
        "default": 40
      },
      {
        "name": "intervalMinutes",
        "type": [
          "number",
          "string"
        ],
        "default": 60
      },
      {
        "name": "firstInterval",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "intervalCount",
        "type": [
          "number",
          "string"
        ],
        "default": 24
      },
      {
        "name": "intervalFormat",
        "type": "function",
        "default": "null"
      },
      {
        "name": "intervalStyle",
        "type": "function",
        "default": "null"
      },
      {
        "name": "showIntervalLabel",
        "type": "function",
        "default": "null"
      }
    ],
    "mixins": [
      "colorable",
      "localable",
      "mouse",
      "themeable",
      "times"
    ]
  },
  "v-calendar-weekly": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "locale",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "now",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "start",
        "type": "string",
        "default": "'2019-12-19'"
      },
      {
        "name": "end",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "weekdays",
        "type": "array",
        "default": [
          0,
          1,
          2,
          3,
          4,
          5,
          6
        ]
      },
      {
        "name": "hideHeader",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "shortWeekdays",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "weekdayFormat",
        "type": "function",
        "default": "null"
      },
      {
        "name": "dayFormat",
        "type": "function",
        "default": "null"
      },
      {
        "name": "minWeeks",
        "type": [
          "any"
        ],
        "default": 1
      },
      {
        "name": "shortMonths",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "showMonthOnFirst",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "monthFormat",
        "type": "function",
        "default": "null"
      }
    ],
    "mixins": [
      "colorable",
      "localable",
      "mouse",
      "themeable",
      "times"
    ]
  },
  "v-calendar-monthly": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "locale",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "now",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "start",
        "type": "string",
        "default": "'2019-12-19'"
      },
      {
        "name": "end",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "weekdays",
        "type": "array",
        "default": [
          0,
          1,
          2,
          3,
          4,
          5,
          6
        ]
      },
      {
        "name": "hideHeader",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "shortWeekdays",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "weekdayFormat",
        "type": "function",
        "default": "null"
      },
      {
        "name": "dayFormat",
        "type": "function",
        "default": "null"
      },
      {
        "name": "minWeeks",
        "type": [
          "any"
        ],
        "default": 1
      },
      {
        "name": "shortMonths",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "showMonthOnFirst",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "monthFormat",
        "type": "function",
        "default": "null"
      }
    ],
    "mixins": [
      "colorable",
      "localable",
      "mouse",
      "themeable",
      "times"
    ]
  },
  "v-card": {
    "props": [
      {
        "name": "loading",
        "type": [
          "boolean",
          "string"
        ],
        "default": false
      },
      {
        "name": "loaderHeight",
        "type": [
          "number",
          "string"
        ],
        "default": 4
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "append",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "exact",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "exactActiveClass",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "link",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "href",
        "type": [
          "string",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "to",
        "type": [
          "string",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "nuxt",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "replace",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "ripple",
        "type": [
          "boolean",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "tag",
        "type": "string",
        "default": "'div'"
      },
      {
        "name": "target",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "elevation",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "tile",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "flat",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hover",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "img",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "raised",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "shaped",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "loadable",
      "routable",
      "v-sheet",
      "colorable",
      "elevatable",
      "measurable",
      "themeable"
    ],
    "events": [
      {
        "name": "click",
        "value": "void"
      }
    ],
    "slots": [
      {
        "name": "progress"
      },
      {
        "name": "default"
      }
    ]
  },
  "v-card-actions": {
    "props": [],
    "mixins": [],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-card-subtitle": {
    "props": [],
    "mixins": []
  },
  "v-card-text": {
    "props": [],
    "mixins": [],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-card-title": {
    "props": [],
    "mixins": [],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-carousel": {
    "props": [
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": "'v-window-item--active'"
      },
      {
        "name": "mandatory",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "max",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "continuous",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "nextIcon",
        "type": [
          "boolean",
          "string"
        ],
        "default": "$next"
      },
      {
        "name": "prevIcon",
        "type": [
          "boolean",
          "string"
        ],
        "default": "$prev"
      },
      {
        "name": "reverse",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "showArrows",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "showArrowsOnHover",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "touch",
        "type": "object",
        "default": "undefined"
      },
      {
        "name": "touchless",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "vertical",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "cycle",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "delimiterIcon",
        "type": "string",
        "default": "'$delimiter'"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": 500
      },
      {
        "name": "hideDelimiters",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideDelimiterBackground",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "interval",
        "type": [
          "number",
          "string"
        ],
        "default": 6000
      },
      {
        "name": "progress",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "progressColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "verticalDelimiters",
        "type": "string",
        "default": "undefined"
      }
    ],
    "mixins": [
      "proxyable",
      "themeable"
    ],
    "events": [
      {
        "name": "input",
        "value": "number"
      }
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-carousel-item": {
    "props": [
      {
        "name": "eager",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "reverseTransition",
        "type": [
          "boolean",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "transition",
        "type": [
          "boolean",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "append",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "exact",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "exactActiveClass",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "link",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "href",
        "type": [
          "string",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "to",
        "type": [
          "string",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "nuxt",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "replace",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "ripple",
        "type": [
          "boolean",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "tag",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "target",
        "type": "string",
        "default": "undefined"
      }
    ],
    "mixins": [
      "v-window-item",
      "bootable",
      "groupable",
      "routable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-checkbox": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "error",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "errorCount",
        "type": [
          "number",
          "string"
        ],
        "default": 1
      },
      {
        "name": "errorMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "messages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rules",
        "type": "array",
        "default": []
      },
      {
        "name": "success",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "successMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "validateOnBlur",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "appendIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "hideDetails",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hint",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "id",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "label",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loading",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "persistentHint",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "prependIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "ripple",
        "type": [
          "boolean",
          "object"
        ],
        "default": true
      },
      {
        "name": "valueComparator",
        "type": "function",
        "default": "null"
      },
      {
        "name": "inputValue",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "falseValue",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "trueValue",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "indeterminate",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "indeterminateIcon",
        "type": "string",
        "default": "'$checkboxIndeterminate'"
      },
      {
        "name": "offIcon",
        "type": "string",
        "default": "'$checkboxOff'"
      },
      {
        "name": "onIcon",
        "type": "string",
        "default": "'$checkboxOn'"
      }
    ],
    "mixins": [
      "v-input",
      "validatable",
      "colorable",
      "registrable-inject",
      "themeable",
      "rippleable",
      "comparable"
    ],
    "slots": [
      {
        "name": "append"
      },
      {
        "name": "default"
      },
      {
        "name": "prepend"
      },
      "label"
    ],
    "events": [
      {
        "name": "change",
        "value": "any"
      },
      {
        "name": "update:indeterminate",
        "value": "boolean"
      }
    ]
  },
  "v-simple-checkbox": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "ripple",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "value",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "indeterminate",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "indeterminateIcon",
        "type": "string",
        "default": "'$checkboxIndeterminate'"
      },
      {
        "name": "onIcon",
        "type": "string",
        "default": "'$checkboxOn'"
      },
      {
        "name": "offIcon",
        "type": "string",
        "default": "'$checkboxOff'"
      }
    ],
    "mixins": []
  },
  "v-chip": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "large",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "small",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "xLarge",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "xSmall",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": ""
      },
      {
        "name": "append",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "exact",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "exactActiveClass",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "link",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "href",
        "type": [
          "string",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "to",
        "type": [
          "string",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "nuxt",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "replace",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "ripple",
        "type": [
          "boolean",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "tag",
        "type": "string",
        "default": "'span'"
      },
      {
        "name": "target",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "inputValue",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "active",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "close",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "closeIcon",
        "type": "string",
        "default": "'$delete'"
      },
      {
        "name": "draggable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "filter",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "filterIcon",
        "type": "string",
        "default": "'$complete'"
      },
      {
        "name": "label",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "pill",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "textColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      }
    ],
    "mixins": [
      "colorable",
      "sizeable",
      "routable",
      "themeable",
      "groupable",
      "toggleable"
    ],
    "events": [
      {
        "name": "input",
        "value": "boolean"
      },
      {
        "name": "click",
        "value": "MouseEvent"
      },
      {
        "name": "click:close",
        "value": "void"
      },
      {
        "name": "update:active",
        "value": "boolean"
      }
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-chip-group": {
    "props": [
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": "'v-slide-item--active'"
      },
      {
        "name": "mandatory",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "max",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "centerActive",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "nextIcon",
        "type": "string",
        "default": "'$next'"
      },
      {
        "name": "mobileBreakPoint",
        "type": [
          "number",
          "string"
        ],
        "default": 1264
      },
      {
        "name": "prevIcon",
        "type": "string",
        "default": "'$prev'"
      },
      {
        "name": "showArrows",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "column",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "base-slide-group",
      "base-item-group",
      "proxyable",
      "themeable",
      "colorable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-color-picker": {
    "props": [
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "canvasHeight",
        "type": [
          "string",
          "number"
        ],
        "default": 150
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "dotSize",
        "type": [
          "number",
          "string"
        ],
        "default": 10
      },
      {
        "name": "flat",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideCanvas",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideInputs",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideModeSwitch",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "'rgba'"
      },
      {
        "name": "showSwatches",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "swatches",
        "type": "array",
        "default": "undefined"
      },
      {
        "name": "swatchesMaxHeight",
        "type": [
          "number",
          "string"
        ],
        "default": 150
      },
      {
        "name": "value",
        "type": [
          "object",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": 300
      }
    ],
    "mixins": [
      "themeable"
    ],
    "events": [
      {
        "name": "input",
        "value": "string | object"
      },
      {
        "name": "update:color",
        "value": {
          "alpha": "number",
          "hex": "string",
          "hexa": "string",
          "hsla": {
            "h": "number",
            "s": "number",
            "l": "number",
            "a": "number"
          },
          "hsva": {
            "h": "number",
            "s": "number",
            "v": "number",
            "a": "number"
          },
          "hue": "number",
          "rgba": {
            "r": "number",
            "g": "number",
            "b": "number",
            "a": "number"
          }
        }
      },
      {
        "name": "update:mode",
        "value": "string"
      }
    ]
  },
  "v-color-picker-swatches": {
    "props": [
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "swatches",
        "type": "array",
        "default": [
          [
            "#f44336",
            "#b71c1c",
            "#c62828",
            "#d32f2f",
            "#e53935",
            "#ef5350",
            "#e57373",
            "#ef9a9a",
            "#ffcdd2",
            "#ffebee"
          ],
          [
            "#e91e63",
            "#880e4f",
            "#ad1457",
            "#c2185b",
            "#d81b60",
            "#ec407a",
            "#f06292",
            "#f48fb1",
            "#f8bbd0",
            "#fce4ec"
          ],
          [
            "#9c27b0",
            "#4a148c",
            "#6a1b9a",
            "#7b1fa2",
            "#8e24aa",
            "#ab47bc",
            "#ba68c8",
            "#ce93d8",
            "#e1bee7",
            "#f3e5f5"
          ],
          [
            "#673ab7",
            "#311b92",
            "#4527a0",
            "#512da8",
            "#5e35b1",
            "#7e57c2",
            "#9575cd",
            "#b39ddb",
            "#d1c4e9",
            "#ede7f6"
          ],
          [
            "#3f51b5",
            "#1a237e",
            "#283593",
            "#303f9f",
            "#3949ab",
            "#5c6bc0",
            "#7986cb",
            "#9fa8da",
            "#c5cae9",
            "#e8eaf6"
          ],
          [
            "#2196f3",
            "#0d47a1",
            "#1565c0",
            "#1976d2",
            "#1e88e5",
            "#42a5f5",
            "#64b5f6",
            "#90caf9",
            "#bbdefb",
            "#e3f2fd"
          ],
          [
            "#03a9f4",
            "#01579b",
            "#0277bd",
            "#0288d1",
            "#039be5",
            "#29b6f6",
            "#4fc3f7",
            "#81d4fa",
            "#b3e5fc",
            "#e1f5fe"
          ],
          [
            "#00bcd4",
            "#006064",
            "#00838f",
            "#0097a7",
            "#00acc1",
            "#26c6da",
            "#4dd0e1",
            "#80deea",
            "#b2ebf2",
            "#e0f7fa"
          ],
          [
            "#009688",
            "#004d40",
            "#00695c",
            "#00796b",
            "#00897b",
            "#26a69a",
            "#4db6ac",
            "#80cbc4",
            "#b2dfdb",
            "#e0f2f1"
          ],
          [
            "#4caf50",
            "#1b5e20",
            "#2e7d32",
            "#388e3c",
            "#43a047",
            "#66bb6a",
            "#81c784",
            "#a5d6a7",
            "#c8e6c9",
            "#e8f5e9"
          ],
          [
            "#8bc34a",
            "#33691e",
            "#558b2f",
            "#689f38",
            "#7cb342",
            "#9ccc65",
            "#aed581",
            "#c5e1a5",
            "#dcedc8",
            "#f1f8e9"
          ],
          [
            "#cddc39",
            "#827717",
            "#9e9d24",
            "#afb42b",
            "#c0ca33",
            "#d4e157",
            "#dce775",
            "#e6ee9c",
            "#f0f4c3",
            "#f9fbe7"
          ],
          [
            "#ffeb3b",
            "#f57f17",
            "#f9a825",
            "#fbc02d",
            "#fdd835",
            "#ffee58",
            "#fff176",
            "#fff59d",
            "#fff9c4",
            "#fffde7"
          ],
          [
            "#ffc107",
            "#ff6f00",
            "#ff8f00",
            "#ffa000",
            "#ffb300",
            "#ffca28",
            "#ffd54f",
            "#ffe082",
            "#ffecb3",
            "#fff8e1"
          ],
          [
            "#ff9800",
            "#e65100",
            "#ef6c00",
            "#f57c00",
            "#fb8c00",
            "#ffa726",
            "#ffb74d",
            "#ffcc80",
            "#ffe0b2",
            "#fff3e0"
          ],
          [
            "#ff5722",
            "#bf360c",
            "#d84315",
            "#e64a19",
            "#f4511e",
            "#ff7043",
            "#ff8a65",
            "#ffab91",
            "#ffccbc",
            "#fbe9e7"
          ],
          [
            "#795548",
            "#3e2723",
            "#4e342e",
            "#5d4037",
            "#6d4c41",
            "#8d6e63",
            "#a1887f",
            "#bcaaa4",
            "#d7ccc8",
            "#efebe9"
          ],
          [
            "#607d8b",
            "#263238",
            "#37474f",
            "#455a64",
            "#546e7a",
            "#78909c",
            "#90a4ae",
            "#b0bec5",
            "#cfd8dc",
            "#eceff1"
          ],
          [
            "#9e9e9e",
            "#212121",
            "#424242",
            "#616161",
            "#757575",
            "#bdbdbd",
            "#e0e0e0",
            "#eeeeee",
            "#f5f5f5",
            "#fafafa"
          ],
          [
            "#000000",
            "#ffffff",
            "transparent"
          ]
        ]
      },
      {
        "name": "color",
        "type": "object",
        "default": "undefined"
      },
      {
        "name": "maxWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      }
    ],
    "mixins": [
      "themeable"
    ]
  },
  "v-color-picker-canvas": {
    "props": [
      {
        "name": "color",
        "type": "object",
        "default": {
          "alpha": 1,
          "hex": "#FF0000",
          "hexa": "#FF0000FF",
          "hsla": {
            "h": 0,
            "s": 1,
            "l": 0.5,
            "a": 1
          },
          "hsva": {
            "h": 0,
            "s": 1,
            "v": 1,
            "a": 1
          },
          "hue": 0,
          "rgba": {
            "r": 255,
            "g": 0,
            "b": 0,
            "a": 1
          }
        }
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "dotSize",
        "type": [
          "number",
          "string"
        ],
        "default": 10
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": 150
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": 300
      }
    ],
    "mixins": []
  },
  "v-content": {
    "props": [
      {
        "name": "tag",
        "type": "string",
        "default": "'main'"
      }
    ],
    "mixins": []
  },
  "v-combobox": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "error",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "errorCount",
        "type": [
          "number",
          "string"
        ],
        "default": 1
      },
      {
        "name": "errorMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "messages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rules",
        "type": "array",
        "default": []
      },
      {
        "name": "success",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "successMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "validateOnBlur",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "appendIcon",
        "type": "string",
        "default": "'$dropdown'"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "hideDetails",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hint",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "id",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "label",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loading",
        "type": [
          "boolean",
          "string"
        ],
        "default": false
      },
      {
        "name": "persistentHint",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "prependIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loaderHeight",
        "type": [
          "number",
          "string"
        ],
        "default": 2
      },
      {
        "name": "appendOuterIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "autofocus",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "clearable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "clearIcon",
        "type": "string",
        "default": "'$clear'"
      },
      {
        "name": "counter",
        "type": [
          "boolean",
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "filled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "flat",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fullWidth",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "placeholder",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "prefix",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "prependInnerIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "reverse",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "shaped",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "singleLine",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "solo",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "soloInverted",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "suffix",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "type",
        "type": "string",
        "default": "'text'"
      },
      {
        "name": "valueComparator",
        "type": "function",
        "default": "(a: any, b: any): boolean"
      },
      {
        "name": "noDataText",
        "type": "string",
        "default": "'$vuetify.noDataText'"
      },
      {
        "name": "attach",
        "type": [
          "any"
        ],
        "default": false
      },
      {
        "name": "cacheItems",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "chips",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "deletableChips",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "eager",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideSelected",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "items",
        "type": "array",
        "default": [],
        "example": {
          "text": "string | number | object",
          "value": "string | number | object"
        }
      },
      {
        "name": "itemColor",
        "type": "string",
        "default": "'primary'"
      },
      {
        "name": "itemDisabled",
        "type": [
          "string",
          "array",
          "function"
        ],
        "default": "disabled"
      },
      {
        "name": "itemText",
        "type": [
          "string",
          "array",
          "function"
        ],
        "default": "text"
      },
      {
        "name": "itemValue",
        "type": [
          "string",
          "array",
          "function"
        ],
        "default": "value"
      },
      {
        "name": "menuProps",
        "type": [
          "string",
          "array",
          "object"
        ],
        "default": "{\"closeOnClick\":false, \"closeOnContentClick\":false, \"openOnClick\":false, \"maxHeight\":300, \"offsetY\":true, \"offsetOverflow\":true, \"transition\":false}"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "openOnClear",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "returnObject",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "smallChips",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "allowOverflow",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "autoSelectFirst",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "filter",
        "type": "function",
        "default": "(item: object, queryText: string, itemText: string): boolean"
      },
      {
        "name": "hideNoData",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "noFilter",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "searchInput",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "delimiters",
        "type": "array",
        "default": []
      }
    ],
    "mixins": [
      "v-text-field",
      "v-input",
      "validatable",
      "colorable",
      "registrable-inject",
      "themeable",
      "loadable",
      "comparable",
      "filterable"
    ],
    "slots": [
      {
        "name": "append"
      },
      {
        "name": "default"
      },
      {
        "name": "prepend"
      },
      {
        "name": "append-outer"
      },
      {
        "name": "label"
      },
      {
        "name": "progress"
      },
      {
        "name": "prepend-inner"
      },
      {
        "name": "append-item"
      },
      {
        "name": "prepend-item"
      },
      {
        "name": "item",
        "props": {
          "parent": "VueComponent",
          "item": "object",
          "on": "object",
          "attrs": "object"
        }
      },
      {
        "name": "no-data"
      },
      {
        "name": "selection",
        "props": {
          "parent": "VueComponent",
          "item": "object",
          "index": "number",
          "select": "function",
          "selected": "boolean",
          "disabled": "boolean"
        }
      }
    ],
    "events": [
      {
        "name": "input",
        "value": "any"
      },
      {
        "name": "change",
        "value": "any"
      },
      {
        "name": "update:search-input",
        "value": "string"
      },
      {
        "name": "update:list-index",
        "value": "number"
      },
      {
        "name": "click:prepend",
        "value": "Event"
      },
      {
        "name": "click:append",
        "value": "Event"
      },
      {
        "name": "click:clear",
        "value": "Event"
      },
      {
        "name": "click:append-outer",
        "value": "Event"
      },
      {
        "name": "click:prepend-inner",
        "value": "Event"
      },
      {
        "name": "update:error",
        "value": "boolean"
      },
      {
        "name": "blur",
        "value": "boolean"
      },
      {
        "name": "focus",
        "value": "boolean"
      }
    ]
  },
  "v-counter": {
    "props": [
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "max",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      }
    ],
    "mixins": [
      "themeable"
    ]
  },
  "v-data": {
    "props": [
      {
        "name": "items",
        "type": "array",
        "default": [],
        "source": "v-data"
      },
      {
        "name": "options",
        "type": "object",
        "default": {},
        "source": "v-data"
      },
      {
        "name": "sortBy",
        "type": [
          "string",
          "array"
        ],
        "default": [],
        "source": "v-data"
      },
      {
        "name": "sortDesc",
        "type": [
          "boolean",
          "array"
        ],
        "default": [],
        "source": "v-data"
      },
      {
        "name": "customSort",
        "type": "function",
        "default": "(items: any[], sortBy: string[], sortDesc: boolean[], locale: string, customSorters?: Record<string, compareFn>) => any[]",
        "source": "v-data"
      },
      {
        "name": "mustSort",
        "type": "boolean",
        "default": "false",
        "source": "v-data"
      },
      {
        "name": "multiSort",
        "type": "boolean",
        "default": "false",
        "source": "v-data"
      },
      {
        "name": "page",
        "type": "number",
        "default": 1,
        "source": "v-data"
      },
      {
        "name": "itemsPerPage",
        "type": "number",
        "default": 10,
        "source": "v-data"
      },
      {
        "name": "groupBy",
        "type": [
          "string",
          "array"
        ],
        "default": [],
        "source": "v-data"
      },
      {
        "name": "groupDesc",
        "type": [
          "boolean",
          "array"
        ],
        "default": [],
        "source": "v-data"
      },
      {
        "name": "locale",
        "type": "string",
        "default": "'en-US'",
        "source": "v-data"
      },
      {
        "name": "disableSort",
        "type": "boolean",
        "default": "false",
        "source": "v-data"
      },
      {
        "name": "disablePagination",
        "type": "boolean",
        "default": "false",
        "source": "v-data"
      },
      {
        "name": "disableFiltering",
        "type": "boolean",
        "default": "false",
        "source": "v-data"
      },
      {
        "name": "search",
        "type": "string",
        "default": "undefined",
        "source": "v-data"
      },
      {
        "name": "customFilter",
        "type": "function",
        "default": "(items: any[], search: string) => any[]",
        "source": "v-data"
      },
      {
        "name": "serverItemsLength",
        "type": "number",
        "default": -1,
        "source": "v-data"
      },
      {
        "name": "itemKey",
        "source": "v-data"
      }
    ],
    "mixins": [],
    "events": [
      {
        "name": "current-items",
        "source": "v-data",
        "value": "any[]"
      },
      {
        "name": "page-count",
        "source": "v-data",
        "value": "number"
      },
      {
        "name": "pagination",
        "source": "v-data",
        "value": {
          "page": "number",
          "itemsPerPage": "number",
          "pageStart": "number",
          "pageStop": "number",
          "pageCount": "number",
          "itemsLength": "number"
        }
      },
      {
        "name": "update:options",
        "source": "v-data",
        "value": {
          "page": "number",
          "itemsPerPage": "number",
          "sortBy": "string[]",
          "sortDesc": "boolean[]",
          "groupBy": "string[]",
          "groupDesc": "boolean[]",
          "multiSort": "boolean",
          "mustSort": "boolean"
        }
      },
      {
        "name": "update:page",
        "source": "v-data",
        "value": "number"
      },
      {
        "name": "update:items-per-page",
        "source": "v-data",
        "value": "number"
      },
      {
        "name": "update:sort-by",
        "source": "v-data",
        "value": "string | string[]"
      },
      {
        "name": "update:sort-desc",
        "source": "v-data",
        "value": "boolean | boolean[]"
      },
      {
        "name": "update:group-by",
        "source": "v-data",
        "value": "string | string[]"
      },
      {
        "name": "update:group-desc",
        "source": "v-data",
        "value": "boolean | boolean[]"
      },
      {
        "name": "update:multi-sort",
        "source": "v-data",
        "value": "boolean"
      },
      {
        "name": "update:must-sort",
        "source": "v-data",
        "value": "boolean"
      }
    ],
    "slots": [
      {
        "name": "default",
        "props": {
          "items": "any[]",
          "pagination": {
            "page": "number",
            "itemsPerPage": "number",
            "pageStart": "number",
            "pageStop": "number",
            "pageCount": "number",
            "itemsLength": "number"
          },
          "options": {
            "page": "number",
            "itemsPerPage": "number",
            "sortBy": "string[]",
            "sortDesc": "boolean[]",
            "groupBy": "string[]",
            "groupDesc": "boolean[]",
            "multiSort": "boolean",
            "mustSort": "boolean"
          },
          "groupedItems": "Record<string, any[]>",
          "updateOptions": "(obj: any) => void",
          "sort": "(value: string) => void",
          "group": "(value: string) => void"
        }
      }
    ]
  },
  "v-data-iterator": {
    "props": [
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "items",
        "type": "array",
        "default": [],
        "source": "v-data"
      },
      {
        "name": "options",
        "type": "object",
        "default": {},
        "source": "v-data"
      },
      {
        "name": "sortBy",
        "type": [
          "string",
          "array"
        ],
        "default": [],
        "source": "v-data"
      },
      {
        "name": "sortDesc",
        "type": [
          "boolean",
          "array"
        ],
        "default": [],
        "source": "v-data"
      },
      {
        "name": "customSort",
        "type": "function",
        "default": "(items: any[], sortBy: string[], sortDesc: boolean[], locale: string, customSorters?: Record<string, compareFn>) => any[]",
        "source": "v-data"
      },
      {
        "name": "mustSort",
        "type": "boolean",
        "default": "false",
        "source": "v-data"
      },
      {
        "name": "multiSort",
        "type": "boolean",
        "default": "false",
        "source": "v-data"
      },
      {
        "name": "page",
        "type": "number",
        "default": 1,
        "source": "v-data"
      },
      {
        "name": "itemsPerPage",
        "type": "number",
        "default": 10,
        "source": "v-data"
      },
      {
        "name": "groupBy",
        "type": [
          "string",
          "array"
        ],
        "default": [],
        "source": "v-data"
      },
      {
        "name": "groupDesc",
        "type": [
          "boolean",
          "array"
        ],
        "default": [],
        "source": "v-data"
      },
      {
        "name": "locale",
        "type": "string",
        "default": "'en-US'",
        "source": "v-data"
      },
      {
        "name": "disableSort",
        "type": "boolean",
        "default": "false",
        "source": "v-data"
      },
      {
        "name": "disablePagination",
        "type": "boolean",
        "default": "false",
        "source": "v-data"
      },
      {
        "name": "disableFiltering",
        "type": "boolean",
        "default": "false",
        "source": "v-data"
      },
      {
        "name": "search",
        "type": "string",
        "default": "undefined",
        "source": "v-data"
      },
      {
        "name": "customFilter",
        "type": "function",
        "default": "(items: any[], search: string) => any[]",
        "source": "v-data"
      },
      {
        "name": "serverItemsLength",
        "type": "number",
        "default": -1,
        "source": "v-data"
      },
      {
        "name": "itemKey",
        "type": "string",
        "default": "'id'",
        "source": "v-data"
      },
      {
        "name": "value",
        "type": "array",
        "default": [],
        "source": "v-data-iterator"
      },
      {
        "name": "singleSelect",
        "type": "boolean",
        "default": "false",
        "source": "v-data-iterator"
      },
      {
        "name": "expanded",
        "type": "array",
        "default": [],
        "source": "v-data-iterator"
      },
      {
        "name": "singleExpand",
        "type": "boolean",
        "default": "false",
        "source": "v-data-iterator"
      },
      {
        "name": "loading",
        "type": [
          "boolean",
          "string"
        ],
        "default": "undefined",
        "source": "v-data-iterator"
      },
      {
        "name": "noResultsText",
        "type": "string",
        "default": "'$vuetify.dataIterator.noResultsText'",
        "source": "v-data-iterator"
      },
      {
        "name": "noDataText",
        "type": "string",
        "default": "'$vuetify.noDataText'",
        "source": "v-data-iterator"
      },
      {
        "name": "loadingText",
        "type": "string",
        "default": "'$vuetify.dataIterator.loadingText'",
        "source": "v-data-iterator"
      },
      {
        "name": "hideDefaultFooter",
        "type": "boolean",
        "default": "false",
        "source": "v-data-iterator"
      },
      {
        "name": "footerProps",
        "type": "object",
        "default": "undefined",
        "source": "v-data-iterator"
      }
    ],
    "mixins": [],
    "slots": [
      {
        "name": "loading",
        "source": "data-iterator"
      },
      {
        "name": "no-data",
        "source": "data-iterator"
      },
      {
        "name": "no-results",
        "source": "data-iterator"
      },
      {
        "name": "default",
        "props": {
          "items": "any[]",
          "pagination": {
            "page": "number",
            "itemsPerPage": "number",
            "pageStart": "number",
            "pageStop": "number",
            "pageCount": "number",
            "itemsLength": "number"
          },
          "options": {
            "page": "number",
            "itemsPerPage": "number",
            "sortBy": "string[]",
            "sortDesc": "boolean[]",
            "groupBy": "string[]",
            "groupDesc": "boolean[]",
            "multiSort": "boolean",
            "mustSort": "boolean"
          },
          "groupedItems": "Record<string, any[]>",
          "updateOptions": "(obj: any) => void",
          "sort": "(value: string) => void",
          "group": "(value: string) => void",
          "isSelected": "(item: any) => boolean",
          "select": "(item: any, value: boolean) => void",
          "isExpanded": "(item: any) => boolean",
          "expand": "(item: any, value: boolean) => void"
        },
        "source": "data-iterator"
      },
      {
        "name": "footer",
        "props": {
          "items": "any[]",
          "pagination": {
            "page": "number",
            "itemsPerPage": "number",
            "pageStart": "number",
            "pageStop": "number",
            "pageCount": "number",
            "itemsLength": "number"
          },
          "options": {
            "page": "number",
            "itemsPerPage": "number",
            "sortBy": "string[]",
            "sortDesc": "boolean[]",
            "groupBy": "string[]",
            "groupDesc": "boolean[]",
            "multiSort": "boolean",
            "mustSort": "boolean"
          },
          "groupedItems": "Record<string, any[]>",
          "updateOptions": "(obj: any) => void",
          "sort": "(value: string) => void",
          "group": "(value: string) => void"
        },
        "source": "data-iterator"
      },
      {
        "name": "footer.page-text",
        "props": {
          "pageStart": "number",
          "pageStop": "number",
          "itemsLength": "number"
        },
        "source": "data-iterator"
      },
      {
        "name": "header",
        "props": {
          "items": "any[]",
          "pagination": {
            "page": "number",
            "itemsPerPage": "number",
            "pageStart": "number",
            "pageStop": "number",
            "pageCount": "number",
            "itemsLength": "number"
          },
          "options": {
            "page": "number",
            "itemsPerPage": "number",
            "sortBy": "string[]",
            "sortDesc": "boolean[]",
            "groupBy": "string[]",
            "groupDesc": "boolean[]",
            "multiSort": "boolean",
            "mustSort": "boolean"
          },
          "groupedItems": "Record<string, any[]>",
          "updateOptions": "(obj: any) => void",
          "sort": "(value: string) => void",
          "group": "(value: string) => void"
        },
        "source": "data-iterator"
      },
      {
        "name": "item",
        "props": {
          "item": "any",
          "select": "(v: boolean) => void",
          "isSelected": "boolean",
          "expand": "(v: boolean) => void",
          "isExpanded": "boolean"
        },
        "source": "data-iterator"
      }
    ],
    "events": [
      {
        "name": "current-items",
        "source": "v-data",
        "value": "any[]"
      },
      {
        "name": "page-count",
        "source": "v-data",
        "value": "number"
      },
      {
        "name": "pagination",
        "source": "v-data",
        "value": {
          "page": "number",
          "itemsPerPage": "number",
          "pageStart": "number",
          "pageStop": "number",
          "pageCount": "number",
          "itemsLength": "number"
        }
      },
      {
        "name": "update:options",
        "source": "v-data",
        "value": {
          "page": "number",
          "itemsPerPage": "number",
          "sortBy": "string[]",
          "sortDesc": "boolean[]",
          "groupBy": "string[]",
          "groupDesc": "boolean[]",
          "multiSort": "boolean",
          "mustSort": "boolean"
        }
      },
      {
        "name": "update:page",
        "source": "v-data",
        "value": "number"
      },
      {
        "name": "update:items-per-page",
        "source": "v-data",
        "value": "number"
      },
      {
        "name": "update:sort-by",
        "source": "v-data",
        "value": "string | string[]"
      },
      {
        "name": "update:sort-desc",
        "source": "v-data",
        "value": "boolean | boolean[]"
      },
      {
        "name": "update:group-by",
        "source": "v-data",
        "value": "string | string[]"
      },
      {
        "name": "update:group-desc",
        "source": "v-data",
        "value": "boolean | boolean[]"
      },
      {
        "name": "update:multi-sort",
        "source": "v-data",
        "value": "boolean"
      },
      {
        "name": "update:must-sort",
        "source": "v-data",
        "value": "boolean"
      },
      {
        "name": "input",
        "source": "v-data-iterator",
        "value": "any[]"
      },
      {
        "name": "update:expanded",
        "source": "v-data-iterator",
        "value": "any[]"
      },
      {
        "name": "item-selected",
        "source": "v-data-iterator",
        "value": "{ item: any, value: boolean }"
      },
      {
        "name": "item-expanded",
        "source": "v-data-iterator",
        "value": "{ item: any, value: boolean }"
      },
      {
        "name": "toggle-select-all",
        "source": "v-data-iterator",
        "value": "{ value: boolean }"
      }
    ]
  },
  "v-data-footer": {
    "props": [
      {
        "name": "options",
        "type": "object",
        "default": "undefined",
        "example": {
          "page": "number",
          "itemsPerPage": "number",
          "sortBy": "string[]",
          "sortDesc": "boolean[]",
          "groupBy": "string[]",
          "groupDesc": "boolean[]",
          "multiSort": "boolean",
          "mustSort": "boolean"
        }
      },
      {
        "name": "pagination",
        "type": "object",
        "default": "undefined",
        "example": {
          "page": "number",
          "itemsPerPage": "number",
          "pageStart": "number",
          "pageStop": "number",
          "pageCount": "number",
          "itemsLength": "number"
        }
      },
      {
        "name": "itemsPerPageOptions",
        "type": "array",
        "default": [
          5,
          10,
          15,
          -1
        ]
      },
      {
        "name": "prevIcon",
        "type": "string",
        "default": "'$prev'"
      },
      {
        "name": "nextIcon",
        "type": "string",
        "default": "'$next'"
      },
      {
        "name": "firstIcon",
        "type": "string",
        "default": "'$first'"
      },
      {
        "name": "lastIcon",
        "type": "string",
        "default": "'$last'"
      },
      {
        "name": "itemsPerPageText",
        "type": "string",
        "default": "'$vuetify.dataFooter.itemsPerPageText'"
      },
      {
        "name": "itemsPerPageAllText",
        "type": "string",
        "default": "'$vuetify.dataFooter.itemsPerPageAll'"
      },
      {
        "name": "showFirstLastPage",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "showCurrentPage",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disablePagination",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disableItemsPerPage",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "pageText",
        "type": "string",
        "default": "'$vuetify.dataFooter.pageText'"
      }
    ],
    "mixins": [],
    "slots": [
      {
        "name": "pageText"
      },
      {
        "name": "page-text",
        "props": {
          "pageStart": "number",
          "pageStop": "number",
          "itemsLength": "number"
        }
      }
    ],
    "events": [
      {
        "name": "update:options",
        "value": {
          "page": "number",
          "itemsPerPage": "number",
          "sortBy": "string[]",
          "sortDesc": "boolean[]",
          "groupBy": "string[]",
          "groupDesc": "boolean[]",
          "multiSort": "boolean",
          "mustSort": "boolean"
        }
      }
    ]
  },
  "v-data-table": {
    "props": [
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "items",
        "type": "array",
        "default": [],
        "source": "v-data"
      },
      {
        "name": "options",
        "type": "object",
        "default": {},
        "source": "v-data"
      },
      {
        "name": "sortBy",
        "type": [
          "string",
          "array"
        ],
        "default": [],
        "source": "v-data"
      },
      {
        "name": "sortDesc",
        "type": [
          "boolean",
          "array"
        ],
        "default": [],
        "source": "v-data"
      },
      {
        "name": "customSort",
        "type": "function",
        "default": "(items: any[], sortBy: string[], sortDesc: boolean[], locale: string, customSorters?: Record<string, compareFn>) => any[]",
        "source": "v-data"
      },
      {
        "name": "mustSort",
        "type": "boolean",
        "default": "false",
        "source": "v-data"
      },
      {
        "name": "multiSort",
        "type": "boolean",
        "default": "false",
        "source": "v-data"
      },
      {
        "name": "page",
        "type": "number",
        "default": 1,
        "source": "v-data"
      },
      {
        "name": "itemsPerPage",
        "type": "number",
        "default": 10,
        "source": "v-data"
      },
      {
        "name": "groupBy",
        "type": [
          "string",
          "array"
        ],
        "default": [],
        "source": "v-data"
      },
      {
        "name": "groupDesc",
        "type": [
          "boolean",
          "array"
        ],
        "default": [],
        "source": "v-data"
      },
      {
        "name": "locale",
        "type": "string",
        "default": "'en-US'",
        "source": "v-data"
      },
      {
        "name": "disableSort",
        "type": "boolean",
        "default": "false",
        "source": "v-data"
      },
      {
        "name": "disablePagination",
        "type": "boolean",
        "default": "false",
        "source": "v-data"
      },
      {
        "name": "disableFiltering",
        "type": "boolean",
        "default": "false",
        "source": "v-data"
      },
      {
        "name": "search",
        "type": "string",
        "default": "undefined",
        "source": "v-data"
      },
      {
        "name": "customFilter",
        "type": "function",
        "default": "(value: any, search: string | null, item: any) => boolean",
        "source": "v-data"
      },
      {
        "name": "serverItemsLength",
        "type": "number",
        "default": -1,
        "source": "v-data"
      },
      {
        "name": "itemKey",
        "type": "string",
        "default": "'id'",
        "source": "v-data"
      },
      {
        "name": "value",
        "type": "array",
        "default": [],
        "source": "v-data-iterator"
      },
      {
        "name": "singleSelect",
        "type": "boolean",
        "default": "false",
        "source": "v-data-iterator"
      },
      {
        "name": "expanded",
        "type": "array",
        "default": [],
        "source": "v-data-iterator"
      },
      {
        "name": "singleExpand",
        "type": "boolean",
        "default": "false",
        "source": "v-data-iterator"
      },
      {
        "name": "loading",
        "type": [
          "boolean",
          "string"
        ],
        "default": "undefined",
        "source": "v-data-iterator"
      },
      {
        "name": "noResultsText",
        "type": "string",
        "default": "'$vuetify.dataIterator.noResultsText'",
        "source": "v-data-iterator"
      },
      {
        "name": "noDataText",
        "type": "string",
        "default": "'$vuetify.noDataText'",
        "source": "v-data-iterator"
      },
      {
        "name": "loadingText",
        "type": "string",
        "default": "'$vuetify.dataIterator.loadingText'",
        "source": "v-data-iterator"
      },
      {
        "name": "hideDefaultFooter",
        "type": "boolean",
        "default": "false",
        "source": "v-data-iterator"
      },
      {
        "name": "footerProps",
        "type": "object",
        "default": "undefined",
        "source": "v-data-iterator"
      },
      {
        "name": "headers",
        "type": "TableHeader[]",
        "default": "undefined",
        "example": {
          "text": "string",
          "value": "string",
          "align?": "'start' | 'center' | 'end'",
          "sortable?": "boolean",
          "filterable?": "boolean",
          "divider?": "boolean",
          "class?": "string | string[]",
          "width?": "string | number",
          "filter?": "(value: any, search: string, item: any) => boolean",
          "sort?": "(a: any, b: any) => number"
        }
      },
      {
        "name": "showSelect",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "showExpand",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "showGroupBy",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mobileBreakpoint",
        "type": "number",
        "default": 600
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "hideDefaultHeader",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "caption",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "headerProps",
        "type": "object",
        "default": "undefined"
      },
      {
        "name": "calculateWidths",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fixedHeader",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "headersLength",
        "type": "number",
        "default": "undefined"
      },
      {
        "name": "expandIcon",
        "type": "string",
        "default": "'$expand'"
      }
    ],
    "mixins": [],
    "slots": [
      {
        "name": "body.append",
        "props": {
          "items": "any[]",
          "pagination": {
            "page": "number",
            "itemsPerPage": "number",
            "pageStart": "number",
            "pageStop": "number",
            "pageCount": "number",
            "itemsLength": "number"
          },
          "options": {
            "page": "number",
            "itemsPerPage": "number",
            "sortBy": "string[]",
            "sortDesc": "boolean[]",
            "groupBy": "string[]",
            "groupDesc": "boolean[]",
            "multiSort": "boolean",
            "mustSort": "boolean"
          },
          "groupedItems": "Record<string, any[]>",
          "updateOptions": "(obj: any) => void",
          "sort": "(value: string) => void",
          "group": "(value: string) => void",
          "headers": "TableHeader[]",
          "isMobile": "boolean"
        }
      },
      {
        "name": "body.prepend",
        "props": {
          "items": "any[]",
          "pagination": {
            "page": "number",
            "itemsPerPage": "number",
            "pageStart": "number",
            "pageStop": "number",
            "pageCount": "number",
            "itemsLength": "number"
          },
          "options": {
            "page": "number",
            "itemsPerPage": "number",
            "sortBy": "string[]",
            "sortDesc": "boolean[]",
            "groupBy": "string[]",
            "groupDesc": "boolean[]",
            "multiSort": "boolean",
            "mustSort": "boolean"
          },
          "groupedItems": "Record<string, any[]>",
          "updateOptions": "(obj: any) => void",
          "sort": "(value: string) => void",
          "group": "(value: string) => void",
          "headers": "TableHeader[]",
          "isMobile": "boolean"
        }
      },
      {
        "name": "body",
        "props": {
          "items": "any[]",
          "pagination": {
            "page": "number",
            "itemsPerPage": "number",
            "pageStart": "number",
            "pageStop": "number",
            "pageCount": "number",
            "itemsLength": "number"
          },
          "options": {
            "page": "number",
            "itemsPerPage": "number",
            "sortBy": "string[]",
            "sortDesc": "boolean[]",
            "groupBy": "string[]",
            "groupDesc": "boolean[]",
            "multiSort": "boolean",
            "mustSort": "boolean"
          },
          "groupedItems": "Record<string, any[]>",
          "updateOptions": "(obj: any) => void",
          "sort": "(value: string) => void",
          "group": "(value: string) => void",
          "headers": "TableHeader[]",
          "isMobile": "boolean"
        }
      },
      {
        "name": "footer",
        "props": {
          "props": {
            "options": {
              "page": "number",
              "itemsPerPage": "number",
              "sortBy": "string[]",
              "sortDesc": "boolean[]",
              "groupBy": "string[]",
              "groupDesc": "boolean[]",
              "multiSort": "boolean",
              "mustSort": "boolean"
            },
            "pagination": {
              "page": "number",
              "itemsPerPage": "number",
              "pageStart": "number",
              "pageStop": "number",
              "pageCount": "number",
              "itemsLength": "number"
            },
            "itemsPerPageText": "string"
          },
          "on": "{}",
          "headers": "TableHeader[]",
          "widths": "[]"
        }
      },
      {
        "name": "footer.page-text",
        "props": {
          "pageStart": "number",
          "pageStop": "number",
          "itemsLength": "number"
        }
      },
      {
        "name": "header",
        "props": {
          "props": {
            "headers": "TableHeader[]",
            "options": {
              "page": "number",
              "itemsPerPage": "number",
              "sortBy": "string[]",
              "sortDesc": "boolean[]",
              "groupBy": "string[]",
              "groupDesc": "boolean[]",
              "multiSort": "boolean",
              "mustSort": "boolean"
            },
            "mobile": "boolean",
            "showGroupBy": "boolean",
            "someItems": "boolean",
            "everyItem": "boolean"
          },
          "on": {
            "sort": "(value: string) => void",
            "group": "(value: string) => void",
            "toggle-select-all": "(value: boolean) => void"
          }
        }
      },
      {
        "name": "header.data-table-select",
        "props": {
          "props": {
            "value": "boolean",
            "indeterminate": "boolean"
          },
          "on": {
            "input": "(value: boolean) => void"
          }
        }
      },
      {
        "name": "header.<name>",
        "props": {
          "header": "TableHeader"
        }
      },
      {
        "name": "top",
        "props": {
          "items": "any[]",
          "pagination": {
            "page": "number",
            "itemsPerPage": "number",
            "pageStart": "number",
            "pageStop": "number",
            "pageCount": "number",
            "itemsLength": "number"
          },
          "options": {
            "page": "number",
            "itemsPerPage": "number",
            "sortBy": "string[]",
            "sortDesc": "boolean[]",
            "groupBy": "string[]",
            "groupDesc": "boolean[]",
            "multiSort": "boolean",
            "mustSort": "boolean"
          },
          "groupedItems": "Record<string, any[]>",
          "updateOptions": "(obj: any) => void",
          "sort": "(value: string) => void",
          "group": "(value: string) => void"
        }
      },
      {
        "name": "progress",
        "props": {
          "items": "any[]",
          "pagination": {
            "page": "number",
            "itemsPerPage": "number",
            "pageStart": "number",
            "pageStop": "number",
            "pageCount": "number",
            "itemsLength": "number"
          },
          "options": {
            "page": "number",
            "itemsPerPage": "number",
            "sortBy": "string[]",
            "sortDesc": "boolean[]",
            "groupBy": "string[]",
            "groupDesc": "boolean[]",
            "multiSort": "boolean",
            "mustSort": "boolean"
          },
          "groupedItems": "Record<string, any[]>",
          "updateOptions": "(obj: any) => void",
          "sort": "(value: string) => void",
          "group": "(value: string) => void"
        }
      },
      {
        "name": "group",
        "props": {
          "items": "any[]",
          "pagination": {
            "page": "number",
            "itemsPerPage": "number",
            "pageStart": "number",
            "pageStop": "number",
            "pageCount": "number",
            "itemsLength": "number"
          },
          "options": {
            "page": "number",
            "itemsPerPage": "number",
            "sortBy": "string[]",
            "sortDesc": "boolean[]",
            "groupBy": "string[]",
            "groupDesc": "boolean[]",
            "multiSort": "boolean",
            "mustSort": "boolean"
          },
          "groupedItems": "Record<string, any[]>",
          "updateOptions": "(obj: any) => void",
          "sort": "(value: string) => void",
          "group": "(value: string) => void"
        }
      },
      {
        "name": "group.header",
        "props": {
          "group": "(value: string) => void",
          "groupedBy": "string[]",
          "items": "any[]",
          "headers": "TableHeader[]",
          "toggle": "() => void",
          "remove": "() => void"
        }
      },
      {
        "name": "group.summary",
        "props": {
          "items": "any[]",
          "pagination": {
            "page": "number",
            "itemsPerPage": "number",
            "pageStart": "number",
            "pageStop": "number",
            "pageCount": "number",
            "itemsLength": "number"
          },
          "options": {
            "page": "number",
            "itemsPerPage": "number",
            "sortBy": "string[]",
            "sortDesc": "boolean[]",
            "groupBy": "string[]",
            "groupDesc": "boolean[]",
            "multiSort": "boolean",
            "mustSort": "boolean"
          },
          "groupedItems": "Record<string, any[]>",
          "updateOptions": "(obj: any) => void",
          "sort": "(value: string) => void",
          "group": "(value: string) => void"
        }
      },
      {
        "name": "item",
        "props": {
          "item": "any",
          "select": "(v: boolean) => void",
          "isSelected": "boolean",
          "expand": "(v: boolean) => void",
          "isExpanded": "boolean",
          "headers": "TableHeader[]",
          "index": "number"
        }
      },
      {
        "name": "item.data-table-select",
        "props": {
          "item": "any",
          "select": "(v: boolean) => void",
          "isSelected": "boolean",
          "expand": "(v: boolean) => void",
          "isExpanded": "boolean",
          "headers": "TableHeader[]"
        }
      },
      {
        "name": "item.data-table-expand",
        "props": {
          "item": "any",
          "select": "(v: boolean) => void",
          "isSelected": "boolean",
          "expand": "(v: boolean) => void",
          "isExpanded": "boolean",
          "headers": "TableHeader[]"
        }
      },
      {
        "name": "item.<name>",
        "props": {
          "item": "any",
          "header": "TableHeader",
          "value": "any"
        }
      },
      {
        "name": "expanded-item",
        "props": {
          "item": "any",
          "headers": "TableHeader[]"
        }
      },
      {
        "name": "loading",
        "source": "data-iterator"
      },
      {
        "name": "no-data",
        "source": "data-iterator"
      },
      {
        "name": "no-results",
        "source": "data-iterator"
      }
    ],
    "events": [
      {
        "name": "click:row",
        "source": "v-data-table",
        "value": "any"
      },
      {
        "name": "current-items",
        "source": "v-data",
        "value": "any[]"
      },
      {
        "name": "page-count",
        "source": "v-data",
        "value": "number"
      },
      {
        "name": "pagination",
        "source": "v-data",
        "value": {
          "page": "number",
          "itemsPerPage": "number",
          "pageStart": "number",
          "pageStop": "number",
          "pageCount": "number",
          "itemsLength": "number"
        }
      },
      {
        "name": "update:options",
        "source": "v-data",
        "value": {
          "page": "number",
          "itemsPerPage": "number",
          "sortBy": "string[]",
          "sortDesc": "boolean[]",
          "groupBy": "string[]",
          "groupDesc": "boolean[]",
          "multiSort": "boolean",
          "mustSort": "boolean"
        }
      },
      {
        "name": "update:page",
        "source": "v-data",
        "value": "number"
      },
      {
        "name": "update:items-per-page",
        "source": "v-data",
        "value": "number"
      },
      {
        "name": "update:sort-by",
        "source": "v-data",
        "value": "string | string[]"
      },
      {
        "name": "update:sort-desc",
        "source": "v-data",
        "value": "boolean | boolean[]"
      },
      {
        "name": "update:group-by",
        "source": "v-data",
        "value": "string | string[]"
      },
      {
        "name": "update:group-desc",
        "source": "v-data",
        "value": "boolean | boolean[]"
      },
      {
        "name": "update:multi-sort",
        "source": "v-data",
        "value": "boolean"
      },
      {
        "name": "update:must-sort",
        "source": "v-data",
        "value": "boolean"
      },
      {
        "name": "input",
        "source": "v-data-iterator",
        "value": "any[]"
      },
      {
        "name": "update:expanded",
        "source": "v-data-iterator",
        "value": "any[]"
      },
      {
        "name": "item-selected",
        "source": "v-data-iterator",
        "value": "{ item: any, value: boolean }"
      },
      {
        "name": "item-expanded",
        "source": "v-data-iterator",
        "value": "{ item: any, value: boolean }"
      },
      {
        "name": "toggle-select-all",
        "source": "v-data-iterator",
        "value": "{ value: boolean }"
      }
    ]
  },
  "v-edit-dialog": {
    "props": [
      {
        "name": "returnValue",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "cancelText",
        "type": [
          "any"
        ],
        "default": "Cancel"
      },
      {
        "name": "large",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "eager",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "persistent",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "saveText",
        "type": [
          "any"
        ],
        "default": "Save"
      },
      {
        "name": "transition",
        "type": "string",
        "default": "'slide-x-reverse-transition'"
      }
    ],
    "mixins": [
      "returnable",
      "themeable"
    ],
    "slots": [
      {
        "name": "input"
      },
      {
        "name": "default"
      }
    ],
    "events": [
      {
        "name": "cancel",
        "value": "void"
      },
      {
        "name": "close",
        "value": "void"
      },
      {
        "name": "open",
        "value": "void"
      },
      {
        "name": "save",
        "value": "void"
      }
    ]
  },
  "v-table-overflow": {
    "props": [],
    "mixins": []
  },
  "v-data-table-header": {
    "props": [
      {
        "name": "mobile",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": []
  },
  "v-simple-table": {
    "props": [
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fixedHeader",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      }
    ],
    "mixins": [
      "themeable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-virtual-table": {
    "props": [
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fixedHeader",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "chunkSize",
        "type": "number",
        "default": 25
      },
      {
        "name": "headerHeight",
        "type": "number",
        "default": 48
      },
      {
        "name": "items",
        "type": "array",
        "default": []
      },
      {
        "name": "rowHeight",
        "type": "number",
        "default": 48
      }
    ],
    "mixins": [
      "v-simple-table",
      "themeable"
    ]
  },
  "v-date-picker": {
    "props": [
      {
        "name": "locale",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fullWidth",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "headerColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "landscape",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "noTitle",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": 290
      },
      {
        "name": "allowedDates",
        "type": "function",
        "default": "null"
      },
      {
        "name": "dayFormat",
        "type": "function",
        "default": "null"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "events",
        "type": [
          "array",
          "function",
          "object"
        ],
        "default": null
      },
      {
        "name": "eventColor",
        "type": [
          "array",
          "function",
          "object",
          "string"
        ],
        "default": "warning"
      },
      {
        "name": "firstDayOfWeek",
        "type": [
          "string",
          "number"
        ],
        "default": 0
      },
      {
        "name": "headerDateFormat",
        "type": "function",
        "default": "null"
      },
      {
        "name": "max",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "min",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "monthFormat",
        "type": "function",
        "default": "null"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "nextIcon",
        "type": "string",
        "default": "'$next'"
      },
      {
        "name": "pickerDate",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "prevIcon",
        "type": "string",
        "default": "'$prev'"
      },
      {
        "name": "range",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "reactive",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "showCurrent",
        "type": [
          "boolean",
          "string"
        ],
        "default": true
      },
      {
        "name": "selectedItemsText",
        "type": "string",
        "default": "'$vuetify.datePicker.itemsSelected'"
      },
      {
        "name": "showWeek",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "titleDateFormat",
        "type": "function",
        "default": "null"
      },
      {
        "name": "type",
        "type": "string",
        "default": "'date'"
      },
      {
        "name": "value",
        "type": [
          "array",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "weekdayFormat",
        "type": "function",
        "default": "null"
      },
      {
        "name": "yearFormat",
        "type": "function",
        "default": "null"
      },
      {
        "name": "yearIcon",
        "type": "string",
        "default": "undefined"
      }
    ],
    "mixins": [
      "localable",
      "picker",
      "colorable",
      "themeable"
    ],
    "events": [
      {
        "name": "input",
        "value": "string"
      },
      {
        "name": "change",
        "value": "string"
      },
      {
        "name": "update:picker-date",
        "value": "string"
      },
      {
        "name": "click:date",
        "value": "string"
      },
      {
        "name": "click:month",
        "value": "string"
      },
      {
        "name": "dblclick:date",
        "value": "string"
      },
      {
        "name": "dblclick:month",
        "value": "string"
      }
    ]
  },
  "v-date-picker-title": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "date",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "selectingYear",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "year",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "yearIcon",
        "type": "string",
        "default": "undefined"
      }
    ],
    "mixins": [
      "colorable",
      "colorable"
    ]
  },
  "v-date-picker-header": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "locale",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "format",
        "type": "function",
        "default": "null"
      },
      {
        "name": "min",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "max",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "nextIcon",
        "type": "string",
        "default": "'$next'"
      },
      {
        "name": "prevIcon",
        "type": "string",
        "default": "'$prev'"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      }
    ],
    "mixins": [
      "colorable",
      "localable",
      "themeable"
    ]
  },
  "v-date-picker-date-table": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "locale",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "allowedDates",
        "type": "function",
        "default": "null"
      },
      {
        "name": "current",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "format",
        "type": "function",
        "default": "null"
      },
      {
        "name": "events",
        "type": [
          "array",
          "function",
          "object"
        ],
        "default": null
      },
      {
        "name": "eventColor",
        "type": [
          "array",
          "function",
          "object",
          "string"
        ],
        "default": "warning"
      },
      {
        "name": "min",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "max",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "range",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "tableDate",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "value",
        "type": [
          "string",
          "array"
        ],
        "default": "undefined"
      },
      {
        "name": "firstDayOfWeek",
        "type": [
          "string",
          "number"
        ],
        "default": 0
      },
      {
        "name": "showWeek",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "weekdayFormat",
        "type": "function",
        "default": "null"
      }
    ],
    "mixins": [
      "themeable",
      "colorable",
      "localable",
      "themeable"
    ]
  },
  "v-date-picker-month-table": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "locale",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "allowedDates",
        "type": "function",
        "default": "null"
      },
      {
        "name": "current",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "format",
        "type": "function",
        "default": "null"
      },
      {
        "name": "events",
        "type": [
          "array",
          "function",
          "object"
        ],
        "default": null
      },
      {
        "name": "eventColor",
        "type": [
          "array",
          "function",
          "object",
          "string"
        ],
        "default": "warning"
      },
      {
        "name": "min",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "max",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "range",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "tableDate",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "value",
        "type": [
          "string",
          "array"
        ],
        "default": "undefined"
      }
    ],
    "mixins": [
      "themeable",
      "colorable",
      "localable",
      "themeable"
    ]
  },
  "v-date-picker-years": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "locale",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "format",
        "type": "function",
        "default": "null"
      },
      {
        "name": "min",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "max",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      }
    ],
    "mixins": [
      "colorable",
      "localable"
    ]
  },
  "v-dialog": {
    "props": [
      {
        "name": "openDelay",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "closeDelay",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "activator",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "internalActivator",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "openOnHover",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "eager",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "attach",
        "type": [
          "any"
        ],
        "default": false
      },
      {
        "name": "contentClass",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "hideOverlay",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "overlayColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "overlayOpacity",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "returnValue",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fullscreen",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "maxWidth",
        "type": [
          "string",
          "number"
        ],
        "default": "none"
      },
      {
        "name": "noClickAnimation",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'center center'"
      },
      {
        "name": "persistent",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "retainFocus",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "transition",
        "type": [
          "string",
          "boolean"
        ],
        "default": "dialog-transition"
      },
      {
        "name": "width",
        "type": [
          "string",
          "number"
        ],
        "default": "auto"
      }
    ],
    "mixins": [
      "activatable",
      "delayable",
      "toggleable",
      "dependent",
      "detachable",
      "bootable",
      "overlayable",
      "returnable",
      "stackable",
      "toggleable"
    ],
    "slots": [
      {
        "name": "activator",
        "props": {
          "on": "{ [eventName]: eventHandler }",
          "value": "boolean"
        }
      },
      {
        "name": "default"
      }
    ],
    "events": [
      {
        "name": "click:outside",
        "value": "void"
      },
      {
        "name": "keydown",
        "value": "KeyboardEvent"
      }
    ]
  },
  "v-divider": {
    "props": [
      {
        "name": "dark",
        "type": "boolean",
        "default": "false",
        "source": "themeable"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false",
        "source": "themeable"
      },
      {
        "name": "inset",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "vertical",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": []
  },
  "v-expansion-panels": {
    "props": [
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": "'v-item--active'"
      },
      {
        "name": "mandatory",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "max",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "accordion",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "focusable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "inset",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "popout",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "proxyable",
      "themeable"
    ]
  },
  "v-expansion-panel": {
    "props": [
      {
        "name": "activeClass",
        "type": "string"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "groupable",
      "registrable-provide"
    ],
    "events": [
      {
        "name": "change",
        "value": "void"
      },
      {
        "name": "click",
        "value": "MouseEvent"
      }
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-expansion-panel-header": {
    "props": [
      {
        "name": "disableIconRotate",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "expandIcon",
        "type": "string",
        "default": "'$expand'"
      },
      {
        "name": "hideActions",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "ripple",
        "type": [
          "boolean",
          "object"
        ],
        "default": false
      }
    ],
    "mixins": [
      "registrable-inject"
    ],
    "slots": [
      {
        "name": "actions"
      },
      {
        "name": "default",
        "props": {
          "open": "boolean"
        }
      }
    ],
    "events": [
      {
        "name": "click",
        "value": "MouseEvent"
      }
    ]
  },
  "v-expansion-panel-content": {
    "props": [
      {
        "name": "eager",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "bootable",
      "registrable-inject"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-file-input": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "error",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "errorCount",
        "type": [
          "number",
          "string"
        ],
        "default": 1
      },
      {
        "name": "errorMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "messages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rules",
        "type": "array",
        "default": []
      },
      {
        "name": "success",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "successMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "validateOnBlur",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": []
      },
      {
        "name": "appendIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "hideDetails",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hint",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "id",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "label",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loading",
        "type": [
          "boolean",
          "string"
        ],
        "default": false
      },
      {
        "name": "persistentHint",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "prependIcon",
        "type": "string",
        "default": "'$file'"
      },
      {
        "name": "loaderHeight",
        "type": [
          "number",
          "string"
        ],
        "default": 2
      },
      {
        "name": "appendOuterIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "autofocus",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "clearable",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "clearIcon",
        "type": "string",
        "default": "'$clear'"
      },
      {
        "name": "counter",
        "type": [
          "boolean",
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "filled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "flat",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fullWidth",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "placeholder",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "prefix",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "prependInnerIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "reverse",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "shaped",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "singleLine",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "solo",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "soloInverted",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "suffix",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "type",
        "type": "string",
        "default": "'file'"
      },
      {
        "name": "chips",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "counterSizeString",
        "type": "string",
        "default": "'$vuetify.fileInput.counterSize'"
      },
      {
        "name": "counterString",
        "type": "string",
        "default": "'$vuetify.fileInput.counter'"
      },
      {
        "name": "showSize",
        "type": [
          "boolean",
          "number"
        ],
        "default": false
      },
      {
        "name": "smallChips",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "truncateLength",
        "type": [
          "number",
          "string"
        ],
        "default": 22
      },
      {
        "name": "multiple",
        "type": "boolean",
        "default": "false",
        "source": null
      }
    ],
    "mixins": [
      "v-input",
      "validatable",
      "colorable",
      "registrable-inject",
      "themeable",
      "loadable"
    ],
    "slots": [
      {
        "name": "selection",
        "props": {
          "file": "File",
          "index": "number",
          "multiple": "boolean",
          "text": "string"
        }
      }
    ],
    "events": [
      {
        "name": "change",
        "value": "File[]"
      }
    ]
  },
  "v-footer": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "elevation",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "auto"
      },
      {
        "name": "maxHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "tag",
        "type": "string",
        "default": "'div'"
      },
      {
        "name": "tile",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "absolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fixed",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "app",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "inset",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "padless",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "v-sheet",
      "colorable",
      "elevatable",
      "measurable",
      "themeable",
      "applicationable",
      "positionable",
      "ssr-bootable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-form": {
    "props": [
      {
        "name": "lazyValidation",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "registrable-provide"
    ],
    "functions": [
      {
        "name": "reset",
        "signature": "(): void"
      },
      {
        "name": "resetValidation",
        "signature": "(): void"
      },
      {
        "name": "validate",
        "signature": "(): boolean"
      }
    ],
    "events": [
      {
        "name": "input",
        "value": "boolean"
      },
      {
        "name": "submit",
        "value": "event"
      }
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-container": {
    "props": [
      {
        "name": "id",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "tag",
        "type": "string",
        "default": "'div'"
      },
      {
        "name": "fluid",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-col": {
    "props": [
      {
        "name": "cols",
        "type": [
          "boolean",
          "string",
          "number"
        ],
        "default": false
      },
      {
        "name": "sm",
        "type": [
          "boolean",
          "string",
          "number"
        ],
        "default": false
      },
      {
        "name": "md",
        "type": [
          "boolean",
          "string",
          "number"
        ],
        "default": false
      },
      {
        "name": "lg",
        "type": [
          "boolean",
          "string",
          "number"
        ],
        "default": false
      },
      {
        "name": "xl",
        "type": [
          "boolean",
          "string",
          "number"
        ],
        "default": false
      },
      {
        "name": "offset",
        "type": [
          "string",
          "number"
        ],
        "default": "undefined"
      },
      {
        "name": "offsetSm",
        "type": [
          "string",
          "number"
        ],
        "default": "undefined"
      },
      {
        "name": "offsetMd",
        "type": [
          "string",
          "number"
        ],
        "default": "undefined"
      },
      {
        "name": "offsetLg",
        "type": [
          "string",
          "number"
        ],
        "default": "undefined"
      },
      {
        "name": "offsetXl",
        "type": [
          "string",
          "number"
        ],
        "default": "undefined"
      },
      {
        "name": "order",
        "type": [
          "string",
          "number"
        ],
        "default": "undefined"
      },
      {
        "name": "orderSm",
        "type": [
          "string",
          "number"
        ],
        "default": "undefined"
      },
      {
        "name": "orderMd",
        "type": [
          "string",
          "number"
        ],
        "default": "undefined"
      },
      {
        "name": "orderLg",
        "type": [
          "string",
          "number"
        ],
        "default": "undefined"
      },
      {
        "name": "orderXl",
        "type": [
          "string",
          "number"
        ],
        "default": "undefined"
      },
      {
        "name": "alignSelf",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "justifySelf",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "tag",
        "type": "string",
        "default": "'div'"
      }
    ],
    "mixins": [],
    "slots": [
      "default"
    ]
  },
  "v-row": {
    "props": [
      {
        "name": "tag",
        "type": "string",
        "default": "'div'"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "noGutters",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "align",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "alignSm",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "alignMd",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "alignLg",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "alignXl",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "justify",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "justifySm",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "justifyMd",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "justifyLg",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "justifyXl",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "alignContent",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "alignContentSm",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "alignContentMd",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "alignContentLg",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "alignContentXl",
        "type": "string",
        "default": "undefined"
      }
    ],
    "mixins": [],
    "slots": [
      "default"
    ]
  },
  "v-spacer": {
    "props": [],
    "mixins": [],
    "slots": [
      "default"
    ]
  },
  "v-layout": {
    "props": [
      {
        "name": "id",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "tag",
        "type": "String",
        "default": "div",
        "source": null
      },
      {
        "name": "row",
        "type": "boolean",
        "default": "true",
        "source": null
      },
      {
        "name": "column",
        "type": "boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "reverse",
        "type": "boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "wrap",
        "type": "boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "alignBaseline",
        "type": "Boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "alignCenter",
        "type": "Boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "alignContentCenter",
        "type": "Boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "alignContentEnd",
        "type": "Boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "alignContentSpaceAround",
        "type": "Boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "alignContentSpaceBetween",
        "type": "Boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "alignContentStart",
        "type": "Boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "alignEnd",
        "type": "Boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "alignStart",
        "type": "Boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "d-{type}",
        "type": "Boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "fillHeight",
        "type": "Boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "justifyCenter",
        "type": "Boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "justifyEnd",
        "type": "Boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "justifySpaceAround",
        "type": "Boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "justifySpaceBetween",
        "type": "Boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "justifyStart",
        "type": "Boolean",
        "default": "false",
        "source": null
      }
    ],
    "mixins": [],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-flex": {
    "props": [
      {
        "name": "id",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "tag",
        "type": "string",
        "default": "'div'"
      },
      {
        "name": "offset-(size)(0-12)",
        "type": "boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "order-(size)(1-12)",
        "type": "boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "(size)(1-12)",
        "type": "boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "alignSelfStart",
        "type": "boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "alignSelfEnd",
        "type": "boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "alignSelfCenter",
        "type": "boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "alignSelfBaseline",
        "type": "boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "grow",
        "type": "boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "shrink",
        "type": "boolean",
        "default": "false",
        "source": null
      }
    ],
    "mixins": [],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-hover": {
    "props": [
      {
        "name": "openDelay",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "closeDelay",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "value",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "delayable",
      "toggleable"
    ],
    "slots": [
      {
        "name": "default",
        "props": {
          "hover": "boolean"
        }
      }
    ]
  },
  "v-icon": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "large",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "small",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "xLarge",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "xSmall",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false",
        "source": null
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "left",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "right",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "size",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "tag",
        "type": "string",
        "default": "'i'"
      }
    ],
    "mixins": [
      "colorable",
      "sizeable",
      "themeable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-img": {
    "props": [
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "aspectRatio",
        "type": [
          "string",
          "number"
        ],
        "default": "undefined"
      },
      {
        "name": "alt",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "contain",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "eager",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "gradient",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "lazySrc",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "options",
        "type": "object",
        "default": {}
      },
      {
        "name": "position",
        "type": "string",
        "default": "'center center'"
      },
      {
        "name": "sizes",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "src",
        "type": [
          "string",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "srcset",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "transition",
        "type": [
          "boolean",
          "string"
        ],
        "default": "fade-transition"
      }
    ],
    "mixins": [
      "measurable"
    ],
    "slots": [
      {
        "name": "placeholder"
      },
      {
        "name": "default"
      }
    ],
    "events": [
      {
        "name": "error",
        "value": "object | string"
      },
      {
        "name": "load",
        "value": "object | string"
      }
    ]
  },
  "v-input": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "error",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "errorCount",
        "type": [
          "number",
          "string"
        ],
        "default": 1
      },
      {
        "name": "errorMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "messages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rules",
        "type": "array",
        "default": []
      },
      {
        "name": "success",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "successMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "validateOnBlur",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "appendIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "hideDetails",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hint",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "id",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "label",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loading",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "persistentHint",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "prependIcon",
        "type": "string",
        "default": "undefined"
      }
    ],
    "mixins": [
      "validatable",
      "colorable",
      "registrable-inject",
      "themeable"
    ],
    "events": [
      {
        "name": "click:prepend",
        "value": "Event"
      },
      {
        "name": "click:append",
        "value": "Event"
      },
      {
        "name": "click",
        "value": "MouseEvent"
      },
      {
        "name": "mousedown",
        "value": "MouseEvent"
      },
      {
        "name": "mouseup",
        "value": "MouseEvent"
      }
    ],
    "slots": [
      {
        "name": "append"
      },
      {
        "name": "default"
      },
      {
        "name": "prepend"
      },
      "label"
    ]
  },
  "v-item": {
    "props": [
      {
        "name": "activeClass",
        "type": "string"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "groupable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-item-group": {
    "props": [
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": "'v-item--active'"
      },
      {
        "name": "mandatory",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "max",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "proxyable",
      "themeable"
    ]
  },
  "v-label": {
    "props": [
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "absolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "color",
        "type": "string",
        "default": "'primary'"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "focused",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "for",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "left",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "right",
        "type": [
          "number",
          "string"
        ],
        "default": "auto"
      },
      {
        "name": "value",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "themeable"
    ]
  },
  "v-lazy": {
    "props": [
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "minHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "options",
        "type": "object",
        "default": {}
      },
      {
        "name": "transition",
        "type": "string",
        "default": "'fade-transition'"
      }
    ],
    "mixins": [
      "toggleable"
    ],
    "slots": [
      "default"
    ]
  },
  "v-list-item-action-text": {
    "props": [],
    "mixins": [],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-list-item-content": {
    "props": [],
    "mixins": [],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-list-item-title": {
    "props": [],
    "mixins": [],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-list-item-subtitle": {
    "props": [],
    "mixins": [],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-list": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "elevation",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "tag",
        "type": "string",
        "default": "'div'"
      },
      {
        "name": "tile",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "expand",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "flat",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "nav",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "shaped",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "subheader",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "threeLine",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "twoLine",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "colorable",
      "elevatable",
      "measurable",
      "themeable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-list-group": {
    "props": [
      {
        "name": "eager",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "color",
        "type": "string",
        "default": "'primary'"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "appendIcon",
        "type": "string",
        "default": "'$expand'"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "group",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "noAction",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "prependIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "ripple",
        "type": [
          "boolean",
          "object"
        ],
        "default": true
      },
      {
        "name": "subGroup",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "bootable",
      "colorable",
      "registrable-inject",
      "toggleable"
    ],
    "slots": [
      {
        "name": "activator"
      },
      {
        "name": "appendIcon"
      },
      {
        "name": "prependIcon"
      },
      {
        "name": "default"
      }
    ],
    "events": [
      {
        "name": "click",
        "value": "MouseEvent"
      }
    ]
  },
  "v-list-item": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": ""
      },
      {
        "name": "append",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "exact",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "exactActiveClass",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "link",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "href",
        "type": [
          "string",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "to",
        "type": [
          "string",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "nuxt",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "replace",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "ripple",
        "type": [
          "boolean",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "tag",
        "type": "string",
        "default": "'div'"
      },
      {
        "name": "target",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "inputValue",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "inactive",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "selectable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "threeLine",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "twoLine",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      }
    ],
    "mixins": [
      "colorable",
      "routable",
      "themeable",
      "groupable",
      "toggleable"
    ],
    "slots": [
      {
        "name": "default",
        "props": [
          {
            "name": "active",
            "value": "boolean"
          },
          {
            "name": "toggle",
            "value": "boolean"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "click",
        "value": "MouseEvent | KeyboardEvent"
      },
      {
        "name": "keydown",
        "value": "KeyboardEvent"
      }
    ]
  },
  "v-list-item-action": {
    "props": [],
    "mixins": [],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-list-item-avatar": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "left",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "right",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "size",
        "type": [
          "number",
          "string"
        ],
        "default": 40
      },
      {
        "name": "tile",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "horizontal",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "colorable",
      "measurable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-list-item-icon": {
    "props": [],
    "mixins": [],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-list-item-group": {
    "props": [
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": "'v-item--active'"
      },
      {
        "name": "mandatory",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "max",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      }
    ],
    "mixins": [
      "base-item-group",
      "proxyable",
      "themeable",
      "colorable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-menu": {
    "props": [
      {
        "name": "openDelay",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "closeDelay",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "eager",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "attach",
        "type": [
          "any"
        ],
        "default": false
      },
      {
        "name": "contentClass",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "absolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "bottom",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fixed",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "left",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "right",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "top",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "activator",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "internalActivator",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "openOnHover",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "allowOverflow",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "maxWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "auto"
      },
      {
        "name": "minWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "nudgeBottom",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "nudgeLeft",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "nudgeRight",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "nudgeTop",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "nudgeWidth",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "offsetOverflow",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "openOnClick",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "positionX",
        "type": "number",
        "default": "undefined"
      },
      {
        "name": "positionY",
        "type": "number",
        "default": "undefined"
      },
      {
        "name": "zIndex",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "returnValue",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "auto",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "closeOnClick",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "closeOnContentClick",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "disableKeys",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "maxHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "auto"
      },
      {
        "name": "offsetX",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "offsetY",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'top left'"
      },
      {
        "name": "transition",
        "type": [
          "boolean",
          "string"
        ],
        "default": "v-menu-transition"
      }
    ],
    "mixins": [
      "dependent",
      "delayable",
      "detachable",
      "bootable",
      "menuable",
      "stackable",
      "positionable",
      "activatable",
      "delayable",
      "toggleable",
      "returnable",
      "toggleable",
      "themeable"
    ],
    "slots": [
      {
        "name": "activator",
        "props": {
          "attrs": "{ role: string, aria-haspopup: boolean, aria-expanded: string }",
          "on": "{ [eventName]: eventHandler }",
          "value": "boolean"
        }
      },
      {
        "name": "default"
      }
    ]
  },
  "v-messages": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": "array",
        "default": []
      }
    ],
    "mixins": [
      "colorable",
      "themeable"
    ]
  },
  "v-navigation-drawer": {
    "props": [
      {
        "name": "absolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fixed",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "app",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "hideOverlay",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "overlayColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "overlayOpacity",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "bottom",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "clipped",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disableResizeWatcher",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disableRouteWatcher",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "expandOnHover",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "floating",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "100%"
      },
      {
        "name": "miniVariant",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "miniVariantWidth",
        "type": [
          "number",
          "string"
        ],
        "default": 80
      },
      {
        "name": "mobileBreakPoint",
        "type": [
          "number",
          "string"
        ],
        "default": 1264
      },
      {
        "name": "permanent",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "right",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "src",
        "type": [
          "string",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "stateless",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "tag",
        "type": "string",
        "default": "'aside'"
      },
      {
        "name": "temporary",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "touchless",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": 256
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      }
    ],
    "mixins": [
      "applicationable",
      "positionable",
      "colorable",
      "dependent",
      "overlayable",
      "ssr-bootable",
      "themeable"
    ],
    "slots": [
      {
        "name": "append"
      },
      {
        "name": "img",
        "props": {
          "height": "string",
          "src": "string | srcObject"
        }
      },
      {
        "name": "prepend"
      },
      {
        "name": "default"
      }
    ],
    "events": [
      {
        "name": "input",
        "value": "boolean"
      },
      {
        "name": "transitionend",
        "value": "object"
      },
      {
        "name": "update:mini-variant",
        "value": "boolean"
      }
    ]
  },
  "v-overflow-btn": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "error",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "errorCount",
        "type": [
          "number",
          "string"
        ],
        "default": 1
      },
      {
        "name": "errorMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "messages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rules",
        "type": "array",
        "default": []
      },
      {
        "name": "success",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "successMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "validateOnBlur",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "appendIcon",
        "type": "string",
        "default": "'$dropdown'"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "hideDetails",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hint",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "id",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "label",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loading",
        "type": [
          "boolean",
          "string"
        ],
        "default": false
      },
      {
        "name": "persistentHint",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "prependIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loaderHeight",
        "type": [
          "number",
          "string"
        ],
        "default": 2
      },
      {
        "name": "appendOuterIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "autofocus",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "clearable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "clearIcon",
        "type": "string",
        "default": "'$clear'"
      },
      {
        "name": "counter",
        "type": [
          "boolean",
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "filled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "flat",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fullWidth",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "placeholder",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "prefix",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "prependInnerIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "reverse",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "shaped",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "singleLine",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "solo",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "soloInverted",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "suffix",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "type",
        "type": "string",
        "default": "'text'"
      },
      {
        "name": "valueComparator",
        "type": "function",
        "default": "(a: any, b: any): boolean"
      },
      {
        "name": "noDataText",
        "type": "string",
        "default": "'$vuetify.noDataText'"
      },
      {
        "name": "attach",
        "type": [
          "any"
        ],
        "default": false
      },
      {
        "name": "cacheItems",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "chips",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "deletableChips",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "eager",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideSelected",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "items",
        "type": "array",
        "default": [],
        "example": {
          "text": "string | number | object",
          "value": "string | number | object"
        }
      },
      {
        "name": "itemColor",
        "type": "string",
        "default": "'primary'"
      },
      {
        "name": "itemDisabled",
        "type": [
          "string",
          "array",
          "function"
        ],
        "default": "disabled"
      },
      {
        "name": "itemText",
        "type": [
          "string",
          "array",
          "function"
        ],
        "default": "text"
      },
      {
        "name": "itemValue",
        "type": [
          "string",
          "array",
          "function"
        ],
        "default": "value"
      },
      {
        "name": "menuProps",
        "type": [
          "string",
          "array",
          "object"
        ],
        "default": "{\"closeOnClick\":false, \"closeOnContentClick\":false, \"openOnClick\":false, \"maxHeight\":300, \"offsetY\":true, \"offsetOverflow\":true, \"transition\":false}"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "openOnClear",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "returnObject",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "smallChips",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "allowOverflow",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "autoSelectFirst",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "filter",
        "type": "function",
        "default": "(item: object, queryText: string, itemText: string): boolean"
      },
      {
        "name": "hideNoData",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "noFilter",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "searchInput",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "editable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "segmented",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "v-text-field",
      "v-input",
      "validatable",
      "colorable",
      "registrable-inject",
      "themeable",
      "loadable",
      "comparable",
      "filterable"
    ],
    "slots": [
      {
        "name": "append"
      },
      {
        "name": "default"
      },
      {
        "name": "prepend"
      },
      {
        "name": "append-outer"
      },
      {
        "name": "label"
      },
      {
        "name": "progress"
      },
      {
        "name": "prepend-inner"
      },
      {
        "name": "append-item"
      },
      {
        "name": "prepend-item"
      },
      {
        "name": "item",
        "props": {
          "parent": "VueComponent",
          "item": "object",
          "on": "object",
          "attrs": "object"
        }
      },
      {
        "name": "no-data"
      },
      {
        "name": "selection",
        "props": {
          "parent": "VueComponent",
          "item": "object",
          "index": "number",
          "select": "function",
          "selected": "boolean",
          "disabled": "boolean"
        }
      }
    ],
    "events": [
      {
        "name": "input",
        "value": "any"
      },
      {
        "name": "change",
        "value": "any"
      },
      {
        "name": "update:search-input",
        "value": "string"
      },
      {
        "name": "update:list-index",
        "value": "number"
      },
      {
        "name": "click:prepend",
        "value": "Event"
      },
      {
        "name": "click:append",
        "value": "Event"
      },
      {
        "name": "click:clear",
        "value": "Event"
      },
      {
        "name": "click:append-outer",
        "value": "Event"
      },
      {
        "name": "click:prepend-inner",
        "value": "Event"
      },
      {
        "name": "update:error",
        "value": "boolean"
      },
      {
        "name": "blur",
        "value": "boolean"
      },
      {
        "name": "focus",
        "value": "boolean"
      }
    ]
  },
  "v-overlay": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "'#212121'"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": true
      },
      {
        "name": "absolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "opacity",
        "type": [
          "number",
          "string"
        ],
        "default": 0.46
      },
      {
        "name": "zIndex",
        "type": [
          "number",
          "string"
        ],
        "default": 5
      }
    ],
    "mixins": [
      "colorable",
      "themeable",
      "toggleable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-pagination": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "circle",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "length",
        "type": "number",
        "default": 0
      },
      {
        "name": "nextIcon",
        "type": "string",
        "default": "'$next'"
      },
      {
        "name": "prevIcon",
        "type": "string",
        "default": "'$prev'"
      },
      {
        "name": "totalVisible",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "value",
        "type": "number",
        "default": 0
      }
    ],
    "mixins": [
      "colorable",
      "themeable"
    ],
    "events": [
      {
        "name": "input",
        "value": "number"
      },
      {
        "name": "next",
        "value": "void"
      },
      {
        "name": "previous",
        "value": "void"
      }
    ]
  },
  "v-sheet": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "elevation",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "tag",
        "type": "string",
        "default": "div"
      },
      {
        "name": "tile",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "colorable",
      "elevatable",
      "measurable",
      "themeable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-parallax": {
    "props": [
      {
        "name": "height",
        "type": [
          "string",
          "number"
        ],
        "default": 500
      },
      {
        "name": "alt",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "src",
        "type": "string",
        "default": "undefined"
      }
    ],
    "mixins": [
      "translatable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-picker": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fullWidth",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "landscape",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "noTitle",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "transition",
        "type": "string",
        "default": "'fade-transition'"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": 290
      }
    ],
    "mixins": [
      "colorable",
      "themeable"
    ]
  },
  "v-progress-circular": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "button",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "indeterminate",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rotate",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "size",
        "type": [
          "number",
          "string"
        ],
        "default": 32
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": 4
      },
      {
        "name": "value",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      }
    ],
    "mixins": [],
    "slots": [
      {
        "name": "default",
        "props": {
          "value": "number"
        }
      }
    ]
  },
  "v-progress-linear": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "'primary'"
      },
      {
        "name": "absolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fixed",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "top",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "bottom",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "active",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "backgroundOpacity",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "bufferValue",
        "type": [
          "number",
          "string"
        ],
        "default": 100
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": 4
      },
      {
        "name": "indeterminate",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "query",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "stream",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "striped",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "colorable",
      "positionable",
      "proxyable",
      "themeable"
    ],
    "slots": [
      {
        "name": "default",
        "props": {
          "value": "number"
        }
      }
    ]
  },
  "v-radio-group": {
    "props": [
      {
        "name": "valueComparator",
        "type": "function",
        "default": "null"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": "'v-item--active'"
      },
      {
        "name": "mandatory",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "max",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "error",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "errorCount",
        "type": [
          "number",
          "string"
        ],
        "default": 1
      },
      {
        "name": "errorMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "messages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rules",
        "type": "array",
        "default": []
      },
      {
        "name": "success",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "successMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "validateOnBlur",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "appendIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "auto"
      },
      {
        "name": "hideDetails",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hint",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "id",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "label",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loading",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "persistentHint",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "prependIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "column",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "name",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "row",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "comparable",
      "base-item-group",
      "proxyable",
      "themeable",
      "v-input",
      "validatable",
      "colorable",
      "registrable-inject",
      "themeable"
    ],
    "slots": [
      {
        "name": "append"
      },
      {
        "name": "default"
      },
      {
        "name": "prepend"
      },
      "label"
    ],
    "events": [
      {
        "name": "change",
        "value": "any"
      },
      {
        "name": "update:error",
        "value": "boolean"
      }
    ]
  },
  "v-radio": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "ripple",
        "type": [
          "boolean",
          "object"
        ],
        "default": true
      },
      {
        "name": "activeClass",
        "type": "string"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "id",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "label",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "name",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "offIcon",
        "type": "string",
        "default": "'$radioOff'"
      },
      {
        "name": "onIcon",
        "type": "string",
        "default": "'$radioOn'"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      }
    ],
    "mixins": [
      "colorable",
      "rippleable",
      "groupable",
      "themeable"
    ],
    "events": [
      {
        "name": "blur",
        "value": "Event"
      },
      {
        "name": "change",
        "value": "any"
      },
      {
        "name": "focus",
        "value": "Event"
      }
    ],
    "slots": [
      {
        "name": "label"
      }
    ]
  },
  "v-range-slider": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "error",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "errorCount",
        "type": [
          "number",
          "string"
        ],
        "default": 1
      },
      {
        "name": "errorMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "messages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rules",
        "type": "array",
        "default": []
      },
      {
        "name": "success",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "successMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "validateOnBlur",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": "array",
        "default": [
          0,
          0
        ]
      },
      {
        "name": "appendIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "hideDetails",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hint",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "id",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "label",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loading",
        "type": [
          "boolean",
          "string"
        ],
        "default": false
      },
      {
        "name": "persistentHint",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "prependIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loaderHeight",
        "type": [
          "number",
          "string"
        ],
        "default": 2
      },
      {
        "name": "inverseLabel",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "max",
        "type": [
          "number",
          "string"
        ],
        "default": 100
      },
      {
        "name": "min",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "step",
        "type": [
          "number",
          "string"
        ],
        "default": 1
      },
      {
        "name": "thumbColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "thumbLabel",
        "type": [
          "boolean",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "thumbSize",
        "type": [
          "number",
          "string"
        ],
        "default": 32
      },
      {
        "name": "tickLabels",
        "type": "array",
        "default": []
      },
      {
        "name": "ticks",
        "type": [
          "boolean",
          "string"
        ],
        "default": false
      },
      {
        "name": "tickSize",
        "type": [
          "number",
          "string"
        ],
        "default": 2
      },
      {
        "name": "trackColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "trackFillColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "vertical",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "loadable"
    ],
    "events": [
      {
        "name": "input",
        "value": "number"
      },
      {
        "name": "change",
        "value": "number"
      },
      {
        "name": "start",
        "value": "number"
      },
      {
        "name": "end",
        "value": "number"
      },
      {
        "name": "click:prepend",
        "value": "Event"
      },
      {
        "name": "click:append",
        "value": "Event"
      },
      {
        "name": "update:error",
        "value": "boolean"
      },
      {
        "name": "blur",
        "value": "boolean"
      },
      {
        "name": "focus",
        "value": "boolean"
      }
    ],
    "slots": [
      {
        "name": "append",
        "source": "v-input"
      },
      {
        "name": "label",
        "source": "v-input"
      },
      {
        "name": "prepend",
        "source": "v-input"
      },
      {
        "name": "progress"
      },
      {
        "name": "thumb-label",
        "props": {
          "value": "number | string"
        }
      }
    ]
  },
  "v-rating": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "'primary'"
      },
      {
        "name": "openDelay",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "closeDelay",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "ripple",
        "type": [
          "boolean",
          "object"
        ],
        "default": true
      },
      {
        "name": "large",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "small",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "xLarge",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "xSmall",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "default": "'accent'"
      },
      {
        "name": "clearable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "emptyIcon",
        "type": "string",
        "default": "'$ratingEmpty'"
      },
      {
        "name": "fullIcon",
        "type": "string",
        "default": "'$ratingFull'"
      },
      {
        "name": "halfIcon",
        "type": "string",
        "default": "'$ratingHalf'"
      },
      {
        "name": "halfIncrements",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hover",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "length",
        "type": [
          "number",
          "string"
        ],
        "default": 5
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "size",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "value",
        "type": "number",
        "default": 0
      }
    ],
    "mixins": [
      "colorable",
      "delayable",
      "rippleable",
      "sizeable",
      "themeable"
    ],
    "events": [
      {
        "name": "input",
        "value": "Number"
      }
    ],
    "slots": [
      {
        "name": "item",
        "props": {
          "click": "(i: number) => void",
          "index": "number",
          "isFilled": "boolean",
          "isHalfFilled": "?boolean",
          "isHalfHovered": "?boolean",
          "isHovered": "boolean",
          "value": "number"
        }
      },
      {
        "name": "default"
      }
    ]
  },
  "v-responsive": {
    "props": [
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "aspectRatio",
        "type": [
          "string",
          "number"
        ],
        "default": "undefined"
      }
    ],
    "mixins": [
      "measurable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-select": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "error",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "errorCount",
        "type": [
          "number",
          "string"
        ],
        "default": 1
      },
      {
        "name": "errorMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "messages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rules",
        "type": "array",
        "default": []
      },
      {
        "name": "success",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "successMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "validateOnBlur",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "appendIcon",
        "type": "string",
        "default": "'$dropdown'"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "hideDetails",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hint",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "id",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "label",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loading",
        "type": [
          "boolean",
          "string"
        ],
        "default": false
      },
      {
        "name": "persistentHint",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "prependIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loaderHeight",
        "type": [
          "number",
          "string"
        ],
        "default": 2
      },
      {
        "name": "appendOuterIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "autofocus",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "clearable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "clearIcon",
        "type": "string",
        "default": "'$clear'"
      },
      {
        "name": "counter",
        "type": [
          "boolean",
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "filled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "flat",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fullWidth",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "placeholder",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "prefix",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "prependInnerIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "reverse",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "shaped",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "singleLine",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "solo",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "soloInverted",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "suffix",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "type",
        "type": "string",
        "default": "'text'"
      },
      {
        "name": "valueComparator",
        "type": "function",
        "default": "(a: any, b: any): boolean"
      },
      {
        "name": "noDataText",
        "type": "string",
        "default": "'$vuetify.noDataText'"
      },
      {
        "name": "attach",
        "type": [
          "any"
        ],
        "default": false
      },
      {
        "name": "cacheItems",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "chips",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "deletableChips",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "eager",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideSelected",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "items",
        "type": "array",
        "default": [],
        "example": {
          "text": "string | number | object",
          "value": "string | number | object"
        }
      },
      {
        "name": "itemColor",
        "type": "string",
        "default": "'primary'"
      },
      {
        "name": "itemDisabled",
        "type": [
          "string",
          "array",
          "function"
        ],
        "default": "disabled"
      },
      {
        "name": "itemText",
        "type": [
          "string",
          "array",
          "function"
        ],
        "default": "text"
      },
      {
        "name": "itemValue",
        "type": [
          "string",
          "array",
          "function"
        ],
        "default": "value"
      },
      {
        "name": "menuProps",
        "type": [
          "string",
          "array",
          "object"
        ],
        "default": "{\"closeOnClick\":false, \"closeOnContentClick\":false, \"openOnClick\":false, \"maxHeight\":300, \"offsetY\":true, \"offsetOverflow\":true, \"transition\":false}"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "openOnClear",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "returnObject",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "smallChips",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "filter",
        "default": "(item: object, queryText: string, itemText: string): boolean"
      }
    ],
    "mixins": [
      "v-text-field",
      "v-input",
      "validatable",
      "colorable",
      "registrable-inject",
      "themeable",
      "loadable",
      "comparable",
      "filterable"
    ],
    "slots": [
      {
        "name": "append"
      },
      {
        "name": "default"
      },
      {
        "name": "prepend"
      },
      {
        "name": "append-outer"
      },
      {
        "name": "label"
      },
      {
        "name": "progress"
      },
      {
        "name": "prepend-inner"
      },
      {
        "name": "append-item"
      },
      {
        "name": "prepend-item"
      },
      {
        "name": "item",
        "props": {
          "parent": "VueComponent",
          "item": "object",
          "on": "object",
          "attrs": "object"
        }
      },
      {
        "name": "no-data"
      },
      {
        "name": "selection",
        "props": {
          "parent": "VueComponent",
          "item": "object",
          "index": "number",
          "select": "function",
          "selected": "boolean",
          "disabled": "boolean"
        }
      }
    ],
    "events": [
      {
        "name": "input",
        "value": "any"
      },
      {
        "name": "change",
        "value": "any"
      },
      {
        "name": "update:search-input",
        "value": "string"
      },
      {
        "name": "update:list-index",
        "value": "number"
      },
      {
        "name": "click:prepend",
        "value": "Event"
      },
      {
        "name": "click:append",
        "value": "Event"
      },
      {
        "name": "click:clear",
        "value": "Event"
      },
      {
        "name": "click:append-outer",
        "value": "Event"
      },
      {
        "name": "click:prepend-inner",
        "value": "Event"
      },
      {
        "name": "update:error",
        "value": "boolean"
      },
      {
        "name": "blur",
        "value": "boolean"
      },
      {
        "name": "focus",
        "value": "boolean"
      }
    ]
  },
  "v-skeleton-loader": {
    "props": [
      {
        "name": "elevation",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "boilerplate",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "loading",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "tile",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "transition",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "type",
        "type": "string",
        "default": "undefined",
        "options": {
          "actions": "button@2",
          "article": "heading, paragraph",
          "avatar": "avatar",
          "button": "button",
          "card": "image, card-heading",
          "card-avatar": "image, list-item-avatar",
          "card-heading": "heading",
          "chip": "chip",
          "date-picker": "list-item, card-heading, divider, date-picker-options, date-picker-days, actions",
          "date-picker-options": "text, avatar@2",
          "date-picker-days": "avatar@28",
          "heading": "heading",
          "image": "image",
          "list-item": "text",
          "list-item-avatar": "avatar, text",
          "list-item-two-line": "sentences",
          "list-item-avatar-two-line": "avatar, sentences",
          "list-item-three-line": "paragraph",
          "list-item-avatar-three-line": "avatar, paragraph",
          "paragraph": "text@3",
          "sentences": "text@2",
          "table": "table-heading, table-thead, table-tbody, table-tfoot",
          "table-heading": "heading, text",
          "table-thead": "heading@6",
          "table-tbody": "table-row-divider@6",
          "table-row-divider": "table-row, divider",
          "table-row": "table-cell@6",
          "table-cell": "text",
          "table-tfoot": "text@2, avatar@2",
          "text": "text"
        }
      },
      {
        "name": "types",
        "type": "object",
        "default": {}
      }
    ],
    "mixins": [
      "elevatable",
      "measurable",
      "themeable"
    ]
  },
  "v-slider": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "error",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "errorCount",
        "type": [
          "number",
          "string"
        ],
        "default": 1
      },
      {
        "name": "errorMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "messages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rules",
        "type": "array",
        "default": []
      },
      {
        "name": "success",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "successMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "validateOnBlur",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "appendIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "hideDetails",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hint",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "id",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "label",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loading",
        "type": [
          "boolean",
          "string"
        ],
        "default": false
      },
      {
        "name": "persistentHint",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "prependIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loaderHeight",
        "type": [
          "number",
          "string"
        ],
        "default": 2
      },
      {
        "name": "inverseLabel",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "max",
        "type": [
          "number",
          "string"
        ],
        "default": 100
      },
      {
        "name": "min",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "step",
        "type": [
          "number",
          "string"
        ],
        "default": 1
      },
      {
        "name": "thumbColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "thumbLabel",
        "type": [
          "boolean",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "thumbSize",
        "type": [
          "number",
          "string"
        ],
        "default": 32
      },
      {
        "name": "tickLabels",
        "type": "array",
        "default": []
      },
      {
        "name": "ticks",
        "type": [
          "boolean",
          "string"
        ],
        "default": false
      },
      {
        "name": "tickSize",
        "type": [
          "number",
          "string"
        ],
        "default": 2
      },
      {
        "name": "trackColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "trackFillColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "vertical",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "loadable"
    ],
    "events": [
      {
        "name": "input",
        "value": "number"
      },
      {
        "name": "change",
        "value": "number"
      },
      {
        "name": "start",
        "value": "number"
      },
      {
        "name": "end",
        "value": "number"
      },
      {
        "name": "click:prepend",
        "value": "Event"
      },
      {
        "name": "click:append",
        "value": "Event"
      },
      {
        "name": "update:error",
        "value": "boolean"
      },
      {
        "name": "blur",
        "value": "boolean"
      },
      {
        "name": "focus",
        "value": "boolean"
      }
    ],
    "slots": [
      {
        "name": "append",
        "source": "v-input"
      },
      {
        "name": "label",
        "source": "v-input"
      },
      {
        "name": "prepend",
        "source": "v-input"
      },
      {
        "name": "progress"
      },
      {
        "name": "thumb-label",
        "props": {
          "value": "number | string"
        }
      }
    ]
  },
  "v-slide-group": {
    "props": [
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": "'v-slide-item--active'"
      },
      {
        "name": "mandatory",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "max",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "centerActive",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "nextIcon",
        "type": "string",
        "default": "'$next'"
      },
      {
        "name": "mobileBreakPoint",
        "type": [
          "number",
          "string"
        ],
        "default": 1264
      },
      {
        "name": "prevIcon",
        "type": "string",
        "default": "'$prev'"
      },
      {
        "name": "showArrows",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "base-item-group",
      "proxyable",
      "themeable"
    ],
    "events": [
      {
        "name": "click:location",
        "value": "void"
      }
    ],
    "slots": [
      {
        "name": "next"
      },
      {
        "name": "prev"
      },
      {
        "name": "default"
      }
    ]
  },
  "v-slide-item": {
    "props": [
      {
        "name": "activeClass",
        "type": "string"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "groupable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-snackbar": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "absolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "top",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "bottom",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "left",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "right",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "multiLine",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "timeout",
        "type": "number",
        "default": 6000
      },
      {
        "name": "vertical",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "colorable",
      "toggleable",
      "positionable"
    ],
    "events": [
      {
        "name": "input",
        "value": "boolean"
      }
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-sparkline": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "'primary'"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "autoDraw",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "autoDrawDuration",
        "type": "number",
        "default": 2000
      },
      {
        "name": "autoDrawEasing",
        "type": "string",
        "default": "'ease'"
      },
      {
        "name": "autoLineWidth",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fill",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "gradient",
        "type": "array",
        "default": []
      },
      {
        "name": "gradientDirection",
        "type": "string",
        "default": "'top'"
      },
      {
        "name": "height",
        "type": [
          "string",
          "number"
        ],
        "default": 75
      },
      {
        "name": "labels",
        "type": "array",
        "default": []
      },
      {
        "name": "labelSize",
        "type": [
          "number",
          "string"
        ],
        "default": 7
      },
      {
        "name": "lineWidth",
        "type": [
          "string",
          "number"
        ],
        "default": 4
      },
      {
        "name": "padding",
        "type": [
          "string",
          "number"
        ],
        "default": 8
      },
      {
        "name": "showLabels",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "smooth",
        "type": [
          "boolean",
          "number",
          "string"
        ],
        "default": false
      },
      {
        "name": "type",
        "type": "string",
        "default": "'trend'"
      },
      {
        "name": "value",
        "type": "array",
        "default": []
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": 300
      }
    ],
    "mixins": [
      "colorable",
      "themeable"
    ],
    "slots": [
      {
        "name": "label"
      }
    ]
  },
  "v-speed-dial": {
    "props": [
      {
        "name": "absolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "bottom",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fixed",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "left",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "right",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "top",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "transition",
        "type": "string",
        "default": "'scale-transition'"
      },
      {
        "name": "direction",
        "type": "string",
        "default": "'top'"
      },
      {
        "name": "openOnHover",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "positionable",
      "toggleable",
      "transitionable"
    ],
    "slots": [
      {
        "name": "activator"
      },
      {
        "name": "default"
      }
    ]
  },
  "v-stepper": {
    "props": [
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "altLabels",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "nonLinear",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "vertical",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "registrable-provide",
      "proxyable",
      "themeable"
    ],
    "events": [
      {
        "name": "input",
        "value": "number"
      }
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-stepper-content": {
    "props": [
      {
        "name": "step",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      }
    ],
    "mixins": [
      "registrable-inject"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-stepper-step": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "'primary'"
      },
      {
        "name": "complete",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "completeIcon",
        "type": "string",
        "default": "'$complete'"
      },
      {
        "name": "editable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "editIcon",
        "type": "string",
        "default": "'$edit'"
      },
      {
        "name": "errorIcon",
        "type": "string",
        "default": "'$error'"
      },
      {
        "name": "rules",
        "type": "array",
        "default": []
      },
      {
        "name": "step",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      }
    ],
    "mixins": [
      "colorable",
      "registrable-inject"
    ],
    "events": [
      {
        "name": "click",
        "value": "MouseEvent"
      }
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-stepper-header": {
    "props": [],
    "mixins": [],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-stepper-items": {
    "props": [],
    "mixins": [],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-subheader": {
    "props": [
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "inset",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "themeable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-switch": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "error",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "errorCount",
        "type": [
          "number",
          "string"
        ],
        "default": 1
      },
      {
        "name": "errorMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "messages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rules",
        "type": "array",
        "default": []
      },
      {
        "name": "success",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "successMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "validateOnBlur",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "appendIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "hideDetails",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hint",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "id",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "label",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loading",
        "type": [
          "boolean",
          "string"
        ],
        "default": false
      },
      {
        "name": "persistentHint",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "prependIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "ripple",
        "type": [
          "boolean",
          "object"
        ],
        "default": true
      },
      {
        "name": "valueComparator",
        "type": "function",
        "default": "null"
      },
      {
        "name": "inputValue",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "falseValue",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "trueValue",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "inset",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "flat",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "v-input",
      "validatable",
      "colorable",
      "registrable-inject",
      "themeable",
      "rippleable",
      "comparable"
    ],
    "slots": [
      {
        "name": "append"
      },
      {
        "name": "default"
      },
      {
        "name": "prepend"
      },
      "label"
    ],
    "events": [
      {
        "name": "change",
        "value": "any"
      }
    ]
  },
  "v-system-bar": {
    "props": [
      {
        "name": "absolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fixed",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "app",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "lightsOut",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "window",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "applicationable",
      "positionable",
      "colorable",
      "themeable"
    ]
  },
  "v-tabs": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "alignWithTitle",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "centerActive",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "centered",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fixedTabs",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "grow",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "hideSlider",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "iconsAndText",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mobileBreakPoint",
        "type": [
          "number",
          "string"
        ],
        "default": 1264
      },
      {
        "name": "nextIcon",
        "type": "string",
        "default": "'$next'"
      },
      {
        "name": "optional",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "prevIcon",
        "type": "string",
        "default": "'$prev'"
      },
      {
        "name": "right",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "showArrows",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "sliderColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "sliderSize",
        "type": [
          "number",
          "string"
        ],
        "default": 2
      },
      {
        "name": "vertical",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "colorable",
      "proxyable",
      "themeable"
    ],
    "events": [
      {
        "name": "change",
        "value": "number"
      }
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-tab": {
    "props": [
      {
        "name": "activeClass",
        "type": "string"
      },
      {
        "name": "append",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "exact",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "exactActiveClass",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "link",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "href",
        "type": [
          "string",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "to",
        "type": [
          "string",
          "object"
        ],
        "default": "undefined"
      },
      {
        "name": "nuxt",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "replace",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "ripple",
        "type": [
          "boolean",
          "object"
        ],
        "default": true
      },
      {
        "name": "tag",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "target",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "routable",
      "groupable",
      "themeable"
    ],
    "events": [
      {
        "name": "change",
        "value": "void"
      },
      {
        "name": "click",
        "value": "ClickEvent"
      },
      {
        "name": "keydown",
        "value": "KeyboardEvent"
      }
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-tab-item": {
    "props": [
      {
        "name": "eager",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "reverseTransition",
        "type": [
          "boolean",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "transition",
        "type": [
          "boolean",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "id",
        "type": "string",
        "default": "undefined"
      }
    ],
    "mixins": [
      "bootable",
      "groupable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-tabs-items": {
    "props": [
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": "'v-window-item--active'"
      },
      {
        "name": "mandatory",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "max",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "continuous",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "nextIcon",
        "type": [
          "boolean",
          "string"
        ],
        "default": "$next"
      },
      {
        "name": "prevIcon",
        "type": [
          "boolean",
          "string"
        ],
        "default": "$prev"
      },
      {
        "name": "reverse",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "showArrows",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "showArrowsOnHover",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "touch",
        "type": "object",
        "default": "undefined"
      },
      {
        "name": "touchless",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "vertical",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "proxyable",
      "themeable"
    ],
    "events": [
      {
        "name": "change",
        "value": "string"
      }
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-tabs-slider": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      }
    ],
    "mixins": [
      "colorable"
    ]
  },
  "v-textarea": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "error",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "errorCount",
        "type": [
          "number",
          "string"
        ],
        "default": 1
      },
      {
        "name": "errorMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "messages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rules",
        "type": "array",
        "default": []
      },
      {
        "name": "success",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "successMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "validateOnBlur",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "appendIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "hideDetails",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hint",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "id",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "label",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loading",
        "type": [
          "boolean",
          "string"
        ],
        "default": false
      },
      {
        "name": "persistentHint",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "prependIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loaderHeight",
        "type": [
          "number",
          "string"
        ],
        "default": 2
      },
      {
        "name": "appendOuterIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "autofocus",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "clearable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "clearIcon",
        "type": "string",
        "default": "'$clear'"
      },
      {
        "name": "counter",
        "type": [
          "boolean",
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "filled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "flat",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fullWidth",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "placeholder",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "prefix",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "prependInnerIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "reverse",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "shaped",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "singleLine",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "solo",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "soloInverted",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "suffix",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "type",
        "type": "string",
        "default": "'text'"
      },
      {
        "name": "autoGrow",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "noResize",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rowHeight",
        "type": [
          "number",
          "string"
        ],
        "default": 24
      },
      {
        "name": "rows",
        "type": [
          "number",
          "string"
        ],
        "default": 5
      }
    ],
    "mixins": [
      "v-text-field",
      "v-input",
      "validatable",
      "colorable",
      "registrable-inject",
      "themeable",
      "loadable"
    ],
    "events": [
      {
        "name": "input",
        "value": "string"
      },
      {
        "name": "change",
        "value": "string"
      },
      {
        "name": "keydown",
        "value": "KeyboardEvent"
      },
      {
        "name": "click:prepend",
        "value": "Event"
      },
      {
        "name": "click:append",
        "value": "Event"
      },
      {
        "name": "click:clear",
        "value": "Event"
      },
      {
        "name": "click:append-outer",
        "value": "Event"
      },
      {
        "name": "click:prepend-inner",
        "value": "Event"
      },
      {
        "name": "update:error",
        "value": "boolean"
      }
    ],
    "slots": [
      {
        "name": "append"
      },
      {
        "name": "default"
      },
      {
        "name": "prepend"
      },
      {
        "name": "append-outer"
      },
      {
        "name": "label"
      },
      {
        "name": "progress"
      },
      {
        "name": "prepend-inner"
      }
    ]
  },
  "v-text-field": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "error",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "errorCount",
        "type": [
          "number",
          "string"
        ],
        "default": 1
      },
      {
        "name": "errorMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "messages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rules",
        "type": "array",
        "default": []
      },
      {
        "name": "success",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "successMessages",
        "type": [
          "string",
          "array"
        ],
        "default": []
      },
      {
        "name": "validateOnBlur",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "appendIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "hideDetails",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hint",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "id",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "label",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loading",
        "type": [
          "boolean",
          "string"
        ],
        "default": false
      },
      {
        "name": "persistentHint",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "prependIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "loaderHeight",
        "type": [
          "number",
          "string"
        ],
        "default": 2
      },
      {
        "name": "appendOuterIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "autofocus",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "clearable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "clearIcon",
        "type": "string",
        "default": "'$clear'"
      },
      {
        "name": "counter",
        "type": [
          "boolean",
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "filled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "flat",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fullWidth",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "placeholder",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "prefix",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "prependInnerIcon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "reverse",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "shaped",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "singleLine",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "solo",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "soloInverted",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "suffix",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "type",
        "type": "string",
        "default": "'text'"
      }
    ],
    "mixins": [
      "v-input",
      "validatable",
      "colorable",
      "registrable-inject",
      "themeable",
      "loadable"
    ],
    "events": [
      {
        "name": "input",
        "value": "string"
      },
      {
        "name": "change",
        "value": "string"
      },
      {
        "name": "blur",
        "value": "boolean"
      },
      {
        "name": "focus",
        "value": "boolean"
      },
      {
        "name": "keydown",
        "value": "KeyboardEvent"
      },
      {
        "name": "click:prepend",
        "value": "Event"
      },
      {
        "name": "click:append",
        "value": "Event"
      },
      {
        "name": "click:clear",
        "value": "Event"
      },
      {
        "name": "click:append-outer",
        "value": "Event"
      },
      {
        "name": "click:prepend-inner",
        "value": "Event"
      },
      {
        "name": "update:error",
        "value": "boolean"
      }
    ],
    "slots": [
      {
        "name": "append"
      },
      {
        "name": "default"
      },
      {
        "name": "prepend"
      },
      {
        "name": "append-outer"
      },
      {
        "name": "label"
      },
      {
        "name": "progress"
      },
      {
        "name": "prepend-inner"
      }
    ]
  },
  "v-timeline": {
    "props": [
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "alignTop",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "reverse",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "themeable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-timeline-item": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "'primary'"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fillDot",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideDot",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "icon",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "iconColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "large",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "left",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "right",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "small",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "colorable",
      "themeable"
    ],
    "slots": [
      {
        "name": "icon"
      },
      {
        "name": "opposite"
      },
      {
        "name": "default"
      }
    ]
  },
  "v-time-picker": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fullWidth",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "headerColor",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "landscape",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "noTitle",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": 290
      },
      {
        "name": "allowedHours",
        "type": [
          "function",
          "array"
        ],
        "default": "undefined"
      },
      {
        "name": "allowedMinutes",
        "type": [
          "function",
          "array"
        ],
        "default": "undefined"
      },
      {
        "name": "allowedSeconds",
        "type": [
          "function",
          "array"
        ],
        "default": "undefined"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "format",
        "type": "string",
        "default": "'ampm'"
      },
      {
        "name": "min",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "max",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "useSeconds",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "ampmInTitle",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "picker",
      "colorable",
      "themeable",
      "colorable",
      "colorable"
    ],
    "events": [
      {
        "name": "input",
        "value": "string"
      },
      {
        "name": "change",
        "value": "string"
      },
      {
        "name": "click:hour",
        "value": "string"
      },
      {
        "name": "click:minute",
        "value": "string"
      },
      {
        "name": "click:second",
        "value": "string"
      }
    ]
  },
  "v-time-picker-clock": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "allowedValues",
        "type": "function",
        "default": "null"
      },
      {
        "name": "ampm",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "double",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "format",
        "type": "function",
        "default": "(val: string): string"
      },
      {
        "name": "max",
        "type": "number",
        "default": "undefined"
      },
      {
        "name": "min",
        "type": "number",
        "default": "undefined"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rotate",
        "type": "number",
        "default": 0
      },
      {
        "name": "step",
        "type": "number",
        "default": 1
      },
      {
        "name": "value",
        "type": "number",
        "default": "undefined"
      }
    ],
    "mixins": [
      "colorable",
      "themeable"
    ]
  },
  "v-time-picker-title": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "ampm",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hour",
        "type": "number",
        "default": "undefined"
      },
      {
        "name": "minute",
        "type": "number",
        "default": "undefined"
      },
      {
        "name": "second",
        "type": "number",
        "default": "undefined"
      },
      {
        "name": "period",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "useSeconds",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "selecting",
        "type": "number",
        "default": "undefined"
      }
    ],
    "mixins": [
      "colorable",
      "colorable"
    ]
  },
  "v-toolbar": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "elevation",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "height",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "maxWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minHeight",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "minWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "width",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "tag",
        "type": "string",
        "default": "'header'"
      },
      {
        "name": "tile",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "absolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "bottom",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "collapse",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "extended",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "extensionHeight",
        "type": [
          "number",
          "string"
        ],
        "default": 48
      },
      {
        "name": "flat",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "floating",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "prominent",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "short",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "src",
        "type": [
          "string",
          "object"
        ],
        "default": "undefined"
      }
    ],
    "mixins": [
      "colorable",
      "elevatable",
      "measurable",
      "themeable"
    ],
    "slots": [
      {
        "name": "extension"
      },
      {
        "name": "img",
        "props": {
          "props": "{ height: string, src: string | srcObject }"
        }
      },
      {
        "name": "default"
      }
    ]
  },
  "v-toolbar-items": {
    "props": [],
    "mixins": [],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-toolbar-title": {
    "props": [],
    "mixins": [],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-tooltip": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "openDelay",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "closeDelay",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "eager",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "attach",
        "type": [
          "any"
        ],
        "default": false
      },
      {
        "name": "contentClass",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "absolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "bottom",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "fixed",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "left",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "right",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "top",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "activator",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "internalActivator",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "openOnHover",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "allowOverflow",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "maxWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "auto"
      },
      {
        "name": "minWidth",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "nudgeBottom",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "nudgeLeft",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "nudgeRight",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "nudgeTop",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "nudgeWidth",
        "type": [
          "number",
          "string"
        ],
        "default": 0
      },
      {
        "name": "offsetOverflow",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "openOnClick",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "positionX",
        "type": "number",
        "default": "undefined"
      },
      {
        "name": "positionY",
        "type": "number",
        "default": "undefined"
      },
      {
        "name": "zIndex",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "tag",
        "type": "string",
        "default": "'span'"
      },
      {
        "name": "transition",
        "type": "string",
        "default": "undefined"
      }
    ],
    "mixins": [
      "colorable",
      "delayable",
      "dependent",
      "detachable",
      "bootable",
      "menuable",
      "stackable",
      "positionable",
      "activatable",
      "delayable",
      "toggleable",
      "toggleable"
    ],
    "slots": [
      {
        "name": "activator",
        "props": {
          "on": "{ [eventName]: eventHandler }",
          "value": "boolean"
        }
      },
      {
        "name": "default"
      }
    ]
  },
  "v-treeview": {
    "props": [
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "active",
        "type": "array",
        "default": []
      },
      {
        "name": "dense",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "filter",
        "type": "function",
        "default": "null"
      },
      {
        "name": "hoverable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "items",
        "type": "array",
        "default": []
      },
      {
        "name": "multipleActive",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "open",
        "type": "array",
        "default": []
      },
      {
        "name": "openAll",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "returnObject",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "search",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "selectionType",
        "type": "string",
        "default": "'leaf'"
      },
      {
        "name": "value",
        "type": "array",
        "default": []
      },
      {
        "name": "activatable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": "'v-treeview-node--active'"
      },
      {
        "name": "color",
        "type": "string",
        "default": "'primary'"
      },
      {
        "name": "expandIcon",
        "type": "string",
        "default": "'$subgroup'"
      },
      {
        "name": "indeterminateIcon",
        "type": "string",
        "default": "'$checkboxIndeterminate'"
      },
      {
        "name": "itemChildren",
        "type": "string",
        "default": "'children'"
      },
      {
        "name": "itemDisabled",
        "type": "string",
        "default": "'disabled'"
      },
      {
        "name": "itemKey",
        "type": "string",
        "default": "'id'"
      },
      {
        "name": "itemText",
        "type": "string",
        "default": "'name'"
      },
      {
        "name": "loadChildren",
        "type": "function",
        "default": "null"
      },
      {
        "name": "loadingIcon",
        "type": "string",
        "default": "'$loading'"
      },
      {
        "name": "offIcon",
        "type": "string",
        "default": "'$checkboxOff'"
      },
      {
        "name": "onIcon",
        "type": "string",
        "default": "'$checkboxOn'"
      },
      {
        "name": "openOnClick",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "selectable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "selectedColor",
        "type": "string",
        "default": "'accent'"
      },
      {
        "name": "shaped",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "transition",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "registrable-provide",
      "themeable"
    ],
    "slots": [
      {
        "name": "append",
        "props": {
          "item": "any",
          "leaf": "boolean",
          "selected": "boolean",
          "indeterminate": "boolean",
          "active": "boolean",
          "open": "boolean"
        }
      },
      {
        "name": "label",
        "props": {
          "item": "any",
          "leaf": "boolean",
          "selected": "boolean",
          "indeterminate": "boolean",
          "active": "boolean",
          "open": "boolean"
        }
      },
      {
        "name": "prepend",
        "props": {
          "item": "any",
          "leaf": "boolean",
          "selected": "boolean",
          "indeterminate": "boolean",
          "active": "boolean",
          "open": "boolean"
        }
      }
    ],
    "functions": [
      {
        "name": "updateAll",
        "signature": "(val: boolean): void"
      }
    ],
    "events": [
      {
        "name": "input",
        "value": "array"
      },
      {
        "name": "update:active",
        "value": "array"
      },
      {
        "name": "update:open",
        "value": "array"
      }
    ]
  },
  "v-treeview-node": {
    "props": [
      {
        "name": "color",
        "type": "string",
        "default": "'primary'"
      },
      {
        "name": "item",
        "type": "object",
        "default": null
      },
      {
        "name": "activatable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": "'v-treeview-node--active'"
      },
      {
        "name": "expandIcon",
        "type": "string",
        "default": "'$subgroup'"
      },
      {
        "name": "indeterminateIcon",
        "type": "string",
        "default": "'$checkboxIndeterminate'"
      },
      {
        "name": "itemChildren",
        "type": "string",
        "default": "'children'"
      },
      {
        "name": "itemDisabled",
        "type": "string",
        "default": "'disabled'"
      },
      {
        "name": "itemKey",
        "type": "string",
        "default": "'id'"
      },
      {
        "name": "itemText",
        "type": "string",
        "default": "'name'"
      },
      {
        "name": "loadChildren",
        "type": "function",
        "default": "null"
      },
      {
        "name": "loadingIcon",
        "type": "string",
        "default": "'$loading'"
      },
      {
        "name": "offIcon",
        "type": "string",
        "default": "'$checkboxOff'"
      },
      {
        "name": "onIcon",
        "type": "string",
        "default": "'$checkboxOn'"
      },
      {
        "name": "openOnClick",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "selectable",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "selectedColor",
        "type": "string",
        "default": "'accent'"
      },
      {
        "name": "shaped",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "transition",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "colorable",
      "registrable-inject"
    ]
  },
  "v-window": {
    "props": [
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      },
      {
        "name": "dark",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "light",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string",
        "default": "'v-window-item--active'"
      },
      {
        "name": "mandatory",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "max",
        "type": [
          "number",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "continuous",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "nextIcon",
        "type": [
          "boolean",
          "string"
        ],
        "default": "$next"
      },
      {
        "name": "prevIcon",
        "type": [
          "boolean",
          "string"
        ],
        "default": "$prev"
      },
      {
        "name": "reverse",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "showArrows",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "showArrowsOnHover",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "touch",
        "type": "object",
        "default": "undefined",
        "example": {
          "left": "Function",
          "right": "Function"
        }
      },
      {
        "name": "touchless",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "vertical",
        "type": "boolean",
        "default": "false"
      }
    ],
    "mixins": [
      "proxyable",
      "themeable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-window-item": {
    "props": [
      {
        "name": "eager",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "activeClass",
        "type": "string"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "reverseTransition",
        "type": [
          "boolean",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "transition",
        "type": [
          "boolean",
          "string"
        ],
        "default": "undefined"
      },
      {
        "name": "value",
        "type": [
          "any"
        ],
        "default": "undefined"
      }
    ],
    "mixins": [
      "bootable",
      "groupable"
    ],
    "slots": [
      {
        "name": "default"
      }
    ]
  },
  "v-carousel-transition": {
    "props": [
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnLeave",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "leaveAbsolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'top center 0'"
      }
    ],
    "mixins": []
  },
  "v-carousel-reverse-transition": {
    "props": [
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnLeave",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "leaveAbsolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'top center 0'"
      }
    ],
    "mixins": []
  },
  "v-tab-transition": {
    "props": [
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnLeave",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "leaveAbsolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'top center 0'"
      }
    ],
    "mixins": []
  },
  "v-tab-reverse-transition": {
    "props": [
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnLeave",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "leaveAbsolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'top center 0'"
      }
    ],
    "mixins": []
  },
  "v-menu-transition": {
    "props": [
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnLeave",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "leaveAbsolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'top center 0'"
      }
    ],
    "mixins": []
  },
  "v-fab-transition": {
    "props": [
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnLeave",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "leaveAbsolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "'out-in'"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'center center'"
      }
    ],
    "mixins": []
  },
  "v-dialog-transition": {
    "props": [
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnLeave",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "leaveAbsolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'top center 0'"
      }
    ],
    "mixins": []
  },
  "v-dialog-bottom-transition": {
    "props": [
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnLeave",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "leaveAbsolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'top center 0'"
      }
    ],
    "mixins": []
  },
  "v-fade-transition": {
    "props": [
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnLeave",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "leaveAbsolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'top center 0'"
      }
    ],
    "mixins": []
  },
  "v-scale-transition": {
    "props": [
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnLeave",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "leaveAbsolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'top center 0'"
      }
    ],
    "mixins": []
  },
  "v-scroll-x-transition": {
    "props": [
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnLeave",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "leaveAbsolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'top center 0'"
      }
    ],
    "mixins": []
  },
  "v-scroll-x-reverse-transition": {
    "props": [
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnLeave",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "leaveAbsolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'top center 0'"
      }
    ],
    "mixins": []
  },
  "v-scroll-y-transition": {
    "props": [
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnLeave",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "leaveAbsolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'top center 0'"
      }
    ],
    "mixins": []
  },
  "v-scroll-y-reverse-transition": {
    "props": [
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnLeave",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "leaveAbsolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'top center 0'"
      }
    ],
    "mixins": []
  },
  "v-slide-x-transition": {
    "props": [
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnLeave",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "leaveAbsolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'top center 0'"
      }
    ],
    "mixins": []
  },
  "v-slide-x-reverse-transition": {
    "props": [
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnLeave",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "leaveAbsolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'top center 0'"
      }
    ],
    "mixins": []
  },
  "v-slide-y-transition": {
    "props": [
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnLeave",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "leaveAbsolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'top center 0'"
      }
    ],
    "mixins": []
  },
  "v-slide-y-reverse-transition": {
    "props": [
      {
        "name": "group",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "hideOnLeave",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "leaveAbsolute",
        "type": "boolean",
        "default": "false"
      },
      {
        "name": "mode",
        "type": "string",
        "default": "undefined"
      },
      {
        "name": "origin",
        "type": "string",
        "default": "'top center 0'"
      }
    ],
    "mixins": []
  },
  "v-expand-transition": {
    "props": [
      {
        "name": "mode",
        "type": "string",
        "default": "'in-out'"
      }
    ],
    "mixins": []
  },
  "v-expand-x-transition": {
    "props": [
      {
        "name": "mode",
        "type": "string",
        "default": "'in-out'"
      }
    ],
    "mixins": []
  },
  "$vuetify": {
    "functions": [
      {
        "name": "goTo",
        "signature": "(target: string | number | HTMLElement | VueComponent, options?: object): void"
      }
    ]
  },
  "internationalization": {
    "api": [
      {
        "name": "locales",
        "default": "{ en: VuetifyLocale }",
        "type": "Record<string, VuetifyLocale>"
      },
      {
        "name": "current",
        "default": "en",
        "type": "string"
      },
      {
        "name": "t",
        "default": "(key: string, ...params: Array<string | number>): string",
        "type": "Function"
      }
    ]
  },
  "v-mutate": {
    "options": [
      {
        "name": "modifiers.once",
        "default": false,
        "type": "boolean",
        "snippet": "html_directive_mutate_once"
      },
      {
        "name": "modifiers.attr",
        "default": true,
        "type": "boolean",
        "snippet": "html_directive_mutate_attr"
      },
      {
        "name": "modifiers.char",
        "default": true,
        "type": "boolean",
        "snippet": "html_directive_mutate_char"
      },
      {
        "name": "modifiers.child",
        "default": true,
        "type": "boolean",
        "snippet": "html_directive_mutate_child"
      },
      {
        "name": "modifiers.sub",
        "default": true,
        "type": "boolean",
        "snippet": "html_directive_mutate_sub"
      },
      {
        "name": "value",
        "default": "(): {}",
        "type": "function | object",
        "snippet": "html_directive_mutate"
      }
    ],
    "type": "undefined"
  },
  "v-intersect": {
    "options": [
      {
        "name": "modifiers.once",
        "default": false,
        "type": "boolean",
        "snippet": "html_directive_intersect_once"
      },
      {
        "name": "modifiers.quiet",
        "default": false,
        "type": "boolean",
        "snippet": "html_directive_intersect_quiet"
      },
      {
        "name": "value",
        "default": "{}",
        "type": "object",
        "snippet": "html_directive_intersect"
      }
    ],
    "type": "undefined"
  },
  "v-ripple": {
    "options": [
      {
        "name": "value",
        "default": "{}",
        "type": "object"
      },
      {
        "name": "center",
        "default": "false",
        "type": "boolean"
      },
      {
        "name": "class",
        "default": "\"\"",
        "type": "string"
      }
    ],
    "type": "undefined"
  },
  "v-resize": {
    "options": [
      {
        "name": "modifiers.quiet",
        "default": "false",
        "type": "boolean"
      },
      {
        "name": "value",
        "default": "undefined",
        "type": "Function"
      }
    ],
    "type": "undefined"
  },
  "v-scroll": {
    "options": [
      {
        "name": "arg:target",
        "default": "window",
        "type": "string"
      },
      {
        "name": "value",
        "default": "(): {}",
        "type": "Function"
      }
    ],
    "type": "undefined"
  },
  "v-touch": {
    "options": [
      {
        "name": "value",
        "default": "{}",
        "type": "object"
      }
    ],
    "type": "undefined"
  }
}

export default data
