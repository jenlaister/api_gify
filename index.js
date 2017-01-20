$(document).ready(addFormEventHandler)

  function addFormEventHandler() {
  $('form#gif-form').submit(handleFormSubmit)
  }

  function handleFormSubmit(event) {
    console.log(event)
    event.preventDefault()
    findAndRenderGifs()
  }

  function findAndRenderGifs() {
    const URL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='
    let $input = $('input#query')
    let userInput = $input.val()
    let query = userInput
    $input.val('')


    $.ajax({
      url: `${URL}=${query}`,
      success: renderGif
    })
  }

  function renderGif(data) {
    let gifSpot = $('.thegif')
    gifSpot.html('')
    let gifUrl = data.data.image_url
    gifSpot.append(`<img class="responsive-img" src=${gifUrl}>`)
  }
