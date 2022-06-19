import { QueryClient, QueryClientProvider } from "react-query"
import { ToastContainer } from "react-toastify"
import GameScreen from "./screens/GameScreen"

function App() {

  const queryClient = new QueryClient({
    defaultOptions:{ 
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect:false
      }
    }
  })
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <GameScreen />
    </QueryClientProvider>
  )
}

export default App
