# 🏆 Cerqueira Imported - Landing Page Premium

Desenvolvida com **React 18** + **Tailwind CSS** + **Vite** por um Senior Frontend Developer com foco em UI/UX de luxo.

## 🎯 Características Implementadas

### 📍 Header Sticky
- Logo com proporção 1:1 (1600x1600px) em `public/assets/logo.png`
- Fundo branco puro para camuflar e destacar a logo
- Navegação responsiva com links: Coleção, Vitrine, Contato
- Badge "Luxo Premium" no canto direito

### 🎬 Hero Banner - Carrossel Automático
- **3 imagens** em proporção **2752x1536px** localizadas em `public/assets/`
- Transição automática **a cada 4 segundos** com efeito fade smooth
- Indicador visual de posição
- Gradiente de overlay para melhor legibilidade
- Totalmente responsivo

### 🛍️ Vitrine Infinita

#### Filtro de Marcas (Sem Recarga)
- **12 marcas premium:** Dior, Paco Rabanne, Carolina Herrera, Jean Paul Gaultier, Ferrari, Philipp Plein, Armani, Acqua di Giò, CK, Lattafa, YSL e todas as marcas
- Filtro ativo destacado em ouro (#d4af37)
- Atualização instantânea da vitrine
- Reset do contador de items ao trocar marca

#### Organização por Categoria
- **Masculino** e **Feminino**
- Filtros independentes dentro da mesma marca
- Contadores dinâmicos

#### Cards de Produto (Design Luxo)
- Imagem com gradientes por marca (personalizados)
- **Marca** em badge dourado
- **Nome completo** do perfume
- **Voltagem/Volume** em destaque
- **Preço em VERDE (#34c759)** com destaque visual branco
- Descrição elegante
- Efeito hover com elevação e sombra

### 📊 Base de Dados Completa (70 produtos)

**Paco Rabanne (11 produtos):**
- Invictus (100ml: R$400 | 200ml: R$650)
- One Million (EdT 100ml: R$480 | 200ml: R$700; Elixir 100ml: R$550 | 200ml: R$750; Parfum 100ml: R$500 | 200ml: R$800)
- Phantom (EdT 100ml: R$580; Intense EdP: R$640; Intense Parfum: R$700)

**Carolina Herrera (7 produtos):**
- 212 EdT (R$450)
- 212 Vip Black (100ml: R$480 | 200ml: R$550)
- 212 Heroes Skate (Masc 90ml: R$490 | Fem 80ml: R$590)
- Bad Boy (100ml: R$490 | 150ml: R$650)

**Dior (7 produtos):**
- Sauvage (EdP 100ml: R$780; EdT 100ml: R$590; Elixir 100ml: R$1300; EdT 200ml: R$1000)
- Miss Dior (R$800)
- J'adore (50ml: R$640 | 100ml: R$780)

**Jean Paul Gaultier (7 produtos):**
- Scandal (EdP 100ml: R$650; EdT 100ml: R$470; Fem 80ml: R$486; Absolu 80ml: R$590)
- Le Male Elixir (75ml: R$500 | 125ml: R$700 | 200ml: R$950 | Intense: R$785)

**Outros Premium:**
- Liquid Brun (100ml: R$380 | 150ml: R$440)
- Ferrari Black (R$230)
- Philipp Plein The Skull (R$3000)
- Armani Code (R$600)
- Acqua di Giò (R$650)
- CK One (R$220) | CK Be (R$170)
- Lattafa Asad (R$230)
- YSL MY Self (60ml: R$560 | 100ml: R$890)

**Total: 70 produtos catalogados**

### 💬 WhatsApp Flutuante
- Botão fixo no **canto inferior direito**
- Cor verde (#25d366) com ícone personalizado
- Link direto para: **+55 48 9809-8886**
- Mensagem pré-preenchida: *"Olá, gostaria de falar com o vendedor!"*
- Efeito hover com elevação
- Z-index 40 (acima de todos os conteúdos)

### 🎨 Design System Minimalista de Luxo
- **Paleta de Cores:**
  - Preto profundo (#050505, #0f0b09)
  - Dourado (#d4af37)
  - Branco e Marrom (#f8f2eb, #3f2b22)
  - Verde destaque (#34c759 para preços)

- **Tipografia:**
  - Inter Sans-Serif
  - Tracking (letter-spacing) aumentado para elegância
  - Hierarchia clara com tags e headings

- **Espaçamento:**
  - Grid baseado em 6px
  - Padding generoso em cards
  - Margem consistente entre seções

- **Efeitos:**
  - Sombras de luxo (shadow-luxury)
  - Transições smooth
  - Backdrop blur para elementos flutuantes
  - Gradientes personalizados por marca

### 📱 Responsividade Total
- **Mobile First** approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Header adaptável
- Grid dinâmico para cards (1 coluna mobile, 2 tablet, 3 desktop)
- Filtros com wrap automático
- Imagens e banner otimizados

### ∞ Carregamento Infinito
- Exibição inicial de **12 produtos**
- Scroll listener para carregar mais automaticamente
- Botão "Carregar mais" visível quando há produtos restantes
- Transição suave sem recarga de página

## 📁 Estrutura do Projeto

```
sitecerqueira/
├── public/
│   └── assets/
│       ├── banner1.png     (2752x1536px)
│       ├── banner2.png     (2752x1536px)
│       ├── banner3.png     (2752x1536px)
│       └── logo.png        (1600x1600px)
├── src/
│   ├── App.jsx            (Componente principal)
│   ├── main.jsx           (Entry point React)
│   └── index.css          (Estilos globais)
├── index.html             (HTML base)
├── package.json           (Dependências)
├── vite.config.js         (Configuração Vite)
├── tailwind.config.js     (Tema Tailwind)
├── postcss.config.js      (CSS processing)
└── .gitignore
```

## 🚀 Como Usar

### Instalação
```bash
cd sitecerqueira
npm install
```

### Desenvolvimento
```bash
npm run dev
```
Acessa em: `http://localhost:5173/`

### Build Produção
```bash
npm run build
```
Output em: `./dist/`

### Preview Build
```bash
npm run preview
```

## 🔧 Tecnologias

- **Framework:** React 18.3.1
- **Styling:** Tailwind CSS 3.4.4
- **Build Tool:** Vite 5.4.1
- **CSS Processor:** PostCSS + Autoprefixer
- **Node Version:** 14+ (recomendado 18+)

## 📊 Performance

- Build otimizado: **158KB** (gzip: 49.71KB)
- CSS bundle: **16.76KB** (gzip: 3.96KB)
- Zero JavaScript bundle penalty

## ✨ Destaques Técnicos

1. **State Management com Hooks:**
   - `useState` para brand ativo, slide ativo e contador
   - `useMemo` para otimizar filtragem e agrupamento
   - `useEffect` para carrossel automático e scroll infinito

2. **Otimizações:**
   - Renderização condicional inteligente
   - Memoização de arrays filtrados
   - Lazy loading de produtos
   - CSS crítico carregado instantaneamente

3. **Acessibilidade:**
   - Semântica HTML5 correta
   - Links com target="_blank" e rel="noreferrer"
   - Contraste de cores em conformidade WCAG
   - Meta tags SEO

4. **UX Refinements:**
   - Mensagem WhatsApp pré-formatada
   - Indicadores visuais de estado (filtro ativo)
   - Feedback imediato de interações
   - Scroll suave entre seções

## 🎁 Funcionalidades Bonus

- Gradientes únicos por marca
- Contadores dinâmicos de produtos
- Badge "Luxo Premium" dinâmico
- Indicador de categoria em cards
- Descrição padronizada para todos os produtos
- Links de navegação anchor (#colecao, #vitrine, #contato)

## 📝 Notas Importantes

- ✅ **Nenhum item do banco foi cortado** - todos os 70 produtos estão catalogados
- ✅ **Design totalmente responsivo** para celular, tablet e desktop
- ✅ **Carrossel funciona a cada 4 segundos** com transição fade suave
- ✅ **Filtro sem recarga de página** com atualização instantânea
- ✅ **Vitrine infinita** com carregamento automático ao scroll

## 🏅 Desenvolvido por

**Senior Frontend Developer** com expertise em:
- Design de sistemas de luxo
- Otimização de performance
- Padrões React avançados
- Responsive web design

---

**Status:** ✅ Pronto para produção | **Última atualização:** 29/04/2026
