// toggle

function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active1")
}


// page navbar

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
        const hash = e.target.hash;
        console.log(hash);
        if (e.target.classList.contains("nav1")) {
            toggleNavbar();
        }
        setTimeout(() => {
            document.querySelector("section.active1").classList.remove("active1", "fade-out");
            document.querySelector(e.target.hash).classList.add("active1");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
        }, 500)
    }
})


// nav bar
let list = document.querySelectorAll('.list');

function setActiveClass() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
    item.addEventListener('mouseover', setActiveClass))


// form


function popup() {
    window.addEventListener("DOMContentLoaded", function() {
        // get the form elements defined in your form HTML above

        var form = document.getElementById("my-form");
        // var button = document.getElementById("my-form-button");
        var status = document.getElementById("status");

        // Success and Error functions for after the form is submitted

        function success() {
            form.reset();
            status.swal({
                title: "Success!",
                text: "Thank you for contact me. I will get back to you as soon as possible!",
                icon: "success",
            });

        }

        function error() {
            status.swal({
                title: "Oops!",
                text: "There was a problem!",
                icon: "warning",
                button: "Try again",
            });
        }

        // handle the form submission event

        form.addEventListener("submit-mail", function(ev) {
            ev.preventDefault();
            var data = new FormData(form);
            ajax(form.method, form.action, data, success, error);
        });
    });

    // helper function for sending an AJAX request

    function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                success(xhr.response, xhr.responseType);
            } else {
                error(xhr.status, xhr.response, xhr.responseType);
            }
        };
        xhr.send(data);
    }

    // toggle

    function toggleNavbar() {
        document.querySelector(".header").classList.toggle("active1")
    }


    // page navbar

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("link-item") && e.target.hash !== "") {
            const hash = e.target.hash;
            console.log(hash);
            if (e.target.classList.contains("nav1")) {
                toggleNavbar();
            }
            setTimeout(() => {
                document.querySelector("section.active1").classList.remove("active1", "fade-out");
                document.querySelector(e.target.hash).classList.add("active1");
                window.scrollTo(0, 0);
                document.body.classList.remove("hide-scrolling");
            }, 500)
        }
    })


    // nav bar
    let list = document.querySelectorAll('.list');

    function setActiveClass() {
        list.forEach((item) => item.classList.remove('active'));
        this.classList.add('active');
    }

    list.forEach((item) =>
        item.addEventListener('mouseover', setActiveClass))


    // form


    function popup() {
        window.addEventListener("DOMContentLoaded", function() {
            // get the form elements defined in your form HTML above

            var form = document.getElementById("my-form");
            // var button = document.getElementById("my-form-button");
            var status = document.getElementById("status");

            // Success and Error functions for after the form is submitted

            function success() {
                form.reset();
                status.swal({
                    title: "Success!",
                    text: "Thank you for contact me. I will get back to you as soon as possible!",
                    icon: "success",
                });

            }

            function error() {
                status.swal({
                    title: "Oops!",
                    text: "There was a problem!",
                    icon: "warning",
                    button: "Try again",
                });
            }

            // handle the form submission event

            form.addEventListener("submit-mail", function(ev) {
                ev.preventDefault();
                var data = new FormData(form);
                ajax(form.method, form.action, data, success, error);
            });
        });

        // helper function for sending an AJAX request

        function ajax(method, url, data, success, error) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = function() {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    success(xhr.response, xhr.responseType);
                } else {
                    error(xhr.status, xhr.response, xhr.responseType);
                }
            };
            xhr.send(data);
        }
    }
}
// Portfolio Item Details Popup
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.querySelector(".main").classList.toggle("fade-out");
    document.body.classList.toggle("hide-scrolling");

}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {

    document.querySelector(".pp-img img").src =
        portfolioItem.querySelector(".project-img img").src;

    document.querySelector(".pp-header h3").innerHTML =
        portfolioItem.querySelector(".project-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
        portfolioItem.querySelector(".project-details").innerHTML;

}