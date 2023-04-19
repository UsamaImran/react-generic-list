import { List } from './components/list';

function App() {
  return (
    <div className='App'>
      <List
        items={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => item}
        render={(item) => item}
      />
    </div>
  );
}

export default App;
