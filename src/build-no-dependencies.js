({
    baseUrl: "../",
    name: "almond",
    out: "../dist/converse-no-dependencies.min.js",
    include: ["builds/@converse/generic/converse"],
    exclude: [
        "awesomplete",
        "backbone.browserStorage",
        "backbone.overview",
        "moment",
        "strophe",
        "strophe.disco",
        "strophe.rsm",
        "strophe.vcard",
        "strophe.ping",
        "otr",
        "lodash",
        "lodash.converter",
        "lodash.noconflict",
        "es6-promise"
    ],
    paths: {
        "backbone.vdomview":        "builds/backbone.vdomview",
        "converse-bookmarks":       "builds/@converse/bookmarks/converse-bookmarks",
        "converse-chatboxes":       "builds/@converse/chatboxes/converse-chatboxes",
        "converse-chatview":        "builds/@converse/chatview/converse-chatview",
        "converse-controlbox":      "builds/@converse/controlbox/converse-controlbox",
        "converse-core":            "builds/@converse/core/converse-core",
        "converse-disco":           "builds/@converse/disco/converse-disco",
        "converse-dragresize":      "builds/@converse/dragresize/converse-dragresize",
        "converse-fullscreen":      "builds/@converse/fullscreen/converse-fullscreen",
        "converse-headline":        "builds/@converse/headline/converse-headline",
        "converse-mam":             "builds/@converse/mam/converse-mam",
        "converse-minimize":        "builds/@converse/minimize/converse-minimize",
        "converse-modal":           "builds/@converse/modal/converse-modal",
        "converse-muc":             "builds/@converse/muc/converse-muc",
        "converse-muc-views":       "builds/@converse/muc-views/converse-muc-views",
        "converse-muc-embedded":    "builds/@converse/muc-embedded/converse-muc-embedded",
        "converse-notification":    "builds/@converse/notification/converse-notification",
        "converse-otr":             "builds/@converse/otr/converse-otr",
        "converse-ping":            "builds/@converse/ping/converse-ping",
        "converse-profile":         "builds/@converse/profile/converse-profile",
        "converse-register":        "builds/@converse/register/converse-register",
        "converse-roomslist":       "builds/@converse/roomslist/converse-roomslist",
        "converse-rosterview":      "builds/@converse/rosterview/converse-rosterview",
        "converse-singleton":       "builds/@converse/singleton/converse-singleton",
        "converse-vcard":           "builds/@converse/vcard/converse-vcard",
        "i18n":                     "builds/@converse/core/i18n",
        "utils":                    "builds/@converse/core/utils",
        "form-utils":               "builds/@converse/core/form-utils",
        "muc-utils":                "builds/@converse/muc/utils"
    },
    wrap: {
        startFile: "start.frag",
        endFile: "end-no-dependencies.frag"
    },
    mainConfigFile: "config.js"
});
