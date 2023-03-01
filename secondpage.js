

$(() => {

    let currentImgIndex = 0
  
    const numOfImages = $('.images').children().length - 1
  
  
    // NEXT BUTTON EVENT
    $('.next').on('click', () => {
        $('.images').children().eq(currentImgIndex).css('display', 'none')
  
        if (currentImgIndex < numOfImages) {
            currentImgIndex++
        } else {
            currentImgIndex = 0
        }
  
        $('.images').children().eq(currentImgIndex).css('display', 'block')
    })
  
  
    // PREVIOUS BUTTON EVENT
    $('.previous').on('click', () => {
        $('.images').children().eq(currentImgIndex).css('display', 'none')
  
        if (currentImgIndex > 0) {
            currentImgIndex--
        } else {
            currentImgIndex = numOfImages
        }
  
        $('.images').children().eq(currentImgIndex).css('display', 'block')
  
  
    })
  
  
});