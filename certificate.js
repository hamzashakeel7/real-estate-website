const gallery = document.querySelectorAll(".gallery .image"),
      previewBox = document.querySelector(".preview__box"),
      closeIcon = previewBox.querySelector(".icon"),
      previewImg = previewBox.querySelector("img"),
      currentImg = previewBox.querySelector(".current-img"),
      Totalimg = previewBox.querySelector(".total-img"),
      shadow = document.querySelector(".shadow");

window.onload = ()=> { // once the window is loaded 
    for (let i= 0; i < gallery.length; i++) {
        Totalimg.textContent = gallery.length

        let newIndex = i; // passing i value to var newIndex
        let clickImgIndex; 
        gallery[i].onclick = () => {
            clickImgIndex = newIndex // passing the click image index to a new variable
            console.log(i)

            function preview() {
                currentImg.textContent = newIndex + 1
                let selectedImgUrl = gallery[newIndex].querySelector("img").src  // getting the true image url when user clicks 
                previewImg.src = selectedImgUrl; // passing user clicked img url to previewImg source
            }

            // previous and next buttons
            const prevBtn = document.querySelector(".prev")
            const nextBtn = document.querySelector(".next")

            if(newIndex == 0) {
                prevBtn.style.display = "none"
            }
            if(newIndex >= gallery.length - 1) {
                nextBtn.style.display = "none"
            }
            prevBtn.onclick = ()=>{
                newIndex--; // decrement of new index value.
                if(newIndex == 0) {
                    preview()
                    prevBtn.style.display = "none"
                } else {
                    preview() // calling above function again to update the image.
                    nextBtn.style.display = "block"
                }
            }
            nextBtn.onclick = ()=>{
                newIndex++; // increment of new index value.
                if(newIndex >= gallery.length - 1) {
                    preview()
                    nextBtn.style.display = "none"
                } else {
                    preview() // calling above function again to update the image.
                    prevBtn.style.display = "block"
                }
            }

            preview()

            previewBox.classList.add("show")
            shadow.style.display = "block"

            closeIcon.onclick = ()=> {
                newIndex  = clickImgIndex // assigning users first clicked image index to newIndex variable.
                prevBtn.style.display = "block"
                nextBtn.style.display = "block"
                previewBox.classList.remove("show")
                shadow.style.display = "none"
            }
        }
    }
}