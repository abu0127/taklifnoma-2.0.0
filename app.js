function main() {
    const firstText = 'Assalomu aleykum';
    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ad.'
    const targetDay = '1 chi fevral kuni soat 19:00';
    const names = 'Simon riley and Sofia'

    const contents = document.querySelectorAll('.section');
    const main = document.querySelector('.content');
    const profel = document.querySelector('.profel');

    // text animation function
    function writeTxt(txt, target, time) {
        let writing = document.querySelector(target);
        writing.textContent = '';

        txt.split('').forEach((character, index) => {
            let span = document.createElement('span');
            span.textContent = character;
            span.style.opacity = 0;
            span.style.transition = 'opacity 1s ease'
            writing.appendChild(span);

            setTimeout(() => span.style.opacity = 1, time * index)
        })
    }

    //animations
    setTimeout(() => main.style.marginTop = '400px', 100);
    // writing first text with animation
    setTimeout(() => writeTxt(firstText, '.first-txt p', 30), 800);
    // first desciription animation
    setTimeout(() => writeTxt(description, '.description p', 20), 1800);
    setTimeout(() => writeTxt(targetDay, '.target-day p', 20), 4000);


let cout = true;

    window.addEventListener("scroll", function () {
        let scrollpos = window.scrollY;

        contents.forEach((content, index) => {
            let contentTop = content.offsetTop - 400;
            let contentHeight = content.offsetHeight;
            
            if (scrollpos >= contentTop && scrollpos < contentTop + contentHeight) {

                if (index === 1 && cout) {

                   profel.classList.add('profel-animated')
                   setTimeout(() => writeTxt(names, '.name p', 30), 800);
                   setTimeout(() => writeTxt(description, '.description-2 p', 20), 1400);
                   cout = false
                }

            }
        })



    });
    console.log(contents)
}