function Practice1() {
  const menuItemsArray = [
    {
      title: 'Branches',
      desc: 'desc',
      img: 'src',
      link: 'src',
    },
    {
      title: 'Branches',
      desc: 'desc',
      img: 'src',
      link: 'src',
    },
    {
      title: 'Branches',
      desc: 'desc',
      img: 'src',
      link: 'src',
    },
    {
      title: 'Branches',
      desc: 'desc',
      img: 'src',
      link: 'src',
    },
    {
      title: 'Branches',
      desc: 'desc',
      img: 'src',
      link: 'src',
    },
    {
      title: 'Branches',
      desc: 'desc',
      img: 'src',
      link: 'src',
    },
  ];

  const menuItem = (title, desc, img, link) => {
    return (
      <div
        key="title"
        className="text-black border-2 border-black h-80 w-full flex justify-center items-center">
        {/* <img src="/" alt="" /> */}
        <div className="h-20 w-20 bg-black mr-10"></div>
        <span className="text-xl">
          <h2 className="font-bold tracking-wide">{title}</h2>
          <p>{desc}</p>
          <a href="" className="text-[#4C5FD5] hover:underline">
            {link} →
          </a>
        </span>
      </div>
    );
  };

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
      {/* MENU OPTIONS */}
      <section className="h-full grid grid-cols-2 items-center">
        {menuItemsArray.map((item) => {
          return menuItem(item.title, item.desc, item.img, item.link);
        })}
      </section>
      {/* FOOTER */}
      <footer className="bg-black h-1/2"></footer>
    </main>
  );
}

export default Practice1;

// use sass later
// better to use div or span as a grid container?
