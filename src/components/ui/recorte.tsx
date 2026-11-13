/*
 * Cada seção é uma folha de cartolina; o recorte é a tesoura entre elas.
 * A paleta mora aqui porque o ladrilho SVG precisa de cor literal — variável
 * CSS não resolve dentro de uma data URI.
 */
export const CORES_DOBRA = {
  rosaTinta: '#8e0f45',
  algodao: '#f9c9da',
  azul: '#bfdce6',
  creme: '#fbf2ec',
  rosaAcao: '#d11f62',
  tintaForte: '#260a15',
} as const

type RecorteProps = {
  /** Cor da seção que termina aqui. */
  acima: string
  /** Cor da seção que começa abaixo. */
  abaixo: string
  className?: string
}

const LARGURA = 56
const ALTURA = 18

/**
 * Borda recortada que separa duas seções — a mesma tesoura decorativa que o
 * ateliê usa nas caixinhas. É um ladrilho SVG repetido em X, então os festões
 * mantêm o mesmo tamanho em qualquer largura de tela, sem esticar.
 */
export function Recorte({ acima, abaixo, className }: RecorteProps) {
  const ladrilho = `<svg xmlns="http://www.w3.org/2000/svg" width="${LARGURA}" height="${ALTURA}" viewBox="0 0 ${LARGURA} ${ALTURA}"><path d="M0 0h${LARGURA}v5a28 12 0 0 1-${LARGURA} 0Z" fill="${acima}"/></svg>`

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        height: ALTURA,
        backgroundColor: abaixo,
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(ladrilho)}")`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: `${LARGURA}px ${ALTURA}px`,
      }}
    />
  )
}
