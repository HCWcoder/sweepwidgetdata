var website_url = window.location.origin;

function is_valid_email_address(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  // If Mobile - device detection 
  var isMobile = (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)));
  
  // Captitalize first letter
  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }
  
  function detect_os() {
      var OS_Name = navigator.appVersion;
      if (OS_Name.indexOf("Win") != -1) {
          var os = "Windows";
      } else if (OS_Name.indexOf("Mac") != -1) {
          var os = "Mac";
      } else if (OS_Name.indexOf("X11") != -1) {
          var os = "Unix";
      } else if (OS_Name.indexOf("Linux") != -1) {
          var os = "Linux";
      } else if (OS_Name.indexOf("SunOS") != -1) {
          var os = "Solaris";
      } else {
          var os = "Unknown";
      }
      return os;
  }
  
  function exit( status ) {
      
      // http://kevin.vanzonneveld.net
      // +   original by: Brett Zamir (http://brettz9.blogspot.com)
      // +      input by: Paul
      // +   bugfixed by: Hyam Singer (http://www.impact-computing.com/)
      // +   improved by: Philip Peterson
      // +   bugfixed by: Brett Zamir (http://brettz9.blogspot.com)
      // %        note 1: Should be considered expirimental. Please comment on this function.
      // *     example 1: exit();
      // *     returns 1: null
  
      var i;
  
      if (typeof status === 'string') {
          alert(status);
      }
  
      window.addEventListener('error', function (e) {e.preventDefault();e.stopPropagation();}, false);
  
      var handlers = [
          'copy', 'cut', 'paste',
          'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
          'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
          'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'
      ];
  
      function stopPropagation (e) {
          e.stopPropagation();
          // e.preventDefault(); // Stop for the form controls, etc., too?
      }
      for (i=0; i < handlers.length; i++) {
          window.addEventListener(handlers[i], function (e) {stopPropagation(e);}, true);
      }
  
      if (window.stop) {
          window.stop();
      }
  
      throw '';
  }
  
  function trim (str) {
      return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  }
  
  function Captcha( sw_f ) {
      
      var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9);
      
      var i;
      for ( i = 0; i < 6; i++ ) {
          
          var a = alpha[Math.floor(Math.random() * alpha.length)];
          var b = alpha[Math.floor(Math.random() * alpha.length)];
          var c = alpha[Math.floor(Math.random() * alpha.length)];
          var d = alpha[Math.floor(Math.random() * alpha.length)];
          //var e = alpha[Math.floor(Math.random() * alpha.length)];
          //var f = alpha[Math.floor(Math.random() * alpha.length)];
          //var g = alpha[Math.floor(Math.random() * alpha.length)];
          
      }
      
      var code = a + b + c + d;
      $( '#' + sw_f + ' #main_captcha' ).html( code );
      
  }
  
  function removeSpaces(string) {
      return string.split(' ').join('');
  }
  
  function ValidCaptcha( sw_f ) {
  
      var string1 = removeSpaces($( '#' + sw_f + ' #main_captcha').html());
      var string2 = removeSpaces($( '#' + sw_f + ' #captcha_answer').val());
      if ( string1.toUpperCase() == string2.toUpperCase() ) {
          return true;
      }
  
      else {        
          return false;
      }
  
  }
  
  // If Plural
  function if_add_plural(num) { return (num > 1) ? 's' : ''; }
  
  function if_add_plural_entries( num, f_letter ) { return (num > 1) ? f_letter + 'ntries' : f_letter + 'ntry'; }
  
  // Get current age from date string
  function current_age(dateString) {
      
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
      
  }
  
  // If string contains substring
  function string_contains_substring( needle, haystack_all ) {
      
      var haystack_exp = haystack_all.split("|");
      var haystack = haystack_exp[0];
      var website = haystack_exp[1];
      
      if ( haystack.toLowerCase().indexOf( needle ) >= 0 ) {
          
          return true;
          
      } else {
          
          return false;
      }
      
  }
  
  // entry attachment image show preview
  function entry_attachment_file_upload(input, method_class, method_id) {
      var files = input.files;
      if (files && files[0]) {
          var fileExtension = files[0].name.split('.').slice(-1)[0];
          if (['png', 'jpeg', 'jpg', 'gif'].indexOf(fileExtension) == -1) {
              window.alert('The file attachment extension format ' + fileExtension + ' is currently not supported.');
          } else {
              var reader = new FileReader();
              reader.onload = function (e) {
                  $('#entry_attachment_holder_' + method_class + '_' + method_id)
                      .find('.entry_attachment_preview').attr('src', e.target.result);
                  // $('#entry_attachment_holder_' + method_class + '_' + method_id)
                  //     .find('.entry_attachment_preview_hidden').val( e.target.result );
              }
              reader.readAsDataURL(files[0]);
          }
      }
  }
  
  function entry_viral_share_selection(input_name, input_id, title_text) {
      var entry_method_id = input_id.substring(input_id.lastIndexOf("_") + 1);
      var entry_method = $('#' + input_id).attr('class');
  }
  
  // Checkbox - show / hide email integration options
  function entry_email_integration_checkbox(input_id) {
      
      var entry_method_id = input_id.substring(input_id.lastIndexOf("_") + 1);
      
      if(document.getElementById(input_id).checked) {
          
          // Show email integration options
          $('#email_integration_checkbox_options_holder_' + entry_method_id).slideDown();
          
          // Show Iterable if checked
          if($('#email_integration_iterable_email_subscribe_' + entry_method_id).is(':checked')) {
              $('#email_integration_iterable_input_holder_all_' + entry_method_id).slideDown();
          }
  
          // Show Mailchimp if checked
          if($('#email_integration_mailchimp_email_subscribe_' + entry_method_id).is(':checked')) {
              $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).slideDown();
          }
          
          // Show Aweber if checked
          if($('#email_integration_aweber_email_subscribe_' + entry_method_id).is(':checked')) {
              $('#email_integration_aweber_input_holder_all_' + entry_method_id).slideDown();
          }
          
          // Show Active Campaign if checked
          if($('#email_integration_active_campaign_email_subscribe_' + entry_method_id).is(':checked')) {
              $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).slideDown();
          }
  
          // Show Mad Mimi if checked
          if($('#email_integration_mad_mimi_email_subscribe_' + entry_method_id).is(':checked')) {
              $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).slideDown();
          }
  
          // Show Constant Contact if checked
          if($('#email_integration_constant_contact_email_subscribe_' + entry_method_id).is(':checked')) {
              $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).slideDown();
          }
          
      } else {
          
          // Hide email integration options
          $('#email_integration_checkbox_options_holder_' + entry_method_id).slideUp();
          
          // Hide email integration input input (if there's an active selection)
          $('#email_integration_iterable_input_holder_all_' + entry_method_id).slideUp();
          $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).slideUp();
          $('#email_integration_aweber_input_holder_all_' + entry_method_id).slideUp();
          $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).slideUp();
          $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).slideUp();
          $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).slideUp();
          
      }
      
  }
  
  function custom_radio_options_display_value(value, id) {
      
      if(value == 1) {
          $('#custom_radio_options_holder_custom_' + id ).hide();
      } else if(value == 2) {
          $('#custom_radio_options_holder_custom_' + id ).show();
      }
      
  }
  
  // Selected email integration options - show input input
  function entry_email_integration_selection(input_name, input_id, title_text) {
  
      var entry_method_id = input_id.substring(input_id.lastIndexOf("_") + 1);
      var entry_method = $('#' + input_id).attr('class');

      // auto add/update entry_title input text.
      // $('input[name=entry_title_email_subscribe_' + entry_method_id).val(title_text);

      // Iterable
      if(entry_method == 'iterable') {
  
          // Hide
          $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();
  
          // Show
          $('#email_integration_iterable_input_holder_all_' + entry_method_id).show();
  
      // MailChimp
      } else if(entry_method == 'mailchimp') {
  
          // Hide
          $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();
  
          // Show
          $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).show();
  
      // Aweber
      } else if(entry_method == 'aweber') {
  
          // Hide
          $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();

  
          // Show
          $('#email_integration_aweber_input_holder_all_' + entry_method_id).show();
  
      // ActiveCampaign
      } else if(entry_method == 'active_campaign') {
  
          // Hide
          $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();
  
          // Show
          $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).show();
          
      // MadMimi
      } else if(entry_method == 'mad_mimi') {
  
          // Hide
          $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();
  
          // Show
          $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).show();
          
      // Constant Contact
      } else if(entry_method == 'constant_contact') {
  
          // Hide
          $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
          $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();
          
          // Show
          $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).show();
          
      // Mailerlite
      } else if(entry_method == 'mailerlite') {
  
        // Hide
        $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();
        
        // Show
        $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).show();
        
      // SendFox
      } else if(entry_method == 'sendfox') {
        
        // Hide
        $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();
        
        // Show
        $('#email_integration_sendfox_input_holder_all_' + entry_method_id).show();
        
       
    // Campaign Monitor
    } else if(entry_method == 'campaign_monitor') {
        
        // Hide
        $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();
        
        // Show
        $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).show();
        
    // GetResponse
    } else if(entry_method == 'get_response') {
        
        // Hide
        $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();
        
        // Show
        $('#email_integration_get_response_input_holder_all_' + entry_method_id).show();
        
    // Drip
    } else if(entry_method == 'drip') {
        
        // Hide
        $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();
        
        // Show
        $('#email_integration_drip_input_holder_all_' + entry_method_id).show();
        
    // Pabbly
    } else if(entry_method == 'pabbly') {
        
        // Hide
        $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();
        
        // Show
        $('#email_integration_pabbly_input_holder_all_' + entry_method_id).show();
        
    // SendGrid
    } else if(entry_method == 'sendgrid') {
            
        // Hide
        $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();
        
        // Show
        $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).show();
        
    // Klaviyo
    } else if(entry_method == 'klaviyo') {
         
        // Hide
        $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();
        
        // Show
        $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).show();

    // HubSpot
    } else if(entry_method == 'hubspot') {
            
        // Hide
        $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();
        
        // Show
        $('#email_integration_hubspot_input_holder_all_' + entry_method_id).show();

    // Sendy
    } else if(entry_method == 'sendy') {
                
        // Hide
        $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();
        
        // Show
        $('#email_integration_sendy_input_holder_all_' + entry_method_id).show();

    // ConvertKit
    } else if(entry_method == 'convertkit') {
                    
        // Hide
        $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();
        
        // Show
        $('#email_integration_convertkit_input_holder_all_' + entry_method_id).show();

    // EmailOctopus
    } else if(entry_method == 'emailoctopus') {
                        
        // Hide
        $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();
        
        // Show
        $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).show();

    // OmniSend
    } else if(entry_method == 'omnisend') {
                            
        // Hide
        $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailjet_input_holder_all_' + entry_method_id).hide();
        
        // Show
        $('#email_integration_omnisend_input_holder_all_' + entry_method_id).show();

    // MailJet
    } else if(entry_method == 'mailjet') {
                                
        // Hide
        $('#email_integration_mailchimp_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_aweber_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_active_campaign_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mad_mimi_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_iterable_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_constant_contact_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_mailerlite_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendfox_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_campaign_monitor_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_get_response_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_drip_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_pabbly_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendgrid_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_klaviyo_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_hubspot_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_sendy_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_convertkit_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_emailoctopus_input_holder_all_' + entry_method_id).hide();
        $('#email_integration_omnisend_input_holder_all_' + entry_method_id).hide();
        
        // Show
        $('#email_integration_mailjet_input_holder_all_' + entry_method_id).show();

    }

  }
  
  function allowed_worldwide_checkbox_click(e) {
      var value = 'United States, ';
      if($('input[name="allowed_world_wide"]').is(':checked')) {
          value = 'Worldwide';
      }
      $('textarea[name="countries_allowed"]').val(value);     
  }
  
  // Remove prize image if checked change thumbnail
  function remove_image_change_thumbnail() {
      if($('input[name=remove_image]').is(":checked")) {
          $('#image_upload_preview').attr('src', 'https://sweepwidgetmain.fra1.cdn.digitaloceanspaces.com/images/root/image3.png');
      } else {
          var image_thumbnail = $('#image_upload_preview_hidden').val();
          $('#image_upload_preview').attr('src', image_thumbnail);
      }      
  }
  
  // Remove background image if checked change thumbnail
  function remove_background_image_change_thumbnail() {
      
      if($('input[name=remove_background_image]').is(":checked")) {
          $('#background_image_upload_preview').attr('src', 'https://sweepwidgetmain.fra1.cdn.digitaloceanspaces.com/images/root/image3.png');
      } else {
          var image_thumbnail = $('#background_image_upload_preview_hidden').val();
          $('#background_image_upload_preview').attr('src', image_thumbnail);
      }
  }
  
  // Remove background image if checked change thumbnail
  function remove_custom_logo_change_thumbnail() {
      
    if($('input[name=remove_custom_logo]').is(":checked")) {
        $('#custom_logo_upload_preview').attr('src', 'https://sweepwidgetmain.fra1.cdn.digitaloceanspaces.com/images/root/image3.png');
    } else {
        var image_thumbnail = $('#custom_logo_upload_preview_hidden').val();
        $('#custom_logo_upload_preview').attr('src', image_thumbnail);
    }

  }

  // Remove background image if checked change thumbnail
  function remove_user_email_logo_change_thumbnail() {
    
    if($('input[name=remove_user_email_logo]').is(":checked")) {
        $('#user_email_logo_upload_preview').attr('src', 'https://sweepwidgetmain.fra1.cdn.digitaloceanspaces.com/images/root/image3.png');
    } else {
        var image_thumbnail = $('#user_email_logo_upload_preview_hidden').val();
        $('#user_email_logo_upload_preview').attr('src', image_thumbnail);
    }

  }

// Remove vericiation email logo if checked change thumbnail
function remove_require_verify_email_logo_change_thumbnail() {

    if($('input[name=remove_require_verify_email_logo]').is(":checked")) {
        $('#require_verify_email_logo_upload_preview').attr('src', 'https://sweepwidgetmain.fra1.cdn.digitaloceanspaces.com/images/root/image3.png');
    } else {
        var image_thumbnail = $('#require_verify_email_logo_upload_preview_hidden').val();
        $('#require_verify_email_logo_upload_preview').attr('src', image_thumbnail);
    }

    }

  // Remove thumbnail on unlock rewards
  $(document.body).on('click', '.unlock_rewards_remove_thumbnail', function() {

    var unlock_rewards_type_text = $(this).attr('data-type');
    var unlock_rewards_next_id = $(this).attr('data-rewards-int');
    var preview_img_id = '#unlock_rewards_email_logo_upload_preview_' + unlock_rewards_type_text + '-' + unlock_rewards_next_id;
    var hidden_img_id = '#unlock_rewards_email_logo_upload_preview_hidden_' + unlock_rewards_type_text + '-' + unlock_rewards_next_id;
    var preview_src = 'https://sweepwidgetmain.fra1.cdn.digitaloceanspaces.com/images/root/image3.png';

    // If remove
    if($(this).is(":checked")) {

        $(preview_img_id).attr('src', preview_src);

    // If show
    } else {
        
        var image_thumbnail = $(hidden_img_id).val();
        $(preview_img_id).attr('src', image_thumbnail);
        
    }

  });

  // Prize image show preview
  function readURL(input, image_or_background_image) {
  
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
              $('#' + image_or_background_image + '_upload_preview').attr('src', e.target.result);
              $('#' + image_or_background_image + '_upload_preview_hidden').val( e.target.result );
          }
          reader.readAsDataURL(input.files[0]);
      }
  
      var remove_image_or_background_image_change_thumbnail = image_or_background_image == 'image' ? 'onclick="remove_image_change_thumbnail()"' : 'onclick="remove_background_image_change_thumbnail()"';
      
      $('#remove_' + image_or_background_image + '_holder').html(
          '<div style="margin:20px 0 0 0;" class="full_holder_no_margin">' +
              '<div style="margin-bottom:0; font-size:14px;">' +
                  '<label style="cursor:pointer;">' +
                  '<input name="remove_' + image_or_background_image + '" type="checkbox" value="1" ' + remove_image_or_background_image_change_thumbnail + ' /> Remove image' +
                  '</label>' +
                  '<div style="width:100%; margin:10px 0 0 0; color:#999; font-size:12px; float:left;">To change the image, leave this unchecked and simply upload a new one.</div>' +
              '</div>' +
          '</div>'
      );	
  }
  
  // Prize image show preview
  function readURL_dynamic(input, unlock_rewards_type_text, unlock_rewards_next_id) {
      
    if (input.files && input.files[0]) {

        var reader = new FileReader();
        
        reader.onload = function (e) {
            
            $('#unlock_rewards_email_logo_upload_preview_' + unlock_rewards_type_text + '-' + unlock_rewards_next_id).attr('src', e.target.result);
            $('#unlock_rewards_email_logo_upload_preview_hidden_' + unlock_rewards_type_text + '-' + unlock_rewards_next_id).val( e.target.result );

        }

        reader.readAsDataURL(input.files[0]);
        
        $('#unlock_rewards_' + unlock_rewards_type_text + '_remove_email_logo_wrapper-' + unlock_rewards_next_id).html(
            
            '<div style="width:100%; margin:20px 0 0 0; font-size:14px; float:left;">' +

                '<label style="cursor:pointer;">' +

                    '<input name="unlock_rewards_' + unlock_rewards_type_text + '_remove_email_logo-' + unlock_rewards_next_id + '" type="checkbox" class="unlock_rewards_remove_thumbnail" data-type="' + unlock_rewards_type_text + '" data-rewards-int="' + unlock_rewards_next_id + '" /> Remove image' +

                '</label>' +

                '<div style="width:100%; margin:10px 0 0 0; color:#999; font-size:12px; float:left;">To change the image, leave this unchecked and simply upload a new one.</div>' +
                
            '</div>'
        );

    }
    
}

  // If has a required selection, check to see it matches one of the options
  function select_if_required_selection_matches( input_value, input_value_required ) {
      
      var input_value_required = trim( input_value_required );
      
      if( input_value_required !== '' ) {
          
          var match = [];
          var input_options_split = input_value.split( ',' );
          
          $.each(input_options_split, function( key, value ) {
              
              var value = trim( value )
              
              if( value == input_value_required ) {
                  
                  match.push(1);
                  
              } else {
                  
                  match.push(0);
                  
              }
              
          });
          
          if( $.inArray( 1, match ) !== -1 ) {
              
              return 1;
              
          } else {
              
              return 0;
              
          }
          
      }
      
  }
  
  // Error checking on main fields and entry methods
  function if_empty_field(input_type, value, value_required, input_name, header_id, main_or_entry_method) {
      
      // main_or_entry_method == 1, Main input field i.e. title, rules, etc.
      // main_or_entry_method == 2, Entry method
      // main_or_entry_method == 3, Entry method with required answer. Check that required answer matches one of the options.
      
      if( value == null ) {
          
          var value = '';
          
      }
      
      // Check error on main fields (non-entry methods i.e. title, rules, etc.)
      
      if(main_or_entry_method == 1) {
          
          // Check field by #id
          
          if(input_type == 'id') {
  
              if(value == '') {
                  
                  $('#' + header_id).css('color','#ff0000').css('font-weight','bold');
                  
              } else {
                  
                  $('#' + header_id).css('color','#333').css('font-weight','normal');
                  
              }
          
          // Check field by name=input_name (input name)
              
          } else {
              
              if(value == '') {
                  
                  $(input_type + '[name=' + input_name + ']').css('background-color','#ffe6e6').css('border','2px solid #ffe6e6');
                  
                  $('#' + header_id).css('color','#ff0000').css('font-weight','bold');
                  
                  var entry_method_errors = 1;
                  
              } else {
                  
                  $(input_type + '[name=' + input_name + ']').css('background-color','#fff').css('border','2px solid #e0e0e0');
                 
                  $('#' + header_id).css('color','#333').css('font-weight','normal');
                  
              }
              
          }
      
      // Check errors on entry method
      
      } else if(main_or_entry_method == 2) {
          
          if(value == '') {
              
              $(input_type + '[name=' + input_name + ']').css('background-color','#ffe6e6').css('border','2px solid #ffe6e6');
              
              $('#' + header_id).css('color','#ff0000').css('font-weight','bold');
              
              $('#entry_methods_two_errors').val(1);
              
              return 1;
              
          } else {
              
              $(input_type + '[name=' + input_name + ']').css('background-color','#fff').css('border','2px solid #ddd');
              
              $('#' + header_id).css('color','#555').css('font-weight','normal');
              
              return 0;
              
          }
          
      // Check errors on entry method with a required answer. Right now only radio and select offer required answers.
      
      } else if(main_or_entry_method == 3) {
          
          var input_value_required_match = select_if_required_selection_matches( value, value_required );
          
          if( input_value_required_match == 0 ) {
              
              $(input_type + '[name=' + input_name + ']').css('background-color','#ffe6e6').css('border','2px solid #ffe6e6');
              
              $('#' + header_id).css('color','#ff0000').css('font-weight','bold');
              
              $('#entry_methods_two_errors').val(1);
              
              return 1;
              
          } else {
              
              $(input_type + '[name=' + input_name + ']').css('background-color','#fff').css('border','2px solid #ddd');
              
              $('#' + header_id).css('color','#555').css('font-weight','normal');
              
              return 0;
              
          }
          
      }
         
  }
  
  // Get entry method default values. To simplify, these values only need to be filled here.
  function entry_method_fetch_values(entry_method, entry_type, entry_title_db, entry_link_db, entry_textarea_db, language, translate) {
      
      var entry_title_db = (entry_title_db || '').replace('@', '');
      var entry_link_db = (entry_link_db || '').replace('@', '');

      if(entry_title_db == ''
         && entry_method !== 'refer_friends') {

        entry_title_db = '[NAME]';

      }

      if(entry_link_db == '') {

        entry_link_db = '[NAME]';

      }
      
      var icon_base_path = 'images/';
      
      // Int
      var entry_title = 0;
      var entry_link = 0;
      var entry_amount = 0;
      var entry_textarea = 0;
      var daily = 0;
      var timer = 0;
      var social_optional_engagement = 0;
      var require_verification = 0;
      var require_verification_checked_by_default = 1;
      var force_require_verification = 0;
      var required = 0;
      var custom_icon = 0;
      var entry_has_group = 0;
      var custom_radio_options = 0;
      var input_type = 0;
      var additional_instructions = 0;
      var email_integration = 0;
      var viral_share = 0;
      var viral_share_options = [];
      var upload_a_file = 0;
      var upload_a_file_ext = [];
      var entry_attachment = 0;
      var input_category = 0;
      
      // header / placeholder
      var entry_method_handle = '';
      var entry_method_docs_link = '';
      var entry_method_handle_hint = '';
      var entry_title_header = '';
      var entry_title_placeholder = '';
      var entry_title_value = '';
      var entry_link_header = '';
      var entry_link_placeholder = '';
      var entry_link_validation = '';
      var entry_link_validation_error = '';
      var entry_amount_header = 'Number of entries this is worth';
      var entry_amount_placeholder = 'minimum 1 maximum 999';
      var entry_textarea_header = '';
      var entry_textarea_placeholder = '';
      var entry_textarea_value = '';
      var entry_textarea_note = '';
      var entry_textarea_max_length = '';
      var entry_link_text = '';
      var main_instructions_header = 'Main Directions';
      var main_instructions_placeholder = '';
      var main_instructions_note = 'These are the instructions on what the user must do';
      var main_instructions_max_length = 1000;
      var additional_instructions_header = 'Additional Instructions';
      var additional_instructions_placeholder = 'Optional';
      var additional_instructions_value = '';
      var additional_instructions_note = '';
      var additional_instructions_max_length = 1000;
      var entry_attachment_header = 'Upload and attach';
      var entry_attachment_hint = 'Supported formats are: .jpg, .jpeg, .gif, .png and Recommended size is 1200 x 628';
      var entry_attachment_value = 'Upload file';
      var entry_attachment_validation = '~^.*\.(jpg|jpeg|gif|png)$~';
      var entry_attachment_validation_error = 'Unsupported file format, currently we only support following formats: .jpg, .jpeg, .gif, .png';
      var social_optional_engagement_header = '';
      var require_verification_header = '';

      var entry_link_db_end_uri = entry_link_db.replace('https://', '').replace('http://', '').replace('www.', '');
      
      // style / display
      var color = '#fff';
      var background_color = '';
      var entry_icon_path = '';
      var font_awesome_icon = '';
      
      // errors
      var entry_title_error = '';
      var entry_link_error = '';
      var entry_amount_error = 'How many entries this is worth: Min 1 - Max 1,000,000';
      var entry_match_error = '';
      var entry_substring_match_error = '';
      var entry_textarea_error = '';
      var input_error_1 = '';
      var input_error_2 = '';
      var email_integration_error = '';
      var viral_share_error = '';
      
      // widget fields
      var input_header = '';
      var input_placeholder = '';
      var link_button_text = '';
      var verify_header = '';
      var verify_button_text = ''; // 'Click To Verify Entry'
      var link_prepend = ''; // 'https://'
      var host_name = '';
      
      // Main Entries
  
      // Additional Entries
      /*
          - input_category = 1  : For 'email_subscribe', 'upload_a_file', 'refer_friends', etc.
          - input_category = 2  : For visiting & view posts etc.
          - input_category = 3  : For social api's custom api handler (follow, like, subscribe etc).
          - input_category = 4  : For submiting a post, song, etc. Also for birthday, and some custom fields.
          - input_category = 5  : For blogs related specially 'comments', write posts or 'custom' etc.
      */
      
      // This one is level 1. I only use this to get the $entry_icon_path.
      if(entry_method == 'user_details') {
          var entry_method_handle = 'User Details';
          var entry_icon_path = icon_base_path + 'form.png';
          var font_awesome_icon = '<i class="fas fa-user"></i>';
      }
  
      // These are all for level 2
  
      /* i.e., input_category = 1 */
      else if(entry_method == 'email_subscribe') {
          
          var input_category = 1;
          var entry_method_handle = 'Subscribe To Newsletter';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/subscribe-to-newsletter';
          var entry_method_handle_hint = '<strong>Hint: </strong> Subscribe To <strong>SomeName</strong> Newsletter';
          var required = 1;
          var entry_amount = 1;
          var email_integration = 1;
          var entry_title = 1;
          var entry_title_header = 'Newsletter Name';
          var entry_title_placeholder = 'Newsletter name';
          var entry_title_error = 'Newsletter name';
          var email_integration_error = 'Email integration information';
          var verify_header = 'By clicking the button you agree to receive newsletters';
          var verify_button_text = 'Confirm Subscription';
          var background_color = '#00cccc';
          var entry_icon_path = icon_base_path + 'email_s.png';
          var font_awesome_icon = '<i class="fas fa-envelope"></i>';

          // Non-English
          if(language !== 'en') {
            
            var verify_header = translate['i_agree_to_receive_newsletters'];
            var verify_button_text = translate['confirm'];
            
          }
          
      } else if(entry_method == 'upload_a_file') {

          var input_category = 1;
          var entry_title = 1;
          var required = 1;
          var daily = 1;
          var entry_amount = 1;
          var additional_instructions = 1;
          var force_require_verification = 1;
          var entry_method_handle = 'Upload A File';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/upload-a-file-entry-method';
          var entry_method_handle_hint = '<strong>Hint: </strong> Upload A File';
          var entry_title_header = 'What must the user upload?';
          var entry_title_error = 'File to be uploaded';
          var entry_title_placeholder = 'Your favorite picture of cats';
          var verify_button_text = 'Confirm Upload';
          var upload_a_file = 1;
		  var upload_a_file_ext = [
            { 'ext': 'jpg', 'checked': true },
            { 'ext': 'jpeg', 'checked': true },
            { 'ext': 'png', 'checked': true },
            { 'ext': 'mp3', 'checked': false },
            { 'ext': 'mp4', 'checked': false },
            { 'ext': 'avi', 'checked': false },
            { 'ext': 'mov', 'checked': false }
			];
          var entry_icon_path = icon_base_path + 'email_s.png';
          var color = '#fff';
          var background_color = '#f4cb58';
          var font_awesome_icon = '<i class="fas fa-file-upload"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var verify_button_text = translate['confirm'];
            
          }
          
      } else if(entry_method == 'refer_friends') {
          
          var input_category = 1;
          var entry_amount = 1;
          var entry_textarea = 1;
          //var additional_instructions = 1;
          var entry_attachment = 0;
          var custom_icon = 1;
          var entry_method_handle = 'Share your link and get extra entries';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/viral-sharing-refer-a-friend';
          var entry_method_handle_hint = '<strong>Hint: </strong> Refer Friends for Extra Entries';
          var entry_icon_path = icon_base_path + 'viral_s.png';
          var color = '#fff';
          var background_color = '#cc0099';
          var entry_textarea_header = 'Default message when a user shares their link:';
          var entry_textarea_placeholder = '280 characters max';
          var entry_textarea_value = 'Enter to win this competition: [TITLE]\n\n';
          var entry_textarea_max_length = 280;
          //var entry_textarea_note = '<b>Note:</b> not used when sharing to Facebook.';
          var entry_textarea_error = 'Share Text';
          //var additional_instructions_header = 'Default text when a user shares via <strong>email</strong> (<i>optional</i>)';
          var additional_instructions_placeholder = '300 characters max';
          var additional_instructions_value = 'Enter to win this competition: [TITLE]\n\n';
          var additional_instructions_max_length = 280;
          var additional_instructions_error = 'Share Body';
          var entry_attachment_header = 'Custom Share Image <i>(optional)</i>';
          var entry_attachment_hint = 'Recommended size is 1200 x 628';
          var entry_attachment_value = 'Upload file...';
          var entry_attachment_validation = '~^.*\.(jpg|jpeg|gif|png)$~';
          var entry_attachment_validation_error = 'Unsupported file format, currently we only support following formats: .jpg, .jpeg, .gif, .png';
          var viral_share = 1;
          var viral_share_options = [
              //{ name: 'email', label: 'Email', checked: true },
              { name: 'facebook', label: 'Facebook', checked: true },
              { name: 'twitter', label: 'Twitter', checked: true },
              { name: 'linkedin', label: 'LinkedIn', checked: true },
              { name: 'tumblr', label: 'Tumblr', checked: true },
              { name: 'whatsapp', label: 'WhatsApp', checked: true },
              { name: 'skype', label: 'Skype', checked: true },
              //{ name: 'line', label: 'Line', checked: false },
              { name: 'pocket', label: 'Pocket', checked: true },
              { name: 'telegram', label: 'Telegram', checked: true }
          ];
          var viral_share_error = 'Refer A Friend Options:  At least have one sharing option must be selected';
          var font_awesome_icon = '<i class="fas fa-bullhorn"></i>';
          
          // Non-English
          if(language !== 'en') {
              //
          }
            
      } else if(entry_method == 'facebook_page_visit') {
            
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var daily = 1;
          var required = 1;
          var social_optional_engagement = 1;
          var input_category = 2;
          var require_verification = 0;
          var require_verification_checked_by_default = 0;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Facebook Visit Page';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/facebook-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Visit <strong>@SomeName</strong> on Facebook';
          var entry_title_header = 'Facebook page name';
          var entry_title_placeholder = 'SweepWidget';
          var entry_link_header = 'Facebook page URL';
          var entry_link_placeholder = 'https://www.facebook.com/SweepWidget/';
          var social_optional_engagement_header = 'Ask the user to optionally <span style="color:#3b5998; font-weight:bold;">Like your Facebook page</span> &nbsp;<i class="far fa-thumbs-up"></i>';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'facebook_s.png';
          var background_color = '#3b5998';
          var entry_title_error = 'Facebook page name';
          var entry_link_error = 'Facebook page URL';
          var entry_substring_match_error = 'Facebook page URL must contain "facebook"';
          var input_header = 'Click to visit @' + entry_title_db + ' Facebook page';
          var link_button_text = 'Visit Page';
          var font_awesome_icon = '<i class="fab fa-facebook-f"></i>';
        //   var verify_header = 'What username did you visit this page with?';
        //   var input_placeholder = 'Username';
        //   var verify_button_text = 'I Visited This Page';

          // Non-English
          if(language !== 'en') {

            var input_header = 'Facebook: ' + translate['open_link'] + ' @' + entry_title_db;
            var link_button_text = translate['open_link'];
            // var verify_header = translate['what_username_did_you_use'];
            // var input_placeholder = translate['username'];
            // var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'facebook_post_visit') {
          
        var entry_title = 1;
        var entry_link = 1;
        var entry_amount = 1;
        var daily = 1;
        var required = 1;
        var input_category = 2;
        var require_verification = 0;
        var require_verification_checked_by_default = 0;
        var require_verification_header = 'Require user verification';
        var entry_method_handle = 'Facebook Visit Post';
        var entry_method_docs_link = 'https://sweepwidget.com/docs/facebook-entry-methods';
        var entry_method_handle_hint = '<strong>Hint: </strong> Visit <strong>Post Title</strong> on Facebook';
        var entry_title_header = 'Facebook post name';
        var entry_title_placeholder = 'SweepWidget';
        var entry_link_header = 'Facebook post URL';
        var entry_link_placeholder = 'https://www.facebook.com/SweepWidget/posts/1091066587735106';
        var color = '#fff';
        var entry_icon_path = icon_base_path + 'facebook_s.png';
        var background_color = '#3b5998';
        var entry_title_error = 'Facebook post name';
        var entry_link_error = 'Facebook post URL';
        var entry_substring_match_error = 'Facebook post URL must contain "facebook"';
        var input_header = 'Click to visit the following Facebook post: ' + entry_title_db;
        var link_button_text = 'Visit Post';
        var font_awesome_icon = '<i class="fab fa-facebook-f"></i>';
        // var verify_header = 'What username did you visit this post with?';
        // var input_placeholder = 'Username';
        // var verify_button_text = 'I Visited This Post';
        
        // Non-English
        if(language !== 'en') {

            var input_header = 'Facebook: ' + translate['open_link'];
            var link_button_text = translate['open_link'];
            // var verify_header = translate['what_username_did_you_use'];
            // var input_placeholder = translate['username'];
            // var verify_button_text = translate['submit'];
            
        }

    } else if(entry_method == 'facebook_group_visit') {
          
        var entry_title = 1;
        var entry_link = 1;
        var entry_amount = 1;
        var daily = 1;
        var required = 1;
        var input_category = 2;
        var require_verification = 0;
        var require_verification_checked_by_default = 0;
        var require_verification_header = 'Require user verification';
        var entry_method_handle = 'Facebook Visit Group';
        var entry_method_docs_link = 'https://sweepwidget.com/docs/facebook-entry-methods';
        var entry_method_handle_hint = '<strong>Hint: </strong> Visit <strong>@SomeName</strong> Facebook Group';
        var entry_title_header = 'Facebook group name';
        var entry_title_placeholder = 'SweepWidget';
        var entry_link_header = 'Facebook group URL';
        var entry_link_placeholder = 'https://www.facebook.com/groups/my-group/';
        var color = '#fff';
        var entry_icon_path = icon_base_path + 'facebook_s.png';
        var background_color = '#3b5998';
        var entry_title_error = 'Facebook group name';
        var entry_link_error = 'Invalid Facebook Group URL';
        var entry_substring_match_error = 'Enter an Facebok Group URL';
        var input_header = 'Visit ' + entry_title_db + ' Facebook group';
        var link_button_text = 'Visit Group';
        // var verify_header = 'What username did you visit this group with?';
        // var input_placeholder = 'Username';
        // var verify_button_text = 'I Visited This Group';
        var font_awesome_icon = '<i class="fab fa-facebook-f"></i>';
        
        // Non-English
        if(language !== 'en') {

            var input_header = 'Facebook: ' + translate['open_link'];
            var link_button_text = translate['open_link'];
            // var verify_header = translate['what_username_did_you_use'];
            // var input_placeholder = translate['username'];
            // var verify_button_text = translate['submit'];
            
        }
        
      } else if(entry_method == 'facebook_page_like') {
  
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Facebook Like Page';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/facebook-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Like <strong>@SomeName</strong> on Facebook';
          var entry_title_header = 'Facebook page name';
          var entry_title_placeholder = 'SweepWidget';
          var entry_link_header = 'Facebook page URL';
          var entry_link_placeholder = 'https://www.facebook.com/SweepWidget/';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'facebook_s.png';
          var background_color = '#3b5998';
          var entry_title_error = 'Facebook page name';
          var entry_link_error = 'Invalid Facebook Page URL';
          var entry_substring_match_error = 'Enter a Facebok Page URL';
          var link_button_text = 'Visit Page';
          var input_header = 'Visit & like ' + entry_title_db + ' Facebook page.';
          var verify_header = 'What username did you like this page with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Liked This Page';
          var font_awesome_icon = '<i class="fab fa-facebook-f"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Facebook: ' + translate['like'] + ' @' + entry_title_db;
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'facebook_group_join') {
  
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Facebook Join Group';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/facebook-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Join <strong>@SomeName</strong> Facebook Group';
          var entry_title_header = 'Facebook group name';
          var entry_title_placeholder = 'SweepWidget';
          var entry_link_header = 'Facebook group URL';
          var entry_link_placeholder = 'https://www.facebook.com/groups/my-group/';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'facebook_s.png';
          var background_color = '#3b5998';
          var entry_title_error = 'Facebook group name';
          var entry_link_error = 'Invalid Facebook Group URL';
          var entry_substring_match_error = 'Enter an Facebok Group URL';
          var input_header = 'Visit & join ' + entry_title_db + ' Facebook group';
		  var link_button_text = 'Visit Group';
          var verify_header = 'What username did you join this group with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Joined This Group';
          var font_awesome_icon = '<i class="fab fa-facebook-f"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = '<strong>' + entry_title_db + '</strong>: ' + translate['join_a_group'];
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'facebook_post_comment'){
  
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Facebook Comment On Post';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/facebook-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Comment On Facebook Post';
          var entry_title_header = 'Facebook Post Title';
          var entry_title_placeholder = 'How to make double baked potatoes';
          var entry_link_header = 'Link to Facebook post &nbsp;<a class="tooltip_question_mark" style="margin-top:-4px; display:inline-block;" target="_blank" rel="nofollow" href="https://sweepwidget.com/docs/how-to-find-the-direct-link-to-a-facebook-post"><i class="fas fa-question-circle"></i></a>';
          var entry_link_placeholder = 'https://www.facebook.com/SweepWidget/posts/1091066587735106';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'facebook_s.png';
          var background_color = '#3b5998';
          var entry_title_error = 'Facebook Post Title';
          var entry_link_error = 'Invalid Facebook Post URL';
          var entry_substring_match_error = 'Enter Facebok Post URL';
          var input_header = 'Visit Facebook post and leave a comment';
		  var link_button_text = 'Visit Post';
          var verify_header = 'What username did you use to comment on this post?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Posted A Comment';
          var font_awesome_icon = '<i class="fab fa-facebook-f"></i>';
  
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Facebook: ' + translate['leave_a_comment'];
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'facebook_post_like') {
        
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Facebook Like Post';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/facebook-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Like Facebook Post';
          var entry_title_header = 'Facebook Post Title';
          var entry_title_placeholder = 'How to make double baked potatoes';
          var entry_link_header = 'Link to Facebook post &nbsp;<a class="tooltip_question_mark" style="margin-top:-4px; display:inline-block;" target="_blank" rel="nofollow" href="https://sweepwidget.com/docs/how-to-find-the-direct-link-to-a-facebook-post"><i class="fas fa-question-circle"></i></a>';
          var entry_link_placeholder = 'https://www.facebook.com/SweepWidget/posts/1091066587735106?__xts__[0]=68.ARASrrkTALOM4SoxUus7wvBhIKNB0XeOCcMgRtw99Z0Svg132vDMhsPMsjTWb4P7bwmtdK7LAgoOWgIlNVfw4QB7FHM23HluQ7inKAULCtB9guwSPNVQWGcj2K6VNe04h7XWbHyWrCmgX0SvZwYLBfr-o-f1tkmQUrXdhZXV6oNlQ7FvzLN45vxsjtXHkmhxzpv_QrIvA0kX-fAbf6heYws&__tn__=-R';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'facebook_s.png';
          var background_color = '#3b5998';
          var entry_title_error = 'Facebook Post Title';
          var entry_link_error = 'Invalid Facebook Post URL';
          var entry_substring_match_error = 'Enter Facebok Post URL';
          var input_header = 'Visit Facebook post and like it';
		  var link_button_text = 'Visit Post';
          var verify_header = 'What username did you use to like this post?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Liked This Post';
          var font_awesome_icon = '<i class="fab fa-facebook-f"></i>';

          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Facebook: ' + translate['like_this_post'];
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
        } else if(entry_method == 'facebook_post_share') {
  
            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var input_category = 2;
            var require_verification = 1;
            var require_verification_checked_by_default = 1;
            var require_verification_header = 'Require user verification';
            var entry_method_handle = 'Facebook Share Post';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/facebook-entry-methods';
            var entry_method_handle_hint = '<strong>Hint: </strong> Share Facebook Post';
            var entry_title_header = 'Facebook Post Title';
            var entry_title_placeholder = 'How to make double baked potatoes';
            var entry_link_header = 'Link to Facebook post &nbsp;<a class="tooltip_question_mark" style="margin-top:-4px; display:inline-block;" target="_blank" rel="nofollow" href="https://sweepwidget.com/docs/how-to-find-the-direct-link-to-a-facebook-post"><i class="fas fa-question-circle"></i></a>';
            var entry_link_placeholder = 'https://www.facebook.com/SweepWidget/posts/1091066587735106?__xts__[0]=68.ARASrrkTALOM4SoxUus7wvBhIKNB0XeOCcMgRtw99Z0Svg132vDMhsPMsjTWb4P7bwmtdK7LAgoOWgIlNVfw4QB7FHM23HluQ7inKAULCtB9guwSPNVQWGcj2K6VNe04h7XWbHyWrCmgX0SvZwYLBfr-o-f1tkmQUrXdhZXV6oNlQ7FvzLN45vxsjtXHkmhxzpv_QrIvA0kX-fAbf6heYws&__tn__=-R';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'facebook_s.png';
            var background_color = '#3b5998';
            var entry_title_error = 'Facebook Post Title';
            var entry_link_error = 'Invalid Facebook Post URL';
            var entry_substring_match_error = 'Enter Facebok Post URL';
            var input_header = 'Visit Facebook post and share it';
		    var link_button_text = 'Visit Post';
            var verify_header = 'What\'s the Facebook link where you shared this post?';
            var input_placeholder = 'https://facebook.com/link-to-where-you-shared';
            var verify_button_text = 'I Shared This Post';
            var font_awesome_icon = '<i class="fab fa-facebook-f"></i>';
                
            // Non-English
            if(language !== 'en') {
                
                var input_header = 'Facebook: ' + translate['share_this_post'];
                var link_button_text = translate['open_link'];
                var verify_header = translate['what_link_did_you_share'];
                var verify_button_text = translate['submit'];
                
            }
            
      } else if(entry_method == 'pinterest_visit_page') {
  
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var daily = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 0;
          var require_verification_checked_by_default = 0;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Pinterest Visit Pin';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/pinterest-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Visit Pinterest Pin';
          var entry_title_header = 'Pin name';
          var entry_title_placeholder = 'Pin name';
          var entry_link_header = 'Pinterest pin URL';
          var entry_link_placeholder = 'https://www.pinterest.com/pin/this-is-my-pin';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'pinterest_s.png';
          var background_color = '#bd081c';
          var entry_title_error = 'Pin name is required';
          var entry_link_error = 'Pinterest pin URL';
          var entry_substring_match_error = 'Pinterest pin URL must contain "pinterest"';
          var input_header = 'Click link to visit <strong>' + entry_title_db + '</strong> on Pinterest.';
          var link_button_text = 'Visit Pinterest Pin';
          var font_awesome_icon = '<i class="fab fa-pinterest-p"></i>';
        //   var verify_header = 'What username did you visit this Pinterest pin with?';
        //   var input_placeholder = 'Username';
        //   var verify_button_text = 'I Visited This Pin';

          // Non-English
          if(language !== 'en') {
              
            var input_header = 'Pinterest: ' + translate['open_link'] + ' @' + entry_title_db;
            var link_button_text = translate['open_link'];
            // var verify_header = translate['what_username_did_you_use'];
            // var input_placeholder = translate['username'];
            // var verify_button_text = translate['submit'];

          }
              
      } else if(entry_method == 'pinterest_visit_pin') {
  
        var entry_title = 1;
        var entry_link = 1;
        var entry_amount = 1;
        var daily = 1;
        var required = 1;
        var input_category = 2;
        var require_verification = 0;
        var require_verification_checked_by_default = 0;
        var require_verification_header = 'Require user verification';
        var entry_method_handle = 'Pinterest Visit Pin';
        var entry_method_docs_link = 'https://sweepwidget.com/docs/pinterest-entry-methods';
        var entry_method_handle_hint = '<strong>Hint: </strong> Visit Pinterest Pin';
        var entry_title_header = 'Pin name';
        var entry_title_placeholder = 'Pin name';
        var entry_link_header = 'Pinterest Pin URL';
        var entry_link_placeholder = 'https://www.pinterest.com/SweepWidget';
        var color = '#fff';
        var entry_icon_path = icon_base_path + 'pinterest_s.png';
        var background_color = '#bd081c';
        var entry_title_error = 'Pin name is required';
        var entry_link_error = 'Pinterest Pin URL';
        var entry_substring_match_error = 'Pinterest Pin URL must contain "pinterest"';
        var input_header = 'Click link to visit <strong>' + entry_title_db + '</strong> on Pinterest.';
        var link_button_text = 'Visit Pinterest Pin';
        var font_awesome_icon = '<i class="fab fa-pinterest-p"></i>';
        // var verify_header = 'What username did you visit this pin page with?';
        // var input_placeholder = 'Username';
        // var verify_button_text = 'I Viewed This Pin';

        // Non-English
        if(language !== 'en') {
            
          var input_header = 'Pinterest: ' + translate['open_link'];
          var link_button_text = translate['open_link'];
        //   var verify_header = translate['what_username_did_you_use'];
        //   var input_placeholder = translate['username'];
        //   var verify_button_text = translate['submit'];
          
        }
        
      } else if(entry_method == 'visit_a_page') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var daily = 1;
          var required = 1;
          var input_category = 2;
          var entry_method_handle = 'Visit A Page';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/visit-a-page';
          var entry_method_handle_hint = '<strong>Hint: </strong> Visit A Page';
          var entry_title_header = 'Page name';
          var entry_title_placeholder = 'SweepWidget Blog';
          var entry_link_header = 'Page URL';
          var entry_link_placeholder = 'https://sweepwidget.com/blog';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'website_s.png';
          var background_color = '#0079bf';
          var entry_title_error = 'Page name';
          var entry_link_error = 'Page URL';
          var entry_substring_match_error = 'Page URL must be a link';
          var input_header = 'Click link to visit "' + entry_title_db + '".';
          var link_button_text = 'Visit ' + entry_title_db + '';
          var font_awesome_icon = '<i class="fas fa-globe-americas"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = translate['open_link'] + ' @' + entry_title_db;
            var link_button_text = translate['open_link'];
            
          }
          
      } else if(entry_method == 'patreon_page_visit') {
            
            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var daily = 1;
            var required = 1;
            var input_category = 2;
            var entry_method_handle = 'Patreon Visit Page';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/patreon-entry-methods';
            var entry_method_handle_hint = '<strong>Hint: </strong> Visit <strong>@SomeName</strong> on Patreon';
            var entry_title_header = 'Patreon page name';
            var entry_title_placeholder = 'SweepWidget';
            var entry_link_header = 'Patreon page URL';
            var entry_link_placeholder = 'https://www.patreon.com/BenFolds';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'patreon_s.png';
            var background_color = '#E85B46';
            var entry_title_error = 'Patreon page name';
            var entry_link_error = 'Patreon page URL';
            var entry_substring_match_error = 'Patreon page URL must contain "patreon"';
            var input_header = '';
            var link_button_text = 'Click To Visit '+ entry_title_db + ' on Patreon';
            var font_awesome_icon = '<i class="fab fa-patreon"></i>';
        
            // Non-English
            if(language !== 'en') {
                
                var input_header = 'Patreon: ' + translate['open_link'] + ' @' + entry_title_db;
                var link_button_text = translate['open_link'];
                
            }
            
      } else if(entry_method == 'instagram_view_post') {
          
          var entry_link = 1;
          var entry_amount = 1;
          var daily = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 0;
          var require_verification_checked_by_default = 0;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Instagram Visit Post';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/instagram-entry-methods';
          var entry_method_handle_hint = entry_method_handle;
          var entry_link_header = 'Post URL';
          var entry_link_placeholder = 'https://www.instagram.com/p/SweepWidget';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'instagram_s.png';
          var background_color = '#3f729b';
          var entry_link_error = 'Post URL';
          var entry_substring_match_error = 'Link must contain "instagram"';
          var input_header = 'Click link to view this post on Instagram.';
          var link_button_text = 'Visit Instagram Post';
          var font_awesome_icon = '<i class="fab fa-instagram"></i>';
        //   var verify_header = 'What username did you visit this post page with?';
        //   var input_placeholder = 'Username';
        //   var verify_button_text = 'I Viewed This Post';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Instagram: ' + translate['view_a_post'] + ' @' + entry_title_db;
            var link_button_text = translate['open_link'];
            // var verify_header = translate['what_username_did_you_use'];
            // var input_placeholder = translate['username'];
            // var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'instagram_visit_profile') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var daily = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 0;
          var require_verification_checked_by_default = 0;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Instagram Visit Profile';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/instagram-entry-methods';
          var entry_method_handle_hint = entry_method_handle;
          var entry_title_header = 'Profile Name';
          var entry_title_placeholder = 'SweepWidget';
          var entry_link_header = 'Profile URL';
          var entry_link_placeholder = 'https://www.instagram.com/SweepWidget';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'instagram_s.png';
          var background_color = '#3f729b';
          var entry_title_error = 'Profile Name is required';
          var entry_link_error = 'Profile URL is required';
          var entry_substring_match_error = 'Instagram profile URL must contain "instagram"';
          var input_header = 'Click on the button below to visit <strong>' + entry_title_db + '</strong> on Instagram.';
          var link_button_text = 'Visit Instagram profile';
          var font_awesome_icon = '<i class="fab fa-instagram"></i>';
        //   var verify_header = 'What username did you visit this profile page with?';
        //   var input_placeholder = 'Username';
        //   var verify_button_text = 'I Visited This Profile';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Instagram: ' + translate['view_a_profile'] + ' @' + entry_title_db;
            var link_button_text = translate['open_link'];
            // var verify_header = translate['what_username_did_you_use'];
            // var input_placeholder = translate['username'];
            // var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'instagram_like_post') {
  
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Instagram Like Post';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/instagram-entry-methods';
          var entry_method_handle_hint = entry_method_handle;
          var entry_link_header = 'Instagram Post URL';
          var entry_link_text = '';
          var entry_link_placeholder = 'https://www.instagram.com/p/BelF2mYlj58';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'instagram_s.png';
          var background_color = '#3f729b';
          var entry_link_error = 'Invalid Instagram Post URL';
          var entry_substring_match_error = 'Enter an Instagram Post URL';
          var link_button_text = 'Visit & Like this post';
          var input_header = 'Visit & like ' + entry_title_db + ' Instagram post.';
          var verify_header = 'What username did you like with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Liked This Post';
          var font_awesome_icon = '<i class="fab fa-instagram"></i>';

          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Instagram: ' + translate['like_a_post'] + ' @' + entry_title_db;
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }

        } else if(entry_method == 'instagram_comment_post') {
  
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var input_category = 2;
            var require_verification = 1;
            var require_verification_checked_by_default = 1;
            var require_verification_header = 'Require user verification';
            var entry_method_handle = 'Instagram Comment On A Post';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/instagram-entry-methods';
            var entry_method_handle_hint = entry_method_handle;
            var entry_link_header = 'Instagram Post URL';
            var entry_link_text = '';
            var entry_link_placeholder = 'https://www.instagram.com/p/BelF2mYlj58';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'instagram_s.png';
            var background_color = '#3f729b';
            var entry_link_error = 'Invalid Instagram Post URL';
            var entry_substring_match_error = 'Enter an Instagram Post URL';
            var link_button_text = 'Visit & comment on this post';
            var input_header = 'Visit & comment on this Instagram post.';
            var verify_header = 'What username did you comment with?';
            var input_placeholder = 'Username';
            var verify_button_text = 'I Commented On This Post';
            var font_awesome_icon = '<i class="fab fa-instagram"></i>';
  
            // Non-English
            if(language !== 'en') {
              
              var input_header = 'Instagram: ' + translate['leave_a_comment'] + ' @' + entry_title_db;
              var link_button_text = translate['open_link'];
              var verify_header = translate['what_username_did_you_use'];
              var input_placeholder = translate['username'];
              var verify_button_text = translate['submit'];
              
            }
  
        } else if(entry_method == 'instagram_repost') {
  
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var input_category = 2;
            var require_verification = 1;
            var require_verification_checked_by_default = 1;
            var require_verification_header = 'Require user verification';
            var entry_method_handle = 'Instagram Repost';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/instagram-entry-methods';
            var entry_method_handle_hint = entry_method_handle;
            var entry_link_header = 'Instagram Post URL';
            var entry_link_text = '';
            var entry_link_placeholder = 'https://www.instagram.com/p/BelF2mYlj58';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'instagram_s.png';
            var background_color = '#3f729b';
            var entry_link_error = 'Invalid Instagram Post URL';
            var entry_substring_match_error = 'Enter an Instagram Post URL';
            var link_button_text = 'Visit & repost this into your profile';
            var input_header = 'Visit & repost on Instagram.';
            var verify_header = 'What username did you use to repost this?';
            var input_placeholder = 'Username';
            var verify_button_text = 'I Reposted This';
            var font_awesome_icon = '<i class="fab fa-instagram"></i>';
    
            // Non-English
            if(language !== 'en') {
              
              var input_header = 'Instagram: Repost';
              var link_button_text = translate['open_link'];
              var verify_header = translate['what_username_did_you_use'];
              var input_placeholder = translate['username'];
              var verify_button_text = translate['submit'];
              
            }
          
      } else if(entry_method == 'instagram_follow') {
          
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_link_header = 'Instagram account @';
          var entry_link_placeholder = 'SweepWidget';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'instagram_s.png';
          var background_color = '#3f729b';
          var host_name = 'instagram.com/';
          var link_prepend = 'https://instagram.com/';
          var entry_link_db_end_uri = entry_link_db_end_uri.replace(host_name, '');
          var entry_link_error = 'Instagram account @';
          var entry_substring_match_error = 'Enter an Instagram username (not a link)';
          var link_button_text = 'Visit & Follow @' + entry_link_db_end_uri;
          var entry_method_handle = 'Instagram Follow';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/instagram-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Follow <strong>@SomeName</strong> On Instagram';
          var input_header = 'Visit and follow @' + entry_link_db_end_uri + ' on Instagram by manually clicking on the button below.';
          var verify_header = 'What username did you follow with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Followed';
          var font_awesome_icon = '<i class="fab fa-instagram"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Instagram: ' + translate['follow'] + ' <strong>@' + entry_link_db_end_uri + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      }
  
      else if(entry_method == 'twitter_follow') {
          
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var daily = 0;
          var input_category = 3; // For API change to 3
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_link_header = 'Twitter account @';
          var entry_link_placeholder = 'SweepWidget';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'twitter_s.png';
          var background_color = '#55acee';
          var host_name = 'twitter.com/';
          var link_prepend = 'https://twitter.com/';
          var entry_link_db_end_uri = entry_link_db_end_uri.replace(host_name, '');
          var entry_link_error = 'Twitter account @';
          var entry_substring_match_error = 'Enter Twitter username (not a link)';
          var link_button_text = 'Click To Follow @' + entry_link_db_end_uri;
          var input_header = '';
          var entry_method_handle = 'Twitter Follow';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/twitter-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Follow <strong>@SomeName</strong> On Twitter';
          var verify_header = 'What username did you follow with?'; // For API, mute this
          var input_placeholder = 'Username'; // For API, mute this
          var verify_button_text = 'I Followed'; // For API, mute this
          var font_awesome_icon = '<i class="fab fa-twitter"></i>';
             
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Twitter: ' + translate['follow'] + ' <strong>@' + entry_link_db_end_uri + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use']; // For API, mute this
            var input_placeholder = translate['username']; // For API, mute this
            var verify_button_text = translate['submit']; // For API, mute this

          }
          
      } else if(entry_method == 'twitter_tweet') {
          
          var entry_amount = 1;
          var entry_textarea = 1;
          var required = 1;
          var daily = 1;
          var entry_has_group = 1;
          var input_category = 3;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_amount_header = 'Number of entries each tweet is worth';
          var entry_method_handle = 'Twitter Post A Tweet';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/twitter-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Post A Tweet';
          var entry_textarea_header = 'Your Tweet';
          var entry_textarea_placeholder = '280 characters max.';
          var entry_textarea_max_length = 280;
          var entry_textarea_error = 'Your Tweet';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'twitter_s.png';
          var background_color = '#55acee';
          var link_button_text = 'Tweet';
          var input_header = 'To get credit for this entry, click here to write a tweet:';
          var verify_header = 'Paste in the tweet URL &nbsp;<a class="tooltip_question_mark" style="margin-top:-4px; display:inline-block;" target="_blank" rel="nofollow" href="https://sweepwidget.com/docs/how-to-find-a-direct-tweet-url"><i class="fas fa-question-circle"></i></a>'; // For API, mute this
          var input_placeholder = ''; // For API, mute this
          var verify_button_text = 'I Tweeted'; // For API, mute this
          var font_awesome_icon = '<i class="fab fa-twitter"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var link_button_text = 'Tweet';
            var verify_header = translate['where_is_your_link'] + ' &nbsp;<a class="tooltip_question_mark" style="margin-top:-4px; display:inline-block;" target="_blank" rel="nofollow" href="https://sweepwidget.com/docs/how-to-find-a-direct-tweet-url"><i class="fas fa-question-circle"></i></a>'; // For API, mute this
            var verify_button_text = translate['submit']; // For API, mute this
            
          }
          
      } else if(entry_method == 'twitter_retweet') {
          
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var daily = 0;
          var input_category = 3; // Change to 3 for API
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Retweet A Tweet';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/twitter-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Twitter Retweet';
          var entry_link_header = 'Tweet URL &nbsp;<a class="tooltip_question_mark" style="margin-top:-4px; display:inline-block;" target="_blank" rel="nofollow" href="https://sweepwidget.com/docs/how-to-find-a-direct-tweet-url"><i class="fas fa-question-circle"></i></a>';
          var entry_link_placeholder = 'https://twitter.com/SweepWidget/status/123456789';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'twitter_s.png';
          var background_color = '#55acee';
          var entry_link_error = 'Tweet URL';
          var entry_substring_match_error = 'Tweet URL must contain "twitter"';
          var link_button_text = 'Retweet this tweet';
          var host_name = 'twitter.com/';
          var input_header = '';
          var verify_header = 'What\'s your Twitter username that you retweeted with?'; // For API, mute this
          var input_placeholder = 'Username'; // For API, mute this
          var verify_button_text = 'I Retweeted'; // For API, mute this
          var font_awesome_icon = '<i class="fab fa-twitter"></i>';
  
          // Non-English
          if(language !== 'en') {
            
            var link_button_text = 'Retweet';
            var verify_header = translate['what_username_did_you_use']; // For API, mute this
            var input_placeholder = translate['username']; // For API, mute this
            var verify_button_text = translate['submit']; // For API, mute this
            
          }
          
      } else if(entry_method == 'feedburner') {
          
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_link_header = 'FeedBurner Feed URL';
          var entry_link_placeholder = 'http://feeds.feedburner.com/Styleslum';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'feedburner_s.png';
          var background_color = '#f26522';
          var entry_link_error = 'FeedBurner Feed URL';
          var host_name = 'feeds.feedburner.com/';
          var entry_link_db_end_uri = entry_link_db_end_uri.replace(host_name, '');
          var entry_substring_match_error = 'FeedBurner Feed URL must contain "feedburner"';
          var link_button_text = 'Subscribe';
          var input_header = 'Click button to subscribe to "' + entry_link_db_end_uri + '" on FeedBurner.';
          var entry_method_handle = 'FeedBurner Subscribe';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/rss-feedburner-entry-methods';
          var entry_method_handle_hint ='Subscribe To <strong>SomeName</strong> On FeedBurner';
          var verify_header = 'What email address did you subscribe with?';
          var input_placeholder = 'youremail@example.com';
          var verify_button_text = 'I Subscribed';
          var font_awesome_icon = '<i class="fas fa-fire-alt"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Feedburner: ' + translate['please_subscribe'];
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_email_address_did_you_use'];
            var input_placeholder = 'youremail@example.com';
            var verify_button_text = translate['confirm'];
            
          }
          
      } else if(entry_method == 'feedpress') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'FeedPress Subscribe To Newsletter';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/feedpress-entry-method';
          var entry_method_handle_hint = '<strong>Hint: </strong> Subscribe To Our FeedPress Newsletter';
          var entry_title_header = 'FeedPress Newsletter Name';
          var entry_title_placeholder = 'SweepWidget';
          var entry_link_header = 'FeedPress Subscription URL';
          var entry_link_placeholder = 'http://feedpress.it/e/mailverify?feed_id=sweepwidget';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'feedpress_s.png';
          var background_color = '#cc2900';
          var entry_title_error = 'FeedPress Newsletter Name';
          var entry_link_error = 'Blog URL';
          var entry_substring_match_error = 'FeedPress Subscription URL must contain the substring: "mailverify"';
          var link_button_text = 'Click To Subscribe';
          var input_header = 'Click button to subscribe to <strong>' + entry_title_db + '</strong> newsletter on FeedPress.';
          var verify_header = 'What email address did you subscribe with?';
          var input_placeholder = 'youremail@example.com';
          var verify_button_text = 'I Subscribed';
          var font_awesome_icon = '<i class="fas fa-heart"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'FeedPress: ' + translate['please_subscribe'];
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_email_address_did_you_use'];
            var input_placeholder = 'youremail@example.com';
            var verify_button_text = translate['confirm'];
            
          }
          
      } else if(entry_method == 'rss') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Subscribe To RSS Feed';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/rss-feedburner-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Subscribe To <strong>SomeName</strong> RSS Feed';
          var entry_title_header = 'RSS Feed Title';
          var entry_title_placeholder = 'SweepWidget';
          var entry_link_header = 'RSS Feed URL';
          var entry_link_placeholder = 'http://yourwebsite.com/rss';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'rss_s.png';
          var background_color = '#f26522';
          var entry_title_error = 'RSS Feed Title';
          var entry_link_error = 'RSS Feed URL';
          var input_header = 'Click button to Subscribe <strong>' + entry_title_db + '</strong> RSS feed.';
          var link_button_text = 'Go Visit and Subscribe to this RSS Feed';
          var verify_header = 'What email address did you subscribe with?';
          var input_placeholder = 'youremail@example.com';
          var verify_button_text = 'I Subscribed';
          var font_awesome_icon = '<i class="fas fa-rss"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'RSS: ' + translate['please_subscribe'];
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_email_address_did_you_use'];
            var input_placeholder = 'youremail@example.com';
            var verify_button_text = translate['confirm'];
            
          }
          
      } else if(entry_method == 'bloglovin_follow') {
             
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Bloglovin Follow\'';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/bloglovin-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Follow <strong>@SomeName</strong> On Bloglovin\'';
          var entry_title_header = 'Bloglovin\' Title';
          var entry_title_placeholder = 'Smitten Kitchen';
          var entry_link_header = 'Bloglovin\' URL';
          var entry_link_placeholder = 'https://www.bloglovin.com/blogs/smitten-kitchen-19344';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'bloglovin_s.png';
          var background_color = '#222';
          var entry_title_error = 'Bloglovin\' Title';
          var entry_link_error = 'Bloglovin\' URL';
          var entry_substring_match_error = 'Bloglovin\' URL must contain "bloglovin"';
          var input_header = 'Click link to visit <strong>' + entry_title_db + '</strong> on Bloglovin\', then follow them.';
          var link_button_text = 'Go Visit and Follow <strong>' + entry_title_db + '</strong> Blog';
          var verify_header = 'What username did you follow with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Followed';
          var font_awesome_icon = '<i class="fas fa-blog"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Bloglovin\': ' + translate['follow'] + ' <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'soundcloud_follow') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_title_header = 'Artist Name';
          var entry_title_placeholder = '';
          var entry_link_header = 'Link To Artist Page';
          var entry_link_placeholder = 'https://soundcloud.com/milesdavisofficial';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'soundcloud_s.png';
          var background_color = '#ff3a00';
          var host_name = 'soundcloud.com/';
          var entry_link_db_end_uri = entry_link_db_end_uri.replace(host_name, '');
          var entry_title_error = 'Artist Name';
          var entry_link_error = 'Link To Artist Page';
          var entry_substring_match_error = 'User URL must contain "soundloud"';
          var link_button_text = 'Visit and Follow <strong>' + entry_link_db_end_uri + '</strong>';
          var input_header = 'Follow <strong>' + entry_link_db_end_uri + '</strong> on SoundCloud';
          var entry_method_handle = 'SoundCloud Follow Artist';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/soundcloud-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Follow <strong>Artist Name</strong> On SoundCloud';
          var verify_header = 'What username did you follow with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Followed';
          var font_awesome_icon = '<i class="fab fa-soundcloud"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'SoundCloud: ' + translate['follow'] + ' <strong>' + entry_link_db_end_uri + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'soundcloud_like_song') {

            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var input_category = 2;
            var require_verification = 1;
            var require_verification_checked_by_default = 1;
            var require_verification_header = 'Require user verification';
            var entry_title_header = 'Song Title';
            var entry_title_placeholder = '';
            var entry_link_header = 'Link To Song';
            var entry_link_placeholder = 'https://soundcloud.com/milesdavisofficial';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'soundcloud_s.png';
            var background_color = '#ff3a00';
            var host_name = 'soundcloud.com/';
            var entry_title_error = 'Song Title';
            var entry_link_error = 'Link To Song';
            var entry_substring_match_error = 'User URL must contain "soundcloud"';
            var link_button_text = 'Visit and like song';
            var input_header = 'Like song <strong>' + entry_title_db + '</strong> on SoundCloud';
            var entry_method_handle = 'SoundCloud Like Song';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/soundcloud-entry-methods';
            var entry_method_handle_hint = '<strong>Hint: </strong> Like Song <strong>Song Title</strong> On SoundCloud';
            var verify_header = 'What username did you like this song with?';
            var input_placeholder = 'Username';
            var verify_button_text = 'I Liked This Song';
            var font_awesome_icon = '<i class="fab fa-soundcloud"></i>';

            // Non-English
            if(language !== 'en') {
                    
                var input_header = 'Soundcloud: ' + translate['like_a_song'] + ' <strong>' + entry_title_db + '</strong>';
                var link_button_text = translate['open_link'];
                var verify_header = translate['what_username_did_you_use'];
                var input_placeholder = translate['username'];
                var verify_button_text = translate['submit'];
                
            }
            
      } else if(entry_method == 'soundcloud_repost_song') {

            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var input_category = 2;
            var require_verification = 1;
            var require_verification_checked_by_default = 1;
            var require_verification_header = 'Require user verification';
            var entry_title_header = 'Song Title';
            var entry_title_placeholder = '';
            var entry_link_header = 'Link To Song';
            var entry_link_placeholder = 'https://soundcloud.com/milesdavisofficial';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'soundcloud_s.png';
            var background_color = '#ff3a00';
            var host_name = 'soundcloud.com/';
            var entry_title_error = 'Song Title';
            var entry_link_error = 'Link To Song';
            var entry_substring_match_error = 'User URL must contain "soundcloud"';
            var link_button_text = 'Visit &amp; Repost Song';
            var input_header = 'Visit song <strong>' + entry_title_db + '</strong> on SoundCloud and repost';
            var entry_method_handle = 'SoundCloud Repost Song';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/soundcloud-entry-methods';
            var entry_method_handle_hint = '<strong>Hint: </strong> Repost <strong>Song Title</strong> On SoundCloud';
            var verify_header = 'Link to where you reposted this song?';
            var input_placeholder = 'https://soundcloud.com/link-to-where-i-reposted';
            var verify_button_text = 'I Reposted This Song';
            var font_awesome_icon = '<i class="fab fa-soundcloud"></i>';

            // Non-English
            if(language !== 'en') {
                
                var input_header = 'Soundcloud: ' + translate['repost'] + ' <strong>' + entry_title_db + '</strong>';
                var link_button_text = translate['open_link'];
                var verify_header = translate['what_username_did_you_use'];
                var input_placeholder = translate['username'];
                var verify_button_text = translate['submit'];
                
            }
            
        } else if(entry_method == 'soundcloud_submit_song') {
  
            var entry_amount = 1;
            var required = 1;
            var daily = 1;
            var input_category = 4;
            var additional_instructions = 1;
            var require_verification = 1;
            var require_verification_checked_by_default = 1;
            var require_verification_header = 'Require user verification';
            var entry_method_handle = 'SoundCloud Submit A Song';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/soundcloud-entry-methods';
            var entry_method_handle_hint = entry_method_handle;
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'soundcloud_s.png';
            var background_color = '#ff3a00';
            var entry_substring_match_error = 'SoundCloud URL must contain "soundcloud"';
            var input_header = 'Enter a Song URL in the input box below and click button to submit your song';
            var verify_header = 'Provide the link to the song you submitted';
            var input_placeholder = 'https://soundcloud.com/my-song';
            var verify_button_text = 'I Submitted A Song';
            var font_awesome_icon = '<i class="fab fa-soundcloud"></i>';
    
            // Non-English
            if(language !== 'en') {
                
                var input_header = 'Soundcloud: ' + translate['submit_a_song'];
                var verify_header = translate['where_is_the_link_to_your_submission'];
                var input_placeholder = 'https://soundcloud.com/my-song';
                var verify_button_text = translate['submit'];
                
            }
            
        } else if(entry_method == 'soundcloud_listen_to_song') {

            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var input_category = 2;
            var entry_title_header = 'Song Title';
            var entry_title_placeholder = '';
            var entry_link_header = 'Link To Song';
            var entry_link_placeholder = 'https://soundcloud.com/milesdavisofficial';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'soundcloud_s.png';
            var background_color = '#ff3a00';
            var host_name = 'soundcloud.com/';
            var entry_title_error = 'Song Title';
            var entry_link_error = 'Link To Song';
            var entry_substring_match_error = 'User URL must contain "soundcloud"';
            var link_button_text = 'Visit and listen to song';
            var input_header = 'Listen to song <strong>' + entry_title_db + '</strong> on SoundCloud';
            var entry_method_handle = 'SoundCloud Listen To Song';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/soundcloud-entry-methods';
            var entry_method_handle_hint = '<strong>Hint: </strong> Listen To Song <strong>Song Title</strong> On SoundCloud';
            var font_awesome_icon = '<i class="fab fa-soundcloud"></i>';
    
            // Non-English
            if(language !== 'en') {
                
                var input_header = 'Soundcloud: ' + translate['listen_to_a_song'];
                var link_button_text = translate['open_link'];
                
            }
            
        } else if(entry_method == 'spotify_follow') {
          
            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var input_category = 2;
            var require_verification = 1;
            var require_verification_checked_by_default = 1;
            var require_verification_header = 'Require user verification';
            var entry_title_header = 'Artist Name';
            var entry_title_placeholder = '';
            var entry_link_header = 'Link To Artist Page';
            var entry_link_placeholder = 'https://open.spotify.com/artist/artist-name';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'spotify_s.png';
            var background_color = '#1db954';
            var host_name = 'spotify.com/';
            var entry_title_error = 'Artist Name';
            var entry_link_error = 'Link To Artist Page';
            var entry_substring_match_error = 'User URL must contain "spotify"';
            var link_button_text = 'Visit and Follow <strong>' + entry_title_db + '</strong>';
            var input_header = 'Follow <strong>' + entry_title_db + '</strong> on Spotify';
            var entry_method_handle = 'Spotify Follow Artist';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/spotify-entry-methods';
            var entry_method_handle_hint = '<strong>Hint: </strong> Follow <strong>Artist Name</strong> On Spotify';
            var verify_header = 'What username did you follow with?';
            var input_placeholder = 'Username';
            var verify_button_text = 'I Followed';
            var font_awesome_icon = '<i class="fab fa-spotify"></i>';
                
            // Non-English
            if(language !== 'en') {
                    
                var input_header = 'Spotify: ' + translate['follow'] + ' <strong>' + entry_title_db + '</strong>';
                var link_button_text = translate['open_link'];
                var verify_header = translate['what_username_did_you_use'];
                var input_placeholder = translate['username'];
                var verify_button_text = translate['submit'];
                
            }
            
        } else if(entry_method == 'spotify_listen_to_song') {

            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var input_category = 2;
            var entry_title_header = 'Song Title';
            var entry_title_placeholder = '';
            var entry_link_header = 'User URL';
            var entry_link_placeholder = 'https://open.spotify.com/artist/link-to-song';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'spotify_s.png';
            var background_color = '#1db954';
            var host_name = 'spotify.com/';
            var entry_title_error = 'Song Title';
            var entry_link_error = 'User URL';
            var entry_substring_match_error = 'User URL must contain "spotify"';
            var link_button_text = 'Visit and listen to song';
            var input_header = 'Listen to song <strong>' + entry_title_db + '</strong> on Spotify';
            var entry_method_handle = 'Spotify Listen To Song';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/spotify-entry-methods';
            var entry_method_handle_hint = '<strong>Hint: </strong> Listen To <strong>Song Title</strong> On Spotify';
            var font_awesome_icon = '<i class="fab fa-spotify"></i>';
    
            // Non-English
            if(language !== 'en') {
                
                var input_header = 'Spotify: ' + translate['listen_to_a_song'];
                var link_button_text = translate['open_link'];

            }
              
        } else if(entry_method == 'spotify_follow_playlist') {
          
            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var input_category = 2;
            var require_verification = 1;
            var require_verification_checked_by_default = 1;
            var require_verification_header = 'Require user verification';
            var entry_title_header = 'Playlist Name';
            var entry_title_placeholder = '';
            var entry_link_header = 'Link To Playlist';
            var entry_link_placeholder = 'https://open.spotify.com/playlist';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'spotify_s.png';
            var background_color = '#1db954';
            var host_name = 'spotify.com/';
            var entry_title_error = 'Playlist Name';
            var entry_link_error = 'Link To Playlist';
            var entry_substring_match_error = 'User URL must contain "spotify"';
            var link_button_text = 'Visit and Follow <strong>' + entry_title_db + '</strong>';
            var input_header = 'Follow <strong>' + entry_title_db + '</strong> on Spotify';
            var entry_method_handle = 'Spotify Follow Playlist';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/spotify-entry-methods';
            var entry_method_handle_hint = '<strong>Hint: </strong> Follow <strong>Playlist</strong> On Spotify';
            var verify_header = 'What username did you follow with?';
            var input_placeholder = 'Username';
            var verify_button_text = 'I Followed';
            var font_awesome_icon = '<i class="fab fa-spotify"></i>';
                
            // Non-English
            if(language !== 'en') {
                    
                var input_header = 'Spotify: ' + translate['follow'] + ' <strong>' + entry_title_db + '</strong>';
                var link_button_text = translate['open_link'];
                var verify_header = translate['what_username_did_you_use'];
                var input_placeholder = translate['username'];
                var verify_button_text = translate['submit'];
                
            }
            
        } else if(entry_method == 'mixer_follow') {
          
            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var input_category = 2;
            var require_verification = 1;
            var require_verification_checked_by_default = 1;
            var require_verification_header = 'Require user verification';
            var entry_title_header = 'User Name';
            var entry_title_placeholder = '';
            var entry_link_header = 'User URL';
            var entry_link_placeholder = 'https://mixer.com/user-profile';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'mixer_s.png';
            var background_color = '#0075d5';
            var host_name = 'mixer.com/';
            var entry_link_db_end_uri = entry_link_db_end_uri.replace(host_name, '');
            var entry_title_error = 'Song Title';
            var entry_link_error = 'User URL';
            var entry_substring_match_error = 'User URL must contain "soundloud"';
            var link_button_text = 'Visit and Follow @' + entry_link_db_end_uri;
            var input_header = 'Follow @' + entry_link_db_end_uri + ' on Mixer';
            var entry_method_handle = 'Mixer Follow';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/mixer-entry-methods';
            var entry_method_handle_hint = '<strong>Hint: </strong> Follow <strong>Username</strong> On Mixer';
            var verify_header = 'What username did you follow with?';
            var input_placeholder = 'Username';
            var verify_button_text = 'I Followed';
            var font_awesome_icon = '<i class="fab fa-mixer"></i>';
             
            // Non-English
            if(language !== 'en') {
                    
                var input_header = 'Mixer: ' + translate['follow'] + ' <strong>' + entry_link_db_end_uri + '</strong>';
                var link_button_text = translate['open_link'];
                var verify_header = translate['what_username_did_you_use'];
                var input_placeholder = translate['username'];
                var verify_button_text = translate['submit'];
                
            }
          
        } else if(entry_method == 'snapchat_follow') {
        
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var daily = 0;
            var input_category = 2;
            var require_verification = 1;
            var require_verification_checked_by_default = 1;
            var require_verification_header = 'Require user verification';
            var entry_link_header = 'Snapchat username @';
            var entry_link_placeholder = 'SweepWidget';
            var color = '#000';
            var entry_icon_path = icon_base_path + 'snapchat_s.png';
            var background_color = '#fffc00';
            var host_name = 'snapchat.com/';
            var link_prepend = 'https://snapchat.com/add/';
            var entry_link_db_end_uri = /[^/]*$/.exec(entry_link_db_end_uri)[0];
            var entry_link_error = 'Snapchat username @';
            var entry_substring_match_error = 'Enter Snapchat username (not a link)';
            var link_button_text = 'Click To Follow @' + entry_link_db_end_uri;
            var input_header = '';
            var entry_method_handle = 'Snapchat Follow User';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/snapchat-entry-methods';
            var entry_method_handle_hint = '<strong>Hint: </strong> Follow <strong>Username</strong> On Snapchat';
            var verify_header = 'What username did you follow with?';
            var input_placeholder = 'Username';
            var verify_button_text = 'I Followed';
            var font_awesome_icon = '<i class="fab fa-snapchat"></i>';
                 
            // Non-English
            if(language !== 'en') {
                  
                var input_header = 'Snapchat: ' + translate['follow'] + ' <strong>' + entry_link_db_end_uri + '</strong>';
                var link_button_text = translate['open_link'];
                var verify_header = translate['what_username_did_you_use'];
                var input_placeholder = translate['username'];
                var verify_button_text = translate['submit'];
                
            }
          
      } else if(entry_method == 'myspace_follow') {
            
            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var input_category = 2;
            var require_verification = 1;
            var require_verification_checked_by_default = 1;
            var require_verification_header = 'Require user verification';
            var entry_title_header = 'Artist Name';
            var entry_title_placeholder = '';
            var entry_link_header = 'Link To Artist Page';
            var entry_link_placeholder = 'https://open.myspace.com/artist/artist-name';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'myspace_s.png';
            var background_color = '#00008B';
            var host_name = 'myspace.com/';
            var entry_title_error = 'Artist Name';
            var entry_link_error = 'Link To Artist Page';
            var entry_substring_match_error = 'User URL must contain "myspace"';
            var link_button_text = 'Visit and Follow <strong>' + entry_title_db + '</strong>';
            var input_header = 'Follow <strong>' + entry_title_db + '</strong> on Myspace';
            var entry_method_handle = 'Myspace Follow Artist';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/category/entry-methods/myspace';
            var entry_method_handle_hint = '<strong>Hint: </strong> Follow <strong>Artist Name</strong> On Myspace';
            var verify_header = 'What username did you follow with?';
            var input_placeholder = 'Username';
            var verify_button_text = 'I Followed';
            var font_awesome_icon = '<i class="fas fa-share-alt-square"></i>';
          
            // Non-English
            if(language !== 'en') {
                  
                var input_header = 'Myspace: ' + translate['follow'] + ' <strong>' + entry_title_db + '</strong>';
                var link_button_text = translate['open_link'];
                var verify_header = translate['what_username_did_you_use'];
                var input_placeholder = translate['username'];
                var verify_button_text = translate['submit'];
                
            }
          
      } else if(entry_method == 'etsy_follow') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Favorite Etsy Shop';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/etsy-entry-methods';
          var entry_method_handle_hint = entry_method_handle;
          var entry_title_header = 'Etsy Shop Name';
          var entry_title_placeholder = 'Muse411';
          var entry_link_header = 'Etsy Shop URL';
          var entry_link_text = 'https://www.etsy.com/';
          var entry_link_placeholder = 'https://www.etsy.com/shop/Muse411';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'etsy_s.png';
          var background_color = '#eb6d20';
          var entry_title_error = 'Etsy Shop Name';
          var entry_link_error = 'Etsy Shop URL';
          var entry_substring_match_error = 'Etsy Shop URL must contain "etsy"';
          var input_header = 'Click link to visit <strong>' + entry_title_db + '</strong> on Etsy and follow them.';
          var link_button_text = 'Visit & Favourite @' + entry_title_db;
          var verify_header = 'What username did you follow with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Followed';
          var font_awesome_icon = '<i class="fab fa-etsy"></i>';
        
          // Non-English
          if(language !== 'en') {
              
            var input_header = 'Etsy: ' + translate['follow'] + ' <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
                  
      } else if(entry_method == 'etsy_item') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Favorite Etsy Item';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/etsy-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Favorite Etsy Item';
          var entry_title_header = 'Etsy Item Name';
          var entry_title_placeholder = 'Moon Necklace';
          var entry_link_header = 'Etsy Item URL';
          var entry_link_text = 'https://www.etsy.com/';
          var entry_link_placeholder = 'https://www.etsy.com/listing/160774209/moon-necklace-18k-vermeil-crescent-moon';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'etsy_s.png';
          var background_color = '#eb6d20';
          var entry_title_error = 'Etsy Item Name';
          var entry_link_error = 'Etsy Item URL';
          var entry_substring_match_error = 'Etsy Item URL must contain "etsy"';
          var input_header = 'Click link to visit <strong>' + entry_title_db + '</strong> item on Etsy.  Then be sure to favorite it.';
          var link_button_text = 'Visit & Favourite Etsy Item';
          var verify_header = 'What username did you favourite with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Favorited This Item';
          var font_awesome_icon = '<i class="fab fa-etsy"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Etsy: ' + translate['visit_and_like'] + ' @' + entry_title_db;
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'ebay_follow') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Follow Ebay Shop';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/ebay-shop-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Follow <strong>@SomeName</strong> Ebay Shop';
          var entry_title_header = 'Ebay Shop Username';
          var entry_title_placeholder = 'Quality Cellz';
          var entry_link_header = 'Ebay Shop URL';
          var entry_link_text = 'http://www.ebay.com/';
          var entry_link_placeholder = 'http://www.ebay.com/usr/qualitycellz';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'ebay_s.png';
          var background_color = '#86b817';
          var entry_title_error = 'Ebay Shop Username';
          var entry_link_error = 'Ebay Shop URL';
          var entry_substring_match_error = 'Ebay Shop URL must contain "ebay"';
          var input_header = 'Click link to visit <strong>' + entry_title_db + '</strong> on Ebay and follow them.';
          var link_button_text = 'Visit & Follow @' + entry_title_db;
          var verify_header = 'What username did you follow with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Followed';
          var font_awesome_icon = '<i class="fab fa-ebay"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Ebay: ' + translate['follow'] + ' <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'pinterest_follow_user') {
          
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Pinterest Follow User';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/pinterest-entry-methods';
          var host_name = 'pinterest.com/';
          var entry_link_db_end_uri = entry_link_db_end_uri.replace(host_name, '');
          var entry_method_handle_hint = '<strong>Hint: </strong> Follow <strong>@SomeName</strong> On Pinterest';
          var entry_link_header = 'Username of person to follow';
          var entry_link_placeholder = 'SweepWidget';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'pinterest_s.png';
          var background_color = '#bd081c';
          var entry_link_error = 'Username is required';
          var link_prepend = 'https://www.pinterest.com/';
          var link_button_text = 'Click to follow @' + entry_link_db_end_uri;
          var input_header = 'Click button to follow @' + entry_link_db_end_uri + ' on Pinterest.';
          var verify_header = 'What username did you follow with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Followed';
          var font_awesome_icon = '<i class="fab fa-pinterest-p"></i>';
             
          // Non-English
          if(language !== 'en') {
             
            var input_header = 'Pinterest: ' + translate['follow'] + ' <strong>' + entry_link_db_end_uri + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'pinterest_follow_board') {
  
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Pinterest Follow Board';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/pinterest-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Follow Board On Pinterest';
          var entry_title_header = 'Board Name';
          var entry_title_placeholder = 'Board Name';
          var entry_link_header = 'Pinterest board URL';
          var entry_link_placeholder = 'https://www.pinterest.com/username/board';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'pinterest_s.png';
          var background_color = '#bd081c';
          var entry_link_error = 'Pinterest board URL';
          var entry_title_error = 'Board Name is required';
          var entry_substring_match_error = 'Pinterest URL must contain "pinterest"';
          var link_button_text = 'Click to follow this Board';
          var input_header = 'Click button to follow <strong>' + entry_title_db + '</strong> Board on Pinterest';
          var verify_header = 'What username did you follow with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Followed This Board';
          var font_awesome_icon = '<i class="fab fa-pinterest-p"></i>';
  
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Pinterest: ' + translate['follow_a_board'] + ' <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'pinterest_submit_board') {
  
          var entry_amount = 1;
          var required = 1;
          var daily = 1;
          var input_category = 4;
          var additional_instructions = 1;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Pinterst Submit A Board';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/pinterest-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Submit A Board On Pinterest';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'pinterest_s.png';
          var background_color = '#bd081c';
          var input_header = 'Copy a Pinterest Board URL and paste it in the input box below and Click button to Submit it!';
          var verify_header = 'Which Pinterest Board you want to submit?';
          var input_placeholder = 'https://www.pinterest.com/user/board/';
          var verify_button_text = 'I Submitted A Board';
          var font_awesome_icon = '<i class="fab fa-pinterest-p"></i>';
  
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Pinterest: ' + translate['submit_a_board'];
            var verify_header = translate['where_is_the_link_to_your_submission'];
            var input_placeholder = 'https://www.pinterest.com/user/board/';
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'pinterest_submit_pin') {
  
          var entry_amount = 1;
          var required = 1;
          var daily = 1;
          var input_category = 4;
          var additional_instructions = 1;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Pinterst Submit A Pin';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/pinterest-entry-methods';
          var entry_method_handle_hint ='Submit A Pin';
          var entry_icon_path = icon_base_path + 'pinterest_s.png';
          var color = '#fff';
          var background_color = '#bd081c';
          var input_header = 'Copy a Pinterest media / pin URL and paste it in the input box below and Click button to Submit it!';
          var verify_header = 'Which Pinterest media / pin you want to submit?';
          var input_placeholder = 'https://www.pinterest.com/pin/123/';
          var verify_button_text = 'I Submitted A Pin';
          var font_awesome_icon = '<i class="fab fa-pinterest-p"></i>';
  
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Pinterest: ' + translate['submit'] + ' <strong>Pin</strong>';
            var verify_header = translate['where_is_the_link_to_your_submission'];
            var input_placeholder = 'https://www.pinterest.com/pin/123/';
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'pinterest_repin_pin') {
          
          var input_category = 2;
          var required = 1;
          var entry_amount = 1;
          var entry_link = 1;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_link_header = 'Pin URL &nbsp;<a class="tooltip_question_mark" style="margin-top:-4px; display:inline-block;" target="_blank" rel="nofollow" href="https://www.wix.com/support/html5/article/finding-your-pinterest-pin-url"><i class="fas fa-question-circle"></i></a>';
          var entry_link_placeholder = 'https://www.pinterest.com/pin/99360735500167749/';
          var entry_link_error = 'Pin URL';
          var entry_substring_match_error = 'Pin URL must contain "pinterest"';
          var entry_icon_path = icon_base_path + 'pinterest_s.png';
          var entry_method_handle = 'Pinterst Repin An Image';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/pinterest-entry-methods';
          var entry_method_handle_hint = entry_method_handle;
          var color = '#fff';
          var background_color = '#bd081c';
          var link_button_text = 'Click to Pin this image';
          var input_header = 'Click the below button and Pin the following pin to one of your boards.<br/>';
          var verify_header = 'What username did you save this pin with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Repinned A Pin';
          var font_awesome_icon = '<i class="fab fa-pinterest-p"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Pinterest <strong>Repin</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'youtube_visit_channel') {
          
        var entry_title = 1;
        var entry_link = 1;
        var entry_amount = 1;
        var daily = 1;
        var required = 1;
        var input_category = 2;
        var require_verification = 0;
        var require_verification_checked_by_default = 0;
        var require_verification_header = 'Require user verification';
        var entry_method_handle = 'Youtube Visit Channel';
        var entry_method_docs_link = 'https://sweepwidget.com/docs/youtube-entry-methods';
        var entry_method_handle_hint = '<strong>Hint: </strong> Subscribe To <strong>SomeName</strong> Youtube Channel';
        var entry_title_header = 'Youtube Channel Name';
        var entry_title_placeholder = 'SweepWidget';
        var entry_link_header = 'Youtube Channel URL';
        var entry_link_placeholder = 'https://www.youtube.com/channel/UCAa3V2vauKwyC8vTiUWiftQ';
        var entry_link_validation_error = 'Invalid Youtube Channel URL';
        var color = '#fff';
        var entry_icon_path = icon_base_path + 'youtube_s.png';
        var background_color = '#cd201f';
        var entry_title_error = 'Youtube Channel name';
        var entry_link_error = 'Youtube Channel URL';
        var entry_substring_match_error = 'Youtube Channel URL must contain "youtube"';
        var input_header = 'Visit this <strong>' + entry_title_db + '</strong> Youtube channel.';
        var link_button_text = 'Click to Visit';
        var font_awesome_icon = '<i class="fab fa-youtube"></i>';
        // var verify_header = 'What username did you visit this channel with?';
        // var input_placeholder = 'Username';
        // var verify_button_text = 'I Visited This Channel';
        
        // Non-English
        if(language !== 'en') {
          
          var input_header = 'Youtube: ' + translate['open_link'] + ' @' + entry_title_db;
          var link_button_text = translate['open_link'];
        //   var verify_header = translate['what_username_did_you_use'];
        //   var input_placeholder = translate['username'];
        //   var verify_button_text = translate['submit'];
          
        }
        
      } else if(entry_method == 'youtube_channel_subscribe') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Youtube Subscribe To Channel';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/youtube-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Subscribe To <strong>SomeName</strong> Youtube Channel';
          var entry_title_header = 'Youtube Channel Name';
          var entry_title_placeholder = 'SweepWidget';
          var entry_link_header = 'Youtube Channel URL';
          var entry_link_placeholder = 'https://www.youtube.com/channel/UCAa3V2vauKwyC8vTiUWiftQ';
          //var entry_link_validation = /((http(s):\/\/)?(www\.)?youtube\.com\/((c\/|channel\/|user\/))[a-zA-Z0-9\-]{1,})|((http(s):\/\/)?(www\.)?youtube\.com\/((?!(watch|embed))[\w]{1,}))/g; // (http(s):\/\/)(www\.)?youtube\.com\/(c\/|channel\/|user\/)[a-zA-Z0-9\-]{1,}
          var entry_link_validation_error = 'Invalid Youtube Channel URL';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'youtube_s.png';
          var background_color = '#cd201f';
          var entry_title_error = 'Youtube Channel name';
          var entry_link_error = 'Youtube Channel URL';
          var entry_substring_match_error = 'Youtube Channel URL must contain "youtube"';
          var input_header = 'Subscribe this <strong>' + entry_title_db + '</strong> Youtube channel.';
          var link_button_text = 'Click to Subscribe';
          var verify_header = 'Please enter your Youtube username for verification:';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Subscribed';
          var font_awesome_icon = '<i class="fab fa-youtube"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = translate['subscribe_to_a_channel'] + ': <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'youtube_comment') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var daily = 1;
          var additional_instructions = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Youtube Comment On Video';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/youtube-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Comment On Youtube Video';
          var entry_title_header = 'Youtube Video Name';
          var entry_title_placeholder = 'So many cats';
          var entry_link_header = 'Youtube Video URL';
          var entry_link_placeholder = 'https://www.youtube.com/watch?v=GS2Y_CkaXP0';
          //var entry_link_validation = /http(s):\/\/(www\.)?youtube\.com\/watch\?v\=[a-zA-Z0-9_-]{11}/g; // (&\S+)?
          var entry_link_validation_error = 'Invalid Youtube Video URL';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'youtube_s.png';
          var background_color = '#cd201f';
          var entry_title_error = 'Youtube Video Name';
          var entry_link_error = 'Youtube Video URL';
          var entry_substring_match_error = 'Youtube Video URL must contain "youtube"';
          var input_header = 'Visit and Watch this <strong>' + entry_title_db + '</strong> Youtube Video and comment on it and Click button to Submit it!';
          var link_button_text = 'Visit and Comment on this Youtube Video';
          var verify_header = 'What username did you comment with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Commented';
          var font_awesome_icon = '<i class="fab fa-youtube"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = translate['comment_on_a_video'] + ': <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'youtube_like_video') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var additional_instructions = 0;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Youtube Like A Video';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/youtube-entry-methods';
          var entry_method_handle_hint = entry_method_handle;
          var entry_title_header = 'Youtube Video Name';
          var entry_title_placeholder = 'So many cats';
          var entry_link_header = 'Youtube Video URL';
          var entry_link_placeholder = 'https://www.youtube.com/watch?v=GS2Y_CkaXP0';
          //var entry_link_validation = /http(s):\/\/(www\.)?youtube\.com\/watch\?v\=[a-zA-Z0-9_-]{11}/g; // (&\S+)?
          var entry_link_validation_error = 'Invalid Youtube Video URL';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'youtube_s.png';
          var background_color = '#cd201f';
          var entry_title_error = 'Youtube Video Name';
          var entry_link_error = 'Youtube Video URL';
          var entry_substring_match_error = 'Youtube Video URL must contain "youtube"';
          var input_header = 'Watch and Like this video on Youtube: <strong>' + entry_title_db + '</strong>';
          var link_button_text = 'Like this Youtube video';
          var verify_header = 'What username did you like this video with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Liked This Video';
          var font_awesome_icon = '<i class="fab fa-youtube"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = translate['like_a_video'] + ': <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'youtube_watch') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var daily = 1;
          var input_category = 3;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Youtube Watch Video';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/youtube-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Watch Youtube Video';
          var entry_title_header = 'Youtube Video Name';
          var entry_title_placeholder = 'So many cats';
          var entry_link_header = 'Youtube Video URL';
          var entry_link_placeholder = 'https://www.youtube.com/watch?v=GS2Y_CkaXP0';
          //var entry_link_validation = /http(s):\/\/(www\.)?youtube\.com\/watch\?v\=[a-zA-Z0-9_-]{11}/g; // (&\S+)?
          var entry_link_validation_error = 'Invalid Youtube Video URL';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'youtube_s.png';
          var background_color = '#cd201f';
          var entry_title_error = 'Youtube Video Name';
          var entry_link_error = 'Youtube Video URL';
          var entry_substring_match_error = 'Youtube Video URL must contain "youtube"';
          var input_header = 'Watch this Youtube video: <strong>' + entry_title_db + '</strong>';
          var verify_button_text = 'I Watched This Video';
          var verify_header = '<em>* You can confirm this entry after the video finishes.</em>';
          var font_awesome_icon = '<i class="fab fa-youtube"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = translate['watch_a_video'] + ': <strong>' + entry_title_db + '</strong>';
            var verify_header = translate['you_will_get_credit_after_the_video_is_finished'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'attend_eventbrite_event') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var additional_instructions = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Eventbrite Attend Event';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/eventbrite-entry-methods-sweepwidget';
          var entry_method_handle_hint = '<strong>Hint: </strong> Attend Eventbrite Event';
          var entry_title_header = 'Event name';
          var entry_title_placeholder = 'Bitcoin Workshop';
          var entry_link_header = 'Event URL';
          var entry_link_placeholder = 'https://www.eventbrite.com/e/los-angeles-workshop-develop-a-successful-bitcoin-startup-company-today-tickets-46460233810';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'eventbrite.jpg';
          var background_color = '#ff8000';
          var entry_title_error = 'Event name';
          var entry_link_error = 'Event URL';
          var entry_substring_match_error = 'Event URL must contain "eventbrite"';
          var input_header = 'Click link to visit <strong>' + entry_title_db + '</strong> on Eventbrite. Then RSVP to attend their event.';
          var link_button_text = 'View Event On Eventbrite';
          var verify_header = 'What email address did you RSVP with?';
          var input_placeholder = 'youremail@example.com';
          var verify_button_text = 'I\'m Attending This Event';
          var font_awesome_icon = '<i class="far fa-user"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Eventbrite: ' + translate['signup_for_this_event'] + ': <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'attend_eventbrite_venue') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var additional_instructions = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Eventbrite Attend Venue';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/eventbrite-entry-methods-sweepwidget';
          var entry_method_handle_hint = '<strong>Hint: </strong> Attend Eventbrite Venue';
          var entry_title_header = 'Venue name';
          var entry_title_placeholder = 'Bitcoin Workshop';
          var entry_link_header = 'Venue URL';
          var entry_link_placeholder = 'https://www.eventbrite.com/e/los-angeles-workshop-develop-a-successful-bitcoin-startup-company-today-tickets-46460233810';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'eventbrite.jpg';
          var background_color = '#ff8000';
          var entry_title_error = 'Venue name';
          var entry_link_error = 'Venue URL';
          var entry_substring_match_error = 'Venue URL must contain "eventbrite"';
          var input_header = 'Click link to visit <strong>' + entry_title_db + '</strong> on Eventbrite. Then RSVP to attend their venue.';
          var link_button_text = 'View Venue On Eventbrite';
          var verify_header = 'What email address did you RSVP with?';
          var input_placeholder = 'youremail@example.com';
          var verify_button_text = 'I\m Attending This Venue';
          var font_awesome_icon = '<i class="far fa-user"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Eventbrite: ' + translate['signup_for_this_event'] + ': <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'tumblr_follow') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Tumblr Follow';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/tumblr-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Follow <strong>@SomeName</strong> On Tumblr';
          var entry_title_header = 'Blog Name';
          var entry_title_placeholder = 'Best Of Tumblr';
          var entry_link_header = 'Blog URL';
          var entry_link_placeholder = 'http://best-of-tumblr.tumblr.com/post/149920086151';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'tumblr.png';
          var background_color = '#35465c';
          var entry_title_error = 'Blog name';
          var entry_link_error = 'Blog URL';
          var entry_substring_match_error = 'Blog URL must contain "tumblr"';
          var input_header = 'Click link to visit and follow <strong>' + entry_title_db + '</strong> on Tumblr.';
          var link_button_text = 'Follow @' + entry_title_db;
          var verify_header = 'What username did you follow with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Followed';
          var font_awesome_icon = '<i class="fab fa-tumblr"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Tumblr: ' + translate['follow'] + ' <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'tumblr_like_post') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Tumblr Like A Post';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/tumblr-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Like A Tumblr Post';
          var entry_title_header = 'Post name';
          var entry_title_placeholder = 'Best Of Tumblr';
          var entry_link_header = 'Post URL';
          var entry_link_placeholder = 'http://best-of-tumblr.tumblr.com/post/149920086151';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'tumblr.png';
          var background_color = '#35465c';
          var entry_title_error = 'Post name';
          var entry_link_error = 'Post URL';
          var entry_substring_match_error = 'Post URL must contain "tumblr"';
          var input_header = 'Click link to visit and like <strong>' + entry_title_db + '</strong> post on Tumblr.';
          var link_button_text = 'Like this Post On Tumblr';
          var verify_header = 'What username did you like with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Liked This Post';
          var font_awesome_icon = '<i class="fab fa-tumblr"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Tumblr: ' + translate['like_a_post'] + ' <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'linkedin_share') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'LinkedIn Share';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/linkedin-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Share To LinkedIn Followers';
          var entry_title_header = 'Post Title';
          var entry_title_placeholder = 'My Awesome Post!';
          var entry_link_header = 'Post URL';
          var entry_link_placeholder = 'https://www.mysite.com/post-i-want-to-share';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'linkedin_s.png';
          var background_color = '#0077b5';
          var entry_title_error = 'Post Title';
          var entry_link_error = 'Post URL';
          var entry_substring_match_error = 'URL must contain "http" or "https"';
          var entry_link_db_end_uri = entry_link_db_end_uri.replace(host_name, '');
          var input_header = 'Click the button to share "' + entry_link_db_end_uri + '" on LinkedIn.';
          var verify_header = 'What LinkedIn username did you share with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Shared';
          var font_awesome_icon = '<i class="fab fa-linkedin-in"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Linkedin: ' + translate['share_this_post'] + ' <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'linkedin_follow' ) {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_title_header = 'Company Name';
          var entry_title_placeholder = 'Google';
          var entry_link_header = 'Company Page URL';
          var entry_link_placeholder = 'https://www.linkedin.com/company/google';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'linkedin_s.png';
          var background_color = '#0077b5';
          var entry_title_error = 'Company Name';
          var entry_link_error = 'Company Page URL';
          var host_name = 'linkedin.com/';
          var entry_substring_match_error = 'Company Page URL must contain "linkedin"';
          var input_header = 'Click button to visit and follow <strong>' + entry_title_db + '</strong> on LinkedIn.';
          var entry_method_handle = 'LinkedIn Follow';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/linkedin-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Follow <strong>@SomeName</strong> On LinkedIn';
          var link_button_text = 'Go Visit and Follow @' + entry_title_db;
          var verify_header = 'What username did you follow with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Followed';
          var font_awesome_icon = '<i class="fab fa-linkedin-in"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Linkedin: ' + translate['follow'] + ' <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'reddit_subscribe') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Subscribe To SubReddit';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/reddit-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Subscribe To Our Community On SubReddit';
          var entry_title_header = 'SubReddit Name';
          var entry_title_placeholder = 'Giveaways';
          var entry_link_header = 'SubReddit URL';
          var entry_link_placeholder = 'https://www.reddit.com/r/giveaways';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'reddit.png';
          var background_color = '#5f99cf';
          var entry_title_error = 'SubReddit Name';
          var entry_link_error = 'SubReddit URL';
          var entry_substring_match_error = 'SubReddit URL must contain "reddit"';
          var input_header = 'Click link to visit and subscribe to the <strong>' + entry_title_db + '</strong> on SubReddit.';
          var link_button_text = 'Go Visit and Subscribe @' + entry_title_db;
          var verify_header = 'What username did you subscribe with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Subscribed';
          var font_awesome_icon = '<i class="fab fa-reddit-alien"></i>';
      
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Reddit: ' + translate['please_subscribe'] + ' <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }

        } else if(entry_method == 'reddit_visit_a_page') {
          
            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var daily = 1;
            var required = 1;
            var input_category = 2;
            var entry_method_handle = 'Visit A Reddit Page';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/reddit-entry-methods';
            var entry_method_handle_hint = '<strong>Hint: </strong> Visit A Reddit Page';
            var entry_title_header = 'Page name';
            var entry_title_placeholder = 'Best 80\'s Movies';
            var entry_link_header = 'Page URL';
            var entry_link_placeholder = 'https://www.reddit.com/r/movies/comments/r3eeno/which_80s_schwarzenegger_movie_do_you_prefer/';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'redit.png';
            var background_color = '#5f99cf';
            var entry_title_error = 'Page name';
            var entry_link_error = 'Page URL';
            var entry_substring_match_error = 'Page URL must be a link';
            var input_header = 'Click link to visit "' + entry_title_db + '".';
            var link_button_text = 'Visit ' + entry_title_db + '';
            var font_awesome_icon = '<i class="fab fa-reddit-alien"></i>';
            
            // Non-English
            if(language !== 'en') {
              
              var input_header = translate['open_link'] + ' @' + entry_title_db;
              var link_button_text = translate['open_link'];
              
            }
        
      } else if(entry_method == 'reddit_leave_a_comment') {
          
        var entry_title = 1;
        var entry_link = 1;
        var entry_amount = 1;
        var required = 1;
        var input_category = 2;
        var require_verification = 1;
        var require_verification_checked_by_default = 1;
        var require_verification_header = 'Require user verification';
        var entry_method_handle = 'Leave a Comment On Reddit';
        var entry_method_docs_link = 'https://sweepwidget.com/docs/reddit-entry-methods';
        var entry_method_handle_hint = '<strong>Hint: </strong> Leave a Comment On Reddit';
        var entry_title_header = 'Reddit Page Title';
        var entry_title_placeholder = 'Best 80\'s Movies';
        var entry_link_header = 'Page URL';
        var entry_link_placeholder = 'https://www.reddit.com/r/movies/comments/r3eeno/which_80s_schwarzenegger_movie_do_you_prefer/';
        var color = '#fff';
        var entry_icon_path = icon_base_path + 'reddit.png';
        var background_color = '#5f99cf';
        var entry_title_error = 'Page Title';
        var entry_link_error = 'Page URL';
        var entry_substring_match_error = 'Reddit page URL must contain "reddit"';
        var input_header = 'Click link to visit and comment on this Reddit page: <strong>' + entry_title_db + '</strong>.';
        var link_button_text = 'Visit and leave a comment';
        var verify_header = 'What username did you comment with?';
        var input_placeholder = 'Username';
        var verify_button_text = 'I Commented';
        var font_awesome_icon = '<i class="fab fa-reddit-alien"></i>';
    
        // Non-English
        if(language !== 'en') {
          
          var input_header = 'Reddit: ' + translate['leave_a_comment'] + ' <strong>' + entry_title_db + '</strong>';
          var link_button_text = translate['open_link'];
          var verify_header = translate['what_username_did_you_use'];
          var input_placeholder = translate['username'];
          var verify_button_text = translate['submit'];
          
        }
          
      } else if(entry_method == 'tiktok_visit') {

            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var daily = 1;
            var required = 1;
            var input_category = 2;
            var require_verification = 0;
            var require_verification_checked_by_default = 0;
            var require_verification_header = 'Require user verification';
            var entry_method_handle = 'TikTok Visit User';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/tiktok-entry-method';
            var entry_method_handle_hint = '<strong>Hint: </strong> Visit TikTok User';
            var entry_title_header = 'TikTok name';
            var entry_title_placeholder = 'TikTok name';
            var entry_link_header = 'TikTok profile URL';
            var entry_link_placeholder = 'https://www.tiktok.com/@flighthouse';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'tiktok.jpg';
            var background_color = '#010101';
            var entry_title_error = 'TikTok Username';
            var entry_link_error = 'TikTok profile URL';
            var entry_substring_match_error = 'TikTok URL must contain "tiktok"';
            var input_header = 'Click link to visit and follow <strong>' + entry_title_db + '</strong> on TikTok.';
            var link_button_text = 'Follow @' + entry_title_db;
            var font_awesome_icon = '<i class="fab fa-tiktok"></i>';
            // var verify_header = 'What username did you visit with?';
            // var input_placeholder = 'Username';
            // var verify_button_text = 'I Visited This Page';

        // Non-English
        if(language !== 'en') {
            
          var input_header = 'TikTok: ' + translate['open_link'] + ' @' + entry_title_db;
          var link_button_text = translate['open_link'];
        //   var verify_header = translate['what_username_did_you_use'];
        //   var input_placeholder = translate['username'];
        //   var verify_button_text = translate['submit'];
          
        }
            
      } else if(entry_method == 'discord_join_server') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 3;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Discord Join Server';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/join-discord-server-entry-method';
          var entry_method_handle_hint = '<strong>Hint: </strong> Join Our Discord Server';
          var entry_title_header = 'Discord Server Name';
          var entry_title_placeholder = 'Gamers';
          var entry_link_header = 'Discord URL';
          var entry_link_placeholder = 'https://discordapp.com/invite/T42ANjS';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'discord.png';
          var background_color = '#7289da';
          var entry_title_error = 'Discord Server Name';
          var entry_link_error = 'Discord Invite Link';
          var entry_substring_match_error = 'Discord invite link must contain "discord"';
          var input_header = 'Click link to join <strong>' + entry_title_db + '</strong> on Discord.';
          var link_button_text = 'Join @' + entry_title_db;
          var verify_header = 'What username did you join with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Joined This Server';
          var font_awesome_icon = '<i class="fab fa-discord"></i>';
  
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Discord: ' + translate['join_a_server'] + ' <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'telegram_join_channel') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Telegram Join Channel';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/join-telegram-channel-entry-method';
          var entry_method_handle_hint = '<strong>Hint: </strong> Join Our Telegram Channel';
          var entry_title_header = 'Telegram Channel Name';
          var entry_title_placeholder = 'Telegram';
          var entry_link_header = 'Telegram Channel Invite Link';
          var entry_link_placeholder = 'https://telegram.me/telegram';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'telegram.png';
          var background_color = '#0088cc';
          var entry_title_error = 'Telegram Channel Name';
          var entry_link_error = 'Telegram Invite Link';
          var entry_substring_match_error = 'Telegram invite link must contain "telegram"';
          var input_header = 'Click link to visit and join <strong>' + entry_title_db + '</strong> on Telegram.';
          var link_button_text = 'Join @' + entry_title_db;
          var verify_header = 'What username did you join with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Joined This Channel';
          var font_awesome_icon = '<i class="fab fa-telegram-plane"></i>';

          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Telegram: ' + translate['join_a_channel'] + ' <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }

        } else if(entry_method == 'telegram_leave_a_comment') {
          
            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var input_category = 2;
            var require_verification = 1;
            var require_verification_checked_by_default = 1;
            var require_verification_header = 'Require user verification';
            var entry_method_handle = 'Telegram Leave a Comment';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/join-telegram-channel-entry-method';
            var entry_method_handle_hint = '<strong>Hint: </strong> Leave a Comment On Our Telegram Channel';
            var entry_title_header = 'Telegram Channel Name';
            var entry_title_placeholder = 'Telegram';
            var entry_link_header = 'Telegram Channel Invite Link';
            var entry_link_placeholder = 'https://telegram.me/telegram';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'telegram.png';
            var background_color = '#0088cc';
            var entry_title_error = 'Telegram Channel Name';
            var entry_link_error = 'Telegram Invite Link';
            var entry_substring_match_error = 'Telegram invite link must contain "telegram"';
            var input_header = 'Click link to visit and join <strong>' + entry_title_db + '</strong> on Telegram. Then, leave a comment.';
            var link_button_text = 'Join & Comment @' + entry_title_db;
            var verify_header = 'What username did you leave a comment with?';
            var input_placeholder = 'Username';
            var verify_button_text = 'I Commented';
            var font_awesome_icon = '<i class="fab fa-telegram-plane"></i>';
  
            // Non-English
            if(language !== 'en') {
              
              var input_header = 'Telegram: ' + translate['leave_a_comment'];
              var link_button_text = translate['open_link'];
              var verify_header = translate['what_username_did_you_use'];
              var input_placeholder = translate['username'];
              var verify_button_text = translate['submit'];
              
            }
          
    } else if(entry_method == 'steam_join_group') {
        
        var entry_title = 1;
        var entry_link = 1;
        var entry_amount = 1;
        var required = 1;
        var input_category = 2;
        var require_verification = 1;
        var require_verification_checked_by_default = 1;
        var require_verification_header = 'Require user verification';
        var entry_method_handle = 'Steam Join Group';
        var entry_method_docs_link = 'https://sweepwidget.com/docs/steam-entry-method';
        var entry_method_handle_hint = '<strong>Hint: </strong> Join Our Steam Group';
        var entry_title_header = 'Group Name';
        var entry_title_placeholder = 'Awesome Group';
        var entry_link_header = 'Group URL';
        var entry_link_placeholder = 'https://steamcommunity.com/groups/my-group';
        var color = '#fff';
        var entry_icon_path = icon_base_path + 'steam.png';
        var background_color = '#16211A';
        var entry_title_error = 'Steam Group Name';
        var entry_link_error = 'Steam Group URL';
        var entry_substring_match_error = 'Steam group url must contain "steam"';
        var input_header = 'Click link to visit and join <strong>' + entry_title_db + '</strong> on Steam.';
        var link_button_text = 'Join ' + entry_title_db;
        var verify_header = 'What username did you join with?';
        var input_placeholder = 'Username';
        var verify_button_text = 'I Joined This Group';
        var font_awesome_icon = '<i class="fab fa-steam-square"></i>';

        // Non-English
        if(language !== 'en') {
            
            var input_header = 'Steam: ' + translate['join_a_group'] + ' <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
        }
        
      } else if(entry_method == 'tiktok_visit') {

            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var daily = 1;
            var required = 1;
            var input_category = 2;
            var require_verification = 0;
            var require_verification_checked_by_default = 0;
            var require_verification_header = 'Require user verification';
            var entry_method_handle = 'TikTok Visit User';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/tiktok-entry-method';
            var entry_method_handle_hint = '<strong>Hint: </strong> Visit TikTok User';
            var entry_title_header = 'TikTok name';
            var entry_title_placeholder = 'TikTok name';
            var entry_link_header = 'TikTok profile URL';
            var entry_link_placeholder = 'https://www.tiktok.com/@flighthouse';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'tiktok.jpg';
            var background_color = '#010101';
            var entry_title_error = 'TikTok Username';
            var entry_link_error = 'TikTok profile URL';
            var entry_substring_match_error = 'TikTok URL must contain "tiktok"';
            var input_header = 'Click link to visit and follow <strong>' + entry_title_db + '</strong> on TikTok.';
            var link_button_text = 'Follow @' + entry_title_db;
            var font_awesome_icon = '<i class="fab fa-tiktok"></i>';
            // var verify_header = 'What username did you visit with?';
            // var input_placeholder = 'Username';
            // var verify_button_text = 'I Visited This Page';

        // Non-English
        if(language !== 'en') {
            
          var input_header = 'TikTok: ' + translate['open_link'] + ' @' + entry_title_db;
          var link_button_text = translate['open_link'];
        //   var verify_header = translate['what_username_did_you_use'];
        //   var input_placeholder = translate['username'];
        //   var verify_button_text = translate['submit'];
          
        }
            
      } else if(entry_method == 'tiktok_follow') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'TikTok Follow';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/tiktok-entry-method';
          var entry_method_handle_hint = '<strong>Hint: </strong> Follow SweepWidget On TikTok';
          var entry_title_header = 'TikTok Name';
          var entry_title_placeholder = 'SweepWidget';
          var entry_link_header = 'TikTok URL';
          var entry_link_placeholder = 'https://www.tiktok.com/@flighthouse';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'tiktok.jpg';
          var background_color = '#010101';
          var entry_title_error = 'TikTok Username';
          var entry_link_error = 'TikTok profile URL';
          var entry_substring_match_error = 'TikTok URL must contain "tiktok"';
          var input_header = 'Click link to visit and follow <strong>' + entry_title_db + '</strong> on TikTok.';
          var link_button_text = 'Follow @' + entry_title_db;
          var verify_header = 'What username did you follow with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Followed';
          var font_awesome_icon = '<i class="fab fa-tiktok"></i>';
  
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'TikTok: ' + translate['follow'] + ' <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }

        } else if(entry_method == 'tiktok_like') {
          
            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var input_category = 2;
            var require_verification = 1;
            var require_verification_checked_by_default = 1;
            var require_verification_header = 'Require user verification';
            var entry_method_handle = 'Like A TikTok Video';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/tiktok-entry-method';
            var entry_method_handle_hint = '<strong>Hint: </strong> Like A Video On TikTok';
            var entry_title_header = 'Video Title';
            var entry_title_placeholder = 'Transformer Car';
            var entry_link_header = 'Video URL';
            var entry_link_placeholder = 'https://www.tiktok.com/@ikiaideed/video/6843057024868142341?lang=en';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'tiktok.jpg';
            var background_color = '#010101';
            var entry_title_error = 'TikTok Username';
            var entry_link_error = 'Video URL';
            var entry_substring_match_error = 'Video URL must contain "tiktok"';
            var input_header = 'Click link to visit and like the following TikTok video: <strong>' + entry_title_db + '.';
            var link_button_text = 'Like Video On TikTok';
            var verify_header = 'What username did you like this video with?';
            var input_placeholder = 'Username';
            var verify_button_text = 'I Like This Video';
            var font_awesome_icon = '<i class="fab fa-tiktok"></i>';
    
            // Non-English
            if(language !== 'en') {
              
              var input_header = 'TikTok: ' + translate['like'] + ' <strong>' + entry_title_db + '</strong>';
              var link_button_text = translate['open_link'];
              var verify_header = translate['what_username_did_you_use'];
              var input_placeholder = translate['username'];
              var verify_button_text = translate['submit'];
              
            }

        } else if(entry_method == 'tiktok_comment') {
          
            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var input_category = 2;
            var require_verification = 1;
            var require_verification_checked_by_default = 1;
            var require_verification_header = 'Require user verification';
            var entry_method_handle = 'Comment On A TikTok Video';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/tiktok-entry-method';
            var entry_method_handle_hint = '<strong>Hint: </strong> Comment On A TikTok Video';
            var entry_title_header = 'Video Title';
            var entry_title_placeholder = 'Transformer Car';
            var entry_link_header = 'Video URL';
            var entry_link_placeholder = 'https://www.tiktok.com/@ikiaideed/video/6843057024868142341?lang=en';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'tiktok.jpg';
            var background_color = '#010101';
            var entry_title_error = 'TikTok Username';
            var entry_link_error = 'Video URL';
            var entry_substring_match_error = 'Video URL must contain "tiktok"';
            var input_header = 'Click link to visit and comment on the following TikTok video: <strong>' + entry_title_db + '.';
            var link_button_text = 'Comment On A TikTok Video';
            var verify_header = 'What username did you leave a comment with on this video with?';
            var input_placeholder = 'Username';
            var verify_button_text = 'I Like This Video';
            var font_awesome_icon = '<i class="fab fa-tiktok"></i>';
    
            // Non-English
            if(language !== 'en') {
              
              var input_header = 'TikTok: ' + translate['leave_a_comment'] + ' <strong>' + entry_title_db + '</strong>';
              var link_button_text = translate['open_link'];
              var verify_header = translate['what_username_did_you_use'];
              var input_placeholder = translate['username'];
              var verify_button_text = translate['submit'];
              
            }

        } else if(entry_method == 'tiktok_share') {
          
            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var input_category = 2;
            var require_verification = 1;
            var require_verification_checked_by_default = 1;
            var require_verification_header = 'Require user verification';
            var entry_method_handle = 'Share A TikTok Video';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/tiktok-entry-method';
            var entry_method_handle_hint = '<strong>Hint: </strong> Share A TikTok Video';
            var entry_title_header = 'Video Title';
            var entry_title_placeholder = 'Transformer Car';
            var entry_link_header = 'Video URL';
            var entry_link_placeholder = 'https://www.tiktok.com/@ikiaideed/video/6843057024868142341?lang=en';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'tiktok.jpg';
            var background_color = '#010101';
            var entry_title_error = 'TikTok Username';
            var entry_link_error = 'Video URL';
            var entry_substring_match_error = 'Video URL must contain "tiktok"';
            var input_header = 'Click link to visit and share the following TikTok video: <strong>' + entry_title_db + '.';
            var link_button_text = 'Share A TikTok Video';
            var verify_header = 'What username did you share this video with?';
            var input_placeholder = 'Username';
            var verify_button_text = 'I Like This Video';
            var font_awesome_icon = '<i class="fab fa-tiktok"></i>';
    
            // Non-English
            if(language !== 'en') {
              
              var input_header = 'TikTok: ' + translate['share'] + ' <strong>' + entry_title_db + '</strong>';
              var link_button_text = translate['open_link'];
              var verify_header = translate['what_username_did_you_use'];
              var input_placeholder = translate['username'];
              var verify_button_text = translate['submit'];
              
            }

        
        } else if(entry_method == 'tiktok_watch_video') {
            
            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var daily = 1;
            var input_category = 2;
            var require_verification = 1;
            var require_verification_checked_by_default = 1;
            var require_verification_header = 'Require user verification';
            var entry_method_handle = 'Watch TikTok Video';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/tiktok-entry-method';
            var entry_method_handle_hint = '<strong>Hint: </strong> Watch tiktok Video';
            var entry_title_header = 'tiktok Video Name';
            var entry_title_placeholder = 'So many cats';
            var entry_link_header = 'tiktok Video URL';
            var entry_link_placeholder = 'https://www.tiktok.com/@zachking/video/6831545610642951429?lang=en';
            var entry_link_validation_error = 'Invalid tiktok Video URL';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'tiktok.jpg';
            var background_color = '#010101';
            var entry_title_error = 'TikTok Username';
            var entry_link_error = 'Video URL';
            var entry_substring_match_error = 'tiktok Video URL must contain "tiktok"';
            var input_header = 'Watch this TikTok video: <strong>' + entry_title_db + '</strong>';
            var verify_button_text = 'I Watched This Video';
            var font_awesome_icon = '<i class="fab fa-tiktok"></i>';
            
            // Non-English
            if(language !== 'en') {
                
                var input_header = translate['watch_a_video'] + ': <strong>' + entry_title_db + '</strong>';
                var verify_button_text = translate['submit'];
                
            }

      } else if(entry_method == 'twitch_follow') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 3;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Twitch Follow';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/twitch-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Follow <strong>@SomeName</strong> On Twitch';
          var entry_title_header = 'Channel name';
          var entry_title_placeholder = 'ThijsHS';
          var entry_link_header = 'Channel URL';
          var entry_link_placeholder = 'https://www.twitch.tv/thijshs';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'twitch.png';
          var background_color = '#6441a5';
          var entry_title_error = 'Channel name';
          var entry_link_error = 'Channel URL';
          var entry_substring_match_error = 'User URL must contain "twitch.tv"';
          var input_header = 'Click link and follow <strong>' + entry_title_db + '</strong> on Twitch.';
          var link_button_text = 'Visit and Follow @' + entry_title_db;
          var verify_header = 'What username did you follow with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Followed';
          var font_awesome_icon = '<i class="fab fa-twitch"></i>';
          
          // Non-English
          if(language !== 'en') {
           
            var input_header = 'Twitch: ' + translate['follow'] + ' <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'twitch_subscribe') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var required = 1;
          var input_category = 3;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Twitch Subscribe';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/twitch-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Subscribe To <strong>@SomeName</strong> Channel On Twitch';
          var entry_title_header = 'Channel name';
          var entry_title_placeholder = 'ThijsHS';
          var entry_link_header = 'Channel URL';
          var entry_link_placeholder = 'https://www.twitch.tv/thijshs';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'twitch.png';
          var background_color = '#6441a5';
          var entry_title_error = 'Channel name';
          var entry_link_error = 'Channel URL';
          var entry_substring_match_error = 'User URL must contain "twitch.tv"';
          var input_header = 'Click link and subscribe to <strong>' + entry_title_db + '</strong> on Twitch.';
          var link_button_text = 'Visit and Subscribe @' + entry_title_db;
          var verify_header = 'What username did you subscribe with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Subscribed';
          var font_awesome_icon = '<i class="fab fa-twitch"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Twitch: ' + translate['please_subscribe'] + ' <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      }
  
      /* i.e., input_category = 4 */
      else if(entry_method == 'youtube_submit_video') {
  
          var entry_amount = 1;
          var required = 1;
          var daily = 1;
          var input_category = 4;
          var additional_instructions = 1;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Youtube Submit A Video';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/youtube-entry-methods';
          var entry_method_handle_hint = entry_method_handle;
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'youtube_s.png';
          var background_color = '#cd201f';
          var entry_substring_match_error = 'Video URL must contain "youtube"';
          var input_header = 'Copy a Youtube Video URL and paste it in the input box below and Click button to Submit it!';
          var verify_header = 'Which Youtube Video you want to submit?';
          var input_placeholder = 'https://www.youtube.com/watch?v=123';
          var verify_button_text = 'I Submitted A Video';
          var font_awesome_icon = '<i class="fab fa-youtube"></i>';
  
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Youtube: ' + translate['submit_a_video'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = 'https://www.youtube.com/watch?v=123';
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'instagram_submit_post') {
  
          var entry_amount = 1;
          var required = 1;
          var daily = 1;
          var input_category = 4;
          var additional_instructions = 1;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Instagram Submit A Post';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/instagram-entry-methods';
          var entry_method_handle_hint = entry_method_handle;
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'instagram_s.png';
          var background_color = '#3f729b';
          var entry_substring_match_error = 'Instagram URL must contain "instagram"';
          var input_header = 'Enter a Post URL in the input box below and Click button to Submit Your Post';
          var verify_header = 'Which Instagram Post you want to submit?';
          var input_placeholder = 'https://www.instagram.com/p/123/';
          var verify_button_text = 'I Submitted A Post';
          var font_awesome_icon = '<i class="fab fa-instagram"></i>';
  
          // Non-English
          if(language !== 'en') {
            
            var input_header = 'Instagram: ' + translate['submit_a_post'];
            var verify_header = translate['where_is_the_link_to_your_submission'];
            var input_placeholder = 'https://www.instagram.com/p/123/';
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'birthday') {
          
          var entry_amount = 1;
          var required = 1;
          var input_category = 4;
          var entry_method_handle = 'Birthday';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/custom-input-field-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Enter your Birthday';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'cake_s.png';
          var background_color = '#bbb';
          var input_header = 'Birth Date';
          var input_placeholder = 'MM-DD-YYYY';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = translate['date_of_birth'];
            var input_placeholder = 'MM-DD-YYYY';
            
          }
          
      } else if(entry_method == 'full_name') {
          
          var entry_amount = 1;
          var required = 1;
          var input_category = 4;
          var entry_method_handle = 'First &amp; Last Name';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/custom-input-field-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Enter your First &amp; Last Name';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'person_s.png';
          var background_color = '#bbb';
          var input_header = 'What full name?';
          var input_placeholder = 'John Smith';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = translate['full_name'];
            var input_placeholder = 'John Smith';
            
          }
          
      } else if(entry_method == 'phone_number') {
          
          var entry_amount = 1;
          var required = 1;
          var input_category = 4;
          var entry_method_handle = 'Phone Number';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/custom-input-field-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Enter your Phone Number';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'phone_s.png';
          var background_color = '#bbb';
          var input_header = 'What best contact number?';
          var input_placeholder = '(555) 555-5555';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = translate['phone_number'];
            var input_placeholder = '(555) 555-5555';
            
          }
          
      }
  
      /* i.e., input_category = 5 */
      else if(entry_method == 'disqus_comment') {
             
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var daily = 1;
          var required = 1;
          var entry_textarea = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Disqus Leave A Comment';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/blog-comment-disqus';
          var entry_method_handle_hint = '<strong>Hint: </strong> Leave A Disqus Comment';
          var entry_title_header = 'Blog / Discussion Title';
          var entry_title_placeholder = 'Awesome Giveaway Tips';
          var entry_link_header = 'Blog / Discussion URL';
          var entry_link_placeholder = 'https://sweepwidget.com/blog/awesome-giveaway-tips';
          var entry_textarea_header = 'Instructions';
          var entry_textarea_placeholder = 'Instructions...';
          var entry_textarea_max_length = 500;
          var entry_title_error = 'Blog / Discussion Title';
          var entry_link_error = 'Blog / Discussion URL';
          var entry_textarea_error = 'Instructions';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'disqus_s.png';
          var background_color = '#2e9fff';
          var input_header = 'Visit <strong>' + entry_title_db + '</strong> and leave a Disqus comment.';
          var link_button_text = 'Go Visit and Comment on this Blog';
          var verify_header = 'What username did you comment with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Commented';
          var font_awesome_icon = '<i class="fas fa-comments"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = translate['leave_a_comment'] + ': <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'blog_comment') {
          
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var daily = 1;
          var required = 1;
          var entry_textarea = 1;
          var input_category = 2;
          var require_verification = 1;
          var require_verification_checked_by_default = 1;
          var require_verification_header = 'Require user verification';
          var entry_method_handle = 'Leave A Blog Comment';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/blog-comment-disqus';
          var entry_method_handle_hint = '<strong>Hint: </strong> Leave A Blog Comment';
          var entry_title_header = 'Blog Name';
          var entry_title_placeholder = 'Awesome Giveaway Tips';
          var entry_link_header = 'Blog URL';
          var entry_link_placeholder = 'https://sweepwidget.com/blog/awesome-giveaway-tips';
          var entry_textarea_header = 'Instructions';
          var entry_textarea_placeholder = 'Instructions...';
          var entry_textarea_max_length = 500;
          var entry_title_error = 'Blog Name';
          var entry_link_error = 'Blog URL';
          var entry_textarea_error = 'Instructions';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'comment_s.png';
          var background_color = '#ff0066';
          var input_header = 'Visit <strong>' + entry_title_db + '</strong> and leave a blog comment.';
          var link_button_text = 'Go Visit and Comment on this Blog';
          var verify_header = 'What username did you comment with?';
          var input_placeholder = 'Username';
          var verify_button_text = 'I Commented';
          var font_awesome_icon = '<i class="fas fa-comments"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = translate['leave_a_comment'] + ': <strong>' + entry_title_db + '</strong>';
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'custom') {
          
          var entry_amount = 1;
          var entry_textarea = 1;
          var daily = 1;
          var required = 1;
          var custom_icon = 1;
          var custom_radio_options = 1;
          var timer = 1;
          var input_category = 5;
          var entry_method_handle = 'Create Your Own Entry Method';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/create-your-own-entry-method';
          var entry_method_handle_hint = '<strong>Hint: </strong> Make it your own title';
          var entry_textarea_header = 'What must the user do to enter?';
          var entry_textarea_placeholder = 'Instructions...';
          var entry_textarea_max_length = 500;
          var entry_textarea_error = 'What must the user do to enter?';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'website_s.png';
          var background_color = '#fcba03';
          var verify_button_text = 'Confirm Entry';
          var font_awesome_icon = '<i class="fas fa-award"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'bonus') {
          
          var entry_amount = 1;
          var daily = 1;
          var required = 1;
          var custom_icon = 1;
          var input_category = 5;
          var entry_method_handle = 'Bonus';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/bonus-entry';
          var entry_method_handle_hint = '<strong>Hint: </strong> Bonus';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'bonus_s.png';
          var background_color = '#FFD700';
          var input_header = 'Claim a bonus entry!';
          var verify_button_text = 'Claim Bonus Entry';
          var font_awesome_icon = '<i class="fas fa-crown"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var input_header = translate['claim_a_bonus_entry'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'text_input') {
          
          var entry_title = 1;
          var entry_amount = 1;
          var required = 1;
          var custom_icon = 1;
          var input_type = 1;
          var additional_instructions = 1;
          var input_category = 5;
          var input_field_type = 'input';
          var entry_method_handle = 'Text Field';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/custom-input-field-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Question';
          var entry_title_header = 'Question Title';
          var entry_title_placeholder = 'Who\'s your favorite jazz trumpet player?';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'question_mark2.png';
          var background_color = '#bbb';
          var entry_title_error = 'Question Title';
          var input_placeholder = 'Type your response...';
          var verify_button_text = 'Confirm Entry';
          var font_awesome_icon = '<i class="fas fa-text-width"></i>';
          
          // Non-English
          if(language !== 'en') {
            
            var verify_button_text = translate['submit'];
            var input_placeholder = '';
            
          }
          
      } else if(entry_method == 'checkbox') {
          
          var entry_title = 1;
          var entry_amount = 1;
          var required = 1;
          var custom_icon = 1;
          var input_type = 1;
          var additional_instructions = 1;
          var input_category = 5;
          var input_field_type = 'input';
          var entry_method_handle = 'Checkbox';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/custom-input-field-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Question';
          var entry_title_header = 'Question Title';
          var entry_title_placeholder = 'I enjoy pasta!';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'question_mark2.png';
          var background_color = '#bbb';
          var entry_title_error = 'Question Title';
          var verify_button_text = 'Confirm Entry';
          var font_awesome_icon = '<i class="far fa-square"></i>';
       
          // Non-English
          if(language !== 'en') {
              
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'checkboxes') {
          
          var entry_title = 1;
          var entry_amount = 1;
          var required = 1;
          var custom_icon = 1;
          var input_type = 1;
          var additional_instructions = 1;
          var input_category = 5;
          var input_field_type = 'input';
          var entry_method_handle = 'Checkboxes';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/custom-input-field-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Question';
          var entry_title_header = 'Question Title';
          var entry_title_placeholder = 'What are your favorite genres of music?';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'question_mark2.png';
          var background_color = '#bbb';
          var entry_title_error = 'Question Title';
          var verify_button_text = 'Confirm Entry';
          var font_awesome_icon = '<i class="far fa-square"></i>';
          
          // Non-English
          if(language !== 'en') {
              
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'radio') {
          
          var entry_title = 1;
          var entry_amount = 1;
          var required = 1;
          var custom_icon = 1;
          var input_type = 1;
          var additional_instructions = 1;
          var input_category = 5;
          var input_field_type = 'input';
          var entry_method_handle = 'Radio Buttons';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/custom-input-field-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Question';
          var entry_title_header = 'Question Title';
          var entry_title_placeholder = 'What\'s the capital of North Dakota?';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'question_mark2.png';
          var background_color = '#bbb';
          var entry_title_error = 'Question Title';
          var input_error_1 = 'Options';
          var entry_match_error = 'Your required selection does not match any of the options.';
          var verify_button_text = 'Confirm Entry';
          var font_awesome_icon = '<i class="far fa-dot-circle"></i>';
          
          // Non-English
          if(language !== 'en') {
              
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'select') {
          
          var entry_title = 1;
          var entry_amount = 1;
          var required = 1;
          var custom_icon = 1;
          var input_type = 1;
          var additional_instructions = 1;
          var input_category = 5;
          var input_field_type = 'select';
          var entry_method_handle = 'Select Field';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/custom-input-field-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Question';
          var entry_title_header = 'Question Title';
          var entry_title_placeholder = 'What\'s the capital of North Dakota?';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'question_mark2.png';
          var background_color = '#bbb';
          var entry_title_error = 'Question Title';
          var input_error_1 = 'Options';
          var input_error_2 = 'Required Selection';
          var entry_match_error = 'Your required selection does not match any of the options.';
          var verify_button_text = 'Confirm Entry';
          var font_awesome_icon = '<i class="fas fa-caret-down"></i>';
          
          // Non-English
          if(language !== 'en') {
              
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'textarea') {
          
          var entry_title = 1;
          var entry_amount = 1;
          var required = 1;
          var custom_icon = 1;
          var input_type = 1;
          var additional_instructions = 1;
          var input_category = 5;
          var input_field_type = 'textarea';
          var entry_method_handle = 'Textarea';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/custom-input-field-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Question';
          var entry_title_header = 'Question Title';
          var entry_title_placeholder = 'What preferred detergent brand?';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'question_mark2.png';
          var background_color = '#bbb';
          var entry_title_error = 'Question Title';
          var verify_button_text = 'Confirm Entry';
          var font_awesome_icon = '<i class="fas fa-align-justify"></i>';
          
          // Non-English
          if(language !== 'en') {
              
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'secret_code') {
  
          var entry_title = 1;
          var entry_link = 1;
          var entry_amount = 1;
          var daily = 1;
          var required = 1;
          var custom_icon = 1;
          var input_category = 5;
          var input_type = 1;
          var additional_instructions = 1;
          var input_field_type = 'input';
          var additional_instructions_header = 'Additional Instructions (* Optional)';
          var entry_method_handle = 'Secret Code';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/secret-code-entry-methods';
          var entry_method_handle_hint = '<strong>Hint: </strong> Secret Code';
          var entry_title_header = 'Question Title';
          var entry_title_placeholder = 'Add Secret Code to enter giveaway?';
          var entry_title_value = 'What\'s The Secret Code';
          var entry_link_header = 'Secret Code To Enter';
          var entry_link_placeholder = '';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'lock.png';
          var background_color = '#bbb';
          var entry_title_error = 'Question Title';
          var entry_link_error = 'Secret Code To Enter';
          var entry_match_error = 'Your provided secret code does not match.';
          var verify_button_text = 'Submit Secret Code';
          var input_placeholder = 'Enter Secret Code';
          var font_awesome_icon = '<i class="fas fa-key"></i>';
  
          // Non-English
          if(language !== 'en') {
            
            var input_placeholder = translate['secret_code'];
            var verify_button_text = translate['submit'];
            
          }
          
      } else if(entry_method == 'app_download') {
          
          var entry_title = 1;
          var entry_amount = 1;
          var required = 1;
          var input_type = 1;
          var additional_instructions = 1;
          var input_category = 5;
          var entry_method_handle = 'Download App';
          var entry_method_docs_link = 'https://sweepwidget.com/docs/download-an-app-entry-method';
          var entry_method_handle_hint = '<strong>Hint: </strong> Download <strong>Awesome</strong> App';
          var entry_title_header = 'Name Of Your App';
          var entry_title_placeholder = 'Pok&#233;mon GO';
          var color = '#fff';
          var entry_icon_path = icon_base_path + 'app_download_s.png';
          var background_color = '#1c2d37';
          var entry_title_error = 'Name Of Your App';
          var input_error_1 = 'iTunes URL';
          var input_error_2 = 'Android URL';
          var input_header = 'Download the <strong>' + entry_title_db + '</strong> app!';
          var verify_header = 'Click button below if you successfully downloaded the <strong>' + entry_title_db + '</strong> app.';
          var verify_button_text = 'I Downloaded This App';
          var font_awesome_icon = '<i class="fas fa-cloud-download-alt"></i>';
          
          // Non-English
          if(language !== 'en') {
              
            var input_header = translate['download_an_app'] + ': <strong>' + entry_title_db + '</strong>';
            var verify_header = translate['i_confirm_that_i_downloaded_this_app'];
            var verify_button_text = translate['confirm'];
            
          }
          
        // Manually add entries for user (admin control)
        } else if(entry_method == 'admin_manual') {
            
            var entry_method_handle = 'Admin Manual';
            var background_color = '#ffcc00';
            var font_awesome_icon = '<i class="fas fa-star"></i>';
                
        } else if(entry_method == 'medium_clap') {
    
            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var input_category = 2;
            var require_verification = 1;
            var require_verification_checked_by_default = 1;
            var require_verification_header = 'Require user verification';
            var entry_method_handle = 'Leave A Clap On A Medium Article';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/medium-entry-methods';
            var entry_method_handle_hint = '<strong>Hint: </strong> Leave A Clap';
            var entry_title_header = 'Medium article title';
            var entry_title_placeholder = 'How To Program In PHP For Beginners';
            var entry_link_header = 'Medium Article URL';
            var entry_link_placeholder = 'https://medium.com/meta-box/php-techniques-to-write-clean-and-readable-code-a8ccf5540b2a';
            var color = '#fff';
            var entry_icon_path = '';
            var background_color = '#00ab6c';
            // var entry_title_error = 'Facebook page name';
            // var entry_link_error = 'Invalid Facebook Page URL';
            // var entry_substring_match_error = 'Enter a Facebok Page URL';
            var link_button_text = 'Visit Article';
            var input_header = 'Visit & leave a clap for the following Medium article: ' + entry_title_db;
            var verify_header = 'What username did you leave a clap with?';
            var input_placeholder = 'Username';
            var verify_button_text = 'I Left A Clap';
            var font_awesome_icon = '<i class="fab fa-medium-m"></i>';
            
            // Non-English
            if(language !== 'en') {
            
            var input_header = 'Medium: ' + translate['leave_a_comment'];
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
            }
            
        } else if(entry_method == 'medium_comment') {
    
            var entry_title = 1;
            var entry_link = 1;
            var entry_amount = 1;
            var required = 1;
            var input_category = 2;
            var require_verification = 1;
            var require_verification_checked_by_default = 1;
            var require_verification_header = 'Require user verification';
            var entry_method_handle = 'Leave A Comment On A Medium Article';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/medium-entry-methods';
            var entry_method_handle_hint = '<strong>Hint: </strong> Leave A Comment';
            var entry_title_header = 'Medium article title';
            var entry_title_placeholder = 'How To Program In PHP For Beginners';
            var entry_link_header = 'Medium Article URL';
            var entry_link_placeholder = 'https://medium.com/meta-box/php-techniques-to-write-clean-and-readable-code-a8ccf5540b2a';
            var color = '#fff';
            var entry_icon_path = '';
            var background_color = '#00ab6c';
            // var entry_title_error = 'Facebook page name';
            // var entry_link_error = 'Invalid Facebook Page URL';
            // var entry_substring_match_error = 'Enter a Facebok Page URL';
            var link_button_text = 'Visit Article';
            var input_header = 'Visit & leave a comment for the following Medium article: ' + entry_title_db;
            var verify_header = 'What username did you leave a comment with?';
            var input_placeholder = 'Username';
            var verify_button_text = 'I Left A Comment';
            var font_awesome_icon = '<i class="fab fa-medium-m"></i>';
            
            // Non-English
            if(language !== 'en') {
            
            var input_header = 'Medium: ' + translate['leave_a_comment'];
            var link_button_text = translate['open_link'];
            var verify_header = translate['what_username_did_you_use'];
            var input_placeholder = translate['username'];
            var verify_button_text = translate['submit'];
            
            }
            
        } else if(entry_method == 'btc_crypto_wallet') {
            
            var entry_title = 1;
            var entry_amount = 1;
            var required = 1;
            var custom_icon = 1;
            var input_type = 1;
            var additional_instructions = 1;
            var input_category = 5;
            var input_field_type = 'input';
            var entry_method_handle = 'BTC Wallet Address';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/crypto-wallet-address';
            var entry_method_handle_hint = '';
            var entry_title_header = 'Instructions';
            var entry_title_value = 'Enter Your BTC Wallet Address';
            var entry_title_placeholder = '';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'question_mark2.png';
            var background_color = '#F7931A';
            var entry_title_error = 'BTC Wallet Address';
            var input_placeholder = 'Type your wallet address...';
            var verify_button_text = 'Submit Wallet Address';
            var font_awesome_icon = '<i class="fa-brands fa-bitcoin"></i>';
            
            // Non-English
            if(language !== 'en') {
              
              var verify_button_text = translate['submit'];
              var input_placeholder = '';
              
            }

        } else if(entry_method == 'eth_bep20_crypto_wallet') {
            
            var entry_title = 1;
            var entry_amount = 1;
            var required = 1;
            var custom_icon = 1;
            var input_type = 1;
            var additional_instructions = 1;
            var input_category = 5;
            var input_field_type = 'input';
            var entry_method_handle = 'ETH / BEP-20 Wallet Address';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/crypto-wallet-address';
            var entry_method_handle_hint = '';
            var entry_title_header = 'Instructions';
            var entry_title_value = 'Enter Your ETH / BEP-20 Wallet Address';
            var entry_title_placeholder = '';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'question_mark2.png';
            var background_color = '#215CAF';
            var entry_title_error = 'ETH / BEP-20 Wallet Address';
            var input_placeholder = 'Type your wallet address...';
            var verify_button_text = 'Submit Wallet Address';
            var font_awesome_icon = '<i class="fa-brands fa-ethereum"></i>';
            
            // Non-English
            if(language !== 'en') {
              
              var verify_button_text = translate['submit'];
              var input_placeholder = '';
              
            }

        } else if(entry_method == 'bep2_crypto_wallet') {
            
            var entry_title = 1;
            var entry_amount = 1;
            var required = 1;
            var custom_icon = 1;
            var input_type = 1;
            var additional_instructions = 1;
            var input_category = 5;
            var input_field_type = 'input';
            var entry_method_handle = 'BEP-2 Wallet Address';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/crypto-wallet-address';
            var entry_method_handle_hint = '';
            var entry_title_header = 'Instructions';
            var entry_title_value = 'Enter Your BEP-2 Wallet Address';
            var entry_title_placeholder = '';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'question_mark2.png';
            var background_color = '#F0B90B';
            var entry_title_error = 'BEP-2 Wallet Address';
            var input_placeholder = 'Type your wallet address...';
            var verify_button_text = 'Submit Wallet Address';
            var font_awesome_icon = '<i class="fa-solid fa-wallet"></i>';
            
            // Non-English
            if(language !== 'en') {
              
              var verify_button_text = translate['submit'];
              var input_placeholder = '';
              
            }

        } else if(entry_method == 'other_crypto_wallet') {
            
            var entry_title = 1;
            var entry_amount = 1;
            var required = 1;
            var custom_icon = 1;
            var input_type = 1;
            var additional_instructions = 1;
            var input_category = 5;
            var input_field_type = 'input';
            var entry_method_handle = 'Wallet Address';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/crypto-wallet-address';
            var entry_method_handle_hint = '';
            var entry_title_header = 'Instructions';
            var entry_title_value = 'Enter Your Wallet Address';
            var entry_title_placeholder = '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'question_mark2.png';
            var background_color = '#333';
            var entry_title_error = 'Wallet Address';
            var input_placeholder = 'Type your wallet address...';
            var verify_button_text = 'Submit Wallet Address';
            var font_awesome_icon = '<i class="fa-solid fa-wallet"></i>';
            
            // Non-English
            if(language !== 'en') {
              
              var verify_button_text = translate['submit'];
              var input_placeholder = '';
              
            }

        } else if(entry_method == 'e_signature') {
            var entry_title = 1;
            var entry_amount = 1;
            var required = 1;
            var custom_icon = 1;
            var input_type = 1;
            var additional_instructions = 1;
            var input_category = 5;
            var input_field_type = 'input';
            var entry_method_handle = 'Sign Your Signature';
            var entry_method_docs_link = 'https://sweepwidget.com/docs/crypto-wallet-address';
            var entry_method_handle_hint = '';
            var entry_title_header = 'Instructions';
            var entry_title_value = 'Sign Your Signature';
            var entry_title_placeholder = 'John Doe';
            var color = '#fff';
            var entry_icon_path = icon_base_path + 'question_mark2.png';
            var background_color = '#333';
            var entry_title_error = 'Sign Your Name';
            var input_placeholder = 'John Doe';
            var verify_button_text = 'Submit Signature';
            var font_awesome_icon = '<i class="fa-solid fa-file-signature"></i>';
            
            // Non-English
            if(language !== 'en') {
              
              var verify_button_text = translate['submit'];
              var input_placeholder = '';
              
            }

        }
        
      // Return selected value
      if(entry_type == 'entry_level') {
          return entry_level;
      } else if(entry_type == 'entry_title') {
          return entry_title;
      } else if(entry_type == 'entry_link') {
          return entry_link;
      } else if(entry_type == 'entry_amount') {
          return entry_amount;
      } else if(entry_type == 'entry_textarea') {
          return entry_textarea;
      } else if(entry_type == 'daily') {
          return daily;
      } else if(entry_type == 'timer') {
          return timer;
      } else if(entry_type == 'required') {
          return required;
      } else if(entry_type == 'custom_icon') {
          return custom_icon;
      } else if(entry_type == 'social_optional_engagement') {
          return social_optional_engagement;
      } else if(entry_type == 'social_optional_engagement_header') {
          return social_optional_engagement_header;
      } else if(entry_type == 'require_verification') {
          return require_verification;
      } else if(entry_type == 'require_verification_header') {
          return require_verification_header;
      } else if(entry_type == 'require_verification_checked_by_default') {
          return require_verification_checked_by_default;
      } else if(entry_type == 'force_require_verification') {
          return force_require_verification;
      } else if(entry_type == 'input_type') {
          return input_type;
      } else if(entry_type == 'custom_radio_options') {
          return custom_radio_options;
      } else if(entry_type == 'additional_instructions') {
          return additional_instructions;
      } else if(entry_type == 'additional_instructions_header') {
          return additional_instructions_header;
      } else if(entry_type == 'additional_instructions_placeholder') {
          return additional_instructions_placeholder;
      } else if(entry_type == 'additional_instructions_value') {
          return additional_instructions_value;
      } else if(entry_type == 'additional_instructions_max_length') {
          return additional_instructions_max_length;
      } else if(entry_type == 'additional_instructions_note') {
          return additional_instructions_note;
      } else if(entry_type == 'additional_instructions_error') {
          return additional_instructions_error;
      } else if(entry_type == 'entry_attachment') {
          return entry_attachment;
      } else if(entry_type == 'entry_attachment_header') {
          return entry_attachment_header;
      } else if(entry_type == 'entry_attachment_hint') {
          return entry_attachment_hint;
      } else if(entry_type == 'entry_attachment_value') {
          return entry_attachment_value;
      } else if(entry_type == 'entry_attachment_validation') {
          return entry_attachment_validation;
      } else if(entry_type == 'entry_attachment_validation_error') {
          return entry_attachment_validation_error;
      } else if(entry_type == 'email_integration') {
          return email_integration;
      } else if(entry_type == 'upload_a_file') {
		  return upload_a_file;
	  } else if(entry_type == 'upload_a_file_ext') {
		  return upload_a_file_ext;
      } else if(entry_type == 'viral_share') {
          return viral_share;
      } else if(entry_type == 'viral_share_options') {
          return viral_share_options;
      } else if(entry_type == 'viral_share_error') {
          return viral_share_error;
      } else if(entry_type == 'entry_method_handle') {
          return entry_method_handle;
      } else if(entry_type == 'entry_method_handle_hint') {
          return entry_method_handle_hint;
      } else if(entry_type == 'entry_method_docs_link') {
          return entry_method_docs_link;
      } else if(entry_type == 'entry_title_header') {
          return entry_title_header;
      } else if(entry_type == 'entry_title_placeholder') {
          return entry_title_placeholder;
      } else if(entry_type == 'entry_title_value') {
          return entry_title_value;
      } else if(entry_type == 'entry_link_header') {
          return entry_link_header;
      } else if(entry_type == 'entry_link_placeholder') {
          return entry_link_placeholder;
      } else if(entry_type == 'entry_link_validation') {
          return entry_link_validation;
      } else if(entry_type == 'entry_link_validation_error') {
          return entry_link_validation_error;
      } else if(entry_type == 'entry_amount_header') {
          return entry_amount_header;
      } else if(entry_type == 'entry_amount_placeholder') {
          return entry_amount_placeholder;
      } else if(entry_type == 'entry_textarea_header') {
          return entry_textarea_header;
      } else if(entry_type == 'entry_textarea_placeholder') {
          return entry_textarea_placeholder;
      } else if(entry_type == 'entry_textarea_value') {
          return entry_textarea_value;
      } else if(entry_type == 'entry_textarea_max_length') {
          return entry_textarea_max_length;
      } else if(entry_type == 'entry_textarea_note') {
          return entry_textarea_note;
      } else if(entry_type == 'color') {
          return color;
      } else if(entry_type == 'background_color') {
          return background_color;
      } else if(entry_type == 'entry_icon_path') {
          return entry_icon_path;
      } else if(entry_type == 'font_awesome_icon') {
          return font_awesome_icon;
      } else if(entry_type == 'entry_title_error') {
          return entry_title_error;
      } else if(entry_type == 'entry_match_error') {
          return entry_match_error;
      } else if(entry_type == 'entry_substring_match_error') {
          return entry_substring_match_error;
      } else if(entry_type == 'entry_link_error') {
          return entry_link_error;
      } else if(entry_type == 'entry_amount_error') {
          return entry_amount_error;
      } else if(entry_type == 'entry_textarea_error') {
          return entry_textarea_error;
      } else if(entry_type == 'input_error_1') {
          return input_error_1;
      } else if(entry_type == 'input_error_2') {
          return input_error_2;
      } else if(entry_type == 'email_integration_error') {
          return email_integration_error;
      } else if(entry_type == 'input_category') {
          return input_category;
      } else if(entry_type == 'input_field_type') {
          return input_field_type;
      } else if(entry_type == 'input_header') {
          return input_header;
      } else if(entry_type == 'input_placeholder') {
          return input_placeholder;
      } else if(entry_type == 'link_button_text') {
          return link_button_text;
      } else if(entry_type == 'verify_header') {
          return verify_header;
      } else if(entry_type == 'verify_button_text') {
          return verify_button_text;
      } else if(entry_type == 'link_prepend') {
          return link_prepend;
      } else if(entry_type == 'host_name') {
          return host_name;
      } else if(entry_type == 'entry_link_text') {
          return entry_link_text;
      }
      
  }
  
  // Convert entry method from int to text
  function switch_entry_method_int_to_text(entry_method) {
  
      entry_method = parseInt(entry_method);
    
      switch(entry_method)
      {
          case 1: var entry_method_text = 'user_details'; break;
          case 2: var entry_method_text = 'email_subscribe'; break;
          case 3: var entry_method_text = 'blog_comment'; break;
          case 4: var entry_method_text = 'visit_a_page'; break;
          case 5: var entry_method_text = 'refer_friends'; break;
          case 6: var entry_method_text = 'upload_a_file'; break;
          case 7: var entry_method_text = 'facebook_page_visit'; break;
          case 8: var entry_method_text = 'twitter_follow'; break;
          case 9: var entry_method_text = 'twitter_tweet'; break;
          case 10: var entry_method_text = 'instagram_follow'; break;
          case 11: var entry_method_text = 'pinterest_follow_user'; break;
          case 12: var entry_method_text = 'pinterest_repin_pin'; break;
          case 15: var entry_method_text = 'youtube_channel_subscribe'; break;
          case 16: var entry_method_text = 'text_input'; break;
          case 17: var entry_method_text = 'select'; break;
          case 18: var entry_method_text = 'radio'; break;
          case 19: var entry_method_text = 'textarea'; break;
          case 20: var entry_method_text = 'checkbox'; break;
          case 21: var entry_method_text = 'checkboxes'; break;
          case 22: var entry_method_text = 'birthday'; break;
          case 23: var entry_method_text = 'full_name'; break;
          case 24: var entry_method_text = 'address'; break;
          case 25: var entry_method_text = 'phone_number'; break;
          case 26: var entry_method_text = 'custom'; break;
          case 27: var entry_method_text = 'instagram_view_post'; break;
          case 28: var entry_method_text = 'soundcloud_follow'; break;
          case 29: var entry_method_text = 'myspace_follow'; break;
          case 30: var entry_method_text = 'etsy_follow'; break;
          case 31: var entry_method_text = 'ebay_follow'; break;
          case 32: var entry_method_text = 'youtube_comment'; break;
          case 33: var entry_method_text = 'app_download'; break;
          case 34: var entry_method_text = 'disqus_comment'; break;
          case 35: var entry_method_text = 'bonus'; break;
          case 36: var entry_method_text = 'attend_eventbrite_event'; break;
          case 37: var entry_method_text = 'attend_eventbrite_venue'; break;
          case 38: var entry_method_text = 'tumblr_follow'; break;
          case 39: var entry_method_text = 'tumblr_like_post'; break;
          case 40: var entry_method_text = 'stumbleupon_like_post'; break;
          case 41: var entry_method_text = 'reddit_subscribe'; break;
          case 42: var entry_method_text = 'vine_follow'; break;
          case 43: var entry_method_text = 'twitch_follow'; break;
          case 44: var entry_method_text = 'twitch_subscribe'; break;
          case 45: var entry_method_text = 'feedburner'; break;
          case 46: var entry_method_text = 'bloglovin_follow'; break;
          case 47: var entry_method_text = 'etsy_item'; break;
          case 48: var entry_method_text = 'linkedin_share'; break;
          case 49: var entry_method_text = 'linkedin_follow'; break;
          case 50: var entry_method_text = 'twitter_retweet'; break;
          case 51: var entry_method_text = 'feedpress'; break;
          case 52: var entry_method_text = 'rss'; break;
          case 53: var entry_method_text = 'youtube_watch'; break;
          case 54: var entry_method_text = 'pinterest_visit_page'; break;
          case 55: var entry_method_text = 'pinterest_follow_board'; break;
          case 56: var entry_method_text = 'pinterest_submit_board'; break;
          case 57: var entry_method_text = 'pinterest_submit_pin'; break;
          case 58: var entry_method_text = 'instagram_visit_profile'; break;
          case 59: var entry_method_text = 'instagram_submit_post'; break;
          case 60: var entry_method_text = 'instagram_like_post'; break;
          case 61: var entry_method_text = 'youtube_like_video'; break;
          case 62: var entry_method_text = 'youtube_submit_video'; break;
          case 63: var entry_method_text = 'secret_code'; break;
          case 64: var entry_method_text = 'facebook_page_like'; break;
          case 65: var entry_method_text = 'facebook_group_join'; break;
          case 66: var entry_method_text = 'facebook_post_comment'; break;
          case 67: var entry_method_text = 'facebook_post_like'; break;
          case 68: var entry_method_text = 'discord_join_server'; break;
          case 69: var entry_method_text = 'telegram_join_channel'; break;
          case 70: var entry_method_text = 'tiktok_follow'; break;
          case 71: var entry_method_text = 'facebook_post_share'; break;
          case 72: var entry_method_text = 'steam_join_group'; break;
          case 73: var entry_method_text = 'patreon_page_visit'; break;
          case 74: var entry_method_text = 'soundcloud_like_song'; break;
          case 75: var entry_method_text = 'soundcloud_repost_song'; break;
          case 76: var entry_method_text = 'soundcloud_submit_song'; break;
          case 77: var entry_method_text = 'mixer_follow'; break;
          case 78: var entry_method_text = 'soundcloud_listen_to_song'; break;
          case 79: var entry_method_text = 'spotify_follow'; break;
          case 80: var entry_method_text = 'spotify_listen_to_song'; break;
          case 81: var entry_method_text = 'snapchat_follow'; break;
          case 82: var entry_method_text = 'instagram_repost'; break;
          case 83: var entry_method_text = 'youtube_visit_channel'; break;
          case 84: var entry_method_text = 'facebook_post_visit'; break;
          case 85: var entry_method_text = 'pinterest_visit_pin'; break;
          case 86: var entry_method_text = 'tiktok_like'; break;
          case 87: var entry_method_text = 'tiktok_comment'; break;
          case 88: var entry_method_text = 'tiktok_share'; break;
          case 89: var entry_method_text = 'tiktok_visit'; break;
          case 90: var entry_method_text = 'tiktok_watch_video'; break;
          case 91: var entry_method_text = 'facebook_group_visit'; break;
          case 92: var entry_method_text = 'medium_clap'; break;
          case 93: var entry_method_text = 'medium_comment'; break;
          case 94: var entry_method_text = 'instagram_comment_post'; break;
          case 95: var entry_method_text = 'spotify_follow_playlist'; break;
          case 96: var entry_method_text = 'reddit_visit_a_page'; break;
          case 97: var entry_method_text = 'reddit_leave_a_comment'; break;
          case 98: var entry_method_text = 'telegram_leave_a_comment'; break;
          case 99: var entry_method_text = 'btc_crypto_wallet'; break;
          case 100: var entry_method_text = 'eth_bep20_crypto_wallet'; break;
          case 101: var entry_method_text = 'bep2_crypto_wallet'; break;
          case 102: var entry_method_text = 'other_crypto_wallet'; break;
          case 103: var entry_method_text = 'e_signature'; break;
          case 999: var entry_method_text = 'admin_manual'; break;
          default: var entry_method_text = 'user_details'; break;
          
      }
  
      return entry_method_text;
  
  }
  
  // Convert entry method from int to text
  function switch_entry_method_int_to_provider(entry_method) {
  
    entry_method = parseInt(entry_method);
  
    switch(entry_method)
    {
        case 1: var entry_method_text = 'None'; break;
        case 2: var entry_method_text = 'None'; break;
        case 3: var entry_method_text = 'None'; break;
        case 4: var entry_method_text = 'None'; break;
        case 5: var entry_method_text = 'None'; break;
        case 6: var entry_method_text = 'None'; break;
        case 7: var entry_method_text = 'Facebook'; break;
        case 8: var entry_method_text = 'Twitter'; break;
        case 9: var entry_method_text = 'Twitter'; break;
        case 10: var entry_method_text = 'Instagram'; break;
        case 11: var entry_method_text = 'Pinterest'; break;
        case 12: var entry_method_text = 'Pinterest'; break;
        case 15: var entry_method_text = 'Google'; break;
        case 16: var entry_method_text = 'None'; break;
        case 17: var entry_method_text = 'None'; break;
        case 18: var entry_method_text = 'None'; break;
        case 19: var entry_method_text = 'None'; break;
        case 20: var entry_method_text = 'None'; break;
        case 21: var entry_method_text = 'None'; break;
        case 22: var entry_method_text = 'None'; break;
        case 23: var entry_method_text = 'None'; break;
        case 24: var entry_method_text = 'None'; break;
        case 25: var entry_method_text = 'None'; break;
        case 26: var entry_method_text = 'None'; break;
        case 27: var entry_method_text = 'Instagram'; break;
        case 28: var entry_method_text = 'Soundcloud'; break;
        case 29: var entry_method_text = 'Myspace'; break;
        case 30: var entry_method_text = 'Etsy'; break;
        case 31: var entry_method_text = 'eBay'; break;
        case 32: var entry_method_text = 'Google'; break;
        case 33: var entry_method_text = 'None'; break;
        case 34: var entry_method_text = 'Disqus'; break;
        case 35: var entry_method_text = 'None'; break;
        case 36: var entry_method_text = 'Eventbrite'; break;
        case 37: var entry_method_text = 'Eventbrite'; break;
        case 38: var entry_method_text = 'Tumblr'; break;
        case 39: var entry_method_text = 'Tumblr'; break;
        case 40: var entry_method_text = 'StumbleUpon'; break;
        case 41: var entry_method_text = 'Reddit'; break;
        case 42: var entry_method_text = 'Vine'; break;
        case 43: var entry_method_text = 'TwitchTV'; break;
        case 44: var entry_method_text = 'TwitchTV'; break;
        case 45: var entry_method_text = 'Feedburner'; break;
        case 46: var entry_method_text = 'None'; break;
        case 47: var entry_method_text = 'Ety'; break;
        case 48: var entry_method_text = 'LinkedIn'; break;
        case 49: var entry_method_text = 'LinkedIn'; break;
        case 50: var entry_method_text = 'Twitter'; break;
        case 51: var entry_method_text = 'None'; break;
        case 52: var entry_method_text = 'None'; break;
        case 53: var entry_method_text = 'Google'; break;
        case 54: var entry_method_text = 'Pinterest'; break;
        case 55: var entry_method_text = 'Pinterest'; break;
        case 56: var entry_method_text = 'Pinterest'; break;
        case 57: var entry_method_text = 'Pinterest'; break;
        case 58: var entry_method_text = 'Instagram'; break;
        case 59: var entry_method_text = 'Instagram'; break;
        case 60: var entry_method_text = 'Instagram'; break;
        case 61: var entry_method_text = 'Google'; break;
        case 62: var entry_method_text = 'Google'; break;
        case 63: var entry_method_text = 'None'; break;
        case 64: var entry_method_text = 'Facebook'; break;
        case 65: var entry_method_text = 'Facebook'; break;
        case 66: var entry_method_text = 'Facebook'; break;
        case 67: var entry_method_text = 'Facebook'; break;
        case 68: var entry_method_text = 'Discord'; break;
        case 69: var entry_method_text = 'Telegram'; break;
        case 70: var entry_method_text = 'TikTok'; break;
        case 71: var entry_method_text = 'Facebook'; break;
        case 72: var entry_method_text = 'Steam'; break;
        case 73: var entry_method_text = 'Patreon'; break;
        case 74: var entry_method_text = 'Soundcloud'; break;
        case 75: var entry_method_text = 'Soundcloud'; break;
        case 76: var entry_method_text = 'Soundcloud'; break;
        case 77: var entry_method_text = 'Mixer'; break;
        case 78: var entry_method_text = 'Soundcloud'; break;
        case 79: var entry_method_text = 'Spotify'; break;
        case 80: var entry_method_text = 'Spotify'; break;
        case 81: var entry_method_text = 'Snapchat'; break;
        case 82: var entry_method_text = 'Instagram'; break;
        case 83: var entry_method_text = 'Google'; break;
        case 84: var entry_method_text = 'Facebook'; break;
        case 85: var entry_method_text = 'Pinterest'; break;
        case 86: var entry_method_text = 'TikTok'; break;
        case 87: var entry_method_text = 'TikTok'; break;
        case 88: var entry_method_text = 'TikTok'; break;
        case 89: var entry_method_text = 'TikTok'; break;
        case 90: var entry_method_text = 'TikTok'; break;
        case 91: var entry_method_text = 'Facebook'; break;
        case 92: var entry_method_text = 'Medium'; break;
        case 93: var entry_method_text = 'Medium'; break;
        case 94: var entry_method_text = 'Instagram'; break;
        case 95: var entry_method_text = 'Spotify'; break;
        case 96: var entry_method_text = 'Reddit'; break;
        case 97: var entry_method_text = 'Reddit'; break;
        case 98: var entry_method_text = 'Telegram'; break;
        case 999: var entry_method_text = 'None'; break;
        default: var entry_method_text = 'None'; break;
        
    }

    return entry_method_text;

}

  // Convert entry method from text to int
  function switch_entry_method_text_to_int(entry_method) {
      
      switch(entry_method) {
          
          case 'user_details': var entry_method_int = 1; break;
          case 'email_subscribe': var entry_method_int = 2; break;
          case 'blog_comment': var entry_method_int = 3; break;
          case 'visit_a_page': var entry_method_int = 4; break;
          case 'refer_friends': var entry_method_int = 5; break;
          case 'upload_a_file': var entry_method_int = 6; break;
          case 'facebook_page_visit': var entry_method_int = 7; break;
          case 'twitter_follow': var entry_method_int = 8; break;
          case 'twitter_tweet': var entry_method_int = 9; break;
          case 'instagram_follow': var entry_method_int = 10; break;
          case 'pinterest_follow_user': var entry_method_int = 11; break;
          case 'pinterest_repin_pin': var entry_method_int = 12; break;
          case 'youtube_channel_subscribe': var entry_method_int = 15; break;
          case 'text_input': var entry_method_int = 16; break;
          case 'select': var entry_method_int = 17; break;
          case 'radio': var entry_method_int = 18; break;
          case 'textarea': var entry_method_int = 19; break;
          case 'checkbox': var entry_method_int = 20; break;
          case 'checkboxes': var entry_method_int = 21; break;
          case 'birthday': var entry_method_int = 22; break;
          case 'full_name': var entry_method_int = 23; break;
          case 'address': var entry_method_int = 24; break;
          case 'phone_number': var entry_method_int = 25; break;
          case 'custom': var entry_method_int = 26; break;
          case 'instagram_view_post': var entry_method_int = 27; break;
          case 'soundcloud_follow': var entry_method_int = 28; break;
          case 'myspace_follow': var entry_method_int = 29; break;
          case 'etsy_follow': var entry_method_int = 30; break;
          case 'ebay_follow': var entry_method_int = 31; break;
          case 'youtube_comment': var entry_method_int = 32; break;
          case 'app_download': var entry_method_int = 33; break;
          case 'disqus_comment': var entry_method_int = 34; break;
          case 'bonus': var entry_method_int = 35; break;
          case 'attend_eventbrite_event': var entry_method_int = 36; break;
          case 'attend_eventbrite_venue': var entry_method_int = 37; break;
          case 'tumblr_follow': var entry_method_int = 38; break;
          case 'tumblr_like_post': var entry_method_int = 39; break;
          case 'stumbleupon_like_post': var entry_method_int = 40; break;
          case 'reddit_subscribe': var entry_method_int = 41; break;
          case 'vine_follow': var entry_method_int = 42; break;
          case 'twitch_follow': var entry_method_int = 43; break;
          case 'twitch_subscribe': var entry_method_int = 44; break;
          case 'feedburner': var entry_method_int = 45; break;
          case 'bloglovin_follow': var entry_method_int = 46; break;
          case 'etsy_item': var entry_method_int = 47; break;
          case 'linkedin_share': var entry_method_int = 48; break;
          case 'linkedin_follow': var entry_method_int = 49; break;
          case 'twitter_retweet': var entry_method_int = 50; break;
          case 'feedpress': var entry_method_int = 51; break;
          case 'rss': var entry_method_int = 52; break;
          case 'youtube_watch': var entry_method_int = 53; break;
          case 'pinterest_visit_page': var entry_method_int = 54; break;
          case 'pinterest_follow_board': var entry_method_int = 55; break;
          case 'pinterest_submit_board': var entry_method_int = 56; break;
          case 'pinterest_submit_pin': var entry_method_int = 57; break;
          case 'instagram_visit_profile': var entry_method_int = 58; break;
          case 'instagram_submit_post': var entry_method_int = 59; break;
          case 'instagram_like_post': var entry_method_int = 60; break;
          case 'youtube_like_video': var entry_method_int = 61; break;
          case 'youtube_submit_video': var entry_method_int = 62; break;
          case 'secret_code': var entry_method_int = 63; break;
          case 'facebook_page_like': var entry_method_int = 64; break;
          case 'facebook_group_join': var entry_method_int = 65; break;
          case 'facebook_post_comment': var entry_method_int = 66; break;
          case 'facebook_post_like': var entry_method_int = 67; break;
          case 'discord_join_server': var entry_method_int = 68; break;
          case 'telegram_join_channel': var entry_method_int = 69; break;
          case 'tiktok_follow': var entry_method_int = 70; break;
          case 'facebook_post_share': var entry_method_int = 71; break;
          case 'steam_join_group': var entry_method_int = 72; break;
          case 'patreon_page_visit': var entry_method_int = 73; break;
          case 'soundcloud_like_song': var entry_method_int = 74; break;
          case 'soundcloud_repost_song': var entry_method_int = 75; break;
          case 'soundcloud_submit_song': var entry_method_int = 76; break;
          case 'mixer_follow': var entry_method_int = 77; break;
          case 'soundcloud_listen_to_song': var entry_method_int = 78; break;
          case 'spotify_follow': var entry_method_int = 79; break;
          case 'spotify_listen_to_song': var entry_method_int = 80; break;
          case 'snapchat_follow': var entry_method_int = 81; break;
          case 'instagram_repost': var entry_method_int = 82; break;
          case 'youtube_visit_channel': var entry_method_int = 83; break;
          case 'facebook_post_visit': var entry_method_int = 84; break;
          case 'pinterest_visit_pin': var entry_method_int = 85; break;
          case 'tiktok_like': var entry_method_int = 86; break;
          case 'tiktok_comment': var entry_method_int = 87; break;
          case 'tiktok_share': var entry_method_int = 88; break;
          case 'tiktok_visit': var entry_method_int = 89; break;
          case 'tiktok_watch_video': var entry_method_int = 90; break;
          case 'facebook_group_visit': var entry_method_int = 91; break;
          case 'medium_clap': var entry_method_int = 92; break;
          case 'medium_comment': var entry_method_int = 93; break;
          case 'instagram_comment_post': var entry_method_int = 94; break;
          case 'spotify_follow_playlist': var entry_method_int = 95; break;
          case 'reddit_visit_a_page': var entry_method_int = 96; break;
          case 'reddit_leave_a_comment': var entry_method_int = 97; break;
          case 'telegram_leave_a_comment': var entry_method_int = 98; break;
          case 'btc_crypto_wallet': var entry_method_int = 99; break;
          case 'eth_bep20_crypto_wallet': var entry_method_int = 100; break;
          case 'bep2_crypto_wallet': var entry_method_int = 101; break;
          case 'other_crypto_wallet': var entry_method_int = 102; break;
          case 'e_signature': var entry_method_int = 103; break;
          case 'admin_manual': var entry_method_int = 999; break;
  
          default: var entry_method_int = 1; break;
             
      }
      
      return entry_method_int;
      
  }
  
  // Check if entry method requires a link or username
  function entry_link_url_or_username(entry_method) {
      
      var substring = '';
      
      // 0 = none, 1 = link, 2 = username
      
      switch(entry_method) {
          
          case 1: var link_or_username = 0; break; // user_details
          case 2: var link_or_username = 0; break; // email_subscribe
          case 3: var link_or_username = 1; var substring = '.'; break; // blog_comment
          case 4: var link_or_username = 1; var substring = '.'; break; // visit_a_page
          case 5: var link_or_username = 0; break; // refer_friends
          case 6: var link_or_username = 0; break; // upload_a_file
          case 7: var link_or_username = 1; var substring = 'facebook.'; break; // facebook_page_visit
          case 8: var link_or_username = 2; break; // twitter_follow
          case 9: var link_or_username = 0; var substring = 'twitter.'; break; // twitter_tweet
          case 10: var link_or_username = 2; break; // instagram_follow
          case 11: var link_or_username = 2; break; // pinterest_follow_user
          case 12: var link_or_username = 1; var substring = 'pinterest.'; break; // pinterest_repin_pin
          case 15: var link_or_username = 0; break; //  var substring = 'youtube.'; break; // youtube_channel_subscribe
          case 16: var link_or_username = 0; break; // text_input
          case 17: var link_or_username = 0; break; // select
          case 18: var link_or_username = 0; break; // radio
          case 19: var link_or_username = 0; break; // textarea
          case 20: var link_or_username = 0; break; // checkbox
          case 21: var link_or_username = 0; break; // checkboxes
          case 22: var link_or_username = 0; break; // birthday
          case 23: var link_or_username = 0; break; // full_name
          case 24: var link_or_username = 0; break; // address
          case 25: var link_or_username = 0; break; // phone_number
          case 26: var link_or_username = 0; break; // custom
          case 27: var link_or_username = 1; var substring = 'instagram.'; break; // instagram_view_post
          case 28: var link_or_username = 1; var substring = 'soundcloud.'; break; // soundcloud_follow
          case 29: var link_or_username = 1; var substring = 'myspace.'; break; // myspace_follow
          case 30: var link_or_username = 1; var substring = 'etsy.'; break; // etsy_follow
          case 31: var link_or_username = 1; var substring = 'ebay.'; break; // ebay_follow
          case 32: var link_or_username = 0; break; //  var substring = 'youtube.'; break; // youtube_comment
          case 33: var link_or_username = 0; break; // app_download *** Make this check both fields ***
          case 34: var link_or_username = 1; var substring = '.'; break; // disqus_comment
          case 35: var link_or_username = 0; break; // bonus
          case 36: var link_or_username = 1; var substring = 'eventbrite.'; break; // attend_eventbrite_event
          case 37: var link_or_username = 1; var substring = 'eventbrite.'; break; // attend_eventbrite_venue
          case 38: var link_or_username = 1; var substring = 'tumblr.'; break; // tumblr_follow
          case 39: var link_or_username = 1; var substring = 'tumblr.'; break; // tumblr_like_post
          case 40: var link_or_username = 1; var substring = 'stumbleupon.'; break; // stumbleupon_like_post
          case 41: var link_or_username = 1; var substring = 'reddit.'; break; // reddit_subscribe
          case 42: var link_or_username = 1; var substring = 'vine.'; break; // vine_follow
          case 43: var link_or_username = 1; var substring = 'twitch.'; break; // twitch_follow
          case 44: var link_or_username = 1; var substring = 'twitch.'; break; // twitch_subscribe
          case 45: var link_or_username = 1; var substring = 'feedburner.'; break; // feedburner
          case 46: var link_or_username = 1; var substring = 'bloglovin.'; break; // bloglovin_follow
          case 47: var link_or_username = 1; var substring = 'etsy.'; break; // etsy_item
          case 48: var link_or_username = 1; var substring = 'http'; break; // linkedin_share
          case 49: var link_or_username = 1; var substring = 'linkedin.'; break; // linkedin_follow
          case 50: var link_or_username = 1; var substring = 'twitter.'; break; // twitter_retweet
          case 51: var link_or_username = 1; var substring = 'mailverify'; break; // feedpress
          case 52: var link_or_username = 0; break; // rss
          case 53: var link_or_username = 0; break; // var substring = 'youtube.'; // youtube_watch
          case 54: var link_or_username = 0; break; // var substring = 'pinterest.com'; // pinterest_visit_page
          case 55: var link_or_username = 1; var substring = 'pinterest.'; break; // pinterest_follow_board
          case 56: var link_or_username = 0; break; // pinterest_submit_board
          case 57: var link_or_username = 0; break; // pinterest_submit_pin
          case 58: var link_or_username = 1; var substring = 'instagram.'; break; // instagram_visit_profile
          case 59: var link_or_username = 0; break; // instagram_submit_post
          case 60: var link_or_username = 1; var substring = 'instagram.'; break; // instagram_like_post
          case 61: var link_or_username = 0; break; // var substring = 'youtube.'; break; // youtube_like_video
          case 62: var link_or_username = 0; break; // youtube_submit_video
          case 63: var link_or_username = 0; break; // secret_code
          case 64: var link_or_username = 1; var substring = 'facebook.'; break; // facebook_page_like
          case 65: var link_or_username = 1; var substring = 'facebook.'; break; // facebook_group_join
          case 66: var link_or_username = 1; var substring = 'facebook.'; break; // facebook_post_comment
          case 67: var link_or_username = 1; var substring = 'facebook.'; break; // facebook_post_like
          case 68: var link_or_username = 1; var substring = 'discord'; break; // discord_join_server
          case 69: var link_or_username = 0; break; // telegram_join_channel
          case 70: var link_or_username = 1; var substring = 'tiktok'; break; // tiktok_follow
          case 71: var link_or_username = 1; var substring = 'facebook.'; break; // facebook_post_share
          case 72: var link_or_username = 1; var substring = 'steam'; break; // steam_join_group
          case 73: var link_or_username = 1; var substring = 'patreon'; break; // patreon_page_visit
          case 74: var link_or_username = 1; var substring = 'soundcloud.'; break; // soundcloud_like_song
          case 75: var link_or_username = 1; var substring = 'soundcloud.'; break; // soundcloud_repost_song
          case 76: var link_or_username = 0; break; // soundcloud_submit_song
          case 77: var link_or_username = 1; var substring = 'mixer.'; break; // mixer_follow
          case 78: var link_or_username = 1; var substring = 'soundcloud.'; break; // soundcloud_listen_to_song
          case 79: var link_or_username = 1; var substring = 'spotify.'; break; // spotify_follow
          case 80: var link_or_username = 1; var substring = 'spotify.'; break; // spotify_listen_to_song
          case 81: var link_or_username = 0; break; // snapchat_follow
          case 82: var link_or_username = 1; var substring = 'instagram.'; break; // instagram_repost
          case 83: var link_or_username = 1; var substring = 'youtube.'; break; // youtube_visit_channel
          case 84: var link_or_username = 1; var substring = 'facebook.'; break; // facebook_post_visit
          case 85: var link_or_username = 0; break; //var substring = 'pinterest.'; break; // pinterest_visit_pin
          case 86: var link_or_username = 1; var substring = 'tiktok'; break; // tiktok_like
          case 87: var link_or_username = 1; var substring = 'tiktok'; break; // tiktok_comment
          case 88: var link_or_username = 1; var substring = 'tiktok'; break; // tiktok_share
          case 89: var link_or_username = 1; var substring = 'tiktok'; break; // tiktok_visit
          case 90: var link_or_username = 1; var substring = 'tiktok'; break; // tiktok_watch_video
          case 91: var link_or_username = 1; var substring = 'facebook'; break; // facebook_group_visit
          case 92: var link_or_username = 1; var substring = 'medium'; break; // medium_clap
          case 93: var link_or_username = 1; var substring = 'medium'; break; // medium_comment
          case 94: var link_or_username = 1; var substring = 'instagram'; break; // instagram_comment_post
          case 95: var link_or_username = 1; var substring = 'spotify'; break; // spotify_follow_playlist
          case 96: var link_or_username = 1; var substring = 'reddit'; break; // reddit_visit_a_page
          case 97: var link_or_username = 1; var substring = 'reddit'; break; // reddit_leave_a_comment
          case 98: var link_or_username = 0; break; // telegram_leave_a_comment
          case 99: var link_or_username = 0; break; // btc_crypto_wallet
          case 100: var link_or_username = 0; break; // eth_bep20_crypto_wallet
          case 101: var link_or_username = 0; break; // bep2_crypto_wallet
          case 102: var link_or_username = 0; break; // other_crypto_wallet
          case 103: var link_or_username = 0; break; // e_signature
          case 999: var link_or_username = 0; break; // admin_manual
          
          default: var link_or_username = 0; break; // none
  
      }
      
      return link_or_username + '|' + substring;
      
  }
  
  function form_builder_widget( title, description, rules, age_verification, image_loc, image_ext, days_left ) {
      
      if(entry_methods_level_two_count > 0) {
          
          var unlock_additional_entries_text = 'Enter To Unlock More Entries!';
          
          if( entry_methods_level_two_required_count > 0
              && user_required_entry_methods_finished == 0
              && entry_methods_level_two_not_required_count > 0 ) {
  
              var entry_level_two_text = 'Unlock <span id="sw_non_required_entry_methods_count">' + user_remaining_entry_methods_not_required_count + '</span> More Entry Method' + if_add_plural( user_remaining_entry_methods_not_required_count ) + '!';
              
          } else {
              
              if( user_required_entry_methods_finished == 1 ) {
                  var more_ways_to_enter_count = user_remaining_entry_methods_not_required_count;
              } else {
                  var more_ways_to_enter_count = entry_methods_level_two_count;
              }
  
              var entry_level_two_text = more_ways_to_enter_count + ' More Way' + if_add_plural( more_ways_to_enter_count ) + ' To Enter!';
  
          }
  
      } else {
          var entry_methods_level_two_count = 0;
          var unlock_additional_entries_text = '';
          var entry_level_two_text = '';
      }
  
      if( age_verification == 1 ) {
  
          var input_birthday_month = '<select name="sw_input_birthday_month" id="sw_input_birthday_month" class="sw_select_third_l"><option value="">mm</option></select>';
          var input_birthday_day = '<select name="sw_input_birthday_day" id="sw_input_birthday_day" class="sw_select_third_m"><option value="">dd</option></select>';
          var input_birthday_year = '<select name="sw_input_birthday_year" id="sw_input_birthday_year" class="sw_select_third_r"><option value="">yyyy</option></select>';
  
          var input_birthday =
              '<div class="sw_row_2">' + 
                  '<div id="sw_input_birthday_header" class="sw_row_2_l">Enter Your Birthday</div>' + 
                  '<div class="sw_row_2_r_center">' + 
                      input_birthday_month + 
                      input_birthday_day + 
                      input_birthday_year + 
                  '</div>' + 
              '</div>';
  
      } else {
          var input_birthday = '';
      }
  
      var days_remaining_text = '';
  
      var wecome_text_1 = '<div id="sw_welcome_back_row_shell"></div>';
      var wecome_text_2 = '<div class="sw_welcome_back_row"><i>Hey ' + user_name + '!</i></div>';
  
      var login_fields_1 = '<div class="sw_login"> <div class="sw_text_1">Fill in fields to enter this giveaway.</div> <div class="sw_row_2"><div id="sw_login_name_header" class="sw_row_2_l">Name</div> <div class="sw_row_2_r"><input maxlength="255" class="sw_text_input" type="text" name="sw_login_name" /> </div> </div> <div class="sw_row_2"><div id="sw_login_email_header" class="sw_row_2_l">Email</div> <div class="sw_row_2_r"><input maxlength="255" class="sw_text_input" type="email" name="sw_login_email" /></div></div> ' + input_birthday + ' </div> <div id="login_button_holder" class="sw_row_2"><input id="sw_login_button" class="sw_login_input" type="button" name="sw_login" value="Enter" /></div> <div id="login_button_loading_holder" class="sw_row_2">Logging In... &nbsp;<img style="margin-bottom:-10px;" src="' + website_url + '/images/gears.gif" width="40" height="40" alt="Preview" /></div> <div class="sw_unlock_additional_entries">' + unlock_additional_entries_text + '</div>';
  
      var logout_holder_1 = '<div id="sw_logout_link_holder_shell"></div>';
  
      if( cors_jsonp == 1 ) {
          var logout_holder_2 = '<div id="sw_logout_link_holder"> <div id="sw_logout_link">Logout</div> </div>';
      } else {
          var logout_holder_2 = '';
      }
  
      var days_remaining_text = '<div class="sw_top_row_1">Day' + if_add_plural( days_left ) + '</div> <div class="sw_top_row_2">Remaining</div>';
  
      // *** Logged Out *** //
      // TODO: check if user_id is declared somewhere or not?
      if( user_id == 0 || user_id == '' ) {
  
          var wecome_text = wecome_text_1;
          var login_fields = login_fields_1;
          var logout_holder = logout_holder_1;
  
      // *** Logged In *** //
  
      // 0 Entries // Include confirm login // Returning user - new sweep
      } else if( user_id !== ''
                 && user_entry_amount == 0 ) {
  
          var wecome_text = wecome_text_2;
          var login_fields = '<div class="sw_login"> <div class="sw_text_1">Fill in fields to enter this giveaway.</div>  </div>' + // Level 1 additional entry methods
          '<div id="login_button_holder" class="sw_row_2"><input id="sw_confirm_login_button" class="sw_confirm_login_input" type="button" name="sw_login" value="Enter" /></div> <div id="login_button_loading_holder" class="sw_row_2">Logging In... &nbsp;<img style="margin-bottom:-10px;" src="' + website_url + '/images/gears.gif" width="40" height="40" alt="Preview" /></div> <div class="sw_unlock_additional_entries">' + unlock_additional_entries_text + '</div>';
          var logout_holder = logout_holder_2;
  
  
      // 1 level 1 Entry // Exclude confirm login // user has already completed level 1 entries
      } else if( user_id !== ''
                 && user_entry_amount > 0
                 && user_remaining_entry_methods_count > 0 ) {
  
          var wecome_text = wecome_text_2;
          var login_fields = login_fields_1;
          var logout_holder = logout_holder_2;
  
      } else { // User completed sweep
  
          var wecome_text = wecome_text_2;
          var login_fields = '';
          var logout_holder = '';
  
      }
  
  
      // Logged In
      if( user_id !== '' ) {
          var logout_holder = logout_holder_2;
  
      // Logged Out
      } else {
          var logout_holder = logout_holder_1
      }
  
      // Expired
      if(days_left < 0) {
          var days_left = 0;
          var days_remaining_text = '<div class="sw_top_row_1">0 Days</div> <div class="sw_top_row_2">Remaining</div>';
          var login_fields = '<p>Sorry, but this giveaway has already ended!</p>';
      }
  
  
      // *** START APPEND MAIN BODY ***
  
      // CONTAINER
      $( '.sw_inner_2' ).html( '<div class="sw_top"></div>' );
  
      // TOP
      $( '.sw_top' ).append( '<div class="sw_top_1"> <div class="sw_top_l">' + days_left + '</div> <div class="sw_top_row">' + days_remaining_text + '</div> </div> <div class="sw_top_2"> <div class="sw_top_l"> <span id="sw_my_entries">' + user_entry_amount + '</span> </div> <div class="sw_top_row"> <div class="sw_top_row_1">My</div> <div class="sw_top_row_2">Entries</div> </div> </div> <div class="sw_top_3"> <div class="sw_top_l"><span id="sw_total_entries_count_all">' + total_entries_count + '</span></div> <div class="sw_top_row"> <div class="sw_top_row_1">Total</div> <div class="sw_top_row_2">Entries</div> </div> </div>' );
  
      // BODY
      $( '.sw_inner_2' ).append( '<div class="sw_header">' + title + '</div> <div class="sw_image"><img src="' + base_url + '/' + image_loc + '.thumb_600_width.' + image_ext + '" /></div> <div class="sw_desc">' + wecome_text + description + '</div>' + login_fields );
  
      // Make existing entries methods for returning user
      $( '.sw_inner_2' ).append( '<div class="sw_inner_entry_methods"> <div id="sw_entry_amount_allowed_text">' + entry_level_two_text + '</div> <div id="sw_entry_method_result_text">You\'ve earned <span class="sw_entry_amount_num">' + user_entry_amount + '</span> ' + if_add_plural_entries( user_entry_amount, 'e' ) + ':</div> <div id="sw_entry_method_result_amount"> </div> <div id="sw_entry_method_result_icons"><img src="' + base_url + '/images/form.png" width="40" height="40" /></div> <div id="sw_message_holder"> </div>' +
  
      // HIDDEN FIELDS ( all for level 1 )
  
      '<input type="hidden" name="sw_entry_methods_level_one_all" id="sw_entry_methods_level_one_all" value="" />' + // Entry method |id ( level 1 entry methods )
      '<input type="hidden" name="sw_entry_methods_level_one_required" id="sw_entry_methods_level_one_required" value="" />' + // Entry method |id ( level 1 entry methods required )
      '<input type="hidden" name="sw_login_errors_holder" />' + // Login errors (boolean)
  
      // RULES / LOGOUT LINK
      '</div> <div id="sw_contest_rules_link_holder"> <div id="sw_contest_rules_link">Contest Rules</div> </div> <div id="sw_contest_rules_holder_outside"> <div id="sw_contest_rules_holder">' + rules + '</div> ' + logout_holder + ' </div>' );
  
  
      if( age_verification == 1 ) {
  
          for( var i = 1; i <= 12; i++ ) {
              $( '#sw_input_birthday_month' )
               .append( $( '<option></option>' )
               .attr( 'value', i)
               .text( i )); 
          }
  
          for( var i = 1; i <= 31; i++ ) {
              $( '#sw_input_birthday_day' )
               .append( $( '<option></option>' )
               .attr( 'value', i)
               .text( i )); 
          }
  
          var year = new Date().getFullYear() - 5;
          for(i = year; i >= 1900; i-- ) {
              $( '#sw_input_birthday_year' )
              .append( $( '<option></option>' )
              .attr( 'value', i )
              .text( i ));
          }
  
      } else {
  
      }
  
  
      // *** END APPEND MAIN BODY *** 
  
  
      // Logout link click handler
      if( cors_jsonp == 1 ) {
          $(document.body).on('click', '#sw_logout_link', function() {
              user_logout( script_login, cors_jsonp );
          } );
      }
  
      // Click contest rules (toggle rules)
      $(document.body).on('click', '#sw_contest_rules_link', function() {
          $( '#' + sw_f + '#sw_contest_rules_holder' ).slideToggle();
      } );
  
  }
  
  // Convert country code to abbreviation
  var isoCountries = {
      'Afghanistan': 'AF',
      'Aland Islands': 'AX',
      'Albania': 'AL',
      'Algeria': 'DZ',
      'American Samoa': 'AS',
      'Andorra': 'AD',
      'Angola': 'AO',
      'Anguilla': 'AI',
      'Antarctica': 'AQ',
      'Antigua And Barbuda': 'AG',
      'Argentina': 'AR',
      'Armenia': 'AM',
      'Aruba': 'AW',
      'Australia': 'AU',
      'Austria': 'AT',
      'Azerbaijan': 'AZ',
      'Bahamas': 'BS',
      'Bahrain': 'BH',
      'Bangladesh': 'BD',
      'Barbados': 'BB',
      'Belarus': 'BY',
      'Belgium': 'BE',
      'Belize': 'BZ',
      'Benin': 'BJ',
      'Bermuda': 'BM',
      'Bhutan': 'BT',
      'Bolivia': 'BO',
      'Bosnia And Herzegovina': 'BA',
      'Botswana': 'BW',
      'Bouvet Island': 'BV',
      'Brazil': 'BR',
      'British Indian Ocean Territory': 'IO',
      'Brunei Darussalam': 'BN',
      'Bulgaria': 'BG',
      'Burkina Faso': 'BF',
      'Burundi': 'BI',
      'Cambodia': 'KH',
      'Cameroon': 'CM',
      'Canada': 'CA',
      'Cape Verde': 'CV',
      'Cayman Islands': 'KY',
      'Central African Republic': 'CF',
      'Chad': 'TD',
      'Chile': 'CL',
      'China': 'CN',
      'Christmas Island': 'CX',
      'Cocos (Keeling) Islands': 'CC',
      'Colombia': 'CO',
      'Comoros': 'KM',
      'Congo': 'CG',
      'Congo, Democratic Republic': 'CD',
      'Cook Islands': 'CK',
      'Costa Rica': 'CR',
      'Cote D\'Ivoire': 'CI',
      'Croatia': 'HR',
      'Cuba': 'CU',
      'Cyprus': 'CY',
      'Czech Republic': 'CZ',
      'Denmark': 'DK',
      'Djibouti': 'DJ',
      'Dominica': 'DM',
      'Dominican Republic': 'DO',
      'Ecuador': 'EC',
      'Egypt': 'EG',
      'El Salvador': 'SV',
      'Equatorial Guinea': 'GQ',
      'Eritrea': 'ER',
      'Estonia': 'EE',
      'Ethiopia': 'ET',
      'Falkland Islands': 'FK',
      'Faroe Islands': 'FO',
      'Fiji': 'FJ',
      'Finland': 'FI',
      'France': 'FR',
      'French Guiana': 'GF',
      'French Polynesia': 'PF',
      'French Southern Territories': 'TF',
      'Gabon': 'GA',
      'Gambia': 'GM',
      'Georgia': 'GE',
      'Germany': 'DE',
      'Ghana': 'GH',
      'Gibraltar': 'GI',
      'Greece': 'GR',
      'Greenland': 'GL',
      'Grenada': 'GD',
      'Guadeloupe': 'GP',
      'Guam': 'GU',
      'Guatemala': 'GT',
      'Guernsey': 'GG',
      'Guinea': 'GN',
      'Guinea-Bissau': 'GW',
      'Guyana': 'GY',
      'Haiti': 'HT',
      'Heard Island & Mcdonald Islands': 'HM',
      'Holy See (Vatican City State)': 'VA',
      'Honduras': 'HN',
      'Hong Kong': 'HK',
      'Hungary': 'HU',
      'Iceland': 'IS',
      'India': 'IN',
      'Indonesia': 'ID',
      'Iran, Islamic Republic Of': 'IR',
      'Iraq': 'IQ',
      'Ireland': 'IE',
      'Isle Of Man': 'IM',
      'Israel': 'IL',
      'Italy': 'IT',
      'Jamaica': 'JM',
      'Japan': 'JP',
      'Jersey': 'JE',
      'Jordan': 'JO',
      'Kazakhstan': 'KZ',
      'Kenya': 'KE',
      'Kiribati': 'KI',
      'Korea': 'KR',
      'Kuwait': 'KW',
      'Kyrgyzstan': 'KG',
      'Lao People\'s Democratic Republic': 'LA',
      'Latvia': 'LV',
      'Lebanon': 'LB',
      'Lesotho': 'LS',
      'Liberia': 'LR',
      'Libyan Arab Jamahiriya': 'LY',
      'Liechtenstein': 'LI',
      'Lithuania': 'LT',
      'Luxembourg': 'LU',
      'Macao': 'MO',
      'Macedonia': 'MK',
      'Madagascar': 'MG',
      'Malawi': 'MW',
      'Malaysia': 'MY',
      'Maldives': 'MV',
      'Mali': 'ML',
      'Malta': 'MT',
      'Marshall Islands': 'MH',
      'Martinique': 'MQ',
      'Mauritania': 'MR',
      'Mauritius': 'MU',
      'Mayotte': 'YT',
      'Mexico': 'MX',
      'Micronesia, Federated States Of': 'FM',
      'Moldova': 'MD',
      'Monaco': 'MC',
      'Mongolia': 'MN',
      'Montenegro': 'ME',
      'Montserrat': 'MS',
      'Morocco': 'MA',
      'Mozambique': 'MZ',
      'Myanmar': 'MM',
      'Namibia': 'NA',
      'Nauru': 'NR',
      'Nepal': 'NP',
      'Netherlands': 'NL',
      'Netherlands Antilles': 'AN',
      'New Caledonia': 'NC',
      'New Zealand': 'NZ',
      'Nicaragua': 'NI',
      'Niger': 'NE',
      'Nigeria': 'NG',
      'Niue': 'NU',
      'Norfolk Island': 'NF',
      'Northern Mariana Islands': 'MP',
      'Norway': 'NO',
      'Oman': 'OM',
      'Pakistan': 'PK',
      'Palau': 'PW',
      'Palestinian Territory, Occupied': 'PS',
      'Panama': 'PA',
      'Papua New Guinea': 'PG',
      'Paraguay': 'PY',
      'Peru': 'PE',
      'Philippines': 'PH',
      'Pitcairn': 'PN',
      'Poland': 'PL',
      'Portugal': 'PT',
      'Puerto Rico': 'PR',
      'Qatar': 'QA',
      'Reunion': 'RE',
      'Romania': 'RO',
      'Russian Federation': 'RU',
      'Rwanda': 'RW',
      'Saint Barthelemy': 'BL',
      'Saint Helena': 'SH',
      'Saint Kitts And Nevis': 'KN',
      'Saint Lucia': 'LC',
      'Saint Martin': 'MF',
      'Saint Pierre And Miquelon': 'PM',
      'Saint Vincent And Grenadines': 'VC',
      'Samoa': 'WS',
      'San Marino': 'SM',
      'Sao Tome And Principe': 'ST',
      'Saudi Arabia': 'SA',
      'Senegal': 'SN',
      'Serbia': 'RS',
      'Seychelles': 'SC',
      'Sierra Leone': 'SL',
      'Singapore': 'SG',
      'Slovakia': 'SK',
      'Slovenia': 'SI',
      'Solomon Islands': 'SB',
      'Somalia': 'SO',
      'South Africa': 'ZA',
      'South Georgia And Sandwich Isl.': 'GS',
      'Spain': 'ES',
      'Sri Lanka': 'LK',
      'Sudan': 'SD',
      'Suriname': 'SR',
      'Svalbard And Jan Mayen': 'SJ',
      'Swaziland': 'SZ',
      'Sweden': 'SE',
      'Switzerland': 'CH',
      'Syrian Arab Republic': 'SY',
      'Taiwan': 'TW',
      'Tajikistan': 'TJ',
      'Tanzania': 'TZ',
      'Thailand': 'TH',
      'Timor-Leste': 'TL',
      'Togo': 'TG',
      'Tokelau': 'TK',
      'Tonga': 'TO',
      'Trinidad And Tobago': 'TT',
      'Tunisia': 'TN',
      'Turkey': 'TR',
      'Turkmenistan': 'TM',
      'Turks And Caicos Islands': 'TC',
      'Tuvalu': 'TV',
      'Uganda': 'UG',
      'Ukraine': 'UA',
      'United Arab Emirates': 'AE',
      'United Kingdom': 'GB',
      'United States': 'US',
      'United States Outlying Islands': 'UM',
      'Uruguay': 'UY',
      'Uzbekistan': 'UZ',
      'Vanuatu': 'VU',
      'Venezuela': 'VE',
      'Vietnam': 'VN',
      'Virgin Islands, British': 'VG',
      'Virgin Islands, U.S.': 'VI',
      'Wallis And Futuna': 'WF',
      'Western Sahara': 'EH',
      'Yemen': 'YE',
      'Zambia': 'ZM',
      'Zimbabwe': 'ZW'
  };
  
  // Convert all allowed countries to abbreviation. I do this because the CloudFlare country code is an abbreviation. So, I want to see if the user country code is in the allowed countries array.
  function if_user_country_code_is_in_array( user_country_code, countries_allowed ) {
      
      // If countries_allowed = Worldwide, all users are allowed. So, return true;
      if( countries_allowed === 'Worldwide' ) {
          
          return true;
          
      // There's 1 or more specific countries allowed. So, loop through them, convert them all to an abbreviation, and turn it into an array.
          
      } else {
          
          // Split countries by ",". If it's only on element, it will just loop the one element. It will work with 1 or more elements.
          var countryCodeSplit = (countries_allowed || '').split(','); 
          
          // How many elements are there
          var countryCount = countryCodeSplit.length;
          
          // Declare empty array
          var countryCodeArray = [];
          
          // Loop through all countries allowed
          for (var i = 0; i < countryCount; i++) {
              
              // Convert full country name to abbreviation and add it to array
              countryCodeArray.push(isoCountries[trim(countryCodeSplit[i])]);
              
          }
          
          // User country is in allowed countries array, return true
          if( $.inArray( user_country_code, countryCodeArray ) != -1 ) {
              
              return true;
              
          // User country is not in allowed countries array, return false
          } else {
              
              return false;
              
          }
          
      }
      
  }
  
  function if_user_allowed_countries_is_in_array( user_allowed_countries_list ) {
      
      var countries = [ 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Democratic Republic of the Congo', 'Republic of the Congo', 'Costa Rica', 'Cote d\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe' ];
      
  }


  function language_drop_down_list() {

    var array = {   "Afrikaans":  "af",
                    "Albanian":  "sq",
                    "Amharic":  "am",
                    "Arabic":  "ar",
                    "Armenian":  "hy",
                    "Azerbaijani":  "az",
                    "Basque":  "eu",
                    "Belarusian":  "be",
                    "Bengali":  "bn",
                    "Bosnian":  "bs",
                    "Bulgarian":  "bg",
                    "Catalan":  "ca",
                    "Cebuano":  "ceb",
                    "Chinese":  "zh-TW",
                    "Corsican":  "co",
                    "Croatian":  "hr",
                    "Czech":  "cs",
                    "Danish":  "da",
                    "Dutch":  "nl",
                    "English":  "en",
                    "Esperanto":  "eo",
                    "Estonian":  "et",
                    "Finnish":  "fi",
                    "French":  "fr",
                    "Frisian":  "fy",
                    "Galician":  "gl",
                    "Georgian":  "ka",
                    "German":  "de",
                    "Greek":  "el",
                    "Gujarati":  "gu",
                    "Haitian":  "ht",
                    "Hausa":  "ha",
                    "Hawaiian":  "haw",
                    "Hebrew":  "iw",
                    "Hindi":  "hi",
                    "Hmong":  "hmn",
                    "Hungarian":  "hu",
                    "Icelandic":  "is",
                    "Igbo":  "ig",
                    "Indonesian":  "id",
                    "Irish":  "ga",
                    "Italian":  "it",
                    "Japanese":  "ja",
                    "Javanese":  "jw",
                    "Kannada":  "kn",
                    "Kazakh":  "kk",
                    "Khmer":  "km",
                    "Korean":  "ko",
                    "Kurdish":  "ku",
                    "Kyrgyz":  "ky",
                    "Lao":  "lo",
                    "Latin":  "la",
                    "Latvian":  "lv",
                    "Lithuanian":  "lt",
                    "Luxembourgish":  "lb",
                    "Macedonian":  "mk",
                    "Malagasy":  "mg",
                    "Malay":  "ms",
                    "Malayalam":  "ml",
                    "Maltese":  "mt",
                    "Maori":  "mi",
                    "Marathi":  "mr",
                    "Mongolian":  "mn",
                    "Myanmar":  "my",
                    "Nepali":  "ne",
                    "Norwegian":  "no",
                    "Nyanja":  "ny",
                    "Pashto":  "ps",
                    "Persian":  "fa",
                    "Polish":  "pl",
                    "Portuguese":  "pt",
                    "Punjabi":  "pa",
                    "Romanian":  "ro",
                    "Russian":  "ru",
                    "Samoan":  "sm",
                    "Scots":  "gd",
                    "Serbian":  "sr",
                    "Sesotho":  "st",
                    "Shona":  "sn",
                    "Sindhi":  "sd",
                    "Sinhala":  "si",
                    "Slovak":  "sk",
                    "Slovenian":  "sl",
                    "Somali":  "so",
                    "Spanish":  "es",
                    "Sundanese":  "su",
                    "Swahili":  "sw",
                    "Swedish":  "sv",
                    "Tagalog":  "tl",
                    "Tajik":  "tg",
                    "Tamil":  "ta",
                    "Telugu":  "te",
                    "Thai":  "th",
                    "Turkish":  "tr",
                    "Ukrainian":  "uk",
                    "Urdu":  "ur",
                    "Uzbek":  "uz",
                    "Vietnamese":  "vi",
                    "Welsh":  "cy",
                    "Xhosa":  "xh",
                    "Yiddish":  "yi",
                    "Yoruba":  "yo",
                    "Zulu":  "zu"};

    var options = '';

    for (var key in array) {
        
        if(key == 'English') {
            var selected = ' selected="selected"';
        } else {
            var selected = '';
        }

        options += '<option value="' + array[key] + '"' + selected + '>' + key + '</option>';

    }

    return options;

}



// *** Main.js (for widget) ***


// Source: https://github.com/scottjehl/Respond/blob/master/src/respond.js
/* Respond.js: min/max-width media query polyfill. (c) Scott Jehl. MIT Lic. j.mp/respondjs  */
(function( w ){
	
	"use strict";
	
	//exposed namespace
	var respond = {};
	w.respond = respond;

	//define update even in native-mq-supporting browsers, to avoid errors
	respond.update = function(){};

	//define ajax obj
	var requestQueue = [],
		xmlHttp = (function() {
			var xmlhttpmethod = false;
			try {
				xmlhttpmethod = new w.XMLHttpRequest();
			}
			catch( e ){
				xmlhttpmethod = new w.ActiveXObject( "Microsoft.XMLHTTP" );
			}
			return function(){
				return xmlhttpmethod;
			};
		})(),

		//tweaked Ajax functions from Quirksmode
		ajax = function( url, callback ) {
			var req = xmlHttp();
			if (!req){
				return;
			}
			req.open( "GET", url, true );
			req.onreadystatechange = function () {
				if ( req.readyState !== 4 || req.status !== 200 && req.status !== 304 ){
					return;
				}
				callback( req.responseText );
			};
			if ( req.readyState === 4 ){
				return;
			}
			req.send( null );
		},
		isUnsupportedMediaQuery = function( query ) {
			return query.replace( respond.regex.minmaxwh, '' ).match( respond.regex.other );
		};

	//expose for testing
	respond.ajax = ajax;
	respond.queue = requestQueue;
	respond.unsupportedmq = isUnsupportedMediaQuery;
	respond.regex = {
		media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
		keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
		comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
		urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
		findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
		only: /(only\s+)?([a-zA-Z]+)\s?/,
		minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
		maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
		minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
		other: /\([^\)]*\)/g
	};

	//expose media query support flag for external use
	respond.mediaQueriesSupported = w.matchMedia && w.matchMedia( "only all" ) !== null && w.matchMedia( "only all" ).matches;

	//if media queries are supported, exit here
	if( respond.mediaQueriesSupported ){
		return;
	}

	//define vars
	var doc = w.document,
		docElem = doc.documentElement,
		mediastyles = [],
		rules = [],
		appendedEls = [],
		parsedSheets = {},
		resizeThrottle = 30,
		head = doc.getElementsByTagName( "head" )[0] || docElem,
		base = doc.getElementsByTagName( "base" )[0],
		links = head.getElementsByTagName( "link" ),

		lastCall,
		resizeDefer,

		//cached container for 1em value, populated the first time it's needed
		eminpx,

		// returns the value of 1em in pixels
		getEmValue = function() {
			var ret,
				div = doc.createElement('div'),
				body = doc.body,
				originalHTMLFontSize = docElem.style.fontSize,
				originalBodyFontSize = body && body.style.fontSize,
				fakeUsed = false;

			div.style.cssText = "position:absolute;font-size:1em;width:1em";

			if( !body ){
				body = fakeUsed = doc.createElement( "body" );
				body.style.background = "none";
			}

			// 1em in a media query is the value of the default font size of the browser
			// reset docElem and body to ensure the correct value is returned
			docElem.style.fontSize = "100%";
			body.style.fontSize = "100%";

			body.appendChild( div );

			if( fakeUsed ){
				docElem.insertBefore( body, docElem.firstChild );
			}

			ret = div.offsetWidth;

			if( fakeUsed ){
				docElem.removeChild( body );
			}
			else {
				body.removeChild( div );
			}

			// restore the original values
			docElem.style.fontSize = originalHTMLFontSize;
			if( originalBodyFontSize ) {
				body.style.fontSize = originalBodyFontSize;
			}


			//also update eminpx before returning
			ret = eminpx = parseFloat(ret);

			return ret;
		},

		//enable/disable styles
		applyMedia = function( fromResize ){
			var name = "clientWidth",
				docElemProp = docElem[ name ],
				currWidth = doc.compatMode === "CSS1Compat" && docElemProp || doc.body[ name ] || docElemProp,
				styleBlocks	= {},
				lastLink = links[ links.length-1 ],
				now = (new Date()).getTime();

			//throttle resize calls
			if( fromResize && lastCall && now - lastCall < resizeThrottle ){
				w.clearTimeout( resizeDefer );
				resizeDefer = w.setTimeout( applyMedia, resizeThrottle );
				return;
			}
			else {
				lastCall = now;
			}

			for( var i in mediastyles ){
				if( mediastyles.hasOwnProperty( i ) ){
					var thisstyle = mediastyles[ i ],
						min = thisstyle.minw,
						max = thisstyle.maxw,
						minnull = min === null,
						maxnull = max === null,
						em = "em";

					if( !!min ){
						min = parseFloat( min ) * ( min.indexOf( em ) > -1 ? ( eminpx || getEmValue() ) : 1 );
					}
					if( !!max ){
						max = parseFloat( max ) * ( max.indexOf( em ) > -1 ? ( eminpx || getEmValue() ) : 1 );
					}

					// if there's no media query at all (the () part), or min or max is not null, and if either is present, they're true
					if( !thisstyle.hasquery || ( !minnull || !maxnull ) && ( minnull || currWidth >= min ) && ( maxnull || currWidth <= max ) ){
						if( !styleBlocks[ thisstyle.media ] ){
							styleBlocks[ thisstyle.media ] = [];
						}
						styleBlocks[ thisstyle.media ].push( rules[ thisstyle.rules ] );
					}
				}
			}

			//remove any existing respond style element(s)
			for( var j in appendedEls ){
				if( appendedEls.hasOwnProperty( j ) ){
					if( appendedEls[ j ] && appendedEls[ j ].parentNode === head ){
						head.removeChild( appendedEls[ j ] );
					}
				}
			}
			appendedEls.length = 0;

			//inject active styles, grouped by media type
			for( var k in styleBlocks ){
				if( styleBlocks.hasOwnProperty( k ) ){
					var ss = doc.createElement( "style" ),
						css = styleBlocks[ k ].join( "\n" );

					ss.type = "text/css";
					ss.media = k;

					//originally, ss was appended to a documentFragment and sheets were appended in bulk.
					//this caused crashes in IE in a number of circumstances, such as when the HTML element had a bg image set, so appending beforehand seems best. Thanks to @dvelyk for the initial research on this one!
					head.insertBefore( ss, lastLink.nextSibling );

					if ( ss.styleSheet ){
						ss.styleSheet.cssText = css;
					}
					else {
						ss.appendChild( doc.createTextNode( css ) );
					}

					//push to appendedEls to track for later removal
					appendedEls.push( ss );
				}
			}
		},
		//find media blocks in css text, convert to style blocks
		translate = function( styles, href, media ){
			var qs = styles.replace( respond.regex.comments, '' )
					.replace( respond.regex.keyframes, '' )
					.match( respond.regex.media ),
				ql = qs && qs.length || 0;

			//try to get CSS path
			href = href.substring( 0, href.lastIndexOf( "/" ) );

			var repUrls = function( css ){
					return css.replace( respond.regex.urls, "$1" + href + "$2$3" );
				},
				useMedia = !ql && media;

			//if path exists, tack on trailing slash
			if( href.length ){ href += "/"; }

			//if no internal queries exist, but media attr does, use that
			//note: this currently lacks support for situations where a media attr is specified on a link AND
				//its associated stylesheet has internal CSS media queries.
				//In those cases, the media attribute will currently be ignored.
			if( useMedia ){
				ql = 1;
			}

			for( var i = 0; i < ql; i++ ){
				var fullq, thisq, eachq, eql;

				//media attr
				if( useMedia ){
					fullq = media;
					rules.push( repUrls( styles ) );
				}
				//parse for styles
				else{
					fullq = qs[ i ].match( respond.regex.findStyles ) && RegExp.$1;
					rules.push( RegExp.$2 && repUrls( RegExp.$2 ) );
				}

				eachq = fullq.split( "," );
				eql = eachq.length;

				for( var j = 0; j < eql; j++ ){
					thisq = eachq[ j ];
					
					if( isUnsupportedMediaQuery( thisq ) ) {
						continue;
					}

					mediastyles.push( {
						media : thisq.split( "(" )[ 0 ].match( respond.regex.only ) && RegExp.$2 || "all",
						rules : rules.length - 1,
						hasquery : thisq.indexOf("(") > -1,
						minw : thisq.match( respond.regex.minw ) && parseFloat( RegExp.$1 ) + ( RegExp.$2 || "" ),
						maxw : thisq.match( respond.regex.maxw ) && parseFloat( RegExp.$1 ) + ( RegExp.$2 || "" )
					} );
				}
			}

			applyMedia();
		},

		//recurse through request queue, get css text
		makeRequests = function(){
			if( requestQueue.length ){
				var thisRequest = requestQueue.shift();

				ajax( thisRequest.href, function( styles ){
					translate( styles, thisRequest.href, thisRequest.media );
					parsedSheets[ thisRequest.href ] = true;

					// by wrapping recursive function call in setTimeout
					// we prevent "Stack overflow" error in IE7
					w.setTimeout(function(){ makeRequests(); },0);
				} );
			}
		},

		//loop stylesheets, send text content to translate
		ripCSS = function(){

			for( var i = 0; i < links.length; i++ ){
				var sheet = links[ i ],
				href = sheet.href,
				media = sheet.media,
				isCSS = sheet.rel && sheet.rel.toLowerCase() === "stylesheet";

				//only links plz and prevent re-parsing
				if( !!href && isCSS && !parsedSheets[ href ] ){
					// selectivizr exposes css through the rawCssText expando
					if (sheet.styleSheet && sheet.styleSheet.rawCssText) {
						translate( sheet.styleSheet.rawCssText, href, media );
						parsedSheets[ href ] = true;
					} else {
						if( (!/^([a-zA-Z:]*\/\/)/.test( href ) && !base) ||
							href.replace( RegExp.$1, "" ).split( "/" )[0] === w.location.host ){
							// IE7 doesn't handle urls that start with '//' for ajax request
							// manually add in the protocol
							if ( href.substring(0,2) === "//" ) { href = w.location.protocol + href; }
							requestQueue.push( {
								href: href,
								media: media
							} );
						}
					}
				}
			}
			makeRequests();
		};

	//translate CSS
	ripCSS();

	//expose update for re-running respond later on
	respond.update = ripCSS;

	//expose getEmValue
	respond.getEmValue = getEmValue;

	//adjust on resize
	function callMedia(){
		applyMedia( true );
	}

	if( w.addEventListener ){
		w.addEventListener( "resize", callMedia, false );
	}
	else if( w.attachEvent ){
		w.attachEvent( "onresize", callMedia );
	}
})(this);

// Source: https://jamesallardice.github.io/Placeholders.js/assets/js/placeholders.min.js
/* Placeholders.js v4.0.1 */
/*!
 * The MIT License
 *
 * Copyright (c) 2012 James Allardice
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
!function(a){"use strict";function b(){}function c(){try{return document.activeElement}catch(a){}}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return!0;return!1}function e(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0}function f(a,b){var c;a.createTextRange?(c=a.createTextRange(),c.move("character",b),c.select()):a.selectionStart&&(a.focus(),a.setSelectionRange(b,b))}function g(a,b){try{return a.type=b,!0}catch(c){return!1}}function h(a,b){if(a&&a.getAttribute(B))b(a);else for(var c,d=a?a.getElementsByTagName("input"):N,e=a?a.getElementsByTagName("textarea"):O,f=d?d.length:0,g=e?e.length:0,h=f+g,i=0;h>i;i++)c=f>i?d[i]:e[i-f],b(c)}function i(a){h(a,k)}function j(a){h(a,l)}function k(a,b){var c=!!b&&a.value!==b,d=a.value===a.getAttribute(B);if((c||d)&&"true"===a.getAttribute(C)){a.removeAttribute(C),a.value=a.value.replace(a.getAttribute(B),""),a.className=a.className.replace(A,"");var e=a.getAttribute(I);parseInt(e,10)>=0&&(a.setAttribute("maxLength",e),a.removeAttribute(I));var f=a.getAttribute(D);return f&&(a.type=f),!0}return!1}function l(a){var b=a.getAttribute(B);if(""===a.value&&b){a.setAttribute(C,"true"),a.value=b,a.className+=" "+z;var c=a.getAttribute(I);c||(a.setAttribute(I,a.maxLength),a.removeAttribute("maxLength"));var d=a.getAttribute(D);return d?a.type="text":"password"===a.type&&g(a,"text")&&a.setAttribute(D,"password"),!0}return!1}function m(a){return function(){P&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)?f(a,0):k(a)}}function n(a){return function(){l(a)}}function o(a){return function(){i(a)}}function p(a){return function(b){return v=a.value,"true"===a.getAttribute(C)&&v===a.getAttribute(B)&&d(x,b.keyCode)?(b.preventDefault&&b.preventDefault(),!1):void 0}}function q(a){return function(){k(a,v),""===a.value&&(a.blur(),f(a,0))}}function r(a){return function(){a===c()&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)&&f(a,0)}}function s(a){var b=a.form;b&&"string"==typeof b&&(b=document.getElementById(b),b.getAttribute(E)||(e(b,"submit",o(b)),b.setAttribute(E,"true"))),e(a,"focus",m(a)),e(a,"blur",n(a)),P&&(e(a,"keydown",p(a)),e(a,"keyup",q(a)),e(a,"click",r(a))),a.setAttribute(F,"true"),a.setAttribute(B,T),(P||a!==c())&&l(a)}var t=document.createElement("input"),u=void 0!==t.placeholder;if(a.Placeholders={nativeSupport:u,disable:u?b:i,enable:u?b:j},!u){var v,w=["text","search","url","tel","email","password","number","textarea"],x=[27,33,34,35,36,37,38,39,40,8,46],y="#ccc",z="placeholdersjs",A=new RegExp("(?:^|\\s)"+z+"(?!\\S)"),B="data-placeholder-value",C="data-placeholder-active",D="data-placeholder-type",E="data-placeholder-submit",F="data-placeholder-bound",G="data-placeholder-focus",H="data-placeholder-live",I="data-placeholder-maxlength",J=100,K=document.getElementsByTagName("head")[0],L=document.documentElement,M=a.Placeholders,N=document.getElementsByTagName("input"),O=document.getElementsByTagName("textarea"),P="false"===L.getAttribute(G),Q="false"!==L.getAttribute(H),R=document.createElement("style");R.type="text/css";var S=document.createTextNode("."+z+" {color:"+y+";}");R.styleSheet?R.styleSheet.cssText=S.nodeValue:R.appendChild(S),K.insertBefore(R,K.firstChild);for(var T,U,V=0,W=N.length+O.length;W>V;V++)U=V<N.length?N[V]:O[V-N.length],T=U.attributes.placeholder,T&&(T=T.nodeValue,T&&d(w,U.type)&&s(U));var X=setInterval(function(){for(var a=0,b=N.length+O.length;b>a;a++)U=a<N.length?N[a]:O[a-N.length],T=U.attributes.placeholder,T?(T=T.nodeValue,T&&d(w,U.type)&&(U.getAttribute(F)||s(U),(T!==U.getAttribute(B)||"password"===U.type&&!U.getAttribute(D))&&("password"===U.type&&!U.getAttribute(D)&&g(U,"text")&&U.setAttribute(D,"password"),U.value===U.getAttribute(B)&&(U.value=T),U.setAttribute(B,T)))):U.getAttribute(C)&&(k(U),U.removeAttribute(B));Q||clearInterval(X)},J);e(a,"beforeunload",function(){M.disable()})}}(this);


// *** auth_master.js ***

// Combine api-controller.js, auth-service.js, and popup-window.js

// api-controller.js
var ApiController = (function () {

    // general base path to backend api scripts.
    var BASE_PATH = website_url + '/w/api'; // for server change it accordingly.

    // constructor
    function ApiController(authService) {
        this.authService = authService;
    }

    // logout user from server (i.e., twitter / etc)
    ApiController.prototype.logout = function (callback) {
        // /w/api/logout.php?logout
        this.authService.reset(); // reset/destroy the cache
        // $.get(BASE_PATH + '/logout.php').done(callback);
    }

    // Private - generic login with (authorize and authenticate user via any available api)
    ApiController.prototype.loginWith = function (login_with_api, callback, delayTime) {
        delayTime = delayTime || 100;
        var self = this;
        // /w/api/<login_with_api>/auth.php
        PopupWindow(BASE_PATH + '/' + login_with_api + '/auth.php', function (data) {
            console.log('authenticating api ', login_with_api, ':', data);
            var success = data ? data.success : false;
            self.authService.saveDataToStorage(login_with_api, data, success);
            self.authService.init(); // re-init / save data to cache variables.
            callback(data);
        }, delayTime);
    }
    
    // authorize and authenticate user via instagram
    ApiController.prototype.loginWithInstagram = function (callback) {
        // /w/api/instagram/auth.php
        return this.loginWith('instagram', callback);
    }

    // authorize and authenticate user via pinterest
    ApiController.prototype.loginWithPinterest = function (callback) {
        // /w/api/pinterest/auth.php
        return this.loginWith('pinterest', callback);
    }

    // authorize and authenticate user via google
    ApiController.prototype.loginWithGoogle = function (callback) {
        // /w/api/google/auth.php
        return this.loginWith('google', callback);
    }

    // like youtube video
    ApiController.prototype.youtubeLikeVideo = function (videoId, callback) {
        // /w/api/google/youtube.php?action=like
        $.post(BASE_PATH + '/google/youtube.php?action=like', {
            videoId: videoId,
            token: this.authService.authData.google.access_token
        }).done(callback);
    }

    // subscribe youtube channel
    ApiController.prototype.youtubeSubscribeChannel = function (channelId, callback) {
        // /w/api/google/youtube.php?action=subscribe
        $.post(BASE_PATH + '/google/youtube.php?action=subscribe', {
            channelId: channelId,
            token: this.authService.authData.google.access_token
        }).done(callback);
    }

    // subscribe youtube channel
    ApiController.prototype.youtubeCommentVideo = function (videoId, commentText, callback) {
        // /w/api/google/youtube.php?action=comment
        $.post(BASE_PATH + '/google/youtube.php?action=comment', {
            videoId: videoId,
            commentText: commentText,
            token: this.authService.authData.google.access_token
        }).done(callback);
    }

    // follow <username> or <board> on pinterest
    ApiController.prototype.pinterestFollow = function (username, boardName, callback) {
        // /w/api/pinterest/follow.php
        $.post(BASE_PATH + '/pinterest/follow.php', {
            username: username,
            boardName: boardName,
            token: this.authService.authData.pinterest.data.token
        }).done(callback);
    }

    ApiController.prototype.pinterestSavePin = function (pinId, boardId, callback) {
        // /w/api/pinterest/save_pin.php
        $.post(BASE_PATH + '/pinterest/save_pin.php', {
            pinId: pinId,
            boardId: boardId,
            token: this.authService.authData.pinterest.data.token
        }).done(callback);
    }

    // TODO: remove this.
    ApiController.prototype.pinterestFetchPinsBoards = function (fetch_type, callback) {
        // /w/api/pinterest/fetch_pins_boards.php
        $.get(BASE_PATH + '/pinterest/fetch_pins_boards.php', {
            type: fetch_type,
            token: this.authService.authData.pinterest.data.token
        }).done(callback);
    }

    // authorize and authenticate user via twitter
    ApiController.prototype.loginWithTwitter = function (callback) {
        // /w/api/twitter/auth.php
        return this.loginWith('twitter', callback);
    }

    // retweet any tweet <tweet_id> on twitter
    ApiController.prototype.retweet = function (tweet_id, callback) {
        // /w/api/twitter/retweet.php
        $.post(BASE_PATH + '/twitter/retweet.php', {
            tweet_id: tweet_id,
            oauth_token: this.authService.authData.twitter.data.oauth_token,
            oauth_token_secret: this.authService.authData.twitter.data.oauth_token_secret
        }).done(callback);
    }

    // follow <username> on twitter
    ApiController.prototype.twitterFollow = function (username, callback) {
        // /w/api/twitter/follow.php
        $.post(BASE_PATH + '/twitter/follow.php', {
            username: username,
            oauth_token: this.authService.authData.twitter.data.oauth_token,
            oauth_token_secret: this.authService.authData.twitter.data.oauth_token_secret
        }).done(callback);
    }

    // post any tweet <tweet_status> on twitter
    ApiController.prototype.postTweet = function (tweet_status, callback) {
        // /w/api/twitter/post_tweet.php
        $.post(BASE_PATH + '/twitter/post_tweet.php', {
            tweet_status: tweet_status,
            oauth_token: this.authService.authData.twitter.data.oauth_token,
            oauth_token_secret: this.authService.authData.twitter.data.oauth_token_secret
        }).done(callback);
    }

    return ApiController;
})();


// popup-window.js


// constructor accepts a url which should be your Twitter OAuth url
function PopupWindow(url, callback, delayTime) {

    // the server will use this cookie to determine if the Twitter redirection url should window.close() or not
    // document.cookie = 'twitter_oauth_popup=1; path=/';
  
    localStorage.removeItem('popupWindow'); // removed the previous saved data (if any)
  
    var params = 'width=800,height=600,scrollbars=yes,menubar=yes,status=yes,resizable=yes,directories=false,location=false';
    var popupWindow = open(url, 'myPopupWindow', params);
    
    var intervalFn = setInterval(function () {
      if (popupWindow.closed) { // is popup window closed ?
        clearInterval(intervalFn); // remove interval function
        var _returnValue = JSON.parse(localStorage.getItem('popupWindow') || 'null');
        localStorage.removeItem('popupWindow'); // removed the saved data
        console.log('window closed response:', _returnValue);
        callback(_returnValue);
      }
    }, delayTime);
  
  }

  function SW_bonus_coupons_message(coupon_code) {

    if( coupon_code == 'SW_welcome_bonus'
        || coupon_code == 'SW_free_trial') {

        var message = ' Bonus, you\'ll get a 7 day free trial.';
        
    } else if(coupon_code == 'SW_14_day_free_trial') {

        var message = ' Bonus, you\'ll get a 14 day free trial.';
        
    } else if(coupon_code == 'truesweepstakes_free_promotion') {

        var message = ' Bonus, a free promotion at TrueSweepstakes.com worth a $29.95! Just contact TrueSweepstakes support and tell them you signed up for a SweepWidget pro plan.';

    } else if(coupon_code == 'truesweepstakes_free_promotion_2020') {

        var message = ' Bonus: FREE 1 week promotion on TrueSweepstakes.com! Just contact <a style="color:#00b8e6; font-weight:bold; text-decoration:underline;" target="_blank" rel="nofollow" href="https://truesweepstakes.zendesk.com/hc/en-us/requests/new">TrueSweepstakes.com customer support</a> and tell them you signed up for a SweepWidget pro plan.';

    } else if(coupon_code == 'sw_free_month_via_true_sweepstakes') {

        var message = ' Bonus: FREE 1 week promotion on TrueSweepstakes.com! Just contact <a style="color:#00b8e6; font-weight:bold; text-decoration:underline;" target="_blank" rel="nofollow" href="https://truesweepstakes.zendesk.com/hc/en-us/requests/new">TrueSweepstakes.com customer support</a> and tell them you signed up for a SweepWidget pro plan.';
        
    } else {

        var message = '';

    }

    return message;

  }

function winners_amount_allowed(plan, user_id, payment_platform) {

    // Braintree
    if( if_payment_system(payment_platform) == 'braintree'
        || if_payment_system(payment_platform) == 'shopify'
        || if_payment_system(payment_platform) == 'chargebee')
    {

        // Free
        if(plan == 1) {

            return 5;

        // Pro
        } else if(plan == 2 || plan == 3 || plan == 4) {

            return 100;

        // Business
        } else if(plan == 5 || plan == 6 || plan == 7) {

            return 250;
        
        // Premium
        } else if(plan == 8 || plan == 9 || plan == 10) {

            return 1000;
            
        // Enterprise
        } else if(plan == 11 || plan == 12 || plan == 13) {

            return 999999;
            
        }

    }
    // Stripe
    else
    {
        // Free
        if(plan == 1) {

            return 5;

        // Pro
        } else if(plan == 2 || plan == 4) {

            return 100;

        // Business
        } else if(plan == 6) {

            return 250;
        
        // Premium
        } else if(plan == 3 || plan == 5) {

            return 1000;
            
        // Enterprise
        } else if(plan == 7 || plan == 8) {

            return 999999;
            
        }
    }
}

// Convert plan int to text
function plan_display(plan_int) {
    
    switch(plan_int) {

        case 1:
        return 'Free';
        break;
        
        case 2:
        return 'Pro';
        break;
        
        case 4:
        return 'Pro';
        break;
        
        case 6:
        return 'Business';
        break;
        
        case 3:
        return 'Premium';
        break;
        
        case 5:
        return 'Premium';
        break;
        
        case 7:
        return 'Enterprise';
        break;
        
        case 8:
        return 'Enterprise';
        break;
        
    }

}

// Convert plan int to text
function plan_id_to_text_chargebee(plan_int) {
    
    switch(plan_int) {

        case '1':
        return 'Free';
        break;
        
        case '2':
        return 'Pro';
        break;
        
        case '3':
        return 'Pro';
        break;
        
        case '4':
        return 'Pro';
        break;
        
        case '5':
        return 'Business';
        break;
        
        case '6':
        return 'Business';
        break;
        
        case '7':
        return 'Business';
        break;
        
        case '8':
        return 'Premium';
        break;
        
        case '9':
        return 'Premium';
        break;
        
        case '10':
        return 'Premium';
        break;
        
        case '11':
        return 'Enterprise';
        break;
        
        case '12':
        return 'Enterprise';
        break;
        
        case '13':
        return 'Enterprise';
        break;
        
    }

}

function plan_entry_limit(plan_int) {

    switch(plan_int) {

        case 1:
        return 5;
        break;
        
        case 2:
        return 40;
        break;
        
        case 4:
        return 40;
        break;
        
        case 6:
        return 60;
        break;
        
        case 3:
        return 80;
        break;
        
        case 5:
        return 80;
        break;
        
        case 7:
        return 125;
        break;
        
        case 8:
        return 125;
        break;
        
    }

}

function chargebee_plan_id_retreive(subscription_item_price_id, type)
{
    // Free
    if(subscription_item_price_id == '')
    {
        var plan = 1;
        var plan_text = 'Free';
        var price = 0;
    }
    // Pro monthly
    else if(subscription_item_price_id == 'Pro-Plan-USD-Monthly')
    {
        var plan = 2;
        var plan_text = 'Pro Monthly';
        var price = 2900;
    }
    // Pro yearly
    else if(subscription_item_price_id == 'Pro-Plan-USD-Yearly')
    {
        var plan = 3;
        var plan_text = 'Pro Annual';
        var price = 29000;
    }
    // Business monthly
    else if(subscription_item_price_id == 'Business-Plan-USD-Monthly')
    {
        var plan = 5;
        var plan_text = 'Business Monthly';
        var price = 4900;
    }
    // Business yearly
    else if(subscription_item_price_id == 'Business-Plan-USD-Yearly')
    {
        var plan = 6;
        var plan_text = 'Business Annual';
        var price = 49000;
    }
    // Premium monthly
    else if(subscription_item_price_id == 'Premium-Plan-USD-Monthly')
    {
        var plan = 8;
        var plan_text = 'Premium Monthly';
        var price = 9900;
    }
    // Premium yearly
    else if(subscription_item_price_id == 'Premium-Plan-USD-Yearly')
    {
        var plan = 9;
        var plan_text = 'Premium Annual';
        var price = 99000;
    }
    // Enterprise monthly
    else if(subscription_item_price_id == 'Enterprise-Plan-USD-Monthly')
    {
        var plan = 11;
        var plan_text = 'Enterprise Monthly';
        var price = 19900;
    }
    // Enterprise yearly
    else if(subscription_item_price_id == 'Enterprise-Plan-USD-Yearly')
    {
        var plan = 12;
        var plan_text = 'Enterprise Annual';
        var price = 199000;
    }

    if(type == 'plan')
    {
        return plan;
    }
    else if(type == 'plan_text')
    {
        return plan_text;
    }
    else if(type == 'price')
    {
        return price;
    }
}

function repeatable_actions_limit_func(website_plan, trial_demo, legacy_business, limit, entry_method_handle, type, user_id, payment_platform) {
    
    // Return count
    if(type == 'count') {

        // Enterprise
        if(plan_level('enterprise', 'equal', website_plan, payment_platform) == true) {
            
            return 20;
            
        // Premium
        } else if(plan_level('enterprise', 'equal', website_plan, payment_platform) == true) {
        
            return 12;
            
        // Business
        } else if(plan_level('business', 'equal', website_plan, payment_platform) == true) {
            
            return 8;
        
        // Pro
        } else if(plan_level('pro', 'equal', website_plan, payment_platform) == true) {
            
            if(user_id == 1447)
            {
                return 10;
            }
            else
            {
                return 5;
            }
            
        // Free
        } else if(plan_level('free', 'equal', website_plan, payment_platform) == true) {
        
            return 1;

        }
        
    // Return message
    } else if(type == 'message') {

        // Enterprise
        if(plan_level('enterprise', 'equal', website_plan, payment_platform) == true) {
            
            return 'You have reached the maximum allowed ' + limit + ' repeatable actions for "' + entry_method_handle + '".';
                
        // Premium
        } else if(plan_level('premium', 'equal', website_plan, payment_platform) == true) {
        
            return 'The Business plan has a limit of ' + limit + ' repeatable actions for "' + entry_method_handle + '". You must upgrade your plan to Enterprise to increase your limit to 20.';
        
        // Business
        } else if(plan_level('business', 'equal', website_plan, payment_platform) == true) {
            
            return 'The Business plan has a limit of ' + limit + ' repeatable actions for "' + entry_method_handle + '". You must upgrade your plan to to increase the limit. The Premium plan has a limit of 12 and the Enterprise plan has a limit of 20.';
        
        // Pro
        } else if(plan_level('pro', 'equal', website_plan, payment_platform) == true) {
            
            return 'The Pro plan has a limit of ' + limit + ' repeatable actions for "' + entry_method_handle + '". You must upgrade your plan to increase the limit. The Business plan has a limit of 8, the Premium plan has a limit of 12, and the Enterprise plan has a limit of 20.';
        
        // Free
        } else if(plan_level('free', 'equal', website_plan, payment_platform) == true) {
        
            return 'The Free plan has a limit of ' + limit + ' repeatable action for "' + entry_method_handle + '". You must upgrade your plan to increase the limit. The Pro plan has a limit of 5, the Business plan has a limit of 8, the Premium plan has a limit of 12, and the Enterprise plan has a limit of 20.';

        }
        
    }

}

function competition_live_stats_update(competition_id, shopify_user_id, login_access_token)
{
    $.ajax({

        url: 'https://sweepwidget.com/a/competition_live_stats.php',
        data: { competition_id:competition_id,
                shopify_user_id:shopify_user_id,
                login_access_token:login_access_token },
        type: 'POST',
        dataType: 'text',
        success: function (data)
        {	
            // Error
            if(data == 0)
            {
                alert('Sorry, your condition did not match any results.');
            }
            // JSON response (success)
            else
            {
                var arr = jQuery.parseJSON(data);
                $('#users_entered_count').html(arr.users_entered_count);
                $('#competition_actions_count').html(arr.competition_actions_count);
                $('#competition_entry_count').html(arr.competition_entry_count);
            }
        }
    });
}

/* Auth Service */
var AuthService = (function () {

    // constructor
    function AuthService(callback) {
      if (callback) {
        this.init(callback);
      }
    }
  
    AuthService.prototype.init = function (callback) {
      this.loggedIn = localStorage.getItem('loggedIn') === 'true';
      this.authData = JSON.parse(localStorage.getItem('authData') || '{}');
      this.login_with_api = localStorage.getItem('login_with_api') || '';
      if (callback) {
        callback(this.authData);
      }
    }
  
    AuthService.prototype.reset = function (callback) {
      localStorage.clear(); // clear the localstorage.
      this.loggedIn = false;
      this.authData = {};
      this.login_with_api = '';
      if (callback) {
        callback();
      }
    }
  
    AuthService.prototype.saveDataToStorage = function (login_with_api, data, success) {
      var _authData = JSON.parse(localStorage.getItem('authData') || '{}');
      var _loggedIn = localStorage.getItem('loggedIn') === 'true';
      if (data) {
        _authData[login_with_api] = data; // merge / replace auth api responses.
      }
      // save the data to localstorage
      localStorage.setItem('loggedIn', success || _loggedIn);
      localStorage.setItem('authData', JSON.stringify(_authData));
      localStorage.setItem('login_with_api', login_with_api); // cache this so we can further use this in different methods.
    }
  
    AuthService.prototype.isLoggedIn = function () {
      return this.loggedIn === true;
    }
  
    // parameter is optional here. if no parameter provided means recently/last used one.
    AuthService.prototype.loggedInWithApi = function (with_api_key) {
      with_api_key = with_api_key || '';
      var _login_with_api = with_api_key || this.login_with_api;
      if (this.isLoggedIn() && _login_with_api !== '') {
        return this.getUserAuthData()[_login_with_api] || null;
      }
      return null;
    }
  
    // entire auth data stored result.
    AuthService.prototype.getUserAuthData = function () {
      return this.authData;
    }
  
    return AuthService;
  })();

// jQuery UI shake
(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){t.ui=t.ui||{},t.ui.version="1.12.1";var e="ui-effects-",i="ui-effects-style",s="ui-effects-animated",n=t;t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=h(),n=s._rgba=[];return i=i.toLowerCase(),f(l,function(t,o){var a,r=o.re.exec(i),l=r&&o.parse(r),h=o.space||"rgba";return l?(a=s[h](l),s[c[h].cache]=a[c[h].cache],n=s._rgba=a._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),s):o[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],h=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=h.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),h.fn=t.extend(h.prototype,{parse:function(n,a,r,l){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(a),a=e);var u=this,d=t.type(n),p=this._rgba=[];return a!==e&&(n=[n,a,r,l],d="array"),"string"===d?this.parse(s(n)||o._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof h?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var o=s.cache;f(s.props,function(t,e){if(!u[o]&&s.to){if("alpha"===t||null==n[t])return;u[o]=s.to(u._rgba)}u[o][e.idx]=i(n[t],e,!0)}),u[o]&&0>t.inArray(null,u[o].slice(0,3))&&(u[o][3]=1,s.from&&(u._rgba=s.from(u[o])))}),this):e},is:function(t){var i=h(t),s=!0,n=this;return f(c,function(t,o){var a,r=i[o.cache];return r&&(a=n[o.cache]||o.to&&o.to(n._rgba)||[],f(o.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===a[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=h(t),n=s._space(),o=c[n],a=0===this.alpha()?h("transparent"):this,r=a[o.cache]||o.to(a._rgba),l=r.slice();return s=s[o.cache],f(o.props,function(t,n){var o=n.idx,a=r[o],h=s[o],c=u[n.type]||{};null!==h&&(null===a?l[o]=h:(c.mod&&(h-a>c.mod/2?a+=c.mod:a-h>c.mod/2&&(a-=c.mod)),l[o]=i((h-a)*e+a,n)))}),this[n](l)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=h(e)._rgba;return h(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),h.fn.parse.prototype=h.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),l=Math.min(s,n,o),h=r-l,c=r+l,u=.5*c;return e=l===r?0:s===r?60*(n-o)/h+360:n===r?60*(o-s)/h+120:60*(s-n)/h+240,i=0===h?0:.5>=u?h/c:h/(2-c),[Math.round(e)%360,i,u,null==a?1:a]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],a=.5>=s?s*(1+i):s+i-s*i,r=2*s-a;return[Math.round(255*n(r,a,e+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o]},f(c,function(s,n){var o=n.props,a=n.cache,l=n.to,c=n.from;h.fn[s]=function(s){if(l&&!this[a]&&(this[a]=l(this._rgba)),s===e)return this[a].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[a].slice();return f(o,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=h(c(d)),n[a]=d,n):h(d)},f(o,function(e,i){h.fn[e]||(h.fn[e]=function(n){var o,a=t.type(n),l="alpha"===e?this._hsla?"hsla":"rgba":s,h=this[l](),c=h[i.idx];return"undefined"===a?c:("function"===a&&(n=n.call(this,c),a=t.type(n)),null==n&&i.empty?this:("string"===a&&(o=r.exec(n),o&&(n=c+parseFloat(o[2])*("+"===o[1]?1:-1))),h[i.idx]=n,this[l](h)))})})}),h.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var o,a,r="";if("transparent"!==n&&("string"!==t.type(n)||(o=s(n)))){if(n=h(o||n),!d.rgba&&1!==n._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(l){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=h(e.elem,i),e.end=h(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},h.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(n),function(){function e(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(o[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(o[i]=n[i]);return o}function i(e,i){var s,n,a={};for(s in i)n=i[s],e[s]!==n&&(o[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(a[s]=n));return a}var s=["add","remove","toggle"],o={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(n.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(n,o,a,r){var l=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr("class")||"",h=l.children?a.find("*").addBack():a;h=h.map(function(){var i=t(this);return{el:i,start:e(this)}}),o=function(){t.each(s,function(t,e){n[e]&&a[e+"Class"](n[e])})},o(),h=h.map(function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this}),a.attr("class",r),h=h.map(function(){var e=this,i=t.Deferred(),s=t.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,h.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,s,n,o,a){return"boolean"==typeof s||void 0===s?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,o,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},s,n,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){function n(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function o(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}function a(t,e){var i=e.outerWidth(),s=e.outerHeight(),n=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,o=n.exec(t)||["",0,i,s,0];return{top:parseFloat(o[1])||0,right:"auto"===o[2]?i:parseFloat(o[2]),bottom:"auto"===o[3]?s:parseFloat(o[3]),left:parseFloat(o[4])||0}}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=function(e){return function(i){return!!t(i).data(s)||e(i)}}(t.expr.filters.animated)),t.uiBackCompat!==!1&&t.extend(t.effects,{save:function(t,i){for(var s=0,n=i.length;n>s;s++)null!==i[s]&&t.data(e+i[s],t[0].style[i[s]])},restore:function(t,i){for(var s,n=0,o=i.length;o>n;n++)null!==i[n]&&(s=t.data(e+i[n]),t.css(i[n],s))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(a){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).trigger("focus"),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus")),e}}),t.extend(t.effects,{version:"1.12.1",define:function(e,i,s){return s||(s=i,i="effect"),t.effects.effect[e]=s,t.effects.effect[e].mode=i,s},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var s="horizontal"!==i?(e||100)/100:1,n="vertical"!==i?(e||100)/100:1;return{height:t.height()*n,width:t.width()*s,outerHeight:t.outerHeight()*n,outerWidth:t.outerWidth()*s}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var s=t.queue();e>1&&s.splice.apply(s,[1,0].concat(s.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(i,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(i)||"",t.removeData(i)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createPlaceholder:function(i){var s,n=i.css("position"),o=i.position();return i.css({marginTop:i.css("marginTop"),marginBottom:i.css("marginBottom"),marginLeft:i.css("marginLeft"),marginRight:i.css("marginRight")}).outerWidth(i.outerWidth()).outerHeight(i.outerHeight()),/^(static|relative)/.test(n)&&(n="absolute",s=t("<"+i[0].nodeName+">").insertAfter(i).css({display:/^(inline|ruby)/.test(i.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:i.css("marginTop"),marginBottom:i.css("marginBottom"),marginLeft:i.css("marginLeft"),marginRight:i.css("marginRight"),"float":i.css("float")}).outerWidth(i.outerWidth()).outerHeight(i.outerHeight()).addClass("ui-effects-placeholder"),i.data(e+"placeholder",s)),i.css({position:n,left:o.left,top:o.top}),s},removePlaceholder:function(t){var i=e+"placeholder",s=t.data(i);s&&(s.remove(),t.removeData(i))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1])}),n}}),t.fn.extend({effect:function(){function e(e){function n(){l.removeData(s),t.effects.cleanUp(l),"hide"===i.mode&&l.hide(),r()}function r(){t.isFunction(h)&&h.call(l[0]),t.isFunction(e)&&e()}var l=t(this);i.mode=u.shift(),t.uiBackCompat===!1||a?"none"===i.mode?(l[c](),r()):o.call(l[0],i,n):(l.is(":hidden")?"hide"===c:"show"===c)?(l[c](),r()):o.call(l[0],i,r)}var i=n.apply(this,arguments),o=t.effects.effect[i.effect],a=o.mode,r=i.queue,l=r||"fx",h=i.complete,c=i.mode,u=[],d=function(e){var i=t(this),n=t.effects.mode(i,c)||a;i.data(s,!0),u.push(n),a&&("show"===n||n===a&&"hide"===n)&&i.show(),a&&"none"===n||t.effects.saveStyle(i),t.isFunction(e)&&e()};return t.fx.off||!o?c?this[c](i.duration,h):this.each(function(){h&&h.call(this)}):r===!1?this.each(d).each(e):this.queue(l,d).queue(l,e)},show:function(t){return function(e){if(o(e))return t.apply(this,arguments);var i=n.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(o(e))return t.apply(this,arguments);var i=n.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(o(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=n.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):a(this.css("clip"),this)},transfer:function(e,i){var s=t(this),n=t(e.to),o="fixed"===n.css("position"),a=t("body"),r=o?a.scrollTop():0,l=o?a.scrollLeft():0,h=n.offset(),c={top:h.top-r,left:h.left-l,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:u.top-r,left:u.left-l,height:s.innerHeight(),width:s.innerWidth(),position:o?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),t.isFunction(i)&&i()})}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=a(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}(),t.effects,t.effects.define("shake",function(e,i){var s=1,n=t(this),o=e.direction||"left",a=e.distance||20,r=e.times||3,l=2*r+1,h=Math.round(e.duration/l),c="up"===o||"down"===o?"top":"left",u="up"===o||"left"===o,d={},p={},f={},g=n.queue().length;for(t.effects.createPlaceholder(n),d[c]=(u?"-=":"+=")+a,p[c]=(u?"+=":"-=")+2*a,f[c]=(u?"-=":"+=")+2*a,n.animate(d,h,e.easing);r>s;s++)n.animate(p,h,e.easing).animate(f,h,e.easing);n.animate(p,h,e.easing).animate(d,h/2,e.easing).queue(i),t.effects.unshift(n,g,l+1)})});
