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

const pricingListItems = {
  basic: [
    'Manage cash flow on a daily, weekly, monthly, or yearly basis',
    'Forecast growth with recurring income or expenses that scale automatically',
    'Works with any currency',
    'See Money In and Money Out, categorize transactions, and run helpful reports',
    'Toggle entries and accounts on and off to game out different scenarios',
  ],
  business: [
    'Manage cash flow across multiple financial accounts',
    'Invite your investors, book keeper, or management team to see reports or manage cash flow',
    'Integrate with QuickBooks Online for more accurate cash flow',
    'Track your actual cash flow alongside your projected cash flow',
  ],
  premium: [
    'Manage cash flow across unlimited financial accounts',
    'Convert to any currency for localized cash flow reporting and projections',
    'Attach invoices or contracts to your cash flow entries for accountability and auditing',
  ],
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
      <main className="min-h-screen flex flex-col py-20 text-center text-[--pulse-black] items-center">
        <h1 className="text-6xl w-2/5 font-bold">
          Try Pulse free for 30 days.
        </h1>
        <p className="text-xl mt-10 w-1/2 leading-8">
          See why Pulse is the best way to monitor your cash flow. Sign up for
          any plan and try Pulse absolutely free for 30 days.
        </p>
        {/* PRICING PLANS */}
        <section className="mt-20 flex h-full w-full items-center px-10">
          <div className="h-60 w-1/3 px-14 text-left">
            <h2 className="text-[--pulse-heading] text-xl mb-5 font-bold">
              These are what we call the Pulse Basics. They’re what every
              customer gets.
            </h2>
            <ul className="list-disc text-lg">
              {pricingListItems.basic.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="h-fit w-1/3 flex flex-col  border rounded-lg bg-[--pulse-white] border-[--pulse-heading] pb-10">
            <span className="w-full font-semibold rounded-t-md tracking-widest mb-8 bg-[--pulse-heading] text-[--pulse-white]">
              RECOMMENDED
            </span>
            <h2 className="text-[--pulse-heading] text-5xl mb-5 px-14 font-bold">
              Small business plan
            </h2>
            <span className="text-[#83858a] text-xl">$59 per month</span>
            <button className="bg-[--pulse-button] self-center my-5 hover:scale-105 text-2xl font-bold w-3/5 px-3 py-2">
              Sign up now
            </button>
            <h3 className="mt-10 mb-3 font-bold">Your pulse basics, plus:</h3>
            <ul className="list-disc text-lg px-12 text-left self-center">
              {pricingListItems.business.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="h-fit flex flex-col w-1/3 border border-[#f2f3f3] bg-[--pulse-white]">
            <span className="w-full h-fit py-5 px-8 text-black mb-8 bg-[--pulse-gray] ">
              Complex business with multiple financial accounts, currencies, or
              auditing needs?
            </span>
            <h2 className="text-[--pulse-heading] text-4xl mb-5 px-14 font-light">
              Unlock extra features
            </h2>
            <span className="text-[#83858a] text-xl">$89 per month</span>
            <button className="bg-[--pulse-button] self-center my-5 hover:scale-105 text-2xl font-bold w-3/5 px-3 py-2">
              Try premium
            </button>
            <h3 className="mt-10 mb-3 font-bold">Your pulse basics, plus:</h3>
            <ul className="list-disc text-lg px-12 text-left self-center">
              {pricingListItems.business.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
        {/* QUOTE */}
        <q className="mt-32">
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
