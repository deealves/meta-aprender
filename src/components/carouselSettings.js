// Configurações base para os carrosséis
const baseSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// Configuração para o carrossel principal de professores (7 itens)
export const mainCarouselSettings = {
  ...baseSettings,
  slidesToShow: 5,
  slidesToScroll: 2,
};

// Configuração para os outros carrosséis (5 itens)
export const secondaryCarouselSettings = {
  ...baseSettings,
  slidesToShow: 5, // ✨ ALTERADO DE 4 PARA 5 ✨
  slidesToScroll: 1, // Ajustado para 1 para o caso de mais cards serem adicionados
};
