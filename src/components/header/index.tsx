import logo from '../../assets/ignite-logo.svg'
export function Header() {
  return (
    <header className="flex justify-center bg-gray800 py-5">
      <img src={logo} alt="logotipo do ignite" width={32} />
      <h1>Ignite Feed</h1>
    </header>
  )
}
