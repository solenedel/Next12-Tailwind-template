import PulseLogo from '../../components/PulseLogo';

function Pulse() {
  return (
    <main className="h-screen bg-[--pulse-bg] w-screen">
      <nav className="flex justify-between px-20 pt-10 items-center">
        <PulseLogo />
        <div className="space-x-10">
          <a
            href="src"
            className="text-[--pulse-heading] font-bold hover:text-[--pulse-black]">
            Features
          </a>
          <a
            href="src"
            className="text-[--pulse-heading] font-bold hover:text-[--pulse-black]">
            Customer stories
          </a>
          <a
            href="src"
            className="text-[--pulse-heading] font-bold hover:text-[--pulse-black]">
            Pricing
          </a>
          <a
            href="src"
            className="text-[--pulse-heading] font-bold hover:text-[--pulse-black]">
            Blog
          </a>
          <a
            href="src"
            className="text-[--pulse-heading] font-bold border-2 border-[--pulse-heading] py-2 px-3">
            Sign up
          </a>
        </div>
      </nav>
      <footer></footer>
    </main>
  );
}

export default Pulse;
