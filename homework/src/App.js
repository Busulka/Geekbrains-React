import {Message} from "./components/Message";

const date = Date()
function App() {
  return (
    <div>
     <Message text={date}/>
    </div>
  );
}

export default App;
