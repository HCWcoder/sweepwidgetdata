var authService = new AuthService,
    apiController = new ApiController(authService),
    website_url_no_protocol = (authService = new AuthService, apiController = new ApiController(authService), website_url.replace("https://", "")),
    constants = {
        allowed_origins: [website_url_no_protocol],
        facebook: {
            appId: "723946844466921",
            xfbml: !0,
            version: "v3.2"
        },
        iframely_api_key: "979ea3a3e43fb0fc99291e"
    };

function getScriptName() {
    var e, t = new Error,
        i = new RegExp(/.+\/(.*?):\d+(:\d+)*$/),
        _ = new RegExp(/getScriptName \(.+\/(.*):\d+:\d+\)/);
    return (e = i.exec(t.stack.trim())) && "" != e[1] || (e = _.exec(t.stack.trim())) ? e[1] : null != t.fileName ? t.fileName : void 0
}

function loadScript(e, t) {
    var i = document.createElement("script");
    i.type = "text/javascript", i.readyState ? i.onreadystatechange = function() {
        "loaded" != i.readyState && "complete" != i.readyState || (i.onreadystatechange = null, t())
    } : i.onload = function() {
        t()
    }, i.src = e, document.getElementsByTagName("head")[0].appendChild(i)
}

function getParentHost(e) {
    var t = window.location != window.parent.location ? document.referrer : document.location.hostname,
        i = t.replace(/https?:\/\//g, "").split("/")[0];
    return "host_url" == e ? t : i
}

function browserSupportsCors() {
    return "withCredentials" in new XMLHttpRequest || !!window.XDomainRequest
}

function detect_browser() {
    var e, t = navigator.userAgent,
        i = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    return /trident/i.test(i[1]) ? "IE " + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "") : "Chrome" === i[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e.slice(1).join(" ").replace("OPR", "Opera") : (i = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && i.splice(1, 1, e[1]), i.join(" "))
}

function capitalizeFirstLetter(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}

function capitalizeFirstLetterEachWord(e) {
    for (var t = e.toLowerCase().split(" "), i = 0; i < t.length; i++) t[i] = t[i].charAt(0).toUpperCase() + t[i].substring(1);
    return t.join(" ")
}

function rand_string(e) {
    for (var t = "", i = "0123456789abcdefghijklmnopqrstuvwxyz", _ = i.length, r = 0; r < e; r++) t += i.charAt(Math.floor(Math.random() * _));
    return t
}

function extractHostname(e) {
    return (e.indexOf("//") > -1 ? e.split("/")[2] : e.split("/")[0]).split(":")[0].split("?")[0]
}

function ga_gtag_page_view(e, t, i, _, r, s, o, n, a) {
    "127.0.0.1" !== e && 0 == s && (1 == t && gtag("config", i, {
        page_title: o,
        page_path: n,
        page_location: a
    }), 1 == _ && dataLayer.push({
        event: "SweepWidget",
        eventCategory: "Widget Page Load",
        eventAction: "Widget Page Load",
        eventLabel: o
    }))
}

function ga_gtag(e, t, i, _, r) {
    "127.0.0.1" !== e.website_host && 0 == e.remove_sw_google_analytics && (1 == e.if_google_analytics && gtag("event", t, {
        event_category: i,
        event_label: _
    }), 1 == e.if_google_tag_manager && dataLayer.push({
        event: "SweepWidget",
        eventCategory: i,
        eventAction: t,
        eventLabel: _
    }))
}

function areCookiesEnabledScript() {
    try {
        document.cookie = "cookietest=1";
        var e = -1 !== document.cookie.indexOf("cookietest=");
        return document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", e
    } catch (e) {
        return !1
    }
}

function reload_page(e) {
    ga_gtag(e, "SweepWidget reload widget", "Reload widget", "Reload widget success"), $("#enable_cookies").html("One Moment...").css("cursor", "progress").css("opacity", "0.5").prop("disabled", !0);
    var t = window.open(website_url + "/set-cookie", "", "toolbar=no,status=no,visible=false,left=0,top=0,width=1,height=1");
    t.blur(), window.focus(), $(t).ready((function() {
        window.location.href = website_url + "/view2/" + e.sw_f + "-reload"
    })), setTimeout((function() {
        t.close()
    }), 1e3)
}

function button_enabled(e, t, i, _) {
    !0 === e ? $("#sw_verify_" + i).prop("disabled", !1).css("background", "#" + t.buttons_background_color).css("color", "#" + t.buttons_font_color).css("border", "1px solid #" + t.buttons_background_color).css("opacity", "1").css("cursor", "pointer") : $("#sw_verify_" + i).prop("disabled", !0).css("color", "#fff").css("background", "#ccc").css("border", "1px solid #ccc").css("opacity", "0.5").css("cursor", "not-allowed"), null !== _ && $("#sw_verify_" + i).val(_)
}

function getTimeRemaining(e) {
    var t = Date.parse(e) - Date.parse(new Date),
        i = Math.floor(t / 1e3 % 60),
        _ = Math.floor(t / 1e3 / 60 % 60),
        r = Math.floor(t / 36e5 % 24);
    return {
        total: t,
        days: Math.floor(t / 864e5),
        hours: r,
        minutes: _,
        seconds: i
    }
}

function countdown_timer(e, t, i) {
    if (0 == $("#countdown_timer_if_clicked_" + i).val()) {
        $("#countdown_timer_if_clicked_" + i).val("1");
        var _ = Math.floor(Date.now() / 1e3);
        $("#countdown_timer_clicked_timestamp_" + i).val(_);
        var r = t.timer_db;
        s = parseInt(r / 60, 10), o = parseInt(r % 60, 10), s = s < 10 ? "0" + s : s, o = o < 10 ? "0" + o : o, $("#sw_verify_" + i).val(s + ":" + o);
        var s, o;
        r = t.timer_db;
        setInterval((function() {
            var _ = $("#countdown_timer_clicked_timestamp_" + i).val() - Math.floor(Date.now() / 1e3) + r;
            s = parseInt(_ / 60, 10), o = parseInt(_ % 60, 10), s = s < 10 ? "0" + s : s, o = o < 10 ? "0" + o : o, $("#sw_verify_" + i).val(s + ":" + o), --_ < 0 && (_ = 0, button_enabled(!0, e, i, t.verify_button_text), custom_entry_method_key_up_enable(e, i))
        }), 1e3)
    }
}

function copy_to_clipboard(e) {
    var t = document.getElementById(e);
    t.select(), t.setSelectionRange(0, 99999), document.execCommand("copy")
}

function initializeClock(e, t) {
    var i = document.getElementById(e),
        _ = i.querySelector(".days"),
        r = i.querySelector(".hours"),
        s = i.querySelector(".minutes"),
        o = i.querySelector(".seconds");

    function n() {
        var e = getTimeRemaining(t);
        _.innerHTML = e.days, r.innerHTML = ("0" + e.hours).slice(-2), s.innerHTML = ("0" + e.minutes).slice(-2), o.innerHTML = ("0" + e.seconds).slice(-2), e.total <= 0 && clearInterval(a)
    }
    n();
    var a = setInterval(n, 1e3)
}

function custom_entry_method_key_up_enable(e, t) {
    $(document.body).on("keyup change", "#sw_" + t, (function() {
        var i = $(this).attr("type");
        if ("checkbox" == i || "radio" == i) var _ = $(this).is(":checked");
        else _ = $(this).val();
        _.length >= 1 || 1 == _ ? button_enabled(!0, e, t, null) : button_enabled(!1, e, t, null)
    }))
}

function birthday_month(e) {
    for (var t = 1; t <= 12; t++) t == e ? $("#sw_input_birthday_month").append($("<option></option>").attr("value", t).attr("selected", "1").text(t)) : $("#sw_input_birthday_month").append($("<option></option>").attr("value", t).text(t))
}

function birthday_day(e) {
    for (var t = 1; t <= 31; t++) t == e ? $("#sw_input_birthday_day").append($("<option></option>").attr("value", t).attr("selected", "1").text(t)) : $("#sw_input_birthday_day").append($("<option></option>").attr("value", t).text(t))
}

function birthday_year(e) {
    for (var t = (new Date).getFullYear() - 5; t >= 1900; t--) t == e ? $("#sw_input_birthday_year").append($("<option></option>").attr("value", t).attr("selected", "1").text(t)) : $("#sw_input_birthday_year").append($("<option></option>").attr("value", t).text(t))
}

function unlock_rewards_display_func(e, t) {
    var i = "";
    return $.each(e.competition_unlock_rewards.unlock_rewards_id, (function(_, r) {
        if (0 == r.unlock_rewards_skip) {
            var s = r.unlock_rewards_hide_progress,
                o = (r.unlock_rewards_title_short, r.unlock_rewards_title_long),
                n = (r.unlock_rewards_has_long_title, r.unlock_rewards_entries_required),
                a = r.unlock_rewards_prize_random_or_guaranteed;
            r.unlock_rewards_coupon_if_coupon_code, r.unlock_rewards_coupon_code, r.unlock_rewards_coupon_directions, r.unlock_rewards_if_send_email, r.unlock_rewards_user_email_body, r.unlock_rewards_user_email_subject, r.unlock_rewards_user_email_reply_to_email, r.unlock_rewards_user_email_reply_to_name, r.unlock_rewards_user_email_logo_image_loc, r.unlock_rewards_order;
            if (1 == s) var d = "display:none;";
            else d = "";
            if (t.user_entry_amount < n) var l = '<div class="unlock_rewards_lock_wrapper"><i class="fas fa-lock"></i></div>';
            else l = '<div class="unlock_rewards_lock_wrapper"><i class="fas fa-lock-open"></i></div>';
            if (1 == a) var c = "";
            else if (2 == a) c = "*" + capitalizeFirstLetter(e.translate.guaranteed);
            i += '<div class="unlock_rewards_row" style="' + d + '"><div class="unlock_rewards_row_header">' + o + '</div><div id="progress_bar_wrapper-' + _ + '" class="unlock_rewards_row_required_entries"><div id="progress-' + _ + '"></div></div>' + l + '<div class="unlock_rewards_type">' + c + "</div></div>"
        }
    })), '<div id="unlock_rewards_main_wrapper">' + i + "</div>"
}

function earned_rewards_dropdown_func(e, t) {
    return '<div id="view_rewards_link_wrapper"><div id="view_rewards_link" style="color:#' + e.body_font_color + "; border-color:#" + e.input_border_color + ';">' + e.translate.show_earned_rewards + ' &nbsp;<i class="fas fa-angle-down"></i></div></div>'
}

function verify_email_display_func(e, t) {
    if (0 == t.is_verified) var i = '<div id="verify_email_wrapper"><div id="verify_email_header">' + capitalizeFirstLetter(e.translate.invite_friends_for_more_entries) + '</div><div id="verify_email_body">' + e.translate.verify_your_email_long_text + '</div><div id="verify_email_error_wrapper"></div><div id="verify_email_input_wrapper"><input type="text" id="verify_email_input_1" class="verify_email_input" placeholder="0" maxlength="4" data-input-num="1" /><input type="text" id="verify_email_input_2" class="verify_email_input" placeholder="0" maxlength="4" data-input-num="2" /><input type="text" id="verify_email_input_3" class="verify_email_input" placeholder="0" maxlength="4" data-input-num="3" /><input type="text" id="verify_email_input_4" class="verify_email_input" placeholder="0" maxlength="4" data-input-num="4" /></div><div id="verify_email_submit_wrapper"><input type="button" id="verify_email_submit" value="' + e.translate.confirm + '" style="' + e.buttons_css + ' font-size:17px; font-weight:bold;" /></div></div>';
    else i = "";
    return i
}

function entry_methods_view_func(e, t) {
    if (1 == e.entry_methods_view) {
        $(".entry_icon_path_display").css("height", "52px");
        var i = $(".sw_inner").width() - 40;
        $(".sw_entry_input").css("width", i + "px").css("right", "20").css("border", "1px solid #" + e.input_border_color)
    } else 2 == e.entry_methods_view && ($("#sw_inner_entry_methods_l2_wrapper").css("margin-top", "25px").css("margin-bottom", "0px"), $("#please_login_message").css("margin-top", "30px"), $(".entry_icon_path_display").css("border-radius", "0px"), $(".sw_entry_h").css("margin-bottom", "0px").css("padding", "0px"), $(".sw_entry_h_1_right").css("margin-left", "0px").css("border", "0px solid #" + e.body_background_color).css("border-radius", "0px"), $(".sw_bottom").css("border-bottom", "1px solid #" + e.form_border_color).css("border-top", "1px solid #" + e.form_border_color), $(".sw_bottom_3_l").css("width", "33.3%").css("margin-bottom", "0px"), $(".sw_bottom_3_m").css("width", "33.3%").css("margin-bottom", "0px").css("border-left", "1px solid #" + e.form_border_color).css("border-right", "1px solid #" + e.form_border_color), $(".sw_bottom_3_r").css("width", "33.3%").css("margin-bottom", "0px"), $(".sw_bottom_inner_border").css("border-bottom", "none"), $("#sw_logout_link_holder").css("padding-top", "10px"), $(".sw_entry_input").css("margin-top", "0px").css("border-radius", "0px").css("border", "1px solid #" + e.input_border_color).css("box-shadow", "0px 0px 20px 0px #ccc"), "ffffff" == e.body_background_color && $(".sw_entry_h ").css("background", "#f6f6f6"))
}

function get_facebook_user_info(e, t, i) {
    FB.api("/me", "GET", {
        fields: "first_name,last_name,name,email,birthday,id,link"
    }, (function(_) {
        var r = {
            success: "connected" == e.status,
            data: e.authResponse,
            profile: _
        };
        if (authService.saveDataToStorage("facebook", r, r.success), authService.init(), update_view_l1("facebook", t), $("input[name=sw__login_name]").val(_.name), $("input[name=sw__login_email]").val(_.email), 1 == i && _.birthday) {
            var s = _.birthday.split("/"),
                o = parseInt(s[0]),
                n = parseInt(s[1]),
                a = parseInt(s[2]);
            $("select[name=sw_input_birthday_month]").val(o), $("select[name=sw_input_birthday_day]").val(n), $("select[name=sw_input_birthday_year]").val(a)
        }
    }))
}

function user_account_details(e, t, i, _) {
    if ("" !== _) var r = '<i style="color:#999" class="fas fa-birthday-cake"></i>&nbsp; ' + _;
    else r = "";
    var s = t + "<br />" + i + "<br />" + r;
    $("#sw_user_account_holder").prepend(s)
}

function my_entries_display_func(e, t, i, _, r, s, o) {
    if ("en" == t) var n = 'You have <span style="color:#' + o + '; font-weight:bold;">' + _ + "</span> " + r.toLowerCase() + ", " + s + ".";
    else n = capitalizeFirstLetterEachWord(e.entries_or_points_my) + ": <strong>" + _ + "</strong>";
    return n
}

function enable_disable_submit_button(e, t, i, _, r) {
    var s = r + "_" + i + "_" + _;
    button_enabled(!1, e, s, null);
    var o = $("#sw_" + s).val() || "";
    switch (r) {
        case "checkbox":
            o = $("#sw_" + s).is(":checked");
            break;
        case "radio":
            o = $("input[name=sw_" + s + "]:checked").val()
    }
    if (o) var n = 1;
    else n = 0;
    button_enabled(1 == n, e, s, null), "custom" !== r && custom_entry_method_key_up_enable(e, s)
}

function entries_completed_message(e, t, i, _) {
    if (0 == e.has_daily || 1 == e.has_daily && 0 == e.has_daily_non_group && 1 == t)
        if ("en" == e.language)
            if (1 == e.if_refer_friends) var r = " Continue to refer friends for more entries!";
            else r = " You have reached the maximum allowed entries and will be notified if you win.";
    else if (1 == e.if_refer_friends) capitalizeFirstLetter(e.translate.invite_friends_for_more_entries);
    else r = capitalizeFirstLetter(e.translate.you_will_be_contacted_if_you_win);
    else {
        if (0 == i)
            if ("en" == e.language)
                if (1 == e.if_refer_friends) r = " Continue to refer friends for more entries + come back for daily actions!";
                else r = "You reached the max allowed entries for now. Come back and enter the daily entries again!";
        else if (1 == e.if_refer_friends) capitalizeFirstLetter(e.translate.invite_more_friends_and_come_back_for_daily_entries);
        else r = e.translate.come_back_for_daily_entries;
        r = '<div id="sw_entry_amount_allowed_text"><div id="sw_entry_amount_allowed_text_inner" style="line-height:25px;"> ' + r + "</div></div>"
    }
    $(".sw_inner_entry_methods").show();
    var s = r;
    if ($("#sw_entry_amount_allowed_text_inner").html(s).show(), "" !== e.redirect_url && 1 == _) {
        if ("en" == e.language) var o = "You'll be redirected to " + extractHostname(e.redirect_url) + " in:";
        else o = e.translate.redirect + ":";
        $("#sw_entry_amount_allowed_text").append(o + ' <span id="redirect_url_countdown" style="color:#' + e.links_font_color + ';">5</span>').show();
        var n = 5;
        setInterval((function() {
            n > 0 && (n--, $("#redirect_url_countdown").html(n))
        }), 1e3), setTimeout((function() {
            window.top.location.href = e.redirect_url
        }), 5e3)
    }
}

function window_open(e) {
    const t = Math.floor(.8 * window.outerWidth),
        i = Math.floor(.5 * window.outerHeight);
    width = 1e3, i < 630 ? height = 630 : width = 630;
    var _ = Math.floor(window.screenY + (window.outerHeight - i) / 8),
        r = Math.floor(window.screenX + (window.outerWidth - t) / 2),
        s = "scrollbars=yes, width=" + width + ", height=" + height + ", top=" + _ + ", left=" + r;
    window.open(e, "_blank", s)
}

function hybridauth_modal_login_user(e, t, i, _, r, s) {
    1 == t && $("#entry_methods_l1_list_val").html(e.entry_methods_l1_list);
    var o = website_url + "/w/api_2/login.php?provider=" + i;
    "TwitchTV" == i || "Discord" == i ? 1 != t && (o += "&state=user-id:" + s + "+target-button-id:" + r + "+social-action:" + _ + "+entry-level:" + t) : "Twitter" == i && ("" != t && (o += "&entry-level=" + t), "2" == t && "" != _ && (o += "&social-action=" + _ + "&target-button-id=" + r + "&user-id=" + s)), window_open(o)
}

function auto_login_user(e) {
    0 == e.length && setTimeout((function() {
        $("#sw_login_button, input[name=sw_login]").prop("disabled", !1).click()
    }), 1e3)
}

function telegram_login_popup_window() {
    window.Telegram.Login.auth({
        bot_id: "5107056266",
        request_access: !0
    }, (e => {
        if (e) {
            e.id;
            var t = e.first_name,
                i = e.last_name,
                _ = (e.username, e.photo_url, e.auth_date, e.hash, "");
            "" !== t && void 0 !== t && (_ = t), "" !== i && void 0 !== i && (_ += " " + i), _ = _.trim(), $("input[name=sw__login_name]").val(_), $(".social_login_holder").remove(), $(".sw_login, #sw_login_fields").show(), $("#sw__login_email_wrapper").effect("shake", {
                direction: "side",
                times: 4,
                distance: 10
            }, 700), $("#sw_input_header_email_asterik").css("color", "red")
        } else;
    }))
}

function update_view_l1(e, t) {
    e = e || authService.login_with_api;
    var i = "",
        _ = "",
        r = authService.loggedInWithApi(e);
    if (r && ("facebook" == e && (i = r.profile.name, _ = r.profile.email, auto_login_user(t.entry_methods_l1_list)), $(".social_login_holder").hide(), $("#sw_login_fields").show()), "" == i) i = ($("input[name=sw__login_name]").val() || "").trim();
    if ("" == _) _ = ($("input[name=sw__login_email]").val() || "").trim();
    $("input[name=sw__login_name]").val(i || i), $("input[name=sw__login_email]").val(_ || _)
}

function button_click_event(e, t, i) {
    $(this).html(e).css("cursor", t || "pointer").prop("disabled", i || !1)
}

function social_login_events_bindings(e) {
    $(document.body).on("click", "#facebook_login_button", (function(t) {
        t.preventDefault(), authService.loggedInWithApi("facebook") ? update_view_l1("facebook", e) : (FB.init(constants.facebook), FB.login((function(t) {
            "connected" === t.status && get_facebook_user_info(t, e, e.age_verification)
        }), {
            scope: "email, user_birthday"
        }))
    }))
}

function delete_cookie(e, t, i) {
    get_cookie(e) && (document.cookie = e + "=" + (t ? ";path=" + t : "") + (i ? ";domain=" + i : "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT")
}

function user_logout_click(e, t) {
    if (1 == e.widget_embedded) {
        const e = '{"command": "SET", "token": ""}';
        parent.postMessage(JSON.stringify(e), "*")
    } else localStorage.clear();
    ga_gtag(e, "SweepWidget logout", "Logout", "Logout success"), window.location.reload()
}

function show_spam_message(e, t) {
    $("#verify_email_not_verified_wrapper").hide(), $("#viral_giveaway_main_wrapper").hide();
    var i = "",
        _ = "",
        r = 0;
    if ("2" == t && (i = "Error: duplicate entry.", r = 1, 0), "5" == t && "36770" == e.admin_user_id ? (i = 'This entry has been flagged as spam. If you believe you have been falsely flagged as spam please contact <a href="mailto:competition@quizlet.com">competition@quizlet.com</a>.', r = 1, 0) : "9" == t ? (i = "You have been disqualified from this giveaway.", r = 0, 0) : "10" == t ? (i = "There was an error validating your browser. Please reload the page and try again.", r = 1, 0) : "21" == t ? (i = "Sorry, you have run out of remaining entries for this giveaway.", r = 0, 0) : "23" == t ? (i = '<div style="text-align:left;">Sorry, but we had a hard time validating <u>' + e.sw__login_email + "</u>. Please try entering with a different email address from a common provider such as:</div><ul><li>Gmail.com</li><li>Hotmail.com</li><li>Outlook.com</li><li>Yahoo.com</li><li>GMX.com</li><li>Or, most other major email providers. Thank you!</li></ul>", r = 1, 0) : "20" == t ? (i = "Only 1 email address is allowed per person. Please login with the original email address you used to enter:<br /><br />" + e.related_emails, r = 1, 0) : "25" == t ? (i = "There was an issue verifying you. Possible known issues: check if you already entered this giveaway with a different email address, try disabling your VPN if you're using one, or try entering on a different device.", r = 1, 0) : "3" == t || "15" == t || "31" == t || "32" == t || "33" == t || "34" == t || "35" == t || "36" == t || "37" == t || "61" == t || "62" == t || "63" == t || "64" == t || "65" == t || "66" == t || "67" == t || "68" == t || "69" == t || "70" == t || "71" == t || "72" == t || "73" == t || "75" == t || "76" == t || "77" == t || "78" == t || "79" == t || "80" == t ? (i = "This entry has been flagged by our anti-spam system. (" + t + ")", r = 0, 0) : "74" == t ? (i = "This entry has been flagged by our anti-spam system. (" + t + "). Please clear your history, cache, and cookies. Then, try entering again.", r = 0, 0) : "39" == t ? (i = 'This entry has been flagged by our anti-spam system. Please make sure your browser allows both "trackers" and "3rd party cookies" and try again. (' + t + ")", r = 0, 0) : "50" == t ? (i = "Woah nelly... you are entering too fast.", r = 0, 1) : "51" == t ? (i = "This email address has been disqualified from entering.", r = 0, 1) : "55" == t ? (i = 'This is an invalid phone number format. Please enter your phone number using a valid format with the "+" symbol, country code, area code (if applicable), and phone number.', r = 0, 1) : "56" == t ? (i = "Sorry, but you are too young to enter this contest.", r = 0, 1) : "57" == t ? (i = "Sorry, but you are too old to enter this contest.", r = 0, 1) : "81" == t ? (i = "Please disable your VPN to enter this contest.", r = 1, 1) : "101" == t ? (i = "An account already exists with this IP address.", r = 1, 1) : "102" == t ? (i = "This wallet address has already been submitted by you or someone else. Please enter a unique wallet address.", r = 1, 1) : "103" == t ? (i = "One or more wallet addresses have already been submitted by you or someone else. Please only enter a unique wallet addresses that haven't been entered.", r = 1, 1) : (i = "This entry has been flagged by our anti-spam system. (" + t + ")", r = 0, 0), $(".sw_unlock_additional_entries, .sw_login").hide(), 1 == r) _ = '<div style="width:100%; margin:25px 0; text-align:center; float:left;"><div id="spam_reload_widget" style="' + e.login_button_css + '; padding:15px; width:30px; height:30px; border-radius:50px; webkit-border-radius:50px; -moz-border-radius:50px; o-border-radius:50px; font-size:32px; display:inline-block; cursor:pointer; float:none;"><i class="fas fa-redo"></i></div></div>';
    $(".sw_inner_entry_methods").html('<div style="margin: 15px 0% 30px 0px; color:#' + e.body_font_color + "; font-size:" + e.body_font_size + 'px; font-weight:bold;" id="sw_entry_amount_allowed_text"><div style="width:100%; margin:0 0 0px 0; line-height:28px; float:left;">' + i + _ + "</div></div>").show(), $(document.body).on("click", "#spam_reload_widget", (function() {
        window.location.reload()
    }))
}

function update_leaderboard(e) {
    $("#leaderboard_wrapper").html(e)
}

function update_user_remaining_entries_display(e, t, i) {
    if (1 == e && i > 0) {
        if (0 == t || t > 1) var _ = " Remaining Entries";
        else _ = " Remaining Entry";
        $("#user_remaining_allowed_entries_amount_wrapper").show(), $("#user_remaining_allowed_entries_amount_remaining").html(t), $("#user_remaining_allowed_entries_amount_text").html(_)
    }
}

function l1_custom_fields_highlight_errors(e, t, i, _, r, s) {
    var o = r.split("_");
    if ("secret" == o[0]) var n = "secret_code",
        a = o[2];
    else n = o[0], a = o[1];
    var d = "0";
    "select" != n && "radio" != n && "secret_code" != n || (void 0 === (d = "secret_code" == n ? $("#sw_" + (n + "_" + a + "_1") + "_header").attr("data-required-correct") : "1") && (d = "0"), d = parseInt(d, 10));
    var l = 0;
    console.log("data_required", ""), console.log("entry_method_each_val", t), l = "" == t || void 0 === t ? 0 : 1, r.includes("btc_crypto_wallet") && !1 === /^([13]|bc1)[A-HJ-NP-Za-km-z1-9]{27,34}$/.test(t) && (l = 0), (r.includes("eth_bep20_crypto_wallet") || r.includes("bep2_crypto_wallet")) && !1 === /^0x[a-fA-F0-9]{40}$/.test(t) && (l = 0), 1 == l ? ($(i).css("color", "#" + e.body_font_color).css("font-weight", "normal"), $("#sw_" + r).css("background", "#fff").css("border", e.input_border_width + "px solid #" + e.input_border_color), $(s).val($("input[name=sw_login_errors_holder]").val() + "0,")) : ($(i).css("color", "#" + e.error_color).css("font-weight", "bold"), $("#sw_" + r).css("background", "#" + e.error_background).css("border", e.input_border_width + "px solid #" + e.error_background), $(s).val($("input[name=sw_login_errors_holder]").val() + "1,"))
}

function l1_custom_fields_error_check_values(e, t) {
    if ("" !== t && void 0 !== t) {
        var i = t.split(",");
        $.each(i, (function(t, i) {
            var _ = i.split("|"),
                r = _[0],
                s = _[1],
                o = r.replace("text_input", "input"),
                n = entry_method_fetch_values(r, "input_field_type", "", "", "", e.language, e.translate),
                a = o + "[name=sw_" + s + "]";
            entry_method_each_val = "radio" == o || "checkbox" == o ? $(n + "[name=sw_" + s + "]:checked").val() : $(n + "[name=sw_" + s + "]").val(), console.log("entry_method_each_type", r);
            l1_custom_fields_highlight_errors(e, entry_method_each_val, "#sw_" + s + "_header", a, s, "input[name=sw_login_errors_holder]")
        }))
    }
}

function l1_custom_fields_values(e) {
    var t = e.entry_methods_l1_list,
        i = [];
    return "" !== t && void 0 !== t && t.forEach((function(_, r) {
        var s = parseInt(t[r].entry_id),
            o = parseInt(t[r].entry_group_id),
            n = parseInt(t[r].entry_method),
            a = switch_entry_method_int_to_text(n),
            d = parseInt(t[r].input_options_1),
            l = entry_method_fetch_values(a, "input_field_type", "", "", "", e.language, e.translate),
            c = a + "_" + s + "_" + o;
        if ("checkbox" == a)
            if ($(l + "[name=sw_" + c + "]").is(":checked")) var p = "on";
            else p = 0;
        else if ("radio" == a) p = $(l + "[name=sw_" + c + "]:checked").val();
        else p = $(l + "[name=sw_" + c + "]").val();
        a.includes("crypto_wallet") ? i.push(a + "|" + s + "|" + p + "|" + d) : i.push(a + "|" + s + "|" + p)
    })), i
}

function build_widget_body(e, t) {
    var i = "",
        _ = "",
        r = "";
    if (1 == e.form_box_shadow) var s = "box-shadow:0px 0px 7px 0px #e1e1e1; -webkit-box-shadow:0px 0px 7px 0px #e1e1e1; -moz-box-shadow:0px 0px 7px 0px #e1e1e1;";
    else s = "";
    1 == e.entry_methods_l2_count ? e.entries_or_points_singular : e.entries_or_points_plural;
    var o = "";
    if (e.entry_methods_l2_count > 1);
    else;
    if (1 == t.user_required_entry_methods_finished) var n = t.user_remaining_not_required_entry_ids_count;
    else n = e.entry_methods_l2_count;
    var a = n > 1 ? e.translate.ways : e.translate.way;
    if (0 == t.user_entry_amount) o = "";
    else {
        if (1 == e.if_unlock_rewards) i = unlock_rewards_display_func(e, t), _ = earned_rewards_dropdown_func(e, t);
        if (e.require_verify_email || e.require_verify_sms) r = verify_email_display_func(e, t);
        if ("en" == e.language) o = ' <span style="font-weight:bold; color:#' + e.default_color_unlock + '">' + t.user_remaining_entry_ids_count + "</span> more " + a.toLowerCase() + " to enter.";
        else o = " " + e.translate.more_ways_to_enter + ': <span style="font-weight:bold; color:#' + e.default_color_unlock + '">' + t.user_remaining_entry_ids_count + "</span>"
    }
    var d = "";
    if (1 == e.show_stq_skill_question || "CA" == e.user_country_code && 0 == t.user_entry_amount) d = '<div class="sw_row_1"><div class="sw_input_holder_simple"><div id="stq_skill_question_holder" class="sw_input_header_3" style="font-size:' + e.body_font_size + 'px;"><div id="stq_skill_question"></div></div></div><div id="stq_skill_question_input_holder"><input type="number" id="stq_skill_question_answer" class="sw_text_input" placeholder="" /></div></div>';
    var l = "";
    if (1 == e.age_verification) {
        var c = '<select style="border:' + e.input_border_width + "px solid #" + e.input_border_color + ';" name="sw_input_birthday_month" id="sw_input_birthday_month" class="sw_select_third_l"><option value="">mm</option></select>',
            p = '<select style="border:' + e.input_border_width + "px solid #" + e.input_border_color + ';" name="sw_input_birthday_day" id="sw_input_birthday_day" class="sw_select_third_m"><option value="">dd</option></select>',
            u = '<select style="border:' + e.input_border_width + "px solid #" + e.input_border_color + ';" name="sw_input_birthday_year" id="sw_input_birthday_year" class="sw_select_third_r"><option value="">yyyy</option></select>';
        l = '<div class="sw_row_2"><div id="sw_input_birthday_header" class="sw_row_full_header_left" style="font-size:' + e.body_font_size + 'px;">' + capitalizeFirstLetterEachWord(e.date_of_birth_display) + ' *</div><div class="sw_row_1">' + c + p + u + "</div></div>"
    }
    e.translate.hello, t.user_name, e.translate.hello, t.user_name;
    if ("" !== e.image_loc) {
        if (1 == e.image_display) e.sw_text_1_margin, e.fill_in_user_details_text;
        else if (ie >= 2) e.sw_text_1_margin, e.fill_in_user_details_text
    } else e.sw_text_1_margin, e.fill_in_user_details_text;
    if (0 == e.user_country_allowed) var y = '<div class="not_allowed_wrapper" style="color:#' + e.body_font_color + "; font-weight:bold; background:#" + e.body_background_color + ';">' + e.translate.this_location_is_not_allowed_to_enter + ".</div>";
    else {
        if (0 == t.user_id) {
            var w = "",
                v = "",
                m = "",
                h = "",
                f = "",
                b = "",
                g = "",
                x = "",
                k = "",
                z = "",
                q = "",
                T = "",
                I = "",
                S = !1;
            if (0 == e.facebook_login && 0 == e.twitter_login && 0 == e.instagram_login && 0 == e.pinterest_login && 0 == e.google_login && 0 == e.linkedin_login && 0 == e.twitch_login && 0 == e.discord_login && 0 == e.steam_login && 0 == e.yahoo_login && 0 == e.tumblr_login && 0 == e.openid_login && 0 == e.telegram_login) S = !0;
            var L = "",
                E = "";
            if (1 == e.social_login_require) {
                var C = e.translate.login + ":",
                    j = "width:100%; margin-top:-10px; margin-bottom:20px; text-align:center;",
                    M = (L = "width:300px; max-width:90%;", "");
                E = "margin:0 auto 20px auto; height:47px; font-size:26px; border-radius:12px; -webkit-border-radius:12px; -moz-border-radius:12px; -o-border-radius:12px; float:none;"
            } else C = e.login_with_display, j = "width:100%; margin-top:-10px; margin-bottom:20px; text-align:center;", M = "display:inline-block; float:none;", E = "float:left;";
            if (1 == e.facebook_login && window.FB) v = '<div id="facebook_login_button_holder" class="social_login_button_holder" style="' + M + '"><span id="facebook_login_button" data-provider="Facebook" style="' + L + " " + E + '"><i class="fab fa-facebook-f"></i></span></div>';
            if (1 == e.twitter_login) m = '<div id="twitter_login_button_holder" class="social_login_button_holder" style="' + M + '"><span id="twitter_login_click" data-provider="Twitter" style="' + L + " " + E + '"><i class="fab fa-twitter"></i></span></div>';
            if (1 == e.pinterest_login) h = "";
            if (1 == e.google_login) f = '<div id="google_login_button_holder" class="social_login_button_holder" style="' + M + '"><span id="google_login_click" data-provider="Google" style="' + L + " " + E + '"><i class="fab fa-google"></i></span></div>';
            if (1 == e.linkedin_login) b = '<div id="linkedin_login_button_holder" class="social_login_button_holder" style="' + M + '"><span id="linkedin_login_click" data-provider="LinkedIn" style="' + L + " " + E + '"><i class="fab fa-linkedin"></i></span></div>';
            if (1 == e.twitch_login) g = '<div id="twitch_login_button_holder" class="social_login_button_holder" style="' + M + '"><span id="twitch_login_click" data-provider="TwitchTV" style="' + L + " " + E + '"><i class="fa-brands fa-twitch"></i></span></div>';
            if (1 == e.discord_login) x = '<div id="discord_login_button_holder" class="social_login_button_holder" style="' + M + '"><span id="discord_login_click" data-provider="Discord" style="' + L + " " + E + '"><i class="fa-brands fa-discord"></i></span></div>';
            if (1 == e.steam_login) k = '<div id="steam_login_button_holder" class="social_login_button_holder" style="' + M + '"><span id="steam_login_click" data-provider="Steam" style="' + L + " " + E + '"><i class="fa-brands fa-steam"></i></span></div>';
            if (1 == e.yahoo_login) z = '<div id="yahoo_login_button_holder" class="social_login_button_holder" style="' + M + '"><span id="yahoo_login_click" data-provider="Yahoo" style="' + L + " " + E + '"><i class="fa-brands fa-yahoo"></i></span></div>';
            if (1 == e.tumblr_login) q = '<div id="tumblr_login_button_holder" class="social_login_button_holder" style="' + M + '"><span id="tumblr_login_click" data-provider="Tumblr" style="' + L + " " + E + '"><i class="fa-brands fa-tumblr"></i></span></div>';
            if (1 == e.openid_login) T = '<div id="openid_login_button_holder" class="social_login_button_holder" style="' + M + '"><span id="openid_login_click" data-provider="OpenID" style="' + L + " " + E + '"><i class="fa-brands fa-openid"></i></span></div>';
            if (1 == e.telegram_login) I = '<div id="telegram_login_button_holder" class="social_login_button_holder" style="' + M + '"><span id="telegram_login_click" data-provider="Telegram" style="' + L + " " + E + '"><i class="fa-brands fa-telegram"></i></span></div>';
            if (0 == S) w = '<div class="social_login_holder"><div class="social_login_header_wrapper" style="font-size:' + e.body_font_size + "px; " + j + '">' + C + "</div>" + v + m + h + f + b + g + x + k + z + q + T + I + "</div>"
        } else w = "";
        if ("" !== e.email_pre_fill || "" !== e.name_pre_fill) var F = e.email_pre_fill,
            A = e.name_pre_fill;
        else F = t.user_email, A = t.user_name;
        if (1 == e.require_verify_sms) var O = '<div class="sw_row_1"><div class="sw_input_holder_simple"><div id="sw_input_header_sms" class="sw_input_header_3" style="font-size:' + e.body_font_size + 'px;">' + e.translate.phone_number + ' *</div></div><div style="width:100%; margin:8px 0 0 0; text-align:left; float:left;"><input type="tel" name="sw__login_phone_number[main]" id="telephone" class="sw_text_input" placeholder="" /></div></div>';
        else O = "";
        y = '<div style="background:#' + e.body_background_color + "; font-size:" + e.body_font_size + 'px;" class="sw_login">' + w + '<div id="sw_login_fields"><div id="sw__login_name_wrapper" class="sw_row_1"><div class="sw_input_header_left"><div id="sw_input_header_name" class="sw_input_header_3" style="font-size:' + e.body_font_size + 'px;">' + e.full_name_display + ' <span id="sw_input_header_name_asterik">*</span></div></div><input maxlength="255" class="sw_text_input" type="text" name="sw__login_name" value="' + A + '" placeholder="John Doe" /></div><div id="sw__login_email_wrapper" class="sw_row_1"><div class="sw_input_holder_simple"><div id="sw_input_header_email" class="sw_input_header_3" style="font-size:' + e.body_font_size + 'px;">' + e.email_address_display + ' <span id="sw_input_header_email_asterik">*</span></div></div><input maxlength="255" class="sw_text_input" type="email" name="sw__login_email" value="' + F + '" placeholder="name@example.com" /></div>' + O + l + '<div id="sw_login_additional_entry_methods"></div>' + d + '<div id="login_button_holder" class="sw_row_no_margin" ><button id="sw_login_button" class="sw_login_input" style="' + e.login_button_css + ';" name="sw_login">' + e.buttons_enter_text + "</button></div></div></div>"
    }
    if (1 == e.remove_footer) var P = "padding:5px 0 10px 0;";
    else P = "";
    var D = '<div id="sw_logout_link_holder" style="background:#' + e.body_background_color + "; " + P + ';"><span style="color:#' + e.light_text + ';" id="sw_user_account_link"><i class="fas fa-user"></i></span>&nbsp;&nbsp;<span style="color:#' + e.light_text + ';" onclick="window.location.reload()"><i class="fas fa-sync-alt"></i></span>&nbsp;&nbsp;<span style="color:#' + e.light_text + ';" id="sw_logout_link"><i class="fas fa-power-off"></i></span></div>';
    e.translate.time_left, e.translate.remaining;
    if ("" !== t.user_id) var W = D;
    else W = '<div id="sw_logout_link_holder_shell"></div>';
    if (0 == t.user_id || 1 == e.show_stq_skill_question || "CA" == e.user_country_code && 0 == t.user_entry_amount) var B = '<div id="sw_welcome_back_row_shell"></div>',
        R = y;
    else if ("" !== t.user_id && 0 == t.user_entry_amount) {
        if (e.entry_methods_l1_count >= 1 && "" !== t.user_id) {
            var N = "";
            e.buttons_enter_text, e.body_background_color, e.body_font_size
        } else N = "", e.buttons_enter_text;
        B = "", R = y, W = D
    } else if ("" !== t.user_id && t.user_entry_amount > 0) {
        B = "", R = y, W = D;
        var H = t.user_entries_array.join("")
    } else B = "", R = "", W = D, H = e.translate.no_entries_yet;
    if (0 == t.user_entry_amount) H = '<p style="margin-top:0;"><i class="fas fa-lock"></i>&nbsp; ' + e.translate.please_login_to_view_your_entries + "</p>";
    if (e.days_left < 0) {
        e.display_winners || "" === t.user_id || (e.display_winners = "<br><br><i>" + e.translate.you_will_be_notified_if_you_win + "!</i>");
        e.translate.ended, capitalizeFirstLetter(e.entries_or_points_plural), R = '<div class="scheduled_start_end_message" style="background:#' + e.body_background_color + ';">' + e.translate.this_giveaway_ended + " " + e.end_time_display + " " + e.timezone_display + "." + e.display_winners + "</div>", B = ""
    }
    if (0 == e.has_started) {
        var Y = e.days_until_begin > 1 ? e.translate.days : e.translate.day;
        e.days_until_begin, e.translate.until_start, R = '<div class="scheduled_start_end_message" style="background:#' + e.body_background_color + ';">' + e.translate.this_giveaway_will_begin_soon + ": " + e.start_time_display + " " + e.timezone_display + ".</div>", B = ""
    }
    if (1 == e.begins_in_less_than_24_hours) e.hour_minutes_until_begin, e.translate.time, e.translate.until_start;
    if (1 == e.ends_in_less_than_24_hours) e.hour_minutes_until_end, e.translate.time, e.translate.remaining;
    var U = "",
        G = (e.title.length, Math.round(parseInt(e.title_font_size) + parseInt(e.title_font_size) / parseInt(3)));
    if ("ffffff" == e.body_background_color && "555555" == e.title_font_color) var V = !0;
    else V = !1;
    var J = "",
        X = "";
    if (X = 1 == e.hide_description || "" == e.description ? "padding-top:0; padding-bottom:0;" : "padding-top:5px; padding-bottom:5px;", "" !== e.image_loc || "" !== e.youtube_feature && 2 == e.image_or_video) {
        var Q = "sw_desc";
        if (1 == e.image_display) {
            if ("" !== e.youtube_feature && 2 == e.image_or_video) var Z = '<iframe type="text/html" width="100%" height="315" src="https://www.youtube.com/embed/' + e.youtube_feature + '?&modestbranding=1&enablejsapi=1" frameborder="0"></iframe>';
            else Z = '<img src="' + e.image_loc_prepend + e.image_loc + ".thumb_" + e.image_width_display + "_width." + e.image_ext + '" />';
            if (1 == V) J = "background:#f6f6f6; margin:30px 0 15px 0;";
            U = '<div class="sw_image">' + Z + '</div><div id="widget_title" class="sw_header" style="line-height:' + G + "px; margin-top:30px; padding-top:0; padding-bottom:0; color:#" + e.title_font_color + "; font-size:" + e.title_font_size + 'px;">' + e.title + '</div> <div id="widget_description" class="' + Q + '" style="background:#' + e.body_description_background_color + ';"><div class="sw_desc_top">' + B + '</div><div id="widget_description_inner" style="' + J + '" class="sw_desc_bottom_1">' + e.description + "</div></div>"
        } else if (e.image_display >= 2)
            if (2 == e.image_display) U = '<div class="sw_image_2"><div style="width:100%; float:left;"><img style="float:left;" src="' + e.image_loc_prepend + e.image_loc + ".thumb_" + e.image_width_display + "_width." + e.image_ext + '" /><div id="widget_description" style="color:#' + e.body_font_color + "; background:#" + e.body_description_background_color + ';" class="sw_image_2_description"><div id="widget_title" class="sw_header_2" style="line-height:' + G + "px; background:#" + e.body_background_color + "; color:#" + e.title_font_color + "; font-size:" + e.title_font_size + 'px;">' + e.title + "</div> " + e.description + "</div></div></div>";
            else if (3 == e.image_display) U = '<div class="sw_image_2"><div style="width:100%; float:left;"><img style="float:right;" src="' + e.image_loc_prepend + e.image_loc + ".thumb_" + e.image_width_display + "_width." + e.image_ext + '" /><div id="widget_description" style="color:#' + e.body_font_color + "; background:#" + e.body_description_background_color + ';" class="sw_image_3_description"><div id="widget_title" class="sw_header_2" style="line-height:' + G + "px; background:#" + e.body_background_color + "; color:#" + e.title_font_color + "; font-size:" + e.title_font_size + 'px;">' + e.title + "</div> " + e.description + "</div></div></div>";
        else if (4 == e.image_display) {
            if (1 == V) {
                var K = "padding-top:0;";
                J = "background:#f6f6f6; " + X + " margin-top:30px; margin-bottom:15px;"
            } else K = "padding-top:30px;", J = "padding-bottom:0px;";
            U = '<div style="' + e.sw_image_2_css + ';" class="sw_image_3"><div id="widget_title" class="sw_header" style="' + K + " line-height:" + G + "px; background:#" + e.body_background_color + "; color:#" + e.title_font_color + "; font-size:" + e.title_font_size + 'px;">' + e.title + '</div> <div id="image_description_wrapper" style="' + J + ';"><div class="sw_image_thumbnail_above_img"><img src="' + e.image_loc_prepend + e.image_loc + ".thumb_" + e.image_width_display + "_width." + e.image_ext + '" /></div><div id="widget_description" class="sw_image_thumbnail_above_text"><div id="widget_description_inner" style="' + J + " color:#" + e.body_font_color + "; background:#" + e.body_description_background_color + ';" class="sw_desc_bottom_4">' + e.description + "</div></div></div>"
        } else if (5 == e.image_display) {
            if (1 == V) K = "padding-top:0;", J = "background:#f6f6f6; " + X + " margin-top:30px; margin-bottom:30px;";
            else K = "padding-top:30px;", J = "padding-top:5px; padding-bottom:10px;";
            U = '<div style="' + e.sw_image_2_css + ';" class="sw_image_3"><div id="widget_title" class="sw_header" style="' + K + " line-height:" + G + "px; padding-bottom:0; background:#" + e.body_background_color + "; color:#" + e.title_font_color + "; font-size:" + e.title_font_size + 'px;">' + e.title + '</div> <div id="image_description_wrapper" style="' + J + ';"><div id="widget_description" class="sw_image_thumbnail_above_text"><div id="widget_description_inner" style="' + J + " color:#" + e.body_font_color + "; background:#" + e.body_description_background_color + ';" class="sw_desc_bottom_4">' + e.description + '</div></div><div class="sw_image_thumbnail_above_img" style="margin-bottom:15px;"><img src="' + e.image_loc_prepend + e.image_loc + ".thumb_" + e.image_width_display + "_width." + e.image_ext + '" /></div></div>'
        } else if (6 == e.image_display) {
            if (1 == V) K = "padding-top:30px;", J = "background:#f6f6f6; " + X + " margin-top:30px; margin-bottom:15px;";
            else K = "padding-top:30px;", J = "padding-bottom:0px;";
            U = '<div id="widget_title" class="sw_header" style=' + K + "; line-height:" + G + "px; background:#" + e.body_background_color + "; color:#" + e.title_font_color + "; font-size:" + e.title_font_size + 'px;">' + e.title + '</div> <div style="' + e.sw_image_2_css + ';" class="sw_image_4"><div class="sw_image_thumbnail_above_img"><img src="' + e.image_loc_prepend + e.image_loc + ".thumb_" + e.image_width_display + "_width." + e.image_ext + '" /></div><div id="widget_description" class="sw_image_thumbnail_above_text"><div id="widget_description_inner" style="' + J + " color:#" + e.body_font_color + "; background:#" + e.body_description_background_color + ';" class="sw_desc_bottom_3">' + e.description + "</div></div></div>"
        } else if (7 == e.image_display) {
            if (1 == V) K = "padding-top:0;", J = "background:#f6f6f6; margin-top:30px; margin-bottom:30px;";
            else K = "padding-top:30px;", J = "padding-top:5px;";
            U = '<div id="widget_title" class="sw_header" style="' + K + "; line-height:" + G + "px; padding-top:30px; padding-bottom:0px; background:#" + e.body_background_color + "; color:#" + e.title_font_color + "; font-size:" + e.title_font_size + 'px;">' + e.title + '</div> <div style="' + e.sw_image_2_css + ';" class="sw_image_4"><div id="widget_description" class="sw_image_thumbnail_above_text"><div id="widget_description_inner" style="' + J + " color:#" + e.body_font_color + "; background:#" + e.body_description_background_color + ';" class="sw_desc_bottom_5">' + e.description + '</div></div><div class="sw_image_thumbnail_above_img_2" style="margin-top:0px; margin-bottom:15px;"><img src="' + e.image_loc_prepend + e.image_loc + ".thumb_" + e.image_width_display + "_width." + e.image_ext + '" /></div></div>'
        } else if (8 == e.image_display) {
            if (1 == V) K = "padding-top:30px;", J = "background:#f6f6f6; " + X + " margin-top:30px; margin-bottom:15px;";
            else K = "padding-top:30px;", J = "padding-bottom:0px;";
            var ee = "",
                te = "";
            e.custom_image_width > 0 && (ee = 'width="' + e.custom_image_width + '" '), e.custom_image_height > 0 && (te = 'height="' + e.custom_image_height + '" ');
            U = '<div id="widget_title" class="sw_header" style="' + K + "; line-height:" + G + "px; background:#" + e.body_background_color + "; color:#" + e.title_font_color + "; font-size:" + e.title_font_size + 'px;">' + e.title + '</div> <div style="' + e.sw_image_2_css + ';"><div class="sw_image_thumbnail_above_img"><img style="max-width:100%;" src="' + e.image_loc_prepend + e.image_loc + ".thumb_" + e.image_width_display + "_width." + e.image_ext + '" ' + ee + te + ' /></div><div id="widget_description" class="sw_image_thumbnail_above_text"><div id="widget_description_inner" style="' + J + " color:#" + e.body_font_color + "; background:#" + e.body_description_background_color + ';" class="sw_desc_bottom_3">' + e.description + "</div></div></div>"
        }
    } else {
        if (1 == V) K = "padding-top:30px; padding-bottom:0px;", J = "background:#f6f6f6; " + X + " margin-top:30px; margin-bottom:15px;";
        else K = "padding-top:30px; padding-bottom:0px;", J = "" + X;
        Q = "sw_desc_2";
        var ie = "";
        e.form_border_color, U = '<div id="widget_title" class="sw_header" style="line-height:' + G + "px; " + K + " color:#" + e.title_font_color + "; font-size:" + e.title_font_size + 'px;">' + e.title + '</div> <div id="widget_description" style="' + J + e.sw_image_3_css + "; background:#" + e.body_description_background_color + ';" class="sw_desc_bottom_3">' + e.description + "</div>"
    }
    var _e = 1 == t.user_entry_amount ? e.entries_or_points_singular : e.entries_or_points_plural,
        re = 1 == e.number_of_winners ? e.translate.winner : e.translate.winners;
    if (1 == e.days_left_clock) {
        var se = e.translate.day;
        capitalizeFirstLetter(e.translate.day)
    } else se = e.translate.days, capitalizeFirstLetter(e.translate.days);
    if ($(".sw_container_inner").html('<div id="sw_inner" class="sw_inner" style="max-width:' + e.form_max_width + e.px_or_pct + "; font-family:'" + e.form_font_family + "', sans-serif; color:#" + e.body_font_color + "; border:" + e.form_border_width + "px solid #" + e.form_border_color + "; border-radius:" + e.form_border_radius + "px; -webkit-border-radius:" + e.form_border_radius + "px; -moz-border-radius:" + e.form_border_radius + "px; " + s + 'width:95%; margin-left:auto; margin-right:auto; text-align:center; display:inline-block;"><div class="sw_inner_2"> </div></div>'), 1 == e.hide_all_entries) var oe = "sw_top_2";
    else oe = "sw_top_3";
    var ne = '<div id="sw_top_1" class="' + oe + '"><div style="border-right:1px solid #' + e.form_border_color + ';" class="sw_top_inner"><div style="color:#' + e.top_numbers_font_color + "; font-size:" + e.top_numbers_font_size + 'px;" class="sw_top_l"><span id="sw_my_entries">' + (t.user_entry_amount || 0) + '</span></div><div style="color:#' + e.top_text_font_color + "; font-size:" + e.top_text_font_size + 'px;" class="sw_top_row"><div class="sw_top_row_1">' + e.entries_or_points_my + "</div></div></div></div>",
        ae = '<div  id="sw_top_2"class="' + oe + '"><div style="border-right:1px solid #' + e.form_border_color + ';" class="sw_top_inner"><div style="color:#' + e.top_numbers_font_color + "; font-size:" + e.top_numbers_font_size + 'px;" class="sw_top_l"><span id="sw_total_entries_count_all">' + (e.total_entries_count_display || 0) + '</span></div><div style="color:#' + e.top_text_font_color + "; font-size:" + e.top_text_font_size + 'px;" class="sw_top_row"><div class="sw_top_row_1">' + e.entries_or_points_all + "</div></div></div></div>",
        de = '<div id="sw_top_3" class="' + oe + '"><div style="' + e.form_border_color + '; padding-bottom:0;" class="sw_top_inner"><div id="clockdiv"><span class="clockdiv_top_row"><span class="days" style="color:#' + e.top_numbers_font_color + "; font-size:" + e.top_numbers_font_size + 'px; font-weight:bold;"></span> &nbsp;<span style="color:#' + e.top_text_font_color + "; font-size:" + e.top_text_font_size + 'px; font-weight:normal;">' + se + '</span></span><div class="sw_bottom_row_2 clockdiv_bottom_row" style="color:#' + e.top_text_font_color + "; font-size:" + e.top_text_font_size + 'px; font-weight:normal;"><span class="hours"></span> : <span class="minutes"></span> : <span class="seconds"></span></div></div></div></div>';
    if (1 == e.hide_all_entries) ae = "";
    var le = '<div id="viral_giveaway_main_wrapper" style="background:#' + e.body_background_color + ';"></div>';
    $(".sw_inner_2").html('<div style="' + e.sw_top_css + '" class="sw_top"></div>'), $(".sw_top").append(ne + ae + de), e.deleted >= 1 ? $(".sw_inner_2").append('<div style="background:#' + e.body_description_background_color + ";font-size:" + e.body_font_size + 'px;" class="' + 'sw_title_image_desc_row"><h2 style="width:90%; margin:40px 5% 30px 5%;">This giveaway was removed.</h2></div>') : $(".sw_inner_2").append('<div style="background:#' + e.body_description_background_color + ";font-size:" + e.body_font_size + 'px;" class="' + 'sw_title_image_desc_row">' + U + "</div>" + R + le);
    var ce = my_entries_display_func(e, e.language, e.translate, t.user_entry_amount, _e, t.user_name, e.default_color);
    if (1 == e.user_country_allowed) {
        if ("" !== o || "" !== ce) var pe = '<div id="sw_entry_amount_allowed_text"><span id="sw_entry_method_result_text">' + ce + '&nbsp;</span><span id="sw_entry_amount_allowed_text_inner">' + o + "</span></div>";
        else pe = '<div id="sw_entry_amount_allowed_text"><span id="sw_entry_method_result_text"></span><span id="sw_entry_amount_allowed_text_inner"></span></div>';
        if (1 == e.if_leaderboard) var ue = "width:28%; margin-left:4%; text-align:center; line-height:22px; display: flex; justify-content: center;",
            ye = "width:28%; margin-left:4%; margin-right:4%; text-align:center; line-height:22px; display: flex; justify-content: center;",
            we = '<div style="width:28%; margin-right:4%; text-align:center; line-height:22px; display: flex; justify-content: center; color:#' + e.body_font_color + '; text-align:center;" id="tabs_leaderboard">' + e.translate.leaders + "</div>";
        else ue = "width:42.5%; margin-left:5%; margin-right:2.5%; text-align:center; display: flex; justify-content: center;", ye = "width:42.5%; margin-left:2.5%; margin-right:5%; text-align:center; display: flex; justify-content: center;", we = "";
        if (e.require_verify_email && 0 == t.is_verified) var ve = '<div id="verify_email_not_verified_wrapper" style="display:none;">',
            me = "</div>";
        else ve = '<div id="verify_email_not_verified_wrapper">', me = "</div>";
        $(".sw_inner_2").append('<div style="background:#' + e.body_background_color + "; font-size:" + e.body_font_size + 'px;" class="sw_inner_entry_methods">' + r + ve + i + _ + '<div id="view_earned_rewards_results_wrapper">' + t.earned_rewards_display + "</div>" + pe + '<div id="sw_entry_method_result_amount"></div><div id="tabs_wrapper" style="text-align:center; display: flex; justify-content: center;"><div id="tabs_entry_methods" style="' + ue + " color:#" + e.body_font_color + '">' + e.entries_or_points_earn + '</div><span id="tabs_show_hide_users" style="' + ye + " color:#" + e.body_font_color + '">' + capitalizeFirstLetterEachWord(e.entries_or_points_my) + "</span>" + we + '</div><div id="user_remaining_allowed_entries_amount_wrapper"><span id="user_remaining_allowed_entries_amount_remaining"></span><span id="user_remaining_allowed_entries_amount_text"></span></div><div id="sw_inner_entry_methods_l2_wrapper"></div><div id="show_user_entries">' + H + '</div><div id="leaderboard_wrapper"></div>' + me + "</div>"), 0 == t.user_entry_amount && $("#sw_entry_method_result_text").hide()
    }
    var he = '<div class="sw_attribution" style="background:#' + e.body_background_color + '"><a target="_blank" href="' + e.website_url + "?widget-ref=" + e.competition_id + "-" + e.competition_url + '" rel="noopener" style="text-decoration:none;"><img style="margin-bottom:-7px;" src="https://sweepwidget.fra1.digitaloceanspaces.com/images/root/sw_gift_5_dark.png" width="22" height="22" alt="Preview" /> &nbsp;Powered by SweepWidget</a></div>',
        fe = '<h3>Disclaimer</h3><p>This promotion was created by a third party. SweepWidget does not sponsor, endorse, or administer this promotion in any way. SweepWidget does not bear any liability for this promotion. By entering the promotion, you agree to the <a target="_blank" rel="noopener" href="' + e.website_url + '/terms-of-use">terms of use</a> and <a target="_blank" rel="noopener" href="' + e.website_url + '/privacy-policy">privacy policy</a>.</p>';
    if (1 == e.remove_footer && (he = ""), 1 == e.if_facebook) var be = "<p>This contest is in no way sponsored, endorsed, administered by, or associated with Facebook.</p>";
    else be = "";
    if ("" !== e.rules) var ge = '<div style="width:100%; margin-top:13px; float:left;">' + e.rules + be + fe + "</div>";
    else ge = be + fe;
    if (1 == e.age_verification) {
        if (1 == e.age_limit_min_or_max) var xe = e.translate.age_limit,
            ke = "+";
        else if (2 == e.age_limit_min_or_max) xe = e.translate.maximum_allowed_age, ke = "";
        var $e = "<p><strong>" + xe + ":</strong> " + e.age_limit + ke + "</p>"
    } else $e = "";
    if ($(".sw_inner_2").append('<div class="sw_bottom_container" style="' + e.sw_bottom_css + '"><div class="sw_bottom" style="background:#' + e.body_background_color + ';"><div class="sw_bottom_3_l"><div class="sw_bottom_inner"><div id="number_of_winners" class="sw_bottom_l" style="color:#' + e.bottom_color_1 + ';">' + e.number_of_winners + '</div><div class="sw_bottom_row" style="color:#' + e.bottom_color_2 + ';">' + re + '</div></div><div class="sw_bottom_inner_border" style="border-bottom:1px solid #' + e.bottom_border_color + ';"></div></div><div class="sw_bottom_3_m"><div class="sw_bottom_inner"><div id="end_date" class="sw_bottom_l" style="color:#' + e.bottom_color_1 + ';">' + e.end_date + '</div><div class="sw_bottom_row" style="color:#' + e.bottom_color_2 + ';">' + e.translate.end_date + '</div></div><div class="sw_bottom_inner_border" style="border-bottom:1px solid #' + e.bottom_border_color + ';"></div></div><div class="sw_bottom_3_r"><div class="sw_bottom_inner" id="sw_contest_rules_link"><div class="sw_bottom_l" style="color:#' + e.bottom_color_1 + ';">' + e.translate.rules + '</div><div id="sw_contest_rules_link_2" class="sw_bottom_row" style="color:#' + e.bottom_color_2 + ';">' + e.translate.show + '</div></div><div class="sw_bottom_inner_border" style="border-bottom:1px solid #' + e.bottom_border_color + ';"></div></div></div><input type="hidden" name="sw_entry_methods_l1_all" id="sw_entry_methods_l1_all" value="" /><input type="hidden" name="sw_entry_methods_l1_required" id="sw_entry_methods_l1_required" value="" /><input type="hidden" name="sw_login_errors_holder" /> <input type="hidden" name="sw_login_errors_if_pass" /><input type="hidden" name="entry_methods_l1_list_val" id="entry_methods_l1_list_val" /><div style="font-size:' + e.body_font_size + "px; background:# " + e.bottom_background_color + ';" id="sw_footer"><div id="sw_contest_rules_link_holder" style="color:#' + e.body_font_color + ';"></div><div id="sw_contest_rules_holder_outside" style="background:#' + e.body_background_color + ';"><div id="sw_contest_rules_holder"><div class="sw_contest_rules_holder_eligibility_wrapper"><div style="color:#' + e.body_font_color + ';"><p><strong>' + e.translate.start_date + ":</strong> " + e.start_time_display + "</p><p><strong>" + e.translate.end_date + ":</strong> " + e.end_time_display + "</p>" + $e + "</div></div>" + ge + "</div> " + W + '</div><div id="sw_user_account_holder_outside" style="color:#' + e.body_font_color + "; background:#" + e.body_background_color + ';"><div id="sw_user_account_holder"><div id="sw_user_delete_account_parent_wrapper"><div style="width:100%; margin:15px 0 0 0; cursor:pointer; text-decoration:underline; float:left;"><a id="update_personal_details_link" target="_blank" href="' + e.website_url + "/manage-account?u=" + t.user_id + "&hash=" + e.sw_login_hash + '" style="color:#555; opacity:.6;">Update personal details</a></div><div id="sw_user_delete_account_toggle" style="width:100%; margin:0 0 15px 0; opacity:.6; cursor:pointer; text-decoration:underline; float:left;">Delete my account</div><div id="sw_user_delete_account_hidden_wrapper" style="width:100%; float:left; display:none;"><p>Warning: by deleting your user account, all personal data will be deleted and all entries associated with this email address will be deleting from ALL contests you have ever entered.</p><p><strong>YOU WILL BE EMAILED A CONFIRMATION TO ' + t.user_email + ' TO FINALIZE THE DELETION. PLEASE CHECK YOUR SPAM FOLDER.</strong></p><p><button id="delete_sw_account" style="background:#ff6961; color:#fff; font-size:16px; border:1px solid #ff6961; padding:10px 25px; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -o-border-radius:5px; cursor:pointer;">Permanently Delete My Account & All Personal Data</button></p></div></div></div></div>' + he + "</div></div>"), user_account_details(e, t.user_name, t.user_email, t.user_birthday), 1 == e.show_stq_skill_question || "CA" == e.user_country_code && 0 == t.user_entry_amount) {
        var ze = Math.floor(10 * Math.random()) + 1,
            qe = Math.floor(10 * Math.random()) + 1,
            Te = e.translate.answer_this_question + ': <span style="display:inline-block;">' + ze + " + " + qe + "? *</span>";
        $("#stq_skill_question").html(Te)
    }
    if (1 == e.age_verification) {
        if ("" == t.user_birthday || void 0 === t.user_birthday || null == t.user_birthday) var Ie = "",
            Se = "",
            Le = "";
        else {
            var Ee = t.user_birthday.split("-");
            Ie = Ee[0], Se = Ee[1], Le = Ee[2]
        }
        "2" == e.age_verification_format ? ($("#sw_input_birthday_month").removeClass("sw_select_third_l").addClass("sw_select_third_m"), $("#sw_input_birthday_day").removeClass("sw_select_third_m").addClass("sw_select_third_l")) : ($("#sw_input_birthday_month").removeClass("sw_select_third_m").addClass("sw_select_third_l"), $("#sw_input_birthday_day").removeClass("sw_select_third_l").addClass("sw_select_third_m")), birthday_day(Se), birthday_month(Ie), birthday_year(Le)
    }
    update_user_remaining_entries_display(e.if_allowed_entries_amount, t.user_remaining_allowed_entries_amount, t.user_entry_amount), $(document.body).on("click", "#sw_logout_link", (function() {
        user_logout_click(e, t.user_id)
    }))
}

function build_entry_methods_hidden_l1_values(e, t) {
    $("#sw_entry_methods_l1_all").val($("#sw_entry_methods_l1_all").val() + e), 1 == t && $("#sw_entry_methods_l1_required").val($("#sw_entry_methods_l1_required").val() + e)
}

function write_entry_methods(e, t, i, _) {
    if (2 == i.widget_display && "refer_friends" == i.entry_method_text) var r = !0,
        s = "viral_giveaway_main_wrapper",
        o = "sw_entry_input_relative",
        n = "padding-bottom:5px; background:#" + e.body_background_color + ";";
    else r = !1, s = "sw_inner_entry_methods_l2_wrapper", o = "sw_entry_input", n = "background:#" + e.body_background_color + "; border:1px solid #" + e.input_border_color + ";";
    var a = i.entry_id + "|" + i.entry_method_int + "|" + i.entry_group_id,
        d = i.entry_method_text + "_" + i.entry_id + "_" + i.entry_group_id,
        l = i.entry_link_db,
        c = (i.social_account_user_id_db, ""),
        p = "",
        u = "",
        y = "",
        w = "",
        v = e.default_checkmark,
        m = i.amount_db,
        h = 0;
    t.user_entry_amount > 0 && -1 != t.entered_list.indexOf(a) && (m = t.entries_entry_amount_list.entry_amount[a], h = t.entries_incorrect_answer_list.incorrect_answer[a]);
    var f = e.links_font_color;
    if ("1" == h && (v = '<i class="fa-solid fa-circle-xmark"></i>', f = "ff0000"), i.daily_db >= 1 && 1 == i.daily_re_entry_allowed) {
        var b = i.daily_db > 1 ? e.translate.hours : e.translate.hour;
        if (25 == i.daily_db) var g = "&nbsp; " + e.translate.you_can_enter_again + ": <strong>12:00am " + e.time_zone + "</strong>";
        else g = "&nbsp; " + e.translate.you_can_enter_again + ": <strong>" + i.daily_db + " " + b + "</strong>";
        c = '<div id="daily_reenter_display_' + d + '" class="daily_reenter_display"><span class="entry_icon_right_wrapper" style="color:#' + f + ';"><i class="fas fa-stopwatch"></i></span>' + g + "</div>"
    }
    if (1 == e.has_required && 0 == i.required_db && 1 !== t.user_required_entry_methods_finished);
    var x = "",
        k = "",
        z = "",
        q = "";
    if ("" !== i.custom_icon_db && null !== i.custom_icon_db) var T = '<div class="entry_icon_path_display" style="color:' + i.color + "; background:" + i.icon_color_db + ';"><i class="' + i.custom_icon_db + '"></i></div>';
    else T = '<div class="entry_icon_path_display" style="color:' + i.color + "; background:" + i.icon_color_db + ';">' + i.font_awesome_icon + "</div>";
    var I = '<div class="sw_text_inner"><span class="sw_text_inner_text">' + (i.entry_method_handle_db ? i.entry_method_handle_db : i.entry_method_handle) + "</span></div>";
    if ("birthday" == i.entry_method_text) {
        var S = "input_birthday_month,input_birthday_day,input_birthday_year".split(",");
        $.each(S, (function(e, t) {
            var _ = "select|" + t + "_" + i.entry_id + "_" + i.entry_group_id + ",";
            1 == i.entry_level_db && build_entry_methods_hidden_l1_values(_, i.required_db)
        }))
    } else {
        var L = i.entry_method_text + "|" + d + ",";
        1 == i.entry_level_db && build_entry_methods_hidden_l1_values(L, i.required_db)
    }
    if (1 == i.entry_level_db) var E = "sw_input_holder_simple",
        C = "",
        j = "sw_input_header_left",
        M = "sw_textarea",
        F = "sw_select_full_white";
    else if (2 == i.entry_level_db) {
        if (5 == i.input_category) E = "sw_input_holder_simple_2", j = "sw_input_header_left_2", M = "sw_textarea_2", F = "sw_select_full_margin";
        else E = "sw_input_holder_simple_2", j = "sw_input_header_left", M = "sw_textarea", F = "sw_select_full_white";
        C = "sw_input_holder_simple_2"
    }
    var A = 1 == i.amount_db ? e.entries_or_points_singular : e.entries_or_points_plural;
    if (i.entry_amount >= 1 && 0 == i.daily_db)
        if (1 == i.if_entered_db) A = 1 == m ? e.entries_or_points_singular : e.entries_or_points_plural, x = '<div id="sw_entries_worth_' + d + '" class="sw_entries_worth" style="color:#' + e.light_text_entries_worth_1 + '"><div id="sw_center_icon_' + d + '" class="sw_center_icon""><div id="sw_center_icon_tooltip_' + d + '" class="sw_center_icon_tooltip">+' + m + " " + A + '</div><span class="entry_icon_right_wrapper" style="color:#' + f + ';">' + v + "</span></div></div></div>";
        else x = '<div id="sw_entries_worth_' + d + '" class="sw_entries_worth" style="color:#' + e.light_text_entries_worth_1 + ';"><div class="sw_entries_worth_top"><span class="entry_amount_plus">+</span>' + i.amount_display_db + "</div></div>";
    else if (1 == i.daily && i.daily_db >= 1) {
        if (1 == i.daily_db)
            if ("en" == e.language) var O = "Hourly";
            else O = e.translate.hour;
        else if ("en" == e.language) O = e.translate.daily;
        else O = e.translate.day;
        if (0 == i.if_entered_db || 1 == i.daily_re_entry_allowed) x = '<div id="sw_entries_worth_2_' + d + '" class="sw_entries_worth_2" style="color:#' + e.light_text_entries_worth_1 + ';"><div class="sw_entries_worth_daily_top"><span class="entry_amount_plus">+</span>' + i.amount_display_db + '</div><div id="sw_entries_worth_daily_' + d + '" class="sw_entries_worth_daily_2" style="color:#' + e.light_text_entries_worth_2 + '">' + O + "</div></div>";
        else {
            A = 1 == m ? e.entries_or_points_singular : e.entries_or_points_plural;
            user_daily_time_until_reentry = t.user_daily_time_until_reentry || {};
            var P = user_daily_time_until_reentry[a];
            if (1 == i.entry_has_group) var D = t.entry_group_is_finished.entry_id[i.entry_id];
            else D = 0;
            if (-1 != t.user_completed_group_entry_lookup.indexOf(a) || 1 == D) {
                var W = "+" + m + " " + A + ". " + e.translate.completed;
                v = e.default_checkmark
            } else W = "+" + m + " " + A + ". " + e.translate.please_wait_to_enter_again + ": " + P + ".", v = '<i class="fas fa-clock"></i>';
            h = t.entries_incorrect_answer_list.incorrect_answer[a], f = e.links_font_color;
            "1" == h && (v = '<i class="fa-solid fa-circle-xmark"></i>', f = "ff0000");
            x = '<div id="sw_entries_worth_2_' + d + '" class="sw_entries_worth_2" style="color:#' + e.light_text_entries_worth_1 + ';"><div id="sw_center_icon_' + d + '" class="sw_center_icon"><div id="sw_center_icon_tooltip_' + d + '" class="sw_center_icon_tooltip">' + W + '</div><span class="entry_icon_right_wrapper" style="color:#' + f + ';">' + v + "</span></div></div></div>"
        }
    }
    if ("rss" == i.entry_method_text) var B = e.translate.please_subscribe + ': "' + i.entry_title_db + '" RSS';
    else B = i.entry_title_db;
    var R = "";
    y = "";
    if ("" !== i.entry_title_db) R = '<div id="sw_' + d + '_header" class="sw_input_header_3" style="font-size:' + e.body_font_size + 'px;">' + B + "</div>";
    else if ("" !== i.input_header) R = '<div id="sw_' + d + '_header" class="sw_input_header">' + i.input_header + "</div>";
    var N = "";
    if ((R || i.input_header) && (N = ' style="margin-top: 10px;"'), 1 == i.additional_instructions && "" != i.additional_instructions_db) y = '<div class="sw_sub_header_3"' + N + ">" + i.additional_instructions_db + "</div>";
    else if (0 == i.additional_instructions && 1 == i.entry_textarea && "" != i.entry_textarea_db) {
        var H = i.entry_textarea_db;
        "twitter_tweet" == i.entry_method_text && (H = ""), y = H ? '<div class="sw_sub_header_3"' + N + ">" + H + "</div>" : ""
    }
    u = "";
    var Y = "";
    Y = "textarea" == i.entry_method_text || "custom" == i.entry_method_text ? '<textarea maxlength="500" name="sw_' + d + '" id="sw_' + d + '" class="' + M + '" placeholder="' + i.input_placeholder + '" data-gramm="false"></textarea>' : '<input maxlength="255" name="sw_' + d + '" id="sw_' + d + '" class="sw_text_input" type="text" placeholder="' + i.input_placeholder + '" />', (i.verify_header || i.input_placeholder || i.verify_button_text) && (u = '<div class="sw_entry_verify_holder">' + (i.verify_header ? '<div class="sw_verify_header_3">' + i.verify_header + "</div>" : "") + (i.input_placeholder || "twitter_tweet" == i.entry_method_text ? Y : "") + (i.verify_button_text ? '<input type="button" style="' + e.buttons_css + '" id="sw_verify_' + d + '" class="sw_verify" value="' + i.verify_button_text + '" />' : "") + "</div>"), c && (u = '<div id="sw_verify_holder_' + d + '" class="sw_entry_row_verify_show">' + u + c + "</div>"), u && (u = '<div class="' + E + '">' + u + "</div>");
    encodeURIComponent(l);
    var U = "",
        G = (i.entry_link_prepend_db || "").trim() + (l || "").trim();
    if (G) {
        if ("youtube_watch" == i.entry_method_text) {
            var V = G;
            U = '<div style="width:100%; margin:20px 0 20px 0; float:left;"><iframe id="ytplayer-' + i.entry_id + "_" + i.entry_group_id + '" class="' + d + '" type="text/html" width="100%" height="315" src="https://www.youtube.com/embed/' + V + "?rel=0&controls=0&modestbranding=1&enablejsapi=1&origin=" + e.website_url + '" frameborder="0"></iframe></div>'
        } else U = '<div id="sw_embed_' + d + '" data-link="' + G + '" data-fetch="true"></div>';
        U = '<div class="sw_embed_holder">' + U + "</div>"
    }
    if (1 == i.input_category) {
        var J = "";
        p = u;
        if ("upload_a_file" === i.entry_method_text) {
            if ("" != i.additional_instructions_db) y = '<div class="upload_a_file_additional_instructions">' + i.additional_instructions_db + "</div>";
            else y = "";
            J = '<div id="sw_input_row_2_' + d + '" class="' + E + '"><div id="upload_a_file_submit_wrapper_' + i.entry_id + "_" + i.entry_group_id + '" class="upload_a_file_submit_wrapper"><input type="button" style="' + e.buttons_css + '; margin-top:0px;" id="sw_verify_' + d + '" class="sw_verify" value="' + i.verify_button_text + '" /><div style="width:100%; float:left;"><input type="button" style="' + e.buttons_css + "; background:#" + e.error_color_light + "; border:1px solid #" + e.error_color_light + '" id="sw_cancel_' + d + '" class="sw_verify" value="' + capitalizeFirstLetter(e.translate.cancel) + '" /></div></div><div id="upload_a_file_message_' + i.entry_id + "_" + i.entry_group_id + '" class="upload_a_file_message_wrapper"></div><div id="upload_a_file_header_' + i.entry_id + "_" + i.entry_group_id + '" class="upload_a_file_row">' + B + '<div class="upload_a_photo_additional_instructions">' + y + '</div><div class="file_upload_wrapper"><label class="file_upload_label"><input class="file_upload" type="file" id="file_upload_' + i.entry_id + "_" + i.entry_group_id + '" /><span class="upload_a_file_submit" id="upload_a_file_submit_' + i.entry_id + "_" + i.entry_group_id + '" style="color:#' + e.buttons_font_color + "; background:#" + e.buttons_background_color + "; border:1px solid #" + e.buttons_background_color + ';">+ ' + capitalizeFirstLetter(e.translate.select) + '</span></label></div></div><div class="upload_a_file_row"><div class="progress" id="file_upload_progress_bar_' + i.entry_id + "_" + i.entry_group_id + '" style="margin:0px 0 5px 0;"><div id="upload_a_file_progress_' + i.entry_id + "_" + i.entry_group_id + '" class="progress-bar progress-bar-success myprogress" role="progressbar" style="width:0%;">0%</div></div></div><div style="width:100%; margin:20px 0 0 0; text-align:center; float:left;">Allowed file types: ' + i.upload_a_file_ext_db.replace(/\|/g, ", ") + '.</div><div style="width:100%; margin:20px 0 0 0; text-align:center; float:left;">Maximum upload size: 25mb.</div><input type="hidden" id="value_' + d + '" /></div>';
            if (0 == i.require_verification_db) p = ""
        } else if ("refer_friends" === i.entry_method_text) {
            website_url,
            e.competition_id,
            e.competition_url;
            var X = website_url + "/" + e.image_loc + ".thumb_600_width." + e.image_ext,
                Q = i.viral_share_db.split("|"),
                Z = i.viral_share_options.filter((function(e) {
                    return -1 != Q.indexOf(e.name)
                })),
                K = "";Z.forEach((function(_) {
                var r = i.entry_textarea_db;
                if ("" !== e.title) r = r.replace("[TITLE]", e.title);
                var s = "";
                switch (_.label) {
                    case "Email":
                        var o = '<i class="fas fa-envelope"></i>';
                        break;
                    case "Facebook":
                        o = '<i class="fab fa-facebook-f"></i>';
                        break;
                    case "Twitter":
                        o = '<i class="fab fa-twitter"></i>';
                        break;
                    case "Tumblr":
                        o = '<i class="fab fa-tumblr"></i>';
                        break;
                    case "LinkedIn":
                        o = '<i class="fab fa-linkedin-in"></i>';
                        break;
                    case "WhatsApp":
                        o = '<i class="fab fa-whatsapp"></i>';
                        break;
                    case "Skype":
                        o = '<i class="fab fa-skype"></i>';
                        break;
                    case "Pocket":
                        o = '<i class="fab fa-get-pocket"></i>';
                        break;
                    case "Telegram":
                        o = '<i class="fab fa-telegram-plane"></i>'
                }
                if ("email" === _.name) {
                    r = i.additional_instructions_db;
                    s = ' data-subject="Check out this giveaway I entered!" data-to=""'
                } else "facebook" === _.name || "pinterest" === _.name && (s = ' data-image="' + X + '" data-description="' + i.entry_textarea_db + '"');
                if (r = r.replace(/<br >/g, "").replace(/<br \/>/g, ""), "" !== e.title) r = r.replace("[TITLE]", e.title);
                "email" !== _.name && (K += '<button class="sw_share_btn ' + _.name + ' sw_share_btn_refer_friends" id="sw_share_btn_' + _.name + "_" + i.entry_id + "_" + i.entry_group_id + '" data-sharer="' + _.name + '" data-title="' + r + '" data-url="' + t.referral_url + '"' + s + ">" + o + "</button>")
            }));
            var ee = i.amount_db > 1 ? e.entries_or_points_plural : e.entries_or_points_singular;
            if (ee = ee.toLowerCase(), "en" == e.language) var te = " (<strong>+" + i.amount_display_db + "</strong> " + ee + " per user)",
                ie = "Copy Link";
            else te = " (<strong>+" + i.amount_display_db + "</strong> " + ee + ")",
            ie = e.translate.copy;
            var _e = '<div id="sw_entry_' + d + '" class="sw_entry_viral_share text-center"><div class="sw_entry_viral_share_referral"><div class="viral_share_top_wrapper"><div class="viral_share_header">' + i.entry_method_handle_db + te + '</div><div class="sw_share_link_holder" id="sw_share_link_holder_' + d + '"><div class="sw_share_link_holder_inner" style="display: block;"><div class="sw_share_link_input_wrapper"><input type="text" class="sw_share_link" style="text-align:center;" id="sw_share_link_input_' + d + '" style="border:' + e.input_border_width + "px solid #" + e.input_border_color + ';" /><a style="background:#' + e.links_font_color + "; border:" + e.input_border_width + "px solid #" + e.links_font_color + '" id="sw_copy_clipboard_' + d + '" class="btn sw_copy_clipboard" title="' + ie + '" data-copy_link_text="' + ie + '"><i class="far fa-copy"></i></a></div></div></div></div><div class="sw_entry_viral_share_inner" id="sw_entry_viral_share_inner_' + d + '">' + K + "</div></div></div>";J = '<div id="sw_input_row_' + d + '" class="' + E + '">' + _e + "</div>"
        }
    } else if (2 == i.input_category) {
        if ("youtube_like_video" === i.entry_method_text) l = "https://www.youtube.com/watch?v=" + l;
        var re = "";
        i.link_button_text && (re = '<div class="sw_link_holder"><a target="_blank" rel="noopener" href="' + l + '" style="' + e.buttons_css + '" id="sw_link_' + d + '" class="sw_link sw_link_no_style">' + i.link_button_text + "</a></div>");
        J = '<div id="sw_input_row_' + d + '" class="' + E + '"><div class="sw_entry_row_input_inner">' + i.input_header + y + re + "</div></div>";
        var se = "sw_input_holder";
        if ("linkedin_share" == i.entry_method_text || "" != i.verify_button_text && "" != i.link_button_text) se = "sw_input_holder_hidden";
        p = u = '<div id="sw_input_row_3_' + d + '" class="' + se + '">' + u + "</div>";
        if ("facebook_page_visit" == i.entry_method_text || "facebook_page_like" == i.entry_method_text) {
            var oe = "";
            if ("facebook_page_visit" == i.entry_method_text && 1 == i.social_optional_engagement_db && (oe = '<div id="social_holder_' + d + '" style="width:100%; float:left;">' + e.translate.optionally_like_our_fb_page + ': <a target="_blank" rel="noopener" href="' + l + '">' + i.entry_title_db + '</a><div id="fb_like_button_wrapper-' + d + '" style="width:100%; margin:15px 0 20px 0; float:left;"><div class="fb-like" data-href="' + i.entry_link_db + '" data-width="" data-layout="standard" data-action="like" data-size="small" data-share="false"></div>', 0 == i.require_verification_db)) p = "";
            J = '<div id="sw_input_row_2_' + d + '" class="' + E + '">' + oe + '<div id="facebook_page_visit_main_wrapper-' + d + '" class="' + E + '" class="sw_entry_row_input_inner"><div class="sw_link_holder"><div class="sw_input_header_4">' + i.input_header + '</div><a target="_blank" rel="noopener" href="' + l + '" style="' + e.buttons_css_margin_top + '" id="sw_link_' + d + '" class="sw_link sw_link_no_style">' + i.link_button_text + '</a></div></div></div><div id="sw_input_row_2_' + d + '" class="sw_entry_row_verify_show"><div style="margin-top:15px;" class="sw_entry_row_input_inner">' + c + "</div></div>"
        } else if ("twitter_follow" == i.entry_method_text) J = '<div id="sw_input_row_2_' + d + '" class="' + E + '"><div class="sw_entry_row_input_inner"><div class="sw_link_holder"><a target="_blank" rel="noopener" href="' + l + '" style="' + e.buttons_css_margin_top + '" id="sw_link_' + d + '" class="sw_link sw_link_no_style">' + i.link_button_text + "</a></div></div></div>", u = "";
        else if ("linkedin_share" == i.entry_method_text) {
            encodeURIComponent(l);
            var ne = i.entry_title_db.replace(/<br >/g, "").replace(/<br \/>/g, "");
            if ("" !== e.title) ne = ne.replace("[TITLE]", e.title);
            var ae = '<button id="sw_link_linkedin_share_' + i.entry_id + "_" + i.entry_group_id + '" class="sw_share_btn linkedin" data-sharer="linkedin" data-title="' + ne + '" data-url="' + l + '" data-required="1">Share To LinkedIn</button>';
            J = '<div id="sw_input_row_' + d + '" class="sw_input_holder"><div class="sw_entry_row_input_inner">' + (de = '<div id="sw_input_center_' + d + '" class="sw_input_center"><div id="social_button_holder_' + d + '" class="social_button_holder">' + ae + "</div></div>") + "</div></div>"
        } else if ("feedburner" == i.entry_method_text) {
            l = l.replace(/\/$/, "");
            var de = '<form action="https://feedburner.google.com/fb/a/mailverify" method="post" target="popupwindow" onsubmit="window.open( \'https://feedburner.google.com/fb/a/mailverify?uri=' + (l = /[^/]*$/.exec(l)[0]) + '\', \'popupwindow\', \'scrollbars=yes,width=550,height=520\' );return true"><input type="hidden" style="width:140px" name="email" value="' + t.user_email + '" /><input type="hidden" value="' + l + '" name="uri"/><input type="hidden" name="loc" value="en_US"/><div class="sw_link_holder"><input type="submit" class="sw_link" id="sw_link_' + d + '" value="Subscribe" /></div></form>';
            J = '<div id="sw_input_row_' + d + '" class="' + E + '"><div class="sw_entry_row_input_inner">' + de + "</div></div>"
        } else if ("tiktok_watch_video" == i.entry_method_text) {
            var le = l,
                ce = (l = l.replace(/\/$/, ""), /[^/]*$/.exec(l)[0]);
            J = '<div id="sw_input_row_' + d + '" class="' + E + '"><div class="sw_entry_row_input_inner">' + (de = '<blockquote class="tiktok-embed" cite="' + le + '" data-video-id="' + ce + '" style="width:100%;" > <section></section> </blockquote>') + "</div></div>"
        }
    } else if (3 == i.input_category) {
        w = "";
        if (i.link_button_text)
            if (w = '<div class="sw_link_holder"><a target="_blank" href="#" style="' + e.buttons_css + '" id="sw_link_' + d + '" class="sw_link sw_link_no_style sw_link_' + i.entry_method_text + '_button" data-entry_method_text="' + i.entry_method_text + '" data-entry_id="' + i.entry_id + '" data-entry_group_id="' + i.entry_group_id + '" data-entry_textarea_db="' + i.entry_textarea_db + '" data-entry_link_db="' + l + '" data-entry_title_db="' + i.entry_title_db + '" data-amount_db="' + i.amount_db + '" data-daily_db="' + i.daily_db + '" data-has_daily="' + i.has_daily + '" data-required_db="' + i.required_db + '" data-entry_icon_path = "' + i.entry_icon_path + '" data-background_color="' + i.background_color + '" data-verify_button_text = "' + i.verify_button_text + '">' + i.link_button_text + "</a></div>", "twitter_tweet" == i.entry_method_text) {
                pe = (pe = i.entry_textarea_db.replace(/<br >/g, "").replace(/<br \/>/g, "")).replace("&", "%26"), w = '<a href="#" id="sw_link_' + d + '" data-entry_textarea_db="' + pe + '" data-entry_link_db="' + l + '" style="margin-top: 10px; color:#fff;" class="sw_share_btn twitter_button"><span style="margin:0px 8px 0 0; float:left;">' + i.link_button_text + '</span> <i class="fab fa-twitter"></i></a>';
                u = ""
            } else if ("twitter_retweet" == i.entry_method_text) {
            var pe = i.entry_textarea_db.replace(/<br >/g, "").replace(/<br \/>/g, "");
            w = '<a href="#" id="sw_link_' + d + '" data-entry_textarea_db="' + pe + '" data-entry_link_db="' + l + '" style="margin-top: 10px; color:#fff;" class="sw_share_btn twitter_button"><span style="margin:0px 8px 0 0; float:left;">' + i.link_button_text + '</span> <i class="fab fa-twitter"></i></a>';
            u = ""
        } else if ("twitter_follow" == i.entry_method_text) u = '<div id="sw_link_' + d + '_verify" style="display:none;">' + u + "</div>";
        else if ("twitch_follow" == i.entry_method_text) u = '<div id="sw_link_' + d + '_verify" style="display:none;">' + u + "</div>";
        else if ("twitch_subscribe" == i.entry_method_text) u = '<div id="sw_link_' + d + '_verify" style="display:none;">' + u + "</div>";
        else if ("discord_join_server" == i.entry_method_text) u = '<div id="sw_link_' + d + '_verify" style="display:none;">' + u + "</div>";
        else - 1 != i.entry_method_text.indexOf("twitter_") && (w = '<div class="sw_link_holder"><a target="_blank" href="#" id="sw_link_' + d + '" class="sw_share_btn twitter_button" style="color:#fff;" data-entry_method_text="' + i.entry_method_text + '" data-entry_id="' + i.entry_id + '" data-entry_group_id="' + i.entry_group_id + '" data-entry_textarea_db="' + i.entry_textarea_db + '" data-entry_link_db="' + l + '" data-entry_title_db="' + i.entry_title_db + '" data-amount_db="' + i.amount_db + '" data-daily_db="' + i.daily_db + '" data-has_daily="' + i.has_daily + '" data-required_db="' + i.required_db + '" data-entry_icon_path = "' + i.entry_icon_path + '" data-background_color="' + i.background_color + '" data-verify_button_text = "' + i.verify_button_text + '"><span style="margin:0px 0px 0 0; float:left;">' + i.link_button_text + "</span></a></div>");
        J = '<div id="sw_input_row_' + d + '" class="' + E + '"><div id="sw_' + d + '_header" class="sw_input_header">' + i.input_header + y + '</div><div class="sw_entry_row_input_inner"><div id="sw_container_' + i.entry_method_text + '"></div>' + w + "</div>" + u + "</div>";
        if (0 == i.require_verification_db) p = ""
    } else if (4 == i.input_category) {
        p = u;
        if ("birthday" == i.entry_method_text) {
            var ue = '<select name="sw_input_birthday_month_' + i.entry_id + "_" + i.entry_group_id + '" id="sw_input_birthday_month_' + i.entry_id + "_" + i.entry_group_id + '" class="sw_select_third_l" data-entry_method_text="sw_input_birthday_month" data-entry_id="' + i.entry_id + '" data-entry_group_id="' + i.entry_group_id + '"><option value="">mm</option></select>',
                ye = '<select name="sw_input_birthday_day_' + i.entry_id + "_" + i.entry_group_id + '" id="sw_input_birthday_day_' + i.entry_id + "_" + i.entry_group_id + '" class="sw_select_third_m" data-entry_method_text="sw_input_birthday_day" data-entry_id="' + i.entry_id + '" data-entry_group_id="' + i.entry_group_id + '"><option value="">dd</option></select>',
                we = '<select name="sw_input_birthday_year_' + i.entry_id + "_" + i.entry_group_id + '" id="sw_input_birthday_year_' + i.entry_id + "_" + i.entry_group_id + '" class="sw_select_third_r" data-entry_method_text="sw_input_birthday_year" data-entry_id="' + i.entry_id + '" data-entry_group_id="' + i.entry_group_id + '"><option value="">yyyy</option></select>';
            J = '<div class="sw_row_2"><div id="sw_input_birthday_' + i.entry_id + "_" + i.entry_group_id + '_header" class="sw_row_2_l">' + i.input_header + y + '</div><div class="sw_row_2_r_center">' + ue + ye + we + "</div></div>"
        } else J = '<div id="sw_input_row_' + d + '" class="' + E + '"><div class="sw_entry_row_input_inner">' + y + "</div></div>"
    } else if (5 == i.input_category) {
        if (1 == i.entry_level_db)
            if (1 == i.required_db) B = i.entry_title_db + " *";
            else B = i.entry_title_db;
        p = u;
        if ("text_input" == i.entry_method_text) {
            if (0 == i.require_verification_db) p = "";
            if (1 == i.entry_level_db) J = '<div class="sw_row_1"><div class="sw_input_holder_simple"><div id="sw_' + d + '_header" class="sw_input_header_3" style="font-size:' + e.body_font_size + 'px;">' + B + "</div></div>" + y + '<input id="sw_' + d + '" name="sw_' + d + '" maxlength="255" class="sw_text_input" type="email" placeholder="' + i.input_placeholder + '" /></div>';
            else if (2 == i.entry_level_db) J = '<div id="sw_input_row_' + d + '" class="' + E + '"><div class="sw_entry_row_input_inner">' + B + y + u + "</div></div>"
        } else if (i.entry_method_text.includes("crypto_wallet")) {
            if (0 == i.require_verification_db) p = "";
            if (1 == i.entry_level_db) J = '<div class="sw_row_1"><div class="sw_input_holder_simple"><div id="sw_' + d + '_header" class="sw_input_header_3" style="font-size:' + e.body_font_size + 'px;">' + i.entry_title_db + "</div></div>" + y + '<input id="sw_' + d + '" name="sw_' + d + '" maxlength="255" class="sw_text_input" type="email" placeholder="' + i.input_placeholder + '" /></div>';
            else if (2 == i.entry_level_db) J = '<div id="sw_input_row_' + d + '" class="' + E + '"><div class="sw_entry_row_input_inner">' + i.entry_title_db + y + u + "</div></div>"
        } else if ("e_signature" == i.entry_method_text) {
            if (0 == i.require_verification_db) p = "";
            if (1 == i.entry_level_db) J = '<div class="sw_row_1"><div class="sw_input_holder_simple"><div id="sw_' + d + '_header" class="sw_input_header_3">' + i.entry_title_db + '</div></div><div class="e_signature_wrapper_parent"><div id="' + d + '_field" class="e_sig_wrapper"></div><div id="' + d + '_tools"></div><div id="' + d + '_scrollgrabber"></div><input type="hidden" id="sw_' + d + '" name="sw_' + d + '" value="" /></div></div>';
            else i.entry_level_db
        } else if ("radio" == i.entry_method_text) {
            var ve = '<div id="sw_radio_holder_' + d + '"></div>';
            if ("" !== i.input_options_2_db) var me = 'data-required="' + i.input_options_2_db + '"';
            if (1 == i.entry_level_db) {
                if (0 == i.require_verification_db) p = "";
                J = '<div class="sw_row_1"><div class="sw_input_holder_simple"><div id="sw_' + d + '_header" class="sw_input_header_3" ' + me + ' data-entry_method_text="' + i.entry_method_text + '" data-entry_id="' + i.entry_id + '" data-entry_group_id="' + i.entry_group_id + '" style="font-size:' + e.body_font_size + 'px;">' + B + "</div></div>" + y + ve + "</div>"
            } else if (2 == i.entry_level_db) J = '<div id="sw_input_row_' + d + '" class="' + E + '"><div class="sw_entry_row_input_inner"><div id="sw_' + d + '_header" class="' + j + '" ' + me + ">" + B + '</div><div class="sw_entry_row_input_inner_2">' + y + ve + "</div></div></div>"
        } else if ("select" == i.entry_method_text) {
            if ("" !== i.input_options_2_db) me = 'data-required="' + i.input_options_2_db + '"';
            ve = '<select name="sw_select_' + i.entry_id + "_" + i.entry_group_id + '" id="sw_select_' + i.entry_id + "_" + i.entry_group_id + '" class="' + F + '"><option value="">...</option></select>';
            if (1 == i.entry_level_db) {
                if (0 == i.require_verification_db) p = "";
                J = '<div class="sw_row_1"><div class="sw_input_holder_simple"><div id="sw_' + d + '_header" class="sw_input_header_3" ' + me + ' data-entry_method_text="' + i.entry_method_text + '" data-entry_id="' + i.entry_id + '" data-entry_group_id="' + i.entry_group_id + '" style="font-size:' + e.body_font_size + 'px;">' + B + "</div></div>" + y + ve + "</div>"
            } else if (2 == i.entry_level_db) J = '<div id="sw_input_row_' + d + '" class="' + E + '"><div class="sw_entry_row_input_inner"><div id="sw_' + d + '_header" class="sw_input_header"' + me + ">" + B + '</div><div class="sw_entry_row_input_inner">' + y + ve + "</div></div></div>"
        } else if ("textarea" == i.entry_method_text) {
            if (0 == i.require_verification_db) p = "";
            1 == i.entry_level_db && (u = "");
            ve = '<textarea maxlength="500" name="sw_' + d + '" id="sw_textarea_' + i.entry_id + "_" + i.entry_group_id + '" class="' + M + '" data-gramm="false"></textarea>', J = '<div id="sw_input_row_' + d + '" class="' + C + ' sw_row_1"><div class="sw_entry_row_input_inner"><div id="sw_' + d + '_header" class="sw_input_header_3" data-entry_method_text="' + i.entry_method_text + '" data-entry_id="' + i.entry_id + '" data-entry_group_id="' + i.entry_group_id + '" style="font-size:' + e.body_font_size + 'px;">' + B + y + '</div><div class="sw_entry_row_input_inner">' + ve + "</div>" + u + "</div></div>"
        } else if ("secret_code" == i.entry_method_text) {
            if (1 == i.entry_level_db) u = '<div class="sw_entry_row_input_inner">' + (i.input_placeholder ? '<input maxlength="255" id="sw_' + d + '" name="sw_' + d + '" class="sw_text_input_2" style="margin-top: 10px;" type="text" placeholder="' + i.input_placeholder + '" />' : "") + "</div>";
            if (0 == i.require_verification_db) p = "";
            J = '<div id="sw_input_row_' + d + '" class="' + E + ' sw_row_1"><div id="sw_' + d + '_header" class="' + j + '" data-required="' + l + '" data-required-correct="' + i.input_options_1_db + '" data-entry_method_text="' + i.entry_method_text + '" data-entry_id="' + i.entry_id + '" data-entry_group_id="' + i.entry_group_id + '">' + B + i.input_header + y + "</div>" + u + "</div>"
        } else if ("checkbox" == i.entry_method_text) {
            if (1 == i.input_options_1_db) var he = 'checked="checked"';
            else he = "";
            me = 'data-required="' + i.required_db + '"';
            if (1 == i.entry_level_db) {
                J = '<div id="sw_' + d + '_header" class="sw_row_2" ' + me + ' data-entry_method_text="' + i.entry_method_text + '" data-entry_id="' + i.entry_id + '" data-entry_group_id="' + i.entry_group_id + '"><div class="sw_row_1"><div class="sw_input_checkbox_holder"><label style="cursor:pointer;"><input type="checkbox" name="sw_checkbox_' + i.entry_id + "_" + i.entry_group_id + '" id="sw_checkbox_' + i.entry_id + "_" + i.entry_group_id + '" ' + he + " />&nbsp; " + B + y + "</label></div></div></div>";
                if (0 == i.require_verification_db) p = ""
            } else if (2 == i.entry_level_db) J = '<div id="sw_input_row_' + d + '" class="' + E + '"><div id="sw_' + d + '_header" class="sw_entry_row_input_inner" ' + me + '><div class="sw_input_header"><label style="cursor:pointer;"><input type="checkbox" name="sw_checkbox_' + i.entry_id + "_" + i.entry_group_id + '" id="sw_checkbox_' + i.entry_id + "_" + i.entry_group_id + '" ' + he + " />&nbsp;" + B + y + "</label></div></div></div>", p = '<div id="sw_verify_holder_' + d + '" class="sw_entry_row_verify_show"><div class="sw_entry_verify_holder">' + (i.verify_button_text ? '<input type="button" style="' + e.buttons_css + '" id="sw_verify_' + d + '" class="sw_verify" value="' + i.verify_button_text + '" />' : "") + "</div>" + c + "</div>"
        } else if ("custom" == i.entry_method_text) {
            p = "";
            if ("" !== i.input_options_1_db) J = '<div id="sw_input_row_' + d + '" class="' + E + '"><div class="sw_entry_row_input_inner"><div class="sw_link_holder"><div id="sw_' + d + '_header" class="sw_input_header">' + i.input_header + y + '<input type="hidden" id="countdown_timer_if_clicked_' + d + '" /><input type="hidden" id="countdown_timer_clicked_timestamp_' + d + '" /></div></div></div></div><div id="sw_input_row_2_' + d + '" class="sw_input_holder"><div class="sw_entry_row_input_inner"><div class="sw_verify_header"><i>' + i.input_options_1_db + "</i></div>" + Y + "</div>" + u + "</div>";
            else J = '<div id="sw_input_row_' + d + '" class="' + E + '"><div class="sw_entry_row_input_inner"><div class="sw_link_holder"><div id="sw_' + d + '_header" class="sw_input_header">' + i.input_header + y + '<input type="hidden" id="countdown_timer_if_clicked_' + d + '" /><input type="hidden" id="countdown_timer_clicked_timestamp_' + d + '" /></div></div></div>' + u + "</div>"
        } else if ("app_download" == i.entry_method_text) {
            var fe = "",
                be = "";
            if ("" !== i.input_options_1_db) fe = '<a target="_blank" rel="noopener" href="' + i.input_options_1_db + '" style="' + e.buttons_css_margin_bottom + '" id="sw_link_1_' + d + '" class="sw_verify_app_store sw_link_no_style">App Store</a>';
            if ("" !== i.input_options_2_db) be = '<a target="_blank" rel="noopener" href="' + i.input_options_2_db + '" style="' + e.buttons_css_margin_bottom + '" id="sw_link_2_' + d + '" class="sw_verify_google_play sw_link_no_style">Google Play</a>';
            J = '<div id="sw_input_row_' + d + '" class="' + E + '"><div class="sw_entry_row_input_inner_2"><div class="sw_input_header">' + i.input_header + y + "</div>" + fe + be + '</div></div><div id="sw_input_row_2_' + d + '" class="sw_input_holder_hidden"><div class="sw_entry_row_input_inner"><div class="sw_verify_header_5">' + i.verify_header + '</div><div class="verify_button_margin_holder_center"><input type="button" style="' + e.buttons_css + '" id="sw_verify_' + d + '" class="sw_verify" value="' + i.verify_button_text + '" /></div></div></div>';
            if (0 == i.require_verification_db) p = ""
        } else if ("bonus" == i.entry_method_text) {
            J = '<div id="sw_input_row_' + d + '" class="' + E + '"><div class="sw_entry_row_input_inner"><div class="sw_link_holder"><div class="sw_input_header">' + i.input_header + y + '</div><div class="verify_button_margin_holder_center_2">' + (i.verify_button_text ? '<input type="button" style="' + e.buttons_css + '" id="sw_verify_' + d + '" class="sw_verify_no_margin" value="' + i.verify_button_text + '" />' : "") + c + "</div></div></div></div>";
            if (0 == i.require_verification_db) p = ""
        }
    }
    if (1 == i.entry_level_db) $("#sw_login_additional_entry_methods").append('<div id="sw_entry_h_' + d + '"><div class="sw_entry_h_inner"><div id="sw_entry_input_' + d + '_h" class="sw_entry_input_show">' + J + "</div></div></div>");
    else if (2 == i.widget_display && 2 == i.entry_level_db && 0 == t.user_entry_amount && "refer_friends" == i.entry_method_text);
    else if (2 == i.entry_level_db) {
        var ge = "";
        if (0 == i.if_entered_db && 0 == i.required_db && 1 == e.has_required && 0 == t.user_required_entry_methods_finished) {
            var xe = 5,
                ke = "cursor:not-allowed; display: flex;",
                $e = '<div id="sw_center_icon_tooltip_' + d + '" class="sw_center_icon_tooltip">' + e.translate.you_must_first_complete_the_required_entries + "</div>";
            k = '<div id="sw_entries_worth_locked_' + d + '" class="sw_entries_worth_locked">' + $e + '<div id="sw_center_icon_' + d + '" class="sw_center_icon"><span class="entry_icon_right_wrapper" class="entry_locked_icon" style="color:#' + f + ';"><i class="fas fa-lock"></i></span></div></div>', ge = "entry_locked_data_toggle_class", z = '<span id="entry_amount_display_locked_' + d + '" class="entry_amount_display_locked">', q = "</span>"
        }
        if (0 == i.if_entered_db && t.user_entry_amount < i.required_actions_until_unlock_db) xe = 5, ke = "cursor:not-allowed; display: flex;", $e = '<div id="sw_center_icon_tooltip_' + d + '" class="sw_center_icon_tooltip">You must earn ' + i.required_actions_until_unlock_db + " entries to unlock this</div>", k = '<div id="sw_entries_worth_locked_' + d + '" class="sw_entries_worth_locked">' + $e + '<div id="sw_center_icon_' + d + '" class="sw_center_icon"><span class="entry_icon_right_wrapper" class="entry_locked_icon" style="color:#' + f + ';"><i class="fas fa-lock"></i></span></div></div>', ge = "entry_locked_data_toggle_class", z = '<span id="entry_amount_display_locked_' + d + '" class="entry_amount_display_locked">', q = "</span>";
        else if (0 == t.user_entry_amount) xe = 4, ke = "cursor:not-allowed; display: flex;";
        else if (1 == i.if_entered_db && 0 == i.daily_re_entry_allowed) xe = 3, ke = "cursor:not-allowed; display: flex;";
        else xe = 1, ke = "cursor:pointer; display: flex;";
        if (1 == e.default_css || "ffffff" == e.body_background_color) var ze = "border:1px solid #f0f0f0;";
        else ze = "";
        var qe = '<span style="color:red;font-weight:bold;width:100%;float:left;" id="error_message_holder_' + d + '"></span>';
        if (0 == t.user_entry_amount && 0 == e.hide_entries_if_logged_out) 1 == i.entry_group_id && $("#" + s).append('<div class="sw_entry sw_entry_h" id="sw_entry_h_' + d + '"><div class="sw_entry_h_inner"><div class="sw_entry_h_1 ' + ge + '" data-entry_method_text="' + i.entry_method_text + '" data-toggle="' + xe + '" data-entered="' + i.if_entered_db + '" data-daily-reentry-allowed="' + i.daily_re_entry_allowed + '" data-entry_id="' + i.entry_id + '" data-entry_group_id="' + i.entry_group_id + '" style="' + ke + '">' + T + '<div class="sw_entry_h_1_right" style="' + ze + '">' + I + z + x + q + k + "</div></div></div></div>");
        else if (t.user_entry_amount >= 1) {
            if (1 == r) var Te = "";
            else Te = '<div class="sw_entry_h_1 ' + ge + '"  id="sw_entry_' + d + '" data-entry_method_text="' + i.entry_method_text + '" data-toggle="' + xe + '" data-entered="' + i.if_entered_db + '" data-daily-reentry-allowed="' + i.daily_re_entry_allowed + '" data-entry_id="' + i.entry_id + '" data-entry_group_id="' + i.entry_group_id + '" style="' + ke + '">' + T + '<div class="sw_entry_h_1_right" style="' + ze + '">' + I + z + x + q + k + "</div></div>";
            var Ie = "";
            1 == i.entry_has_group && (Ie = t.entry_group_id_current_active.entry_id[i.entry_id].entry_group_id), "" != Ie && Ie != i.entry_group_id || $("#" + s).append('<div id="sw_entry_h_' + d + '" class="sw_entry sw_entry_h"><div class="sw_entry_h_inner">' + Te + '<div id="sw_entry_input_' + d + '_h" class="' + o + '" style="' + n + '">' + J + p + qe + U + "</div></div></div>")
        }
    }
    if ("facebook_page_visit" == i.entry_method_text && 1 == i.social_optional_engagement_db && window.FB && (FB.XFBML.parse(document.getElementById("fb_like_button_wrapper-" + d)), $("#facebook_page_visit_main_wrapper-" + d).css("margin-top", "15px")), "birthday" == i.entry_method_text) {
        for (var Se = 1; Se <= 12; Se++) $("#sw_input_birthday_month_" + i.entry_id + "_" + i.entry_group_id).append($("<option></option>").attr("value", Se).text(Se));
        for (Se = 1; Se <= 31; Se++) $("#sw_input_birthday_day_" + i.entry_id + "_" + i.entry_group_id).append($("<option></option>").attr("value", Se).text(Se));
        for (Se = (new Date).getFullYear() - 5; Se >= 1900; Se--) $("#sw_input_birthday_year_" + i.entry_id + "_" + i.entry_group_id).append($("<option></option>").attr("value", Se).text(Se))
    } else if ("select" == i.entry_method_text) {
        var Le = i.input_options_1_db.split(",");
        $.each(Le, (function(e, t) {
            $("#sw_select_" + i.entry_id + "_" + i.entry_group_id).append($("<option></option>").attr("value", t).text(t))
        }))
    } else if ("radio" == i.entry_method_text) {
        Le = i.input_options_1_db.split(",");
        $.each(Le, (function(e, t) {
            $("#sw_radio_holder_" + d).append('<div class="sw_input_radio_holder"><label style="cursor:pointer;"><input type="radio" name="sw_radio_' + i.entry_id + "_" + i.entry_group_id + '" id="sw_radio_' + i.entry_id + "_" + i.entry_group_id + '" value="' + t + '" /> &nbsp;' + t + "</label>&nbsp;&nbsp;&nbsp;&nbsp;</div>")
        }))
    }
    if (1 == i.daily && i.daily_db >= 1 && 1 == i.if_entered_db && 0 == i.daily_re_entry_allowed && $("#sw_input_row_" + d).hide(), 1 == _ && "MSIE 8" == detect_browser() && window.location.reload(), "custom" == i.entry_method_text && i.timer_db >= 1 && t.user_entry_amount > 0) {
        button_enabled(!1, e, d, null);
        var Ee = "#sw_" + d + "_header";
        if (-1 != $(Ee).html().indexOf("<a ")) var Ce = Ee + " a";
        else Ce = "#sw_entry_h_" + d;
        $(document.body).on("click", Ce, (function() {
            countdown_timer(e, i, d)
        }))
    }
    if ("e_signature" == i.entry_method_text) {
        ! function(e) {
            var t = {};
            e.publish = function(i, _) {
                if (t[i])
                    for (var r = t[i], s = (_ = _ || {}, 0), o = r.length; s < o; s++) r[s].call(e, _)
            }, e.subscribe = function(e, i) {
                return t[e] || (t[e] = []), t[e].push(i), {
                    topic: e,
                    callback: i
                }
            }, e.unsubscribe = function(e) {
                var i = e.topic;
                if (t[i])
                    for (var _ = t[i], r = 0, s = _.length; r < s; r++) _[r] === e.callback && _.splice(r, 1)
            }
        }(jQuery);
        var je = $("#" + d + "_field").jSignature({
                UndoButton: !1
            }),
            Me = $("#" + d + "_tools"),
            Fe = ($("#displayarea"), "jSignature.demo.");
        $.subscribe(Fe + "image/png;base64", (function(e) {
            var t = new Image;
            t.src = "data:" + e[0] + "," + e[1], $("#sw_" + d).val(t.src)
        })), $('<input type="button" class="e_signature_reset_button" value="Reset">').bind("click", (function(e) {
            je.jSignature("reset"), $("#sw_" + d).val("")
        })).appendTo(Me), $("#" + d + "_field").bind("change", (function(e) {
            var t = je.jSignature("getData", "image");
            $.publish(Fe + t[0], t)
        })).appendTo(Me), Modernizr.touch && $("#" + d + "_scrollgrabber").height($("#content").height())
    }
}

function entry_method_insert_post_events(e, t, i, _) {
    total_entries_count = _.total_entries_count || 0, total_entries_count_display = _.total_entries_count_display || 0, total_users_count = _.total_users_count || 0, user_entry_amount = _.user_entry_amount || 0, user_entries_array = _.user_entries_array || [], user_entered_entry_ids_methods_array = _.user_entered_entry_ids_methods_array || [];
    var r = i.entry_id + "|" + i.entry_method_int + "|" + i.entry_group_id,
        s = e.default_checkmark,
        o = _.entries_entry_amount_list.entry_amount[r],
        n = _.entries_incorrect_answer_list.incorrect_answer[r],
        a = e.links_font_color,
        d = i.entry_method_text + "_" + i.entry_id + "_" + i.entry_group_id;
    if ("1" == n && (s = '<i class="fa-solid fa-circle-xmark"></i>', a = "ff0000"), ga_gtag(e, "SweepWidget insert entry", "Insert entry", "Insert entry: " + i.entry_method_text), update_user_remaining_entries_display(e.if_allowed_entries_amount, _.user_remaining_allowed_entries_amount, user_entry_amount), user_entry_amount > 0 && -1 != user_entered_entry_ids_methods_array.indexOf(r)) {
        var l = user_entries_array.join("");
        $("#tabs_show_hide_users").html();
        $("#sw_entry_input_" + d + "_h").hide();
        var c = 1 == user_entry_amount ? e.entries_or_points_singular : e.entries_or_points_plural,
            p = my_entries_display_func(e, e.language, e.translate, user_entry_amount, c, t.user_name, e.default_color);
        $("#sw_entry_method_result_text").show().html(p), $("#show_user_entries").html(l), $("#sw_my_entries").html(user_entry_amount)
    }
    $("#sw_total_entries_count_all").html(total_entries_count_display);
    c = 1 == o ? e.entries_or_points_singular : e.entries_or_points_plural;
    if (i.daily_db >= 1) {
        user_daily_time_until_reentry = _.user_daily_time_until_reentry || {};
        var u = user_daily_time_until_reentry[r];
        if (1 == i.entry_has_group) var y = _.entry_group_is_finished.entry_id[i.entry_id];
        else y = 0;
        if (-1 != _.user_completed_group_entry_lookup.indexOf(r) || 1 == y) {
            var w = "+" + o + " " + c + ". " + e.translate.completed;
            s = e.default_checkmark
        } else w = "+" + o + " " + c + ". " + e.translate.please_wait_to_enter_again + ": " + u + ".", s = '<i class="fas fa-clock"></i>';
        $("#sw_entries_worth_2_" + d).html('<div id="sw_center_icon_' + d + '" class="sw_center_icon"><div id="sw_center_icon_tooltip_' + d + '" class="sw_center_icon_tooltip">' + w + '</div><span class="entry_icon_right_wrapper" style="color:#' + a + ';">' + s + "</span></div>"), $("#sw_entries_worth_daily_" + d).html(""), $("#sw_input_row_" + d + ", #sw_input_row_2_" + d).hide(), $("#sw_verify_holder_" + d).hide(), $("#sw_entry_" + d).attr("data-toggle", 3).css("background", "inherit").css("cursor", "not-allowed"), $('.sw_entry_h_1[data-toggle="1"], .sw_entry_h_1[data-toggle="2"]').css("opacity", 1)
    } else $("#sw_entries_worth_" + d).html('<div id="sw_center_icon_' + d + '" class="sw_center_icon"><div id="sw_center_icon_tooltip_' + d + '" class="sw_center_icon_tooltip">+' + o + " " + c + '</div><span class="entry_icon_right_wrapper" style="color:#' + a + ';">' + s + "</span></div>"), $("#sw_input_row_" + d + ", #sw_input_row_2_" + d).hide(), $("#sw_verify_holder_" + d).hide(), $("#sw_entry_input_" + d + "_h").hide(), $("#sw_entry_" + d).attr("data-toggle", 3).css("cursor", "not-allowed").css("background", "inherit"), $('.sw_entry_h_1[data-toggle="1"], .sw_entry_h_1[data-toggle="2"]').css("opacity", 1);
    if (1 == e.has_required && 1 == _.user_required_entry_methods_finished && e.entry_methods_l2_not_required_count == _.user_remaining_not_required_entry_ids_count && ($(".entry_locked_data_toggle_class").attr("data-toggle", 1).css("cursor", "pointer"), $(".sw_entries_worth_locked").hide(), $(".sw_entries_worth").show(), $(".entry_amount_display_locked").show()), 0 == _.user_remaining_entry_ids_count && user_entry_amount > 0) {
        entries_completed_message(e, _.all_entry_groups_finished, _.user_daily_re_entry_allowed_count, 1)
    } else {
        if (1 == _.user_required_entry_methods_finished) var v = _.user_remaining_entry_ids_count;
        else v = e.entry_methods_l2_count;
        var m = v > 1 ? e.translate.ways : e.translate.way;
        if (0 == user_entry_amount) var h = "";
        else if ("en" == e.language) h = '<span style="font-weight:bold; color:#' + e.default_color_unlock + '"> ' + v + "</span> more " + m.toLowerCase() + " to enter.";
        else h = " " + e.translate.more_ways_to_enter + ': <span style="font-weight:bold; color:#' + e.default_color_unlock + '">' + v + "</span>";
        $("#sw_entry_amount_allowed_text_inner").html(h).show()
    }
}

function login_defer_timer(e, t) {
    var i, _, r = t;
    setInterval((function() {
        i = parseInt(r / 60, 10), _ = parseInt(r % 60, 10), i = i < 10 ? "0" + i : i, _ = _ < 10 ? "0" + _ : _, $("#sw_login_button, input[name=sw_login]").html(e.buttons_enter_text + " (" + r + ")"), --r < 0 && $("#sw_login_button, input[name=sw_login]").html(e.buttons_enter_text).css("cursor", "pointer").css("opacity", "1").prop("disabled", !1)
    }), 1e3)
}
window.onmessage = e => {
    if (e.origin == website_url) {
        console.log("post");
        var t = e.data,
            i = t.verification_key,
            _ = t.social_action,
            r = t.entry_level,
            s = t.target_button_id;
        if ("asdhfu1h2379" == i) {
            var o = t.provider;
            if (console.log("provider", o), console.log("target_button_id", s), console.log("social_action", _), console.log("entry_level", r), "2" == r && "" != _ && ("Twitter" == o ? ("follow_user" == _ && ($("#" + s + "_value").val(t.displayName), document.getElementById(s).click(), $("#" + s + "_verify").show()), "post_tweet" == _ && (console.log("post_tweet", s), document.getElementById(s).click()), "post_retweet" == _ && (console.log("post_retweet", s), document.getElementById(s).click())) : "TwitchTV" == o ? ("twitch_follow" == _ && (console.log("twitch_follow", s), document.getElementById(s).click()), "twitch_subscribe" == _ && (console.log("twitch_subscribe", s), document.getElementById(s).click())) : "Discord" == o && "discord_join_server" == _ && (console.log("discord_join_server", s), document.getElementById(s).click(), $("#" + s + "_verify").show())), "1" == r) {
                if ("TwitchTV" == o || "Discord" == o || "Steam" == o || "Tumblr" == o || "OpenID" == o) var n = t.displayName;
                else t.firstName, t.lastName, n = t.fullName;
                var a = t.email;
                $("input[name=sw__login_name]").val(n), $("input[name=sw__login_email]").val(a), $(".social_login_holder").remove(), $(".sw_login, #sw_login_fields").show();
                var d = $("#entry_methods_l1_list_val").html();
                "" !== n && "" !== a && auto_login_user(d), "" == a && ($("#sw__login_email_wrapper").effect("shake", {
                    direction: "side",
                    times: 4,
                    distance: 10
                }, 700), $("#sw_input_header_email_asterik").css("color", "red"))
            }
        }
    }
};
var refresh_leaderboard_iteration = 0;

function refresh_leaderboard_func(e) {
    var t = 64,
        i = setInterval((function() {
            0 == t ? ($("#leaderboard_wrapper").css("opacity", "0.6"), $.ajax({
                url: e.website_url + "/w/a/refresh_leaderboard.php",
                data: {
                    cors_jsonp: e.cors_jsonp,
                    competition_id: e.competition_id,
                    competition_url: e.competition_url
                },
                type: e.ajax_type,
                xhrFields: e.ajax_xhrFields,
                dataType: e.ajax_dataType,
                jsonp: e.ajax_jsonp,
                success: function(t) {
                    if (1 == e.cors_jsonp) var i = jQuery.parseJSON(t);
                    else if (2 == e.cors_jsonp) i = t;
                    var _ = i.leaderboard_display;
                    ++refresh_leaderboard_iteration, $("#leaderboard_wrapper").css("opacity", "1"), $("#leaderboard_wrapper").html(_), refresh_leaderboard_iteration >= 5 ? $("#leaderboard_update_countdown_wrapper").html("") : refresh_leaderboard_func(e)
                }
            }), clearInterval(i)) : $("#leaderboard_update_countdown_num").html(t), --t
        }), 1e3)
}

function popUp() {
    document.getElementById("myPopup").classList.toggle("show")
}
