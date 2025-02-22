import Image from "next/image";

export default function Projetos() {
  return (
    <div className="h-auto w-full bg-black text-white p-8 space-y-12">
      <div className="text-center text-orange-400 text-4xl font-semibold border border-orange-400 p-4 rounded-lg">
        SOBRE MIM
      </div>

      <div className="items-center w-full mx-auto flex justify-center">
        <h1 className="text-center items-center w-80 text-orange-400 border border-orange-400 text-5xl font-semibold rounded bg-[#454545]">
          Habilidades
        </h1>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-4">
        {[
          { name: "HTML", desc: "Linguagem responsável por definir o esqueleto de sites." },
          { name: "CSS", desc: "Linguagem responsável por definir o estilo dos sites." },
          { name: "JavaScript", desc: "Linguagem responsável por adicionar lógica aos sites." },
          { name: "Banco de Dados", desc: "Armazena e gerencia dados organizadamente." },
          { name: "Python", desc: "Linguagem versátil para desenvolvimento de software." },
          { name: "Tailwind CSS", desc: "Framework para estilização eficiente de interfaces." }
        ].map((skill, index) => (
          <div key={index} className="flex flex-col bg-[#454545] rounded border border-orange-400 p-4 w-60 text-center">
            <h1 className="text-lg font-semibold text-orange-400">{skill.name}</h1>
            <p className="text-gray-300 text-sm mt-2">{skill.desc}</p>
          </div>
        ))}
      </div>

      <div className="items-center w-full mx-auto flex justify-center">
        <h1 className="text-center items-center w-80 text-orange-400 border border-orange-400 text-5xl font-semibold rounded bg-[#454545]">
          Projetos
        </h1>
      </div>

      <div className="flex items-center justify-center space-x-12 bg-[#222] p-8 rounded-lg">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/Calculadora.PNG"
            width={320}
            height={320}
            alt="Projeto Calculadora"
            className="rounded-lg w-80 h-80 object-cover"
          />
        </div>
        <div className="max-w-md">
          <h1 className="text-3xl font-bold text-white">Projeto Calculadora</h1>
          <p className="text-gray-400 mt-2">
            Um dos meus primeiros projetos práticos. Essa calculadora foi desenvolvida para reforçar meus conhecimentos em JavaScript, manipulação do DOM e estilização com CSS.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-12 bg-[#222] p-8 rounded-lg">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/cell.PNG"
            width={320}
            height={320}
            alt="Projeto Tempo"
            className="rounded-lg w-80 h-80 object-cover"
          />
        </div>
        <div className="max-w-md">
          <h1 className="text-3xl font-bold text-white">Projeto Tempo</h1>
          <p className="text-gray-400 mt-2">
            Um projeto de um site de tempo, é apenas um estilo criado de teste para aprender sobre ícones e estilização de sites. Não há nenhum backend para prever o tempo. (Modelo Mobile)
          </p>
        </div>
      </div>

      <div className="items-center w-full mx-auto flex justify-center">
        <h1 className="text-center items-center w-[500px] text-orange-400 border border-orange-400 text-5xl font-semibold rounded bg-[#454545]">
          Entre em Contato
        </h1>
      </div>

      <div className="flex justify-center">
        <form className="w-full max-w-lg bg-[#111] p-6 rounded-lg space-y-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full p-3 bg-[#222] text-white rounded-lg outline-none border border-gray-700 focus:border-orange-400"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full p-3 bg-[#222] text-white rounded-lg outline-none border border-gray-700 focus:border-orange-400"
          />
          <textarea
            placeholder="Sua mensagem"
            rows="4"
            className="w-full p-3 bg-[#222] text-white rounded-lg outline-none border border-gray-700 focus:border-orange-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white font-bold p-3 rounded-lg hover:bg-gray-900 transition"
          >
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
}
