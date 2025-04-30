# MONTENIDO Form Deployment Guide

This guide outlines the steps to create and update forms using Jotform on Webflow for the MONTENIDO project. It covers
two main scenarios: **Making Changes to Existing Forms** and **Creating New Forms**.

## Table of Contents

-   [Prerequisites](#prerequisites)

-   [Making Changes to Existing Forms](#making-changes-to-existing-forms)

-   [Creating New Forms](#creating-new-forms)

-   [Additional Notes](#additional-notes)

-   [Repository](#repository)

## Prerequisites

Before you begin, ensure you have the following:

-   Access to Jotform and Webflow accounts.

-   GitHub repository access: [amplydevelopment/montenido](https://github.com/amplydevelopment/montenido).

-   Git installed on your local machine.

-   Basic knowledge of HTML, JavaScript, and GitHub workflows.

## Making Changes to Existing Forms

When updating an existing form, follow these steps:

1.  **Access the Jotform Builder**

-   Navigate to the Jotform Builder URL: [JotForm Builder](https://webflow-test-env.webflow.io/jotform-builder)

2.  **Copy the Updated HTML Code**

-   In Jotform Builder, locate the updated form.

-   Copy the generated HTML code for the form.

3.  **Embed HTML in Webflow**

-   Go to your Webflow project.

-   Navigate to the page where the form is embedded.

-   Locate the Embed element and paste the copied HTML code.

4.  **Update JavaScript (If Applicable)**

-   If there are changes to the JavaScript associated with the form:

-   Copy the updated JavaScript code.

5.  **Deploy JavaScript to GitHub**

-   Clone the repository if you haven't already:

```bash

git clone https://github.com/amplydevelopment/montenido.git

```

-   Navigate to the project directory:

```bash

cd montenido

```

-   Add or update the JavaScript files with the new code.

-   Commit and push the changes:

```bash

git add .

git commit -m "Update JavaScript for [form-name]"

git push origin main

```

6.  **Update Script Source to CDN**

-   After pushing the JavaScript changes, obtain the `commitId` and the filename.

-   In your Webflow Embed element, update the `<script src>` tag to point to the CDN with the specific commit ID and
    filename:

```html
<script src="https://cdn.jsdelivr.net/gh/amplydevelopment/montenido@{insert-commit-id}/{insert-file-name}"></script>
```

-   Replace `{insert-commit-id}` with the actual commit ID and `{insert-file-name}` with the JavaScript file name.

## Creating New Forms

When creating a new form, follow the same steps as making changes to existing forms with some additional steps:

1.  **Access the Jotform Builder**

-   Navigate to the Jotform Builder URL:

```

https://webflow-test-env.webflow.io/jotform-builder

```

2.  **Create and Copy the HTML Code**

-   Create the new form in Jotform.

-   Copy the generated code in Jotform for the new form.

3.  **Embed HTML in Webflow**

-   Go to your Webflow project.

-   Navigate to the page where you want to embed the new form.

-   Add an Embed element and paste the copied HTML code.

4.  **Deploy JavaScript**

-   **Add a New JavaScript File to the Repository**:

-   Copy the JavaScript code from the Jotform Builder.

-   In your local clone of the repository, create a new JavaScript file for the form.

```bash

touch {filename}.js

```

-   Paste the copied JavaScript code into this new file and save it.

-   **Commit and Push the New File to GitHub**:

-   Add the new file to the repository, commit your changes, and push them to GitHub:

```bash

git add {filename}.js

git commit -m "Add JavaScript for new form [form-name]"

git push origin main

```

-   **Update Script Source to CDN**

-   After pushing the new JavaScript file, obtain the `commitId` and the filename.

-   In your Webflow Embed element, update the `<script src>` tag to point to the CDN with the specific commit ID and
    filename:

```html
<script defer src="https://cdn.jsdelivr.net/gh/amplydevelopment/montenido@{insert-commit-id}/{insert-file-name}"></script>
```

-   Replace `{insert-commit-id}` with the actual commit ID and `{insert-file-name}` with the JavaScript file name.

5.  **Add GTM dataLayer Push**

-   Integrate Google Tag Manager (GTM) by adding a `dataLayer` push.

```javascript
/* GTM dataLayer Push. */
const form = document.getElementById('241830427246050');

form.addEventListener('submit', function (event) {
	// Capture form data
	const firstName = document.getElementById('input_3').value;
	const lastName = document.getElementById('input_4').value;
	const email = document.getElementById('input_5').value;
	const ManualSource = document.getElementById('input_12').value;

	// Push data to the GTM data layer
	dataLayer.push({
		event: 'form_submit_lead',
		first_name: firstName,
		last_name: lastName,
		email: email,
		ManualSource: ManualSource,
	});
});
```

6.  **Check Fields and IDs**

-   Ensure all form fields have unique and correct IDs.

-   Verify that the IDs match those referenced in your JavaScript and CSS.

7.  **Add `handleFormSubmit` to Form Attribute**

-   Modify the form's `onsubmit` attribute to include the `handleFormSubmit` function.

```html
<form onsubmit="handleFormSubmit(event)">
	<!-- form fields -->
</form>
```

## Repository

All JavaScript changes are managed in the [MONTENIDO GitHub repository](https://github.com/amplydevelopment/montenido).
Ensure you follow the repository's contribution guidelines when making changes.

---

For any questions or support, please contact the development team.
