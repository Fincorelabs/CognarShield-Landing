import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white font-sans">
      <Head>
        <title>Cognar Shield™</title>
        <meta name="description" content="Ative seu escudo cognitivo com o Cognar Shield." />
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
          href="https://cognar.gumroad.com/l/feeyo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00FFE0] text-[#0A192F] px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Ativar Cognar Shield
        </a>
      </main>

      <footer className="py-10 text-center text-sm text-gray-500">
        Cognar Shield™ • Cognitive Defense System • 2025
      </footer>
    </div>
  );
}
