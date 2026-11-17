# Midas — Plataforma de Arbitragem de Criptomoedas

Landing page completa, moderna e de alta conversão para a plataforma **Midas**, um SaaS brasileiro de **arbitragem de criptomoedas** com monitoramento em tempo real, robôs de execução automática (API e extensão de navegador) e mentoria inclusa.

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (v18+)
- npm ou yarn / pnpm

### Instalação e Execução

```bash
# Instalar as dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build

# Visualizar o build de produção
npm run preview
```

O projeto estará disponível por padrão em: `http://localhost:3000` (ou `http://127.0.0.1:3000`).

---

## 🎨 Identidade Visual e UI/UX
- **Tema:** Dark mode financeiro/cripto premium (`#090A0F` / `#11131C`) com glassmorphism e iluminação radial.
- **Cores de destaque:** Dourado / Âmbar (`#F59E0B`) para a marca Midas e Verde Esmeralda (`#10B981`) para lucros, spreads positivos e CTAs de conversão.
- **Tipografia:** Plus Jakarta Sans com suporte a números tabulares (`tabular-nums` / JetBrains Mono) para cotações e spreads.
- **Responsividade:** 100% adaptável para Mobile, Tablet e Desktop.

---

## 📑 Estrutura de Seções Implementada

1. **Header / Navbar Fixo:** Logo Midas com emblema dourado, navegação suave com âncoras, botões de login e checkout.
2. **Hero Section (Dobra Principal):** Badge com pulso, H1 impactante, métricas em linha (+1500 moedas, 4 modalidades, 13 corretoras, execução automática), CTA de conversão e **Dashboard Interativo Simulado** com ticker em tempo real e simulador de ciclo de 4 etapas.
3. **4 Modalidades de Arbitragem:**
   - **Spot × Futuros** (`ROBÔ 24 H`): Posição neutra com acúmulo de funding.
   - **Futuros × Futuros** (`ROBÔ 24 H`): Zero transferência blockchain entre corretoras.
   - **Spot × Spot** (`EXECUÇÃO MANUAL`): Sem derivativos, livros lado a lado e taxas de rede inclusas.
   - **USDT / BRL** (`PILOTO AUTOMÁTICO`): Arbitragem cambial via Pix nacional.
4. **Execução Automática e Automações:**
   - Robô de Nuvem 24h operando com PC desligado.
   - Extensão do Chrome para moedas recém-lançadas sem API aberta.
   - Piloto Automático do dólar cripto com validação de whitelist.
5. **Monitor & Alertas em Tempo Real:** Cards ao vivo (`OPENAI +75,72%`, `BP +11,04%`, `CATE +3,18%`), mockup da notificação do Telegram (`+3,2296 USDT ✅`), contagem de inversões, histórico e alertas sonoros.
6. **Resultados Reais & Métricas:** Caso real de operador com 5 robôs ativos, 2.443 ordens, 68/77 ciclos com lucro (+R$ 185,41 em 5 dias), cards individuais com taxas descontadas e disclaimer transparente.
7. **Calculadora Interativa de Spreads:** Simulador com sliders de capital e ciclos diários para estimar retornos líquidos mensais.
8. **Segurança e Transparência Radical de Riscos:** Comparativo em 2 colunas: Proteções (não custodiante, chaves sem saque, AES-256) vs Riscos de mercado (slippage, funding adverso, deslistagem, lentidão de rede).
9. **Mentoria Inclusa:** 5 cursos e 68 aulas em vídeo cobrindo desde a configuração zero até estratégias neutras institucionais.
10. **Integrações Multicorretoras:** Grid com as 13 corretoras (Binance, Bybit, Gate.io, MEXC, Bitget, Hyperliquid DEX, HTX, KuCoin, BingX, OKX, Ourbit, XT e Mercado Bitcoin).
11. **Planos e Preços:**
    - **Start (R$ 50/mês)**: Para iniciantes e manual.
    - **Pro (R$ 97/mês)**: Destaque *Mais Escolhido* com robô de extensão e piloto automático USDT/BRL.
    - **Black (R$ 150/mês)**: Robô 24h na nuvem com PC desligado.
    - Toggle mensal / anual (-20% OFF).
12. **FAQ Accordion Interativo:** 10 perguntas essenciais com categorias e animação fluida.
13. **CTA Final & Footer:** Chamada de conversão, canal direto de WhatsApp, e-mail oficial (`contato@midas.com.br`) e links institucionais.
14. **Modais Interativos:**
    - Modal de Checkout com seleção de planos e simulação de Pix Instantâneo (QR Code + Chave Copia e Cola).
    - Modal de Autenticação / Login.
    - Live Toast no rodapé com alertas simulados de fechamento de ciclo.
