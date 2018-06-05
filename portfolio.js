
var showMobileDropdown = false;

document.getElementById("info-box-mobile-ham-icon").onclick = function toggleDropdown() {
    if (showMobileDropdown) {
        document.getElementById("info-box-mobile-dropdown").style.height = "0px";
        document.getElementById("info-box-mobile-dropdown").style.display = "";
        showMobileDropdown = false;
    } else {
        document.getElementById("info-box-mobile-dropdown").style.height = "100px";
        document.getElementById("info-box-mobile-dropdown").style.display = "block";
        showMobileDropdown = true;
    }
}