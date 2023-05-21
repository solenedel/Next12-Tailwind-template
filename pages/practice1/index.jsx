// import Image from 'next/image';

function Practice1() {
  const menuItemsArray = [
    {
      title: 'Using Abstract',
      desc: 'Abstract lets you manage, version, and document your designs in one place.',
      img: '/images/abstract_icon.png',
      link: 'src',
    },
    {
      title: 'Manage your account',
      desc: 'Configure your account settings, such as your email, profile details, and password.',
      img: '/images/users_icon.png',
      link: 'src',
    },
    {
      title: 'Manage organizations, teams, and projects',
      desc: 'Use Abstract organizations, teams, and projects to organize your people and your work.',
      img: '/images/puzzle_icon.png',
      link: 'src',
    },
    {
      title: 'Manage billing',
      desc: 'Change subscriptions and payment details.',
      img: '/images/dollar_icon.png',
      link: 'src',
    },
    {
      title: 'Authenticate to Abstract',
      desc: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.',
      img: '/images/key_icon.png',
      link: 'src',
    },
    {
      title: 'Abstract support',
      desc: 'Get in touch with a human.',
      img: '/images/bubble_icon.png',
      link: 'src',
    },
  ];

  const menuItem = (title, desc, img, link) => {
    return (
      <div
        key="title"
        className="text-black h-full w-full flex justify-center items-start ">
        <img src={img} alt="icon" width={80} height={80} className="mr-8" />
        {/* <div className="h-1/2 w-20 bg-black mr-10 self-center"></div> */}
        <div className="text-xl w-1/2 h-1/2">
          <h2 className="font-bold tracking-wide">{title}</h2>
          <p className="w-full my-5">{desc}</p>
          <a href={link} className="text-[#4C5FD5] hover:underline text-lg">
            Learn more →
          </a>
        </div>
      </div>
    );
  };

  return (
    <main className="h-screen overflow-x-hidden">
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
      <section className="h-full grid grid-cols-2 items-center my-32">
        {menuItemsArray.map((item) => {
          return menuItem(item.title, item.desc, item.img, item.link);
        })}
      </section>
      {/* FOOTER */}
      <footer className="bg-black h-1/2 w-full flex justify-between text-white px-20 py-12">
        <div className="flex w-2/3 justify-around">
          <span>
            <h3 className="font-bold text-2xl mb-5">Abstract</h3>
            <ul>
              <li className="hover:underline">
                <a href="link">Start trial</a>
              </li>
              <li className="hover:underline">
                <a href="link">Pricing</a>
              </li>
              <li className="hover:underline">
                <a href="link">Download</a>
              </li>
            </ul>
          </span>
          <span>
            <h3 className="font-bold text-2xl mb-5">Resources</h3>
            <ul>
              <li></li>
            </ul>
          </span>
          <span>
            <h3 className="font-bold text-2xl mb-5">Community</h3>
            <ul>
              <li></li>
            </ul>
          </span>
          <span>
            <h3 className="font-bold text-2xl mb-5">Company</h3>
            <ul>
              <li></li>
            </ul>
          </span>
        </div>

        <p className="self-end text-lg">
          <span className="block">© Copyright 2023</span>
          <span className="block">Abstract Studio Design, Inc.</span>
          <span className="block">All rights reserved</span>
        </p>
      </footer>
    </main>
  );
}

export default Practice1;

// use sass later
// better to use div or span as a grid container?
