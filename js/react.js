
/*1-е задание*/
/*import React from "react";
import ReactDOM from "react-dom";*/

const element = React.createElement(
    'h1',
    { className: "element" },
    'Кажется, мы подключили React!!!',
);

ReactDOM.render(
    element,
    document.getElementById('App'),
);



/*3-е задание*/
const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'Привет от React(передано props)';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Нравиться, нажми'
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);


