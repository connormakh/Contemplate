/**
 * Contemplate is a javascript library
 * Purpose:
 * - Create and edit html nodes without using any html
 * - Enable templating functionalities
 *
 * Created by connormakhlouta on 6/19/16.
 */

var Contemplate = {

    /**
     * Configure whether to enable or disable templating and injection.
     *
     * @param options contains { isTemplate, isInject }
     */
    config: function(options) {
        this.isTemplate = options.isTemplate;
        this.isInject = options.isInject;
    },

    initialize: function(options) {
    var html = document.getElementsByTagName('html')[0].innerHTML;

    if(this.isInject == true) {
       var js = /%%([a-z]+)%%/g.exec(html);

        console.log(js);

      }
    else {

    }
    },

    createDiv: function(options) {

        var element = document.createElement(options.type)
        options.attributes.forEach(function(element) {

        })
    },

    /**
     * This function serves to edit an already existing div
     *
     * @param options
     */
    editDiv: function(options) {

    },


}