let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.featured-row .featuredpic').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


//for the preview images

let bigImg = document.querySelector('.big-img img');
        function showImg(pic){
            bigImg.src = pic;
        }
   
        let bigTwo = document.querySelector('.big-two img');
        function showImg2(img){
            bigTwo.src = img;
        }

        let bigThree = document.querySelector('.big-three img');
        function showImg3(img){
            bigThree.src = img;
        }

        let bigFour = document.querySelector('.big-four img');
        function showImg4(img){
            bigFour.src = img;
        }

        let bigFive = document.querySelector('.big-five img');
        function showImg5(img){
            bigFive.src = img;
        }

        let bigSix = document.querySelector('.big-six img');
        function showImg6(img){
            bigSix.src = img;
        }

        let bigSeven = document.querySelector('.big-seven img');
        function showImg7(pic){
            bigSeven.src = pic;
        }

        let bigEig = document.querySelector('.big-eig img');
        function showImg8(img){
            bigEig.src = img;
        }
