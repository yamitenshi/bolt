/**
 * Handling of file upload fields.
 *
 * @mixin
 * @namespace Bolt.fields.file
 *
 * @param {Object} bolt - The Bolt module.
 */
(function (bolt) {
    'use strict';

    /**
     * Bolt.fields.file mixin container.
     *
     * @private
     * @type {Object}
     */
    var file = {};

    /**
     * Bind file field.
     *
     * @static
     * @function init
     * @memberof Bolt.fields.file
     *
     * @param {Object} fieldset
     * @param fconf
     */
    file.init = function (fieldset, fconf) {
        //jshint unused:vars
        bolt.uploads.bindField(fieldset);
    };

    // Apply mixin container
    bolt.fields.file = file;

})(Bolt || {}, jQuery);
