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

type RecorteVazadoProps = {
  /** Cor da seção que começa abaixo. O resto do ladrilho fica transparente. */
  abaixo: string
  className?: string
}

/*
 * Geometria do festão, compartilhada pelas duas peças: o recorte cheio e o
 * vazado precisam da mesma curva, senão as ondas não casam onde se encontram.
 */
const LARGURA = 56
const ALTURA = 18
/** Faixa reta antes da curva começar. */
const OMBRO = 5
/** Raio vertical da elipse que forma o festão. */
const RAIO_Y = 12
const RAIO_X = LARGURA / 2

/**
 * Borda recortada que separa duas seções — a mesma tesoura decorativa que o
 * ateliê usa nas caixinhas. É um ladrilho SVG repetido em X, então os festões
 * mantêm o mesmo tamanho em qualquer largura de tela, sem esticar.
 */
export function Recorte({ acima, abaixo, className }: RecorteProps) {
  const ladrilho = `<svg xmlns="http://www.w3.org/2000/svg" width="${LARGURA}" height="${ALTURA}" viewBox="0 0 ${LARGURA} ${ALTURA}"><path d="M0 0h${LARGURA}v${OMBRO}a${RAIO_X} ${RAIO_Y} 0 0 1-${LARGURA} 0Z" fill="${acima}"/></svg>`

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

/**
 * A mesma tesoura, só que vazada: pinta apenas o que fica *abaixo* da curva e
 * deixa o resto transparente. Serve de tampa — o que estiver por baixo dela
 * termina na ondulação do festão em vez de num corte reto.
 *
 * Precisa morar no mesmo pai de largura total que o `Recorte` da dobra, porque
 * o ladrilho se repete a partir da borda esquerda da peça: é isso que mantém as
 * ondas das duas em fase.
 */
export function RecorteVazado({ abaixo, className }: RecorteVazadoProps) {
  const ladrilho = `<svg xmlns="http://www.w3.org/2000/svg" width="${LARGURA}" height="${ALTURA}" viewBox="0 0 ${LARGURA} ${ALTURA}"><path d="M0 ${OMBRO}a${RAIO_X} ${RAIO_Y} 0 0 0 ${LARGURA} 0V${ALTURA}H0Z" fill="${abaixo}"/></svg>`

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        height: ALTURA,
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(ladrilho)}")`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: `${LARGURA}px ${ALTURA}px`,
      }}
    />
  )
}
