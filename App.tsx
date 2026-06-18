import RootNavigation from './src/navigations/RootNavigation';
import queryClient from '@/api/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigation />
    </QueryClientProvider>
  );
}

export default App;
