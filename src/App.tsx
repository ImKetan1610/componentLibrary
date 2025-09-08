import { Button } from "./components";

function App() {
  return (
    <div className="p-6 flex gap-4">
      <Button variant="primary" size="md">
        Primary
      </Button>
      <Button variant="secondary" size="md">
        Secondary
      </Button>
      <Button variant="danger" size="md">
        Danger
      </Button>
      <Button variant="outline" size="md">
        Outline
      </Button>
      <Button variant="primary" size="md" isLoading>
        Loading...
      </Button>
    </div>
  );
}

export default App;
