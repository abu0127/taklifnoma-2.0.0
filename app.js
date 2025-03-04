function main() {

    const contents = document
        .querySelectorAll('.section');
    const main = document
        .querySelector('.content');
    const txt_1 = document
        .querySelector('.greating .cover');
    const txt_2 = document
        .querySelector('.greating2 .cover');
    const txt_3 = document
        .querySelector('.names .cover');


    //animations
    setTimeout(() => {
        main.style.marginTop = '400px'
    }, 100);
    setTimeout(() => {
        txt_1.classList.add('txt_aninamtion_1')
    }, 300);
    setTimeout(() => {
        txt_2.classList.add('txt_aninamtion_1')
    }, 1200);

    window.addEventListener("scroll", function () {
        let scrollpos = window.scrollY;
      

        contents.forEach((content, index) => {
            let contentTop = content.offsetTop - 250;
            let contentHeight = content.offsetHeight;

            if (scrollpos >= contentTop && scrollpos < contentTop + contentHeight) {

                if (index === 0) {
                    txt_3.classList.add('txt_aninamtion_1')
                }

            }
        })



    });
}