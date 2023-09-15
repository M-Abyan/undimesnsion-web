const html = document.querySelector("html")
const isDarkMode = document.querySelector(".isDarkMode")
const circleDark = document.querySelector(".circleDark")


isDarkMode.addEventListener('click', function () {
    if (isDarkMode.checked) {
        html.classList.add("dark")
        circleDark.innerHTML = '<i class="bi bi-moon"></i>'
    }
    else{
        html.classList.remove("dark")
        circleDark.innerHTML = '<i class="bi bi-brightness-high text-orange-300"></i>'
    }
})
