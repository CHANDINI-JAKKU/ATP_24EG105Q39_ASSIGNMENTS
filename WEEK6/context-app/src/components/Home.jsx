import { useContext } from "react";
import { counterContextObj } from "../contexts/ContextProvider";

function Home() {
  const { counter, incrementCounter, decrementCounter } = useContext(counterContextObj);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-2 gap-8">

        {/* Counter 1 */}
        <div className="bg-gray-200 p-6 rounded text-center">
          <h1 className="text-2xl font-semibold mb-4">
            EditCounter1 : {counter}
          </h1>
          <div className="flex justify-center gap-4">
            <button
              className="bg-violet-300 px-4 py-2 rounded"
              onClick={incrementCounter}
            >
              +
            </button>
            <button
              className="bg-violet-300 px-4 py-2 rounded"
              onClick={decrementCounter}
            >
              -
            </button>
          </div>
        </div>

        {/* Counter 2 */}
        <div className="bg-gray-200 p-6 rounded text-center">
          <h1 className="text-2xl font-semibold mb-4">
            EditCounter2 : {counter}
          </h1>
          <div className="flex justify-center gap-4">
            <button
              className="bg-violet-300 px-4 py-2 rounded"
              onClick={incrementCounter}
            >
              +
            </button>
            <button
              className="bg-violet-300 px-4 py-2 rounded"
              onClick={decrementCounter}
            >
              -
            </button>
          </div>
        </div>

        {/* Counter 3 */}
        <div className="bg-gray-200 p-6 rounded text-center">
          <h1 className="text-2xl font-semibold mb-4">
            EditCounter3 : {counter}
          </h1>
          <div className="flex justify-center gap-4">
            <button
              className="bg-violet-300 px-4 py-2 rounded"
              onClick={incrementCounter}
            >
              +
            </button>
            <button
              className="bg-violet-300 px-4 py-2 rounded"
              onClick={decrementCounter}
            >
              -
            </button>
          </div>
        </div>

        {/* Counter 4 */}
        <div className="bg-gray-200 p-6 rounded text-center">
          <h1 className="text-2xl font-semibold mb-4">
            EditCounter4 : {counter}
          </h1>
          <div className="flex justify-center gap-4">
            <button
              className="bg-violet-300 px-4 py-2 rounded"
              onClick={incrementCounter}
            >
              +
            </button>
            <button
              className="bg-violet-300 px-4 py-2 rounded"
              onClick={decrementCounter}
            >
              -
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;