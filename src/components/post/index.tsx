import { useState } from 'react'
import { Comment } from '../comment'
import { Avatar } from '../avatar'

export function Post() {
  const [isButtonVisible, setButtonVisible] = useState(false)

  const handleTextareaFocus = () => {
    setButtonVisible(true)
  }

  const handleTextareaBlur = () => {
    setButtonVisible(false)
  }
  return (
    <article className="rounded-lg bg-gray800 p-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar src="https://github.com/jecilia.png" variant="post" />
          <div className=" flex flex-col">
            <strong className="leading-6 text-gray100">Jecilia Teixeira</strong>
            <span className="text-sm leading-6 text-gray400">
              Front-End Developer
            </span>
          </div>
        </div>
        <time
          title="21 de Abril as 08:13h"
          dateTime="2024-04-21"
          className="text-sm text-gray400"
        >
          Publicado há 1h
        </time>
      </header>
      <div className="mt-6 leading-6 text-gray300">
        <p className="mt-4">Fala galeraa 👋 </p>
        <p className="mt-4">
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p className="mt-4 space-y-2">
          👉
          <a
            href="#"
            className="font-bold text-green500 hover:text-green300 focus:outline-none focus:outline-green500"
          >
            jane.design/doctorcare
          </a>
        </p>
        <p className="mt-4 space-y-2">
          <a
            href="#"
            className="font-bold text-green500 hover:text-green300 focus:outline-none focus:outline-green500"
          >
            #novoprojeto
          </a>
          <a
            href="#"
            className="font-bold text-green500 hover:text-green300 focus:outline-none focus:outline-green500"
          >
            #nlw
          </a>
          <a
            href="#"
            className="font-bold text-green500 hover:text-green300 focus:outline-none focus:outline-green500"
          >
            #rocketseat
          </a>
        </p>
      </div>
      <form action="" className="mt-6 w-full border-t border-gray600 pt-6">
        <strong className="leading-6 text-gray100">Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentario "
          className="mt-4 h-24 w-full resize-none rounded-lg border-0 bg-gray900 p-4 leading-6 text-gray100 focus:outline-none focus:outline-green500"
          onFocus={handleTextareaFocus}
          onBlur={handleTextareaBlur}
        />
        <button
          type="submit"
          className={`mt-4 rounded-lg border-0 bg-green500 px-6 py-4 font-bold text-white duration-1000 hover:bg-green300 focus:outline-none focus:outline-green500 ${
            isButtonVisible ? ' visible' : 'sr-only'
          }`}
        >
          Publicar
        </button>
      </form>
      <div className="mt-8">
        <Comment />
      </div>
    </article>
  )
}
