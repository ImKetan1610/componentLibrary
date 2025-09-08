import { Button } from "./components";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-amber-50 p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-5">Component Library</h1>
        <ThemeToggle />
      </div>

      <div className="flex gap-4">
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
    </div>
  );
}

export default App;
