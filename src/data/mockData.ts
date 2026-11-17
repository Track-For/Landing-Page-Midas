export interface Modality {
  id: string;
  name: string;
  tag: string;
  badgeType: 'bot' | 'manual' | 'auto';
  badgeLabel: string;
  badgeColor: string;
  description: string;
  benefits: string[];
  example: {
    title: string;
    action1: { type: string; price: string; exchange: string };
    action2: { type: string; price: string; exchange: string };
    result: string;
    resultHighlight: string;
    note?: string;
  };
}

export interface LiveOpportunity {
  id: string;
  pair: string;
  type: string;
  buyExchange: string;
  buyPrice: string;
  sellExchange: string;
  sellPrice: string;
  spread: number;
  spreadFormatted: string;
  fundingRate?: string;
  estimatedNetProfit: string;
  status: 'active' | 'closing' | 'new';
  liquidity: string;
  timeAgo: string;
}

export interface ExchangeInfo {
  name: string;
  logo: string;
  spot: boolean;
  futures: boolean;
  specialBadge?: string;
  volume24h: string;
}

export interface CourseModule {
  number: string;
  title: string;
  duration: string;
  lessonsCount: number;
  description: string;
  topics: string[];
}

export interface OperationDetail {
  id: string;
  asset: string;
  mode: string;
  type: string;
  route: string;
  profitNetBRL: string;
  profitPercent: string;
  duration: string;
  entriesCount: number;
  openSpread: string;
  closeSpread: string;
  fundingProfit: string;
  exchangeFees: string;
  status: string;
  date: string;
  story: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'geral' | 'robos' | 'seguranca' | 'planos';
}

export const MODALITIES: Modality[] = [
  {
    id: 'spot-futures',
    name: 'Spot × Futuros',
    tag: 'Cash & Carry Neutro',
    badgeType: 'bot',
    badgeLabel: 'ROBÔ 24 H',
    badgeColor: 'lime',
    description: 'Compra no spot de uma corretora e vende no futuro de outra ao mesmo tempo, mantendo o capital imune às oscilações bruscas do mercado de criptoativos.',
    benefits: [
      'Posição 100% neutra (protegida da alta e da queda da moeda).',
      'Funding pode somar ao lucro a cada 8h ou 4h enquanto o spread converge.',
      'Robô 24h opera via Bot API na nuvem ou extensão web direto na corretora.'
    ],
    example: {
      title: 'Exemplo real na plataforma',
      action1: { type: 'Compra Spot', price: '1,04 USDT', exchange: 'MEXC' },
      action2: { type: 'Vende Futuro', price: '1,16 USDT', exchange: 'Gate.io' },
      result: '+11,04%',
      resultHighlight: 'abertura',
      note: 'Funding periódico somando juros em USDT durante o ciclo'
    }
  },
  {
    id: 'futures-futures',
    name: 'Futuros × Futuros',
    tag: 'Cross-Exchange Perp',
    badgeType: 'bot',
    badgeLabel: 'ROBÔ 24 H',
    badgeColor: 'lime',
    description: 'Compra o contrato perpétuo futuro numa corretora (Long) e vende na outra (Short) simultaneamente, sem necessidade de transferir nenhuma moeda.',
    benefits: [
      'Nenhuma transferência entre corretoras: sem taxas de rede e sem atrasos.',
      'Funding dos dois lados com horários sincronizados na mesma tela.',
      'Robô 24h pelo Bot API ou extensão encerra ambas as posições na convergência.'
    ],
    example: {
      title: 'Exemplo real na plataforma',
      action1: { type: 'Long Futuro', price: '0,0552 USDT', exchange: 'Gate.io' },
      action2: { type: 'Short Futuro', price: '0,0570 USDT', exchange: 'MEXC' },
      result: '+3,18%',
      resultHighlight: 'abertura',
      note: 'Diferencial de taxa de funding favorável nas duas pontas'
    }
  },
  {
    id: 'spot-spot',
    name: 'Spot × Spot',
    tag: 'Arbitragem Espacial',
    badgeType: 'manual',
    badgeLabel: 'EXECUÇÃO MANUAL',
    badgeColor: 'white',
    description: 'Compra numa corretora onde a moeda está barata, transfere pela blockchain mais rápida e vende na outra corretora onde a cotação está mais cara.',
    benefits: [
      'Sem alavancagem e sem derivativos (risco zero de liquidação).',
      'Livro das duas corretoras lado a lado na tela com profundidade real.',
      'Taxas de corretagem e rede de transferência já calculadas antes do envio.'
    ],
    example: {
      title: 'Exemplo real na plataforma',
      action1: { type: 'Compra Spot', price: 'R$ 0,1886', exchange: 'Mercado Bitcoin' },
      action2: { type: 'Vende Spot', price: 'R$ 0,1989', exchange: 'Gate.io' },
      result: '+4,98%',
      resultHighlight: 'líquido de taxas',
      note: 'Transferência de 3 minutos via rede BEP-20 / Solana'
    }
  },
  {
    id: 'usdt-brl',
    name: 'USDT / BRL',
    tag: 'Arbitragem de Dólar Cripto',
    badgeType: 'auto',
    badgeLabel: 'PILOTO AUTOMÁTICO',
    badgeColor: 'lime',
    description: 'Arbitragem de dólar cripto comprando USDT em reais onde está mais barato via Pix e vendendo onde está mais caro com recomposição ágil de saldo.',
    benefits: [
      'Em 1 clique ou no piloto automático 100% autônomo.',
      'Lucro já líquido de todas as taxas operacionais e bancárias.',
      'Só transfere para endereços próprios previamente aprovados (whitelist).'
    ],
    example: {
      title: 'Exemplo real na plataforma',
      action1: { type: 'Compra USDT', price: 'R$ 5,09', exchange: 'Binance' },
      action2: { type: 'Vende USDT', price: 'R$ 5,16', exchange: 'MEXC' },
      result: '+R$ 53,77',
      resultHighlight: 'líquido em R$ 5 mil',
      note: 'Ciclo completo executado em menos de 1 minuto'
    }
  }
];

export const LIVE_OPPORTUNITIES: LiveOpportunity[] = [
  {
    id: 'opp-1',
    pair: 'OPENAI/USDT',
    type: 'Spot × Futuros',
    buyExchange: 'Gate.io',
    buyPrice: '0.4120',
    sellExchange: 'MEXC',
    sellPrice: '0.7240',
    spread: 75.72,
    spreadFormatted: '+75,72%',
    fundingRate: '+0.85% / 8h',
    estimatedNetProfit: '+$142.20',
    status: 'new',
    liquidity: '$18.400 no book',
    timeAgo: 'agora'
  },
  {
    id: 'opp-2',
    pair: 'BP/USDT',
    type: 'Spot × Futuros',
    buyExchange: 'MEXC',
    buyPrice: '1.0400',
    sellExchange: 'Gate.io',
    sellPrice: '1.1548',
    spread: 11.04,
    spreadFormatted: '+11,04%',
    fundingRate: '+1.20% / 8h',
    estimatedNetProfit: '+$88.30',
    status: 'active',
    liquidity: '$42.100 no book',
    timeAgo: 'agora'
  },
  {
    id: 'opp-3',
    pair: 'CATE/USDT',
    type: 'Futuros × Futuros',
    buyExchange: 'Gate.io',
    buyPrice: '0.0552',
    sellExchange: 'MEXC',
    sellPrice: '0.0570',
    spread: 3.18,
    spreadFormatted: '+3,18%',
    fundingRate: '+0.45% / 4h',
    estimatedNetProfit: '+$31.80',
    status: 'active',
    liquidity: '$125.000 no book',
    timeAgo: 'agora'
  },
  {
    id: 'opp-4',
    pair: 'USDT/BRL',
    type: 'Dólar Cripto',
    buyExchange: 'Binance',
    buyPrice: 'R$ 5,091',
    sellExchange: 'Bitget',
    sellPrice: 'R$ 5,148',
    spread: 1.12,
    spreadFormatted: '+1,12%',
    fundingRate: 'Sem derivativo',
    estimatedNetProfit: '+R$ 56,00',
    status: 'closing',
    liquidity: 'R$ 80.000 no book',
    timeAgo: 'há 1min'
  },
  {
    id: 'opp-5',
    pair: 'JCT/USDT',
    type: 'Spot × Futuros',
    buyExchange: 'BingX',
    buyPrice: '0.0182',
    sellExchange: 'MEXC',
    sellPrice: '0.0194',
    spread: 6.59,
    spreadFormatted: '+6,59%',
    fundingRate: '+0.75% / 8h',
    estimatedNetProfit: '+$49.40',
    status: 'active',
    liquidity: '$29.000 no book',
    timeAgo: 'há 2min'
  }
];

export const EXCHANGES: ExchangeInfo[] = [
  { name: 'Binance', logo: '🟡', spot: true, futures: true, specialBadge: 'Líder Global', volume24h: '$18.4B' },
  { name: 'Bybit', logo: '🟠', spot: true, futures: true, specialBadge: 'Alta Liquidez', volume24h: '$9.2B' },
  { name: 'Gate.io', logo: '🔵', spot: true, futures: true, specialBadge: '+1400 Moedas', volume24h: '$4.1B' },
  { name: 'MEXC', logo: '🟢', spot: true, futures: true, specialBadge: 'Taxa Zero Maker', volume24h: '$3.8B' },
  { name: 'Bitget', logo: '🔷', spot: true, futures: true, specialBadge: 'Foco Copia/Bot', volume24h: '$2.9B' },
  { name: 'Hyperliquid', logo: '⚡', spot: false, futures: true, specialBadge: 'DEX On-Chain', volume24h: '$1.7B' },
  { name: 'HTX', logo: '🔹', spot: true, futures: true, volume24h: '$2.1B' },
  { name: 'KuCoin', logo: '🟩', spot: true, futures: true, volume24h: '$1.5B' },
  { name: 'BingX', logo: '🟣', spot: true, futures: true, volume24h: '$1.2B' },
  { name: 'OKX', logo: '⬛', spot: true, futures: true, volume24h: '$6.4B' },
  { name: 'Ourbit', logo: '🟧', spot: true, futures: true, volume24h: '$840M' },
  { name: 'XT', logo: '🔴', spot: true, futures: true, volume24h: '$720M' },
  { name: 'Mercado Bitcoin', logo: '🇧🇷', spot: true, futures: false, specialBadge: 'Pix Instantâneo', volume24h: '$140M' }
];

export const COURSES: CourseModule[] = [
  {
    number: '01',
    title: 'Jornada Midas — Por onde começar',
    duration: '2h 15m',
    lessonsCount: 11,
    description: 'Entenda os princípios matemáticos da arbitragem cripto, configuração das contas nas exchanges e primeiros passos no ecossistema Midas.',
    topics: ['O que é a discrepância de preços entre exchanges', 'Como criar e validar contas sem taxas desnecessárias', 'Segurança das chaves de API sem permissão de saque', 'Tour completo pelo painel Midas']
  },
  {
    number: '02',
    title: 'Fundamentos — Spread, taxas, livro e funding',
    duration: '3h 40m',
    lessonsCount: 16,
    description: 'A anatomia detalhada de uma operação lucrativa: como interpretar a profundidade do livro, slippage e taxas de funding de derivativos.',
    topics: ['Spread bruto vs. Spread líquido real', 'Cálculo de taxas de maker, taker e redes blockchain', 'Funding rate: ganhando juros periódicos das exchanges', 'Controle rigoroso de derrapagem (slippage)']
  },
  {
    number: '03',
    title: 'USDT/BRL na prática — Do cadastro à 1ª operação',
    duration: '2h 50m',
    lessonsCount: 12,
    description: 'Guia completo passo a passo para lucrar com a arbitragem de dólar cripto entre o mercado nacional (Pix) e as corretoras internacionais.',
    topics: ['Rotas bancárias mais rápidas com Pix sem bloqueios', 'Configuração de endereços próprios de carteira', 'Operando em 1 clique e no Piloto Automático', 'Gestão de fluxo de caixa em reais']
  },
  {
    number: '04',
    title: 'Spot × Spot — Compra, transfere e vende',
    duration: '3h 10m',
    lessonsCount: 14,
    description: 'Domine a arbitragem espacial sem uso de alavancagem. Técnicas avançadas de conferência de rede, tempo de confirmação e mempool.',
    topics: ['Seleção de moedas com spreads acima de 5%', 'Identificação de carteiras ativas e redes abertas', 'Uso do simulador com custo de rede embutido', 'Mitigação de volatilidade no tempo de envio']
  },
  {
    number: '05',
    title: 'Spot × Futuros e Futuros × Futuros',
    duration: '4h 30m',
    lessonsCount: 15,
    description: 'O método institucional mais consistente: posições delta-neutras com robôs operando 24 horas por dia na nuvem ou por extensão.',
    topics: ['Configuração do robô 24h na nuvem', 'Estratégias de convergência de spread e descolamento', 'Como lucrar com picos anormais de volatilidade', 'Automação via extensão de navegador para moedas recém-lançadas']
  }
];

export const OPERATOR_SUMMARY = {
  name: 'Victor I.',
  title: 'Operador Auditado Midas',
  activeBots: 5,
  totalOrders: 2443,
  profitableCycles: '68 de 77',
  winrate: '88,3%',
  totalProfitBRL: '+R$ 185,41',
  periodDays: 5,
};

export const REAL_OPERATIONS: OperationDetail[] = [
  {
    id: 'one',
    asset: 'ONE',
    mode: 'Bot API',
    type: 'Spot × Futuros',
    route: 'MEXC(S) → BingX(F)',
    profitNetBRL: '+R$ 1.025,95',
    profitPercent: '+52,93%',
    duration: '8h 31min',
    entriesCount: 14,
    openSpread: '+52,93%',
    closeSpread: '+0,42%',
    fundingProfit: '+R$ 142,30',
    exchangeFees: '-R$ 18,40',
    status: 'Finalizado com Sucesso',
    date: 'Ontem',
    story: 'O robô identificou abertura massiva de spread em ONE devido a descolamento temporário. Executou 14 entradas fracionadas no book sem causar slippage, manteve posição neutra coletando taxa de funding e encerrou na convergência total.'
  },
  {
    id: 'jct',
    asset: 'JCT',
    mode: 'Bot API',
    type: 'Spot × Futuros',
    route: 'BingX(S) → MEXC(F)',
    profitNetBRL: '+R$ 160,85',
    profitPercent: '+7,40%',
    duration: '4h 47min',
    entriesCount: 23,
    openSpread: '+7,40%',
    closeSpread: '+0,35%',
    fundingProfit: '+R$ 28,10',
    exchangeFees: '-R$ 6,80',
    status: 'Finalizado com Sucesso',
    date: 'Hoje, 11:15',
    story: 'Long em BingX e Short perpétuo em MEXC. Executou 23 micro-parcelas respeitando rigorosamente a liquidez do livro para maximizar o retorno sem derrapagem de preço.'
  },
  {
    id: 'fatcoin',
    asset: 'FATCOIN',
    mode: 'Bot API',
    type: 'Spot × Futuros',
    route: 'MEXC(S) → Gate.io(F)',
    profitNetBRL: '+R$ 308,91',
    profitPercent: '+14,80%',
    duration: '18h 30min',
    entriesCount: 8,
    openSpread: '+11,40%',
    closeSpread: '+0,20%',
    fundingProfit: '+R$ 212,95 (Super Funding)',
    exchangeFees: '-R$ 9,50',
    status: 'Finalizado com Sucesso',
    date: 'Hoje, 08:20',
    story: 'Posição neutra mantida estrategicamente durante duas viradas consecutivas de taxa de financiamento (funding a cada 8h), onde o mercado pagou R$ 212,95 diretamente na conta além do ganho da convergência do spread.'
  },
  {
    id: 'usdt-brl',
    asset: 'USDT/BRL',
    mode: 'Piloto Automático',
    type: 'Arbitragem de Dólar Cripto',
    route: 'Binance → Bitget',
    profitNetBRL: '+R$ 64,80',
    profitPercent: '+1,30%',
    duration: '58 segundos',
    entriesCount: 1,
    openSpread: '+1,30%',
    closeSpread: '0,00%',
    fundingProfit: 'Sem derivativo (100% Spot)',
    exchangeFees: '-R$ 3,20',
    status: 'Finalizado com Sucesso',
    date: 'Hoje, 14:10',
    story: 'Varredura automática detectou USDT cotado a R$ 5,091 na Binance e R$ 5,148 na Bitget. Compra e venda executadas em apenas 58 segundos com envio restrito para endereço aprovado em whitelist.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'O que é arbitragem de criptomoedas?',
    answer: 'A arbitragem consiste em explorar a discrepância de preços de uma mesma criptomoeda entre corretoras diferentes. Como cada exchange possui seu próprio livro de ordens e equilíbrio de oferta/demanda, frequentemente uma moeda está cotada mais barata em uma corretora e mais cara em outra. A Midas identifica essas janelas e permite lucrar na diferença sem depender de adivinhar se o mercado de cripto vai subir ou cair.',
    category: 'geral'
  },
  {
    question: 'Qual a diferença entre as 4 modalidades da Midas?',
    answer: 'Oferecemos 4 modalidades especializadas: (1) Spot × Futuros: compra à vista numa ponta e vende futuros na outra, ficando com posição neutra em preço e lucrando com spread + funding; (2) Futuros × Futuros: opera contratos em duas corretoras sem transferir moedas; (3) Spot × Spot: compra no spot, transfere pela blockchain e vende na outra corretora; e (4) USDT/BRL: arbitragem de dólar cripto comprando barato em reais via Pix e vendendo com ágio.',
    category: 'geral'
  },
  {
    question: 'Como funciona a execução automática dos robôs?',
    answer: 'Você define seus parâmetros na plataforma (spread mínimo de abertura, spread de fechamento desejado e capital por ciclo). O robô monitora o mercado 24h por dia na nuvem. Assim que o mercado atinge o spread configurado, ele executa as duas pontas da operação de forma fracionada (respeitando a liquidez real do livro). Quando o spread converge, o robô encerra as posições sozinho e te notifica pelo Telegram.',
    category: 'robos'
  },
  {
    question: 'Meu dinheiro fica com a Midas? Vocês têm acesso a saque?',
    answer: 'NÃO. A Midas é uma plataforma 100% NÃO CUSTODIANTE. Seus fundos ficam sempre depositados nas suas próprias contas nas corretoras (Binance, Bybit, Gate, etc.). Você conecta o robô através de chaves de API oficiais com permissão estrita de LEITURA e NEGOCIAÇÃO. A permissão de SAQUE fica desativada nas corretoras, garantindo que ninguém possa retirar seus recursos.',
    category: 'seguranca'
  },
  {
    question: 'Preciso deixar o computador ou navegador ligado para o robô operar?',
    answer: 'Nos planos com o Robô de Nuvem (Plano Black), NÃO! O robô roda em servidores dedicados de alta disponibilidade 24 horas por dia, 7 dias por semana. Você pode configurar pelo celular ou computador e desligar tudo. Já no robô por Extensão do Chrome (Plano Pro), ele opera enquanto o navegador estiver aberto na aba da corretora, ideal para moedas recém-lançadas sem API pública.',
    category: 'robos'
  },
  {
    question: 'Preciso ter experiência prévia com criptomoedas ou programação?',
    answer: 'Não é necessário nenhum conhecimento prévio de programação e nem ser um trader avançado. A plataforma foi construída com interface intuitiva em português e todos os cálculos matemáticos complexos são feitos em segundo plano. Além disso, todos os planos incluem a Mentoria Midas com 5 cursos e 68 aulas em vídeo mostrando do zero, clique a clique, como configurar tudo com segurança.',
    category: 'geral'
  },
  {
    question: 'Quais são os riscos reais envolvidos na arbitragem?',
    answer: 'Trabalhamos com transparência radical: embora a arbitragem elimine o risco direcional do preço na modalidade neutra, existem riscos operacionais: (1) Risco de Liquidez (se o livro for raso e a ordem derrapar); (2) Taxa de Funding negativa prolongada; (3) Lentidão ou suspensão temporária de rede blockchain no Spot × Spot; (4) Deslistagem repentina de moedas de baixa capitalização pelas corretoras. Ensinamos todas as travas e proteções na mentoria.',
    category: 'seguranca'
  },
  {
    question: 'Quais corretoras são suportadas atualmente?',
    answer: 'Atualmente temos integração nativa com 13 corretoras líderes de mercado: Binance, Bybit, Gate.io, MEXC, Bitget, Hyperliquid (DEX), HTX, KuCoin, BingX, OKX, Ourbit, XT e Mercado Bitcoin (nacional para Pix). Novas corretoras são adicionadas periodicamente sem custo extra.',
    category: 'geral'
  },
  {
    question: 'Como funciona o ganho com taxa de funding (financiamento)?',
    answer: 'Nos contratos futuros perpétuos, a cada 4 ou 8 horas ocorre um acerto de financiamento entre compradores e vendedores. Quando você está posicionado comprado no Spot e vendido nos Futuros (posição neutra), se a taxa de funding estiver positiva, o mercado futuro paga juros diretamente na sua conta, gerando uma fonte de rendimento passivo extra além do fechamento do spread.',
    category: 'robos'
  },
  {
    question: 'Como funciona o cancelamento da assinatura? Tem fidelidade?',
    answer: 'Zero fidelidade. Você tem total liberdade para cancelar sua assinatura a qualquer momento com apenas 1 clique no painel da sua conta. Não cobramos multas ou taxas ocultas. Você continuará com acesso total garantido até o final do período mensal já pago.',
    category: 'planos'
  }
];

export const PLANS = [
  {
    id: 'start',
    name: 'Plano Start',
    badge: 'Iniciantes',
    highlighted: false,
    priceMonthly: 50,
    priceAnnualEquivalent: 40,
    period: '/mês',
    subtitle: 'Para iniciantes e operadores manuais darem os primeiros passos com segurança.',
    features: [
      'Monitores ao vivo (Spot × Spot e USDT/BRL)',
      'Cálculo automático de taxas e livro de ofertas',
      'Alertas sonoros em tempo real e no Telegram',
      'Módulos iniciais da Mentoria Midas (Fundamentos)',
      'Calculadora de lucratividade e rede blockchain',
      'Suporte via comunidade e e-mail'
    ],
    ctaText: 'Assinar Start',
    ctaBadge: 'Comece hoje'
  },
  {
    id: 'pro',
    name: 'Plano Pro',
    badge: 'MAIS ESCOLHIDO',
    highlighted: true,
    priceMonthly: 97,
    priceAnnualEquivalent: 78,
    period: '/mês',
    subtitle: 'Automação no navegador e piloto automático do dólar para quem busca escala.',
    features: [
      'Tudo do Plano Start incluso',
      'Acesso completo aos 4 monitores em 13 corretoras',
      'Extensão do Chrome (robô no navegador para moedas novas)',
      'Piloto Automático USDT/BRL (1 clique e automático)',
      'Mentoria completa (5 cursos e 68 aulas em vídeo)',
      'Filtros avançados de volume, liquidez e funding rate',
      'Suporte prioritário via WhatsApp'
    ],
    ctaText: 'Assinar Pro',
    ctaBadge: 'Melhor Custo-Benefício'
  },
  {
    id: 'black',
    name: 'Plano Black',
    badge: '100% AUTOMÁTICO',
    highlighted: false,
    priceMonthly: 150,
    priceAnnualEquivalent: 120,
    period: '/mês',
    subtitle: 'Operação 100% automática na nuvem 24/7 sem precisar ligar o computador.',
    features: [
      'Tudo do Plano Pro incluso',
      'Robô Bot API na nuvem 24h (opera com PC desligado)',
      'Execução automática completa em Spot × Futuros e Futuros × Futuros',
      'Fechamento automático na convergência de spread',
      'Painel avançado de evolução de capital e ciclos operacionais',
      'Acesso antecipado a novas corretoras e estratégias',
      'Canal VIP direto com especialistas e mentores'
    ],
    ctaText: 'Assinar Black',
    ctaBadge: 'Automação Total'
  }
];
