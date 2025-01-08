import Header from "@/components/layout/Header";
import Demos from "@/components/sections/Demos";
import Inicio from "@/components/sections/Inicio";
import Sobre from "@/components/sections/Sobre";

export default function Home() {
  return (
      // Aqui esta o corpo da página, onde ficam os componentes da página
    <div className="font-[family-name:var(--font-montserrat)]">
      <Header />
      <Inicio />
      <Demos />
      <Sobre />
    </div>
  );
}
