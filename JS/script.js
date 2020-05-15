let convertFile = new showdown.Converter({simplifiedAutoLink: true})


convertFile.getOption({simplifiedAutoLink: true})
//Ajax JQuery
$('#editor').keyup(function() {
  $('#output').html(converter.makeHtml($(this).val()))
})
let pdf = new jsPDF();
//Ajax JQuery
$('#export').click(async function() {
  html2pdfPdf($('#output').html(), {
    filename: $('#fiename').val() || 'markdown', margin: 10
  })
})
