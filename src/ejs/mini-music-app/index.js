const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const songs = [
    {
        id: 1,
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        album: 'After Hours',
        ytSrc: '4NRXx6U8ABQ'
    },
    {
        id: 2,
        title: 'Watermelon Sugar',
        artist: 'Harry Styles',
        album: 'Fine Line',
        ytSrc: 'E07s5ZYygMg'
    },
    {
        id: 3,
        title: 'Levitating',
        artist: 'Dua Lipa',
        album: 'Future Nostalgia',
        ytSrc: 'TUVcZfQe-Kw'
    }
];


app.get('/', (req, res) => {
    res.render('index', { songs });
});

app.get('/songs/:id', (req, res) => {
    const song = songs.find(s => s.id == req.params.id);
    if (!song) return res.status(404).send('Song not found');
    res.render('pages/song', { song });
});

app.listen(PORT, () => {
    console.log(`🎵 Music app running at http://localhost:${PORT}`);
});
