function main() {
    const firstText = 'Assalomu   aleykum';
    const description =  "Hurmatli qadrli insonim sizni bo'lib o'tadigan visol oqshomimizga lutfan taklif etamiz"
    const targetDay = '02';
    const month ="Aprel"
    const year = "2025 yil"
    const hour = '18:00 soat'
    const names = 'Asadbek  & Zilolaxon'
    const targetTitl = "Manzil  << OSIYO >>  tantanalar saroyi"
    const description2 = "Baxtli kunumizda biz bilan birga bo'ling. "

    const contents = document.querySelectorAll('.section');
    const main = document.querySelector('.content');
    const profel = document.querySelector('.profel');
    const nav = document.querySelector('.nav-bar a');

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
    setTimeout(() => main.style.marginTop = '300px', 100);
    // writing first text with animation
    setTimeout(() => writeTxt(firstText, '.first-txt p', 30), 800);
    // first desciription animation
    setTimeout(() => writeTxt(description, '.description p', 20), 1800);
    setTimeout(() => writeTxt(targetDay, '.target-day p', 20), 4000);
    setTimeout(() => writeTxt(month, '.target-day .mothAnd .mot', 50), 4500);
    setTimeout(() => writeTxt(year, '.target-day .mothAnd .year', 50), 5000);
    setTimeout(() => writeTxt(hour, '.target-day .mothAnd .hour', 50), 5500);
    setTimeout(() => writeTxt(targetTitl, '.target', 50), 6500);
    

    setTimeout(() => nav.classList.add('target-animation'), 7500);

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
                    setTimeout(() => writeTxt(description2, '.description-2 p', 20), 1400);
                    cout = false
                }

            }
        })

        profel.style.borderRadius = "50%";
        profel.style.width = '150px';
        profel.style.height = '150px';
        profel.style.border = '5px solid var(--titles-colors)'
    });
    
    profel.addEventListener('click',()=>{
        profel.style.borderRadius = '5px';
        profel.style.width = '300px';
        profel.style.height = '300px';
        profel.style.boxShadow = '0px 7px 15px  rgb(135, 135, 135)'
        profel.style.border = 'none'
    })
}