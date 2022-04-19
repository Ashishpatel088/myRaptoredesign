// menu list toggle
function myToggle(){
    let menulist = document.getElementById("menu-list-btn");
    if(menulist.style.display === "block") {
        menulist.style.display = "none";
    } else {
        menulist.style.display = "block";
    }
}

//navbar sticky 

window.onscroll = () => {
    const nav = document.querySelector('#headerNavbar');
    if(this.scrollY <= 10) nav.className = 'header'; else nav.className = 'scroll';
  };


 
