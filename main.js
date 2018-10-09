$(document).ready(() => {
  
    $('img').on('mouseenter', event, () => {
      $(event.currentTarget).addClass('button-active');
   
    })
    
    $('img').on('mouseleave', event, () => {
      $(event.currentTarget).removeClass('button-active')
    })
  });