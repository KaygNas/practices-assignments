var btn_group_website = document.getElementById("btn_group_website");
btn_group_website.onclick = toggleMore;

function toggleMore() {
    var btn = this;
    var top_nav_content = document.getElementsByClassName("top-nav-content")[0];
    top_nav_content.style.transitionProperty = "height";
    top_nav_content.style.transitionDuration = "0.8s";
    if (top_nav_content.offsetHeight == 0) {
        btn.style.backgroundColor = "#ffffff";
        btn.style.color = "#818181";
        btn.children[2].style = "display:inline-block;transform : rotate(180deg);";
        top_nav_content.style.height = "177px";
        console.log(top_nav_content.offsetHeight + "px");
    } else {
        btn.style.backgroundColor = "";
        btn.style.color = "";
        btn.children[2].style = "";
        top_nav_content.style.height = "0px";
    }
}

function ft() {};
var a = ft;
console.log("typeof ft", typeof ft);
console.log(Boolean(ft));
console.log("typeof a", typeof a);
console.log(Boolean(a));

console.log(a == ft);
console.log(a);
console.log(ft);