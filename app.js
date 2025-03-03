function main() {

    const contents = document
        .querySelectorAll('.section');
    const main = document
        .querySelector('.content');
    const txt_1 = document
        .querySelector('.greating span');
    const txt_2 = document
        .querySelector('.greating2 span');
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
        let header = document.querySelector(".header-image");

        let maxScroll = 400;
        let opacity = 1 - (scrollY / maxScroll);
        let height = 400 - scrollY;

        if (scrollY < maxScroll) {
            header.style.opacity = opacity;
            header.style.height = height + "px";
        } else {
            header.style.opacity = 0;
            header.style.height = "0px";
        }

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