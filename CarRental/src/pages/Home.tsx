import SearchForm from "./components/form"
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function Home() {
  return (
    <div>
      <h1 style={{ color: "black", display: "flex", fontFamily: "sans-serif" }}>
        {" "}
        Compare rental car deals to find the right one.
      </h1>
      <SearchForm />
    </div>
  )
}

export default Home
