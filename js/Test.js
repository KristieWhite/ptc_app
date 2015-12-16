(function (root) {
    "use strict";

    var Backbone = root.Backbone,
        $ = root.$,
        _ = root._,
        document = root.document;

    Backbone.DEBUG_STATES = true;

    var ItemView = Backbone.StatesClientView.extend({
        toggle: function () {
            this.setState(this.isSelected() ? "unselected" : "selected");
        },

        isSelected: function () {
            return this.currentState === "selected";
        },

        isEnabled: function () {
            return this.currentState !== "disabled";
        },

        disable: function () {
            this.setState("disabled");
        },

        enable: function () {
            this.setState("unselected");
        }
    });




    $(document).ready(function () {

        var anItemView = new ItemView({
            el: $(".accordion-item"),
            states: {
                includeRoot: true,
                deepFetch: false,
                keepLayout: true,
                silent: false
            }
        });
        anItemView.render();

        $(".accordion-header").click(function () {
            if (anItemView.isEnabled()) anItemView.toggle();
        });

        $('[name="state-selector"]').change(function () {
            if (this.checked) anItemView.disable();
            else anItemView.enable();
        });

    });



})(this);