function App() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col gap-[3px] p-[3px] bg-white">
        <header className="bg-pink-500 h-[100px] w-full"></header>
        <main className="flex gap-[3px] h-[calc(100%-206px)] w-full bg-white">
          <div className="bg-pink-500 h-full" style={{ width: "calc(100% / 3)" }}></div>
          <div className="bg-pink-500 h-full" style={{ width: "calc(2 * 100% / 3)" }}></div>
        </main>
        <footer className="bg-pink-500 h-[100px] w-full"></footer>
      </div>
      <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300">
        Click Me
      </button>
    </>
  )
}

export default App
