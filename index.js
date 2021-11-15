function deleteColor () {
    [...document.getElementsByTagName("td")].forEach(td => td.addEventListener("click", e => e.target.style.background= "transparent"))
}