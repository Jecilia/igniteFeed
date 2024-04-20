import cover from '../../assets/cover.svg'
import { Profile } from './profile'
export function Sidebar() {
  return (
    <aside className=" overflow-hidden rounded-lg bg-gray800">
      <img src={cover} alt="" />
      <Profile />
      <footer
        aria-label="rodapé"
        className="mt-6 border-t border-gray600 px-8 pb-8 pt-6"
      >
        <a
          href="#"
          className="flex w-full justify-center rounded-lg border border-green500 px-6 py-3 font-bold text-green500"
        >
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
