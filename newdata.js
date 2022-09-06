if (type == '2') {
    message = 'Error: duplicate entry.';
    show_reload_button = 1;
    reload_widget = 0;
}
// Banned IP address for QUIZLET
if (type == '5' && args_init['admin_user_id'] == '36770') {
    message = 'This entry has been flagged as spam. If you believe you have been falsely flagged as spam please contact <a href="mailto:competition@quizlet.com">competition@quizlet.com</a>.';
    show_reload_button = 1;
    reload_widget = 0;
}
// Diqualified user from the host
else if (type == '9') {
    message = 'You have been disqualified from this giveaway.';
    show_reload_button = 0;
    reload_widget = 0;
}
// No IP on load
else if (type == '10') {
    message = 'There was an error validating your browser. Please reload the page and try again.';
    show_reload_button = 1;
    reload_widget = 0;
}
// No more attempts allowed
else if (type == '21') {
    message = 'Sorry, you have run out of remaining entries for this giveaway.';
    show_reload_button = 0;
    reload_widget = 0;
}
// catch_all
else if (type == '23') {
    message = '<div style="text-align:left;">Sorry, but we had a hard time validating <u>' + args_init['sw__login_email'] + '</u>. Please try entering with a different email address from a common provider such as:</div>' +
        '<ul><li>Gmail.com</li><li>Hotmail.com</li><li>Outlook.com</li><li>Yahoo.com</li><li>GMX.com</li><li>Or, most other major email providers. Thank you!</li></ul>';
    show_reload_button = 1;
    reload_widget = 0;
}
// Duplicate IP address on login (1 email allowed)
else if (type == '20') {
    message = 'Only 1 email address is allowed per person. Please login with the original email address you used to enter:<br /><br />' + args_init['related_emails'];
    show_reload_button = 1;
    reload_widget = 0;
}
// Duplicate IP address on login (multiple emails allowed)
else if (type == '25') {
    message = 'There was an issue verifying you. Possible known issues: check if you already entered this giveaway with a different email address, try disabling your VPN if you\'re using one, or try entering on a different device.';
    show_reload_button = 1;
    reload_widget = 0;
}
// General error
else if (type == '3' ||
    type == '15' ||
    type == '31' ||
    type == '32' ||
    type == '33' ||
    type == '34' ||
    type == '35' ||
    type == '36' ||
    type == '37' ||
    type == '61' ||
    type == '62' ||
    type == '63' ||
    type == '64' ||
    type == '65' ||
    type == '66' ||
    type == '67' ||
    type == '68' ||
    type == '69' ||
    type == '70' ||
    type == '71' ||
    type == '72' ||
    type == '73' ||
    type == '75' ||
    type == '76' ||
    type == '77' ||
    type == '78' ||
    type == '79' ||
    type == '80') {
    message = 'This entry has been flagged by our anti-spam system. (' + type + ')';
    show_reload_button = 0;
    reload_widget = 0;
} else if (type == '74') {
    message = 'This entry has been flagged by our anti-spam system. (' + type + '). Please clear your history, cache, and cookies. Then, try entering again.';
    show_reload_button = 0;
    reload_widget = 0;
}
// Login IP match (no IP record)
else if (type == '39') {
    message = 'This entry has been flagged by our anti-spam system. Please make sure your browser allows both "trackers" and "3rd party cookies" and try again. (' + type + ')';
    show_reload_button = 0;
    reload_widget = 0;
}
// Entering too fast
else if (type == '50') {
    message = 'Woah nelly... you are entering too fast.';
    show_reload_button = 0;
    reload_widget = 1;
}
// Blacklisted email
else if (type == '51') {
    message = 'This email address has been disqualified from entering.';
    show_reload_button = 0;
    reload_widget = 1;
}
// Bad phone number
else if (type == '55') {
    message = 'This is an invalid phone number format. Please enter your phone number using a valid format with the "+" symbol, country code, area code (if applicable), and phone number.';
    show_reload_button = 0;
    reload_widget = 1;
}
// Age disqualification too young
else if (type == '56') {
    message = 'Sorry, but you are too young to enter this contest.';
    show_reload_button = 0;
    reload_widget = 1;
}
// Age disqualification too old
else if (type == '57') {
    message = 'Sorry, but you are too old to enter this contest.';
    show_reload_button = 0;
    reload_widget = 1;
}
// Block VPN's
else if (type == '81') {
    message = 'Please disable your VPN to enter this contest.';
    show_reload_button = 1;
    reload_widget = 1;
}
// Block VPN's
else if (type == '101') {
    message = 'An account already exists with this IP address.';
    show_reload_button = 1;
    reload_widget = 1;
}
// Duplicate crypto wallet address
else if (type == '102') {
    message = 'This wallet address has already been submitted by you or someone else. Please enter a unique wallet address.';
    show_reload_button = 1;
    reload_widget = 1;
}
// Duplicate crypto wallet address
else if (type == '103') {
    message = 'One or more wallet addresses have already been submitted by you or someone else. Please only enter a unique wallet addresses that haven\'t been entered.';
    show_reload_button = 1;
    reload_widget = 1;
}
// General error (everything else)
else {
    message = 'This entry has been flagged by our anti-spam system. (' + type + ')';
    show_reload_button = 0;
    reload_widget = 0;
}
