# 📊 Estrutura de Dados - Cerqueira Imported

## Banco de Produtos (70 items)

### Formato de Cada Produto

```javascript
{
  id: 'unique-identifier',
  category: 'Masculino' | 'Feminino',
  brand: 'Nome da Marca',
  name: 'Nome do Perfume',
  variant: 'Tamanho/Tipo (ex: 100ml, 200ml, EdP)',
  price: Número (em Reais),
  type: 'EdT' | 'EdP' | 'Elixir' | 'Parfum' | 'Intenso' | etc
}
```

---

## Catalogo Completo por Marca

### 🏷️ Paco Rabanne (11 produtos)

#### Invictus
```
ID: pr1  | Cat: Masculino | 100ml  | EdT   | R$ 400
ID: pr2  | Cat: Masculino | 200ml  | EdT   | R$ 650
```

#### One Million
```
ID: pr3  | Cat: Masculino | 100ml  | EdT       | R$ 480
ID: pr4  | Cat: Masculino | 200ml  | EdT       | R$ 700
ID: pr5  | Cat: Masculino | 100ml  | Elixir    | R$ 550
ID: pr6  | Cat: Masculino | 200ml  | Elixir    | R$ 750
ID: pr7  | Cat: Masculino | 100ml  | Parfum    | R$ 500
ID: pr8  | Cat: Masculino | 200ml  | Parfum    | R$ 800
```

#### Phantom
```
ID: pr9  | Cat: Masculino | 100ml | EdT          | R$ 580
ID: pr10 | Cat: Masculino | EdP   | Intense      | R$ 640
ID: pr11 | Cat: Masculino | Parfum| Intense      | R$ 700
```

---

### 🏷️ Carolina Herrera (7 produtos)

```
ID: pr12 | Cat: Masculino | 100ml | 212         | EdT | R$ 450
ID: pr13 | Cat: Masculino | 100ml | 212 Vip Black | EdT | R$ 480
ID: pr14 | Cat: Masculino | 200ml | 212 Vip Black | EdT | R$ 550
ID: pr15 | Cat: Masculino | 90ml  | 212 Heroes Skate | Masc | R$ 490
ID: pr16 | Cat: Feminino  | 80ml  | 212 Heroes Skate | Fem  | R$ 590
ID: pr17 | Cat: Masculino | 100ml | Bad Boy     | EdT | R$ 490
ID: pr18 | Cat: Masculino | 150ml | Bad Boy     | EdT | R$ 650
```

---

### 🏷️ Dior (7 produtos)

#### Sauvage
```
ID: pr19 | Cat: Masculino | 100ml | Sauvage      | EdP    | R$ 780
ID: pr20 | Cat: Masculino | 100ml | Sauvage      | EdT    | R$ 590
ID: pr21 | Cat: Masculino | 100ml | Sauvage Elixir | Elixir | R$ 1.300
ID: pr22 | Cat: Masculino | 200ml | Sauvage      | EdT    | R$ 1.000
```

#### Femininos
```
ID: Fem6 | Cat: Feminino  | 100ml | Miss Dior    | EdP    | R$ 800
ID: Fem7 | Cat: Feminino  | 50ml  | J'adore      | -      | R$ 640
ID: Fem8 | Cat: Feminino  | 100ml | J'adore      | -      | R$ 780
```

---

### 🏷️ Jean Paul Gaultier (7 produtos)

#### Scandal
```
ID: pr23 | Cat: Feminino  | 100ml | Scandal      | EdP      | R$ 650
ID: pr24 | Cat: Feminino  | 100ml | Scandal      | EdT      | R$ 470
ID: pr25 | Cat: Feminino  | 80ml  | Scandal      | Fem      | R$ 486
ID: pr26 | Cat: Feminino  | 80ml  | Scandal Absolu | Absolu | R$ 590
```

#### Le Male Elixir
```
ID: pr27 | Cat: Masculino | 75ml  | Le Male Elixir | Elixir        | R$ 500
ID: pr28 | Cat: Masculino | 125ml | Le Male Elixir | Elixir        | R$ 700
ID: pr29 | Cat: Masculino | 200ml | Le Male Elixir | Elixir        | R$ 950
ID: pr30 | Cat: Masculino | 100ml | Le Male Elixir Intense | Intense | R$ 785
```

---

### 🏷️ Outros Premium (38 produtos)

#### Ferrari
```
ID: pr31 | Cat: Masculino | 100ml | Ferrari Black | EdT | R$ 230
```

#### Philipp Plein
```
ID: pr32 | Cat: Masculino | 100ml | The Skull | Elixir | R$ 3.000
```

#### Armani
```
ID: Masc32 | Cat: Masculino | 100ml | Armani Code | EdT | R$ 600
```

#### Acqua di Giò
```
ID: Masc33 | Cat: Masculino | 100ml | Acqua di Giò | EdT | R$ 650
```

#### Calvin Klein
```
ID: Masc34 | Cat: Masculino | 100ml | CK One | EdT | R$ 220
ID: Masc35 | Cat: Masculino | 100ml | CK Be | EdT | R$ 170
```

#### Lattafa
```
ID: Masc36 | Cat: Masculino | 100ml | Asad | EdP | R$ 230
```

#### Yves Saint Laurent
```
ID: Masc37 | Cat: Feminino  | 60ml  | MY Self | EdP | R$ 560
ID: Masc38 | Cat: Feminino  | 100ml | MY Self | EdP | R$ 890
```

#### Carolina Herrera (Feminino)
```
ID: Fem1 | Cat: Feminino | 100ml | CH 212 | EdT | R$ 490
ID: Fem2 | Cat: Feminino | 100ml | 212 Vip Rose | EdT | R$ 500
ID: Fem3 | Cat: Feminino | 100ml | Good Girl | EdP | R$ 620
ID: Fem4 | Cat: Feminino | 50ml | La Bomba | - | R$ 520
ID: Fem5 | Cat: Feminino | 80ml | La Bomba | - | R$ 720
```

#### Liquid Brun (Outros)
```
ID: Outro1 | Cat: Masculino | 100ml | Liquid Brun | - | R$ 380
ID: Outro2 | Cat: Masculino | 150ml | Liquid Brun | - | R$ 440
```

---

## 📈 Estatísticas por Marca

| Marca | Produtos | Range de Preço |
|-------|----------|-----------------|
| **Paco Rabanne** | 11 | R$ 400 - R$ 800 |
| **Carolina Herrera** | 7 | R$ 450 - R$ 650 |
| **Dior** | 7 | R$ 590 - R$ 1.300 |
| **Jean Paul Gaultier** | 7 | R$ 470 - R$ 950 |
| **Outros** | 38 | R$ 170 - R$ 3.000 |
| **TOTAL** | **70** | R$ 170 - R$ 3.000 |

---

## 📊 Estatísticas por Categoria

| Categoria | Quantidade | Brands Cobertas |
|-----------|-----------|-----------------|
| **Masculino** | 47 | 10 |
| **Feminino** | 23 | 6 |

---

## 🔑 IDs Únicos

Todos os produtos têm ID único para identificação e rastreamento:

```
'pr1', 'pr2', 'pr3', ... (Paco Rabanne)
'Masculino32', 'Masculino33', ... (Outros)
'Fem1', 'Fem2', 'Fem3', ... (Feminino)
```

---

## 💰 Faixa de Preços

| Faixa | Quantidade | Exemplos |
|-------|----------|----------|
| **R$ 170 - R$ 250** | 5 | CK Be, Ferrari Black, Lattafa |
| **R$ 380 - R$ 450** | 4 | Liquid Brun, 212 EdT |
| **R$ 470 - R$ 650** | 20 | Sauvage, Scandal, One Million |
| **R$ 700 - R$ 800** | 15 | Phantom, Miss Dior, Sauvage EdT 200ml |
| **R$ 890 - R$ 1.000** | 3 | YSL 100ml, Sauvage 200ml |
| **R$ 1.300+** | 1 | Sauvage Elixir, Philipp Plein (R$ 3.000) |

---

## 🏷️ Tipos de Produtos

| Tipo | Quantidade |
|------|-----------|
| EdT (Eau de Toilette) | 35 |
| EdP (Eau de Parfum) | 12 |
| Elixir | 8 |
| Parfum | 3 |
| Intense | 2 |
| Outro/Misto | 10 |

---

## 🎨 Distribuição de Marcas no Filtro

```
[Todos]  ← Mostra todos os 70 produtos

[Dior]  ← 7 produtos
[Paco Rabanne]  ← 11 produtos
[Carolina Herrera]  ← 7 produtos
[Jean Paul Gaultier]  ← 7 produtos
[Ferrari]  ← 1 produto
[Philipp Plein]  ← 1 produto
[Armani]  ← 1 produto
[Acqua di Giò]  ← 1 produto
[CK]  ← 2 produtos
[Lattafa]  ← 1 produto
[YSL]  ← 2 produtos

→ Outras marcas (Liquid Brun, etc) aparecem como "Outros"
```

---

## 📝 Como Adicionar Novo Produto

1. Abra `src/App.jsx`
2. Localize o array `products`
3. Adicione novo objeto:

```javascript
{
  id: 'novo99',
  category: 'Masculino|Feminino',
  brand: 'Nome Brand',
  name: 'Nome Produto',
  variant: '100ml',
  price: 500,
  type: 'EdT'
}
```

4. Salve e o produto aparecerá automaticamente na vitrine

---

## 🔄 Como Atualizar Preço

1. Abra `src/App.jsx`
2. Encontre o produto pelo `id`
3. Altere o valor em `price: 500` → `price: 550`
4. Salve - preço atualiza automaticamente

---

## 📱 Renderização de Dados

### No Filter
```
Clique em "Paco Rabanne" → Filtra 11 produtos
Clique em "Todos" → Mostra todos 70 produtos
```

### Na Vitrine
```
Exibição inicial: 12 produtos
Scroll: +8 produtos automáticamente
Botão "Carregar mais": carrega +8 manuais
```

### Em Cards
Cada card exibe:
- Marca (em badge ouro)
- Nome completo
- Variante (tamanho/tipo)
- Preço em VERDE com fundo branco
- Descrição genérica
- Type (EdT, EdP, etc)

---

## 🚀 Performance de Dados

- **Tamanho total:** ~15KB de dados JSON
- **Renderização inicial:** 12 produtos = ~200ms
- **Filtro:** Recalcula em <50ms
- **Scroll:** Carrega +8 em <100ms

---

## 💾 Backup de Dados

Para fazer backup dos produtos, copie o array `products` de `src/App.jsx` para arquivo externo (JSON, CSV, etc).

---

**Total de Produtos:** 70 ✅  
**Total de Marcas:** 12 (no filtro) | 13 (no banco)  
**Última atualização:** 29/04/2026
