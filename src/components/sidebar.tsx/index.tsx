import { PencilLine } from 'phosphor-react'
import { Profile } from './profile'

export function Sidebar() {
  return (
    <aside className=" overflow-hidden rounded-lg bg-gray800">
      <img
        src="https://github.com/jecilia.png"
        alt=""
        className="h-[72px] w-full object-cover"
      />
      <Profile />
      <footer
        aria-label="rodapé"
        className="mt-6 border-t border-gray600 px-8 pb-8 pt-6"
      >
        <a
          href="#"
          className="flex w-full justify-center gap-2 rounded-lg border border-green500 px-6 py-3 font-bold text-green500 duration-1000 hover:bg-green500 hover:text-white focus:outline-none focus:outline-green500"
        >
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
