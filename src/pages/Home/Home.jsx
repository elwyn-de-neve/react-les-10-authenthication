import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="flex-1  bg-gray-100">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid max-w-5xl mx-auto items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Authentication for your app
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid deserunt eos et exercitationem, expedita laborum quas,
                quia quisquam quod repellat repellendus reprehenderit sit soluta
                temporibus tenetur unde voluptates! Rem, voluptas.
              </p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                to="/"
              >
                Get Started
              </Link>
            </div>
            <div className="flex flex-col items-start"></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
