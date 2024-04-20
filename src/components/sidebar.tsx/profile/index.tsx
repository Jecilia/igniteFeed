export function Profile() {
  return (
    <div className="-mt-8 flex flex-col items-center">
      <img
        src="https://github.com/jecilia.png"
        alt="deve ser uma pessoa"
        className="box-content size-12 rounded-lg border-4 border-green500 outline-4 outline-gray-800"
      />

      <strong className="mt-4 leading-6 text-gray100">Jecilia Teixeira</strong>
      <span className="text-sm leading-6 text-gray400">
        Front-End Developer
      </span>
    </div>
  )
}
