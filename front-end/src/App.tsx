import { Container, Stack } from "@chakra-ui/react";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Stack h="100vh">
      <Navbar />
      <Container>
        <ErrorBoundary>
          <TodoForm />
          <TodoList />
        </ErrorBoundary>
      </Container>
    </Stack>
  );
}

export default App;

