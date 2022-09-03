var sw_f = $(".sw_container").attr("id"),
    widget_embedded = $("#" + sw_f).attr("data-widget-embedded"),
    is_shopify_store_admin = $("#" + sw_f).attr("data-is-shopify-store-admin");
if (1 == is_shopify_store_admin) {
    widget_embedded = !1;

    function tokenFetcher(e) {
        e("sw_token_key")
    }

    function saveToken(e) {}

    function getToken() {}
} else {
    var tokenKey = "sw_token_key";
    if (0 == widget_embedded) var main_store = {
        store: window.localStorage,
        get(e) {
            const t = this.store.getItem(e);
            return null == t ? "" : t
        },
        set(e, t) {
            this.store.setItem(e, t)
        }
    };
    else main_store = {
        store: {},
        get(e) {
            const t = this.store[e];
            return void 0 === t || null == t ? "" : t
        },
        set(e, t) {
            this.store[e] = t
        }
    };
    if (widget_embedded) {
        function tokenFetcher(e) {
            var t = function(t) {
                if (t.data && "string" == typeof t.data && t.data.includes("responseType")) {
                    const r = JSON.parse(t.data);
                    e(r.token)
                }
            };
            window.addEventListener ? window.addEventListener("message", t) : window.attachEvent("onmessage", t, !1)
        }

        function sendRequest(e) {
            parent.postMessage(JSON.stringify(e), "*")
        }

        function saveToken(e) {
            const t = `{"command": "SET", "token": "${e}"}`;
            try {
                main_store.set(tokenKey, e)
            } catch (e) {}
            sendRequest(t)
        }

        function getToken() {
            sendRequest('{"command": "GET"}')
        }
    } else {
        function tokenFetcher(e) {
            e(main_store.get(tokenKey))
        }

        function saveToken(e) {
            main_store.set(tokenKey, e)
        }

        function getToken() {}
    }
}
$(document).ready((function(e) {
    tokenFetcher((function(t) {
        var r = t,
            _ = website_url.replace("https://", "");
        if (location.hostname === _) {
            function i(t, r, _) {
                var i = _.entry_id,
                    o = _.entry_method_text,
                    s = _.entry_group_id,
                    l = switch_entry_method_text_to_int(o),
                    d = switch_entry_method_int_to_provider(l),
                    u = o + "_" + i + "_" + s;
                1 == _.input_category ? e(document.body).on("click", "#sw_verify_" + u, (function() {
                    if (e(this).val(t.one_moment_display).css("cursor", "progress").css("opacity", "0.5").prop("disabled", !0), e("#daily_reenter_display_" + u).hide(), "upload_a_file" == o) var i = e("#value_" + u).val();
                    else i = 1;
                    a(t, r, _, i)
                })) : 2 == _.input_category ? ("" == _.verify_button_text && "" != _.link_button_text ? (e("#sw_input_row_" + u).show(), e(document.body).on("click", "#sw_link_" + u, (function() {
                    "en" == t.language ? e(this).val("Redirecting") : e(this).val(t.translate.redirect), e("#daily_reenter_display_" + u).hide(), a(t, r, _, 1)
                }))) : "" != _.verify_button_text && (e(document.body).on("click", "#sw_link_" + u, (function() {
                    e("#sw_input_row_3_" + u).css("height", "inherit").css("overflow", "visible").css("display", "inline-block"), e("#sw_" + u).focus()
                })), e(document.body).on("click", "#sw_verify_" + u, (function() {
                    if (e(this).val(t.one_moment_display).css("cursor", "progress").css("opacity", "0.5").prop("disabled", !0), void 0 === (l = e("#sw_" + u).val())) var l = 1,
                        c = 1;
                    else c = n(t, r, _, i, s, o, l), e("#sw_" + u).focus();
                    if (1 == c)
                        if ("twitter_follow" == o) {
                            if ("" !== l) {
                                var p = t.website_url + "/w/api_3/twitter/twitter_functions.func.php",
                                    g = (m = _.entry_link_db.split("/"))[m.length - 1];
                                console.log(g), e.ajax({
                                    url: p,
                                    method: "post",
                                    data: {
                                        competition_id: t.competition_id,
                                        competition_url: t.competition_url,
                                        action: "follow_user_verify",
                                        db_user_id: r.user_id,
                                        source_screen_name: l,
                                        target_screen_name: g,
                                        provider: d
                                    },
                                    success: function(i) {
                                        res = JSON.parse(i), 1 == res.status ? a(t, r, _, l) : 0 == res.status ? (button_enabled(!0, t, u, _.verify_button_text), e("#error_message_holder_" + u).html(res.message).css("margin", "10px 0")) : console.log(i)
                                    }
                                })
                            }
                        } else if ("twitter_tweet" == o) "" !== l && (p = t.website_url + "/w/api_3/twitter/twitter_functions.func.php", g = (m = _.entry_link_db.split("/"))[m.length - 1], console.log(g), e.ajax({
                        url: p,
                        method: "post",
                        data: {
                            competition_id: t.competition_id,
                            competition_url: t.competition_url,
                            action: "follow_user_verify",
                            db_user_id: r.user_id,
                            source_screen_name: l,
                            target_screen_name: g,
                            provider: d
                        },
                        success: function(i) {
                            res = JSON.parse(i), 1 == res.status ? a(t, r, _, l) : 0 == res.status ? (button_enabled(!0, t, u, _.verify_button_text), e("#error_message_holder_" + u).html(res.message).css("margin", "10px 0")) : console.log(i)
                        }
                    }));
                    else if ("twitter_retweet" == o) {
                        if ("" !== l) {
                            p = t.website_url + "/w/api_3/twitter/twitter_functions.func.php";
                            var m, y = (m = _.entry_link_db.split("/"))[m.length - 1];
                            console.log(y), e.ajax({
                                url: p,
                                method: "post",
                                data: {
                                    competition_id: t.competition_id,
                                    competition_url: t.competition_url,
                                    action: "retweet_verify",
                                    db_user_id: r.user_id,
                                    source_screen_name: l,
                                    retweet_id: y,
                                    provider: d
                                },
                                success: function(i) {
                                    res = JSON.parse(i), 1 == res.status ? a(t, r, _, l) : 0 == res.status ? (button_enabled(!0, t, u, _.verify_button_text), e("#error_message_holder_" + u).html(res.message).css("margin", "10px 0")) : console.log(i)
                                }
                            })
                        }
                    } else e("#daily_reenter_display_" + u).hide(), a(t, r, _, l)
                }))), e("#sw_link_" + u).on("click", (function(i) {
                    var s = e(this).attr("id");
                    if ("twitter_tweet" === o) i.preventDefault(), console.log("check here1"), console.log(t), console.log(r), console.log(_), window.open("https://twitter.com/intent/tweet?text=SweepWidget is Awesome!", "twitterwindow", "height=450, width=600, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");
                    else if ("twitter_follow" === o) {
                        i.preventDefault();
                        var n = switch_entry_method_int_to_provider(l),
                            a = r.user_id;
                        e.ajax({
                            url: t.website_url + "/w/api_2/check_if_logged_in.php",
                            type: "get",
                            dataType: "json",
                            data: {
                                provider: n,
                                user_id: a
                            },
                            success: function(e) {
                                if (console.log("logged_in", e.status), 1 == e.status) {
                                    var r = _.entry_link_db.split("/"),
                                        i = r[r.length - 1];
                                    window.open("https://twitter.com/intent/follow?screen_name=" + i, "twitterwindow", "height=450, width=600, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0")
                                } else 0 == e.status && hybridauth_modal_login_user(t, 2, n, "follow_user", s, a)
                            }
                        })
                    } else if ("twitter_retweet" === o) {
                        i.preventDefault();
                        var d = _.entry_link_db.split("/"),
                            u = d[d.length - 1];
                        window.open("https://twitter.com/intent/retweet?tweet_id=" + u, "twitterwindow", "height=450, width=600, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0")
                    }
                }))) : 3 == _.input_category ? (e(document.body).on("click", "#sw_verify_" + u, (function() {
                    e(this).val(t.one_moment_display).css("cursor", "progress").css("opacity", "0.5").prop("disabled", !0);
                    var l = e("#sw_" + u).val(),
                        d = switch_entry_method_text_to_int(o),
                        c = switch_entry_method_int_to_provider(d),
                        p = n(t, r, _, i, s, o, l);
                    if (e("#sw_" + u).focus(), "twitter_follow" == o) {
                        if ("" !== l) {
                            var g = t.website_url + "/w/api_3/twitter/twitter_functions.func.php",
                                m = _.entry_link_db.split("/"),
                                y = m[m.length - 1];
                            console.log(y), e.ajax({
                                url: g,
                                method: "post",
                                data: {
                                    competition_id: t.competition_id,
                                    competition_url: t.competition_url,
                                    action: "follow_user_verify",
                                    db_user_id: r.user_id,
                                    source_screen_name: l,
                                    target_screen_name: y,
                                    provider: c
                                },
                                success: function(i) {
                                    res = JSON.parse(i), 1 == res.status ? a(t, r, _, l) : 0 == res.status ? (button_enabled(!0, t, u, _.verify_button_text), e("#error_message_holder_" + u).html(res.message).css("margin", "10px 0")) : console.log(i)
                                }
                            })
                        }
                    } else if ("twitch_follow" == o) {
                        if ("" !== l) {
                            var h = t.website_url + "/w/api_3/twitch/twitch_functions.func.php";
                            e.ajax({
                                url: h,
                                method: "post",
                                data: {
                                    action: "twitch_follow_verify",
                                    user_id: r.user_id,
                                    user_id_verify: l,
                                    channel_name: _.entry_title_db,
                                    channel_id: _.social_account_user_id_db,
                                    provider: c
                                },
                                success: function(i) {
                                    res = JSON.parse(i), 1 == res.status ? a(t, r, _, l) : 0 == res.status ? (button_enabled(!0, t, u, _.verify_button_text), e("#error_message_holder_" + u).html(res.message).css("margin", "10px 0")) : console.log(i)
                                }
                            })
                        }
                    } else "twitch_subscribe" == o ? (h = t.website_url + "/w/api_3/twitch/twitch_functions.func.php", "" !== l && e.ajax({
                        url: h,
                        method: "post",
                        data: {
                            action: "twitch_subscribe_verify",
                            user_id: r.user_id,
                            user_id_verify: l,
                            channel_name: _.entry_title_db,
                            channel_id: _.social_account_user_id_db,
                            provider: c
                        },
                        success: function(i) {
                            res = JSON.parse(i), 1 == res.status ? a(t, r, _, l) : 0 == res.status ? (button_enabled(!0, t, u, _.verify_button_text), e("#error_message_holder_" + u).html(res.message).css("margin", "10px 0")) : console.log(i)
                        }
                    })) : "discord_join_server" == o ? "" !== l && (h = t.website_url + "/w/api_3/discord/discord_functions.func.php", e.ajax({
                        url: h,
                        method: "post",
                        data: {
                            action: "discord_join_server_verify",
                            user_id: r.user_id,
                            username: l,
                            invite_id: _.social_account_user_id_db,
                            provider: c
                        },
                        success: function(i) {
                            res = JSON.parse(i), 1 == res.status ? a(t, r, _, l) : 0 == res.status ? (button_enabled(!0, t, u, _.verify_button_text), e("#error_message_holder_" + u).html(res.message).css("margin", "10px 0")) : console.log(i)
                        }
                    })) : 1 == p && (e("#daily_reenter_display_" + u).hide(), a(t, r, _, l))
                })), e("#sw_link_" + u).on("click", (function(i) {
                    i.preventDefault();
                    var s = e(this).attr("id"),
                        n = switch_entry_method_text_to_int(o),
                        l = switch_entry_method_int_to_provider(n),
                        d = r.user_id;
                    if ("twitter_tweet" === o) {
                        var c = (c = e(this).attr("data-entry_textarea_db")).replace(/#/g, "%23");
                        console.log(c), e.ajax({
                            url: t.website_url + "/w/api_2/check_if_logged_in.php",
                            type: "get",
                            dataType: "json",
                            data: {
                                provider: l,
                                user_id: d
                            },
                            success: function(i) {
                                if (1 == i.status) {
                                    var o = i.user_profile.displayName;
                                    ! function(t, r, _, i, o) {
                                        var s = t.website_url + "/w/api_3/twitter/twitter_functions.func.php";
                                        e.ajax({
                                            url: s,
                                            method: "post",
                                            data: {
                                                competition_id: t.competition_id,
                                                competition_url: t.competition_url,
                                                action: "post_tweet",
                                                db_user_id: r.user_id,
                                                tweet_txt: o
                                            },
                                            success: function(e) {
                                                res = JSON.parse(e), 1 == res.status ? a(t, r, _, i) : (res.status, console.log(e))
                                            }
                                        })
                                    }(t, r, _, o, c)
                                } else 0 == i.status && (o = e("#sw_link_" + u + "_value").val(), hybridauth_modal_login_user(t, 2, l, "post_tweet", s, d))
                            }
                        })
                    } else if ("twitter_follow" === o) e.ajax({
                        url: t.website_url + "/w/api_2/check_if_logged_in.php",
                        type: "get",
                        dataType: "json",
                        data: {
                            provider: l,
                            user_id: d
                        },
                        success: function(r) {
                            if (console.log("logged_in", r.status), 1 == r.status) {
                                var i = _.entry_link_db.split("/"),
                                    o = i[i.length - 1];
                                window.open("https://twitter.com/intent/follow?screen_name=" + o, "twitterwindow", "height=450, width=600, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"), e("#" + s + "_verify").show()
                            } else 0 == r.status && hybridauth_modal_login_user(t, 2, l, "follow_user", s, d)
                        }
                    });
                    else if ("twitter_retweet" === o) {
                        var p = e(this).attr("data-entry_link_db").replace(/#/g, "%23").split("/").pop();
                        e.ajax({
                            url: t.website_url + "/w/api_2/check_if_logged_in.php",
                            type: "get",
                            dataType: "json",
                            data: {
                                provider: l,
                                user_id: d
                            },
                            success: function(i) {
                                if (console.log("logged_in_retweet", i.status), 1 == i.status) {
                                    var o = i.user_profile.displayName;
                                    ! function(t, r, _, i, o) {
                                        var s = t.website_url + "/w/api_3/twitter/twitter_functions.func.php";
                                        e.ajax({
                                            url: s,
                                            method: "post",
                                            data: {
                                                competition_id: t.competition_id,
                                                competition_url: t.competition_url,
                                                action: "retweet",
                                                db_user_id: r.user_id,
                                                retweet_id: o
                                            },
                                            success: function(e) {
                                                res = JSON.parse(e), 1 == res.status ? a(t, r, _, i) : (res.status, console.log(e))
                                            }
                                        })
                                    }(t, r, _, o, p)
                                } else 0 == i.status && (o = e("#sw_link_" + u + "_value").val(), hybridauth_modal_login_user(t, 2, l, "post_tweet", s, d))
                            }
                        })
                    } else if ("twitch_follow" === o) {
                        var g = e(this).attr("data-entry_link_db");
                        e.ajax({
                            url: t.website_url + "/w/api_2/check_if_logged_in.php",
                            type: "get",
                            dataType: "json",
                            data: {
                                provider: l,
                                user_id: d
                            },
                            success: function(r) {
                                console.log("logged_in", r.status), 1 == r.status ? (console.log("opem"), e("#" + s + "_verify").show(), console.log(g), setTimeout((function() {
                                    window.open(g, "twitchwindow", "height=450, width=600, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0")
                                }), 2e3)) : 0 == r.status && (console.log("should not go"), hybridauth_modal_login_user(t, "2", l, "twitch_follow", s, d))
                            }
                        })
                    } else if ("twitch_subscribe" === o) {
                        var m = e(this).attr("data-entry_link_db");
                        e.ajax({
                            url: t.website_url + "/w/api_2/check_if_logged_in.php",
                            type: "get",
                            dataType: "json",
                            data: {
                                provider: l,
                                user_id: d
                            },
                            success: function(r) {
                                console.log("logged_in", r.status), 1 == r.status ? (e("#" + s + "_verify").show(), window.open(m, "twitchwindow", "height=450, width=600, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0")) : 0 == r.status && hybridauth_modal_login_user(t, "2", l, "twitch_subscribe", s, d)
                            }
                        })
                    } else "discord_join_server" == o && (i.preventDefault(), l = switch_entry_method_int_to_provider(n), d = r.user_id, e.ajax({
                        url: t.website_url + "/w/api_2/check_if_logged_in.php",
                        type: "get",
                        dataType: "json",
                        data: {
                            provider: l,
                            user_id: d
                        },
                        success: function(r) {
                            console.log("logged_in", r.status), 1 == r.status ? (window.open(_.entry_link_db, "discordjoinserver", "height=450, width=600, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"), e("#" + s + "_verify").show()) : 0 == r.status && hybridauth_modal_login_user(t, 2, l, "discord_join_server", s, d)
                        }
                    }));
                    console.log(o)
                }))) : 4 == _.input_category ? (e(document.body).on("click", "#sw_verify_" + u, (function() {
                    e(this).val(t.one_moment_display).css("cursor", "progress").css("opacity", "0.5").prop("disabled", !0);
                    var i = e("#sw_" + u).val() || "";
                    e("#daily_reenter_display_" + u).hide(), a(t, r, _, i)
                })), "birthday" == o && e("#sw_input_" + o + "_month_" + i + "_" + s + ", #input_" + o + "_day_" + i + "_" + s + ", #input_" + o + "_year_" + i).change((function() {
                    var t = e("#sw_input_birthday_month_" + i + "_" + s).val(),
                        r = e("#sw_input_birthday_day_" + i + "_" + s).val(),
                        _ = e("#sw_input_birthday_year_" + i + "_" + s).val();
                    "" !== t && "" !== r && "" !== _ ? e("#sw_verify_holder_" + u).show() : e("#sw_verify_holder_" + u).hide()
                }))) : 5 == _.input_category && ("app_download" == o && e(document.body).on("click", "#sw_link_1_" + u + ", #sw_link_2_" + u, (function() {
                    e("#sw_input_row_2_" + u).css("height", "inherit").css("overflow", "visible").css("display", "inline-block")
                })), e(document.body).on("click", "#sw_verify_" + u, (function() {
                    e(this).val(t.one_moment_display).css("cursor", "progress").css("opacity", "0.5").prop("disabled", !0);
                    var l = e("#sw_" + u).val();
                    switch (o) {
                        case "checkbox":
                            l = e("#sw_" + u).is(":checked") ? 1 : 0;
                            break;
                        case "radio":
                            l = e("input[name=sw_" + u + "]:checked").val() || "";
                            break;
                        default:
                            l = e("#sw_" + u).val()
                    }
                    if ("bonus" == o || "app_download" == o || "custom" == o && "" == _.input_options_1_db) {
                        l = 1;
                        var d = 1
                    } else d = n(t, r, _, i, s, o, l);
                    1 == d && (e("#daily_reenter_display_" + u).hide(), a(t, r, _, l))
                }))), e("#sw_" + u).keydown((function(t) {
                    if ((e(this).is("input") || e(this).is("select")) && 13 == t.keyCode) return e("#sw_verify_" + u).trigger("click"), t.preventDefault(), !1
                })), "custom" == o && 0 == _.timer_db && custom_entry_method_key_up_enable(t, u), e("#sw_entry_" + u).click((function() {
                    var r = e(this).attr("data-toggle");
                    if (3 != r) {
                        if (_.daily_db >= 1 && 1 == _.daily_re_entry_allowed && e("#daily_reenter_display_" + u).show(), 1 == r) {
                            e('.sw_entry_h_1[data-toggle="2"]').each((function() {
                                var t = e(this).attr("data-entry_method_text"),
                                    r = e(this).attr("data-toggle"),
                                    _ = e(this).attr("data-entry_id"),
                                    i = e(this).attr("data-entry_group_id");
                                2 == r && (e(this).attr("data-toggle", 1), e("#sw_entry_input_" + t + "_" + _ + "_" + i + "_h").slideUp(100, (function() {})))
                            }));
                            var n = e("#sw_entry_" + u).position().top + document.getElementById("sw_entry_" + u).clientHeight;
                            e("#sw_entry_input_" + u + "_h").css("position", "absolute").css("top", n + "px").css("margin-bottom", "15px").slideDown(100), e(this).attr("data-toggle", 2), e('.sw_entry_h_1[data-toggle="2"]').css("opacity", 1)
                        } else 2 == r && (e("#sw_entry_input_" + u + "_h").slideUp(100), e(this).attr("data-toggle", 1), e('.sw_entry_h_1[data-toggle="1"]').css("opacity", 1));
                        if (2 != r && (1 == _.input_category ? (e("#sw_verify_holder_" + u).show(), e("#sw_verify_holder_" + u).show(), "upload_a_file" === o && (e("#sw_cancel_" + _.entry_method_text + "_" + _.entry_id + "_" + _.entry_group_id).on("click", (function() {
                                ! function(t) {
                                    e("#file_upload_progress_bar_" + t.entry_id + "_" + t.entry_group_id).hide(), e("#upload_a_file_message_" + t.entry_id + "_" + t.entry_group_id).hide(), e("#upload_a_file_submit_wrapper_" + t.entry_id + "_" + t.entry_group_id).hide(), e("#upload_a_file_header_" + t.entry_id + "_" + t.entry_group_id).show()
                                }(_)
                            })), e(".file_upload").on("change", (function() {
                                if (e("#file_upload_progress_bar_" + _.entry_id + "_" + _.entry_group_id).show(), e("#upload_a_file_progress_" + _.entry_id + "_" + _.entry_group_id).css("width", "0"), e("#upload_a_file_message_" + _.entry_id + "_" + _.entry_group_id).text("").show(), "" != e("#file_upload_" + _.entry_id + "_" + _.entry_group_id).val()) {
                                    var r = new FormData;
                                    r.append("file_upload", e("#file_upload_" + _.entry_id + "_" + _.entry_group_id)[0].files[0]), r.append("cors_jsonp", t.cors_jsonp), r.append("website_url", website_url), r.append("user_ip_address", t.user_ip_address), r.append("competition_id", t.competition_id), r.append("competition_url", t.competition_url), r.append("entry_id", _.entry_id), r.append("language", t.language), r.append("translate", t.translate), r.append("browser", t.browser_full), e("#file_upload_" + _.entry_id + "_" + _.entry_group_id)[0].files[0], e("#upload_a_file_message_" + _.entry_id + "_" + _.entry_group_id).text("Please Wait...").css("margin-bottom", "10px"), e("#file_upload_" + _.entry_id + "_" + _.entry_group_id).attr("disabled", !0), e("#upload_a_file_submit_" + _.entry_id + "_" + _.entry_group_id).css("cursor", "not-allowed"), e("#file_upload_" + _.entry_id + "_" + _.entry_group_id)[0].files[0],
                                        function(t, r, i) {
                                            e.ajax({
                                                url: r + "/w/a/c_upload_a_file.php",
                                                data: i,
                                                processData: !1,
                                                contentType: !1,
                                                type: t.ajax_type,
                                                xhrFields: t.ajax_xhrFields,
                                                dataType: t.ajax_dataType,
                                                jsonp: t.ajax_jsonp,
                                                xhr: function() {
                                                    var t = new window.XMLHttpRequest;
                                                    return t.upload.addEventListener("progress", (function(t) {
                                                        if (t.lengthComputable) {
                                                            var r = t.loaded / t.total;
                                                            r = parseInt(100 * r), e("#upload_a_file_progress_" + _.entry_id + "_" + _.entry_group_id).text(r + "%").css("width", r + "%")
                                                        }
                                                    }), !1), t
                                                },
                                                success: function(r) {
                                                    if (1 == t.cors_jsonp) var i = jQuery.parseJSON(r);
                                                    else 2 == t.cors_jsonp && (i = r);
                                                    var o = i.file_success;
                                                    if (e("#file_upload_" + _.entry_id + "_" + _.entry_group_id).attr("disabled", !1), e("#upload_a_file_submit_" + _.entry_id + "_" + _.entry_group_id).css("cursor", "pointer"), 1 == o) {
                                                        var s = i.file_path,
                                                            n = i.file_path_display,
                                                            a = i.file_ext;
                                                        if ("jpg" == a || "jpeg" == a || "gif" == a || "png" == a) var l = n;
                                                        else l = '<a target="_blank" href="' + s + '" style="font-weight:bold; text-decoration:underline; color:#' + t.links_font_color + ';">' + capitalizeFirstLetter(t.translate.success) + "</a>";
                                                        e("#upload_a_file_message_" + _.entry_id + "_" + _.entry_group_id).html(l).css("margin-bottom", "20px").css("text-align", "center"), e("#upload_a_file_header_" + _.entry_id + "_" + _.entry_group_id).hide(), e("#upload_a_file_submit_wrapper_" + _.entry_id + "_" + _.entry_group_id).show().css("margin-bottom", "15px"), e("#value_" + _.entry_method_text + "_" + _.entry_id + "_" + _.entry_group_id).val(s)
                                                    } else e("#upload_a_file_message_" + _.entry_id + "_" + _.entry_group_id).html(i.error_message).css("margin-bottom", "20px").css("color", "#" + t.error_color).css("font-weight", "bold").css("text-align", "center")
                                                }
                                            })
                                        }(t, website_url, r)
                                } else alert("Please select a file to upload.")
                            })))) : 2 == _.input_category ? "tiktok_watch_video" !== o && enable_disable_submit_button(t, _, i, s, o) : 3 == _.input_category || (4 == _.input_category && "birthday" !== o ? (e("#sw_" + u).focus(), enable_disable_submit_button(t, _, i, s, o)) : 5 == _.input_category && ("bonus" == o || "app_download" == o || "custom" == o && "" == _.input_options_1_db || enable_disable_submit_button(t, _, i, s, o))), -1 == ["blog_comment", "telegram_join_channel", "feedburner", "feedpress", "rss", "app_download", "twitter_follow", "linkedin_share", "linkedin_follow", "visit_a_page", "stumbleupon_like_post", "myspace_follow", "twitter_tweet", "bloglovin_follow", "youtube_like_video", "youtube_watch", "tiktok_watch_video", "instagram_follow", "secret_code"].indexOf(o))) {
                            var a = "#sw_embed_" + u;
                            if (1 == e(a).length) {
                                var l = e(a).attr("data-fetch").trim() || "true",
                                    d = e(a).attr("data-link").trim();
                                if (d && "true" == l) {
                                    e(a).html("<span>Loading Preview...</span>");
                                    var c = "https://iframe.ly/api/oembed?api_key=" + N.iframely_api_key + "&url=" + d,
                                        p = "";
                                    e.get(c).done((function(t) {
                                        if (!t || !t.thumbnail_url && "twitter_retweet" != o || t.error) p = "";
                                        else {
                                            var r = "",
                                                _ = "",
                                                i = t.thumbnail_url,
                                                s = "";
                                            if ("twitter_retweet" == o) {
                                                var n = t.description.split("—");
                                                n.pop(), s = n.join("")
                                            } else r = t.author || t.title || "", _ = t.title || "", t.provider_name && (t.author || t.title) && (r += " | " + t.provider_name, _ += " on " + t.provider_name, -1 != t.title.indexOf(t.provider_name) && (_ = t.title, t.author || (r = t.title)));
                                            p = '<div class="card"><div class="card-container">' + (r ? '<h5 class="card-header">' + r + "</h5>" : "") + '<div class="card-body">' + (i ? '<img class="card-img-top" src="' + i + '" alt="' + _ + '">' : "") + (i ? '<h5 class="card-title">' + _ + "</h5>" : "") + (s ? '<i><p class="card-text">' + s + "</p></i>" : "") + "</div></div></div>"
                                        }
                                        e(a).html(p), e(a).attr("data-fetch", "false")
                                    })).fail((function(t) {
                                        e(a).html(p), e(a).attr("data-fetch", "false")
                                    })).catch((function(t) {
                                        e(a).html(p), e(a).attr("data-fetch", "false")
                                    }))
                                }
                            }
                        }
                    }
                }))
            }

            function o(t, r, _) {
                e("#delete_sw_account").click((function() {
                    e.ajax({
                        url: t.script_login,
                        data: {
                            cors_jsonp: t.cors_jsonp,
                            login_type: 4,
                            competition_id: t.competition_id,
                            user_id: r,
                            email: _
                        },
                        type: t.ajax_type,
                        xhrFields: t.ajax_xhrFields,
                        dataType: t.ajax_dataType,
                        jsonp: t.ajax_jsonp,
                        success: function(e) {
                            if (1 == t.cors_jsonp) var r = jQuery.parseJSON(e);
                            else 2 == t.cors_jsonp && (r = e);
                            r.deletion_success;
                            var _ = r.user_id;
                            user_logout_click(t, _)
                        }
                    })
                }))
            }

            function s(t, r, _, i, o, s) {
                var n = _ + "_" + i + "_" + o;
                e("#sw_" + n + "_header").css("color", "#" + r.error_color).css("font-weight", "bold"), e("#sw_" + n).css("background-color", "#" + r.error_background).css("border", r.input_border_width + "px solid #" + r.error_background), button_enabled(!0, r, n, s)
            }

            function n(t, r, _, i, o, n, l) {
                var d = 1,
                    u = 0,
                    c = n + "_" + i + "_" + o;
                if (l && ("checkbox" === n || "textarea" === n)) return d;
                var p = "0",
                    g = e("#sw_" + c + "_header").attr("data-required");
                if (void 0 === g && (g = ""), void 0 === (p = "secret_code" == n ? e("#sw_" + c + "_header").attr("data-required-correct") : "1") && (p = "0"), p = parseInt(p, 10), "btc_crypto_wallet" == n && !1 === /^([13]|bc1)[A-HJ-NP-Za-km-z1-9]{27,34}$/.test(l) && (d = 0), "eth_bep20_crypto_wallet" != n && "bep2_crypto_wallet" != n || !1 === /^0x[a-fA-F0-9]{40}$/.test(l) && (d = 0), !n.includes("crypto_wallet") || 1 != d || "1" === _.input_options_1_db) {
                    if ("" !== g || "" == l || 0 == d || 1 == u)
                        if (l.toUpperCase() !== g.toUpperCase() && 1 == p || "" == l || 0 == d || 1 == u) {
                            d = 0, s(0, t, n, i, o, _.verify_button_text);
                            var m = switch_entry_method_text_to_int(n);
                            1 == t.if_allowed_entries_amount && e.ajax({
                                url: t.script_attempt,
                                data: {
                                    cors_jsonp: t.cors_jsonp,
                                    browser: t.browser_full,
                                    login_hash: t.sw_login_hash,
                                    user_email: r.user_email,
                                    user_ip_address: t.user_ip_address,
                                    competition_id: t.competition_id,
                                    competition_url: t.competition_url,
                                    entry_method: m,
                                    entry_id: i,
                                    entry_group_id: o,
                                    value: l,
                                    entry_level: 2,
                                    language: t.language
                                },
                                type: t.ajax_type,
                                xhrFields: t.ajax_xhrFields,
                                dataType: t.ajax_dataType,
                                jsonp: t.ajax_jsonp,
                                success: function(r) {
                                    try {
                                        if (1 == t.cors_jsonp) var _ = jQuery.parseJSON(r);
                                        else 2 == t.cors_jsonp && (_ = r);
                                        if (1 == _.more_entries_allowed) {
                                            var i = parseInt(e("#user_remaining_allowed_entries_amount_remaining").html());
                                            e("#user_remaining_allowed_entries_amount_remaining").html(i - 1)
                                        } else show_spam_message(t, 21), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: user ran out of allowed remaining entries/attempts.")
                                    } catch (e) {}
                                }
                            })
                        } else d = 1, s(0, t, n, i, o, _.verify_button_text);
                    return d
                }
                e.ajax({
                    url: t.website_url + "/w/a/c_wallet_check.php",
                    data: {
                        cors_jsonp: t.cors_jsonp,
                        competition_id: t.competition_id,
                        competition_url: t.competition_url,
                        entry_method: m,
                        value: l,
                        entry_level: 2
                    },
                    type: t.ajax_type,
                    xhrFields: t.ajax_xhrFields,
                    dataType: t.ajax_dataType,
                    jsonp: t.ajax_jsonp,
                    success: function(e) {
                        try {
                            if (1 == t.cors_jsonp) var c = jQuery.parseJSON(e);
                            else 2 == t.cors_jsonp && (c = arr_attempt);
                            return "1" == c.duplicate_address_check ? (u = 1, d = 0, show_spam_message(t, 102), ga_gtag(t, "SweepWidget duplicate wallet address", "Duplicate crypto wallet address", "User tried entering with a duplicate crypto wallet"), s(0, t, n, i, o, _.verify_button_text), d = 0) : (a(t, r, _, l), d = 1)
                        } catch (e) {
                            return d = 0
                        }
                    }
                })
            }

            function a(t, r, _, i) {
                var o = parseInt(e("#sw_my_entries").text());
                e.ajax({
                    url: t.script_insert,
                    data: {
                        cors_jsonp: t.cors_jsonp,
                        login_hash: t.sw_login_hash,
                        browser: t.browser_full,
                        user_id: r.user_id,
                        user_email: r.user_email,
                        user_name: r.user_name,
                        user_ip_address: t.user_ip_address,
                        user_country_code: t.user_country_code,
                        user_login_id: t.user_login_id,
                        widget_request_id: t.widget_request_id,
                        referral_param_string: t.referral_param_string,
                        competition_id: t.competition_id,
                        competition_url: t.competition_url,
                        entry_method: _.entry_method_int,
                        entry_id: _.entry_id,
                        entry_group_id: _.entry_group_id,
                        value: i,
                        entry_level: _.entry_level_db,
                        referral_hash: t.referral_hash,
                        parent_host_url: t.parent_host_url,
                        parent_url_full: t.parent_url_full,
                        embedded_giveaway_link: t.full_url_clean,
                        language: t.language,
                        trial_demo: t.trial_demo,
                        previous_user_entry_amount: o,
                        script_name: t.script_name
                    },
                    type: t.ajax_type,
                    xhrFields: t.ajax_xhrFields,
                    dataType: t.ajax_dataType,
                    jsonp: t.ajax_jsonp,
                    success: function(i) {
                        try {
                            if (1 == t.cors_jsonp) var o = jQuery.parseJSON(i);
                            else 2 == t.cors_jsonp && (o = i);
                            var s = o.success,
                                a = {
                                    user_required_entry_methods_finished: o.user_required_entry_methods_finished,
                                    total_entries_count: o.total_entries_count,
                                    total_entries_count_display: o.total_entries_count_display,
                                    total_users_count: o.total_users_count,
                                    user_entry_amount: o.user_entry_amount,
                                    user_entry_ids_array: o.user_entry_ids_array,
                                    user_entries_array: o.user_entries_array,
                                    user_entered_entry_ids_methods_array: o.user_entered_entry_ids_methods_array,
                                    entry_methods_count_if_entered: o.entry_methods_count_if_entered,
                                    mysweep_entries_links_list: o.mysweep_entries_links_list,
                                    user_daily_time_until_reentry: o.user_daily_time_until_reentry,
                                    user_remaining_not_required_entry_ids_count: o.user_remaining_not_required_entry_ids_count,
                                    user_remaining_entry_ids_count: o.user_remaining_entry_ids_count,
                                    user_remaining_required_entry_ids_count: o.user_remaining_required_entry_ids_count,
                                    user_daily_re_entry_allowed_count: o.user_daily_re_entry_allowed_count,
                                    days_left: o.days_left,
                                    user_completed_group_entry_lookup: o.user_completed_group_entry_lookup,
                                    entry_group_is_finished: o.entry_group_is_finished,
                                    all_entry_groups_finished: o.all_entry_groups_finished,
                                    entered_list: o.entered_list,
                                    entries_entry_amount_list: o.entries_entry_amount_list,
                                    entries_incorrect_answer_list: o.entries_incorrect_answer_list,
                                    earned_rewards_display: o.earned_rewards_display,
                                    user_remaining_allowed_entries_amount: o.user_remaining_allowed_entries_amount,
                                    incorrect_answer: o.incorrect_answer
                                },
                                l = _.entry_method_text + "_" + _.entry_id + "_" + _.entry_group_id;
                            if (1 == s) {
                                entry_method_insert_post_events(t, r, _, a);
                                for (var d = 0, u = 0; u < t.entry_methods_l2_list.length; u++) {
                                    var c = t.entry_methods_l2_list[u],
                                        p = c.entry_id,
                                        g = c.entry_method,
                                        m = switch_entry_method_int_to_text(g),
                                        y = (c.entry_order, c.entry_has_group, c.entry_group_id),
                                        h = (c.entry_group_order, c.widget_display),
                                        w = c.required_actions_until_unlock;
                                    l = m + "_" + p + "_" + y, 1 == t.if_daisy_chained_entries && a.user_entry_amount > 0 && ("5" !== g || "5" == g && "1" == h) && -1 == e.inArray(p, a.user_entry_ids_array) && 0 == d && (e("#sw_entry_" + l).attr("data-toggle", 1).css("cursor", "pointer"), e("#sw_entries_worth_locked_" + l).hide(), e("#sw_entries_worth_" + l).show(), e("#entry_amount_display_locked_" + l).show(), d++), a.user_entry_amount >= w && -1 == e.inArray(p, a.user_entry_ids_array) && (e("#sw_entry_" + l).attr("data-toggle", 1).css("cursor", "pointer"), e("#sw_entries_worth_locked_" + l).hide(), e("#sw_entries_worth_" + l).show(), e("#entry_amount_display_locked_" + l).show())
                                }
                                if (1 == t.if_unlock_rewards) {
                                    var f = parseInt(a.user_entry_amount) - parseInt(_.amount_db);
                                    e.each(t.competition_unlock_rewards.unlock_rewards_id, (function(t, r) {
                                        if (0 == r.unlock_rewards_skip) {
                                            var _ = r.unlock_rewards_entries_required;
                                            if (f < _) {
                                                if (a.user_entry_amount < _) var i = '<div class="unlock_rewards_lock_wrapper"><i class="fas fa-lock"></i></div>';
                                                else "" !== a.earned_rewards_display && e("#view_earned_rewards_results_wrapper").html(a.earned_rewards_display), i = '<div class="unlock_rewards_lock_wrapper"><i class="fas fa-lock-open"></i></div>', e("#view_earned_rewards_results_wrapper").slideDown(200);
                                                e("#progress_bar_wrapper-" + t).html('<div id="progress-' + t + '"></div>'), e("#unlock_rewards_lock-" + t).html(i), new CircleProgress("#progress-" + t, {
                                                    max: _,
                                                    value: a.user_entry_amount,
                                                    textFormat: "horizontal",
                                                    animationStartValue: f
                                                })
                                            }
                                        }
                                    }))
                                }
                            } else 2 == s ? (ga_gtag(t, "SweepWidget insert entry", "Insert entry", "Intert entry restricted: giveaway expired"), alert(t.entries_or_points_plural_are_not_allowed), button_enabled(!0, t, l, _.verify_button_text), e("#sw_entry_input_" + l + "_h").hide(), e("#sw_entry_" + l).attr("data-toggle", 1)) : 5 == s ? (show_spam_message(t, 1), ga_gtag(t, "SweepWidget insert entry", "Insert entry", "Insert entry error: logged in disqualified user tried to enter")) : 6 == s ? (show_spam_message(t, 2), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: email not allowed due to whitelisting")) : 9 == s ? (show_spam_message(t, 3), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: user ran out of allowed remaining entries/attempts.")) : 10 == s ? (e("#sw_" + l + "_header").css("color", "#" + t.error_color).css("font-weight", "bold"), e("#sw_" + l).css("background-color", "#" + t.error_background).css("border", t.input_border_width + "px solid #" + t.error_background), button_enabled(!0, t, l, _.verify_button_text), 1 == t.if_allowed_entries_amount && (n(t, r, _, _.entry_id, _.entry_group_id, _.entry_method_text, "a&*(234789&*("), update_user_remaining_entries_display(t.if_allowed_entries_amount, a.user_remaining_allowed_entries_amount, a.user_entry_amount))) : 12 == s ? show_spam_message(t, 4) : 13 == s ? show_spam_message(t, 999) : 3 == s || 15 == s || 31 == s || 32 == s || 33 == s || 34 == s || 35 == s || 36 == s || 37 == s || 61 == s || 62 == s || 63 == s || 64 == s || 65 == s || 66 == s || 67 == s || 68 == s || 69 == s || 70 == s || 71 == s || 72 == s || 73 == s || 74 == s || 75 == s || 76 == s || 77 == s || 78 == s || 79 == s || 80 == s ? show_spam_message(t, s) : 24 == s ? show_spam_message(t, 24) : 37 == s ? (show_spam_message(t, 37), ga_gtag(t, "SweepWidget insert entry", "Insert entry", "Insert entry error: spam detected on insert 7")) : 39 == s ? (show_spam_message(t, 39), ga_gtag(t, "SweepWidget insert entry", "Insert entry", "Insert entry error: spam detected on login IP check error")) : 40 == s || 41 == s || 42 == s || 43 == s || 44 == s ? (show_spam_message(t, s), ga_gtag(t, "SweepWidget insert entry", "Insert entry", "Insert entry error: spam detected on login " + s)) : 50 == s ? (show_spam_message(t, 50), ga_gtag(t, "SweepWidget insert entry", "Insert entry", "Insert entry error: too fast")) : 51 == s ? (show_spam_message(t, 51), ga_gtag(t, "SweepWidget insert entry", "Insert entry", "Insert entry error: blacklisted email")) : 81 == s ? (show_spam_message(t, 81), ga_gtag(t, "SweepWidget insert entry", "Insert entry", "Insert entry error: VPN detected")) : 0 == s ? (show_spam_message(t, 2), ga_gtag(t, "SweepWidget insert entry", "Insert entry", "Insert entry error: duplicate")) : (button_enabled(!0, t, l, _.verify_button_text), ga_gtag(t, "SweepWidget insert entry", "Insert entry", "Insert entry error: unknown"))
                        } catch (e) {
                            button_enabled(!0, t, l, _.verify_button_text), ga_gtag(t, "SweepWidget insert entry", "Insert entry", "Insert entry error: unknown")
                        }
                    }
                })
            }

            function l(t, r, _) {
                if (e(".sw_login").hide(), e("#sw_logout_link_holder").show(), e(".sw_inner_entry_methods").show(), e("#sw_login_button, input[name=sw_login]").html(t.buttons_enter_text).css("cursor", "pointer").css("opacity", "1").prop("disabled", !1), e(".sw_unlock_additional_entries").hide(), 1 == r.pending_verification) var o = 0;
                else o = r.user_entry_amount;
                if (e("#sw_my_entries").html(o), r.user_entry_amount, 0 == r.user_remaining_entry_ids_count && r.user_entry_amount > 0) {
                    if (1 == _) var s = 1;
                    else s = 0;
                    entries_completed_message(t, r.all_entry_groups_finished, r.user_daily_re_entry_allowed_count, s)
                }
                e(".sw_inner_entry_methods").show(), 0 == t.deleted && (t.days_left >= 0 || t.days_left < 0 && 0 == t.has_started) && function(t, r, _) {
                    var o = {};
                    void 0 !== r.entry_methods_count_if_entered && r.entry_methods_count_if_entered.forEach((function(e, t) {
                        var _ = r.entry_methods_count_if_entered[t].split("|");
                        5 == _.length && (o[_[0] + "|" + _[1] + "|" + _[2]] = {
                            if_entered: _[3],
                            if_daily_re_entry_allowed: _[4]
                        })
                    })), e("#sw_inner_entry_methods_l2_wrapper").html("");
                    for (var s = 0, n = 0; n < t.entry_methods_l2_list.length; n++) {
                        var a = t.entry_methods_l2_list[n],
                            l = a.entry_id,
                            d = a.entry_method,
                            u = (a.entry_order, a.entry_has_group),
                            c = a.entry_group_id,
                            p = a.entry_group_order,
                            g = l + "|" + d + "|" + c,
                            m = 0,
                            y = 0;
                        o[g] && (m = parseInt(o[g].if_entered, 10) || 0, y = 1 == parseInt(o[g].if_daily_re_entry_allowed, 10) && parseInt(a.daily, 10) >= 1 ? 1 : 0);
                        var h = y,
                            w = parseInt(a.entry_level),
                            f = parseInt(a.entry_method),
                            b = a.entry_method_handle,
                            v = a.entry_title,
                            k = a.entry_link,
                            x = a.entry_link_prepend,
                            j = a.social_account_user_id,
                            q = a.entry_textarea,
                            S = parseInt(a.entry_amount),
                            I = a.entry_amount_display,
                            E = a.input_options_1,
                            T = a.input_options_2,
                            F = a.email_integration,
                            z = a.input_header_value,
                            W = a.link_button_text_value,
                            O = a.verify_header_value,
                            N = a.verify_button_text_value,
                            D = a.entry_attachment,
                            C = a.tags,
                            J = a.viral_share,
                            L = a.additional_instructions,
                            P = parseInt(a.daily, 10),
                            $ = parseInt(a.timer, 10),
                            A = parseInt(a.required, 10),
                            M = parseInt(a.required_actions_until_unlock, 10),
                            Q = parseInt(a.if_viral_share_award_bonus_entries, 10),
                            U = parseInt(a.viral_share_award_bonus_entries_amount, 10),
                            R = parseInt(a.if_viral_share_max_allowed_referrals, 10),
                            H = parseInt(a.viral_share_max_allowed_referrals_amount, 10),
                            V = a.custom_icon,
                            K = parseInt(a.require_verification, 10),
                            Y = parseInt(a.social_optional_engagement, 10),
                            G = a.widget_display,
                            B = a.icon_color;
                        0 == t.cookies_enabled && (Y = 0);
                        var X = switch_entry_method_int_to_text(f);
                        "refer_friends" == X && (m = 0);
                        var Z = entry_method_fetch_values(X, "entry_method_handle", v, k, q, t.language, t.translate),
                            ee = entry_method_fetch_values(X, "entry_title", v, k, q, t.language, t.translate),
                            te = entry_method_fetch_values(X, "entry_link", v, k, q, t.language, t.translate),
                            re = entry_method_fetch_values(X, "entry_amount", v, k, q, t.language, t.translate),
                            _e = entry_method_fetch_values(X, "entry_textarea", v, k, q, t.language, t.translate),
                            ie = entry_method_fetch_values(X, "additional_instructions", v, k, q, t.language, t.translate),
                            oe = entry_method_fetch_values(X, "daily", v, k, q, t.language, t.translate),
                            se = entry_method_fetch_values(X, "timer", v, k, q, t.language, t.translate),
                            ne = entry_method_fetch_values(X, "required", v, k, q, t.language, t.translate),
                            ae = (entry_method_fetch_values(X, "custom_icon", v, k, q, t.language, t.translate), entry_method_fetch_values(X, "require_verification", v, k, q, t.language, t.translate)),
                            le = entry_method_fetch_values(X, "social_optional_engagement", v, k, q, t.language, t.translate),
                            de = entry_method_fetch_values(X, "input_type", v, k, q, t.language, t.translate),
                            ue = entry_method_fetch_values(X, "email_integration", v, k, q, t.language, t.translate),
                            ce = entry_method_fetch_values(X, "viral_share", v, k, q, t.language, t.translate),
                            pe = entry_method_fetch_values(X, "viral_share_options", v, k, q, t.language, t.translate),
                            ge = entry_method_fetch_values(X, "input_category", v, k, q, t.language, t.translate),
                            me = entry_method_fetch_values(X, "input_header", v, k, q, t.language, t.translate),
                            ye = entry_method_fetch_values(X, "verify_header", v, k, q, t.language, t.translate),
                            he = entry_method_fetch_values(X, "input_placeholder", v, k, q, t.language, t.translate),
                            we = entry_method_fetch_values(X, "link_button_text", v, k, q, t.language, t.translate),
                            fe = entry_method_fetch_values(X, "verify_button_text", v, k, q, t.language, t.translate),
                            be = entry_method_fetch_values(X, "entry_icon_path", v, k, q, t.language, t.translate),
                            ve = entry_method_fetch_values(X, "font_awesome_icon", v, k, q, t.language, t.translate),
                            ke = entry_method_fetch_values(X, "background_color", v, k, q, t.language, t.translate),
                            xe = entry_method_fetch_values(X, "color", v, k, q, t.language, t.translate);
                        d = switch_entry_method_text_to_int(X), switch_entry_method_int_to_provider(d), 1 == t.plan && (B = ke), 1 == t.if_daisy_chained_entries && r.user_entry_amount > 0 && ("5" !== d || "5" == d && "1" == G) && -1 == e.inArray(l, r.user_entry_ids_array) && 0 == s && (A = 1, s++), we = capitalizeFirstLetter(we), me = capitalizeFirstLetter(me), ye = capitalizeFirstLetter(ye), fe = capitalizeFirstLetter(fe), 1 == ae && 0 == K && (ye = "", he = "", fe = ""), "" !== z && (me = z), "" !== W && (we = W), "" !== O && (ye = O), "" !== N && (fe = N);
                        var je = {
                            if_entered_db: m,
                            if_daily_re_entry_allowed: y,
                            fetch_entry: a,
                            entry_id: l,
                            entry_has_group: u,
                            entry_group_id: c,
                            entry_group_order: p,
                            daily_re_entry_allowed: h,
                            entry_level_db: w,
                            entry_method_int: f,
                            entry_method_handle_db: b,
                            entry_title_db: v,
                            entry_link_db: k,
                            social_account_user_id_db: j,
                            entry_link_prepend_db: x,
                            entry_textarea_db: q,
                            amount_db: S,
                            amount_display_db: I,
                            input_options_1_db: E,
                            input_options_2_db: T,
                            email_integration_db: F,
                            entry_attachment_db: D,
                            upload_a_file_ext_db: C,
                            viral_share_db: J,
                            additional_instructions_db: L,
                            daily_db: P,
                            timer_db: $,
                            required_db: A,
                            required_actions_until_unlock_db: M,
                            if_viral_share_award_bonus_entries_db: Q,
                            viral_share_award_bonus_entries_amount_db: U,
                            if_viral_share_max_allowed_referrals_db: R,
                            viral_share_max_allowed_referrals_amount_db: H,
                            custom_icon_db: V,
                            require_verification_db: K,
                            social_optional_engagement_db: Y,
                            entry_method_text: X,
                            entry_method_handle: Z,
                            entry_title: ee,
                            entry_link: te,
                            entry_amount: re,
                            entry_textarea: _e,
                            additional_instructions: ie,
                            daily: oe,
                            timer: se,
                            required: ne,
                            require_verification: ae,
                            social_optional_engagement: le,
                            input_type: de,
                            email_integration: ue,
                            viral_share: ce,
                            viral_share_options: pe,
                            input_category: ge,
                            input_header: me,
                            verify_header: ye,
                            input_placeholder: he,
                            link_button_text: we,
                            verify_button_text: fe,
                            entry_icon_path: be,
                            font_awesome_icon: ve,
                            color: xe,
                            background_color: ke,
                            widget_display: G,
                            icon_color_db: B
                        };
                        if (1 == t.user_country_allowed && 2 == w && (write_entry_methods(t, r, je, _), r.user_entry_amount > 0 && (0 == m || P >= 1) && i(t, r, je), "refer_friends" == je.entry_method_text)) {
                            var qe = je.entry_id + "_" + je.entry_method_int + "_" + je.entry_group_id;
                            e(".sw_share_link").val(r.referral_url), e("#sw_entry_viral_share_inner_" + qe).find("button.sw_share_btn").each((function(t) {
                                e(this).attr("data-url", r.referral_url)
                            }))
                        }
                    }
                    0 == r.user_entry_amount && 1 == t.entry_methods_view && 1 == t.has_started && t.days_left, e(".sw_entry_h_1").hover((function() {
                        var t = e(this).attr("data-toggle"),
                            _ = e(this).attr("data-entry_id"),
                            i = e(this).attr("data-entry_method_text"),
                            o = e(this).attr("data-entry_group_id");
                        t >= 3 && r.user_entry_amount > 0 && e("#sw_center_icon_tooltip_" + i + "_" + _ + "_" + o).show()
                    }), (function() {
                        var t = e(this).attr("data-toggle"),
                            _ = e(this).attr("data-entry_id"),
                            i = e(this).attr("data-entry_method_text"),
                            o = e(this).attr("data-entry_group_id");
                        t >= 3 && r.user_entry_amount > 0 && e("#sw_center_icon_tooltip_" + i + "_" + _ + "_" + o).hide()
                    })), r.user_entry_amount > 0 && e(".sw_entry_h_1").click((function() {
                        if (e(this).attr("data-toggle") >= 3) {
                            var t = e(this).parent().parent().attr("id");
                            e("#" + t).effect("shake", {
                                direction: "side",
                                times: 4,
                                distance: 10
                            }, 700)
                        }
                    }))
                }(t, r, _), entry_methods_view_func(t, r), 0 == t.entry_methods_l2_count && r.user_entry_amount > 0 && e("#sw_inner_entry_methods_l2_wrapper").html('<p id="please_login_message" style="margin-top:30px; margin-bottom:30px;">Finished &nbsp;' + t.default_checkmark + "</p>"), (2 == t.image_display || 3 == t.image_display) && r.user_entry_amount > 0 && e(".sw_image_2").css("margin-bottom", "15px"), e(".sw_inner input[type=text], .sw_inner input[type=number], .sw_inner input[type=email], .sw_inner select, .sw_inner textarea").css("border", t.input_border_width + "px solid #" + t.input_border_color).css("font-family", "'" + t.form_font_family + "', sans-serif").css("background-color", "#ffffff"), e(".sw_share_link").css("border-right", "0px solid #fff"), e(".sw_inner #refresh").css("background-color", "#" + t.body_background_color).css("border", "1px solid #" + t.body_background_color).css("color", "#" + t.bottom_color_2).css("font-family", "'" + t.form_font_family + "', sans-serif"), e(".sw_inner_2 a").css("color", "#" + t.links_font_color), e(".sw_link_no_style").css("color", "#" + t.buttons_font_color), e(".sw_attribution a").css("color", "#" + t.body_font_color), e(".sw_share_btn.twitter_button, #enable_cookies, #enable_cookies_popup_link a, .sw_copy_clipboard, .earned_rewards_copy").css("color", "#fff"), e(".sw_copy_clipboard").css("color", "#" + t.buttons_font_color).css("background", "#" + t.buttons_background_color).css("border", "2px solid #" + t.buttons_background_color), e(".link_button_wrapper a").css("color", "#" + t.buttons_font_color).css("background", "#" + t.buttons_background_color), r.user_entry_amount > 0 ? (e("#sw_entry_amount_allowed_text").css("margin-top", "15px").css("margin-bottom", "15px").show(), e("#show_user_entries").css("margin-bottom", "25px"), e("#tabs_wrapper").show(), 1 == t.entry_methods_view ? e("#sw_inner_entry_methods_l2_wrapper").css("margin-top", "25px") : 2 == t.entry_methods_view && e("#sw_inner_entry_methods_l2_wrapper").css("margin-top", "20px"), e("#sw_entry_amount_allowed_text_inner").show(), 1 == t.if_unlock_rewards && e.each(t.competition_unlock_rewards.unlock_rewards_id, (function(e, t) {
                    if (0 == t.unlock_rewards_skip) {
                        var _ = t.unlock_rewards_entries_required;
                        new CircleProgress("#progress-" + e, {
                            max: _,
                            value: r.user_entry_amount,
                            textFormat: "horizontal"
                        })
                    }
                })), 1 !== t.default_css && "ffffff" !== t.body_background_color && (e(".circle-progress-circle").css("stroke", "#fff"), e(".circle-progress-value").css("stroke", "#" + t.links_font_color)), e("#view_rewards_link").on("click", (function() {
                    e("#view_earned_rewards_results_wrapper").is(":visible") ? e(this).html(t.translate.show_earned_rewards + ' &nbsp;<i class="fas fa-angle-down"></i>').css("border-color", "#" + t.input_border_color) : e(this).html(t.translate.hide_earned_rewards + ' &nbsp;<i class="fas fa-angle-up"></i>').css("border-color", "#" + t.links_font_color), e("#view_earned_rewards_results_wrapper").slideToggle(200)
                })), e(document.body).on("click", ".earned_rewards_copy, .view_rewards_copy_coupon_input", (function() {
                    var r = e(this).attr("data-unlock_rewards_id");
                    e("#earned_rewards_coupon_code-" + r).val(), copy_to_clipboard("earned_rewards_coupon_code-" + r), e("#earned_rewards_coupon_code_click-" + r).html(t.default_checkmark), setTimeout((function() {
                        e("#earned_rewards_coupon_code_click-" + r).html('<i class="far fa-copy"></i>')
                    }), 2e3)
                })), e(document.body).on("keyup paste", ".verify_email_input", (function(r) {
                    var _ = e(this).attr("id"),
                        i = parseInt(e(this).attr("data-input-num")),
                        o = String.fromCharCode(r.which),
                        s = e(this).val(),
                        n = e(this).val().length,
                        a = t.input_border_width + "px solid #" + t.links_font_color;

                    function l(t, r, _, i) {
                        1 == i ? e("#verify_email_input_" + t).val(r).css("border-bottom", _).focus() : e("#verify_email_input_" + t).val(r).css("border-bottom", _)
                    }
                    if (n >= 1) {
                        if (o.match(/[0-9\.]/) && e("#" + _).val(o).css("border-bottom", a), i < 4 && e("#verify_email_input_" + (i + 1)).focus(), n > 1)
                            for (var d = s.length, u = 0; u < d; u++) {
                                var c = i + u;
                                if (c <= 4) {
                                    if (c == d + (i - 1)) var p = 1;
                                    else p = 0;
                                    l(c, s.charAt(u), a, p)
                                }
                            }
                    } else 0 == n && (i > 1 && e("#verify_email_input_" + (i - 1)).focus(), e("#" + _).css("border-bottom", t.input_border_width + "px solid #" + t.input_border_color))
                })), e(".verify_email_input").css("font-family", '"Courier New", Courier, monospace').css("border-left", "0px solid #fff").css("border-top", "0px solid #fff").css("border-right", "0px solid #fff").css("border-bottom", t.input_border_width + "px solid #" + t.input_border_color), e(document.body).on("click", "#verify_email_submit", (function() {
                    e("#verify_email_submit").val("One Moment...");
                    var _ = e("#verify_email_input_1").val(),
                        i = e("#verify_email_input_2").val(),
                        o = e("#verify_email_input_3").val(),
                        s = e("#verify_email_input_4").val();
                    "" == _ || "" == i || "" == o || "" == s ? (e("#verify_email_error_wrapper").html("Please fill in all 4 digits.").show(), e("#verify_email_submit").val("Verify")) : e.ajax({
                        url: website_url + "/w/a/c_verify_email.php",
                        data: {
                            cors_jsonp: t.cors_jsonp,
                            browser: t.browser_full,
                            user_id: r.user_id,
                            widget_request_id: t.widget_request_id,
                            referral_param_string: t.referral_param_string,
                            user_name: r.user_name,
                            user_email: r.user_email,
                            user_ip_address: t.user_ip_address,
                            user_country_code: t.user_country_code,
                            referral_url: r.referral_url,
                            referral_hash: t.referral_hash,
                            user_login_id: t.user_login_id,
                            competition_id: c,
                            competition_url: t.competition_url,
                            language: t.language,
                            trial_demo: t.trial_demo,
                            val_1: _,
                            val_2: i,
                            val_3: o,
                            val_4: s
                        },
                        type: t.ajax_type,
                        xhrFields: t.ajax_xhrFields,
                        dataType: t.ajax_dataType,
                        jsonp: t.ajax_jsonp,
                        success: function(_) {
                            if (1 == t.cors_jsonp) var i = jQuery.parseJSON(_);
                            else 2 == t.cors_jsonp && (i = _);
                            var o = i.success;
                            1 == o ? (e("#verify_email_submit").val("Verify"), 1 == o ? (e("#verify_email_wrapper").hide(), e("#verify_email_not_verified_wrapper").show(), e("#viral_giveaway_main_wrapper").show(), e("#sw_my_entries").html(r.user_entry_amount)) : e("#verify_email_error_wrapper").html("Incorrect code").show()) : show_spam_message(t, 999)
                        }
                    })
                }))) : (e("#sw_entry_amount_allowed_text").css("margin-top", "0px").css("margin-bottom", "0px").hide(), e("#tabs_wrapper").hide(), e("#sw_inner_entry_methods_l2_wrapper").css("margin-top", "10px")), 1 == t.hide_description && (e("#widget_description").hide(), r.user_entry_amount > 0 ? e(".sw_title_image_desc_row").css("padding-bottom", "30px") : e(".sw_title_image_desc_row").css("padding-bottom", "10px")), loadScript("https://cdn.jsdelivr.net/npm/sharer.js@latest/sharer.min.js", (function() {}))
            }
            var d, u = (d = e(".sw_container").attr("id")).split("-"),
                c = (u = (d = e(".sw_container").attr("id")).split("-"))[0],
                p = u[1],
                g = (u[2], e("#" + d).attr("data-ip")),
                m = e("#" + d).attr("data-ipv"),
                y = e("#" + d).attr("data-country-code"),
                h = e("#" + d).attr("data-cookies-enabled"),
                w = getParentHost("host_url"),
                f = e("#" + d).attr("data-parent-url-full"),
                b = e("#" + d).attr("referral-hash"),
                v = e("#" + d).attr("data-email-prefill"),
                k = e("#" + d).attr("data-name-prefill"),
                x = e("#" + d).attr("data-auto-login-prefill"),
                j = e("#" + d).attr("google-analytics-id"),
                q = e("#" + d).attr("google-tag-manager-id"),
                S = e("#" + d).attr("data-force-cors"),
                I = e("#" + d).attr("data-widget-embedded"),
                E = getScriptName(),
                T = e("#" + d).attr("rand-hash"),
                F = e("#" + d).attr("is-mobile"),
                z = e("#" + d).attr("data-user-login"),
                W = e("#" + d).attr("widget-request-id"),
                O = e("#" + d).attr("referral-param-string");
            h = "Yes" == h;
            var N = {
                    allowed_origins: [_ = website_url.replace("https://", "")],
                    facebook: {
                        appId: "723946844466921",
                        xfbml: !0,
                        version: "v3.2"
                    },
                    iframely_api_key: "979ea3a3e43fb0fc99291e"
                },
                D = website_url + "/w/a/c.php",
                C = website_url + "/w/a/c_l.php",
                J = website_url + "/w/a/c_i.php",
                L = website_url + "/w/a/c_a.php";
            if (F = 1 == F ? "Mobile" : "Desktop", f.indexOf("sw-share=") >= 0) {
                var P = f.split("sw-share=").pop().trim(),
                    $ = P.split("-"),
                    A = $[0],
                    M = $[1];
                "" !== A && M == c && (b = P)
            }
            if (1 == h && 1 == browserSupportsCors() || 1 == S) var Q = 1,
                U = "POST",
                R = {
                    withCredentials: !0
                },
                H = "text",
                V = !1;
            else Q = 2, U = "GET", R = !1, H = "jsonp", V = "mycallbackselect";
            if ("" !== j) var K = !0;
            else K = !1;
            if ("" !== q) var Y = !0;
            else Y = !1;
            if (-1 != w.indexOf(website_host)) var G = !0;
            else G = !1;
            var B = window.location.pathname,
                X = website_url + B,
                Z = X.replace("-embedded", "");
            if (Z = (Z = Z.replace("-reload", "")).replace("view2", "view"), B.indexOf("-reload") >= 0) var ee = !0;
            else ee = !1;
            var te = detect_browser(),
                re = te.split(" "),
                _e = re[0],
                ie = re[1],
                oe = "MSIE 8" == (te = te + " - " + F) ? 'style="margin-bottom:350px;"' : "";
            if ("MSIE" == _e && ie <= 8) return void alert("To enter this giveaway, you must upgrade your browser. We recommend Chrome.");
            if (!0 !== browserSupportsCors()) return alert("Your browser is not compatible with with giveaway. Please upgrade to a newer browser."), void e(".sw_container_inner").html('<div style="width:94%; padding:0 3% 0 3%; text-align:center; float:left;"><h2 style="font-family:\'' + args_init.form_font_family + "', sans-serif;\">To enter this giveaway, you must upgrade to a newer browser.</h2></div>");
            e.ajax({
                url: D,
                data: {
                    cors_jsonp: Q,
                    competition_id: c,
                    competition_url: p,
                    script_name: E,
                    user_ip_address: g,
                    browser: te
                },
                type: U,
                xhrFields: R,
                dataType: H,
                jsonp: V,
                success: function(_) {
                    if (_) {
                        if (1 == Q) var i = jQuery.parseJSON(_);
                        else 2 == Q && (i = _);
                        var s = i.website_id,
                            n = i.if_leaderboard,
                            a = i.leaderboard_title,
                            u = i.leaderboard_description,
                            N = i.leaderboard_display_amount,
                            P = i.leaderboard_display,
                            $ = i.if_unlock_rewards,
                            A = i.competition_unlock_rewards_count,
                            M = i.title,
                            re = i.description,
                            se = i.rules,
                            ne = i.start_time,
                            ae = i.end_time,
                            le = i.start_time_display,
                            de = i.end_time_display,
                            ue = i.end_date,
                            ce = i.time_zone,
                            pe = i.timezone_display,
                            ge = i.remove_footer,
                            me = i.redirect_url,
                            ye = i.user_details_entries_worth,
                            he = i.number_of_winners,
                            we = i.language,
                            fe = i.image_loc,
                            be = i.image_ext,
                            ve = i.image_width_display,
                            ke = i.image_display,
                            xe = i.custom_image_width,
                            je = i.custom_image_height,
                            qe = i.youtube_feature,
                            Se = i.image_or_video,
                            Ie = i.published_timestamp,
                            Ee = i.updated_timestamp,
                            Te = i.age_limit,
                            Fe = i.age_limit_min_or_max,
                            ze = i.age_verification,
                            We = i.age_verification_format,
                            Oe = i.countries_allowed,
                            Ne = i.hide_all_entries,
                            De = i.check_for_duplicate_ip,
                            Ce = i.deleted,
                            Je = i.hide_entries_if_logged_out,
                            Le = i.social_login_require,
                            Pe = i.social_login_options_count,
                            $e = i.facebook_login,
                            Ae = i.twitter_login,
                            Me = i.instagram_login,
                            Qe = i.pinterest_login,
                            Ue = i.google_login,
                            Re = i.linkedin_login,
                            He = i.twitch_login,
                            Ve = i.discord_login,
                            Ke = i.steam_login,
                            Ye = i.yahoo_login,
                            Ge = i.tumblr_login,
                            Be = i.openid_login,
                            Xe = i.telegram_login,
                            Ze = i.competition_unlock_rewards,
                            et = i.require_verify_email,
                            tt = i.require_verify_sms,
                            rt = i.translate,
                            _t = i.plan,
                            it = i.if_custom_smtp,
                            ot = i.if_allowed_entries_amount,
                            st = i.allowed_entries_amount,
                            nt = i.if_daisy_chained_entries,
                            at = i.trial_demo,
                            lt = i.trial_demo_accessed_timestamp,
                            dt = i.trial_demo_expired,
                            ut = i.remove_sw_google_analytics,
                            ct = i.twitter_follow_api_hits_remaining,
                            pt = i.twitter_follow_input_category,
                            gt = i.twitter_tweet_api_hits_remaining,
                            mt = i.twitter_tweet_input_category,
                            yt = i.twitter_retweet_api_hits_remaining,
                            ht = i.twitter_retweet_input_category;
                        2 == Q && (Le = 0, Pe = 0, $e = 0);
                        var wt = if_user_country_code_is_in_array(y, Oe),
                            ft = i.has_started,
                            bt = i.days_until_begin,
                            vt = i.days_left,
                            kt = i.days_left_clock,
                            xt = i.hours_left_clock,
                            jt = i.minutes_left_clock,
                            qt = i.seconds_left_clock,
                            St = i.is_expired,
                            It = i.display_winners,
                            Et = i.hour_minutes_until_begin,
                            Tt = i.hour_minutes_until_end,
                            Ft = i.begins_in_less_than_24_hours,
                            zt = i.ends_in_less_than_24_hours,
                            Wt = i.total_entries_count,
                            Ot = i.total_entries_count_display,
                            Nt = i.total_users_count,
                            Dt = i.total_entries_for_credit,
                            Ct = i.entry_methods_count,
                            Jt = i.entry_methods_l1_count,
                            Lt = i.entry_methods_l2_count,
                            Pt = i.entry_methods_l2_required_count,
                            $t = i.entry_methods_l2_not_required_count,
                            At = i.entry_ids_all,
                            Mt = i.entry_methods_l1_list,
                            Qt = i.entry_methods_l2_list,
                            Ut = i.entry_methods_all,
                            Rt = i.has_required,
                            Ht = i.entry_ids_daily_array,
                            Vt = i.has_daily,
                            Kt = i.has_daily_non_group,
                            Yt = i.entry_ids_timer_array,
                            Gt = i.has_timer,
                            Bt = i.if_facebook,
                            Xt = i.if_twitter,
                            Zt = i.if_tiktok,
                            er = i.if_pinterest,
                            tr = i.if_linkedin,
                            rr = i.if_youtube_watch,
                            _r = i.if_refer_friends,
                            ir = i.if_upload_file,
                            or = i.if_e_signature,
                            sr = i.entries_or_points,
                            nr = i.entries_or_points_custom_singular,
                            ar = i.entries_or_points_custom_plural,
                            lr = i.security_level;
                        if (1 == sr) var dr = rt.entry,
                            ur = rt.entries,
                            cr = rt.my_entries,
                            pr = rt.earn_entries,
                            gr = rt.all_entries;
                        else 2 == sr ? (dr = rt.point, ur = rt.points, cr = rt.my_points, pr = rt.earn_points, gr = rt.all_points) : 999 == sr && (dr = nr, ur = ar, cr = capitalizeFirstLetter(rt.my) + " " + ar, pr = capitalizeFirstLetter(rt.earn) + " " + ar, gr = capitalizeFirstLetter(rt.all) + " " + ar);
                        var mr = i.title_font_color,
                            yr = i.title_font_size,
                            hr = i.body_font_color,
                            wr = i.body_background_color,
                            fr = i.body_description_background_color,
                            br = i.body_font_size,
                            vr = i.input_border_color,
                            kr = i.input_border_width,
                            xr = i.links_font_color,
                            jr = i.unlock_font_color,
                            qr = i.unlock_font_size,
                            Sr = i.form_font_family,
                            Ir = i.top_numbers_font_color,
                            Er = i.top_numbers_font_size,
                            Tr = i.top_text_font_color,
                            Fr = i.top_text_font_size,
                            zr = i.top_background_color,
                            Wr = i.buttons_font_color,
                            Or = i.buttons_background_color,
                            Nr = i.buttons_font_size,
                            Dr = i.buttons_width,
                            Cr = i.buttons_padding,
                            Jr = i.buttons_border_radius,
                            Lr = i.form_border_color,
                            Pr = i.form_border_width,
                            $r = i.form_border_radius,
                            Ar = i.form_box_shadow,
                            Mr = i.form_max_width,
                            Qr = i.default_css,
                            Ur = Lr,
                            Rr = i.hide_title,
                            Hr = i.hide_description,
                            Vr = i.entry_methods_view,
                            Kr = i.buttons_enter_text,
                            Yr = i.default_checkmark;
                        "en" !== we && "Enter Giveaway" == Kr && (Kr = rt.enter_giveaway), 1 == Xt && loadScript("https://platform.twitter.com/widgets.js", (function() {})), 1 == Zt && loadScript("https://www.tiktok.com/embed.js", (function() {})), 1 == or && (loadScript(website_url + "/js/sig_js/jSignature.min.js", (function() {})), loadScript(website_url + "/js/sig_js/modernizr.js", (function() {}))), ga_gtag_page_view(website_host, K, j, Y, q, ut, M, B, X);
                        var Gr = rt.full_name,
                            Br = rt.email_address,
                            Xr = rt.login_with_optional,
                            Zr = rt.date_of_birth;
                        if (rt.this_giveaway_will_begin_soon, rt.this_giveaway_will_begin_soon, rt.this_giveaway_ended, rt.please_complete_all_required_entries, rt.please_complete_the_login_form, 1 == rr && loadScript(website_url + "/external/ui/yt-player.js", (function() {})), 1 == ir && (e("<link/>", {
                                rel: "stylesheet",
                                type: "text/css",
                                href: "https://cdn.jsdelivr.net/npm/bootstrap-progressbar@0.9.0/css/bootstrap-progressbar-3.3.4.min.css"
                            }).appendTo("head"), loadScript("https://cdn.jsdelivr.net/npm/bootstrap-progressbar@0.9.0/bootstrap-progressbar.min.js", (function() {}))), 1 == Qr) var e_ = "999999",
                            t_ = "padding-top:0px; padding-bottom:0px;",
                            r_ = "width:100%; padding:0px 0% 0px 0%;",
                            __ = "",
                            i_ = "background:#" + zr + "; border-bottom:1px solid #eee;",
                            o_ = "";
                        else e_ = hr, t_ = "padding-bottom:20px; background:#" + fr, r_ = "width:100%; padding:0px 0% 0px 0%; background:#" + fr + ";", __ = "background:#" + fr, i_ = "background:#" + zr + "; border-bottom:1px solid #" + Lr + "; border-top-left-radius:" + .85 * $r + "px; border-top-right-radius:" + .85 * $r + "px;", o_ = "border-bottom-left-radius:" + .85 * $r + "px; border-bottom-right-radius:" + .85 * $r + "px;";
                        if ("555555" == hr) var s_ = hr,
                            n_ = hr,
                            a_ = hr,
                            l_ = "aaaaaa",
                            d_ = hr,
                            u_ = "aaaaaa",
                            c_ = hr;
                        else s_ = hr, n_ = hr, a_ = hr, l_ = hr, d_ = hr, u_ = hr, c_ = hr;
                        if ("ffffff" == wr) {
                            var p_ = "f6f6f6";
                            fr = "ffffff"
                        } else p_ = "ffffff";
                        if (100 == Mr) var g_ = "%";
                        else g_ = "px";
                        var m_ = M.replace(/(<([^>]+)>)/gi, ""),
                            y_ = re.replace(/(<([^>]+)>)/gi, "");
                        e.ajax({
                            url: C,
                            data: {
                                cors_jsonp: Q,
                                login_type: 1,
                                login_hash: t,
                                user_ip_address: g,
                                ipv: m,
                                widget_request_id: W,
                                referral_param_string: O,
                                referral_hash: b,
                                user_login_id: z,
                                competition_id: c,
                                competition_url: p,
                                parent_host_url: w,
                                parent_url_full: f,
                                title_check: m_,
                                description_check: y_,
                                time_zone: ce,
                                browser: te,
                                language: we,
                                trial_demo: at,
                                script_name: E
                            },
                            type: U,
                            xhrFields: R,
                            dataType: H,
                            jsonp: V,
                            success: function(t) {
                                if (t) {
                                    if (1 == Q) var _ = jQuery.parseJSON(t);
                                    else 2 == Q && (_ = t);
                                    var q = _.login_hash_payload,
                                        B = _.user_id,
                                        ir = _.name,
                                        or = _.email,
                                        nr = _.birthday,
                                        ar = _.login_result,
                                        h_ = _.user_entry_ids_array,
                                        w_ = _.user_entry_amount,
                                        f_ = _.pending_verification,
                                        b_ = _.user_entries_array,
                                        v_ = _.user_entered_entry_ids_methods_array,
                                        k_ = _.user_daily_time_until_reentry,
                                        x_ = _.user_l1_required_remaining_entries_count,
                                        j_ = _.user_required_entry_methods_finished,
                                        q_ = _.user_remaining_entry_ids_count,
                                        S_ = _.user_remaining_required_entry_ids_count,
                                        I_ = _.user_remaining_not_required_entry_ids_count,
                                        E_ = _.user_l1_entry_methods_finished,
                                        T_ = _.user_daily_re_entry_allowed,
                                        F_ = _.user_daily_re_entry_allowed_count,
                                        z_ = _.entry_methods_count_if_entered,
                                        W_ = _.mysweep_entries_links_list,
                                        O_ = _.grouped_entry_ids,
                                        N_ = _.grouped_entry_group_ids_array,
                                        D_ = _.grouped_entry_group_order_array,
                                        C_ = _.entry_group_id_current_active,
                                        J_ = _.user_entries_not_allowed_entry_lookup_not_required,
                                        L_ = _.user_completed_group_entry_lookup,
                                        P_ = _.entry_group_is_finished,
                                        $_ = _.all_entry_groups_finished,
                                        A_ = _.entered_list,
                                        M_ = _.entries_entry_amount_list,
                                        Q_ = _.entries_incorrect_answer_list,
                                        U_ = _.referral_url,
                                        R_ = _.if_user_disqualified,
                                        H_ = _.earned_rewards_display,
                                        V_ = _.is_verified,
                                        K_ = _.user_remaining_allowed_entries_amount;
                                    if ("" !== q && void 0 !== q && saveToken(q), w_ > 0) var Y_ = "margin-top:-5px;";
                                    else Y_ = "margin-top:10px;";
                                    if ("CA" == y) var G_ = 1;
                                    else G_ = 0;
                                    var B_ = "min-width: " + Dr + "px;padding:" + Cr + ";border:1px solid #" + Or + ";background-color:#" + Or + ";color:#" + Wr + ";border-radius:" + Jr + "px;font-family:'" + Sr + "', sans-serif;font-size:" + Nr + "px;text-decoration:none;",
                                        X_ = "margin-top:0px;min-width: " + Dr + "px;padding:" + Cr + ";border:1px solid #" + Or + ";background-color:#" + Or + ";color:#" + Wr + ";border-radius:" + Jr + "px;font-family:'" + Sr + "', sans-serif;font-size:" + Nr + "px;text-decoration:none;",
                                        Z_ = "margin-bottom:0px;min-width: " + Dr + "px;padding:" + Cr + ";border:1px solid #" + Or + ";background-color:#" + Or + ";color:#" + Wr + ";border-radius:" + Jr + "px;font-family:'" + Sr + "'; sans-seriffont-size:" + Nr + "px;text-decoration:none;",
                                        ei = "margin-top:0px;margin-bottom:0px;min-width: " + Dr + "px;padding:" + Cr + ";border:1px solid #" + Or + ";background-color:#" + Or + ";color:#" + Wr + ";border-radius:" + Jr + "px;font-family:'" + Sr + "', sans-serif;font-size:" + Nr + "px;text-decoration:none;",
                                        ti = "width:100%;margin-bottom:5px;padding:12px 0 12px 0;border:2px solid #" + Or + ";border-radius:" + Jr + "px;background-color:#" + Or + ";color:#" + Wr + ";font-family:'" + Sr + "', sans-serif;font-size:" + Nr + "px;text-decoration:none;";
                                    window.FB || 1 == $e && 0 == Ae && 0 == Ue && 0 == Re && 0 == He && 0 == Ve && 0 == Ke && 0 == Ye && 0 == Ge && 0 == Be && 0 == Xe && (Le = 0, Xr = "");
                                    var ri = {
                                            sw_f: d,
                                            sw_login_hash: r,
                                            website_url: website_url,
                                            website_host: website_host,
                                            full_url: X,
                                            full_url_clean: Z,
                                            force_cors: S,
                                            cors_jsonp: Q,
                                            widget_embedded: I,
                                            if_google_analytics: K,
                                            if_google_tag_manager: Y,
                                            google_analytics_id: j,
                                            script_entry_methods: D,
                                            script_login: C,
                                            script_insert: J,
                                            script_attempt: L,
                                            ajax_type: U,
                                            ajax_xhrFields: R,
                                            ajax_dataType: H,
                                            ajax_jsonp: V,
                                            show_stq_skill_question: G_,
                                            competition_id: c,
                                            competition_url: p,
                                            user_ip_address: g,
                                            ipv: m,
                                            user_country_code: y,
                                            parent_host_url: w,
                                            parent_url_full: f,
                                            widget_on_sweepwidget: G,
                                            referral_hash: b,
                                            email_pre_fill: v,
                                            name_pre_fill: k,
                                            auto_login_pre_fill: x,
                                            cookies_enabled: h,
                                            widget_reloaded: ee,
                                            user_login_id: z,
                                            widget_request_id: W,
                                            referral_param_string: O,
                                            plan: _t,
                                            if_custom_smtp: it,
                                            view_hash: T,
                                            if_allowed_entries_amount: ot,
                                            allowed_entries_amount: st,
                                            if_daisy_chained_entries: nt,
                                            trial_demo: at,
                                            trial_demo_accessed_timestamp: lt,
                                            trial_demo_expired: dt,
                                            container_ie8_style: oe,
                                            website_id: s,
                                            title: M,
                                            title_check: m_,
                                            if_leaderboard: n,
                                            leaderboard_title: a,
                                            leaderboard_description: u,
                                            leaderboard_display_amount: N,
                                            leaderboard_display: P,
                                            if_unlock_rewards: $,
                                            competition_unlock_rewards_count: A,
                                            entries_or_points: sr,
                                            entries_or_points_singular: dr,
                                            entries_or_points_plural: ur,
                                            entries_or_points_my: cr,
                                            entries_or_points_earn: pr,
                                            entries_or_points_all: gr,
                                            security_level: lr,
                                            require_verify_email: et,
                                            require_verify_sms: tt,
                                            description: re,
                                            description_check: y_,
                                            rules: se,
                                            start_time: ne,
                                            end_time: ae,
                                            start_time_display: le,
                                            end_time_display: de,
                                            end_date: ue,
                                            time_zone: ce,
                                            timezone_display: pe,
                                            remove_footer: ge,
                                            redirect_url: me,
                                            user_details_entries_worth: ye,
                                            number_of_winners: he,
                                            language: we,
                                            image_loc: fe,
                                            image_loc_prepend: "",
                                            image_ext: be,
                                            image_width_display: ve,
                                            image_display: ke,
                                            custom_image_width: xe,
                                            custom_image_height: je,
                                            youtube_feature: qe,
                                            image_or_video: Se,
                                            published_timestamp: Ie,
                                            updated_timestamp: Ee,
                                            age_limit: Te,
                                            age_limit_min_or_max: Fe,
                                            age_verification: ze,
                                            age_verification_format: We,
                                            countries_allowed: Oe,
                                            hide_all_entries: Ne,
                                            check_for_duplicate_ip: De,
                                            deleted: Ce,
                                            hide_entries_if_logged_out: Je,
                                            social_login_require: Le,
                                            social_login_options_count: Pe,
                                            facebook_login: $e,
                                            twitter_login: Ae,
                                            instagram_login: Me,
                                            pinterest_login: Qe,
                                            google_login: Ue,
                                            linkedin_login: Re,
                                            twitch_login: He,
                                            discord_login: Ve,
                                            steam_login: Ke,
                                            yahoo_login: Ye,
                                            tumblr_login: Ge,
                                            openid_login: Be,
                                            telegram_login: Xe,
                                            competition_unlock_rewards: Ze,
                                            translate: rt,
                                            user_country_allowed: wt,
                                            has_started: ft,
                                            days_until_begin: bt,
                                            days_left: vt,
                                            days_left_clock: kt,
                                            hours_left_clock: xt,
                                            minutes_left_clock: jt,
                                            seconds_left_clock: qt,
                                            is_expired: St,
                                            display_winners: It,
                                            hour_minutes_until_begin: Et,
                                            hour_minutes_until_end: Tt,
                                            begins_in_less_than_24_hours: Ft,
                                            ends_in_less_than_24_hours: zt,
                                            total_entries_count: Wt,
                                            total_entries_count_display: Ot,
                                            total_users_count: Nt,
                                            total_entries_for_credit: Dt,
                                            entry_methods_count: Ct,
                                            entry_methods_l1_count: Jt,
                                            entry_methods_l2_count: Lt,
                                            entry_methods_l2_required_count: Pt,
                                            entry_methods_l2_not_required_count: $t,
                                            entry_ids_all: At,
                                            entry_methods_l1_list: Mt,
                                            entry_methods_l2_list: Qt,
                                            entry_methods_all: Ut,
                                            has_required: Rt,
                                            entry_ids_daily_array: Ht,
                                            has_daily: Vt,
                                            has_daily_non_group: Kt,
                                            entry_ids_timer_array: Yt,
                                            has_timer: Gt,
                                            if_facebook: Bt,
                                            if_twitter: Xt,
                                            if_tiktok: Zt,
                                            if_pinterest: er,
                                            if_linkedin: tr,
                                            if_youtube_watch: rr,
                                            if_refer_friends: _r,
                                            title_font_color: mr,
                                            title_font_size: yr,
                                            body_font_color: hr,
                                            body_background_color: wr,
                                            body_description_background_color: fr,
                                            body_font_size: br,
                                            input_border_color: vr,
                                            input_border_width: kr,
                                            links_font_color: xr,
                                            unlock_font_color: jr,
                                            unlock_font_size: qr,
                                            form_font_family: Sr,
                                            top_numbers_font_color: Ir,
                                            top_numbers_font_size: Er,
                                            top_text_font_color: Tr,
                                            top_text_font_size: Fr,
                                            top_background_color: zr,
                                            buttons_font_color: Wr,
                                            buttons_background_color: Or,
                                            buttons_font_size: Nr,
                                            buttons_width: Dr,
                                            buttons_padding: Cr,
                                            buttons_border_radius: Jr,
                                            error_color: "ff0000",
                                            error_color_light: "ff6961",
                                            error_background: "ffe6e6",
                                            form_border_color: Lr,
                                            form_border_width: Pr,
                                            form_border_radius: $r,
                                            form_box_shadow: Ar,
                                            form_max_width: Mr,
                                            px_or_pct: g_,
                                            hide_title: Rr,
                                            hide_description: Hr,
                                            entry_methods_view: Vr,
                                            default_css: Qr,
                                            sw_text_1_margin: "margin-top:20px;",
                                            full_name_display: Gr,
                                            email_address_display: Br,
                                            login_with_display: Xr,
                                            date_of_birth_display: Zr,
                                            buttons_enter_text: Kr,
                                            default_checkmark: Yr,
                                            one_moment_display: "One Moment...",
                                            light_text: e_,
                                            bottom_border_color: Ur,
                                            sw_desc_bottom: t_,
                                            sw_image_2_css: r_,
                                            sw_image_3_css: __,
                                            sw_top_css: i_,
                                            sw_bottom_css: o_,
                                            default_color: s_,
                                            default_color_unlock: n_,
                                            light_text_entries_worth_1: a_,
                                            light_text_entries_worth_2: l_,
                                            bottom_color_1: d_,
                                            bottom_color_2: u_,
                                            attribution_font_color: c_,
                                            bottom_background_color: p_,
                                            unlock_top_margin: Y_,
                                            buttons_css: B_,
                                            buttons_css_margin_top: X_,
                                            buttons_css_margin_bottom: Z_,
                                            buttons_css_margin_top_bottom: ei,
                                            login_button_css: ti,
                                            browser_full: te,
                                            browser: _e,
                                            browser_version: ie,
                                            is_mobile: F,
                                            entry_level_array: i.entry_level_array,
                                            script_name: E,
                                            remove_sw_google_analytics: ut,
                                            twitter_follow_api_hits_remaining: ct,
                                            twitter_follow_input_category: pt,
                                            twitter_tweet_api_hits_remaining: gt,
                                            twitter_tweet_input_category: mt,
                                            twitter_retweet_api_hits_remaining: yt,
                                            twitter_retweet_input_category: ht
                                        },
                                        _i = {
                                            user_id: B,
                                            user_name: ir,
                                            user_email: or,
                                            user_birthday: nr,
                                            login_result: ar,
                                            user_entry_ids_array: h_,
                                            user_entry_amount: w_,
                                            pending_verification: f_,
                                            user_entries_array: b_,
                                            user_entered_entry_ids_methods_array: v_,
                                            user_daily_time_until_reentry: k_,
                                            user_l1_required_remaining_entries_count: x_,
                                            user_required_entry_methods_finished: j_,
                                            user_remaining_entry_ids_count: q_,
                                            user_remaining_required_entry_ids_count: S_,
                                            user_remaining_not_required_entry_ids_count: I_,
                                            user_l1_entry_methods_finished: E_,
                                            user_daily_re_entry_allowed: T_,
                                            user_daily_re_entry_allowed_count: F_,
                                            entry_methods_count_if_entered: z_,
                                            mysweep_entries_links_list: W_,
                                            grouped_entry_ids: O_,
                                            grouped_entry_group_ids_array: N_,
                                            grouped_entry_group_order_array: D_,
                                            entry_group_id_current_active: C_,
                                            user_entries_not_allowed_entry_lookup_not_required: J_,
                                            user_completed_group_entry_lookup: L_,
                                            entry_group_is_finished: P_,
                                            all_entry_groups_finished: $_,
                                            entered_list: A_,
                                            entries_entry_amount_list: M_,
                                            entries_incorrect_answer_list: Q_,
                                            referral_url: U_,
                                            if_user_disqualified: R_,
                                            earned_rewards_display: H_,
                                            is_verified: V_,
                                            user_remaining_allowed_entries_amount: K_
                                        };
                                    e("#update_personal_details_link").attr("href", ri.website_url + "/manage-account?u=" + _i.user_id + "&hash=" + ri.sw_login_hash), build_widget_body(ri, _i), o(ri, B, or), 0 == _i.is_verified && (e("#verify_email_not_verified_wrapper").hide(), e("#viral_giveaway_main_wrapper").hide(), e("#verify_email_wrapper").show()), e(document.body).on("click", "#enable_cookies", (function() {
                                        reload_page(ri)
                                    })), 1 == ri.user_country_allowed && (1 == Q && authService.init(update_view_l1), ri.plan > 1 && function(e, t, r) {
                                        for (var _ = e.entry_methods_l1_list || [], i = _.length, o = 0; o < i; o++) {
                                            var s = _[o],
                                                n = s.entry_id,
                                                a = s.entry_group_id,
                                                l = s.entry_group_order,
                                                d = parseInt(s.entry_level),
                                                u = parseInt(s.entry_method),
                                                c = s.entry_method_handle,
                                                p = s.entry_title,
                                                g = s.entry_link,
                                                m = s.entry_link_prepend,
                                                y = s.social_account_user_id,
                                                h = s.entry_textarea,
                                                w = parseInt(s.entry_amount),
                                                f = s.entry_amount_display,
                                                b = s.input_options_1,
                                                v = s.input_options_2,
                                                k = s.email_integration,
                                                x = s.input_header_value,
                                                j = s.link_button_text_value,
                                                q = s.verify_header_value,
                                                S = s.verify_button_text_value,
                                                I = s.entry_attachment,
                                                E = s.viral_share,
                                                T = s.tags,
                                                F = s.additional_instructions,
                                                z = parseInt(s.daily, 10),
                                                W = parseInt(s.timer, 10),
                                                O = parseInt(s.required, 10),
                                                N = parseInt(s.required_actions_until_unlock, 10),
                                                D = parseInt(s.if_viral_share_award_bonus_entries, 10),
                                                C = parseInt(s.viral_share_award_bonus_entries_amount, 10),
                                                J = parseInt(s.if_viral_share_max_allowed_referrals, 10),
                                                L = parseInt(s.viral_share_max_allowed_referrals_amount, 10),
                                                P = s.custom_icon,
                                                $ = parseInt(s.require_verification, 10),
                                                A = parseInt(s.social_optional_engagement, 10),
                                                M = s.widget_display,
                                                Q = s.icon_color;
                                            0 == e.cookies_enabled && (A = 0);
                                            var U = switch_entry_method_int_to_text(u),
                                                R = entry_method_fetch_values(U, "entry_method_handle", p, g, h, e.language, e.translate),
                                                H = entry_method_fetch_values(U, "entry_title", p, g, h, e.language, e.translate),
                                                V = entry_method_fetch_values(U, "entry_link", p, g, h, e.language, e.translate),
                                                K = entry_method_fetch_values(U, "entry_amount", p, g, h, e.language, e.translate),
                                                Y = entry_method_fetch_values(U, "entry_textarea", p, g, h, e.language, e.translate),
                                                G = entry_method_fetch_values(U, "additional_instructions", p, g, h, e.language, e.translate),
                                                B = entry_method_fetch_values(U, "daily", p, g, h, e.language, e.translate),
                                                X = entry_method_fetch_values(U, "timer", p, g, h, e.language, e.translate),
                                                Z = entry_method_fetch_values(U, "required", p, g, h, e.language, e.translate),
                                                ee = (entry_method_fetch_values(U, "custom_icon", p, g, h, e.language, e.translate), entry_method_fetch_values(U, "require_verification", p, g, h, e.language, e.translate)),
                                                te = entry_method_fetch_values(U, "social_optional_engagement", p, g, h, e.language, e.translate),
                                                re = entry_method_fetch_values(U, "input_type", p, g, h, e.language, e.translate),
                                                _e = entry_method_fetch_values(U, "email_integration", p, g, h, e.language, e.translate),
                                                ie = entry_method_fetch_values(U, "viral_share", p, g, h, e.language, e.translate),
                                                oe = entry_method_fetch_values(U, "viral_share_options", p, g, h, e.language, e.translate),
                                                se = (entry_method_fetch_values(U, "upload_a_file", p, g, h, e.language, e.translate), entry_method_fetch_values(U, "upload_a_file_ext", p, g, h, e.language, e.translate), entry_method_fetch_values(U, "input_category", p, g, h, e.language, e.translate)),
                                                ne = entry_method_fetch_values(U, "input_header", p, g, h, e.language, e.translate),
                                                ae = entry_method_fetch_values(U, "verify_header", p, g, h, e.language, e.translate),
                                                le = entry_method_fetch_values(U, "input_placeholder", p, g, h, e.language, e.translate),
                                                de = entry_method_fetch_values(U, "link_button_text", p, g, h, e.language, e.translate),
                                                ue = entry_method_fetch_values(U, "verify_button_text", p, g, h, e.language, e.translate),
                                                ce = entry_method_fetch_values(U, "entry_icon_path", p, g, h, e.language, e.translate),
                                                pe = entry_method_fetch_values(U, "font_awesome_icon", p, g, h, e.language, e.translate),
                                                ge = entry_method_fetch_values(U, "color", p, g, h, e.language, e.translate),
                                                me = entry_method_fetch_values(U, "background_color", p, g, h, e.language, e.translate),
                                                ye = switch_entry_method_text_to_int(U);
                                            switch_entry_method_int_to_provider(ye), de = capitalizeFirstLetter(de), ne = capitalizeFirstLetter(ne), ae = capitalizeFirstLetter(ae), ue = capitalizeFirstLetter(ue), 1 == ee && 0 == $ && (ae = "", le = "", ue = ""), "" !== x && (ne = x), "" !== j && (de = j), "" !== q && (ae = q), "" !== S && (ue = S);
                                            var he = {
                                                if_entered_db: 0,
                                                if_daily_re_entry_allowed: 0,
                                                fetch_entry: s,
                                                entry_id: n,
                                                entry_has_group: 0,
                                                entry_group_id: a,
                                                entry_group_order: l,
                                                daily_re_entry_allowed: 0,
                                                entry_level_db: d,
                                                entry_method_int: u,
                                                entry_method_handle_db: c,
                                                entry_title_db: p,
                                                entry_link_db: g,
                                                social_account_user_id_db: y,
                                                entry_link_prepend_db: m,
                                                entry_textarea_db: h,
                                                amount_db: w,
                                                amount_display_db: f,
                                                input_options_1_db: b,
                                                input_options_2_db: v,
                                                email_integration_db: k,
                                                entry_attachment_db: I,
                                                upload_a_file_ext_db: T,
                                                viral_share_db: E,
                                                additional_instructions_db: F,
                                                daily_db: z,
                                                timer_db: W,
                                                required_db: O,
                                                required_actions_until_unlock_db: N,
                                                if_viral_share_award_bonus_entries_db: D,
                                                viral_share_award_bonus_entries_amount_db: C,
                                                if_viral_share_max_allowed_referrals_db: J,
                                                viral_share_max_allowed_referrals_amount_db: L,
                                                custom_icon_db: P,
                                                require_verification_db: $,
                                                social_optional_engagement_db: A,
                                                entry_method_text: U,
                                                entry_method_handle: R,
                                                entry_title: H,
                                                entry_link: V,
                                                entry_amount: K,
                                                entry_textarea: Y,
                                                additional_instructions: G,
                                                daily: B,
                                                timer: X,
                                                required: Z,
                                                require_verification: ee,
                                                social_optional_engagement: te,
                                                input_type: re,
                                                email_integration: _e,
                                                viral_share: ie,
                                                viral_share_options: oe,
                                                input_category: se,
                                                input_header: ne,
                                                verify_header: ae,
                                                input_placeholder: le,
                                                link_button_text: de,
                                                verify_button_text: ue,
                                                entry_icon_path: ce,
                                                font_awesome_icon: pe,
                                                color: ge,
                                                background_color: me,
                                                widget_display: M,
                                                icon_color_db: Q
                                            };
                                            1 == e.user_country_allowed && 1 == d && write_entry_methods(e, t, he, r)
                                        }
                                    }(ri, _i, 0), 1 == ri.cors_jsonp && social_login_events_bindings(ri), l(ri, _i, 0), 1 == _i.if_user_disqualified ? (show_spam_message(ri, 9), ga_gtag(ri, "SweepWidget enter giveaway", "Enter giveaway", "Restricted entry - user is disqualified")) : (e(document.body).on("click", "#sw_login_button, .sw_entry", (function() {
                                        var t = e(this).attr("class");
                                        e("input[name=sw_login_errors_holder]").val(""), e("#sw_select_1").val(), e("#sw_login_error_holder").html("");
                                        var r = e("input[name=sw__login_name]").val(),
                                            _ = e("input[name=sw__login_email]").val();
                                        if (1 == ri.require_verify_sms) var i = si.getNumber(intlTelInputUtils.numberFormat.E164);
                                        else i = "";
                                        var s = "";
                                        if (r ? (e("#sw_input_header_name").css("color", "#" + ri.body_font_color).css("font-weight", "normal"), e("input[name=sw__login_name]").css("background-color", "#fff").css("border", ri.input_border_width + "px solid #" + ri.input_border_color), e("input[name=sw_login_errors_holder]").val(e("input[name=sw_login_errors_holder]").val() + "0,")) : (e("#sw_input_header_name").css("color", "#" + ri.error_color).css("font-weight", "bold"), e("input[name=sw__login_name]").css("background-color", "#" + ri.error_background).css("border", ri.input_border_width + "px solid #" + ri.error_background), e("input[name=sw_login_errors_holder]").val(e("input[name=sw_login_errors_holder]").val() + "1,")), _ && is_valid_email_address(_) ? (e("#sw_input_header_email").css("color", "#" + ri.body_font_color).css("font-weight", "normal"), e("input[name=sw__login_email]").css("background-color", "#fff").css("border", ri.input_border_width + "px solid #" + ri.input_border_color), e("input[name=sw_login_errors_holder]").val(e("input[name=sw_login_errors_holder]").val() + "0,")) : (e("#sw_input_header_email").css("color", "#" + ri.error_color).css("font-weight", "bold"), e("input[name=sw__login_email]").css("background-color", "#" + ri.error_background).css("border", ri.input_border_width + "px solid #" + ri.error_background), e("input[name=sw_login_errors_holder]").val(e("input[name=sw_login_errors_holder]").val() + "1,")), 1 == ri.require_verify_sms && (i ? (e("#sw_input_header_sms").css("color", "#" + ri.body_font_color).css("font-weight", "normal"), e("input[name=sw__login_phone_number]").css("background-color", "#fff").css("border", ri.input_border_width + "px solid #" + ri.input_border_color), e("input[name=sw_login_errors_holder]").val(e("input[name=sw_login_errors_holder]").val() + "0,")) : (e("#sw_input_header_sms").css("color", "#" + ri.error_color).css("font-weight", "bold"), e("input[name=sw__login_phone_number]").css("background-color", "#" + ri.error_background).css("border", ri.input_border_width + "px solid #" + ri.error_background), e("input[name=sw_login_errors_holder]").val(e("input[name=sw_login_errors_holder]").val() + "1,"))), 1 == G_ || "CA" == ri.user_country_code && 0 == _i.user_entry_amount) {
                                            var n = e("#stq_skill_question").html(),
                                                a = (n = (n = (n = (n = (n = (n = (n = n.trim()).replace(ri.translate.answer_this_question, "")).replace(/<\/?[^>]+(>|$)/g, "")).replace(":", "")).replace("?", "")).replace("*", "")).trim()).split(" "); + a[0] + +a[2] == e("#stq_skill_question_answer").val() ? (e("#stq_skill_question").css("color", "#" + ri.body_font_color).css("font-weight", "normal"), e("#stq_skill_question_answer").css("background-color", "#fff").css("border", ri.input_border_width + "px solid #" + ri.input_border_color), e("input[name=sw_login_errors_holder]").val(e("input[name=sw_login_errors_holder]").val() + "0,")) : (e("#stq_skill_question").css("color", "#" + ri.error_color).css("font-weight", "bold"), e("#stq_skill_question_answer").css("background-color", "#" + ri.error_background).css("border", ri.input_border_width + "px solid #" + ri.error_background), e("input[name=sw_login_errors_holder]").val(e("input[name=sw_login_errors_holder]").val() + "1,"))
                                        }
                                        if (1 == ri.age_verification) {
                                            var d = e("#sw_input_birthday_month").val(),
                                                u = e("#sw_input_birthday_day").val(),
                                                c = e("#sw_input_birthday_year").val();
                                            if ("" !== d && "" !== u && "" !== c) {
                                                s = d + "-" + u + "-" + c;
                                                var p = new Date,
                                                    g = new Date(s),
                                                    m = p.getFullYear() - g.getFullYear(),
                                                    y = p.getMonth() - g.getMonth();
                                                (y < 0 || 0 === y && p.getDate() < g.getDate()) && m--;
                                                var h = m
                                            } else s = "", h = 0;
                                            var w = 1,
                                                f = "";
                                            1 == ri.age_limit_min_or_max ? h < Te && (w = 0, f = ri.translate.minimum_required_age + ": " + Te + ".") : 2 == ri.age_limit_min_or_max && h > Te && (w = 0, f = ri.translate.maximum_allowed_age + ": " + Te + "."), "" == d || "" == u || "" == c || 0 == w ? (e("#sw_input_birthday_header").css("color", "#" + ri.error_color).css("font-weight", "bold"), e("input[name=sw_login_errors_holder]").val(e("input[name=sw_login_errors_holder]").val() + "1,")) : (e("#sw_input_birthday_header").css("color", "#" + ri.body_font_color).css("font-weight", "normal"), e("input[name=sw_login_errors_holder]").val(e("input[name=sw_login_errors_holder]").val() + "0,")), "" == d || 0 == w ? e("#sw_input_birthday_month").css("background-color", "#" + ri.error_background).css("border", ri.input_border_width + "px solid #" + ri.error_background) : e("#sw_input_birthday_month").css("background-color", "#fff").css("border", ri.input_border_width + "px solid #" + ri.input_border_color), "" == u || 0 == w ? e("#sw_input_birthday_day").css("background-color", "#" + ri.error_background).css("border", ri.input_border_width + "px solid #" + ri.error_background) : e("#sw_input_birthday_day").css("background-color", "#fff").css("border", ri.input_border_width + "px solid #" + ri.input_border_color), "" == c || 0 == w ? e("#sw_input_birthday_year").css("background-color", "#" + ri.error_background).css("border", ri.input_border_width + "px solid #" + ri.error_background) : e("#sw_input_birthday_year").css("background-color", "#fff").css("border", ri.input_border_width + "px solid #" + ri.input_border_color), 0 == w && h > 0 && alert(f)
                                        }
                                        var b = "";
                                        "" !== (b = e("#sw_entry_methods_l1_required").val()) && void 0 !== b && (b = b.replace(/^,|,$/g, "")), e("#sw_entry_methods_l1_required").val(b);
                                        var v = e("#sw_entry_methods_l1_all").val();
                                        if ("" !== v && void 0 !== v && (v = v.replace(/^,|,$/g, "")), e("#sw_entry_methods_l1_all").val(v), l1_custom_fields_error_check_values(ri, b), "sw_entry sw_entry_h" !== t) {
                                            if (e("#sw_login_button, input[name=sw_login]").html('<i class="fas fa-circle-notch fa-spin"></i>').css("cursor", "progress").css("opacity", "0.5").prop("disabled", !0), ! function(t) {
                                                    var r = e("input[name=sw_login_errors_holder]").val().split(",");
                                                    e("input[name=sw_login_errors_if_pass]").val("pass"), r.forEach((function(t) {
                                                        "1" == t && e("input[name=sw_login_errors_if_pass]").val("fail")
                                                    }));
                                                    var _ = e("input[name=sw_login_errors_if_pass]").val();
                                                    return "fail" == _ && (e("#login_button_holder").show(), e("#sw_login_button, input[name=sw_login]").html(t.buttons_enter_text).css("cursor", "pointer").css("opacity", "1").prop("disabled", !1)), "fail" !== _
                                                }(ri)) return void e("#sw_login_button, input[name=sw_login]").html(Kr).css("cursor", "pointer").css("opacity", "1").prop("disabled", !1);
                                            l1_custom_fields_values(ri),
                                                function(t, r, _, i, s, n) {
                                                    var a = l1_custom_fields_values(t);
                                                    setTimeout((function() {}), 2e3), e.ajax({
                                                        url: t.script_login,
                                                        data: {
                                                            cors_jsonp: t.cors_jsonp,
                                                            login_type: 2,
                                                            login_hash: t.sw_login_hash,
                                                            referral_hash: t.referral_hash,
                                                            user_login_id: t.user_login_id,
                                                            competition_id: t.competition_id,
                                                            competition_url: t.competition_url,
                                                            embedded_giveaway_link: t.full_url_clean,
                                                            sw__login_name: _,
                                                            sw__login_email: i,
                                                            sw__login_phone_number: s,
                                                            sw__login_phone_number_country: "",
                                                            birthday_full: n,
                                                            user_ip_address: t.user_ip_address,
                                                            ipv: t.ipv,
                                                            user_country_code: t.user_country_code,
                                                            widget_request_id: t.widget_request_id,
                                                            referral_param_string: t.referral_param_string,
                                                            check_for_duplicate_ip: t.check_for_duplicate_ip,
                                                            browser: t.browser_full,
                                                            entry_methods_l1_values: a,
                                                            parent_host_url: t.parent_host_url,
                                                            parent_url_full: t.parent_url_full,
                                                            language: t.language,
                                                            trial_demo: t.trial_demo,
                                                            time_zone: t.time_zone,
                                                            title_check: t.title_check,
                                                            description_check: t.description_check,
                                                            script_name: t.script_name
                                                        },
                                                        type: t.ajax_type,
                                                        xhrFields: t.ajax_xhrFields,
                                                        dataType: t.ajax_dataType,
                                                        jsonp: t.ajax_jsonp,
                                                        success: function(r) {
                                                            if (1 == t.cors_jsonp) var _ = jQuery.parseJSON(r);
                                                            else 2 == t.cors_jsonp && (_ = r);
                                                            var s = _.success,
                                                                n = _.related_emails;
                                                            t.related_emails = n;
                                                            try {
                                                                if (2 == s) alert(t.entries_or_points_plural_are_not_allowed + "."), e("#sw_login_button, input[name=sw_login]").html(t.buttons_enter_text).css("cursor", "pointer").css("opacity", "1").prop("disabled", !1);
                                                                else if (3 == s) show_spam_message(t, 3), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: spam detected on login");
                                                                else if (31 == s) show_spam_message(t, 31), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: spam detected on login 1");
                                                                else if (32 == s) show_spam_message(t, 32), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: spam detected on login 2");
                                                                else if (33 == s) show_spam_message(t, 33), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: spam detected on login 3");
                                                                else if (34 == s) show_spam_message(t, 34), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: spam detected on login 4");
                                                                else if (35 == s) show_spam_message(t, 35), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: spam detected on login 5");
                                                                else if (36 == s) show_spam_message(t, 36), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: spam detected on login 6");
                                                                else if (39 == s) show_spam_message(t, 39), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: spam detected on login IP check error");
                                                                else if (40 == s || 41 == s || 42 == s || 43 == s || 44 == s) show_spam_message(t, s), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: spam detected on login " + s);
                                                                else if (51 == s) show_spam_message(t, 51), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: blacklisted email " + s);
                                                                else if (55 == s) show_spam_message(t, 55), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: bad phone number " + s);
                                                                else if (56 == s) show_spam_message(t, 56), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: age disqualification too young " + s);
                                                                else if (57 == s) show_spam_message(t, 57), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: age disqualification too old " + s);
                                                                else if (81 == s) show_spam_message(t, 81), ga_gtag(t, "SweepWidget login error", "Insert entry", "Insert entry error: VPN detected");
                                                                else if (101 == s) show_spam_message(t, 101), ga_gtag(t, "SweepWidget login error", "Insert entry", "Insert entry error: Duplicate IP");
                                                                else if (102 == s) show_spam_message(t, 102), ga_gtag(t, "SweepWidget duplicate wallet address", "Duplicate crypto wallet address", "User tried entering with a duplicate crypto wallet");
                                                                else if (103 == s) show_spam_message(t, 103), ga_gtag(t, "SweepWidget duplicate wallet address", "Duplicate crypto wallet address", "User tried entering with a duplicate crypto wallet");
                                                                else if (11 == s) show_spam_message(t, 1), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: duplicate IP address"), e("#sw_login_button, input[name=sw_login]").html(t.buttons_enter_text).css("cursor", "pointer").css("opacity", "1").prop("disabled", !1);
                                                                else if (5 == s) show_spam_message(t, 3), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: referral link came from a disqualified user"), e("#sw_login_button, input[name=sw_login]").html(t.buttons_enter_text).css("cursor", "pointer").css("opacity", "1").prop("disabled", !1);
                                                                else if (6 == s) show_spam_message(t, 4), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: email not allowed due to whitelisting"), e("#sw_login_button, input[name=sw_login]").html(t.buttons_enter_text).css("cursor", "pointer").css("opacity", "1").prop("disabled", !1);
                                                                else if (8 == s) alert("Sorry, there's no record of you paying an entry fee with the email."), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: user falsely claimed they paid"), e("#sw_login_button, input[name=sw_login]").html(t.buttons_enter_text).css("cursor", "pointer").css("opacity", "1").prop("disabled", !1);
                                                                else if (9 == s) show_spam_message(t, 3), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: user ran out of allowed remaining entries/attempts.");
                                                                else if (10 == s) {
                                                                    e("#sw_login_button, input[name=sw_login]").html(t.buttons_enter_text).css("cursor", "pointer").css("opacity", "1").prop("disabled", !1);
                                                                    var a = _.l1_errors;
                                                                    e.each(a.entry_id, (function(r, _) {
                                                                        var i = a.entry_id[r].entry_method_text,
                                                                            o = a.entry_id[r].entry_group_id,
                                                                            s = (a.entry_id[r].required, i + "_" + r + "_" + o);
                                                                        e("#sw_" + s + "_header").css("color", "#" + t.error_color).css("font-weight", "bold"), e("#sw_" + s).css("background", "#" + t.error_background).css("border", t.input_border_width + "px solid #" + t.error_background), e("input[name=sw_login_errors_holder]").val(e("input[name=sw_login_errors_holder]").val() + "1,")
                                                                    })), e.each(l1_correct.entry_id, (function(r, _) {
                                                                        var i = l1_correct.entry_id[r].entry_method_text,
                                                                            o = l1_correct.entry_id[r].entry_group_id,
                                                                            s = (l1_correct.entry_id[r].required, i + "_" + r + "_" + o);
                                                                        e("#sw_" + s + "_header").css("color", "#" + t.body_font_color).css("font-weight", "normal"), e("#sw_" + s).css("background", "#fff").css("border", t.input_border_width + "px solid #" + t.input_border_color), e("input[name=sw_login_errors_holder]").val(e("input[name=sw_login_errors_holder]").val() + "0,")
                                                                    }))
                                                                } else if (13 == s) show_spam_message(t, 999);
                                                                else if (14 == s) show_spam_message(t, 11);
                                                                else if (3 == s || 15 == s || 31 == s || 32 == s || 33 == s || 34 == s || 35 == s || 36 == s || 37 == s || 61 == s || 62 == s || 63 == s || 64 == s || 65 == s || 66 == s || 67 == s || 68 == s || 69 == s || 70 == s || 71 == s || 72 == s || 73 == s || 74 == s || 75 == s || 76 == s || 77 == s || 78 == s || 79 == s || 80 == s) show_spam_message(t, s);
                                                                else if (20 == s) show_spam_message(t, 20);
                                                                else if (25 == s) show_spam_message(t, 25);
                                                                else if (23 == s) t.sw__login_email = i, show_spam_message(t, 23);
                                                                else if (24 == s) show_spam_message(t, 24);
                                                                else if (1 == s) {
                                                                    var d = _.user_id,
                                                                        u = _.login_hash_payload,
                                                                        c = _.name,
                                                                        p = _.email,
                                                                        g = _.birthday,
                                                                        m = (_.duplicate_entry_email, _.login_result),
                                                                        y = (_.total_entries_count, _.total_entries_count_display),
                                                                        h = (_.total_users_count, _.user_entry_ids_array),
                                                                        w = _.user_entry_amount,
                                                                        f = _.pending_verification,
                                                                        b = _.user_entries_array,
                                                                        v = _.user_entered_entry_ids_methods_array,
                                                                        k = _.user_daily_time_until_reentry,
                                                                        x = _.user_required_entry_methods_finished,
                                                                        j = _.user_remaining_entry_ids_count,
                                                                        q = _.user_remaining_required_entry_ids_count,
                                                                        S = _.user_remaining_not_required_entry_ids_count,
                                                                        I = _.user_l1_entry_methods_finished,
                                                                        E = _.user_l1_required_remaining_entries_count,
                                                                        T = _.user_daily_re_entry_allowed,
                                                                        F = _.user_daily_re_entry_allowed_count,
                                                                        z = (_.entry_methods_count, _.entry_methods_count_if_entered),
                                                                        W = _.mysweep_entries_links_list,
                                                                        O = (b || []).join(""),
                                                                        N = _.grouped_entry_ids,
                                                                        D = _.grouped_entry_group_ids_array,
                                                                        C = _.grouped_entry_group_order_array,
                                                                        J = _.user_entries_not_allowed_entry_lookup_not_required,
                                                                        L = _.entry_group_id_current_active,
                                                                        P = _.user_completed_group_entry_lookup,
                                                                        $ = _.entry_group_is_finished,
                                                                        A = _.all_entry_groups_finished,
                                                                        M = _.entered_list,
                                                                        Q = _.entries_entry_amount_list,
                                                                        U = _.entries_incorrect_answer_list,
                                                                        R = _.referral_url,
                                                                        H = _.if_user_disqualified,
                                                                        V = _.earned_rewards_display,
                                                                        K = _.is_verified,
                                                                        Y = _.user_remaining_allowed_entries_amount;
                                                                    V = _.earned_rewards_display, o(t, d, p), saveToken(u), t.sw_login_hash = u;
                                                                    var G = {
                                                                        user_id: d,
                                                                        user_name: c,
                                                                        user_email: p,
                                                                        user_birthday: g,
                                                                        login_result: m,
                                                                        user_entry_ids_array: h,
                                                                        user_entry_amount: w,
                                                                        pending_verification: f,
                                                                        user_entries_array: b,
                                                                        user_entered_entry_ids_methods_array: v,
                                                                        user_daily_time_until_reentry: k,
                                                                        user_l1_required_remaining_entries_count: E,
                                                                        user_required_entry_methods_finished: x,
                                                                        user_remaining_entry_ids_count: j,
                                                                        user_remaining_required_entry_ids_count: q,
                                                                        user_remaining_not_required_entry_ids_count: S,
                                                                        user_l1_entry_methods_finished: I,
                                                                        user_daily_re_entry_allowed: T,
                                                                        user_daily_re_entry_allowed_count: F,
                                                                        entry_methods_count_if_entered: z,
                                                                        mysweep_entries_links_list: W,
                                                                        grouped_entry_ids: N,
                                                                        grouped_entry_group_ids_array: D,
                                                                        grouped_entry_group_order_array: C,
                                                                        entry_group_id_current_active: L,
                                                                        user_entries_not_allowed_entry_lookup_not_required: J,
                                                                        user_completed_group_entry_lookup: P,
                                                                        entry_group_is_finished: $,
                                                                        all_entry_groups_finished: A,
                                                                        entered_list: M,
                                                                        entries_entry_amount_list: Q,
                                                                        entries_incorrect_answer_list: U,
                                                                        referral_url: R,
                                                                        if_user_disqualified: H,
                                                                        earned_rewards_display: V,
                                                                        is_verified: K,
                                                                        user_remaining_allowed_entries_amount: Y,
                                                                        earned_rewards_display: V
                                                                    };
                                                                    if (1 == G.if_user_disqualified) show_spam_message(t, 9), ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway error: user has been disqualified");
                                                                    else if (ga_gtag(t, "SweepWidget enter giveaway", "Enter giveaway", "Enter giveaway success"), e("#sw_login_button, input[name=sw_login]").html(t.buttons_enter_text).css("cursor", "pointer").css("opacity", "1").prop("disabled", !1), user_account_details(t, G.user_name, G.user_email, G.user_birthday), 0 != m) {
                                                                        1 == t.if_leaderboard && (e("#tabs_wrapper").show().css("margin-bottom", "0px"), e("#show_user_entries").css("margin-top", "30px").css("margin-bottom", "15px"), e("#leaderboard_wrapper").css("margin-top", "0px").css("margin-bottom", "15px"), e("#leaderboard_wrapper p").css("margin-top", "0px").css("margin-bottom", "15px")), e("#sw_total_entries_count_all").html(y), e("#sw_logout_link_holder_shell").html('<div id="sw_logout_link_holder"><span style="color:#' + t.light_text + ';" id="sw_user_account_link"><i class="fas fa-user"></i></span>&nbsp;&nbsp;<span style="color:#' + t.light_text + ';" onclick="window.location.reload()"><i class="fas fa-sync-alt"></i></span>&nbsp;&nbsp;<span style="color:#' + t.light_text + ';" id="sw_logout_link"><i class="fas fa-power-off"></i></span></div>'), 1 == t.remove_footer && e("#sw_logout_link_holder").css("padding-bottom", "10px"), update_user_remaining_entries_display(t.if_allowed_entries_amount, G.user_remaining_allowed_entries_amount, G.user_entry_amount);
                                                                        var B = 1 == G.user_entry_amount ? t.entries_or_points_singular : t.entries_or_points_plural,
                                                                            X = my_entries_display_func(t, t.language, t.translate, G.user_entry_amount, B, G.user_name, t.default_color);
                                                                        if (e("#sw_entry_method_result_text").show().html(X), e("#show_user_entries").html(O), 1 == t.if_unlock_rewards) {
                                                                            var Z = unlock_rewards_display_func(t, G),
                                                                                ee = earned_rewards_dropdown_func(t, G);
                                                                            e("#verify_email_not_verified_wrapper").prepend(Z + ee)
                                                                        }
                                                                        if (t.require_verify_email || t.require_verify_sms) {
                                                                            var te = verify_email_display_func(t, G);
                                                                            e(".sw_inner_entry_methods").prepend(te)
                                                                        }
                                                                        if (e(document.body).on("click", "#sw_logout_link", (function() {
                                                                                user_logout_click(t, G.user_id)
                                                                            })), G.user_entry_amount > 0) {
                                                                            if ("en" == t.language) var re = G.user_remaining_entry_ids_count > 1 ? t.translate.ways : t.translate.way,
                                                                                _e = '<span style="font-weight:bold; color:#' + t.default_color_unlock + '"> ' + G.user_remaining_entry_ids_count + "</span> more " + re.toLowerCase() + " to enter.";
                                                                            else _e = " " + t.translate.more_ways_to_enter + ': <span style="font-weight:bold; color:#' + t.default_color_unlock + '">' + G.user_remaining_entry_ids_count + "</span>";
                                                                            e("#sw_entry_amount_allowed_text_inner").html(_e).show(), e(".sw_hidden").show()
                                                                        } else e("#sw_non_required_entry_methods_count").html(G.user_remaining_not_required_entry_ids_count);
                                                                        "" !== G.user_id && 1 == t.has_started && t.days_left > 0 && G.user_entry_amount > 0 && l(t, G, 1), 0 == G.is_verified && (e("#verify_email_not_verified_wrapper").hide(), e("#viral_giveaway_main_wrapper").hide(), e("#verify_email_wrapper").show()), 1 == t.if_unlock_rewards && "" !== G.earned_rewards_display && e("#view_earned_rewards_results_wrapper").html(G.earned_rewards_display).slideDown(200), e("#update_personal_details_link").attr("href", t.website_url + "/manage-account?u=" + G.user_id + "&hash=" + t.sw_login_hash)
                                                                    } else alert("Sorry! There was an error logging you in.")
                                                                }
                                                            } catch (e) {}
                                                        }
                                                    })
                                                }(ri, 0, r, _, i, s)
                                        }
                                    })), e("input").keydown((function(t) {
                                        if (13 == t.keyCode && "" == B) return e("#sw_login_button, input[name=sw_login]").trigger("click"), t.preventDefault(), !1
                                    }))), e(document.body).on("keydown keyup paste", ".sw_textarea, .sw_textarea_2", (function() {
                                        var e = this;
                                        setTimeout((function() {
                                            e.style.cssText = "height:auto;", e.style.cssText = "height:" + e.scrollHeight + "px"
                                        }), 0)
                                    })));
                                    var ii = 86400 * parseInt(ri.days_left_clock) + 3600 * parseInt(ri.hours_left_clock) + 60 * parseInt(ri.minutes_left_clock) + parseInt(ri.seconds_left_clock),
                                        oi = new Date;
                                    if (oi.setSeconds(oi.getSeconds() + ii), ii > 0 ? initializeClock("clockdiv", oi) : (e(".days").html("0"), e(".hours").html("00"), e(".minutes").html("00"), e(".seconds").html("00")), 0 == ri.days_left_clock && ri.days_left >= 0 && (e(".clockdiv_top_row").css("color", "#ccc"), e(".clockdiv_bottom_row").css("color", "#" + ri.error_color).css("font-weight", "bold")), 1 == ri.begins_in_less_than_24_hours && (e(".clockdiv_top_row").css("color", "#ccc"), e(".clockdiv_bottom_row").css("color", "#" + ri.default_color).css("font-weight", "bold")), 0 == _i.user_entry_amount ? (e(".sw_login").show(), e(".sw_inner_entry_methods").hide(), e("#sw_logout_link_holder").hide()) : (e(".sw_login").hide(), e("#sw_logout_link_holder").show()), e(document.body).on("click", "#sw_contest_rules_link", (function() {
                                            var t = e("#sw_contest_rules_link_2");
                                            e("#sw_contest_rules_holder").slideToggle(1, (function() {
                                                e(this).is(":visible") ? t.html(ri.translate.hide) : t.html(ri.translate.show)
                                            }))
                                        })), e(document.body).on("click", "#sw_user_account_link", (function() {
                                            e("#sw_user_account_holder").slideToggle("fast", (function() {}))
                                        })), e(".sw_inner_entry_methods").show(), 0 == w_ && e(".sw_entry_h_1").on("click", (function() {
                                            var t = e(this).attr("data-toggle");
                                            t >= 4 && e(this).parent().parent().effect("shake", {
                                                direction: "side",
                                                times: 4,
                                                distance: 10
                                            }, 700)
                                        })), (1 == ri.deleted || 0 == ri.has_started || ri.days_left < 0) && e("#sw_entry_amount_allowed_text").hide(), 0 != ri.entry_methods_l2_required_count && void 0 !== ri.entry_methods_l2_required_count || 0 != _i.user_entry_amount || e("#sw_entry_amount_allowed_text").hide(), 1 == ri.hide_title && (e("#widget_title").hide(), e("#widget_description, #widget_description_inner, #image_description_wrapper").css("margin-top", "0px")), 1 == ri.deleted && (e("#sw_my_entries").html("0"), e("#sw_total_entries_count_all").html("0"), e(".clockdiv_top_row").html('<span class="days" style="color:#' + ri.top_numbers_font_color + "; font-size:" + ri.top_numbers_font_size + '; font-weight:bold;">0</span>'), e(".clockdiv_bottom_row").html("00 : 00 : 00"), e("#number_of_winners").html("0"), e("#end_date").html("00-00-0000"), e("#sw_contest_rules_holder").html("")), "" !== _i.user_email && e("#sw_logout_link_holder").show(), e("#enable_cookies_popup").on("click", (function() {
                                            reload_page(ri)
                                        })), 1 == ri.social_login_require && 0 == _i.user_id && ri.social_login_options_count >= 1 && e("#sw_login_fields").hide(), e(document.body).on("click", ".sw_share_link, .sw_share_link_inline, .sw_copy_clipboard", (function(t) {
                                            var r = e(this).attr("id");
                                            if (-1 != e(this).attr("class").indexOf("sw_share_link_inline")) {
                                                var _ = e(this).attr("data-rand_id");
                                                e("#copy_paste_input_" + _).select(), e("#copy_paste_input_" + _).val().trim(), e("#copy_paste_link_" + _).html(ri.default_checkmark), copy_to_clipboard("copy_paste_input_" + _), setTimeout((function() {
                                                    e("#copy_paste_link_" + _).html('<i class="far fa-copy"></i>')
                                                }), 2e3)
                                            } else {
                                                var i = (i = r.replace("sw_copy_clipboard_", "")).replace("sw_share_link_input_", "");
                                                e("#sw_share_link_input_" + i).select(), e("#sw_copy_clipboard_" + i).attr("data-copy_link_text"), e("#sw_share_link_input_" + i).val().trim(), e("#sw_copy_clipboard_" + i).html(ri.default_checkmark), copy_to_clipboard("sw_share_link_input_" + i), setTimeout((function() {
                                                    e("#sw_copy_clipboard_" + i).html('<i class="far fa-copy"></i>')
                                                }), 2e3)
                                            }
                                        })), e(document.body).on("click", "#tabs_entry_methods, #tabs_show_hide_users, #tabs_leaderboard", (function() {
                                            var t = e(this).attr("id");
                                            "tabs_entry_methods" == t ? (e("#sw_inner_entry_methods_l2_wrapper").is(":visible") || e("#sw_inner_entry_methods_l2_wrapper").toggle(1, (function() {})), e("#show_user_entries").hide(), e("#leaderboard_wrapper").hide(), e("#tabs_entry_methods").css("border-bottom", "3px solid #" + ri.links_font_color), e("#tabs_show_hide_users").css("border-bottom", "3px solid #" + ri.form_border_color), e("#tabs_leaderboard").css("border-bottom", "3px solid #" + ri.form_border_color)) : "tabs_show_hide_users" == t ? (e("#show_user_entries").is(":visible") || e("#show_user_entries").toggle(1, (function() {})), e("#sw_inner_entry_methods_l2_wrapper").hide(), e("#leaderboard_wrapper").hide(), e("#tabs_entry_methods").css("border-bottom", "3px solid #" + ri.form_border_color), e("#tabs_show_hide_users").css("border-bottom", "3px solid #" + ri.links_font_color), e("#tabs_leaderboard").css("border-bottom", "3px solid #" + ri.form_border_color)) : "tabs_leaderboard" == t && (e("#leaderboard_wrapper").is(":visible") || e("#leaderboard_wrapper").toggle(1, (function() {})), e("#sw_inner_entry_methods_l2_wrapper").hide(), e("#show_user_entries").hide(), e("#tabs_entry_methods").css("border-bottom", "3px solid #" + ri.form_border_color), e("#tabs_show_hide_users").css("border-bottom", "3px solid #" + ri.form_border_color), e("#tabs_leaderboard").css("border-bottom", "3px solid #" + ri.links_font_color))
                                        })), e("#sw_user_delete_account_toggle").click((function() {
                                            e("#sw_user_delete_account_hidden_wrapper").toggle()
                                        })), e("#tabs_entry_methods").css("border-bottom", "3px solid #" + ri.links_font_color), e("#tabs_show_hide_users").css("border-bottom", "3px solid #" + ri.form_border_color), e("#tabs_leaderboard").css("border-bottom", "3px solid #" + ri.form_border_color), e("#facebook_login_button").css("background", "#3b5998").css("color", "#fff"), e("#twitter_login_button").css("background", "#55acee").css("color", "#fff"), e("#pinterest_login_button").css("background", "#bd081c").css("color", "#fff"), e("#google_login_button").css("background", "#4285F4").css("color", "#fff"), e("#linkedin_login_button").css("background", "#0077b5").css("color", "#fff"), e("#twitch_login_button").css("background", "#9146ff").css("color", "#fff"), e("#discord_login_button").css("background", "#9146ff").css("color", "#fff"), e("#steam_login_button").css("background", "#000000").css("color", "#fff"), e("#yahoo_login_button").css("background", "#410093").css("color", "#fff"), e("#tumblr_login_button").css("background", "#35465c").css("color", "#fff"), e("#openid_login_button").css("background", "##FFC300").css("color", "#fff"), e("#telegram_login_button").css("background", "##0088cc").css("color", "#fff"), 1 == ri.if_leaderboard && 0 == _i.user_entry_amount && (e("#tabs_wrapper").show().css("margin-bottom", "15px"), e("#show_user_entries").css("margin-top", "20px").css("margin-bottom", "15px"), e("#leaderboard_wrapper").css("margin-top", "0px").css("margin-bottom", "15px"), e("#leaderboard_wrapper p").css("margin-top", "20px").css("margin-bottom", "15px")), e("#update_personal_details_link").css("color", "#555").css("opacity", "0.6"), 1 == ri.if_leaderboard && (update_leaderboard(P), refresh_leaderboard_func(ri)), 1 == ri.require_verify_sms) var si = window.intlTelInput(document.querySelector("#telephone"), {
                                        separateDialCode: !0,
                                        preferredCountries: [y],
                                        hiddenInput: "full",
                                        utilsScript: "//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js"
                                    });
                                    0 == _i.user_id && 1 == ri.auto_login_pre_fill && e("#sw_login_button, input[name=sw_login]").click(), ri.security_level >= 2 && (e("#sw_login_button, input[name=sw_login]").html(ri.buttons_enter_text).css("cursor", "not-allowed").css("opacity", "0.5").prop("disabled", !0), login_defer_timer(ri, 4)), e(document.body).on("click", "#facebook_login_click, #twitter_login_click, #google_login_click, #linkedin_login_click, #twitch_login_click, #discord_login_click, #steam_login_click, #yahoo_login_click, #tumblr_login_click, #openid_login_click", (function(t) {
                                        var r = e(this).attr("data-provider");
                                        hybridauth_modal_login_user(ri, 1, r, "", "", "")
                                    })), e(document.body).on("click", "#telegram_login_click", (function(e) {
                                        telegram_login_popup_window()
                                    }))
                                }
                            }
                        })
                    }
                }
            })
        }
    })), getToken()
}));
