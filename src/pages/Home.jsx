import { Header } from "../components/ui/Header";
import { Happy } from "../components/Home/Happy";
import { Todos } from "../components/Home/Todos";
import { Wheather } from "../components/Home/Weather";
import { Analytics } from "../components/Home/Analytics";

export function Home() {
  return (
    <div className="home-shell min-h-screen w-full flex flex-col relative overflow-hidden">
      <div className="pointer-events-none absolute -top-28 -left-28 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(252,181,76,0.18)_0%,rgba(252,181,76,0)_72%)]" />
      <div className="pointer-events-none absolute top-[20%] -right-28 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(30,78,62,0.14)_0%,rgba(30,78,62,0)_72%)]" />

      <Header />
      <main className="w-full px-4 pb-4 pt-4 md:px-6 md:pb-6 xl:pt-1 xl:pb-1 relative z-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-12 gap-4 xl:gap-3 xl:items-start">
            <aside className="col-span-12 xl:col-span-3 flex flex-col gap-5 xl:gap-[13px]">
              <Happy />
            </aside>
            <section className="col-span-12 md:col-span-6 xl:col-span-5 flex flex-col gap-5 xl:gap-[13px]">
              <Wheather />
            </section>
            <aside className="col-span-12 md:col-span-6 xl:col-span-4 flex flex-col gap-5 xl:gap-[13px]">
              <Todos />
              <Analytics/>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}