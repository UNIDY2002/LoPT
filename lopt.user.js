/* eslint-disable no-undef */
// ==UserScript==
// @name        LoPT
// @namespace   https://github.com/UNIDY2002/LoPT
// @description Lab. of Physics Tool
// @author      UNIDY2002
// @version     1.0.0
// @match       *://166.111.214.78/Select_Select.php?weekselect=*
// @require     https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// ==/UserScript==

$(document).ready(function () {
    $("input[type=radio]").click(function () {
        $.post("Select_Select.php", $("form").serialize(), function () {
            location.reload();
        });
    });
});
