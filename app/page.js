'use client';

import { useEffect } from 'react';

const siteHtml = String.raw`<!-- ==========================================
       1. HEADER / MENU
       ========================================== -->
    <header>
        <div class="container header-container">
            <a href="#" class="logo">
                <div class="logo-icon">
                    <i class="fa-solid fa-dog"></i>
                </div>
                <span>Patudos Alegres</span>
            </a>

            <nav class="nav-links" id="navLinks">
                <a href="#inicio">Início</a>
                <a href="#sobre">Sobre nós</a>
                <a href="#servicos">Serviços</a>
                <a href="#galeria">Galeria</a>
                <a href="#promocoes">Promoções</a>
                <a href="#contato">Contato</a>
            </nav>

            <a href="https://wa.me/5547999085497?text=Olá!%20Gostaria%20de%20agendar%20um%20atendimento%20para%20o%20meu%20pet.%20🐶🐾" target="_blank" class="btn btn-primary" class="btn btn-primary desktop-schedule-btn">
                <i class="fa-brands fa-whatsapp"></i> Agendar atendimento
            </a>

            <div class="hamburger">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    </header>

    <!-- ==========================================
       2. HERO SECTION
       ========================================== -->
    <section class="hero" id="inicio">
        <i class="fa-solid fa-paw patinha-bg" style="top: 15%; left: 5%;"></i>
        <i class="fa-solid fa-heart patinha-bg" style="top: 70%; left: 8%;"></i>
        <i class="fa-solid fa-paw patinha-bg" style="top: 20%; right: 5%;"></i>

        <div class="container hero-grid">
            <div class="hero-content">
                <h1>Seu pet merece todo esse carinho ❤️</h1>
                <p>Banho, tosa e cuidados especiais para deixar seu melhor amigo ainda mais feliz.</p>
                <div class="hero-buttons">
                    <a href="https://wa.me/5547999085497?text=Olá!%20Gostaria%20de%20agendar%20um%20atendimento%20para%20o%20meu%20pet.%20🐶🐾" target="_blank" class="btn btn-primary">
                        <i class="fa-brands fa-whatsapp"></i> Agendar pelo WhatsApp
                    </a>
                    <a href="#servicos" class="btn btn-secondary">Conheça nossos serviços</a>
                </div>
                <div class="hero-trust">
                    <i class="fa-solid fa-shield-dog"></i>
                    <span>Cuidado, carinho e dedicação em cada atendimento.</span>
                </div>
            </div>
            <div class="hero-image-wrapper">
                <div class="hero-img-bg">
                    <!-- Foto real/simulada inspirada nas fotos do Instagram após banho e tosa -->
                    <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600" alt="Cachorro feliz após banho e tosa no Patudos Alegres" class="hero-img">
                </div>
            </div>
        </div>
    </section>

    <!-- ==========================================
       3. SOBRE NOS
       ========================================== -->
    <section class="sobre section-padding" id="sobre">
        <div class="container sobre-grid">
            <div>
                <h2 class="titulo-secao">Cuidando de quem faz parte da sua família 🐾</h2>
                <p class="subtitulo-secao">Conheça o espaço Patudos Alegres em Joinville - SC</p>
                <p class="sobre-texto">
                    No <strong>Patudos Alegres</strong>, seu pet recebe muito mais do que um banho ou uma tosa. Cada atendimento é feito com carinho, cuidado e atenção, para que seu melhor amigo se sinta confortável, seguro e verdadeiramente bem cuidado.
                </p>
                <div class="diferenciais-cards">
                    <div class="diferencial-card">🐾 Atendimento com carinho</div>
                    <div class="diferencial-card">✂️ Banho e tosa</div>
                    <div class="diferencial-card">🚕 Táxi Dog</div>
                    <div class="diferencial-card">🏠 Delivery de ração</div>
                    <div class="diferencial-card">❤️ Cuidado especial</div>
                </div>
            </div>
        </div>
    </section>

    <!-- ==========================================
       4. SERVIÇOS
       ========================================== -->
    <section class="servicos section-padding" id="servicos">
        <div class="container text-center">
            <h2 class="titulo-secao">Nossos Serviços 💖</h2>
            <p class="subtitulo-secao">Tudo o que seu pet precisa para ficar limpinho e saúdavel</p>

            <div class="servicos-grid">
                <div class="servico-card">
                    <div>
                        <div class="servico-icone">🛁</div>
                        <h3>Banho</h3>
                        <p>Um banho completo para deixar seu pet limpo, cheiroso e confortável.</p>
                    </div>
                    <a href="https://wa.me/5547999085497" target="_blank" class="btn btn-secondary">Quero agendar</a>
                </div>

                <div class="servico-card">
                    <div>
                        <div class="servico-icone">✂️</div>
                        <h3>Tosa</h3>
                        <p>Cuidados especiais de corte e higiene para manter seu pet bonito e confortável.</p>
                    </div>
                    <a href="https://wa.me/5547999085497" target="_blank" class="btn btn-secondary">Quero agendar</a>
                </div>

                <div class="servico-card">
                    <div>
                        <div class="servico-icone">🐶</div>
                        <h3>Estética Animal</h3>
                        <p>Cuidados de estética para deixar seu melhor amigo ainda mais bonito.</p>
                    </div>
                    <a href="https://wa.me/5547999085497" target="_blank" class="btn btn-secondary">Quero agendar</a>
                </div>

                <div class="servico-card">
                    <div>
                        <div class="servico-icone">🚕</div>
                        <h3>Táxi Dog</h3>
                        <p>Facilidade e segurança para buscar e levar seu pet no conforto de casa.</p>
                    </div>
                    <a href="https://wa.me/5547999085497" target="_blank" class="btn btn-secondary">Consultar</a>
                </div>

                <div class="servico-card">
                    <div>
                        <div class="servico-icone">🍖</div>
                        <h3>Delivery de Ração</h3>
                        <p>Receba a alimentação e os petiscos do seu pet sem precisar sair de casa.</p>
                    </div>
                    <a href="https://wa.me/5547999085497" target="_blank" class="btn btn-secondary">Pedir Ração</a>
                </div>
            </div>
        </div>
    </section>

    <!-- ==========================================
       5. DESTAQUE BANHO E TOSA
       ========================================== -->
    <section class="banho-tosa section-padding">
        <div class="container banho-tosa-grid">
            <div>
                <h2 class="titulo-secao">Seu pet limpinho, cheiroso e feliz 🛁🐶</h2>
                <p style="margin-top: 15px; color: #555;">Proporcionamos um dia de SPA e carinho com equipamentos higienizados e produtos de altíssima qualidade.</p>
                
                <div class="beneficios-list">
                    <div class="beneficio-item"><i class="fa-solid fa-check-circle"></i> Banho completo</div>
                    <div class="beneficio-item"><i class="fa-solid fa-check-circle"></i> Higienização</div>
                    <div class="beneficio-item"><i class="fa-solid fa-check-circle"></i> Secagem</div>
                    <div class="beneficio-item"><i class="fa-solid fa-check-circle"></i> Tosa higiênica/tesoura</div>
                    <div class="beneficio-item"><i class="fa-solid fa-check-circle"></i> Cuidados com o pelo</div>
                    <div class="beneficio-item"><i class="fa-solid fa-check-circle"></i> Atendimento com carinho</div>
                </div>

                <a href="https://wa.me/5547999085497?text=Olá!%20Gostaria%20de%20agendar%20um%20banho%20e%20tosa.%20🐶" target="_blank" class="btn btn-primary">
                    <i class="fa-brands fa-whatsapp"></i> Agendar banho e tosa
                </a>
            </div>
            <div class="banho-tosa-img">
                <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600" alt="Cachorro fofo tomando banho">
            </div>
        </div>
    </section>

    <!-- ==========================================
       6. GALERIA (FEED INSTAGRAM)
       ========================================== -->
    <section class="galeria section-padding" id="galeria">
        <div class="container text-center">
            <h2 class="titulo-secao">Olha só quem já passou por aqui 🐶❤️</h2>
            <p class="subtitulo-secao">Alguns dos nossos clientes depois de receberem aquele cuidado especial.</p>

            <div class="galeria-grid">
                <!-- As imagens abaixo foram baseadas nos estilos dos clientes reais do Instagram (Shih Tzus, Golden Retrievers com lacinhos, etc.) -->
                <div class="galeria-item">
                    <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400" alt="Cachorrinho tosado com lacinho">
                    <div class="galeria-overlay"><i class="fa-brands fa-instagram"></i></div>
                </div>
                <div class="galeria-item">
                    <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=400" alt="Pet feliz após banho">
                    <div class="galeria-overlay"><i class="fa-brands fa-instagram"></i></div>
                </div>
                <div class="galeria-item">
                    <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=400" alt="Golden Retriever sorridente">
                    <div class="galeria-overlay"><i class="fa-brands fa-instagram"></i></div>
                </div>
                <div class="galeria-item">
                    <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" alt="Cão limpinho e penteado">
                    <div class="galeria-overlay"><i class="fa-brands fa-instagram"></i></div>
                </div>
            </div>
        </div>
    </section>

    <!-- ==========================================
       7. INSTAGRAM SECTION
       ========================================== -->
    <section class="instagram-section">
        <div class="container">
            <div class="insta-box">
                <i class="fa-brands fa-instagram" style="font-size: 3rem; color: var(--rosa-vibrante); margin-bottom: 10px;"></i>
                <h2 style="margin-bottom: 5px;">Acompanhe nossos Patudos ❤️</h2>
                <a href="https://www.instagram.com/patudosalegres/" target="_blank" class="insta-handle">@patudosalegres</a>
                <p style="color: #666; margin-bottom: 20px;">Veja nossos trabalhos, promoções e nossos clientes fofos todos os dias.</p>
                <a href="https://www.instagram.com/patudosalegres/" target="_blank" class="btn btn-primary">
                    Ver Instagram
                </a>
            </div>
        </div>
    </section>

    <!-- ==========================================
       8. PROMOÇÕES
       ========================================== -->
    <section class="promocoes section-padding" id="promocoes">
        <div class="container">
            <div class="promo-container">
                <h2>PROMOÇÕES ESPECIAIS 🐾</h2>
                <p>Cuide do seu pet e aproveite nossas ofertas ativas!</p>

                <div class="promo-grid">
                    <div class="promo-card">
                        <h3>Combo Banho e Tosa</h3>
                        <p>Pacotes especiais semanais e mensais para manter a higiene do seu pet em dia.</p>
                    </div>
                    <div class="promo-card">
                        <h3>Promoção de Rações</h3>
                        <p>Descontos especiais em marcas selecionadas (Origens, Simparic e muito mais).</p>
                    </div>
                    <div class="promo-card">
                        <h3>Brinde Surpresa</h3>
                        <p>Nas compras de produtos selecionados, ganhe mimos exclusivos para o seu pet!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ==========================================
       9. PRODUTOS
       ========================================== -->
    <section class="produtos section-padding">
        <div class="container text-center">
            <h2 class="titulo-secao">Produtos Selecionados 🦴</h2>
            <p class="subtitulo-secao">Linha completa de alimentação, cuidados e higiene para cães</p>

            <div class="produtos-grid">
                <div class="produto-card">
                    <img src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=300" alt="Ração Premium" class="produto-img">
                    <div class="produto-categoria">🍖 Rações</div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 10px;">Rações Premium e Super Premium</h3>
                    <a href="https://wa.me/5547999085497?text=Olá!%20Gostaria%20de%20consultar%20as%20opções%20de%20rações." target="_blank" class="btn btn-secondary" style="padding: 8px 16px; font-size: 0.85rem;">Consultar pelo WhatsApp</a>
                </div>

                <div class="produto-card">
                    <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=300" alt="Petiscos" class="produto-img">
                    <div class="produto-categoria">🦴 Petiscos</div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 10px;">Petiscos e Ossinhos</h3>
                    <a href="https://wa.me/5547999085497?text=Olá!%20Gostaria%20de%20consultar%20os%20petiscos%20disponíveis." target="_blank" class="btn btn-secondary" style="padding: 8px 16px; font-size: 0.85rem;">Consultar pelo WhatsApp</a>
                </div>

                <div class="produto-card">
                    <img src="https://images.unsplash.com/photo-1585559700398-1385b3a8a360?auto=format&fit=crop&q=80&w=300" alt="Higiene Pet" class="produto-img">
                    <div class="produto-categoria">🧴 Higiene</div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 10px;">Shampoos e Antipulgas</h3>
                    <a href="https://wa.me/5547999085497?text=Olá!%20Gostaria%20de%20consultar%20produtos%20de%20higiene." target="_blank" class="btn btn-secondary" style="padding: 8px 16px; font-size: 0.85rem;">Consultar pelo WhatsApp</a>
                </div>

                <div class="produto-card">
                    <img src="https://images.unsplash.com/photo-1608408891486-ebb2392fae2e?auto=format&fit=crop&q=80&w=300" alt="Acessórios Pet" class="produto-img">
                    <div class="produto-categoria">🐾 Acessórios</div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 10px;">Coleiras, Guias e Brinquedos</h3>
                    <a href="https://wa.me/5547999085497?text=Olá!%20Gostaria%20de%20consultar%20os%20acessórios." target="_blank" class="btn btn-secondary" style="padding: 8px 16px; font-size: 0.85rem;">Consultar pelo WhatsApp</a>
                </div>
            </div>
        </div>
    </section>

    <!-- ==========================================
       10. LOCALIZAÇÃO E CONTATO
       ========================================== -->
    <section class="localizacao section-padding" id="contato">
        <div class="container loc-grid">
            <div class="loc-info">
                <h2 class="titulo-secao">Venha nos visitar 🐾</h2>
                <p style="margin-bottom: 25px; color: #666;">Estamos prontos para receber você e seu amiguinho de braços abertos!</p>
                
                <p><i class="fa-solid fa-location-dot"></i> <strong>Endereço:</strong> R. Senador Rodrigo Lobo, 1682 - Jardim Iririú, Joinville - SC</p>
                <p><i class="fa-brands fa-whatsapp"></i> <strong>WhatsApp:</strong> (47) 99908-5497</p>
                <p><i class="fa-brands fa-instagram"></i> <strong>Instagram:</strong> @patudosalegres</p>
                <p><i class="fa-solid fa-taxi"></i> <strong>Serviços Especiais:</strong> Táxi Dog & Delivery de Ração</p>
                
                <div style="margin-top: 25px;">
                    <a href="https://maps.google.com/?q=Rua+Senador+Rodrigo+Lobo+1682+Jardim+Iririu+Joinville+SC" target="_blank" class="btn btn-primary">
                        <i class="fa-solid fa-route"></i> Como chegar
                    </a>
                </div>
            </div>

            <div class="mapa-container">
                <!-- Google Maps iframe direcionado ao endereço exato em Joinville - SC -->
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.534882198083!2d-48.8188165!3d-26.2767784!2m3!1f0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb019bc2e1ddf%3A0x6b107e32a688b77a!2sR.%20Sen.%20Rodrigo%20Lobo%2C%201682%20-%20Jardim%20Iriri%C3%BA%2C%20Joinville%20-%20SC%2C%2089224-021!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy">
                </iframe>
            </div>
        </div>
    </section>

    <!-- ==========================================
       11. CALL TO ACTION (WHATSAPP)
       ========================================== -->
    <section class="cta-whatsapp">
        <div class="container">
            <h2>Quer deixar seu pet ainda mais lindo? ❤️️</h2>
            <p style="font-size: 1.1rem; color: #555; margin-bottom: 25px;">Entre em contato com a gente e agende o atendimento do seu pet.</p>
            <a href="https://wa.me/5547999085497?text=Olá!%20Gostaria%20de%20agendar%20um%20atendimento%20para%20o%20meu%20pet.%20🐶🐾" target="_blank" class="btn btn-whatsapp" style="padding: 16px 36px; font-size: 1.1rem;">
                <i class="fa-brands fa-whatsapp" style="font-size: 1.4rem;"></i> Agendar pelo WhatsApp
            </a>
        </div>
    </section>

    <!-- ==========================================
       12. FOOTER
       ========================================== -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div>
                    <div class="logo" style="color: var(--branco); margin-bottom: 15px;">
                        <div class="logo-icon">
                            <i class="fa-solid fa-dog"></i>
                        </div>
                        <span>Patudos Alegres</span>
                    </div>
                    <p style="font-size: 0.95rem; color: rgba(255,255,255,0.8);">Cuidando de quem faz parte da sua família. 🐾❤️</p>
                    <div class="social-icons">
                        <a href="https://www.instagram.com/patudosalegres/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://wa.me/5547999085497" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>

                <div class="footer-col">
                    <h4>Links Rápidos</h4>
                    <ul>
                        <li><a href="#inicio">Início</a></li>
                        <li><a href="#sobre">Sobre nós</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#galeria">Galeria</a></li>
                        <li><a href="#promocoes">Promoções</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Serviços</h4>
                    <ul>
                        <li>Banho e Tosa</li>
                        <li>Estética Animal</li>
                        <li>Táxi Dog</li>
                        <li>Delivery de Ração</li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Atendimento</h4>
                    <p style="font-size: 0.9rem; color: rgba(255,255,255,0.8);">Rua Senador Rodrigo Lobo, 1682 - Jardim Iririú, Joinville - SC</p>
                    <p style="font-size: 0.9rem; color: rgba(255,255,255,0.8); margin-top: 8px;">(47) 99908-5497</p>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; Patudos Alegres Pet Shop. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
`;

export default function Home() {
  useEffect(() => {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    if (!navLinks || !hamburger) return;

    const toggleMenu = () => navLinks.classList.toggle('active');
    const closeMenu = () => navLinks.classList.remove('active');

    hamburger.addEventListener('click', toggleMenu);
    navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

    return () => {
      hamburger.removeEventListener('click', toggleMenu);
      navLinks.querySelectorAll('a').forEach((link) => link.removeEventListener('click', closeMenu));
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: siteHtml }} />;
}
