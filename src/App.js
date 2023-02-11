import Button from "./components/Button";
const handle = () => console.log('test1')
const handle2 = () => console.log('test2')

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="App">
        This is a test
      </div>
      <Button onClick={handle} message="hello" />
      <Button onClick={handle2} message="hello2" />
    </>

  );
}

export default App;
