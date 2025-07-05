function App() {
  return (
    <>
      <div class="h-screen flex flex-wrap flex-row gap-[3px] p-[3px]">
    <div class="h-[100px] w-full bg-amber-300">

    </div>
    <div class="flex gap-[3px] flex-col h-[calc(100%-206px)] w-full">
      <div class="h-full flex flex-row gap-[3px]">
        <div class="h-full bg-amber-300 flex-4"></div>
        <div class="h-full bg-amber-300 flex-3"></div>
      </div>
      <div class="h-full flex flex-row gap-[3px]">
        <div class="h-full bg-amber-300 flex-3"></div>
        <div class="h-full bg-amber-300 flex-1"></div>
      </div>
    </div>
    <div class="h-[100px] w-full bg-amber-300">

    </div>
  </div>
    </>
  )
}

export default App
