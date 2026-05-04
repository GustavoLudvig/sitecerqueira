# ⚡ Quick Start - Cerqueira Imported

## 🚀 Iniciar Rápido

```bash
cd c:\Users\gusta\Downloads\sitecerqueira
npm run dev
```

Acessa: `http://localhost:5173/`

---

## 📋 Comandos Principais

### Desenvolvimento
```bash
npm run dev      # Inicia dev server com hot reload
npm run preview  # Preview do build de produção
```

### Build
```bash
npm run build    # Build otimizado para produção
                 # Output: ./dist/
```

### Manutenção
```bash
npm install      # Instalar dependências
npm update       # Atualizar packages
npm audit        # Verificar vulnerabilidades
```

---

## 📁 Arquivos Importantes

| Arquivo | Descrição |
|---------|-----------|
| `src/App.jsx` | Componente React principal (toda lógica) |
| `src/index.css` | Estilos globais + animações |
| `public/assets/` | Imagens (logo + 3 banners) |
| `tailwind.config.js` | Tema de cores luxury |
| `vite.config.js` | Configuração de build |
| `package.json` | Dependências |

---

## 🎨 Customizações Comuns

### Adicionar Nova Marca
Em `src/App.jsx`, adicione em `brandFilters`:
```javascript
const brandFilters = [
  'Todos', 'Dior', 'Nova Marca', // ← aqui
  // ...
];
```

### Adicionar Novo Produto
Em `src/App.jsx`, adicione em `products`:
```javascript
const products = [
  // ... existentes
  {
    id: 'novo1',
    category: 'Masculino',
    brand: 'Nova Marca',
    name: 'Nome do Produto',
    variant: '100ml',
    price: 500,
    type: 'EdT'
  }
];
```

### Alterar Intervalo Carrossel
Em `src/App.jsx`, linha ~168:
```javascript
}, 4000);  // ← Alterar 4000 para novo valor (em ms)
```

### Mudar Cores
Em `tailwind.config.js`:
```javascript
colors: {
  gold: '#d4af37',      // ← Cor dourada
  emerald: '#34c759',   // ← Cor dos preços
  // ...
}
```

### Adicionar Meta Tags SEO
Em `index.html`:
```html
<meta name="description" content="Sua descrição">
<meta name="keywords" content="perfume, luxo, ...">
```

---

## 🔧 Troubleshooting

### Porta 5173 já em uso
```bash
# Kill processo na porta
npx kill-port 5173

# Ou use outra porta
npm run dev -- --port 3000
```

### Vite não detacta mudanças
```bash
# Limpar cache e reiniciar
rm -rf node_modules/.vite
npm run dev
```

### Build error com Tailwind
```bash
# Verificar arquivo tailwind.config.js
# Deve ter: content: ['./index.html', './src/**/*.{js,jsx}']

npm run build -- --force
```

### WhatsApp link não funciona
Verificar URL em `src/App.jsx` ~715:
```javascript
href="https://wa.me/554898098886?text=..."
```

---

## 📊 Estatísticas do Projeto

- **70 produtos** em banco de dados
- **12 marcas** com filtro rápido
- **3 banners** em carrossel automático
- **4 seções** (header, hero, filtro, vitrine)
- **700+ linhas** de código React
- **158KB JS** (gzip: 49.71KB)
- **16.76KB CSS** (gzip: 3.96KB)

---

## 🎯 Checklist Antes de Deploy

- [ ] Verificar imagens em `public/assets/`
- [ ] Testar em mobile (375px)
- [ ] Testar filtro de marcas
- [ ] Testar WhatsApp link
- [ ] Testar carrossel (4s)
- [ ] Testar scroll infinito
- [ ] Executar `npm run build`
- [ ] Verificar `dist/` foi criado
- [ ] Deploy a Netlify/Vercel/GitHub

---

## 🌐 Deploy em 1 Minuto

### Netlify
```bash
npm run build
# Fazer drag-and-drop da pasta 'dist/' em netlify.com
```

### Vercel
```bash
# Conectar GitHub e Vercel detecta automaticamente
git push
```

### GitHub Pages
```bash
# Adicionar ao vite.config.js:
# base: '/sitecerqueira/',
npm run build
git add dist/
git commit -m "Deploy"
git push
```

---

## 📞 Suporte Rápido

**Erro comum:** "Cannot find module 'react'"
```bash
→ Solução: npm install
```

**Erro comum:** "Tailwind classes not showing"
```bash
→ Solução: Reiniciar dev server (Ctrl+C, npm run dev)
```

**Erro comum:** "Port 5173 already in use"
```bash
→ Solução: npm run dev -- --port 3000
```

---

## 📚 Documentação Completa

- `README.md` - Overview completo
- `TECHNICAL.md` - Documentação técnica
- `IMPLEMENTATION.md` - Checklist de requisitos
- `SUMMARY.md` - Resumo visual

---

## 🎓 Recursos Úteis

- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vite Guide:** https://vitejs.dev/guide/
- **JavaScript.info:** https://javascript.info

---

**Desenvolvido com ❤️ para a Cerqueira Imported**  
**Última atualização:** 29/04/2026
