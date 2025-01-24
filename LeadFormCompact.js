window.enableEventObserver = true;
JotForm.newDefaultTheme = true;
JotForm.extendsNewTheme = false;
JotForm.singleProduct = false;
JotForm.newPaymentUIForNewCreatedForms = true;
JotForm.texts = {
	confirmEmail: 'E-mail does not match',
	pleaseWait: 'Please wait...',
	validateEmail: 'You need to validate this e-mail',
	confirmClearForm: 'Are you sure you want to clear the form',
	lessThan: 'Your score should be less than or equal to',
	incompleteFields: 'There are incomplete required fields. Please complete them.',
	required: 'This field is required.',
	requireOne: 'At least one field required.',
	requireEveryRow: 'Every row is required.',
	requireEveryCell: 'Every cell is required.',
	email: 'Enter a valid e-mail address',
	alphabetic: 'This field can only contain letters',
	numeric: 'This field can only contain numeric values',
	alphanumeric: 'This field can only contain letters and numbers.',
	cyrillic: 'This field can only contain cyrillic characters',
	url: 'This field can only contain a valid URL',
	currency: 'This field can only contain currency values.',
	fillMask: 'Field value must fill mask.',
	uploadExtensions: 'You can only upload following files:',
	noUploadExtensions: 'File has no extension file type (e.g. .txt, .png, .jpeg)',
	uploadFilesize: 'File size cannot be bigger than:',
	uploadFilesizemin: 'File size cannot be smaller than:',
	gradingScoreError: 'Score total should only be less than or equal to',
	inputCarretErrorA: 'Input should not be less than the minimum value:',
	inputCarretErrorB: 'Input should not be greater than the maximum value:',
	maxDigitsError: 'The maximum digits allowed is',
	minCharactersError: 'The number of characters should not be less than the minimum value:',
	maxCharactersError: 'The number of characters should not be more than the maximum value:',
	freeEmailError: 'Free email accounts are not allowed',
	minSelectionsError: 'The minimum required number of selections is ',
	maxSelectionsError: 'The maximum number of selections allowed is ',
	pastDatesDisallowed: 'Date must not be in the past.',
	dateLimited: 'This date is unavailable.',
	dateInvalid: 'This date is not valid. The date format is {format}',
	dateInvalidSeparate: 'This date is not valid. Enter a valid {element}.',
	ageVerificationError: 'You must be older than {minAge} years old to submit this form.',
	multipleFileUploads_typeError: '{file} has invalid extension. Only {extensions} are allowed.',
	multipleFileUploads_sizeError: '{file} is too large, maximum file size is {sizeLimit}.',
	multipleFileUploads_minSizeError: '{file} is too small, minimum file size is {minSizeLimit}.',
	multipleFileUploads_emptyError: '{file} is empty, please select files again without it.',
	multipleFileUploads_uploadFailed: 'File upload failed, please remove it and upload the file again.',
	multipleFileUploads_onLeave: 'The files are being uploaded, if you leave now the upload will be cancelled.',
	multipleFileUploads_fileLimitError: 'Only {fileLimit} file uploads allowed.',
	dragAndDropFilesHere_infoMessage: 'Drag and drop files here',
	chooseAFile_infoMessage: 'Choose a file',
	maxFileSize_infoMessage: 'Max. file size',
	generalError: 'There are errors on the form. Please fix them before continuing.',
	generalPageError: 'There are errors on this page. Please fix them before continuing.',
	wordLimitError: 'Too many words. The limit is',
	wordMinLimitError: 'Too few words.  The minimum is',
	characterLimitError: 'Too many Characters.  The limit is',
	characterMinLimitError: 'Too few characters. The minimum is',
	ccInvalidNumber: 'Credit Card Number is invalid.',
	ccInvalidCVC: 'CVC number is invalid.',
	ccInvalidExpireDate: 'Expire date is invalid.',
	ccInvalidExpireMonth: 'Expiration month is invalid.',
	ccInvalidExpireYear: 'Expiration year is invalid.',
	ccMissingDetails: 'Please fill up the credit card details.',
	ccMissingProduct: 'Please select at least one product.',
	ccMissingDonation: 'Please enter numeric values for donation amount.',
	disallowDecimals: 'Please enter a whole number.',
	restrictedDomain: 'This domain is not allowed',
	ccDonationMinLimitError: 'Minimum amount is {minAmount} {currency}',
	requiredLegend: 'All fields marked with * are required and must be filled.',
	geoPermissionTitle: 'Permission Denied',
	geoPermissionDesc: "Check your browser's privacy settings.",
	geoNotAvailableTitle: 'Position Unavailable',
	geoNotAvailableDesc: 'Location provider not available. Please enter the address manually.',
	geoTimeoutTitle: 'Timeout',
	geoTimeoutDesc: 'Please check your internet connection and try again.',
	selectedTime: 'Selected Time',
	formerSelectedTime: 'Former Time',
	cancelAppointment: 'Cancel Appointment',
	cancelSelection: 'Cancel Selection',
	noSlotsAvailable: 'No slots available',
	slotUnavailable: '{time} on {date} has been selected is unavailable. Please select another slot.',
	multipleError: 'There are {count} errors on this page. Please correct them before moving on.',
	oneError: 'There is {count} error on this page. Please correct it before moving on.',
	doneMessage: 'Well done! All errors are fixed.',
	invalidTime: 'Enter a valid time',
	doneButton: 'Done',
	reviewSubmitText: 'Review and Submit',
	nextButtonText: 'Next',
	prevButtonText: 'Previous',
	seeErrorsButton: 'See Errors',
	notEnoughStock: 'Not enough stock for the current selection',
	notEnoughStock_remainedItems: 'Not enough stock for the current selection ({count} items left)',
	soldOut: 'Sold Out',
	justSoldOut: 'Just Sold Out',
	selectionSoldOut: 'Selection Sold Out',
	subProductItemsLeft: '({count} items left)',
	startButtonText: 'START',
	submitButtonText: 'Submit',
	submissionLimit: 'Sorry! Only one entry is allowed. <br> Multiple submissions are disabled for this form.',
	reviewBackText: 'Back to Form',
	seeAllText: 'See All',
	progressMiddleText: 'of',
	fieldError: 'field has an error.',
	error: 'Error',
};
JotForm.newPaymentUI = true;
JotForm.hipaa = true;
JotForm.originalLanguage = 'en';
JotForm.isFormViewTrackingAllowed = true;
JotForm.replaceTagTest = true;

JotForm.setCalculations([
	{
		replaceText: '',
		readOnly: false,
		newCalculationType: true,
		allowZeroCopy: true,
		useCommasForDecimals: false,
		operands: '',
		equation: 'True',
		showBeforeInput: false,
		showEmptyDecimals: false,
		ignoreHiddenFields: false,
		insertAsText: false,
		id: 'action_1727202719426',
		resultField: '33',
		decimalPlaces: '2',
		isError: false,
		conditionId: '1727202735439',
		conditionTrue: false,
		baseField: '31',
	},
	{
		replaceText: '',
		readOnly: false,
		newCalculationType: true,
		allowZeroCopy: true,
		useCommasForDecimals: false,
		operands: '',
		equation: 'False',
		showBeforeInput: false,
		showEmptyDecimals: false,
		ignoreHiddenFields: false,
		insertAsText: false,
		id: 'action_1727202696142',
		resultField: '33',
		decimalPlaces: '2',
		isError: false,
		conditionId: '1727202714254',
		conditionTrue: false,
		baseField: '31',
	},
	{
		replaceText: '',
		readOnly: false,
		newCalculationType: true,
		allowZeroCopy: true,
		useCommasForDecimals: false,
		operands: '10',
		equation: '{10}',
		showBeforeInput: false,
		showEmptyDecimals: false,
		ignoreHiddenFields: false,
		insertAsText: false,
		id: 'action_0_1720040239721',
		resultField: '26',
		decimalPlaces: '2',
		isError: false,
		conditionId: '1720039305589',
		conditionTrue: false,
		baseField: '10',
	},
	{
		replaceText: '',
		readOnly: false,
		newCalculationType: true,
		allowZeroCopy: true,
		useCommasForDecimals: false,
		operands: '12',
		equation: '{12}',
		showBeforeInput: false,
		showEmptyDecimals: false,
		ignoreHiddenFields: false,
		insertAsText: false,
		id: 'action_0_1724691605812',
		resultField: '26',
		decimalPlaces: '2',
		isError: false,
		conditionId: '1720040286767',
		conditionTrue: false,
		baseField: '12',
	},
]);
JotForm.setConditions([
	{
		action: [
			{
				id: 'action_1729544070423',
				visibility: 'RequireMultiple',
				fields: ['37', '38', '43', '44'],
				additionalRequireTypes: [],
				isError: false,
			},
		],
		id: '1729544105695',
		index: '0',
		link: 'Any',
		priority: '0',
		terms: [
			{
				id: 'term_1729544019891',
				field: '11',
				operator: 'equals',
				value: 'I am a professional looking to refer a patient\u002Fclient',
				isError: false,
			},
		],
		type: 'require',
	},
	{
		action: [
			{
				id: 'action_0_1729544110289',
				visibility: 'RequireMultiple',
				isError: false,
				fields: ['37', '38'],
				additionalRequireTypes: [],
			},
		],
		id: '1729543986998',
		index: '1',
		link: 'Any',
		priority: '1',
		terms: [
			{
				id: 'term_0_1729544110289',
				field: '11',
				operator: 'equals',
				value: 'I am seeking help for my family member',
				isError: false,
			},
			{
				id: 'term_1_1729544110289',
				field: '11',
				operator: 'equals',
				value: 'I am seeking help for my friend',
				isError: false,
			},
		],
		type: 'require',
	},
	{
		action: [
			{
				id: 'action_0_1730148406830',
				visibility: 'ShowMultiple',
				isError: false,
				fields: ['37', '38', '43', '44', '45', '46', '57', '61', '63'],
			},
		],
		id: '1729541803646',
		index: '2',
		link: 'Any',
		priority: '2',
		terms: [
			{
				id: 'term_0_1730148406830',
				field: '11',
				operator: 'equals',
				value: 'I am a professional looking to refer a patient\u002Fclient',
				isError: false,
			},
		],
		type: 'field',
	},
	{
		action: [
			{ id: 'action_0_1730148417206', visibility: 'ShowMultiple', isError: false, fields: ['37', '38', '63'] },
		],
		id: '1729541627900',
		index: '3',
		link: 'Any',
		priority: '3',
		terms: [
			{
				id: 'term_0_1730148417206',
				field: '11',
				operator: 'equals',
				value: 'I am seeking help for my family member',
				isError: false,
			},
			{
				id: 'term_1_1730148417206',
				field: '11',
				operator: 'equals',
				value: 'I am seeking help for my friend',
				isError: false,
			},
		],
		type: 'field',
	},
	{
		action: [{ id: 'action_1729538639117', visibility: 'Hide', isError: false, field: '36' }],
		id: '1729538655002',
		index: '4',
		link: 'Any',
		priority: '4',
		terms: [
			{
				id: 'term_1729538639117',
				field: '12',
				operator: 'notEquals',
				value: 'Healthcare Provider',
				isError: false,
			},
		],
		type: 'field',
	},
	{
		action: [
			{
				replaceText: '',
				readOnly: false,
				newCalculationType: true,
				allowZeroCopy: true,
				useCommasForDecimals: false,
				operands: '',
				equation: 'True',
				showBeforeInput: false,
				showEmptyDecimals: false,
				ignoreHiddenFields: false,
				insertAsText: false,
				id: 'action_1727202719426',
				resultField: '33',
				decimalPlaces: '2',
				isError: false,
				conditionId: '1727202735439',
				conditionTrue: false,
				baseField: '31',
			},
		],
		id: '1727202735439',
		index: '5',
		link: 'Any',
		priority: '5',
		terms: [{ id: 'term_1727202719426', field: '31', operator: 'isFilled', value: '', isError: false }],
		type: 'calculation',
	},
	{
		action: [
			{
				replaceText: '',
				readOnly: false,
				newCalculationType: true,
				allowZeroCopy: true,
				useCommasForDecimals: false,
				operands: '',
				equation: 'False',
				showBeforeInput: false,
				showEmptyDecimals: false,
				ignoreHiddenFields: false,
				insertAsText: false,
				id: 'action_1727202696142',
				resultField: '33',
				decimalPlaces: '2',
				isError: false,
				conditionId: '1727202714254',
				conditionTrue: false,
				baseField: '31',
			},
		],
		id: '1727202714254',
		index: '6',
		link: 'Any',
		priority: '6',
		terms: [{ id: 'term_1727202696142', field: '31', operator: 'isEmpty', value: '', isError: false }],
		type: 'calculation',
	},
	{
		action: [
			{
				id: 'action_0_1724857047375',
				redirect: 'https:\u002F\u002Fclementineprograms.com\u002Fthank-you\u002F',
				isError: false,
			},
		],
		id: '1724798151217',
		index: '7',
		link: 'Any',
		priority: '7',
		terms: [
			{
				id: 'term_1724857048760',
				field: '21',
				operator: 'contains',
				value: 'staging-clementineprogramscom-leadgen2.kinsta.cloud',
				isError: false,
			},
			{
				id: 'term_0_1724857047375',
				field: '21',
				operator: 'contains',
				value: 'clementineprograms.com',
				isError: false,
			},
		],
		type: 'url',
	},
	{
		action: [
			{
				id: 'action_0_1724856978553',
				redirect: 'https:\u002F\u002Fwww.waldeneatingdisorders.com\u002Fthank-you\u002F',
				isError: false,
			},
		],
		id: '1724798089521',
		index: '8',
		link: 'Any',
		priority: '8',
		terms: [
			{
				id: 'term_1724856980812',
				field: '21',
				operator: 'contains',
				value: 'dev-waldeneatingdisorders.pantheonsite.io',
				isError: false,
			},
			{
				id: 'term_0_1724856978553',
				field: '21',
				operator: 'contains',
				value: 'waldeneatingdisorders.com',
				isError: false,
			},
		],
		type: 'url',
	},
	{
		action: [
			{
				id: 'action_0_1724856957212',
				redirect: 'https:\u002F\u002Fwww.rosewoodranch.com\u002Fthankyou\u002F',
				isError: false,
			},
		],
		id: '1724344122783',
		index: '9',
		link: 'Any',
		priority: '9',
		terms: [
			{
				id: 'term_1724856958923',
				field: '21',
				operator: 'contains',
				value: 'staging-rosewoodranch-leadgen.kinsta.cloud',
				isError: false,
			},
			{
				id: 'term_0_1724856957212',
				field: '21',
				operator: 'contains',
				value: 'rosewoodranch.com',
				isError: false,
			},
		],
		type: 'url',
	},
	{
		action: [{ id: 'action_0_1728323806777', visibility: 'Hide', isError: false, field: '27' }],
		id: '1720735330260',
		index: '10',
		link: 'Any',
		priority: '10',
		terms: [
			{
				id: 'term_0_1728323806777',
				field: '5',
				operator: 'contains',
				value: '@mailinator.com, @jourrapide.com, @armyspy.com, @rhyta.com, @dayrep.com, @teleworm.us',
				isError: false,
			},
		],
		type: 'field',
	},
	{
		action: [
			{
				id: 'action_0_1730144944909',
				visibility: 'HideMultiple',
				isError: false,
				fields: ['3', '4', '5', '6', '12', '10', '27', '30', '22', '31', '32', '36', '46', '57'],
			},
		],
		id: '1719896902666',
		index: '11',
		link: 'Any',
		priority: '11',
		terms: [{ id: 'term_0_1730144944909', field: '11', operator: 'isEmpty', value: '', isError: false }],
		type: 'field',
	},
	{
		action: [
			{
				id: 'action_0_1727203212516',
				visibility: 'ShowMultiple',
				isError: false,
				fields: ['3', '4', '6', '5', '12', '30', '31', '32'],
			},
		],
		id: '1719896877748',
		index: '12',
		link: 'Any',
		priority: '12',
		terms: [{ id: 'term_0_1727203212516', field: '11', operator: 'isFilled', value: '', isError: false }],
		type: 'field',
	},
	{
		action: [{ id: 'action_0_1729538558495', visibility: 'Hide', isError: false, field: '10' }],
		id: '1720025586590',
		index: '13',
		link: 'All',
		priority: '13',
		terms: [{ id: 'term_1_1729538558495', field: '12', operator: 'notEquals', value: 'O', isError: false }],
		type: 'field',
	},
	{
		action: [
			{
				replaceText: '',
				readOnly: false,
				newCalculationType: true,
				allowZeroCopy: true,
				useCommasForDecimals: false,
				operands: '10',
				equation: '{10}',
				showBeforeInput: false,
				showEmptyDecimals: false,
				ignoreHiddenFields: false,
				insertAsText: false,
				id: 'action_0_1720040239721',
				resultField: '26',
				decimalPlaces: '2',
				isError: false,
				conditionId: '1720039305589',
				conditionTrue: false,
				baseField: '10',
			},
		],
		id: '1720039305589',
		index: '14',
		link: 'Any',
		priority: '14',
		terms: [{ id: 'term_0_1720040239721', field: '10', operator: 'isFilled', value: '', isError: false }],
		type: 'calculation',
	},
	{
		action: [
			{
				replaceText: '',
				readOnly: false,
				newCalculationType: true,
				allowZeroCopy: true,
				useCommasForDecimals: false,
				operands: '12',
				equation: '{12}',
				showBeforeInput: false,
				showEmptyDecimals: false,
				ignoreHiddenFields: false,
				insertAsText: false,
				id: 'action_0_1724691605812',
				resultField: '26',
				decimalPlaces: '2',
				isError: false,
				conditionId: '1720040286767',
				conditionTrue: false,
				baseField: '12',
			},
		],
		id: '1720040286767',
		index: '15',
		isError: '1',
		link: 'Any',
		priority: '15',
		terms: [{ id: 'term_0_1724691605812', field: '12', operator: 'isFilled', value: 'O', isError: false }],
		type: 'calculation',
	},
]);
JotForm.clearFieldOnHide = 'disable';
JotForm.submitError = 'jumpToFirstError';

JotForm.enterprise = 'montenido.jotform.com';
window.addEventListener('error', function (event) {
	var error = event.error || event;
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://montenido.jotform.com/API/formInitCatchLogger/243175190287157', true);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(
		JSON.stringify({
			data: {
				stack: error.stack || error.message,
				agent: navigator && navigator.userAgent,
				referrer: location && location.href,
			},
			title: 'FORM_EXCEPTION',
		})
	);
});
JotForm.isFullSource = true;

JotForm.init(function () {
	/*INIT-START*/
	if (window.JotForm && JotForm.accessible) $('input_3').setAttribute('tabindex', 0);
	if (window.JotForm && JotForm.accessible) $('input_4').setAttribute('tabindex', 0);
	if (window.JotForm && JotForm.accessible) $('input_30').setAttribute('tabindex', 0);
	JotForm.description('input_30', 'Pls. Enter 5 Digit Zip Code');
	if (window.JotForm && JotForm.accessible) $('input_37').setAttribute('tabindex', 0);
	if (window.JotForm && JotForm.accessible) $('input_38').setAttribute('tabindex', 0);
	JotForm.setPhoneMaskingValidator(
		'input_44_full',
		'\u0028\u0023\u0023\u0023\u0029 \u0023\u0023\u0023\u002d\u0023\u0023\u0023\u0023'
	);

	JotForm.calendarMonths = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	if (!JotForm.calenderViewMonths) JotForm.calenderViewMonths = {};
	JotForm.calenderViewMonths[63] = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	if (!JotForm.calenderViewDays) JotForm.calenderViewDays = {};
	JotForm.calenderViewDays[63] = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];
	JotForm.calendarDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	JotForm.calendarOther = { today: 'Today' };
	var languageOptions = document.querySelectorAll('#langList li');
	for (var langIndex = 0; langIndex < languageOptions.length; langIndex++) {
		languageOptions[langIndex].on('click', function (e) {
			setTimeout(function () {
				JotForm.setCalendar('63', false, {
					days: {
						monday: true,
						tuesday: true,
						wednesday: true,
						thursday: true,
						friday: true,
						saturday: true,
						sunday: true,
					},
					future: false,
					past: true,
					custom: false,
					ranges: false,
					start: '',
					end: '',
					countSelectedDaysOnly: false,
				});
			}, 0);
		});
	}
	JotForm.onTranslationsFetch(function () {
		JotForm.setCalendar('63', false, {
			days: {
				monday: true,
				tuesday: true,
				wednesday: true,
				thursday: true,
				friday: true,
				saturday: true,
				sunday: true,
			},
			future: false,
			past: true,
			custom: false,
			ranges: false,
			start: '',
			end: '',
			countSelectedDaysOnly: false,
		});
	});
	JotForm.description('input_63', 'Clients DOB');
	if (window.JotForm && JotForm.accessible) $('input_45').setAttribute('tabindex', 0);
	JotForm.description('input_45', 'Pls. Enter 5 Digit Zip Code');
	JotForm.description('input_46', 'Level of care your client is interested in ');
	if (window.JotForm && JotForm.accessible) $('input_10').setAttribute('tabindex', 0);
	if (window.JotForm && JotForm.accessible) $('input_36').setAttribute('tabindex', 0);
	JotForm.setPhoneMaskingValidator(
		'input_6_full',
		'\u0028\u0023\u0023\u0023\u0029 \u0023\u0023\u0023\u002d\u0023\u0023\u0023\u0023'
	);
	if (window.JotForm && JotForm.accessible) $('input_26').setAttribute('tabindex', 0);
	if (window.JotForm && JotForm.accessible) $('input_14').setAttribute('tabindex', 0);
	if (window.JotForm && JotForm.accessible) $('input_15').setAttribute('tabindex', 0);
	if (window.JotForm && JotForm.accessible) $('input_16').setAttribute('tabindex', 0);
	if (window.JotForm && JotForm.accessible) $('input_17').setAttribute('tabindex', 0);
	if (window.JotForm && JotForm.accessible) $('input_18').setAttribute('tabindex', 0);
	if (window.JotForm && JotForm.accessible) $('input_19').setAttribute('tabindex', 0);
	if (window.JotForm && JotForm.accessible) $('input_33').setAttribute('tabindex', 0);
	JotForm.alterTexts({
		ageVerificationError: 'You must be older than {minAge} years old to submit this form.',
		alphabetic: 'This field can only contain letters',
		alphanumeric: 'This field can only contain letters and numbers.',
		cancelAppointment: 'Cancel Appointment',
		cancelSelection: 'Cancel Selection',
		ccDonationMinLimitError: 'Minimum amount is {minAmount} {currency}',
		ccInvalidCVC: 'CVC number is invalid.',
		ccInvalidExpireDate: 'Expire date is invalid.',
		ccInvalidExpireMonth: 'Expiration month is invalid.',
		ccInvalidExpireYear: 'Expiration year is invalid.',
		ccInvalidNumber: 'Credit Card Number is invalid.',
		ccMissingDetails: 'Please fill up the credit card details.',
		ccMissingDonation: 'Please enter numeric values for donation amount.',
		ccMissingProduct: 'Please select at least one product.',
		characterLimitError: 'Too many Characters.  The limit is',
		characterMinLimitError: 'Too few characters. The minimum is',
		chooseAFile_infoMessage: 'Choose a file',
		confirmClearForm: 'Are you sure you want to clear the form',
		confirmEmail: 'E-mail does not match',
		currency: 'This field can only contain currency values.',
		cyrillic: 'This field can only contain cyrillic characters',
		dateInvalid: 'This date is not valid. The date format is {format}',
		dateInvalidSeparate: 'This date is not valid. Enter a valid {element}.',
		dateLimited: 'This date is unavailable.',
		disallowDecimals: 'Please enter a whole number.',
		doneButton: 'Done',
		doneMessage: 'Well done! All errors are fixed.',
		dragAndDropFilesHere_infoMessage: 'Drag and drop files here',
		email: 'Enter a valid e-mail address',
		error: 'Error',
		fieldError: 'field has an error.',
		fillMask: 'Field value must fill mask.',
		formerSelectedTime: 'Former Time',
		freeEmailError: 'Free email accounts are not allowed',
		generalError: 'There are errors on the form. Please fix them before continuing.',
		generalPageError: 'There are errors on this page. Please fix them before continuing.',
		geoNotAvailableDesc: 'Location provider not available. Please enter the address manually.',
		geoNotAvailableTitle: 'Position Unavailable',
		geoPermissionDesc: "Check your browser's privacy settings.",
		geoPermissionTitle: 'Permission Denied',
		geoTimeoutDesc: 'Please check your internet connection and try again.',
		geoTimeoutTitle: 'Timeout',
		gradingScoreError: 'Score total should only be less than or equal to',
		incompleteFields: 'There are incomplete required fields. Please complete them.',
		inputCarretErrorA: 'Input should not be less than the minimum value:',
		inputCarretErrorB: 'Input should not be greater than the maximum value:',
		invalidTime: 'Enter a valid time',
		justSoldOut: 'Just Sold Out',
		lessThan: 'Your score should be less than or equal to',
		maxCharactersError: 'The number of characters should not be more than the maximum value:',
		maxDigitsError: 'The maximum digits allowed is',
		maxFileSize_infoMessage: 'Max. file size',
		maxSelectionsError: 'The maximum number of selections allowed is ',
		minCharactersError: 'The number of characters should not be less than the minimum value:',
		minSelectionsError: 'The minimum required number of selections is ',
		multipleError: 'There are {count} errors on this page. Please correct them before moving on.',
		multipleFileUploads_emptyError: '{file} is empty, please select files again without it.',
		multipleFileUploads_fileLimitError: 'Only {fileLimit} file uploads allowed.',
		multipleFileUploads_minSizeError: '{file} is too small, minimum file size is {minSizeLimit}.',
		multipleFileUploads_onLeave: 'The files are being uploaded, if you leave now the upload will be cancelled.',
		multipleFileUploads_sizeError: '{file} is too large, maximum file size is {sizeLimit}.',
		multipleFileUploads_typeError: '{file} has invalid extension. Only {extensions} are allowed.',
		multipleFileUploads_uploadFailed: 'File upload failed, please remove it and upload the file again.',
		nextButtonText: 'Next',
		noSlotsAvailable: 'No slots available',
		notEnoughStock: 'Not enough stock for the current selection',
		notEnoughStock_remainedItems: 'Not enough stock for the current selection ({count} items left)',
		noUploadExtensions: 'File has no extension file type (e.g. .txt, .png, .jpeg)',
		numeric: 'This field can only contain numeric values',
		oneError: 'There is {count} error on this page. Please correct it before moving on.',
		pastDatesDisallowed: 'Date must not be in the past.',
		pleaseWait: 'Please wait...',
		prevButtonText: 'Previous',
		progressMiddleText: 'of',
		required: 'This field is required.',
		requiredLegend: 'All fields marked with * are required and must be filled.',
		requireEveryCell: 'Every cell is required.',
		requireEveryRow: 'Every row is required.',
		requireOne: 'At least one field required.',
		restrictedDomain: 'This domain is not allowed',
		reviewBackText: 'Back to Form',
		reviewSubmitText: 'Review and Submit',
		seeAllText: 'See All',
		seeErrorsButton: 'See Errors',
		selectedTime: 'Selected Time',
		selectionSoldOut: 'Selection Sold Out',
		slotUnavailable: '{time} on {date} has been selected is unavailable. Please select another slot.',
		soldOut: 'Sold Out',
		startButtonText: 'START',
		submissionLimit:
			'Sorry! Only one entry is allowed. &lt;br&gt; Multiple submissions are disabled for this form.',
		submitButtonText: 'Submit',
		subProductItemsLeft: '({count} items left)',
		uploadExtensions: 'You can only upload following files:',
		uploadFilesize: 'File size cannot be bigger than:',
		uploadFilesizemin: 'File size cannot be smaller than:',
		url: 'This field can only contain a valid URL',
		validateEmail: 'You need to validate this e-mail',
		wordLimitError: 'Too many words. The limit is',
		wordMinLimitError: 'Too few words.  The minimum is',
	});
	/*INIT-END*/
});

setTimeout(function () {
	JotForm.paymentExtrasOnTheFly([
		null,
		null,
		null,
		{ description: '', name: 'firstName', qid: '3', subLabel: '', text: 'First Name', type: 'control_textbox' },
		{ description: '', name: 'lastName', qid: '4', subLabel: '', text: 'Last Name', type: 'control_textbox' },
		{ description: '', name: 'email', qid: '5', subLabel: '', text: 'Email', type: 'control_email' },
		{ description: '', name: 'phoneNumber', qid: '6', text: 'Phone Number', type: 'control_phone' },
		null,
		null,
		null,
		{
			description: '',
			name: 'ifA',
			qid: '10',
			subLabel: '',
			text: 'Please detail how you heard about us',
			type: 'control_textbox',
		},
		{
			description: '',
			name: 'whoDo',
			qid: '11',
			subLabel: '',
			text: 'Who do you want to help?',
			type: 'control_dropdown',
		},
		{
			description: '',
			name: 'howDid',
			qid: '12',
			subLabel: '',
			text: 'How did you hear about us?',
			type: 'control_dropdown',
		},
		null,
		{
			description: '',
			name: 'utm_campaign',
			qid: '14',
			subLabel: '',
			text: 'utm_campaign',
			type: 'control_textbox',
		},
		{ description: '', name: 'utm_content', qid: '15', subLabel: '', text: 'utm_content', type: 'control_textbox' },
		{ description: '', name: 'utm_medium', qid: '16', subLabel: '', text: 'utm_medium', type: 'control_textbox' },
		{ description: '', name: 'utm_source', qid: '17', subLabel: '', text: 'utm_source', type: 'control_textbox' },
		{ description: '', name: 'utm_term', qid: '18', subLabel: '', text: 'utm_term', type: 'control_textbox' },
		{ description: '', name: 'gclid', qid: '19', subLabel: '', text: 'GCLID', type: 'control_textbox' },
		null,
		{ name: 'typeA', qid: '21', text: 'Page URL', type: 'control_widget' },
		{ name: 'typeA22', qid: '22', text: 'URL Referrer', type: 'control_widget' },
		null,
		null,
		null,
		{
			description: '',
			name: 'howdidyouheader-map',
			qid: '26',
			subLabel: '',
			text: 'how did you header - map',
			type: 'control_textbox',
		},
		{ name: 'submit', qid: '27', text: 'Submit', type: 'control_button' },
		null,
		null,
		{
			description: 'Pls. Enter 5 Digit Zip Code',
			name: 'typeA30',
			qid: '30',
			subLabel: '',
			text: 'Zip Code',
			type: 'control_textbox',
		},
		{ description: '', name: 'typeA31', qid: '31', text: 'Disclaimer Checkbox', type: 'control_checkbox' },
		{
			name: 'input32',
			qid: '32',
			text: "By submitting this form, I agree to Monte Nido's Privacy Policy & Terms of Use",
			type: 'control_text',
		},
		{
			description: '',
			name: 'typeA33',
			qid: '33',
			subLabel: '',
			text: 'Disclaimer Hidden Field',
			type: 'control_textbox',
		},
		null,
		null,
		{
			description: '',
			name: 'typeA36',
			qid: '36',
			subLabel: '',
			text: 'Healthcare Provider Name and Practice',
			type: 'control_textbox',
		},
		{
			description: '',
			name: 'typeA37',
			qid: '37',
			subLabel: '',
			text: 'Clients First Name',
			type: 'control_textbox',
		},
		{
			description: '',
			name: 'typeA38',
			qid: '38',
			subLabel: '',
			text: 'Clients Last Name',
			type: 'control_textbox',
		},
		null,
		null,
		null,
		null,
		{
			description: '',
			name: 'email43',
			qid: '43',
			subLabel: '',
			text: "Client's Email Address",
			type: 'control_email',
		},
		{ description: '', name: 'phoneNumber44', qid: '44', text: "Client's Phone #", type: 'control_phone' },
		{
			description: 'Pls. Enter 5 Digit Zip Code',
			name: 'zipCode',
			qid: '45',
			subLabel: '',
			text: "Client's Zip Code",
			type: 'control_textbox',
		},
		{
			description: 'Level of care your client is interested in ',
			name: 'typeA46',
			qid: '46',
			text: 'Level of care your client is interested in ',
			type: 'control_checkbox',
		},
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		{ name: 'input57', qid: '57', text: 'Level of care client is interested in', type: 'control_text' },
		null,
		null,
		null,
		{
			description: '',
			name: 'typeA61',
			qid: '61',
			text: 'Yes, I give Permission to reach out directly to my client',
			type: 'control_checkbox',
		},
		null,
		{ description: 'Clients DOB', name: 'date', qid: '63', text: 'Clients DOB', type: 'control_datetime' },
	]);
}, 20);

JotForm.showJotFormPowered = '0';

JotForm.poweredByText = 'Powered by Jotform';

JotForm.hipaa = true;

var all_spc = document.querySelectorAll("form[id='243175190287157'] .si" + 'mple' + '_spc');
for (var i = 0; i < all_spc.length; i++) {
	all_spc[i].value = '243175190287157-243175190287157';
}

/* GTM dataLayer Push */

var form = document.getElementById('243175190287157');
form.addEventListener('submit', function (event) {
	// Capture form data
	var firstName = document.getElementById('input_3').value;
	var lastName = document.getElementById('input_4').value;
	var email = document.getElementById('input_5').value;
	var phone = document.getElementById('input_6_full').value;
	var zip = document.getElementById('input_30').value;
	var ManualSource = document.getElementById('input_12').value;

	// Push data to the GTM data layer
	dataLayer.push({
		event: 'form_submit_lead',
		first_name: firstName,
		last_name: lastName,
		email: email,
		phone: phone,
		zip: zip,
		ManualSource: ManualSource,
	});
});

JotForm.ownerView = true;
JotForm.isNewSACL = true;

window.addEventListener('DOMContentLoaded', event => {
	// Get the current URL
	var currentUrl = window.location.href;

	// Check if the URL exceeds 255 characters
	if (currentUrl.length > 255) {
		// Truncate the URL to 255 characters
		currentUrl = currentUrl.substring(0, 255);
	}

	// Set the value of the input field to the truncated URL
	document.getElementById('input_21').value = currentUrl;
});
