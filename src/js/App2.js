/*import React from "react"
import { render } from "react-dom";
import App2 from `./App3`;*/

/*const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

class App2 extends React.Component {
    render() {
        const s3 = "hello world";
        return (
            <div style={styles}>
                <App3 z1={s3} />
            </div>
        );
    }
}

render(<App2 />, document.getElementById("App2"));*/

//2 задание
const message = React.createElement(
    'message',
    { className: "message" },
    'Важное сообщение: "Создан 1-й проект на React!!!',
);

ReactDOM.render(
    message,
    document.getElementById('App2'),
);