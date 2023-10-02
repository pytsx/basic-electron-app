import LogoSVG from './Logo.svg'
const style = {
  opacity: .64
}
export const Logo = (): JSX.Element => {
  return <>
  <img style={style} alt="logo" src={LogoSVG} />
  </>
}
