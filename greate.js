import './App.css'

function App(); {
return (
    <div className='App'>
        <header className='App-header'>
            My first React App
            <h3>Hello world</h3>
        </header>
    </div>
    );
}

export default App;


function Welcome(props) {
    return <h1>Привет, {props.name}</h1>;
  }
 
  function Welcome(props) {
    return <h1>Привет, {props.name}</h1>;
  }
  
  function App() {
    return (
      <div>
        <Welcome name="Макс" />
        <Welcome name="МАКС" />
        <Welcome name="Максим" />
      </div>
    );
  }
  
