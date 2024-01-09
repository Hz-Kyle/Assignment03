//  let newText=document.querySelector('.l-header__logo h1')
//  newText.innerText='Hello'

//  newText.remove('.l-header__logo h1')
//!!!testing the changes of logo//

// let newNode= document.createElement('div')
// newNode.innerHTML='<p>HelloNode</p>'

// let Kyle=document.querySelector('.bcontainer');
//     let refrence=document.querySelectorAll('.bcontainer .l-para')[3];
//     Kyle.insertBefore(newNode,refrence);
// !!!this is testing!!!


// let paragraph = document.querySelectorAll('.l-para__inner');
// let ans = document.querySelectorAll('.l-para__ans');
// // console.log(paragraph)
// for (let i = 0; i < paragraph.length; i++) {
//     paragraph[i].addEventListener('click', function (e) {
//         e.preventDefault();
//       ans[i].classList.toggle('show');
//         // window.alert('click');
//     });
// }
        
let paragraph = document.querySelectorAll('.l-para__inner');

for(let i = 0; i < paragraph.length; i++ ) {
  paragraph[i].addEventListener('click', function(e) {
    
    e.preventDefault();
    paragraph[i].querySelector('.l-para__ans').classList.toggle('show');
   
  });
}
