function Practice1() {
  return (
    <main className="h-screen">
      {/* NAVIGATION / HEADER */}
      <header className="h-20 px-10 bg-black flex w-screen justify-between items-center text-white text-xl">
        <span>
          <a href="">Abstract</a> | <a href="">Help center</a>
        </span>
        <span>
          <button className="border-white border rounded-md p-2 mr-5 ">
            Submit a request
          </button>
          <button className="bg-[#4C5FD5] py-2 px-3 rounded-md">Sign in</button>
        </span>
      </header>
      {/* SEARCH BAR */}
      <section className="h-1/2 w-screen bg-[#dadbf1] flex flex-col items-center justify-center">
        <h1 className="text-black text-5xl mb-10">How can we help?</h1>
        <form action="submit" className="flex justify-center">
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Search"
            className="border-black border rounded-sm pl-2 py-2 w-96 shadow-lg"
          />
          <button type="submit" className="text-2xl relative right-8">
            →
          </button>
        </form>
      </section>
    </main>
  );
}

export default Practice1;
