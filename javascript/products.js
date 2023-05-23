const products = [
    {
        id: 0,
        name: "Carro de Limpeza - Vileda",
        brand: "Vileda",
        price: 141.23,
        description: "<h6>Rápido, limpo e fácil</h6>Projetado para todas as tarefas gerais de limpeza do piso de grandes dimensões, conta com uma prensa fácil de usar, alças integradas e um inovador chassi de balde duplo. O segundo balde permite que a prensa seja montada no centro dos balde ou na parte de trás do sistema.Com o exclusivo perfil dianteiro e traseiro, garante que não haja água entre os cubos. Se desejar, pode usar o segundo balde para transportar utensílios de limpeza. Estão disponíveis também barra para empurrar ergonômica e uma variedade de diferentes mopas dependendo das aplicações.<p></p><h6>Benefícios do produto</h6><ul><li>Versão de balde duplo. O sistema mais rápido para a limpeza com baldes de microfibra e prensa</li><li>O segundo balde permite que o sistema seja usado com a prensa na parte central ou traseira do sistema.</li><li>Os kits de inicio contêm sistema de mopa plana com suporte e prensa.</li></ul>",
        imgSrc: "images/products/carroLimpeza.jpg",
        cart: false,
        imgGroupSrc: ["../images/products/carroLimpeza.jpg ", "../images/products/carroLimpeza2.jpg ", "../images/products/carroLimpeza3.jpg ", "../images/products/carroLimpeza4.jpg "]

    },
    {
        id: 1,
        name: "Máquina de limpeza rotativa - Comac",
        brand: "Comac",
        price: 230,
        description: "O peso que incide directamente no pavimento combinado com os seus motores potentes significa que o operador pode obter excelentes resultados de polimento.<br>A capacidade elevada do tanque (15L) e a sua robustez são uma vantagem. Não necessita de nenhuma ferramenta para ser instalado, pode ser manuseado facilmente e rapidamente.<br>Pega ergonómica multi-posições e distribuição controlada dos pesos para proporcionar uma postura correcta, equilíbrio e conforto elevado ao operador.<br>Equipada com um novo grupo redutor e com engrenagens de nylon, o que permite um maior rendimento, maior fiabilidade e um nível acústico reduzido. Pode, a pedido, trabalhar com um grupo redutor com engrenagens em aço para utilizações pesadas.Graças ao design da máquina, o centro de gravidade do tanque actua como pressão extra para conseguir melhores resultados de polimento sem esforço, tudo isto sem comprometer o equilíbrio da máquina. Não necessita de manutenção, por isso, é fácil de usar.",
        imgSrc: "images/products/maquinaRotativa.jpg",
        cart: false,
        imgGroupSrc: ["../images/products/maquinaRotativa.jpg ","../images/products/maquinaRotativa2.jpg ", "../images/products/maquinaRotativa3.jpg ", "../images/products/maquinaRotativa4.jpg "]

    },
    {
        id: 2,
        name: "Dispensador Automático de sabão líquido - GlobalAqua",
        brand: "GlobalAqua",
        price: 55.28,
        description: "<span><h6>Dispensador automático de sabão com sensores infravermelhos e aviso de bateria fraca através de um indicador LED pulsante.</h6><ul><li>Aviso para substituição das pilhas</li><li>Ativado por sensor de infravermelhos</li><li>Funciona com todo o sabonete líquido, higienizador de mãos e gel</li><li>5 dosagens para escolha</li><li>Deposito de grande capacidade</li><li>Fabricado em aço inoxidável 304</li></ul><p></p><h6>Higiénico, Sem contacto e Sem Bactérias<br>Com sensor infravermelho para um funcionamento sem contacto.</h6>Reduz a transmissão de bactérias e microrganismos. Fornece uma solução conveniente e higiénica para a lavagem e desinfecção das mãos.<p></p><h6>Fabricado em aço inoxidável 304</h6>Uma combinação inspirada de design, estilo e funcionalidade. Este acessório de casa de banho resistirá a uma utilização intensiva e ao desgaste diário.<p></p><h6>Fácil de recarregar</h6>Funciona com todos os tipos de sabão líquido, higienizador de mãos e gel. Poupa dinheiro ao não precisar de recargas específicas. A grande abertura de recarga facilita o reabastecimento sem pingar.</span>",
        imgSrc: "images/products/dispensador.jpg ",
        cart: false,
        imgGroupSrc: ["../images/products/dispensador.jpg ", "../images/products/dispensador2.jpg ", "../images/products/dispensador3.jpg ", "../images/products/dispensador4.jpg "]
    },
    {
        id: 3,
        name: "Espuma para mãos - DEB STOKO",
        brand: "DEB STOKO",
        price: 11.17,
        description: "<span>Espuma suave biodegradável para a lavagem das mãos, com agentes hidratantes adicionados e levemente perfumada com uma fragrância exclusiva de fruta fresca. Limpa as mãos eliminando mais de 99% da sujidade e dos germes.<p></p><h6>Indicações</h6>Áreas de lavabos em escritórios, centros educativos, infantários, instalações públicas, cuidados de saúde e assistência à terceira idade.<ul><li><strong>Fragrância exclusiva - </strong>Uma fragrância de fruta fresca com notas cuidadas, limpas e agradavelmente frescas que elevam a experiência de lavagem para o uso diário. Foi comprovado que tem uma ampla aceitação entre os utilizadores dos lavabos.</li><li><strong>Fórmula delicada - </strong>Testado dermatologicamente para verificar e confirmar que este produto não provoca irritação dérmica.</li><li><strong>Conservante suave - </strong>Formulado especialmente com um dos conservantes mais suaves para reduzir o risco de irritação da pele derivado do uso deste produto.</li><li><strong>Contém glicerina - </strong>Um emoliente cutâneo que ajuda a prevenir o ressecamento deixando uma sensação de suavidade na pele após o uso.</li></ul></span>",
        imgSrc: "images/products/espuma.jpg",
        cart: false,
        imgGroupSrc:["../images/products/espuma.jpg","../images/products/espuma2.jpg", "../images/products/espuma3.jpg", "../images/products/espuma4.jpg"],
        opcao: ["1L", "1.2L", "2L"]
    },
    {
        id: 4,
        name: "Amaciador de Roupa - Egiquímica",
        brand: "Egiquímica",
        price: 5.99,
        description: "<span>Amaciador têxtil perfumado com aroma floral, suaviza as fibras têxteis nos processos de lavagem manual e à máquina.<br>Vendido em unidades de 5, 10, ou 20 Litros.</span>",
        imgSrc: "images/products/amaciador.jpg",
        cart: false,
        imgGroupSrc:["../images/products/amaciador.jpg", "../images/products/amaciador2.jpg", "../images/products/amaciador3.jpg", "../images/products/amaciador4.jpg"],
        opcao: ["5L", "10L", "20L"]
    },
    {
        id: 5,
        name: "UriWave - Ambientador de Parede Intensity - Recargas",
        brand: "UriWave",
        price: 4.95,
        description: "<span>O ambientador de Parede Intensity da UriWave é único ambientador no mundo que utiliza a tampa como recarga ambientadora. Agora, em vez de abrir o ambientador, retirar a recarga antiga, colocar a nova recarga e voltar a fechar o ambientado, basta retirar a tampa e substituí-la por uma nova.<br>Cada tampa é composta por um material único que contém o dobro da fragrância que o melhor dos ambientadores convencionais e que vai ser libertada durante 30 dias</span>",
        imgSrc: "images/products/ambientador.jpg",
        cart: false,
        imgGroupSrc:["../images/products/ambientador.jpg", "../images/products/ambientador2.jpg", "../images/products/ambientador3.jpg", "../images/products/ambientador4.jpg"],
        opcao: ["Manga", "Tutti Frutti", "Oceano"]
    },

    {
        id: 6,
        name: "Clip Ambientador SaniClip da UriWave",
        brand: "UriWave",
        price: 3.95,
        description: "<span><h6>Ambientadores para Sanitas SaniClip da Uriwave.</h6>Utilizável nas sanitas mais comuns. Fixado no exterior da sanita. Encolhe à medida que a fragrância se evapora.<p></p>Material patenteado que contém até 30x mais fragrância que os produtos tradicionais Liberta fragrância durante 30 dias.</span>",
        imgSrc: "images/products/ClipAmbientador.jpg",
        cart: false,
        imgGroupSrc: ["../images/products/ClipAmbientador2.jpg ", "../images/products/ClipAmbientador3.jpg ", "../images/products/ClipAmbientador4.jpg ", "../images/products/ClipAmbientador5.jpg"],
        opcao: ["Tutti Frutti", "Herbal Mint", "Manga", "Oceano"]
    },
    {
        id: 7,
        name: "Papel higiénico Industrial Jumbo Amoos - 75 Metros",
        brand: "Amoos",
        price: 8.71,
        description: "<span>Papel higiénico industrial jumbo Amoos com 75 metros e folha dupla. Embalagem de 12 rolos ao melhor preço.<br>O nosso papel higiénico industrial jumbo Amoos são ideais para cafés, pastelarias, bares, restaurantes. Embalagem de 12 rolos com 75 metros cada, ao melhor preço.<br><h6>Características:</h6><ul><li>Quantidade por embalagem: 12 rolos;</li><li>Qualidade do papel: Branco, 100% Fibra Virgem;</li><li>Nº de folhas: Folha dupla (2 folhas);</li><li>Pré-corte: Sim;</li><li>Gramagem: 30 g/m2 ( ± 5% );</li><li>Comprimento: 75 metros ( ± 5% );</li><li>Numero de Serviços: 214 ( ± 5% );</li><li>Dimensões do serviço: 350x86 mm ( ± 5% );</li></ul></span>",
        imgSrc: "images/products/papelHigiénico3.jpg",
        cart: false,
        imgGroupSrc:["../images/products/papelHigiénico3.jpg", "../images/products/papelHigiénico2.jpg", "../images/products/papelHigiénico.jpg"]
    },
    {
        id: 8,
        name: "Lava Tudo Multiusos Perfumado Bérrio - 5 Litros",
        brand: "Bérrio",
        price: 4.45,
        description: "<span>Lava tudo multiusos perfumado Bérrio de 5 Litros, destinado à lavagem e limpeza de todo o tipo de superfícies e pavimentos laváveis.<p></p>Detergente lava tudo multiusos perfumado Bérrio remove gorduras e odores de todas as superfícies. Limpa em profundidade sem riscar ou danificar as superfícies.<p></p>Confere um bom acabamento às superfícies deixando-as limpas e com um perfume agradável.<p></p>O produto não é tóxico nem irrita a pele quando manuseado. Produto Biodegradável.<p></p><h6>CAMPOS DE APLICAÇÃO</h6><ul><li>O produto é recomendado em todos os trabalhos nos quais se pretende uma limpeza e higienização simultânea em hospitais, fábricas, casas de banho, átrios, salas, escolas, escritórios, hotéis, etc.</li><li>Também é recomendado na lavagem de recipientes, bancadas, etc.</li></ul></span>",
        imgSrc: "images/products/lavaTudo.jpg",
        cart: false,
        imgGroupSrc:["../images/products/lavaTudo2.jpg", "../images/products/lavaTudo3.jpg", "../images/products/lavaTudo4.jpg", "../images/products/lavaTudo5.jpg"],
        opcao: ["Limão", "Lavanda", "Floral", "Aloé Vera"]

    },
    {
        id: 9,
        name: "Dispensador de Papel de Higiénico Smart - Preto",
        brand: "Bérrio",
        price: 7.99,
        description: "<span>Dispensador de papel higiénico industrial jumbo Smart, fabricado em ABS preto de alta qualidade. Robusto, resistente e duradouro de fácil limpeza e substituição do rolo.<p></p>Com fechadura e visor de nível do rolo. Suporta rolos de até 300 metros com o máximo de 220 mm de diâmetroPara rolos com um mandril de 45 mm de diâmetro.<p></p>Ideal para colégios, escolas, instituições publicas e privadas, lares, centros comerciais, restaurantes, etc.</span>",
        imgSrc: "images/products/dispPapel.jpg",
        cart: false,
        imgGroupSrc:["../images/products/dispPapel.jpg", "../images/products/dispPapel2.jpg", "../images/products/dispPapel3.jpg"]

    },
    {
        id: 10,
        name: "Aspirador De Pó Profissional Cleanfix S10",
        brand: "Cleanfix",
        price: 270,
        description: "<span>O Aspirador de Poeiras Cleanfix S 10 é muito versátil e prático. É perfeito para a aspiração típica da sujidade dos escritórios, quartos de hotel, ginásios, lojas etc…<p></p>Super Silencioso (64 dB).<br>Acessórios profissionais de larga resistência e durabilidade.<br>Mangueira de aspiração de grande elasticidade e capacidade de torção.<br>Boa estabilidade graças ás suas rodas direccionais.<br>Equipado com triplo sistema de filtragem: saco lixo + filtro de poliester + filtro motor.<br>Preparado para utilizações profissionais de intensidade média e alta.<br>Materiais de construção 100% reciclaveis.</span>",
        imgSrc: "images/products/aspirador.jpg",
        cart: false,
        imgGroupSrc:["../images/products/aspirador.jpg", "../images/products/aspirador2.jpg", "../images/products/aspirador3.jpg", "../images/products/aspirador4.jpg"]

    },
    {
        id: 11,
        name: "Tapete Rede Ambientador para Urinol UriWave",
        brand: "UriWave",
        price: 3.95,
        description: "<span>UriWave tapete rede ambientador para urinol super perfumada da UriWave é a solução perfeita, simples e económica para os problemas de maus odores nas casas de banho dos homens.<p></p>É um produto higienizante e desodorante para urinóis muito eficaz para qualquer setor da higiene profissional, como as casas de banho de discotecas, bares, estações de comboio, centros comerciais, empresas, etc.<p></p>O UriWave liberta 2x mais fragrância que os seus concorrentes, criando um ambiente fresco por mais de 30 dias.</span>",
        imgSrc: "images/products/tapeteAmb.jpg",
        cart: false,
        imgGroupSrc:["../images/products/tapeteAmb2.jpg", "../images/products/tapeteAmb3.jpg", "../images/products/tapeteAmb4.jpg", "../images/products/tapeteAmb5.jpg"],
        opcao: ["Manga", "Herbal Mint", "Oceano", "Tutti Frutti"]

    },
    {
        id: 12,
        name: "H1 - Tork Matic® Dispensador para Toalha de Mãos em Rolo",
        brand: "Tork",
        price: 180,
        instock: 100,
        description: "O Tork Matic® Dispensador para Toalha de Mãos em Rolo da Linha Elevation é de fácil manutenção, permitindo manter os lavabos com um elevado volume de tráfego sempre operacionais. Além disso, reduz o consumo devido ao seu sistema de distribuição folha a folha. Os dispensadores da Linha Elevation têm um design funcional e moderno, que deixa uma impressão agradável e duradoura nos seus clientes. <p></p>  Elevada capacidade, servindo mais clientes com menos rolo Fácil manutenção, com indicador de recarga LED que mostra quando é necessário recarrega Limpeza simples e recarga intuitiva que poupam temp Uma toalha de cada vez: Reduz o consum Alavanca higiénica: Apenas visível ao reabastecer ou quando não há papel ao alcance",
        imgGroupSrc: ["../images/products/page2_1.1.gif", "../images/products/page2_1.2.gif", "../images/products/page2_1.3.gif", "../images/products/page2_1.4.gif"],
        imgSrc: "images/products/page2_1.1.gif",
        numberOfUnits: 1,
        cart: false
    },

    {
        id: 13,
        name: "SISTEMA EVOLUTION - LAVA-VIDROS EVOLUTION",
        brand: "Vileda",
        price: 9,
        instock: 100,
        description: " Vidros sujos são sempre um incómodo em qualquer local, seja num escritório, numa loja ou numa instituição. O sistema Evolution para limpeza de vidros, da Vileda Professional, tem tudo o que é necessário para limpar cada janela de forma eficaz e o mais rápido possível. O design, as vantagens ergonómicas e o material de que é feito tornam-no numa solução que faz o trabalho sem problemas, com uma duração incrível. Concebido com uma grande flexibilidade para preencher todos os requisitos de acesso e limpeza de vidros. A facilidade de uso do punho 4-em-1, com múltiplas posições, resulta num desempenho mais eficaz e ergonómico.",
        imgGroupSrc: ["../images/products/page2_2.1.jpg", "../images/products/page2_2.2.jpg", "../images/products/page2_2.3.jpg"],
        imgSrc: "images/products/page2_2.1.jpg",
        numberOfUnits: 1,
        cart: false
    },

    {
        id: 14,
        name: "TAPETE TRANSIT PLUS",
        brand: "Vileda",
        price: 10,
        instock: 100,
        description: " É um facto que 80% da sujidade entra pela porta principal. E se o tempo está mau, torna-se bem pior. Esta é a razão porque nós consideramos os tapetes como uma parte importante dos nossos sistemas de limpeza. A gama de tapetes Vileda Professional além de oferecer uma solução à medida das necessidades, enquadrada na decoração, permite actuar preventivamente ao criar autenticas barreiras anti-sujidade e reduzir os custos com a limpeza. Sujidade que não entra, não tem de ser limpa.",
        imgGroupSrc: ["../images/products/page2_3.1.jpg", "../images/products/page2_3.2.jpg", "../images/products/page2_3.3.jpg"],
        imgSrc: "images/products/page2_3.1.jpg",
        numberOfUnits: 1,
        cart: false
    },

    {
        id: 15,
        name: "H2 - Tork Xpress® Dispensador para Toalha de Mãos Interfolha para Lavatório",
        brand: "Tork",
        price: 160,
        instock: 100,
        description: " Um design moderno com superfícies lisas e linhas simples que se enquadra perfeitamente na sua casa de banho. Crie uma boa impressão, que exalta a imagem de elevada qualidade nas suas instalações. O elegante aço inoxidável, com revestimento anti dedadas, tem um aspeto fantástico e permanece limpo.",
        imgGroupSrc: ["../images/products/page2_4.1.gif", "../images/products/page2_4.2.gif", "../images/products/page2_4.3.gif"],
        imgSrc: "images/products/page2_4.1.gif",
        numberOfUnits: 1,
        cart: false
    },

    {
        id: 16,
        name: "Suporte de Parede p/ Rolo de Papel Higiénico Jofel AD10010",
        brand: "Jofel",
        price: 45,
        instock: 100,
        description: " Suporte de Parede p/ Rolo de Papel Higiénico Jofel AD10010 Dispensador para bobinas de papel industrial (máx. 500 m.) Chassi em tubo de aço de 20 mm. diâmetro. Com pintura eletrostática poliéster. Serra de metal integrada pintada em Poliester. Grande robustez e longa vida. Preparado e desenhado para ser fixado à parede com buchas e parafusos. Aceita bobinas de até 500 metros. Aceita mandris de 60/70 mm. diâmetro. Espaço mínimo e fácil colocação. Projetado para usos industriais e intensivos em papel. Totalmente metálico. Projetado para catering (cozinhas) e indústria.",
        imgGroupSrc: ["../images/products/page2_5.1.gif", "../images/products/page2_5.2.png"],
        imgSrc: "images/products/page2_5.1.gif",
        numberOfUnits: 1,
        cart: false
    },

    {
        id: 17,
        name: "Rolo de Papel Higiénico Goma-Camps",
        brand: "Goma-Camps",
        price: 8,
        instock: 100,
        description: " Rolos de papel Higiénico em celulose virgem de excelente qualidade, absorção e resistência graças ao exclusivo relevo dos círculos absorventes.",
        imgGroupSrc: ["../images/products/page2_6.1.jpg", "../images/products/page2_6.2.jpg", "../images/products/page2_6.3.jpg"],
        imgSrc: "images/products/page2_6.1.jpg",
        numberOfUnits: 1,
        cart: false
    },

    {
        id: 18,
        name: "Ambientador Bouquet Egiquímica",
        brand: "Egiquímica",
        price: 6,
        instock: 100,
        description: " Ambientador. Ambientador com elevada capacidade ambientadora devido aos seus agentes de fixação, neutraliza maus odores de ambientes degradados pelo fumo do tabaco, humidade, outro. Refresca e perfuma simultaneamente o ambiente. É totalmente solúvel em água.",
        imgGroupSrc: ["../images/products/page2_7.1.png", "../images/products/page2_7.2.png"],
        imgSrc: "images/products/page2_7.1.png",
        numberOfUnits: 1,
        cart: false
    },

    {
        id: 19,
        name: "Carro Limpeza - Origo 300HX",
        brand: "Vileda",
        price: 565,
        instock: 100,
        description: " CARRO LIMPEZA - ORIGO 300HX. O Origo 300HX é a plataforma ideal para os sistemas de mopas pré-preparadas como o Swep e Express. O seu tamanho compacto torna-o ideal para usar em instalações de saúde, como hospitais e clínicas. H = Estrutura com diferentes níveis para um máximo armazenamento no mínimo espaço X = Extensão porta sacos para recolha de resíduos e/ou têxteis sujos.",
        imgGroupSrc: ["../images/products/page2_8.1.jpg", "../images/products/page2_8.2.jpg"],
        imgSrc: "images/products/page2_8.1.jpg",
        numberOfUnits: 1,
        cart: false
    },

    {
        id: 20,
        name: "Secador com Suporte Padrão",
        brand: "Jofel",
        price: 10,
        instock: 100,
        description: " Secador de cabelo tipo pistola com suporte de parede. Feito de ABS branco de alta qualidade e resistente. Baixo custo. Potência de 1200 W., indicada para uso doméstico e hoteleiro. Botão de segurança. Interruptor de arranque e paragem manual. Ar quente com regulador de velocidade manual (2 velocidades). Cabo de extensão de comprimento longo. Design vanguardista e fácil de usar. Ergonómico. Fácil manutenção e limpeza. Destinado para uso individual.",
        imgGroupSrc: ["../images/products/page2_9.1.png", "../images/products/page2_9.2.png", "../images/products/page2_9.3.jpg"],
        imgSrc: "images/products/page2_9.1.png",
        numberOfUnits: 1,
        cart: false
    },

    {
        id: 21,
        name: "Tapete Rede Desodorizante para Urinol UriWave Extreme",
        brand: "UriWave",
        price: 14,
        instock: 100,
        description: "Performance Patenteada. O UriWave liberta 2x mais fragrância que os seus concorrentes, criando um ambiente fresco por mais de 30 dias. Ambienta o ar durante 30 dias Material patenteado que contém até 30x mais fragrância que os produtos tradicionais Liberta fragrância durante 30 dias Amigo do ambiente 100% reciclável Não polui nem se dissolve com a água Novo Design Design revolucionário flexível e translúcido permitindo a total visualização do urinol e assegura o escoamento fácil da urina. A parte superior do disco é composta por vários picos que permitem reduzir os salpicos enquanto liberta fragrância e bactérias Relembra-lhe quando o deve substituir Possui um fácil sistema para o relembrar de o substituir Bastando para isso remover o número ou a letra da semana e mês em que deve ser substituido",
        imgGroupSrc: ["../images/products/page2_10.1.jpg", "../images/products/page2_10.2.jpg", "../images/products/page2_10.3.jpg", "../images/products/page2_10.4.jpg"],
        imgSrc: "images/products/page2_10.1.jpg",
        numberOfUnits: 1,
        cart: false
    },

    {
        id: 22,
        name: "MOPA - SWEP MICROTECH",
        brand: "Vileda",
        price: 22,
        instock: 100,
        description: "O Sistema Swep Classic foi desenhado para o método de limpeza pré-preparado. As Mopas podem ser preparadas manualmente ou na máquina de lavar. A grande variedade de mopas Swep Classic oferece a melhor eficácia de limpeza em pavimentos duros. A humidade da mopa é nivelada consoante o grau de sujidade e de higiene necessários.",
        imgGroupSrc: ["../images/products/page2_11.1.jpg", "../images/products/page2_11.2.jpg"],
        imgSrc: "images/products/page2_11.1.jpg",
        numberOfUnits: 1,
        cart: false
    },

    {
        id: 23,
        name: "H5 - Dispensador de Toalhas de Mãos Tork PeakServe® Continuous",
        brand: "Tork",
        price: 220,
        instock: 100,
        description: " Tork PeakServe®: a mais recente inovação concebida para lavabos com tráfego elevado nos quais os funcionários necessitam de maximizar o tempo de limpeza e de manter um bom fluxo de pessoas. Compatível com as toalhas de mão Tork PeakServe® Continuous®, o sistema dispõe de uma elevada capacidade de mais de 2100 toalhas, que podem ser dispensadas rapidamente e sem interrupções para manter o fluxo. O processo das recargas compactas é rápido, podendo ser realizado em qualquer altura, e as recargas são fáceis de armazenar e de transportar, o que permite que os funcionários se foquem na limpeza e não nas recargas.",
        imgGroupSrc: ["../images/products/page2_12.1.gif", "../images/products/page2_12.2.gif", "../images/products/page2_12.3.gif", "../images/products/page2_12.4.gif"],
        imgSrc: "images/products/page2_12.1.gif",
        numberOfUnits: 1,
        cart: false
    },


];