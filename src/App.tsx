import List from './components/List';
import Form from './components/Form';
import "./App.css";

const App: React.FC = () => { 
  return (
      <div>
        <h1>CRUD APP</h1>
        <List />
        <Form />
      </div> 

  );
}

export default App;
