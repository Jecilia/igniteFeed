import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment() {
  return (
    <div className="mt-6 flex gap-4">
      <img
        src="https://github.com/jecilia.png"
        alt="deve ser uma pessoa"
        className="size-12 rounded-lg"
      />
      <div className="flex-1">
        <div className="rounded-lg bg-gray700 p-4">
          <header className=" flex items-center justify-between">
            <div className="flex flex-col">
              <strong className="text-sm leading-6">Jecilia Teixeira</strong>
              <time
                title="21 de Abril as 08:13h"
                dateTime="2024-04-21"
                className="text-xs leading-6 text-gray400"
              >
                Cerca de uma 1h atrás
              </time>
            </div>
            <button
              title="Deitar comentário"
              className="leading-0 hover:text-red500 rounded-sm text-gray400 focus:outline-none focus:outline-green500"
            >
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
