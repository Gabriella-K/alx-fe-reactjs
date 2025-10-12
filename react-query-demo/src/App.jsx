import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <PostsComponent />
        </QueryClientProvider>
      </div>
    </>
  );
}
export default App;
