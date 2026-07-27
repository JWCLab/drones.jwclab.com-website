$(document).ready(function () {
    $('#summernote').summernote();
    $('#save_summernote').click(function () {
        var markupStr = $('#summernote').summernote('code');
        console.log(markupStr);
    })
});

PDFObject.embed("https://pdfobject.com/pdf/sample-3pp.pdf", "#box-view-pdf");