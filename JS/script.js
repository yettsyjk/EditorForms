const convertFile = new showdown.Converter({simplifiedAutoLink: true})
const pdf = new jsPDF();

convertFile.getOption({simplifiedAutoLink: true})

$('#editor').keyup(function() {
  $('#output').html(converter.makeHtml($(this).val()))
})


$('#export').click(async function() {
  htmlToPdf($('#output').html(), {
    filename: $('#fiename').val() || 'markdown', margin: 10
  })
})
