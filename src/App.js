import Header from './components/Header'
import Options from './components/Options';
import Power from './components/Power';
import Chatbot from './scripts/Chatbot'
const App = () => {
  return (
    <div className={'w-9/12 h-5/6'}>
      <Header/>
      <Options/>
      <Power/>
      <Chatbot/>
    </div>

  );
}

export default App;
