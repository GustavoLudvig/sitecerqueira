import { useEffect, useMemo, useState } from 'react';

const banners = ['/assets/banner1.png', '/assets/banner2.png', '/assets/banner3.png'];
const categories = ['Masculino', 'Feminino'];
const brandFilters = [
  'Todos',
  'Escolha Personalizada',
  'Dior',
  'Paco Rabanne',
  'Carolina Herrera',
  'Jean Paul Gaultier',
  'Ferrari',
  'Philipp Plein',
  'Armani',
  'Acqua di Giò',
  'CK',
  'Lattafa',
  'YSL',
];

const products = [
  { id: 'pr1', category: 'Masculino', brand: 'Paco Rabanne', name: 'Invictus', variant: '100ml', price: 400, type: 'EdT' },
  {
    id: 'custom1',
    category: 'Masculino',
    brand: 'Escolha Personalizada',
    name: 'Escolha Personalizada',
    variant: '',
    price: 0,
    type: ''
  },
  { id: 'pr2', category: 'Masculino', brand: 'Paco Rabanne', name: 'Invictus', variant: '200ml', price: 650, type: 'EdT' },
  { id: 'pr3', category: 'Masculino', brand: 'Paco Rabanne', name: 'One Million', variant: '100ml', price: 480, type: 'EdT' },
  { id: 'pr4', category: 'Masculino', brand: 'Paco Rabanne', name: 'One Million', variant: '200ml', price: 700, type: 'EdT' },
  { id: 'pr5', category: 'Masculino', brand: 'Paco Rabanne', name: 'One Million Elixir', variant: '100ml', price: 550, type: 'Elixir' },
  { id: 'pr6', category: 'Masculino', brand: 'Paco Rabanne', name: 'One Million Elixir', variant: '200ml', price: 750, type: 'Elixir' },
  { id: 'pr7', category: 'Masculino', brand: 'Paco Rabanne', name: 'One Million Parfum', variant: '100ml', price: 500, type: 'Parfum' },
  { id: 'pr8', category: 'Masculino', brand: 'Paco Rabanne', name: 'One Million Parfum', variant: '200ml', price: 800, type: 'Parfum' },
  { id: 'pr9', category: 'Masculino', brand: 'Paco Rabanne', name: 'Phantom', variant: '100ml', price: 580, type: 'EdT' },
  { id: 'pr10', category: 'Masculino', brand: 'Paco Rabanne', name: 'Phantom Intense', variant: 'EdP', price: 640, type: 'Intense' },
  { id: 'pr11', category: 'Masculino', brand: 'Paco Rabanne', name: 'Phantom Intense', variant: 'Parfum', price: 700, type: 'Intense' },
  { id: 'pr12', category: 'Masculino', brand: 'Carolina Herrera', name: '212', variant: '100ml', price: 450, type: 'EdT' },
  { id: 'pr13', category: 'Masculino', brand: 'Carolina Herrera', name: '212 Vip Black', variant: '100ml', price: 480, type: 'EdT' },
  { id: 'pr14', category: 'Masculino', brand: 'Carolina Herrera', name: '212 Vip Black', variant: '200ml', price: 550, type: 'EdT' },
  { id: 'pr15', category: 'Masculino', brand: 'Carolina Herrera', name: '212 Heroes Skate', variant: '90ml', price: 490, type: 'Masc' },
  { id: 'pr16', category: 'Feminino', brand: 'Carolina Herrera', name: '212 Heroes Skate', variant: '80ml', price: 590, type: 'Fem' },
  { id: 'pr17', category: 'Masculino', brand: 'Carolina Herrera', name: 'Bad Boy', variant: '100ml', price: 490, type: 'EdT' },
  { id: 'pr18', category: 'Masculino', brand: 'Carolina Herrera', name: 'Bad Boy', variant: '150ml', price: 650, type: 'EdT' },
  { id: 'pr19', category: 'Masculino', brand: 'Dior', name: 'Sauvage', variant: '100ml', price: 780, type: 'EdP' },
  { id: 'pr20', category: 'Masculino', brand: 'Dior', name: 'Sauvage', variant: '100ml', price: 590, type: 'EdT' },
  { id: 'pr21', category: 'Masculino', brand: 'Dior', name: 'Sauvage Elixir', variant: '100ml', price: 1300, type: 'Elixir' },
  { id: 'pr22', category: 'Masculino', brand: 'Dior', name: 'Sauvage', variant: '200ml', price: 1000, type: 'EdT' },
  { id: 'pr23', category: 'Feminino', brand: 'Jean Paul Gaultier', name: 'Scandal', variant: '100ml', price: 650, type: 'EdP' },
  { id: 'pr24', category: 'Feminino', brand: 'Jean Paul Gaultier', name: 'Scandal', variant: '100ml', price: 470, type: 'EdT' },
  { id: 'pr25', category: 'Feminino', brand: 'Jean Paul Gaultier', name: 'Scandal', variant: '80ml', price: 486, type: 'Fem' },
  { id: 'pr26', category: 'Feminino', brand: 'Jean Paul Gaultier', name: 'Scandal Absolu', variant: '80ml', price: 590, type: 'Absolu' },
  { id: 'pr27', category: 'Masculino', brand: 'Jean Paul Gaultier', name: 'Le Male Elixir', variant: '75ml', price: 500, type: 'Elixir' },
  { id: 'pr28', category: 'Masculino', brand: 'Jean Paul Gaultier', name: 'Le Male Elixir', variant: '125ml', price: 700, type: 'Elixir' },
  { id: 'pr29', category: 'Masculino', brand: 'Jean Paul Gaultier', name: 'Le Male Elixir', variant: '200ml', price: 950, type: 'Elixir' },
  { id: 'pr30', category: 'Masculino', brand: 'Jean Paul Gaultier', name: 'Le Male Elixir Intense', variant: '100ml', price: 785, type: 'Intense' },
  { id: 'pr31', category: 'Masculino', brand: 'Ferrari', name: 'Ferrari Black', variant: '100ml', price: 230, type: 'EdT' },
  { id: 'pr32', category: 'Masculino', brand: 'Philipp Plein', name: 'The Skull', variant: '100ml', price: 3000, type: 'Elixir' },
  { id: 'Masculino32', category: 'Masculino', brand: 'Armani', name: 'Armani Code', variant: '100ml', price: 600, type: 'EdT' },
  { id: 'Masculino33', category: 'Masculino', brand: 'Acqua di Giò', name: 'Acqua di Giò', variant: '100ml', price: 650, type: 'EdT' },
  { id: 'Masculino34', category: 'Masculino', brand: 'CK', name: 'CK One', variant: '100ml', price: 220, type: 'EdT' },
  { id: 'Masculino35', category: 'Masculino', brand: 'CK', name: 'CK Be', variant: '100ml', price: 170, type: 'EdT' },
  { id: 'Masculino36', category: 'Masculino', brand: 'Lattafa', name: 'Asad', variant: '100ml', price: 230, type: 'EdP' },
  { id: 'Masculino37', category: 'Feminino', brand: 'YSL', name: 'MY Self', variant: '60ml', price: 560, type: 'EdP' },
  { id: 'Masculino38', category: 'Feminino', brand: 'YSL', name: 'MY Self', variant: '100ml', price: 890, type: 'EdP' },
  { id: 'Feminino1', category: 'Feminino', brand: 'Carolina Herrera', name: 'CH 212', variant: '100ml', price: 490, type: 'EdT' },
  { id: 'Feminino2', category: 'Feminino', brand: 'Carolina Herrera', name: '212 Vip Rose', variant: '100ml', price: 500, type: 'EdT' },
  { id: 'Feminino3', category: 'Feminino', brand: 'Carolina Herrera', name: 'Good Girl', variant: '100ml', price: 620, type: 'EdP' },
  { id: 'Feminino4', category: 'Feminino', brand: 'Carolina Herrera', name: 'La Bomba', variant: '50ml', price: 520, type: '' },
  { id: 'Feminino5', category: 'Feminino', brand: 'Carolina Herrera', name: 'La Bomba', variant: '80ml', price: 720, type: '' },
  { id: 'Feminino6', category: 'Feminino', brand: 'Dior', name: 'Miss Dior', variant: '100ml', price: 800, type: 'EdP' },
  { id: 'Feminino7', category: 'Feminino', brand: 'Dior', name: 'J’adore', variant: '50ml', price: 640, type: '' },
  { id: 'Feminino8', category: 'Feminino', brand: 'Dior', name: 'J’adore', variant: '100ml', price: 780, type: '' },
];

const brandAccent = {
  Dior: 'linear-gradient(135deg, rgba(212,175,55,1) 0%, rgba(32,32,32,1) 100%)',
  'Paco Rabanne': 'linear-gradient(135deg, #2b2b2b, #9f7f4f)',
  'Carolina Herrera': 'linear-gradient(135deg, #2b1d18, #b78e48)',
  'Jean Paul Gaultier': 'linear-gradient(135deg, #1e1b1f, #93793f)',
  Ferrari: 'linear-gradient(135deg, #1d1b1c, #c74327)',
  'Philipp Plein': 'linear-gradient(135deg, #0a0a0a, #8d7253)',
  Armani: 'linear-gradient(135deg, #0d0d0d, #7f6b44)',
  'Acqua di Giò': 'linear-gradient(135deg, #11212f, #4c6a7a)',
  CK: 'linear-gradient(135deg, #101010, #6b6b6b)',
  Lattafa: 'linear-gradient(135deg, #1f1811, #6e553f)',
  'Escolha Personalizada': 'linear-gradient(135deg, #2b2b2b, #ffffff22)',
  YSL: 'linear-gradient(135deg, #1f1818, #99784f)',
};

const formatPrice = (value) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function App() {
  const [activeBrand, setActiveBrand] = useState('Todos');
  const [visibleCount, setVisibleCount] = useState(12);
  const [activeSlide, setActiveSlide] = useState(0);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => activeBrand === 'Todos' || product.brand === activeBrand);
  }, [activeBrand]);

  const groupedByCategory = useMemo(() => {
    return categories.map((category) => ({
      category,
      items: filteredProducts.filter((product) => product.category === category),
    }));
  }, [filteredProducts]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

  useEffect(() => {
    setVisibleCount(12);
  }, [activeBrand]);

  return (
    <div className="min-h-screen text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-white bg-opacity-95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="Cerqueira Imported" className="h-12 w-12 rounded-full border border-[#d4af37] bg-white p-2" />
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#4b4b4b]">Cerqueira</p>
              <p className="text-xl font-semibold text-[#111111]">Imported</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#colecao" className="text-sm uppercase tracking-[0.2em] text-[#111111] hover:text-[#d4af37]">Coleção</a>
            <a href="#vitrine" className="text-sm uppercase tracking-[0.2em] text-[#111111] hover:text-[#d4af37]">Vitrine</a>
            <a href="#contato" className="text-sm uppercase tracking-[0.2em] text-[#111111] hover:text-[#d4af37]">Contato</a>
          </nav>
          <div className="flex items-center gap-3 rounded-full bg-[#111111] px-4 py-2 text-sm text-[#f7f2eb] shadow-soft">
            <span className="text-[#d4af37]">Luxo</span>
            <span>Premium</span>
          </div>
        </div>
      </header>

      <main className="space-y-16">
        <section id="top" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/40 via-[#000000]/20 to-transparent" />
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 lg:flex-row lg:py-16">
            <div className="relative z-10 flex w-full flex-col gap-6 text-center lg:w-2/5 lg:text-left">
              <span className="inline-flex rounded-full border border-[#d4af37] bg-black/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#d4af37]">
                Perfumaria de luxo</span>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Elegância rara, seleção internacional e atendimento VIP.
              </h1>
              <p className="max-w-xl text-sm leading-7 text-[#e6e1dc]">
                Descubra a curadoria Cerqueira Imported com marcas icônicas, cardápio de produtos exclusivos e vitrine infinita organizada por categoria.
              </p>
              <div className="mx-auto flex flex-col gap-4 sm:flex-row lg:mx-0">
                <a href="#vitrine" className="rounded-full bg-[#d4af37] px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black shadow-luxury transition hover:bg-[#bf9b2f]">
                  Ver Vitrine</a>
                <a href="https://wa.me/554898098886?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20vendedor!" target="_blank" rel="noreferrer" className="rounded-full border border-[#d4af37] bg-black/70 px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#111111]">
                  Atendimento</a>
              </div>
            </div>
            <div className="relative z-10 w-full lg:w-3/5">
              <div className="aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/10 shadow-luxury">
                {banners.map((banner, index) => (
                  <img
                    key={banner}
                    src={banner}
                    alt={`Banner ${index + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#f5f1e7]">
                  Novas edições a cada estação</div>
              </div>
            </div>
          </div>
        </section>

        <section id="colecao" className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">Coleção</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Vitrine infinita por categoria e marca</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[#d7d1c8]">
              Navegue por produtos premium do universo masculino e feminino com filtros rápidos e experiência sem recarga.
            </p>
          </div>

          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-[#0f0b09]/80 p-5 shadow-soft md:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">Filtrar por marca</p>
              <div className="flex flex-wrap gap-3">
                {brandFilters.map((brand) => (
                  <button
                    key={brand}
                    type="button"
                    onClick={() => setActiveBrand(brand)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      brand === 'Escolha Personalizada'
                        ? activeBrand === brand
                          ? 'border-white bg-white text-black font-semibold'
                          : 'border-white bg-white/10 text-white font-semibold hover:bg-white hover:text-black'
                        : activeBrand === brand
                          ? 'border-gold bg-[#d4af37] text-black'
                          : 'border-white/10 bg-white/5 text-[#f1eee7] hover:border-[#d4af37] hover:text-[#d4af37]'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] bg-[#14100e] p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">Seleção atual</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{activeBrand === 'Todos' ? 'Todas as marcas' : activeBrand}</h3>
              <p className="mt-3 text-sm leading-6 text-[#d7d1c8]">Exibindo {visibleProducts.length} de {filteredProducts.length} produtos.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <span key={cat} className="rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#ddd]">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="vitrine" className="mx-auto max-w-7xl px-6 pb-16">
          {groupedByCategory.map(({ category, items }) => {
            const visibleInSection = items.filter((item) => visibleProducts.includes(item));
            if (!visibleInSection.length) return null;
            return (
              <div key={category} className="mb-12">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">{category}</p>
                    <h3 className="mt-2 text-3xl font-semibold text-white">Seleção {category.toLowerCase()}</h3>
                  </div>
                  <div className="rounded-full bg-white/5 px-4 py-2 text-sm text-[#e4ddd3]">
                    {visibleInSection.length} produtos disponíveis
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {(() => {
                    const regularProducts = visibleInSection.filter((p) => p.id !== 'custom1');
                    const customProduct = visibleInSection.find((p) => p.id === 'custom1');
                    const orderedProducts = customProduct ? [...regularProducts, customProduct] : regularProducts;
                    return orderedProducts.map((product) => (
                      <article key={product.id} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0e0a08] shadow-luxury transition hover:-translate-y-1 hover:shadow-soft">
                        <div
                          className="aspect-[4/5] bg-cover bg-center p-5"
                          style={{ backgroundImage: brandAccent[product.brand] || 'linear-gradient(135deg, #151515, #3c2f24)' }}
                        >
                          <div className="flex h-full flex-col justify-between rounded-[1.75rem] bg-black/30 p-5 text-white backdrop-blur-sm">
                            <div className="w-full rounded-[1rem] bg-white/90 p-3">
                              <img
                                src={`/assets/perfumes/${product.id}.png`}
                                alt={product.name}
                                className="mx-auto w-full object-contain aspect-[4/3]"
                              />
                            </div>
                            <div className="space-y-3">
                              <span className="inline-flex rounded-full bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-[#d4af37]">{product.brand}</span>
                              <h4 className="text-2xl font-semibold leading-tight">{product.name}</h4>
                            </div>
                            <div className="space-y-2">
                              <p className="text-sm uppercase tracking-[0.2em] text-white/80">{product.variant}</p>
                              {product.brand === 'Escolha Personalizada' ? (
                                <a
                                  href="https://wa.me/554898098886?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20meu%20pedido%20personalizado%20com%20o%20vendedor!"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="block w-full rounded-3xl bg-[#25d366] px-4 py-3 text-center text-base font-semibold text-white shadow-lg transition hover:bg-[#1ebe5d]"
                                >
                                  💬 Solicitar no WhatsApp
                                </a>
                              ) : (
                                <div className="rounded-3xl bg-white/90 px-4 py-3 text-xl font-semibold text-[#042d16] shadow-lg shadow-[#0a360c]/20">
                                  {formatPrice(product.price)}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3 p-6">
                          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#d4af37]">
                            <span>{product.type || 'Exclusivo'}</span>
                            <span>{product.category}</span>
                          </div>
                          <p className="text-sm leading-6 text-[#dcd5cc]">
                            {product.brand === 'Escolha Personalizada'
                              ? 'Tem um perfume em mente? Solicite aqui e nós encontramos para você!'
                              : 'Perfume de perfumaria selecionada com design atemporal, acabamento premium e experiência olfativa sofisticada.'}
                          </p>
                        </div>
                      </article>
                    ));
                  })()}
                </div>
              </div>
            );
          })}

          {visibleProducts.length < filteredProducts.length && (
            <div className="mx-auto mt-6 flex max-w-5xl justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((current) => Math.min(current + 8, filteredProducts.length))}
                className="rounded-full bg-[#d4af37] px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#bf9b2f]"
              >
                Carregar mais
              </button>
            </div>
          )}
        </section>
      </main>

      <a
        id="contato"
        href="https://wa.me/554898098886?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20vendedor!"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 rounded-full bg-[#25d366] px-5 py-4 text-sm font-semibold text-white shadow-[0_24px_60px_rgba(37,211,102,0.28)] transition-transform duration-200 hover:-translate-y-1"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b6624] text-xl">💬</span>
        WhatsApp
      </a>
    </div>
  );
}

export default App;
