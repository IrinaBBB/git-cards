import './App.css';
import {CardList} from "./Components/CardList";
import {Form} from "./Components/Form";

function App(props) {
  return (
    <>
      <h1>{props.title}</h1>
        <Form/>
        <div className="card-container">
        <CardList />
      </div>
    </>
  );
}

export default App;
