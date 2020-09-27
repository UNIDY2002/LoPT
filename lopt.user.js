/* eslint-disable no-undef */
// ==UserScript==
// @name        LoPT
// @namespace   https://github.com/UNIDY2002/LoPT
// @description Lab. of Physics Tool
// @author      UNIDY
// @license     MIT
// @version     1.0.0
// @match       *://166.111.214.78/Select_Select.php?weekselect=*
// @match       *://166.111.214.78/StuWelcome.php
// @require     https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// @updateURL   https://raw.githubusercontent.com/UNIDY2002/LoPT/lopt.user.js
// @downloadURL https://raw.githubusercontent.com/UNIDY2002/LoPT/lopt.user.js
// @homepageURL https://github.com/UNIDY2002/LoPT
// ==/UserScript==

$(document).ready(function () {
    $("input[type=radio]").click(function () {
        $.post("Select_Select.php", $("form").serialize(), function () {
            location.reload();
        });
    });
    if (location.href.indexOf("StuWelcome") !== -1) {
        location.href = "http://166.111.214.78/Select_Select.php?weekselect=2";
    }
});
