const Game = (props) =>
    React.createElement(
        'div',
        { className: 'col-sm-6 col-md-4 col-lg-2' },
        React.createElement(
            'div',
            { className: 'game card h-100' },
            [
                props.image &&
                React.createElement('img', {
                    src: props.image,
                    className: 'card-img-top',
                    alt: props.title,
                }),
                React.createElement('div', { className: 'card-body d-flex flex-column' }, [
                    React.createElement('h2', { className: 'game__title card-title' }, props.title),
                    React.createElement('p', { className: 'card-text' }, `Category: ${props.category}`),
                    React.createElement('p', { className: 'card-text' }, `Platform: ${props.platform}`),
                    React.createElement('p', { className: 'card-text' }, `Release Date: ${props.releaseDate}`),
                    React.createElement('p', { className: 'card-text' }, `Rating: ${props.rating}`),
                    React.createElement('p', { className: 'card-text' }, props.description),
                ]),
            ]
        )
    );

export default Game;
