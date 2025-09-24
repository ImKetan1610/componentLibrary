import { Button } from "./components";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import { useTheme } from "./context/ThemeContext";
import classNames from "classnames";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={classNames(
        "min-h-screen p-6 flex flex-col gap-6",
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-amber-50 text-gray-900"
      )}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-5">Component Library</h1>
        <ThemeToggle />
      </div>

      {/* Buttons container with title */}
      <div
        className={classNames(
          "flex flex-col flex-wrap p-6 rounded-lg",
          theme === "dark"
            ? "bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 border border-gray-700"
            : "bg-gradient-to-br from-amber-100 via-white to-blue-100 border border-amber-300"
        )}
      >
        <h2 className="text-lg font-semibold mb-4">Button Variants</h2>
        <div className="flex gap-4 flex-wrap">
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
    </div>
  );
}

export default App;
