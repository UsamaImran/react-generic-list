import List from './components/list/List';

function App() {
  return (
    <div className='App'>
      <List
        items={[1, 2, 3, 4, 5]}
        keyExtractor={(_, index) => index!}
        render={(item) => item}
      />
    </div>
  );
}

export default App;
