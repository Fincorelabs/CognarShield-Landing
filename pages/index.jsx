import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white font-sans">
      <Head>
  <title>Cognar Shield™ – Escudo Cognitivo Digital</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Ative seu escudo cognitivo: áudio binaural, filtro de dopamina, IA mentora e ritual diário." />
  
  {/* Open Graph */}
  <meta property="og:title" content="Cognar Shield™ – Escudo Cognitivo Digital" />
  <meta property="og:description" content="Ative seu escudo cognitivo: áudio binaural, filtro de dopamina, IA mentora e ritual diário." />
 <meta property="og:image" content="https://cognar-shield-landing.vercel.app/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="https://cognar-shield-landing.vercel.app/" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Cognar Shield™ – Escudo Cognitivo Digital" />
  <meta name="twitter:description" content="Ative seu escudo cognitivo: áudio binaural, filtro de dopamina, IA mentora e ritual diário." />
  <meta name="twitter:image" content="https://cognar-shield-landing.vercel.app/og-image.jpg" />

  <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Ative seu escudo cognitivo.
        </h1>
        <h2 className="text-xl md:text-2xl text-[#00FFE0] mb-10">
          Activate your cognitive shield.
        </h2>
        <p className="max-w-2xl text-lg text-gray-300 mb-10">
          Cognar Shield™ é um sistema digital de defesa mental: áudio binaural, ritual de foco, filtro de dopamina e mentoria guiada pela IA Cognar Core.
        </p>
        <a
          href="https://checkout4.xgrow.com/pt/fc553462-5436-4be6-add3-f10e22f49ea8/OTI4MzA="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00FFE0] text-[#0A192F] px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Ativar Cognar Shield
        </a>

        {/* Bloco institucional */}
        <section className="max-w-3xl mx-auto mt-20 text-gray-400 text-sm text-center px-6">
          <p>
            Cognar Shield™ é uma arquitetura cognitiva experimental de uso pessoal.<br />
            Nosso propósito é proteger e expandir a mente criativa frente à sobrecarga digital, ruído social e dopamina sintética.<br />
            Nenhum dado do usuário é coletado. Nenhum protocolo é obrigatório. Você é o sistema.
          </p>
        </section>
      </main>

      <footer className="py-10 text-center text-sm text-gray-500">
        Cognar Shield™ • Cognitive Defense System • 2025<br />
        <a href="https://cognar.gumroad.com/l/feeyo" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Assinar</a> |
        <a href="https://notion.so" className="ml-2 underline hover:text-white">Sobre</a> |
        <a href="#" className="ml-2 underline hover:text-white">Política de Uso</a>
      </footer>
    </div>
  );
}
