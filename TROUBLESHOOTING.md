# 🔧 Troubleshooting & Suporte - Cerqueira Imported

## Problemas Comuns & Soluções

---

## ⚠️ Erros de Build

### Erro: "Module not found: 'react'"

```bash
❌ Error: Cannot find module 'react'

✅ Solução:
npm install
npm run dev
```

**Causa:** Dependências não instaladas ou corrompidas

---

### Erro: "Vite config not found"

```bash
❌ Error: failed to load vite config

✅ Solução:
# Verificar se vite.config.js existe:
ls -la vite.config.js

# Reconstruir:
npm install
npm run build
```

**Causa:** Arquivo de configuração deletado ou movido

---

### Erro: "Port 5173 already in use"

```bash
❌ Error: EADDRINUSE: address already in use :::5173

✅ Solução 1 - Usar outra porta:
npm run dev -- --port 3000

✅ Solução 2 - Matar processo:
# Windows:
npx kill-port 5173

# Mac/Linux:
lsof -ti:5173 | xargs kill -9
```

**Causa:** Outro processo usando a mesma porta

---

### Erro: "Tailwind classes not applying"

```bash
❌ Problema: Estilos Tailwind não aparecem

✅ Solução 1 - Verificar tailwind.config.js:
// Deve incluir seu arquivo:
content: ['./index.html', './src/**/*.{js,jsx}']

✅ Solução 2 - Limpar cache:
rm -rf node_modules/.cache
npm run dev

✅ Solução 3 - Reiniciar dev server:
Ctrl+C (parar)
npm run dev (reiniciar)
```

**Causa:** Arquivo não monitorado pelo Tailwind

---

### Erro: "Cannot read property 'map' of undefined"

```bash
❌ TypeError: Cannot read property 'map' of undefined

✅ Solução:
// Verificar se products array existe em App.jsx
// Se deletado acidentalmente, restaurar do arquivo original
git checkout src/App.jsx

// Ou adicionar validação:
{products?.map(...)}  // Adicionar ?
{(products || []).map(...)}  // Ou fallback
```

**Causa:** Variável não inicializada ou deletada

---

## 🖼️ Problemas com Imagens

### Imagens não aparecem

```bash
❌ Problema: banner1.png não renderiza

✅ Solução 1 - Verificar caminho:
// Correto:
src="/assets/banner1.png"

// Errado:
src="./assets/banner1.png"    ❌
src="./public/assets/..."     ❌

✅ Solução 2 - Verificar se arquivo existe:
ls -la public/assets/

✅ Solução 3 - Verificar proporção:
# Deve ser 2752x1536px
# Se diferente, converter:
ffmpeg -i banner1.jpg -vf scale=2752:1536 banner1_resized.png
```

**Causa:** Caminho incorreto ou arquivo em formato errado

---

### Logo aparece cortada

```bash
❌ Problema: Logo não mostra direito (não é quadrado)

✅ Solução:
# Logo deve ser 1600x1600px (proporção 1:1)
# Converter:
ffmpeg -i logo.jpg -vf scale=1600:1600 logo_squared.png

# Ou usar online:
# https://pixlr.com (resize proportionally)
```

**Causa:** Proporção incorreta (não é 1:1)

---

### Imagens muito pesadas

```bash
❌ Build muito lento, bundle grande

✅ Solução - Compactar imagens:
# Instalar ImageMagick:
brew install imagemagick

# Comprimir:
mogrify -quality 80 -strip public/assets/*.png

# Ou usar online:
# https://tinypng.com
```

**Causa:** Imagens não otimizadas

---

## 🎨 Problemas de Estilo

### Cores não estão corretas

```bash
❌ Problema: Cor dourada não é #d4af37

✅ Solução:
// tailwind.config.js
colors: {
  gold: '#d4af37',  // Verificar hex exato
}

// src/App.jsx
// Usar apenas: text-[#d4af37] ou via config
<span className="text-gold">Gold</span>
```

**Causa:** Valor hex incorreto ou typo

---

### Texto muito pequeno em mobile

```bash
❌ Problema: Texto ilegível em celular

✅ Solução:
// Aumentar base font-size para mobile:
<h1 className="text-3xl sm:text-4xl md:text-5xl">
  {/* 3xl mobile, 4xl tablet, 5xl desktop */}
</h1>
```

**Causa:** Não há breakpoint responsivo

---

### Cards muito grandes/pequenos

```bash
❌ Problema: Cards não cabem na tela

✅ Solução:
// Alterar padding:
<div className="p-4 md:p-6 lg:p-8">
  {/* Menos padding em mobile, mais em desktop */}
</div>

// Ou alterar grid:
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
</div>
```

**Causa:** Espaçamento não responsivo

---

## 🔄 Problemas de Funcionalidade

### Filtro de marca não funciona

```bash
❌ Problema: Clica em marca mas nada muda

✅ Solução:
// Verificar state:
console.log('activeBrand:', activeBrand);

// Verificar função:
const onClick={() => setActiveBrand(brand)}

// Se ainda não funcionar:
npm run dev  // Reiniciar dev server
```

**Causa:** State não atualiza ou listener não bound

---

### Carrossel não roda

```bash
❌ Problema: Banner fica fixo, não troca

✅ Solução:
// src/App.jsx linha ~167:
useEffect(() => {
  const interval = setInterval(() => {
    setActiveSlide((prev) => (prev + 1) % banners.length);
  }, 4000);  // ← Verificar este valor
  return () => clearInterval(interval);
}, []);

// Se não funcionar:
console.log('activeSlide:', activeSlide);  // Debug
```

**Causa:** Intervalo não configurado ou há erro no state

---

### WhatsApp link não abre

```bash
❌ Problema: Botão clica mas não abre WhatsApp

✅ Solução:
// Verificar URL:
href="https://wa.me/554898098886?text=Olá, gostaria de falar com o vendedor!"

// Usando encodeURIComponent:
href={`https://wa.me/554898098886?text=${encodeURIComponent('Olá!')}`}

// Testar URL no navegador diretamente:
https://wa.me/554898098886
```

**Causa:** URL malformada ou target="_blank" faltando

---

### Scroll infinito não funciona

```bash
❌ Problema: Não carrega produtos ao scroll

✅ Solução:
// Verificar console para erros:
F12 > Console > ver logs

// Testar height:
console.log('windowHeight:', window.innerHeight);
console.log('scrollY:', window.scrollY);

// Se não funcionar:
npm run dev  // Reiniciar
```

**Causa:** Listener não attached ou threshold incorreto

---

## 📱 Problemas de Responsividade

### Não funciona em mobile

```bash
❌ Problema: Layout quebra em celular (375px)

✅ Solução:
// Usar DevTools do navegador:
F12 > Toggle device toolbar > iPhone

// Fazer teste:
npm run dev
# Abrir em móvel

// Se problema persiste:
// Verificar breakpoints em tailwind.config.js:
breakpoints: {
  sm: '640px',   // ← Tablet pequeno
  md: '768px',   // ← Tablet
  lg: '1024px',  // ← Desktop
  xl: '1280px'   // ← Desktop grande
}
```

**Causa:** Classes responsivas não aplicadas

---

### Header fica por cima do conteúdo

```bash
❌ Problema: Header sobrepõe text (z-index)

✅ Solução:
// Adicionar top margin ao main:
<main className="pt-20">
  {/* Conteúdo abaixo do header */}
</main>

// Ou reduzir header height:
<header className="h-16">  {/* Mais curto */}
```

**Causa:** Sticky com z-index maior que conteúdo

---

## 🚀 Problemas de Performance

### Build muito lento

```bash
❌ Build demorando >10 segundos

✅ Solução:
// Verificar plugin:
npm run build -- --debug

// Limpar cache:
rm -rf dist node_modules/.vite
npm run build

// Ou simplificar App.jsx:
// Remover console.logs
// Remover imports não usados
```

**Causa:** Plugins pesados ou bundle grande

---

### Página lenta em produção

```bash
❌ Site lento mesmo após build

✅ Solução:
// Verificar bundle size:
npm run build
# Ver output de sizes

// Comprimir imagens:
# Usar TinyPNG, ImageOptim, etc

// Usar CloudFlare para cache
```

**Causa:** Assets não otimizados

---

## 🔐 Problemas de Segurança

### CORS error

```bash
❌ Error: Access to XMLHttpRequest blocked by CORS

✅ Solução (se tiver API):
// Adicionar headers em vite.config.js:
server: {
  proxy: {
    '/api': {
      target: 'http://seu-api.com',
      changeOrigin: true
    }
  }
}
```

**Causa:** Cross-origin request bloqueado

---

## 📊 Debug Avançado

### Ativar console logs

**Em src/App.jsx**, adicione:

```javascript
useEffect(() => {
  console.log('activeBrand:', activeBrand);
  console.log('filteredProducts:', filteredProducts);
  console.log('visibleProducts:', visibleProducts);
}, [activeBrand, visibleCount]);

useEffect(() => {
  console.log('activeSlide:', activeSlide);
}, [activeSlide]);
```

Abra F12 > Console para ver valores em tempo real.

---

### Verificar state no DevTools React

1. Instalar: [React DevTools](https://react.dev/learn/react-developer-tools)
2. Abrir DevTools (F12)
3. Ir para aba "Components"
4. Selecionar `<App />`
5. Ver `state` no painel direito

---

## 📞 Contato & Suporte

Se problema persiste após tentar soluções:

1. **Verificar mensagens de erro exatas** (copiar do console)
2. **Descrever passo a passo** o que você fez
3. **Incluir versão:** `node -v` e `npm -v`
4. **Testar em outro navegador** (Chrome, Firefox)

---

## ✅ Checklist Troubleshooting

- [ ] npm install executado?
- [ ] node_modules/ existe?
- [ ] vite.config.js existe?
- [ ] src/App.jsx existe e está correto?
- [ ] Imagens em public/assets/?
- [ ] Terminal sem erros (ler output completo)?
- [ ] Testou em navegador diferente?
- [ ] Limpou cache do navegador (Ctrl+Shift+Del)?
- [ ] Trocou de porta se 5173 ocupada?

---

**Problema não resolvido? Tente:**
1. Desinstalar e reinstalar: `rm -rf node_modules && npm install`
2. Limpar cache Vite: `rm -rf node_modules/.vite`
3. Deletar dist: `rm -rf dist`
4. Reinicar dev server: `npm run dev`

---

**Última atualização:** 29/04/2026
