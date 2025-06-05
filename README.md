# lawns-llc

This repository contains the static website for **L.A.W.N.S. LLC**. The site is deployed to an S3 bucket using AWS SAM. The contact form on the landing page posts to a Google Apps Script which writes submissions to a Google Sheet.

The Google Apps Script code used by the form can be found in `google-apps-script.js`. Deploy this script as a Web App and use the generated URL in `index.html`.
