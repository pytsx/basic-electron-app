type toogleRootVarType = {
  inCase: boolean
  variable: string
  valueCaseTrue: string
  valueCaseFalse: string
}
type setPropertyType = { element: HTMLElement; property: string; value: string }
interface returnRootVarManager {
  setRootVar: (variable: string, value: string) => void
  toogleRootVar: (data: toogleRootVarType) => void
}
// modulo responsável por gerenciar os valores das variáveis css presentes no :root no arquivo ./style.css
export function rootVarManager(): returnRootVarManager {
  // função responsável por adicionar uma propiedade genérica a uma variável genérica que estão em um elemento genérico
  function setStyleProperty({ element, property, value }: setPropertyType): void {
    element.style.setProperty(property, value)
  }

  // função que executa alteração dos valores das variáveis do root
  function setRootVar(variable: string, value: string): void {
    setStyleProperty({
      element: document.documentElement,
      property: variable,
      value
    })
  }

  // função responsável por alterar um var css (variable) entre dois valores (valueCaseTrue, valueCaseFalse) caso uma condição (inCase) se cumpra
  function toogleRootVar({
    variable,
    inCase,
    valueCaseTrue,
    valueCaseFalse
  }: toogleRootVarType): void {
    if (inCase) {
      setRootVar(variable, valueCaseTrue)
    } else {
      setRootVar(variable, valueCaseFalse)
    }
  }

  return { setRootVar, toogleRootVar }
}
