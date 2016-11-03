(function (root, factory) {
    define(["converse-api"], factory);
} (this, function (converse_api) {
    var utils = converse_api.env.utils,
        _ = converse_api.env._;

    return describe("Converse.js Utilities", function() {

        it("applyUserSettings: recursively applies user settings", function () {
            var context = {};
            var settings = {
                show_toolbar: true,
                chatview_avatar_width: 32,
                chatview_avatar_height: 32,
                visible_toolbar_buttons: {
                    'emoticons': true,
                    'call': false,
                    'clear': true,
                    'toggle_occupants': true
                }
            };
            _.extend(context, settings);

            var user_settings = {
                something_else: 'xxx',
                show_toolbar: false,
                chatview_avatar_width: 32,
                chatview_avatar_height: 48,
                visible_toolbar_buttons: {
                    'emoticons': false,
                    'call': false,
                    'toggle_occupants':false,
                    'invalid': false 
                }
            };
            utils.applyUserSettings(context, settings, user_settings);

            expect(context.something_else).toBeUndefined();
            expect(context.show_toolbar).toBeFalsy();
            expect(context.chatview_avatar_width).toBe(32);
            expect(context.chatview_avatar_height).toBe(48);
            expect(Object.keys(context.visible_toolbar_buttons)).toEqual(Object.keys(settings.visible_toolbar_buttons));
            expect(context.visible_toolbar_buttons.emoticons).toBeFalsy();
            expect(context.visible_toolbar_buttons.call).toBeFalsy();
            expect(context.visible_toolbar_buttons.toggle_occupants).toBeFalsy();
            expect(context.visible_toolbar_buttons.invalid).toBeFalsy();

            user_settings = {
                visible_toolbar_buttons: {
                    'toggle_occupants': true
                }
            };
            utils.applyUserSettings(context, settings, user_settings);
            expect(Object.keys(context.visible_toolbar_buttons)).toEqual(Object.keys(settings.visible_toolbar_buttons));
            expect(context.visible_toolbar_buttons.toggle_occupants).toBeTruthy();
        });
    });
}));