function App() {
  return (
    <div className="flex flex-wrap flex-row gap-[3px] h-screen w-full p-[3px]">
        <div className="bg-pink-500 h-[100px] w-full"></div>
        <div className="flex flex-wrap gap-[3px] h-[calc(100%-206px)] w-full">
          <div className="bg-pink-500 w-full"></div>
          <div className="bg-pink-500 w-full"></div>
          <div className="bg-pink-500 w-full"></div>
        </div>
        <div className="bg-pink-500 h-[100px] w-full"></div>
    </div>
  )
}

export default App
