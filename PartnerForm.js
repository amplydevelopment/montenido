JotForm.newDefaultTheme = true;
	JotForm.extendsNewTheme = false;
	JotForm.singleProduct = false;
	JotForm.newPaymentUIForNewCreatedForms = true;
	JotForm.texts = {"confirmEmail":"E-mail does not match","pleaseWait":"Please wait...","validateEmail":"You need to validate this e-mail","confirmClearForm":"Are you sure you want to clear the form","lessThan":"Your score should be less than or equal to","incompleteFields":"There are incomplete required fields. Please complete them.","required":"This field is required.","requireOne":"At least one field required.","requireEveryRow":"Every row is required.","requireEveryCell":"Every cell is required.","email":"Enter a valid e-mail address","alphabetic":"This field can only contain letters","numeric":"This field can only contain numeric values","alphanumeric":"This field can only contain letters and numbers.","cyrillic":"This field can only contain cyrillic characters","url":"This field can only contain a valid URL","currency":"This field can only contain currency values.","fillMask":"Field value must fill mask.","uploadExtensions":"You can only upload following files:","noUploadExtensions":"File has no extension file type (e.g. .txt, .png, .jpeg)","uploadFilesize":"File size cannot be bigger than:","uploadFilesizemin":"File size cannot be smaller than:","gradingScoreError":"Score total should only be less than or equal to","inputCarretErrorA":"Input should not be less than the minimum value:","inputCarretErrorB":"Input should not be greater than the maximum value:","maxDigitsError":"The maximum digits allowed is","minCharactersError":"The number of characters should not be less than the minimum value:","maxCharactersError":"The number of characters should not be more than the maximum value:","freeEmailError":"Free email accounts are not allowed","minSelectionsError":"The minimum required number of selections is ","maxSelectionsError":"The maximum number of selections allowed is ","pastDatesDisallowed":"Date must not be in the past.","dateLimited":"This date is unavailable.","dateInvalid":"This date is not valid. The date format is {format}","dateInvalidSeparate":"This date is not valid. Enter a valid {element}.","ageVerificationError":"You must be older than {minAge} years old to submit this form.","multipleFileUploads_typeError":"{file} has invalid extension. Only {extensions} are allowed.","multipleFileUploads_sizeError":"{file} is too large, maximum file size is {sizeLimit}.","multipleFileUploads_minSizeError":"{file} is too small, minimum file size is {minSizeLimit}.","multipleFileUploads_emptyError":"{file} is empty, please select files again without it.","multipleFileUploads_uploadFailed":"File upload failed, please remove it and upload the file again.","multipleFileUploads_onLeave":"The files are being uploaded, if you leave now the upload will be cancelled.","multipleFileUploads_fileLimitError":"Only {fileLimit} file uploads allowed.","dragAndDropFilesHere_infoMessage":"Drag and drop files here","chooseAFile_infoMessage":"Choose a file","maxFileSize_infoMessage":"Max. file size","generalError":"There are errors on the form. Please fix them before continuing.","generalPageError":"There are errors on this page. Please fix them before continuing.","wordLimitError":"Too many words. The limit is","wordMinLimitError":"Too few words.  The minimum is","characterLimitError":"Too many Characters.  The limit is","characterMinLimitError":"Too few characters. The minimum is","ccInvalidNumber":"Credit Card Number is invalid.","ccInvalidCVC":"CVC number is invalid.","ccInvalidExpireDate":"Expire date is invalid.","ccInvalidExpireMonth":"Expiration month is invalid.","ccInvalidExpireYear":"Expiration year is invalid.","ccMissingDetails":"Please fill up the credit card details.","ccMissingProduct":"Please select at least one product.","ccMissingDonation":"Please enter numeric values for donation amount.","disallowDecimals":"Please enter a whole number.","restrictedDomain":"This domain is not allowed","ccDonationMinLimitError":"Minimum amount is {minAmount} {currency}","requiredLegend":"All fields marked with * are required and must be filled.","geoPermissionTitle":"Permission Denied","geoPermissionDesc":"Check your browser's privacy settings.","geoNotAvailableTitle":"Position Unavailable","geoNotAvailableDesc":"Location provider not available. Please enter the address manually.","geoTimeoutTitle":"Timeout","geoTimeoutDesc":"Please check your internet connection and try again.","selectedTime":"Selected Time","formerSelectedTime":"Former Time","cancelAppointment":"Cancel Appointment","cancelSelection":"Cancel Selection","noSlotsAvailable":"No slots available","slotUnavailable":"{time} on {date} has been selected is unavailable. Please select another slot.","multipleError":"There are {count} errors on this page. Please correct them before moving on.","oneError":"There is {count} error on this page. Please correct it before moving on.","doneMessage":"Well done! All errors are fixed.","invalidTime":"Enter a valid time","doneButton":"Done","reviewSubmitText":"Review and Submit","nextButtonText":"Next","prevButtonText":"Previous","seeErrorsButton":"See Errors","notEnoughStock":"Not enough stock for the current selection","notEnoughStock_remainedItems":"Not enough stock for the current selection ({count} items left)","soldOut":"Sold Out","justSoldOut":"Just Sold Out","selectionSoldOut":"Selection Sold Out","subProductItemsLeft":"({count} items left)","startButtonText":"START","submitButtonText":"Submit","submissionLimit":"Sorry! Only one entry is allowed. <br> Multiple submissions are disabled for this form.","reviewBackText":"Back to Form","seeAllText":"See All","progressMiddleText":"of","fieldError":"field has an error.","error":"Error"};
	JotForm.newPaymentUI = true;
	JotForm.hipaa = true;
	JotForm.originalLanguage = "en";
	JotForm.replaceTagTest = true;

   JotForm.setConditions([{"action":[{"id":"action_0_1720815202781","visibility":"HideMultiple","isError":false,"fields":["16","17","18","20"]}],"id":"1719594362410","index":"0","link":"Any","priority":"0","terms":[{"id":"term_1720815216064","field":"15","operator":"isEmpty","value":"","isError":false},{"id":"term_0_1720815202781","field":"15","operator":"equals","value":"No","isError":false}],"type":"field"},{"action":[{"id":"action_0_1720815153280","visibility":"ShowMultiple","isError":false,"fields":["16","17","18","20"]}],"id":"1720815153280","index":"1","link":"Any","priority":"1","terms":[{"id":"term_0_1720815153280","field":"15","operator":"equals","value":"Yes","isError":false}],"type":"field"}]);	JotForm.clearFieldOnHide="disable";
	JotForm.submitError="jumpToFirstError";

	JotForm.enterprise = "montenido.jotform.com";
window.addEventListener('error', function(event) {
          var error = event.error || event;
          var xhr = new XMLHttpRequest();
          xhr.open('POST', "https://montenido.jotform.com/API/formInitCatchLogger/241795436729066", true);
          xhr.setRequestHeader('Content-type', 'application/json');
          xhr.send(JSON.stringify({
            data: {
              stack: error.stack || error.message,
              agent: navigator && navigator.userAgent,
              referrer: location && location.href
            },
            title: 'FORM_EXCEPTION'
          }));
        });	JotForm.isFullSource = true;

	JotForm.init(function(){
	/*INIT-START*/

 JotForm.calendarMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 if (!JotForm.calenderViewMonths) JotForm.calenderViewMonths = {};  JotForm.calenderViewMonths[4] = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 if (!JotForm.calenderViewDays) JotForm.calenderViewDays = {};  JotForm.calenderViewDays[4] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
 JotForm.calendarDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
 JotForm.calendarOther = {"today":"Patient Date of Birth"};
 var languageOptions = document.querySelectorAll('#langList li'); 
 for(var langIndex = 0; langIndex < languageOptions.length; langIndex++) { 
   languageOptions[langIndex].on('click', function(e) { setTimeout(function(){ JotForm.setCalendar("4", false, {"days":{"monday":true,"tuesday":true,"wednesday":true,"thursday":true,"friday":true,"saturday":true,"sunday":true},"future":true,"past":true,"custom":false,"ranges":false,"start":"","end":"","countSelectedDaysOnly":false}); }, 0); });
 } 
 JotForm.onTranslationsFetch(function() { JotForm.setCalendar("4", false, {"days":{"monday":true,"tuesday":true,"wednesday":true,"thursday":true,"friday":true,"saturday":true,"sunday":true},"future":true,"past":true,"custom":false,"ranges":false,"start":"","end":"","countSelectedDaysOnly":false}); });
if (window.JotForm && JotForm.accessible) $('input_38').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_39').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_36').setAttribute('tabindex',0);
      JotForm.setPhoneMaskingValidator( 'input_7_full', '\u0028\u0023\u0023\u0023\u0029 \u0023\u0023\u0023\u002d\u0023\u0023\u0023\u0023' );
if (window.JotForm && JotForm.accessible) $('input_16').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_17').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_18').setAttribute('tabindex',0);
      JotForm.setPhoneMaskingValidator( 'input_20_full', '\u0028\u0023\u0023\u0023\u0029 \u0023\u0023\u0023\u002d\u0023\u0023\u0023\u0023' );
if (window.JotForm && JotForm.accessible) $('input_37').setAttribute('tabindex',0);
      JotForm.setPhoneMaskingValidator( 'input_11_full', '\u0028\u0023\u0023\u0023\u0029 \u0023\u0023\u0023\u002d\u0023\u0023\u0023\u0023' );
if (window.JotForm && JotForm.accessible) $('input_14').setAttribute('tabindex',0);
      JotForm.setCustomHint( 'input_14', 'Notes' );
if (window.JotForm && JotForm.accessible) $('input_26').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_27').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_28').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_29').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_30').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_31').setAttribute('tabindex',0);
      JotForm.alterTexts({"ageVerificationError":"You must be older than {minAge} years old to submit this form.","alphabetic":"This field can only contain letters","alphanumeric":"This field can only contain letters and numbers.","cancelAppointment":"Cancel Appointment","cancelSelection":"Cancel Selection","ccDonationMinLimitError":"Minimum amount is {minAmount} {currency}","ccInvalidCVC":"CVC number is invalid.","ccInvalidExpireDate":"Expire date is invalid.","ccInvalidExpireMonth":"Expiration month is invalid.","ccInvalidExpireYear":"Expiration year is invalid.","ccInvalidNumber":"Credit Card Number is invalid.","ccMissingDetails":"Please fill up the credit card details.","ccMissingDonation":"Please enter numeric values for donation amount.","ccMissingProduct":"Please select at least one product.","characterLimitError":"Too many Characters.  The limit is","characterMinLimitError":"Too few characters. The minimum is","chooseAFile_infoMessage":"Choose a file","confirmClearForm":"Are you sure you want to clear the form","confirmEmail":"E-mail does not match","currency":"This field can only contain currency values.","cyrillic":"This field can only contain cyrillic characters","dateInvalid":"This date is not valid. The date format is {format}","dateInvalidSeparate":"This date is not valid. Enter a valid {element}.","dateLimited":"This date is unavailable.","disallowDecimals":"Please enter a whole number.","doneButton":"Done","doneMessage":"Well done! All errors are fixed.","dragAndDropFilesHere_infoMessage":"Drag and drop files here","email":"Enter a valid e-mail address","error":"Error","fieldError":"field has an error.","fillMask":"Field value must fill mask.","formerSelectedTime":"Former Time","freeEmailError":"Free email accounts are not allowed","generalError":"There are errors on the form. Please fix them before continuing.","generalPageError":"There are errors on this page. Please fix them before continuing.","geoNotAvailableDesc":"Location provider not available. Please enter the address manually.","geoNotAvailableTitle":"Position Unavailable","geoPermissionDesc":"Check your browser's privacy settings.","geoPermissionTitle":"Permission Denied","geoTimeoutDesc":"Please check your internet connection and try again.","geoTimeoutTitle":"Timeout","gradingScoreError":"Score total should only be less than or equal to","incompleteFields":"There are incomplete required fields. Please complete them.","inputCarretErrorA":"Input should not be less than the minimum value:","inputCarretErrorB":"Input should not be greater than the maximum value:","invalidTime":"Enter a valid time","justSoldOut":"Just Sold Out","lessThan":"Your score should be less than or equal to","maxCharactersError":"The number of characters should not be more than the maximum value:","maxDigitsError":"The maximum digits allowed is","maxFileSize_infoMessage":"Max. file size","maxSelectionsError":"The maximum number of selections allowed is ","minCharactersError":"The number of characters should not be less than the minimum value:","minSelectionsError":"The minimum required number of selections is ","multipleError":"There are {count} errors on this page. Please correct them before moving on.","multipleFileUploads_emptyError":"{file} is empty, please select files again without it.","multipleFileUploads_fileLimitError":"Only {fileLimit} file uploads allowed.","multipleFileUploads_minSizeError":"{file} is too small, minimum file size is {minSizeLimit}.","multipleFileUploads_onLeave":"The files are being uploaded, if you leave now the upload will be cancelled.","multipleFileUploads_sizeError":"{file} is too large, maximum file size is {sizeLimit}.","multipleFileUploads_typeError":"{file} has invalid extension. Only {extensions} are allowed.","multipleFileUploads_uploadFailed":"File upload failed, please remove it and upload the file again.","nextButtonText":"Next","noSlotsAvailable":"No slots available","notEnoughStock":"Not enough stock for the current selection","notEnoughStock_remainedItems":"Not enough stock for the current selection ({count} items left)","noUploadExtensions":"File has no extension file type (e.g. .txt, .png, .jpeg)","numeric":"This field can only contain numeric values","oneError":"There is {count} error on this page. Please correct it before moving on.","pastDatesDisallowed":"Date must not be in the past.","pleaseWait":"Please wait...","prevButtonText":"Previous","progressMiddleText":"of","required":"This field is required.","requiredLegend":"All fields marked with * are required and must be filled.","requireEveryCell":"Every cell is required.","requireEveryRow":"Every row is required.","requireOne":"At least one field required.","restrictedDomain":"This domain is not allowed","reviewBackText":"Back to Form","reviewSubmitText":"Review and Submit","seeAllText":"See All","seeErrorsButton":"See Errors","selectedTime":"Selected Time","selectionSoldOut":"Selection Sold Out","slotUnavailable":"{time} on {date} has been selected is unavailable. Please select another slot.","soldOut":"Sold Out","startButtonText":"START","submissionLimit":"Sorry! Only one entry is allowed. &lt;br&gt; Multiple submissions are disabled for this form.","submitButtonText":"Submit","subProductItemsLeft":"({count} items left)","uploadExtensions":"You can only upload following files:","uploadFilesize":"File size cannot be bigger than:","uploadFilesizemin":"File size cannot be smaller than:","url":"This field can only contain a valid URL","validateEmail":"You need to validate this e-mail","wordLimitError":"Too many words. The limit is","wordMinLimitError":"Too few words.  The minimum is"});
	/*INIT-END*/
	});

   setTimeout(function() {
JotForm.paymentExtrasOnTheFly([null,null,{"name":"submit2","qid":"2","text":"Submit","type":"control_button"},{"description":"","name":"patientFull","qid":"3","text":"Patient Full Name","type":"control_fullname"},{"description":"","name":"patientDate","qid":"4","text":"Patient Date of Birth","type":"control_datetime"},null,{"description":"","name":"patientEmail","qid":"6","subLabel":"","text":"Patient Email","type":"control_email"},{"description":"","name":"patientPhone","qid":"7","text":"Patient Phone Number","type":"control_phone"},{"description":"","name":"referreryour","qid":"8","text":"Referrer (Your) Name","type":"control_fullname"},{"name":"divider","qid":"9","text":"Divider","type":"control_divider"},null,{"description":"","name":"referrerPhone","qid":"11","text":"Referrer Phone Number","type":"control_phone"},null,{"description":"","name":"referrerEmail","qid":"13","subLabel":"","text":"Referrer Email","type":"control_email"},{"description":"","mde":"No","name":"notes","qid":"14","subLabel":"","text":"Notes","type":"control_textarea","wysiwyg":"Disable"},{"description":"","name":"wouldYou","qid":"15","text":"Would you like to provide insurance details?","type":"control_radio"},{"description":"","name":"patientsInsurance","qid":"16","subLabel":"","text":"Patient's Insurance Carrier","type":"control_textbox"},{"description":"","name":"patientsGroup","qid":"17","subLabel":"","text":"Patient's Group Number","type":"control_textbox"},{"description":"","name":"patientsMember","qid":"18","subLabel":"","text":"Patient's Member ID\u002FMedicaid #","type":"control_textbox"},null,{"description":"","name":"insurancePhone","qid":"20","text":"Insurance Phone","type":"control_phone"},null,{"name":"input22","qid":"22","text":"Would you like to provide Insurance Details?","type":"control_text"},null,{"name":"divider24","qid":"24","text":"Divider","type":"control_divider"},{"name":"typeA","qid":"25","text":"Referrer","type":"control_widget"},{"description":"","name":"typeA26","qid":"26","subLabel":"","text":"utm_campaign","type":"control_textbox"},{"description":"","name":"utm_content","qid":"27","subLabel":"","text":"utm_content","type":"control_textbox"},{"description":"","name":"utm_medium","qid":"28","subLabel":"","text":"utm_medium","type":"control_textbox"},{"description":"","name":"utm_source","qid":"29","subLabel":"","text":"utm_source","type":"control_textbox"},{"description":"","name":"utm_term","qid":"30","subLabel":"","text":"utm_term","type":"control_textbox"},{"description":"","name":"GCLID","qid":"31","subLabel":"","text":"GCLID","type":"control_textbox"},{"name":"typeA32","qid":"32","text":"Page URL","type":"control_widget"},null,null,null,{"description":"","name":"typeA36","qid":"36","subLabel":"","text":"Patient Postal \u002F Zip Code","type":"control_textbox"},{"description":"","name":"typeA37","qid":"37","subLabel":"","text":"Referrer Zip","type":"control_textbox"},{"description":"","name":"typeA38","qid":"38","subLabel":"","text":"Patient Address","type":"control_textbox"},{"description":"","name":"typeA39","qid":"39","subLabel":"","text":"Patient City","type":"control_textbox"},null,{"description":"","name":"typeA41","qid":"41","subLabel":"","text":"Patient State","type":"control_dropdown"}]);}, 20); 


    JotForm.showJotFormPowered = "0";
  

    JotForm.poweredByText = "Powered by Jotform";
  

    JotForm.hipaa = true;
  

    var all_spc = document.querySelectorAll("form[id='241795436729066'] .si" + "mple" + "_spc");
    for (var i = 0; i < all_spc.length; i++)
    {
      all_spc[i].value = "241795436729066-241795436729066";
    }
  /* GTM dataLayer Push */

var form = document.getElementById('241795436729066');
form.addEventListener('submit', function(event) {
  // Capture form data
  var firstName = document.getElementById('first_3').value;
  var lastName = document.getElementById('last_3').value;
  var dob = document.getElementById('lite_mode_4').value;
  var streetAddress = document.getElementById('input_38').value;
  var city = document.getElementById('input_39').value;
  var state = document.getElementById('input_41').value;
  var zip = document.getElementById('input_36').value;
  var phone = document.getElementById('input_7_full').value;
  var email = document.getElementById('input_6').value;
  var referrerFirstName = document.getElementById('first_8').value;
  var referrerLastName = document.getElementById('last_8').value;
  var referrerZip = document.getElementById('input_37').value;
  var referrerPhone = document.getElementById('input_11_full').value;
  var referrerEmail = document.getElementById('input_13').value;
  var insuranceDetails = document.querySelector('input[name="q15_wouldYou"]:checked').value;

  // Push data to the GTM data layer
  dataLayer.push({
    'event': 'form_submit_partner',
    'first_name': firstName,
    'last_name': lastName,
    'dob': dob,
    'street_address': streetAddress,
    'city': city,
    'state': state,
    'zip': zip,
    'phone': phone,
    'email': email,
    'referrer_first_name': referrerFirstName,
    'referrer_last_name': referrerLastName,
    'referrer_zip': referrerZip,
    'referrer_phone': referrerPhone,
    'referrer_email': referrerEmail,
    'insurance_details': insuranceDetails
  });

JotForm.ownerView=true;
JotForm.isNewSACL=true;

window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("input_32").value = window.location;
});





