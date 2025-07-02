function App() {
  return (
    <div className="h-screen w-screen flex flex-col gap-[3px] p-[3px] bg-white">
      <header className="bg-pink-500 h-[100px] w-full"></header>
      <main className="flex gap-[3px] h-[calc(100%-206px)] w-full bg-white">
        <div className="bg-pink-500 h-full" style={{ width: "calc(100% / 3)" }}></div>
        <div className="bg-pink-500 h-full" style={{ width: "calc(2 * 100% / 3)" }}></div>
      </main>
      <footer className="bg-pink-500 h-[100px] w-full"></footer>
      {/* Optional: Add the button if you want the toggle */}
      {/* <button className="fixed z-50 bottom-4 right-4 bg-white text-black px-4 py-2 rounded shadow" id="btn">Click</button> */}
    </div>
  )
}

export default App
