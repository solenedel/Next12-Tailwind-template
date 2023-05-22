import PulseLogo from '../../components/PulseLogo';

const navLink = (linkTitle: string) => {
  return (
    <a
      href="src"
      className="text-[--pulse-heading] font-bold hover:text-[--pulse-black]">
      {linkTitle}
    </a>
  );
};

function Pulse() {
  return (
    <div className="h-screen bg-[--pulse-bg] w-screen">
      {/* NAVIGATION */}
      <nav className="flex justify-between px-20 pt-10 items-center">
        <PulseLogo />
        <div className="space-x-10">
          {navLink('Features')}
          {navLink('Customer stories')}
          {navLink('Pricing')}
          {navLink('Blog')}
          <a
            href="src"
            className="text-[--pulse-heading] font-bold border-2 border-[--pulse-heading] py-2 px-3">
            Sign up
          </a>
        </div>
      </nav>
      {/* MAIN SECTION */}
      <main className="h-screen flex flex-col pt-20  text-center text-[--pulse-black] items-center">
        <h1 className="text-6xl w-2/5 font-bold">
          Try Pulse free for 30 days.
        </h1>
        <p className="text-xl mt-10 w-1/2 leading-8">
          See why Pulse is the best way to monitor your cash flow. Sign up for
          any plan and try Pulse absolutely free for 30 days.
        </p>
      </main>
      {/* FAQ SECTION */}
      <section></section>
      {/* FOOTER */}
      <footer></footer>
    </div>
  );
}

export default Pulse;
