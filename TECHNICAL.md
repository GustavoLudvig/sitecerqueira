# 📋 Documentação Técnica - Cerqueira Imported Landing Page

## Sumário Executivo

Landing page premium desenvolvida em **React 18 + Tailwind CSS** com foco em UX/UI de luxo. Implementa:

- ✅ **Vitrine infinita** com 70 produtos completos
- ✅ **Filtro de marcas** sem recarga de página
- ✅ **Carrossel hero** com 3 imagens em transição automática (4s)
- ✅ **Cards premium** com design elegante e preços destacados
- ✅ **WhatsApp flutuante** com mensagem pré-formatada
- ✅ **100% responsivo** para mobile, tablet e desktop
- ✅ **Performance otimizada** (158KB JS, 16.76KB CSS)

---

## 🏗️ Arquitetura do Projeto

### Stack Técnico
```
Frontend:     React 18.3.1 + JSX
Styling:      Tailwind CSS 3.4.4
Build:        Vite 5.4.1
CSS:          PostCSS + Autoprefixer
Node:         14+ (recomendado 18+)
Package Mgr:  npm
```

### Estrutura de Diretórios
```
sitecerqueira/
├── public/
│   └── assets/
│       ├── banner1.png       (Hero carousel - 2752x1536px)
│       ├── banner2.png       (Hero carousel - 2752x1536px)
│       ├── banner3.png       (Hero carousel - 2752x1536px)
│       └── logo.png          (Header logo - 1600x1600px)
├── src/
│   ├── App.jsx               (Componente principal React)
│   ├── main.jsx              (React entry point)
│   └── index.css             (Estilos globais + animações)
├── dist/                     (Build output - produção)
├── index.html                (HTML template)
├── package.json              (Dependências)
├── vite.config.js            (Configuração Vite)
├── tailwind.config.js        (Tema customizado)
├── postcss.config.js         (Processamento CSS)
├── README.md                 (Documentação principal)
├── TECHNICAL.md              (Este arquivo)
└── .gitignore
```

---

## 🔧 Configuração do Projeto

### Tailwind Config (`tailwind.config.js`)
Customizações de cores luxury:
```javascript
colors: {
  luxury: '#050505',      // Preto profundo
  gold: '#d4af37',        // Dourado premium
  ivory: '#f8f2eb',       // Marfim suave
  brown: '#3f2b22',       // Marrom elegante
  'soft-brown': '#7b5e57',
  emerald: '#34c759'      // Verde destaque (preços)
}
```

### Vite Config (`vite.config.js`)
- Plugin React para JSX/HMR
- Otimizações automáticas de bundle
- Dev server em `http://localhost:5173`

---

## 📐 Componente Principal (App.jsx)

### Estado Gerenciado
```javascript
const [activeBrand, setActiveBrand] = useState('Todos');
const [visibleCount, setVisibleCount] = useState(12);
const [activeSlide, setActiveSlide] = useState(0);
```

### Dados do Banco de Produtos
```javascript
const products = [
  {
    id: 'pr1',
    category: 'Masculino|Feminino',
    brand: 'Marca',
    name: 'Nome do Perfume',
    variant: '100ml|200ml|etc',
    price: 0,
    type: 'EdT|EdP|Elixir|Parfum|etc'
  },
  // ... 70 produtos total
];
```

### Hooks Utilizados

#### `useEffect` - Carrossel Automático
```javascript
useEffect(() => {
  const interval = setInterval(() => {
    setActiveSlide((prev) => (prev + 1) % banners.length);
  }, 4000);
  return () => clearInterval(interval);
}, []);
```
Rotaciona o slide a cada 4 segundos com cleanup automático.

#### `useEffect` - Scroll Infinito
```javascript
useEffect(() => {
  const handleScroll = () => {
    const threshold = window.innerHeight + window.scrollY;
    if (threshold > document.body.offsetHeight - 360 && visibleCount < filteredProducts.length) {
      setVisibleCount((current) => Math.min(current + 8, filteredProducts.length));
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [visibleCount, filteredProducts.length]);
```
Monitora scroll e carrega 8 produtos adicionais quando atinge ~360px do final.

#### `useMemo` - Otimização de Rendering
```javascript
const filteredProducts = useMemo(() => {
  return products.filter((product) => activeBrand === 'Todos' || product.brand === activeBrand);
}, [activeBrand]);
```
Recalcula filtro apenas quando `activeBrand` muda, evitando re-renders desnecessários.

---

## 🎨 Design System

### Paleta de Cores
| Variável | Hex | Uso |
|----------|-----|-----|
| luxury | #050505 | Fundo principal |
| gold | #d4af37 | Acentos, badges ativos |
| ivory | #f8f2eb | Texto secundário |
| brown | #3f2b22 | Bordas e divisores |
| emerald | #34c759 | Preços destacados |

### Tipografia
- **Font:** Inter (Sistema fallback: ui-sans-serif, system-ui)
- **Letter-spacing:** 0.16em-0.3em (luxo)
- **Line-height:** 1.5-1.75 (legibilidade)
- **Weights:** 400 (regular), 600 (semibold)

### Espaçamento
- **Base:** 4px
- **Padding cards:** 24px (6x base)
- **Margin sections:** 64px (16x base)
- **Gap components:** 12-24px

### Sombras
```css
shadow-luxury: 0 20px 60px rgba(0,0,0,0.24)
shadow-soft:   0 8px 24px rgba(0,0,0,0.12)
```

---

## 📱 Responsividade

### Breakpoints Tailwind
- **sm:** 640px (tablets pequenos)
- **md:** 768px (tablets)
- **lg:** 1024px (desktops)
- **xl:** 1280px (desktops grandes)

### Exemplos de Adaptativos
```jsx
// Grid de cards
<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

// Direção flexbox
<div className="flex flex-col lg:flex-row">

// Ocultar/mostrar
<nav className="hidden items-center gap-6 md:flex">

// Tamanhos responsivos
<h1 className="text-4xl sm:text-5xl">
```

---

## 🚀 Performance

### Bundle Size (Build Otimizado)
- **JavaScript:** 158.01 KB (gzip: 49.71 KB)
- **CSS:** 16.76 KB (gzip: 3.96 KB)
- **Total:** ~174 KB (gzip: ~53 KB)

### Otimizações Implementadas
1. **Code Splitting:** Vite automático
2. **Tree Shaking:** Tailwind CSS removal de classes não usadas
3. **Memoização:** useMemo em arrays grandes
4. **Lazy Loading:** Carregamento infinito de produtos
5. **Image Optimization:** Assets otimizadas antes de push

### Métricas de Lighthouse (Esperadas)
- **Performance:** 95+
- **Accessibility:** 98+
- **Best Practices:** 96+
- **SEO:** 100

---

## 🔌 API de Dados (Em Memória)

Não existe integração com API externa. Os dados estão hardcoded no `App.jsx`:

```javascript
const products = [
  // 70 produtos com estrutura:
  {
    id: 'unique-id',
    category: 'Masculino|Feminino',
    brand: 'String',
    name: 'String',
    variant: 'String (volume/tipo)',
    price: Number,
    type: 'String (EdT, EdP, etc)'
  }
];
```

### Para Integrar API Real:
```javascript
// Exemplo: Fetch ao montar
useEffect(() => {
  fetch('/api/products')
    .then(res => res.json())
    .then(setProducts);
}, []);
```

---

## 🎯 Funcionalidades Principais

### 1. Header Sticky
- **Posição:** `sticky top-0 z-30`
- **Fundo:** Branco puro (#ffffff) com backdrop blur
- **Conteúdo:**
  - Logo com border dourada
  - Navegação (desktop: flex, mobile: hidden)
  - Badge "Luxo Premium"

### 2. Hero Section
- **Layout:** Flex com 2 colunas (desktop), 1 (mobile)
- **Elementos:**
  - Texto chamada à ação (esquerda)
  - Carrossel de banners (direita)
  - 2 botões CTA

### 3. Filtro de Marcas
```javascript
const brandFilters = [
  'Todos', 'Dior', 'Paco Rabanne', 'Carolina Herrera',
  'Jean Paul Gaultier', 'Ferrari', 'Philipp Plein',
  'Armani', 'Acqua di Giò', 'CK', 'Lattafa', 'YSL'
];
```
- Estado ativo em ouro
- onClick atualiza `activeBrand`
- Reseta `visibleCount` para 12

### 4. Vitrine de Produtos
```
├── Agrupado por Categoria (Masculino/Feminino)
│   ├── Contador de produtos visíveis
│   └── Grid de cards (md:2 cols, xl:3 cols)
│       ├── Imagem com gradiente por marca
│       ├── Badge de marca
│       ├── Nome e voltagem
│       ├── Preço em verde destacado
│       └── Descrição com tipo
└── Botão "Carregar mais" (quando há mais items)
```

### 5. WhatsApp Flutuante
```jsx
<a
  id="contato"
  href="https://wa.me/554898098886?text=Olá, gostaria de falar com o vendedor!"
  target="_blank"
  className="fixed bottom-6 right-6 z-40 ..."
>
```

---

## 🔐 SEO & Meta Tags

```html
<meta name="description" content="Landing page de perfumaria de luxo...">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cerqueira Imported</title>
```

---

## 🔧 Troubleshooting

### Issue: Página não carrega
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Issue: Tailwind styles não aparecem
```bash
# Verificar se conteúdo está incluído no tailwind.config.js
content: ['./index.html', './src/**/*.{js,jsx}']

# Rebuild
npm run build
```

### Issue: Banner não aparece
- Verificar se images existem em `public/assets/`
- Usar caminho relativo `/assets/banner1.png`
- Verificar proporção (2752x1536px)

---

## 📦 Deployment

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### Vercel
```bash
# Detecta automaticamente Vite
vercel deploy
```

### GitHub Pages
```bash
# Adicionar ao vite.config.js:
export default {
  base: '/sitecerqueira/',
  // ...
}
npm run build
# Deploy pasta dist
```

---

## 📚 Referências

- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Vite Guide:** https://vitejs.dev
- **MDN Web Docs:** https://developer.mozilla.org

---

## ✅ Checklist Final

- [x] Header sticky com logo e nav
- [x] Hero section com carrossel automático (4s)
- [x] 3 banners em proporção correta (2752x1536px)
- [x] 70 produtos catalogados completos
- [x] Filtro de 12 marcas sem recarga
- [x] Vitrine organizada por categoria (M/F)
- [x] Cards com design luxury (marca, nome, voltagem, preço verde)
- [x] WhatsApp flutuante com mensagem pré-preenchida
- [x] Scroll infinito (carregamento automático + botão manual)
- [x] 100% responsivo (mobile, tablet, desktop)
- [x] Paleta minimalista (preto, dourado, branco, marrom)
- [x] Performance otimizada (158KB JS)
- [x] Build e preview testados

---

**Desenvolvido em:** React 18 + Tailwind CSS + Vite  
**Última atualização:** 29/04/2026  
**Status:** ✅ Pronto para Produção
