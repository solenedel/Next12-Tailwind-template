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
    <div className="h-screen overflow-y-scroll bg-[--pulse-bg] w-screen border-2 border-black">
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
      <main className="min-h-screen flex flex-col py-20  text-center text-[--pulse-black] items-center">
        <h1 className="text-6xl w-2/5 font-bold">
          Try Pulse free for 30 days.
        </h1>
        <p className="text-xl mt-10 w-1/2 leading-8">
          See why Pulse is the best way to monitor your cash flow. Sign up for
          any plan and try Pulse absolutely free for 30 days.
        </p>
        {/* PRICING PLANS */}
        <section className="mt-20 flex h-full w-full items-center">
          <div className="h-60 w-1/3">one</div>
          <div className="h-96 w-1/3 border rounded-lg border-[--pulse-heading]">
            two
          </div>
          <div className="h-60 w-1/3 border border-[--pulse-gray]">three</div>
        </section>
        <q className="mt-20">
          Pulse is worth every penny because it empowers business owners with
          critical financial insight and knowledge.
        </q>
        <div>SUBVERT MARKETING, INC.</div>
      </main>
      {/* FAQ SECTION */}
      <section className="bg-[--pulse-white] h-80"></section>
      {/* FOOTER */}
      <footer className="bg-[--pulse-black] h-80"></footer>
    </div>
  );
}

export default Pulse;
