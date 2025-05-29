const image = document.getElementById("img");
const changeBtn = document.getElementById("changeBtn");

const gallery = [
    {
        name: "Firefox Logo",
        url: "https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg"
    },
    {
        name: "Google Doodle",
        url: "https://www.google.com/logos/doodles/2021/googles-23rd-birthday-6753651837109087-2xa.gif"
    }
];

let currentIndex = 0;

function updateImage() {
    const { url, name } = gallery[currentIndex];
    image.src = url;
    image.alt = name;
}

changeBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % gallery.length;
    updateImage();
});

updateImage();
