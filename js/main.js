//////////////////////////////////////////////////////////// Завдання 1 ////////////////////////////////////////////////////////////

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let min = 0,
    max = 100;

let $rundomNamber = document.getElementById('rundomNamber'),
    $button = document.getElementById('button');

for (;;) {
    $button.addEventListener('click', function() {
        $rundomNamber.textContent = getRandomInt(min, max);
    });
    break;
}

//////////////////////////////////////////////////////////// Завдання 2 ////////////////////////////////////////////////////////////

// let $description = document.getElementById('description'),
//     $button = document.getElementById('button');

// $button.addEventListener('click', function() {
//     $description.classList.toggle('none');
// });

//////////////////////////////////////////////////////////// Завдання 4 ////////////////////////////////////////////////////////////

// let $nav_list = document.querySelectorAll('.nav>li'),
//     $article_list = document.querySelectorAll('article');

// let item = 0;

// for (let i = 0; i < $nav_list.length; i++) {
//     $nav_list[i].addEventListener('click', function() {
//         if ($article_list[i+1].style.display != 'block') {
//             $article_list[i+1].style.display = 'block'
//             $article_list[item].style.display = 'none'
//             item = i+1;
//         }
//     });
// }

//////////////////////////////////////////////////////////// Завдання 5 ////////////////////////////////////////////////////////////

// let $section = document.querySelectorAll('section'),
//     $button = document.querySelectorAll('button');

// for (let i = 0; i < $section.length; i++) {
//     $button[i].addEventListener('click', function() {
//         $section[i].style.display = 'none';
//     });
// }

//////////////////////////////////////////////////////////// Завдання 6 ////////////////////////////////////////////////////////////

// let $progressbar = document.querySelector('.progressbar'),
//     $button = document.querySelector('button');

// let percent = 5;

// for (let i = 0; i < 20; i++) {
//     $button.addEventListener('click', function() {
//         if ($progressbar.style.width != 100 + '%') {
//             $progressbar.style.width = percent + '%';
//         }
//         percent = percent + 5;
//     })
//     break;
// }
