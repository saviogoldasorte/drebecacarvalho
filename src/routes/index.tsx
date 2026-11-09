import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
// Fotos servidas da pasta public/fotos (funcionam em qualquer hospedagem)
const fotoSofa = { url: "/fotos/rebeca-DSC05031.jpg" };
const fotoCelular = { url: "/fotos/rebeca-DSC05063.jpg" };
const fotoJaleco = { url: "/fotos/rebeca-DSC05117.jpg" };
const fotoJanela = { url: "/fotos/rebeca-DSC05210.jpg" };

/* ================= DADOS EDITÁVEIS ================= */
const WHATSAPP_NUMERO = "5585999297113";
const WHATSAPP_MENSAGEM =
  "Olá! Encontrei o site da Dra. Rebeca e gostaria de informações sobre consultas e disponibilidade de horários.";
const TELEFONE_EXIBICAO = "(85) 99929-7113";
const CRM = "CRM 521304941";
// Preencha quando disponível (deixe "" para ocultar / mostrar "Informações pelo WhatsApp")
const ENDERECO = "";
const CIDADE_ESTADO = "";
const HORARIOS = ""; // exibido no site; no formato schema, ex.: "Mo-Fr 08:00-18:00" pode ser usado em HORARIOS_SCHEMA
const MODALIDADES = "";
const INSTAGRAM_USUARIO = "_rebecacarvalho"; // ex.: "drarebeca"
/* =================================================== */

const WA_LINK = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`;
const CIDADE_SEO = CIDADE_ESTADO ? ` em ${CIDADE_ESTADO}` : "";
const SEO_TITLE = `Ginecologista e Obstetra${CIDADE_SEO} | Dra. Rebeca Carvalho Rodrigues`;
const SEO_DESC = `Dra. Rebeca Carvalho Rodrigues, ginecologista e obstetra${CIDADE_SEO}: consulta preventiva, pré-natal, reposição hormonal e planejamento reprodutivo. Agende pelo WhatsApp.`;
const MAPS_LINK = ENDERECO
  ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${ENDERECO} ${CIDADE_ESTADO}`)}`
  : "";
const A_CONFIRMAR = "Informações pelo WhatsApp";

const ESPECIALIDADES = [
  ["Ginecologia", "Avaliação clínica completa da saúde íntima e reprodutiva, com escuta atenta e orientação clara."],
  ["Consulta preventiva", "Exames de rotina e rastreamento periódico para cuidar da saúde antes que surjam sintomas."],
  ["Acompanhamento da gestação", "Pré-natal próximo e cuidadoso, com acompanhamento de cada etapa da gravidez."],
  ["Planejamento reprodutivo", "Orientação individualizada sobre métodos contraceptivos e o desejo de engravidar."],
  ["Terapia de reposição hormonal", "Avaliação e acompanhamento das mudanças hormonais, incluindo o climatério e a menopausa."],
  ["Saúde da mulher", "Cuidado integral em todas as fases da vida, da adolescência à maturidade."],
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: SEO_TITLE },
      { name: "description", content: SEO_DESC },
      { property: "og:title", content: SEO_TITLE },
      { property: "og:description", content: SEO_DESC },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "Physician",
        name: "Dra. Rebeca Carvalho Rodrigues",
        medicalSpecialty: ["Gynecologic", "Obstetric"],
        telephone: `+${WHATSAPP_NUMERO}`,
        description: SEO_DESC,
        url: "/",
        identifier: CRM,
        availableService: ESPECIALIDADES.map(([n]) => ({ "@type": "MedicalProcedure", name: n })),
        ...(ENDERECO ? { address: { "@type": "PostalAddress", streetAddress: ENDERECO, addressLocality: CIDADE_ESTADO, addressCountry: "BR" } } : {}),
        ...(CIDADE_ESTADO ? { areaServed: CIDADE_ESTADO } : {}),
        ...(HORARIOS ? { openingHours: HORARIOS } : {}),
        ...(MAPS_LINK ? { hasMap: MAPS_LINK } : {}),
        ...(INSTAGRAM_USUARIO ? { sameAs: [`https://instagram.com/${INSTAGRAM_USUARIO}`] } : {}),
      }),
    }],
  }),
});

const NAV = [["#sobre", "Sobre"], ["#especialidades", "Especialidades"], ["#conteudo", "Saúde feminina"], ["#atendimento", "Atendimento"], ["#contato", "Contato"]];


const ARTIGOS = [
  ["Por que manter o acompanhamento ginecológico", "Consultas regulares permitem identificar alterações precocemente e esclarecer dúvidas sobre o próprio corpo, mesmo sem sintomas."],
  ["A importância do pré-natal", "O pré-natal acompanha a saúde da gestante e do bebê, orienta exames e prepara a mulher para o parto com mais segurança."],
  ["Cuidados durante a gestação", "Alimentação equilibrada, hidratação, descanso e consultas em dia fazem parte de uma gestação mais tranquila."],
  ["Saúde feminina em cada fase", "Adolescência, vida reprodutiva, gestação e menopausa trazem necessidades diferentes — e cada uma merece atenção própria."],
];

function WaIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4.9 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
    </svg>
  );
}

function CTA({ children = "Agendar consulta", variant = "solid" }: { children?: React.ReactNode; variant?: "solid" | "ghost" }) {
  const base = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium tracking-wide transition-colors";
  const v = variant === "solid" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-primary/30 text-primary hover:bg-secondary";
  return <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${base} ${v}`}><WaIcon className="h-4 w-4" />{children}</a>;
}

function Photo({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return <img src={src} alt={alt} width={900} height={1350} loading={eager ? "eager" : "lazy"} decoding="async" className={`h-full w-full object-cover ${className}`} />;
}

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#inicio" className="min-w-0 font-serif text-xl leading-none text-gold">Dra. Rebeca Carvalho</a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex" aria-label="Principal">
            {NAV.map(([h, l]) => <a key={h} href={h} className="hover:text-foreground">{l}</a>)}
          </nav>
          <div className="hidden lg:block"><CTA /></div>
          <button className="grid h-11 w-11 shrink-0 place-items-center lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className="relative block h-3 w-6">
              <span className={`absolute left-0 h-px w-6 bg-foreground transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-px w-6 bg-foreground transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-5 pb-6 lg:hidden" aria-label="Menu móvel">
            {NAV.map(([h, l]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-border/60 py-4 font-serif text-2xl">{l}</a>)}
            <div className="mt-6 [&>a]:w-full"><CTA /></div>
          </nav>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-secondary lg:block" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-10 lg:grid-cols-2 lg:py-24">
            <div className="order-2 lg:order-1">
              <p className="eyebrow">Ginecologista e Obstetra</p>
              <h1 className="mt-5 text-5xl leading-[1.02] text-primary/80 sm:text-6xl lg:text-7xl">Dra. Rebeca<br /><em>Carvalho Rodrigues</em></h1>
              <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-muted-foreground">Um cuidado atento e acolhedor para a sua saúde, em cada fase da vida da mulher.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <CTA />
                <a href="#sobre" className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary/30 px-7 text-sm font-medium tracking-wide text-primary hover:bg-secondary">Conheça minha história</a>
              </div>
              <p className="mt-8 text-xs tracking-[0.2em] text-muted-foreground">{CRM}</p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-t-full">
                <Photo eager src={fotoSofa.url} alt="Dra. Rebeca Carvalho Rodrigues sorrindo, sentada em um sofá claro" className="object-[50%_20%]" />
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="scroll-mt-16 py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[5fr_7fr] lg:gap-20">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden"><Photo src={fotoJaleco.url} alt="Dra. Rebeca de jaleco branco em frente a uma janela" className="object-[50%_35%]" /></div>
              <div className="absolute -bottom-5 -right-3 hidden border border-gold/50 bg-background px-6 py-4 sm:block">
                <p className="font-serif text-lg italic">"Cuidar da sua saúde<br />é minha prioridade."</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="eyebrow">Sobre mim</p>
              <h2 className="mt-4 text-4xl sm:text-5xl">Uma trajetória dedicada à saúde da mulher</h2>
              <dl className="mt-10 divide-y divide-border border-y border-border">
                {[
                  ["Formação", "Médica — Centro Universitário Christus"],
                  ["Especialização", "Em especialização em Ginecologia e Obstetrícia no Hospital Central da Polícia Militar (HCPM)"],
                  ["Pós-graduação", "Ultrassonografia ginecológica e obstétrica"],
                  ["Experiência", "Atuação no ambulatório da Leve e Pastore"],
                  ["Registro", CRM],
                ].map(([t, d]) => (
                  <div key={t} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr]">
                    <dt className="text-xs uppercase tracking-[0.2em] text-gold">{t}</dt>
                    <dd className="leading-relaxed">{d}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 font-serif text-2xl italic text-primary/80 sm:hidden">"Cuidar da sua saúde é minha prioridade."</p>
            </div>
          </div>
        </section>

        {/* ESPECIALIDADES */}
        <section id="especialidades" className="scroll-mt-16 bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-xl">
              <p className="eyebrow">Especialidades</p>
              <h2 className="mt-4 text-4xl sm:text-5xl">Cuidados oferecidos</h2>
            </div>
            <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {ESPECIALIDADES.map(([t, d], i) => (
                <article key={t} className="bg-card p-8 lg:p-10">
                  <span className="font-serif text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-2xl">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center"><CTA>Agendar pelo WhatsApp</CTA></div>
          </div>
        </section>

        {/* ACOLHIMENTO */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <p className="eyebrow">Experiência e acolhimento</p>
              <h2 className="mt-4 text-4xl sm:text-5xl">Uma consulta com tempo para ouvir você</h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">Cada mulher tem uma história, uma rotina e necessidades próprias. Por isso, o atendimento é individualizado: começa com uma conversa sem pressa, segue com explicações claras e termina com um plano de cuidado construído junto com você.</p>
              <ul className="mt-8 space-y-4">
                {["Escuta atenta e sem julgamentos", "Explicações claras sobre exames e condutas", "Acompanhamento próximo em cada etapa"].map((x) => (
                  <li key={x} className="flex gap-4"><span className="mt-2.5 h-px w-6 shrink-0 bg-gold" />{x}</li>
                ))}
              </ul>
            </div>
            <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
              <div className="aspect-[2/3] overflow-hidden"><Photo src={fotoJanela.url} alt="Dra. Rebeca sorrindo próxima a uma janela" className="object-[50%_40%]" /></div>
              <div className="mt-12 aspect-[2/3] overflow-hidden"><Photo src={fotoCelular.url} alt="Dra. Rebeca segurando o celular, pronta para responder mensagens" /></div>
            </div>
          </div>
        </section>

        {/* CONTEÚDO */}
        <section id="conteudo" className="scroll-mt-16 border-y border-border bg-accent/40 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <p className="eyebrow">Saúde feminina</p>
            <h2 className="mt-4 max-w-xl text-4xl sm:text-5xl">Informação para cuidar de si</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {ARTIGOS.map(([t, d]) => (
                <article key={t} className="border-t border-primary/20 pt-6">
                  <h3 className="text-2xl">{t}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
                </article>
              ))}
            </div>
            <p className="mt-12 text-xs text-muted-foreground">Conteúdo informativo. Não substitui uma consulta médica.</p>
          </div>
        </section>

        {/* ATENDIMENTO */}
        <section id="atendimento" className="scroll-mt-16 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <p className="eyebrow">Localização e atendimento</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Onde e quando</h2>
            <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
              {[["Endereço", [ENDERECO, CIDADE_ESTADO].filter(Boolean).join(" — ")], ["Telefone / WhatsApp", TELEFONE_EXIBICAO], ["Horários", HORARIOS], ["Modalidades", MODALIDADES]].map(([t, d]) => (
                <div key={t} className="bg-background p-7" itemProp={t === "Telefone / WhatsApp" ? "telephone" : undefined}>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">{t}</p>
                  <p className={`mt-3 ${d ? "" : "text-muted-foreground"}`}>{d || A_CONFIRMAR}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {MAPS_LINK && <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary/30 px-7 text-sm font-medium text-primary hover:bg-secondary">Abrir no Google Maps</a>}
              <CTA variant={MAPS_LINK ? "ghost" : "solid"}>Consultar horários</CTA>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="scroll-mt-16 bg-primary py-20 text-primary-foreground lg:py-28">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <p className="eyebrow">Agendamento</p>
            <h2 className="mt-4 text-4xl sm:text-6xl">Vamos cuidar de você?</h2>
            <p className="mx-auto mt-6 max-w-md font-light leading-relaxed opacity-80">Envie uma mensagem pelo WhatsApp para saber sobre consultas e horários disponíveis.</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-primary-foreground px-10 font-medium text-primary sm:w-auto">
              <WaIcon /> Agendar pelo WhatsApp
            </a>
            <div className="mt-12 grid gap-6 text-sm opacity-90 sm:grid-cols-3">
              <div><p className="text-xs uppercase tracking-[0.2em] text-gold">Telefone</p><a href={WA_LINK} className="mt-2 block">{TELEFONE_EXIBICAO}</a></div>
              <div><p className="text-xs uppercase tracking-[0.2em] text-gold">Endereço</p><p className="mt-2">{ENDERECO || A_CONFIRMAR}</p></div>
              <div><p className="text-xs uppercase tracking-[0.2em] text-gold">Instagram</p>
                {INSTAGRAM_USUARIO ? <a href={`https://instagram.com/${INSTAGRAM_USUARIO}`} target="_blank" rel="noopener noreferrer" className="mt-2 block">@{INSTAGRAM_USUARIO}</a> : <p className="mt-2">Em breve</p>}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary px-5 pb-28 pt-10 text-xs leading-relaxed text-muted-foreground lg:pb-10">
        <div className="mx-auto max-w-6xl space-y-3">
          <p className="font-serif text-lg text-foreground">Dra. Rebeca Carvalho Rodrigues · {CRM}</p>
          <p><strong>Aviso de privacidade:</strong> este site não utiliza formulários e não coleta nem armazena dados pessoais ou informações médicas. O contato acontece exclusivamente pelo WhatsApp, por iniciativa da visitante.</p>
          <p>O conteúdo deste site tem caráter informativo e não substitui uma consulta médica.</p>
          <p>© {new Date().getFullYear()} Dra. Rebeca Carvalho Rodrigues</p>
        </div>
      </footer>

      {/* WhatsApp: barra fixa no celular, botão flutuante no desktop */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="fixed inset-x-3 bottom-3 z-50 flex min-h-14 items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground shadow-lg lg:hidden">
        <WaIcon /> <span className="font-medium">Agendar pelo WhatsApp</span>
      </a>
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp" className="fixed bottom-6 right-6 z-50 hidden h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 lg:grid">
        <WaIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
