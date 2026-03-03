import { Header } from "../components/Header";
import { Happy } from "../components/Home/Happy";
import { Todos } from "../components/Home/Todos";
import { Wheather } from "../components/Home/Weather";
import { Analytics } from "../components/Home/Analytics";

export function Home() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <Header />

      <main className="w-full p-6">
        <div className="grid grid-cols-12 gap-6">
          <aside className="col-span-12 lg:col-span-3 flex flex-col gap-6">
            <Happy />
          </aside>
          <section className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <Wheather />
          </section>
          <aside className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            <Todos />
            <Analytics/>
          </aside>
        </div>
      </main>
    </div>
  );
}