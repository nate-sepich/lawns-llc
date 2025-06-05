/**
 * This function handles incoming POST requests (URL-encoded form data).
 * It reads each field from e.parameter and appends a row in the Sheet.
 */
function doPost(e) {
  // e.parameter contains each form field (because we'll send as URL-encoded),
  // e.g. e.parameter.name, e.parameter.email, etc.
  var params = e.parameter;

  // Get the active sheet (the one you opened):
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Build a new row: [Timestamp, Name, Email, Phone, Address, Services]
  var newRow = [
    new Date(),
    params.name    || "",
    params.email   || "",
    params.phone   || "",
    params.address || "",
    params.services|| ""
  ];

  // Append that row to the bottom of the sheet:
  sheet.appendRow(newRow);

  // Return a minimal text response (the client uses "no-cors" so the response will be opaque).
  return ContentService
    .createTextOutput("OK")
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * If a GET request ever arrives (unlikely, since our form only does POST),
 * this returns a harmless "OK" so the script doesn't throw a 405.
 */
function doGet(e) {
  return ContentService
    .createTextOutput("OK")
    .setMimeType(ContentService.MimeType.TEXT);
}
