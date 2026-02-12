function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[var(--color-background)]">

      <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-primary)]">
        GDG GESCOE
      </h1>

      <p className="mt-4 text-lg md:text-xl text-[var(--color-foreground)] max-w-xl">
        Google Developer Group at GESCOE — A community of passionate developers
        learning, building, and growing together.
      </p>

      <button className="mt-8 px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:opacity-90 transition">
        Join Community
      </button>

    </div>
  );
}

export default App;
