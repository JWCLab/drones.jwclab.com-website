

var status_navbar = false;

// document.getElementById("icon-bar-mobile").addEventListener("click",  function (){
//     var navbar = document.getElementById("navbar-nav");
//     var bg_navbar = document.getElementById("bg-dark-navbar");
//     var item = document.getElementById("icon-bar-mobile");
//     if (status_navbar == false){
//         navbar.className = "navbar-nav active";
//         bg_navbar.className = "bg-dark-navbar active";
//         item.className = "icon-bar-mobile active";
//         status_navbar = true;
//     }
//     else{
//         navbar.className = "navbar-nav";
//         bg_navbar.className = "bg-dark-navbar";
//         item.className = "icon-bar-mobile";
//         status_navbar = false;
//     }
// });



function Height_Navbar() {
    var header = document.getElementById("header");
    if (!!header) {
        var width_header = header.clientWidth;
        document.getElementById("navbar").style.width = width_header.toString() + "px";
    }
    // document.getElementsByTagName("body").style.width = width_header.toString()+"px";
    // console.log(width_header);
}
function setHeightLoginPage() {
    // No-op: login page height is now handled declaratively via CSS
    // (min-height: 100vh on main.form-page). The old JS-driven height
    // calculation here was conflicting with the navbar padding, causing
    // the login box to visibly jump/oscillate every second.
}

function setMarginTopVideoTag() {
    var sec_video = document.getElementById("sec-video");
    if (!!sec_video && window.innerWidth > 1200)
        sec_video.style.marginTop = (document.getElementById("navbar").offsetHeight - 50).toString() + "px";
}

function clearOwl() {
    var e = document.getElementsByClassName("owl-item active");
    if (!!e) {
        var size = e.length;
        for (var i = 0; i < size; i++) {
            // console.log(e[i].innerText);
            if (e[i]?.innerText.length < 5) {
                // console.log(e[i]);
                e[i].remove();
            }
        }
    }
}

setMarginTopVideoTag();
Height_Navbar();
setHeightLoginPage();
clearOwl();

setInterval(() => {
    Height_Navbar();
    setMarginTopVideoTag();
    setHeightLoginPage();
}, 1000);

setInterval(() => {
    clearOwl();
},500)






// $(document).ready(function () {
//     $('.owl-carousel').owlCarousel({
//         loop: false,
//         margin: 20,
//         nav: true,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 3
//             },
//             1000: {
//                 items: 4
//             }
//         }
//     })
// });

// handle more description for member
function handleDesMember() {
    var team = document.getElementsByClassName('member');
    if (!!team) {
        var size = team.length;
        // console.log(size);
        for (var i = 0; i < size; i++) {
            // console.log(team[i]);
            // if (item[i])
            team[i].addEventListener('click', (e) => {
                if (!!e.target.children[1])
                if (e.target.children[1].children[2].className.trim() == "description") {
                    e.target.children[1].children[2].className = "description description-active";
                }
                else {
                    e.target.children[1].children[2].className = "description";
                }
                // console.log(team[i]);
            })
        }
    }
}
setTimeout(() => {
    handleDesMember();
}, 3000);

$("a[href*='#']:not([href='#'])").click(function () {
    let target = $(this).attr("href");
    if (!!$(target).offset()) {
        $('html,body').stop().animate({
            scrollTop: $(target).offset().top - 100
        }, 2000);
        event.preventDefault();
    }
    else {
        window.location.replace(window.location.origin)
    }

});
