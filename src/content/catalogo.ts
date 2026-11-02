import agendaStitch from '@/assets/catalogo/agenda-escolar-stitch.webp'
import boloBelaFera from '@/assets/catalogo/bolo-bela-fera.webp'
import boloChaDaTarde from '@/assets/catalogo/bolo-cha-da-tarde-rosa-dourado.webp'
import boloChaDeBebe from '@/assets/catalogo/bolo-cha-de-bebe-floral-borboletas.webp'
import boloChaRevelacao from '@/assets/catalogo/bolo-cha-revelacao-ursinhos.webp'
import boloFormatura from '@/assets/catalogo/bolo-formatura-epilacao.webp'
import cadernetaCerejeira from '@/assets/catalogo/caderneta-saude-floral-cerejeira.webp'
import cadernetaBorboletas from '@/assets/catalogo/caderneta-vacinacao-borboletas.webp'
import cadernoRoblox from '@/assets/catalogo/caderno-capa-dura-roblox.webp'
import cadernoPatrulha from '@/assets/catalogo/caderno-escolar-desenhos-patrulha-canina.webp'
import caixaAcrilica from '@/assets/catalogo/caixa-lembranca-acrilica-spidey.webp'
import caixaBosque from '@/assets/catalogo/caixa-lembranca-bosque-encantado-raposinha.webp'
import caixaChaDePanela from '@/assets/catalogo/caixa-lembranca-cha-de-panela.webp'
import caixaRaposinha from '@/assets/catalogo/caixa-lembranca-raposinha-cogumelo.webp'
import decoracaoMesversario from '@/assets/catalogo/decoracao-mesversario-6-meses-painel-bandeirola.webp'
import kitLivroBebe from '@/assets/catalogo/kit-livro-bebe-caderneta-vacina-principe.webp'
import topoFutebol from '@/assets/catalogo/topo-bolo-futebol-personalizado.webp'
import topoHappyBirthday from '@/assets/catalogo/topo-bolo-happy-birthday-rosas-vermelhas.webp'
import topoCoelhinha from '@/assets/catalogo/topo-bolo-mesversario-coelhinha-3-meses.webp'
import topoPascoa from '@/assets/catalogo/topo-bolo-mesversario-pascoa-11-meses.webp'
import topoVaquinha from '@/assets/catalogo/topo-bolo-mesversario-vaquinha-1-mes.webp'
import topoUrsinhos from '@/assets/catalogo/topo-bolo-ursinhos-baloes-cha-revelacao.webp'
import type { Categoria, Ocasiao, Peca } from '@/types'

/**
 * As cinco categorias saem do que existe fotografado. Cartao personalizado
 * fica fora da navegacao porque nao ha nenhuma peca registrada — aparece
 * so na linha de encomenda sob medida.
 */
export const categorias: Categoria[] = [
  {
    id: 'topos-de-bolo',
    nome: 'Topos e apliques de bolo',
    descricao: 'O nome, a idade e o tema recortados em camadas de papel, montados peça por peça para subir no bolo.',
    ocasiaoSugerida: 'Mesversário, aniversário, chá revelação',
    capaId: 'topo-castelo-bela-fera',
  },
  {
    id: 'lembrancinhas',
    nome: 'Lembrancinhas e caixas',
    descricao: 'Caixinhas montadas e decoradas no tema da festa, com o nome de quem recebe impresso na tampa.',
    ocasiaoSugerida: 'Chá de panela, festa infantil, batizado',
    capaId: 'caixa-bosque',
  },
  {
    id: 'cadernetas',
    nome: 'Cadernetas e livro do bebê',
    descricao: 'Caderneta de saúde, caderneta de vacinação e livro do bebê com capa personalizada, elástico e tassel.',
    ocasiaoSugerida: 'Chá de bebê, maternidade, presente de nascimento',
    capaId: 'caderneta-cerejeira',
  },
  {
    id: 'cadernos',
    nome: 'Cadernos e agendas',
    descricao: 'Caderno escolar, agenda e caderno de desenho com o nome na capa e o personagem favorito da criança.',
    ocasiaoSugerida: 'Volta às aulas, presente de fim de ano',
    capaId: 'agenda-escolar',
  },
  {
    id: 'decoracao',
    nome: 'Kits Festas',
    descricao: 'Bandeirola com o nome, display de mesa e toppers de doce no mesmo tema do bolo.',
    ocasiaoSugerida: 'Mesversário e festa em casa',
    capaId: 'decoracao-mesversario',
  },
]

/**
 * Cada peca e uma entrega real. Os nomes que aparecem nas fotos sao de
 * clientes reais do ateliê e por isso nao sao repetidos no texto do site.
 */
export const pecas: Peca[] = [
  {
    id: 'topo-castelo-bela-fera',
    categoria: 'topos-de-bolo',
    imagem: boloBelaFera,
    alt: 'Bolo de aniversário em formato de castelo, com torres, telhados, portas e janelas recortados em papel, rosas de papel na base e o nome da aniversariante em papel espelhado dourado',
    legenda: 'Castelo em papel com nome em dourado espelhado',
    foco: '50% 42%',
  },
  {
    id: 'topo-cha-da-tarde',
    categoria: 'topos-de-bolo',
    imagem: boloChaDaTarde,
    alt: 'Bolo de dois andares em rosa e dourado com placa de papel escrita Chá da Tarde e cascata de lírios recortados em papel',
    legenda: 'Placa e flores de papel para chá da tarde',
    foco: '50% 40%',
  },
  {
    id: 'topo-cha-de-bebe',
    categoria: 'topos-de-bolo',
    imagem: boloChaDeBebe,
    alt: 'Bolo branco de dois andares coberto por flores e borboletas de papel, com placa azul escrita Chá da Isadora',
    legenda: 'Flores, borboletas e placa para chá de bebê',
    foco: '50% 42%',
  },
  {
    id: 'topo-happy-birthday',
    categoria: 'topos-de-bolo',
    imagem: topoHappyBirthday,
    alt: 'Topo de bolo montado com rosas de papel vermelhas, letreiro Happy Birthday e número em papel espelhado dourado',
    legenda: 'Rosas de papel e letreiro em dourado espelhado',
  },
  {
    id: 'topo-vaquinha',
    categoria: 'topos-de-bolo',
    imagem: topoVaquinha,
    alt: 'Topo de bolo de mesversário tema vaquinha, com bebê recortado, balão de coração, número 1 e nome em camadas de papel',
    legenda: 'Mesversário de 1 mês, tema vaquinha',
  },
  {
    id: 'topo-coelhinha',
    categoria: 'topos-de-bolo',
    imagem: topoCoelhinha,
    alt: 'Topo de bolo de mesversário com coelhinha de papel, patinhas, cenouras e a inscrição 3 meses',
    legenda: 'Mesversário de 3 meses, tema coelhinha',
  },
  {
    id: 'topo-pascoa',
    categoria: 'topos-de-bolo',
    imagem: topoPascoa,
    alt: 'Topo de bolo de mesversário com tema de Páscoa: cruz, ovelhinhas, coelhos, cesta de ovos e a inscrição 11 meses',
    legenda: 'Mesversário de 11 meses, tema Páscoa',
  },
  {
    id: 'topo-ursinhos',
    categoria: 'topos-de-bolo',
    imagem: topoUrsinhos,
    alt: 'Dois ursinhos recortados em papel kraft segurando balões rosa e azuis, segurados na mão',
    legenda: 'Ursinhos e balões para chá revelação',
  },
  {
    id: 'topo-revelacao',
    categoria: 'topos-de-bolo',
    imagem: boloChaRevelacao,
    alt: 'Bolo de chá revelação com ursinhos de papel no topo, balões e medalhão escrito Boy ou Girl',
    legenda: 'Chá revelação com medalhão Boy ou Girl',
    foco: '50% 35%',
  },
  {
    id: 'topo-futebol',
    categoria: 'topos-de-bolo',
    imagem: topoFutebol,
    alt: 'Topo de bolo tema futebol com nomes recortados em papel espelhado dourado sobre vermelho, estrelas, número 7 e bola',
    legenda: 'Tema futebol em dourado sobre vermelho',
  },
  {
    id: 'topo-formatura',
    categoria: 'topos-de-bolo',
    imagem: boloFormatura,
    alt: 'Bolo branco de formatura com rosas de papel, capelo, diploma e a palavra Epilação recortada em dourado',
    legenda: 'Formatura, com letreiro recortado em dourado',
    foco: '50% 45%',
  },
  {
    id: 'caixa-bosque',
    categoria: 'lembrancinhas',
    imagem: caixaBosque,
    alt: 'Conjunto de caixinhas brancas decoradas com raposinha, guaxinim, cogumelo e árvore recortados em papel',
    legenda: 'Caixinhas tema bosque encantado',
    foco: '50% 46%',
  },
  {
    id: 'caixa-raposinha',
    categoria: 'lembrancinhas',
    imagem: caixaRaposinha,
    alt: 'Caixinhas hexagonais com raposinha sobre tronco, cogumelo em relevo e árvore recortada em papel',
    legenda: 'Caixinha hexagonal com aplique em relevo',
  },
  {
    id: 'caixa-cha-de-panela',
    categoria: 'lembrancinhas',
    imagem: caixaChaDePanela,
    alt: 'Caixinhas brancas de chá de panela com moldura impressa, nomes dos noivos e recorte de coração na alça',
    legenda: 'Chá de panela, com recorte de coração na alça',
  },
  {
    id: 'caixa-acrilica',
    categoria: 'lembrancinhas',
    imagem: caixaAcrilica,
    alt: 'Caixinha transparente de lembrancinha com aplique de personagem no topo e etiqueta com o nome e a idade do aniversariante',
    legenda: 'Caixinha transparente com aplique e etiqueta',
  },
  {
    id: 'caderneta-cerejeira',
    categoria: 'cadernetas',
    imagem: cadernetaCerejeira,
    alt: 'Caderneta de saúde com capa em flor de cerejeira e borboletas, elástico rosa, aplique dourado de borboleta e tassel',
    legenda: 'Caderneta de saúde, tema cerejeira',
    foco: '50% 45%',
  },
  {
    id: 'caderneta-borboletas',
    categoria: 'cadernetas',
    imagem: cadernetaBorboletas,
    alt: 'Caderneta de vacinação com capa de borboletas e flores, nome em destaque, espiral e fecho de elástico com borboleta dourada',
    legenda: 'Caderneta de vacinação, tema borboletas',
    foco: '50% 45%',
  },
  {
    id: 'kit-livro-bebe',
    categoria: 'cadernetas',
    imagem: kitLivroBebe,
    alt: 'Kit com livro do bebê e caderneta de vacina em tema príncipe, capas verdes personalizadas com o nome e tassels verdes',
    legenda: 'Kit livro do bebê e caderneta de vacina',
    foco: '50% 45%',
  },
  {
    id: 'agenda-escolar',
    categoria: 'cadernos',
    imagem: agendaStitch,
    alt: 'Agenda escolar com capa personalizada, nome da aluna em destaque, espiral transparente e elástico com fecho de coração dourado',
    legenda: 'Agenda escolar com fecho em coração dourado',
    foco: '50% 42%',
  },
  {
    id: 'caderno-capa-dura',
    categoria: 'cadernos',
    imagem: cadernoRoblox,
    alt: 'Caderno de capa dura com ilustração do jogo favorito e o nome completo do aluno impresso na capa',
    legenda: 'Caderno de capa dura com nome completo',
  },
  {
    id: 'caderno-desenho',
    categoria: 'cadernos',
    imagem: cadernoPatrulha,
    alt: 'Caderno escolar e caderno de desenho personalizados com personagens e o nome do menino em cada capa',
    legenda: 'Caderno escolar e caderno de desenho em dupla',
  },
  {
    id: 'decoracao-mesversario',
    categoria: 'decoracao',
    imagem: decoracaoMesversario,
    alt: 'Mesa de mesversário de seis meses com bandeirola de nome na parede, displays de personagens, toppers no bolo e nos doces',
    legenda: 'Bandeirola, displays e toppers no mesmo tema',
    foco: '50% 8%',
  },
]

/** Ocasioes oferecidas no montador de pedido, todas presentes no acervo. */
export const ocasioes: Ocasiao[] = [
  { id: 'mesversario', rotulo: 'Mesversário' },
  { id: 'cha-de-bebe', rotulo: 'Chá de bebê' },
  { id: 'cha-revelacao', rotulo: 'Chá revelação' },
  { id: 'aniversario', rotulo: 'Aniversário' },
  { id: 'cha-de-panela', rotulo: 'Chá de panela' },
  { id: 'formatura', rotulo: 'Formatura' },
  { id: 'volta-as-aulas', rotulo: 'Volta às aulas' },
  { id: 'outra', rotulo: 'Outra ocasião' },
]

/** Opcoes de peca no montador. Cartao entra aqui, como encomenda sob medida. */
export const opcoesDePeca = [
  'Topo de bolo',
  'Lembrancinha ou caixinha',
  'Caderneta ou livro do bebê',
  'Caderno ou agenda',
  'Kits Festas',
  'Cartão personalizado',
  'Ainda não sei',
] as const

export function pecaPorId(id: string) {
  return pecas.find(peca => peca.id === id)
}
