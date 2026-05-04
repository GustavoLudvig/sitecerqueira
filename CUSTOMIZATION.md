# 🎨 Guia de Customização de Design - Cerqueira Imported

## Paleta de Cores Atual

```
Preto Profundo:   #050505
Dourado Premium:  #d4af37
Branco/Ivory:     #f8f2eb
Marrom Elegante:  #3f2b22
Verde Destaque:   #34c759  ← Preços
```

---

## Como Alterar Cores

### 1. **Mudar Dourado para Prata** ✨

**Arquivo:** `tailwind.config.js`

```javascript
colors: {
  gold: '#c0c0c0',  // Alterar de #d4af37 para #c0c0c0
  // ...
}
```

**Impacto:** Badges, botões, acentos ficarão prateados

---

### 2. **Mudar Cor dos Preços**

**Arquivo:** `tailwind.config.js`

```javascript
colors: {
  emerald: '#ff1493',  // Mudando para pink/magenta
  // ...
}
```

**Impacto:** Preços passam de verde para nova cor

---

### 3. **Alterar Fundo Geral**

**Arquivo:** `src/index.css`

```css
body {
  background: linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%);
}
```

**Opções comuns:**
- Cinza dark: `#1a1a1a`
- Azul navy: `#0a0a2e`
- Verde escuro: `#0d2818`

---

## Customizações de Tipografia

### Mudar Fonte

**Arquivo:** `src/index.css`

```css
body {
  font-family: 'Playfair Display', serif;  /* serif elegante */
  /* ou */
  font-family: 'Montserrat', sans-serif;   /* sans-serif moderno */
  /* ou */
  font-family: 'Raleway', sans-serif;      /* sans-serif luxury */
}
```

### Aumentar Letter-spacing

**Arquivo:** `src/App.jsx`

```jsx
// Onde há: tracking-[0.2em]
// Mude para: tracking-[0.35em]

<p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
  NOVO ESPAÇAMENTO
</p>
```

### Aumentar Tamanho de Fontes

**Arquivo:** `src/App.jsx`

```jsx
// Hero title - aumentar de 5xl para 6xl
<h1 className="text-5xl sm:text-6xl font-semibold">
  Elegância rara...
</h1>
```

---

## Customizações de Layout

### Alterar Número de Colunas no Grid

**Arquivo:** `src/App.jsx` - linha ~380

```jsx
// Atual: md:grid-cols-2 xl:grid-cols-3
// Mude para:
<div className="grid gap-6 md:grid-cols-3 xl:grid-cols-4">
  {/* 3 colunas em tablet, 4 em desktop */}
</div>
```

### Alterar Padding dos Cards

**Arquivo:** `src/App.jsx`

```jsx
// Atual: p-6
// Mude para:
<div className="... p-8">  {/* Mais espaço */}
// ou
<div className="... p-4">  {/* Menos espaço */}
```

### Mudar Border-radius

**Arquivo:** `src/App.jsx`

```jsx
// Atual: rounded-[2rem]
// Mude para:
<div className="rounded-[3rem]">  {/* Mais arredondado */}
// ou
<div className="rounded-xl">      {/* Menos arredondado */}
```

---

## Customizações de Componentes

### Alterar Intervalo do Carrossel

**Arquivo:** `src/App.jsx` - linha ~168

```javascript
// Atual: 4000 (4 segundos)
// Mude para:
}, 5000);  // 5 segundos
}, 3000);  // 3 segundos (mais rápido)
}, 6000);  // 6 segundos (mais lento)
```

### Alterar Quantidade Inicial de Produtos

**Arquivo:** `src/App.jsx` - linha ~160

```javascript
// Atual: useState(12)
// Mude para:
const [visibleCount, setVisibleCount] = useState(20);  // Mais inicial
// ou
const [visibleCount, setVisibleCount] = useState(8);   // Menos inicial
```

### Alterar Carregamento Infinito

**Arquivo:** `src/App.jsx` - linha ~180

```javascript
// Atual: current + 8
// Mude para:
setVisibleCount((current) => Math.min(current + 12, filteredProducts.length));
// ou
setVisibleCount((current) => Math.min(current + 4, filteredProducts.length));
```

---

## Customizações de Sombras

### Aumentar Sombra dos Cards

**Arquivo:** `src/App.jsx` - linha ~310

```jsx
// Atual: shadow-luxury
// Mude para:
<article className="... shadow-[0_40px_80px_rgba(0,0,0,0.36)]">
```

### Remover Sombra

```jsx
<article className="... shadow-none">
```

---

## Customizações de Hover

### Aumentar Elevação no Hover

**Arquivo:** `src/App.jsx` - linha ~310

```jsx
// Atual: hover:-translate-y-1
// Mude para:
<article className="... hover:-translate-y-2">  {/* Mais elevado */}
// ou
<article className="... hover:-translate-y-4">  {/* Muito elevado */}
```

### Alterar Cor no Hover

**Arquivo:** `src/App.jsx` - filtro linha ~290

```jsx
// Atual: hover:border-[#d4af37] hover:text-[#d4af37]
// Mude para:
className="... hover:border-white hover:text-white"
```

---

## Customizações do Header

### Tornar Header Translúcido

**Arquivo:** `src/App.jsx` - linha ~84

```jsx
// Atual: bg-white bg-opacity-95
// Mude para:
className="... bg-white/75"    {/* Mais translúcido */}
// ou
className="... bg-white/50"    {/* Muito translúcido */}
```

### Esconder Navegação em Desktop

```jsx
// Atual: hidden md:flex
// Mude para:
className="... hidden lg:flex"  {/* Mostra só em desktop grande */}
```

---

## Customizações de Responsividade

### Fazer Cards em Linha Única Sempre

**Arquivo:** `src/App.jsx`

```jsx
// Remova breakpoints:
<div className="grid gap-6">  {/* Apenas 1 coluna sempre */}
```

### Fazer Cards em 2 Colunas no Mobile

```jsx
<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
  {/* 2 no mobile, 2 tablet, 3 desktop */}
</div>
```

---

## Customizações do WhatsApp

### Mudar Posição

**Arquivo:** `src/App.jsx` - linha ~720

```jsx
// Atual: bottom-6 right-6
// Mude para:
className="fixed bottom-12 right-12 ..."  {/* Mais para baixo/direita */}
// ou
className="fixed bottom-2 left-6 ..."      {/* Canto esquerdo */}
```

### Mudar Texto do Botão

```jsx
// Altere "WhatsApp" para:
<span>Contato</span>
<span>Chat</span>
<span>Vendedor</span>
```

### Mudar Mensagem Padrão

```jsx
// Altere o texto em href=
href="https://wa.me/554898098886?text=Sua+nova+mensagem+aqui!"
```

---

## Customizações de SEO/Meta Tags

**Arquivo:** `index.html`

```html
<meta name="description" content="Sua nova descrição">
<meta name="keywords" content="luxo, perfume, brasil">
<meta property="og:title" content="Cerqueira Imported">
<meta property="og:description" content="Descrição para redes sociais">
<meta property="og:image" content="/assets/logo.png">
```

---

## Temas Prontos

### Tema Minimalista Branco
```css
/* index.css */
body { background: #ffffff; }
/* tailwind.config.js */
gold: '#000000',    /* Preto em vez de ouro */
emerald: '#ff6b6b'  /* Vermelho para preços */
```

### Tema Luxury Blue
```css
/* index.css */
body { background: #0a1f2e; }
/* tailwind.config.js */
gold: '#87ceeb',      /* Azul céu */
emerald: '#00ff88',   /* Verde neon */
brown: '#1a3a4a'      /* Azul escuro */
```

### Tema Luxury Gold
```css
/* index.css */
body { background: #1a1410; }
/* tailwind.config.js */
gold: '#ffd700',      /* Ouro puro */
emerald: '#ff6347',   /* Vermelho tomate */
brown: '#2a2015'      /* Marrom mais escuro */
```

---

## Atalhos Úteis

| Tarefa | Localização | Alteração |
|--------|------------|-----------|
| Mudar cor principal | tailwind.config.js | `gold: '#....'` |
| Mudar preço cor | tailwind.config.js | `emerald: '#....'` |
| Mudar fundo | src/index.css | `body { background: ... }` |
| Mudar fonte | src/index.css | `font-family: '...'` |
| Mudar intervalo carousel | src/App.jsx:168 | `}, 4000)` |
| Mudar grid colunas | src/App.jsx:380 | `grid-cols-3` |
| Mudar hover elevação | src/App.jsx:313 | `hover:-translate-y-1` |
| Mudar WhatsApp posição | src/App.jsx:720 | `bottom-6 right-6` |

---

## Como Fazer Build com Mudanças

```bash
# 1. Fazer suas alterações
# 2. Salvar arquivo (auto-reload no dev)
# 3. Verificar no browser
# 4. Fazer build:
npm run build

# 5. Deploy
# (pasta dist/ contém as mudanças)
```

---

## Dicas Pro

✅ **Sempre fazer backup** antes de mudanças grandes
✅ **Testar em mobile** após alterações de layout
✅ **Usar DevTools** (F12) para testar cores antes
✅ **Manter consistência** com paleta escolhida
✅ **Documentar mudanças** para futuro

---

**Desenvolvido para ser customizável! Explore e crie seu próprio estilo! 🎨**
