import Game from './components/Game.js';
import games from './data/games.js';

const App = () =>
  React.createElement(
    'div',
    { className: 'container mt-5' },
    [
      React.createElement('h1', { className: 'mb-4 text-center' }, '🎮 Gaming!'),
      React.createElement(
        'div',
        { className: 'row g-4' },
        games.map((game, index) =>
          React.createElement(Game, { key: index, ...game })
        )
      ),
    ]
  );

export default App;
