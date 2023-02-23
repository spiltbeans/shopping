import { useAtom } from 'jotai';
import Header from './components/Header'
import Options from './components/Options';
import Power from './components/Power';
import Chatbot from './scripts/Chatbot'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { itemAtom } from './state/State';

const App = () => {
  const queryClient = new QueryClient()
  const [, setItem] = useAtom(itemAtom)
  // console.log(document.getElementById('add-to-cart-button'))

  //1. get all elements that are type submit
  //2. add event listener, handl  e by changing state (product/item)
  const handleClick = e => {
    //bubble up until layer where class is 'a-row', look at first index and bubble down until value

    //otherwise, look for id "productTitle" - alternative strategy is just to do this for every submit.add-to-cart
    e.preventDefault()
    if (e.target.name === 'submit.add-to-cart') {
      setItem(document.getElementById('productTitle')?.innerHTML)
    }else if(e.target.name === 'submit.addToCart'){
      let parent = e.target.parentNode

      while(parent?.className !== 'a-row'){
        console.log(parent)
        console.log(parent?.className)
        parent = parent.parentNode
      }
     
    }
  }

  let buttons = [...document.getElementsByName('submit.add-to-cart'), ...document.getElementsByName('submit.addToCart')]
  buttons.forEach(button => {
    button.addEventListener('click', handleClick)
  })


  return (
    <QueryClientProvider client={queryClient}>
      <div className={'w-[270px] h-[200px]'}>
        <Header />
        <Options />
        <Power />
        <Chatbot />
      </div>
    </QueryClientProvider>

  );

}

export default App;
