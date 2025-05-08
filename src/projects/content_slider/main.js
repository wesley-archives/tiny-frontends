const image = document.querySelector("#img");
const author = document.querySelector("#author");
const source = document.querySelector("#source");
const copyBtn = document.querySelector("#copy");

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const gallery = [
    {
        id: 1,
        name: "Slide 1",
        authorName: "Artist One",
        authorUrl: "#",
        sourceName: "Krita",
        sourceUrl: "#",
        postUrl: "https://krita-artists.org/t/slide1",
        src: "https://krita-artists.org/uploads/default/original/2X/0/04c5088f1823dda35b2cc6784b7407fa62147bc6.jpeg"
    },
    {
        id: 2,
        name: "Slide 2",
        authorName: "Artist Two",
        authorUrl: "#",
        sourceName: "Krita",
        sourceUrl: "#",
        postUrl: "https://krita-artists.org/t/slide2",
        src: "https://krita-artists.org/uploads/default/optimized/3X/2/0/200e4ae74b62354feed5dee93371306deb2fa4c2_2_360x400.jpeg"
    },
    {
        id: 3,
        name: "Slide 3",
        authorName: "Artist Three",
        authorUrl: "#",
        sourceName: "Krita",
        sourceUrl: "#",
        postUrl: "https://krita-artists.org/t/slide3",
        src: "https://krita-artists.org/uploads/default/optimized/2X/7/7e252ff7840bdaae6e3838474ed9294b1942e4f1_2_269x400.jpeg"
    },
    {
        id: 4,
        name: "Slide 4",
        authorName: "Artist Four",
        authorUrl: "#",
        sourceName: "Krita",
        sourceUrl: "#",
        postUrl: "https://krita-artists.org/t/slide4",
        src: "https://krita-artists.org/uploads/default/optimized/2X/9/92b52498ed406062cd10c0cb14e96eb7f216ecea_2_316x400.jpeg"
    }
];

let currentIndex = 0;

function updateImage() {
    const slide = gallery[currentIndex];
    image.src = slide.src;
    author.textContent = slide.authorName;
    author.href = slide.authorUrl;
    source.textContent = slide.sourceName;
    source.href = slide.sourceUrl;
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    updateImage();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % gallery.length;
    updateImage();
});

copyBtn.addEventListener("click", () => {
    const url = gallery[currentIndex].postUrl;
    navigator.clipboard.writeText(url);
    alert("Copied: " + url);
});

updateImage();
