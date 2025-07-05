function App() {
  return (
    <>
      <div class="h-screen flex flex-col gap-[3px] p-[3px]">
    <div class="h-[100px] w-full bg-[lightgreen]">

    </div>
    <div class="flex gap-[3px] flex-col h-[calc(100%-206px)] w-full">
      <div class="h-full flex flex-row gap-[3px]">
        <div class="h-full bg-[orange] flex-5"></div>
        <div class="h-full bg-[tomato] flex-3"></div>
      </div>
      <div class="h-full flex flex-row gap-[3px]">
        <div class="h-full bg-[aquamarine] flex-3"></div>
        <div class="h-full bg-[yellow] flex-1"></div>
      </div>
    </div>
    <div class="h-[100px] w-full bg-[pink]">

    </div>
  </div>
    </>
  )
}

export default App
