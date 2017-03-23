$(document).ready(function () {
  var $form = $('form')

  // var $links = $('a')
  //prevent default flow of html tag
  // $links.on('click',function (e) {
  //   e.preventDefault()
  // })

  $form.on('submit', function (e) {
    e.preventDefault()
    var inputsArr = $(this).serializeArray()
    var outputArr = inputsArr.map(function (input) {
      return input.value
    })
    $('h1').text(outputArr.join(', '))
  })
})
//test
