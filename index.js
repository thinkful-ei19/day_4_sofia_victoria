function shpList() {


  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault()

    let itemTitle = $('.js-shopping-list-entry').val()
    const newItem = `<li>
      <span class="shopping-item">${itemTitle}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`
    $('.shopping-list').append(newItem)
  })

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
  })

  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove()
  })
}

$(shpList)
