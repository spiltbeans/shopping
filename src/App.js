import Header from './components/Header'
import Options from './components/Options';
import Power from './components/Power';
import Chatbot from './scripts/Chatbot'
import { QueryClient, QueryClientProvider } from '@tanstack/query-core';

const App = () => {
  const queryClient = new QueryClient()

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
