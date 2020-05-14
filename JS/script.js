const convertFile = new showdown.Converter({simplifiedAutoLink: true})
const pdf = new jsPDF();

convertFile.getOption({simplifiedAutoLink: true})

$('#editor').keyup(function() {
  $('#output').html(converter.makeHtml($(this).val()))
})
