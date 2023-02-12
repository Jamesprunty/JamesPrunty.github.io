const title = document.querySelector(".titleContainer");
const menuContainer = document.querySelector("#MenuContainer");
const SHDiv = document.querySelector("#SHDiv");
const page = document.querySelector("#page");
const items = document.querySelectorAll(".item");
const root = document.documentElement;
let rootElement = document.querySelector(':root');
let delay = 1.2;
let duration = 2.5;
root.style.setProperty('--delay', delay + "s");
root.style.setProperty('--duration', duration + "s");
let rotations = 0;

items.forEach(item => {
    item.addEventListener('click', moveItems);
});

items[0].classList.add("three");
for (i = 1; i < items.length; i++) {
    items[i].classList.add("four");
}




console.log(items);

title.addEventListener('click', openMenu);






function moveItems() {

    if (rotations == 0) {
        items[0].classList.add("two");
        items[1].classList.add("three");
        items[0].classList.remove("three");
        items[1].classList.remove("four");
        rotations++;
    }


    delay = 0;
    duration = 1.5;

    root.style.setProperty('--delay', delay + "s");
    root.style.setProperty('--duration', duration + "s");

    if (this.classList.contains("one")) {

        console.log("Click 1");

        for (i = 0; i < items.length; i++) {

            if (items[i].classList.contains("one")) {

                items[i].classList.add("LTM");
                items[i].classList.remove("OTL");
                if (items[i - 1]) {
                    items[i - 1].classList.add("OTL");
                    items[i - 1].classList.remove("LTO");
                    items[i - 1].classList.add("lPrev");
                }

            }

            if (items[i].classList.contains("two")) {

                items[i].classList.add("MTR");
                items[i].classList.remove("LTM");

            }


            if (items[i].classList.contains("three")) {

                items[i].classList.add("RTO");
                items[i].classList.remove("MTR");

            }






        }

        const myTimeout = setTimeout(fixNumRight, (duration * 1000));

        function fixNumRight() {


            if (document.querySelector(".lPrev")) {
                document.querySelector(".lPrev").classList.add("one");
            }
            if (document.querySelector(".lPrev")) {
                document.querySelector(".lPrev").classList.remove("LTO", "OTL");
            }
            if (document.querySelector(".lPrev")) {
                document.querySelector(".lPrev").classList.remove("zero");
            }
            if (document.querySelector(".lPrev")) {
                document.querySelector(".lPrev").classList.remove("lPrev");
            }

            if (document.querySelector(".three")) {
                document.querySelector(".three").classList.add("four");
            }
            if (document.querySelector(".three")) {
                document.querySelector(".three").classList.remove("RTM", "LTM", "OTR");
            }
            if (document.querySelector(".three")) {
                document.querySelector(".three").classList.remove("three");
            }

            if (document.querySelector(".two")) {
                document.querySelector(".two").classList.add("three");
            }
            if (document.querySelector(".two")) {
                document.querySelector(".two").classList.remove("RTM", "LTM");
            }
            if (document.querySelector(".two")) {
                document.querySelector(".two").classList.remove("two");
            }
            if (document.querySelector(".two")) {
                document.querySelector(".two").classList.remove("MTR");
            }


            if (document.querySelector(".one")) {
                document.querySelector(".one").classList.add("two");
            }
            if (document.querySelector(".one")) {
                document.querySelector(".one").classList.remove("LTO", "OTL", "MTL");
            }
            if (document.querySelector(".one")) {
                document.querySelector(".one").classList.remove("one");
            }










        }


    }

    if (this.classList.contains("two")) {

        console.log("Click 2")

    }

    if (this.classList.contains("three")) {


        console.log("Click 3")

        for (i = 0; i < items.length; i++) {


            if (items[i].classList.contains("three")) {

                items[i].classList.add("RTM");
                items[i].classList.remove("OTR");
                if (items[i + 1]) {
                    items[i + 1].classList.add("OTR");
                    items[i + 1].classList.remove("RTO");
                    items[i + 1].classList.add("rNext");
                }

            }

            if (items[i].classList.contains("two")) {

                items[i].classList.add("MTL");
                items[i].classList.remove("RTM");

            }

            if (items[i].classList.contains("one")) {

                items[i].classList.add("LTO");
                items[i].classList.remove("MTL");

            }


        }

        const myTimeout = setTimeout(fixNumLeft, (duration * 1000));

        function fixNumLeft() {

            if (document.querySelector(".one")) {
                document.querySelector(".one").classList.add("zero");
            }
            if (document.querySelector(".one")) {
                document.querySelector(".one").classList.remove("LTO", "OTL");
            }
            if (document.querySelector(".one")) {
                document.querySelector(".one").classList.remove("one");
            }

            if (document.querySelector(".two")) {
                document.querySelector(".two").classList.add("one");
            }
            if (document.querySelector(".two")) {
                document.querySelector(".two").classList.remove("RTM", "LTM");
            }
            if (document.querySelector(".two")) {
                document.querySelector(".two").classList.remove("two");
            }
            if (document.querySelector(".two")) {
                document.querySelector(".two").classList.remove("MTL");
            }

            if (document.querySelector(".three")) {
                document.querySelector(".three").classList.add("two");
            }
            if (document.querySelector(".three")) {
                document.querySelector(".three").classList.remove("RTM", "LTM");
            }
            if (document.querySelector(".three")) {
                document.querySelector(".three").classList.remove("three");
            }

            if (document.querySelector(".rNext")) {
                document.querySelector(".rNext").classList.add("three");
            }
            if (document.querySelector(".rNext")) {
                document.querySelector(".rNext").classList.remove("RTO", "OTR");
            }
            if (document.querySelector(".rNext")) {
                document.querySelector(".rNext").classList.remove("four");
            }
            if (document.querySelector(".rNext")) {
                document.querySelector(".rNext").classList.remove("rNext");
            }


        }


    }




    /*
    if (document.querySelector(".farStart")) {
        document.querySelector(".farStart").classList.remove("farStart");
    }
    if (document.querySelector(".start")) {
        document.querySelector(".start").classList.remove("start");
    }


    if (this.classList.contains("OTR") || this.classList.contains("MTR")) {


        this.classList.add("right");
        this.classList.remove("middle");

        if (document.querySelector(".LTM")) {
            document.querySelector(".LTM").classList.add("middle");
        }

        if (document.querySelector(".RTM")) {
            document.querySelector(".RTM").classList.add("middle");
        }

        if (document.querySelector(".RTM")){        
            document.querySelector(".RTM").classList.remove("RTM");
            }

        document.querySelector(".middle").classList.add("MTL");

        this.classList.add("RTM");
        this.classList.remove("MTR");
        this.classList.remove("OTR");

        if (document.querySelector(".LTM")) {
            document.querySelector(".LTM").classList.remove("LTM");
        }


    }

    if (this.classList.contains("MTL") || this.classList.contains("OTL")) {

        this.classList.add("left");
        this.classList.remove("middle");

        if (document.querySelector(".RTM")) {
            document.querySelector(".RTM").classList.add("middle");
        }

        if (document.querySelector(".LTM")) {
            document.querySelector(".LTM").classList.add("middle");
        }

        if (document.querySelector(".LTM")){        
            document.querySelector(".LTM").classList.remove("LTM");
            }

        document.querySelector(".middle").classList.add("MTR");

        this.classList.add("LTM");
        this.classList.remove("MTL");
        this.classList.remove("OTL");

        if (document.querySelector(".RTM")) {
            document.querySelector(".RTM").classList.remove("RTM");
        }


    }*/
}

function openMenu() {

    title.classList.add("titleAnimate");
    menuContainer.classList.remove("hidden");
    SHDiv.classList.add("subtitleAnimate");
    page.classList.add("backgroundAnimate");
    items[0].classList.add("RTM");
    items[1].classList.add("OTR");


    console.log("Menu Open");


}
