import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Facebook, Mail, ShoppingBag, PenTool, BookText, Moon, Star } from "lucide-react";

// Simple starry background
const Stars = () => (
  <div className="pointer-events-none absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black" />
    <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(2px_2px_at_20px_30px,rgba(255,255,255,0.5),transparent),radial-gradient(1px_1px_at_200px_80px,rgba(255,255,255,0.4),transparent),radial-gradient(1px_1px_at_400px_120px,rgba(255,255,255,0.35),transparent),radial-gradient(2px_2px_at_700px_200px,rgba(255,255,255,0.5),transparent)] bg-[length:800px_800px]" />
  </div>
);

const SectionTitle = ({ icon: Icon, title, subtitle }) => (
  <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center text-center">
    <div className="mb-3 flex items-center gap-2 text-zinc-200">
      <Icon className="h-5 w-5" />
      <span className="uppercase tracking-widest text-xs">{subtitle}</span>
    </div>
    <h2 className="font-serif text-3xl md:text-4xl text-zinc-100">{title}</h2>
    <div className="mt-3 h-[2px] w-20 bg-gradient-to-r from-fuchsia-500 via-zinc-300 to-amber-300" />
  </div>
);

export default function IsabelShadowlightLanding() {
  return (
    <div className="min-h-screen w-full bg-black text-zinc-100">
      <Stars />

      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/70 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Moon className="h-6 w-6 text-zinc-200" />
            <span className="font-serif text-xl md:text-2xl">Isabel Shadowlight</span>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#obra" className="text-sm hover:text-zinc-300">Obra</a>
            <a href="#servicios" className="text-sm hover:text-zinc-300">Servicios</a>
            <a href="#tienda" className="text-sm hover:text-zinc-300">Tienda</a>
            <a href="#contacto" className="text-sm hover:text-zinc-300">Contacto</a>
            <Button asChild className="rounded-2xl bg-gradient-to-r from-fuchsia-700 to-amber-600 text-white shadow">
              <a href="#suscribir">Suscríbete</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-300">
              <Star className="h-4 w-4" /> Marca artística
            </p>
            <h1 className="font-serif text-4xl leading-tight md:text-5xl">
              Entre la <span className="bg-gradient-to-r from-fuchsia-400 to-amber-300 bg-clip-text text-transparent">luz</span> y la sombra
            </h1>
            <p className="mt-4 max-w-xl text-zinc-300">
              Historias, arte gótico y diseños originales por <strong>Isabel Shadowlight</strong>. Bienvenida a mi universo: elegante, oscuro y emocional.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl bg-fuchsia-800 text-white">
                <a href="#tienda"><ShoppingBag className="mr-2 h-4 w-4" /> Ver Tienda</a>
              </Button>
              <Button asChild variant="secondary" className="rounded-2xl border border-zinc-700 bg-transparent text-zinc-200 hover:bg-zinc-900">
                <a href="#obra"><BookText className="mr-2 h-4 w-4" /> Leer obra</a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="rounded-2xl border-white/10 bg-gradient-to-br from-zinc-900/70 to-black/70">
              <CardHeader>
                <CardTitle className="font-serif">Próximo lanzamiento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-zinc-300">
                  <p className="text-sm">Colección de relatos: <em>“Cuerdas del Alma”</em></p>
                  <p className="text-sm">Fecha estimada: Octubre • Formato digital + Edición ilustrada</p>
                  <div className="rounded-xl border border-white/10 p-4 text-xs text-zinc-400">
                    Incluye ilustraciones originales, portadas alternativas y acceso a notas de autora.
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* OBRA */}
      <section id="obra" className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle icon={BookText} title="Obra seleccionada" subtitle="Historias & poesía" />
        <div className="grid gap-6 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <Card key={i} className="rounded-2xl border-white/10 bg-zinc-950/80">
              <CardHeader>
                <CardTitle className="font-serif">Relato {i}</CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-300">
                <p className="mb-4 text-sm">
                  Fragmento de muestra. Reemplaza este texto con un extracto de tus historias más fuertes para enganchar a lectores.
                </p>
                <Button variant="secondary" className="rounded-xl border-zinc-700 bg-transparent text-zinc-200 hover:bg-zinc-900">Leer más</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle icon={PenTool} title="Servicios creativos" subtitle="Encargos abiertos" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {title: "Portadas góticas", desc: "Diseños para libros, álbumes y redes."},
            {title: "Escritura personalizada", desc: "Relatos por encargo y dedicatorias."},
            {title: "Edición y corrección", desc: "Pulido profesional de tus textos."},
          ].map((s, idx) => (
            <Card key={idx} className="rounded-2xl border-white/10 bg-zinc-950/80">
              <CardHeader>
                <CardTitle className="font-serif">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-300">
                <p className="mb-4 text-sm">{s.desc}</p>
                <Button asChild className="rounded-xl bg-fuchsia-800 text-white">
                  <a href="#contacto">Solicitar</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* TIENDA */}
      <section id="tienda" className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle icon={ShoppingBag} title="Tienda" subtitle="Merch & descargas" />
        <div className="grid gap-6 md:grid-cols-3">
          {[{name:"Ebook – Colección 1", price:"USD 3"},{name:"Póster A3 – Luna & Rosa", price:"USD 12"},{name:"Pack Portadas (3)", price:"USD 15"}].map((p, i)=> (
            <Card key={i} className="rounded-2xl border-white/10 bg-zinc-950/80">
              <CardHeader>
                <CardTitle className="font-serif">{p.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-300">
                <p className="mb-4 text-sm">{p.price}</p>
                <Button asChild className="rounded-xl bg-amber-600 text-black hover:bg-amber-500">
                  <a href="#">Comprar</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-zinc-400">Conecta con Ko‑fi, Patreon o MercadoPago aquí.</p>
      </section>

      {/* SUSCRIPCIÓN */}
      <section id="suscribir" className="mx-auto max-w-3xl px-6 py-16">
        <SectionTitle icon={Star} title="Suscríbete a la oscuridad" subtitle="Boletín mensual" />
        <Card className="rounded-2xl border-white/10 bg-zinc-950/80">
          <CardContent className="p-6">
            <form className="grid gap-3 md:grid-cols-[1fr_auto]">
              <Input placeholder="Tu email" type="email" className="bg-black/60 text-zinc-100 placeholder:text-zinc-500" />
              <Button className="rounded-xl bg-fuchsia-800 text-white md:w-auto">Unirme</Button>
            </form>
            <p className="mt-3 text-xs text-zinc-500">Recibe adelantos, descuentos y arte exclusivo.</p>
          </CardContent>
        </Card>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-5xl px-6 py-16">
        <SectionTitle icon={Mail} title="Contacto" subtitle="Hablemos" />
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl border-white/10 bg-zinc-950/80">
            <CardContent className="p-6">
              <form className="space-y-3">
                <Input placeholder="Nombre" className="bg-black/60 text-zinc-100 placeholder:text-zinc-500" />
                <Input placeholder="Email" type="email" className="bg-black/60 text-zinc-100 placeholder:text-zinc-500" />
                <Textarea placeholder="Mensaje" className="min-h-[120px] bg-black/60 text-zinc-100 placeholder:text-zinc-500" />
                <Button asChild className="rounded-xl bg-amber-600 text-black hover:bg-amber-500">
                  <a href="mailto:contacto@isabelshadowlight.com?subject=Consulta">Enviar</a>
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-white/10 bg-zinc-950/80">
            <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
              <p className="text-sm text-zinc-300">Sígueme y no te pierdas nuevas publicaciones</p>
              <div className="flex gap-3">
                <Button asChild variant="secondary" className="rounded-full border-zinc-700 bg-transparent text-zinc-200 hover:bg-zinc-900">
                  <a href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram className="mr-2 h-4 w-4" />Instagram</a>
                </Button>
                <Button asChild variant="secondary" className="rounded-full border-zinc-700 bg-transparent text-zinc-200 hover:bg-zinc-900">
                  <a href="https://facebook.com/" target="_blank" rel="noreferrer"><Facebook className="mr-2 h-4 w-4" />Facebook</a>
                </Button>
                <Button asChild variant="secondary" className="rounded-full border-zinc-700 bg-transparent text-zinc-200 hover:bg-zinc-900">
                  <a href="mailto:contacto@isabelshadowlight.com"><Mail className="mr-2 h-4 w-4" />Email</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Isabel Shadowlight · "Entre la luz y la sombra, nace mi arte"
      </footer>
    </div>
  );
}
