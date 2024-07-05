function updateDocumentType() {
    const documentCategory = document.getElementById('document-category').value;
    const documentType = document.getElementById('document-type');

    const personalOptions = `
        <option value="birth-certificate">Birth Certificate</option>
        <option value="marriage-certificate">Marriage Certificate</option>
        <option value="single-status-affidavit">Single Status Affidavit</option>
    `;

    const businessOptions = `
        <option value="certificate-of-incorporation">Certificate of Incorporation</option>
        <option value="certificate-of-good-standing">Certificate of Good Standing</option>
        <option value="company-bylaws">Company Bylaws</option>
    `;

    const federalOptions = `
        <option value="fbi-background-check">FBI Background Check</option>
        <option value="irs-documents">IRS Documents</option>
        <option value="us-patent">US Patent</option>
    `;

    let options = '<option value="">Select Document Type</option>';

    if (documentCategory === 'personal') {
        options += personalOptions;
    } else if (documentCategory === 'business') {
        options += businessOptions;
    } else if (documentCategory === 'federal') {
        options += federalOptions;
    }

    documentType.innerHTML = options;
}
