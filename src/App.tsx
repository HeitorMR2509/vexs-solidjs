import type { Component } from "solid-js";
import { createResource, Suspense } from "solid-js";

const App: Component = () => {
  const [data, { mutate, refetch }] = createResource(
    async () => {
      return fetch(`${window.location.origin}/api`).then((res) => {
        return res.text();
      });
    }
  );
  return (
    <>
      <div class="navbar bg-base-100 border-b border-b-white/30 shadow-md shadow-white/20 mb-10">
        <a class="btn btn-ghost normal-case text-xl">SolidJS App</a>
      </div>
      <h1 class="text-4xl md:text-5xl text-center mt-2 mb-10 break-words px-2">Meu APP em solidjs+expressjs :)</h1>
      <div class="flex flex-col items-center justify-center">
        <p>Data da api: <Suspense fallback={<div class="animate-pulse w-[91.81px] bg-gray-400/50 h-3 rounded-full inline-block"></div>}>{data()}</Suspense></p>
        <div class="flex flex-row gap-5">
          <button
            onClick={() => {
              mutate("Mutado!!");
            }}
            class="btn"
          >
            Mutar
          </button>
          <button onClick={() => refetch(data())} class="btn">
            Refetch
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
