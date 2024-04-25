import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../avatar'

interface CommentProps {
  content: string
}
export function Comment({ content }: CommentProps) {
  return (
    <div className="mt-6 flex gap-4">
      <Avatar src="https://github.com/jecilia.png" alt="deve ser uma pessoa" />
      <div className="flex-1">
        <div className="rounded-lg bg-gray700 p-4">
          <header className=" flex items-start justify-between">
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
              className="leading-0 rounded-sm text-gray400 hover:text-red500 focus:outline-none focus:outline-green500"
            >
              <Trash size={24} />
            </button>
          </header>
          <p className="mt-4 text-gray300">{content}</p>
        </div>
        <footer className="mt-4">
          <button className="flex items-center rounded-sm text-gray400 hover:text-green300">
            <ThumbsUp className="mr-2" /> Aplaudir
            <span className="before:p-1 before:content-['\2022']">20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
