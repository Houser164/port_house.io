window.onload=pagelode;
function pagelode(){
    var fb = document.getElementById("fb");
    fb.onclick = linkfacebook;

    var ig = document.getElementById("ig");
    ig.onclick = linkinstagram;

    var gh = document.getElementById("gh");
    gh.onclick = linkgithub;
}

function linkfacebook()
{
    location.href = "https://web.facebook.com/profile.php?id=100007935042765";
}

function linkinstagram()
{
    location.href = "https://www.instagram.com/house_eg/";
}

function linkgithub()
{
    location.href = "https://github.com/Houser164";
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("arrow").addEventListener("click", function () {
        document.getElementById("header").scrollIntoView({ behavior: "smooth" });
    });
});