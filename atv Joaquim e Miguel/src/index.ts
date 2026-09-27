import Presidente from './Presidente.js';
import Senador from './Senador.js';
import DeputadoFederal from './DeputadoFederal.js';
import DeputadoEstadual from './DeputadoEstadual.js';
import Governador from './Governador.js';

const presidente = new Presidente(
    'Luiz Inácio Lula da Silva',
    'PT',
    'Palácio do Planalto',
    'Praça dos Três Poderes, Brasília - DF, CEP 70150-900',
    46366.19,
    ['Bolsa Família', 'Pé-de-Meia'],
    38
);

const governadores = [
    new Governador(
        'Raquel Lyra',
        'PSD',
        'Palácio do Campo das Princesas',
        'Praça da República, s/n - Santo Antônio, Recife - PE, CEP 50010-000',
        60000,
        ['Programa de Desenvolvimento Econômico', 'Plano Estadual de Educação'],
        'Pernambuco',
        30
    ),
    new Governador(
        'Jerônimo Rodrigues',
        'PT',
        'Centro Administrativo da Bahia - CAB',
        '3ª Avenida, nº 390, Plataforma IV, Salvador - BA, CEP 41745-005',
        36894.89,
        ['Reurb-S', 'Quilombo Legal'],
        'Bahia',
        26
    )
];

const senadoresDePernambuco = [
    new Senador(
        'Humberto Costa',
        'PT',
        'Pernambuco',
        2018,
        'Federal',
        'Legislativo',
        'Senado Federal',
        'Praça dos Três Poderes, Brasília - DF, CEP 70150-900',
        46366.19,
        ['Fortalecimento do SUS', 'Direitos sociais']
    ),
    new Senador(
        'Teresa Leitão',
        'PT',
        'Pernambuco',
        2022,
        'Federal',
        'Legislativo',
        'Senado Federal',
        'Praça dos Três Poderes, Brasília - DF, CEP 70150-900',
        46366.19,
        ['PL 4414/2024', 'PL 4403/2024']
    )
];

const senadorDeOutroEstado = new Senador(
    'Daniella Ribeiro',
    'PP',
    'Paraíba',
    2018,
    'Federal',
    'Legislativo',
    'Senado Federal',
    'Praça dos Três Poderes, Brasília - DF, CEP 70150-900',
    46366.19,
    ['Assentos em viagens', 'Piso Salarial dos Médicos']
);

const deputadosFederaisDePernambuco = [
    new DeputadoFederal(
        'Túlio Gadêlha', 'PSD', 'Federal', 'Legislativo', 'Câmara dos Deputados',
        'Praça dos Três Poderes, Brasília - DF, CEP 70150-900', 46366.19,
        ['Lei do Mar (PL 6.969/2013)', 'Incentivo ao Voluntariado (PL 5.862)'], 'Bancada da Educação', 'Pernambuco'
    ),
    new DeputadoFederal(
        'Carlos Veras', 'PT', 'Federal', 'Legislativo', 'Câmara dos Deputados',
        'Praça dos Três Poderes, Brasília - DF, CEP 70150-900', 46366.19,
        ['Lei Paul Singer (Lei nº 15.068/2024)', 'Transporte Universitário Gratuito'], 'Bancada dos Trabalhadores', 'Pernambuco'
    ),
    new DeputadoFederal(
        'Lula da Fonte', 'PP', 'Federal', 'Legislativo', 'Câmara dos Deputados',
        'Praça dos Três Poderes, Brasília - DF, CEP 70150-900', 46366.19,
        ['Atenção especializada em saúde em Pernambuco', 'Contenção de encostas em áreas urbanas'], 'Bancada Progressista', 'Pernambuco'
    )
];

const deputadosFederaisDeOutroEstado = [
    new DeputadoFederal(
        'Elmar Nascimento', 'União Brasil', 'Federal', 'Legislativo', 'Câmara dos Deputados',
        'Praça dos Três Poderes, Brasília - DF, CEP 70150-900', 46366.19,
        ['Desenvolvimento regional', 'Agricultura e infraestrutura'], 'Bancada da Bahia', 'Bahia'
    ),
    new DeputadoFederal(
        'Alice Portugal', 'PCdoB', 'Federal', 'Legislativo', 'Câmara dos Deputados',
        'Praça dos Três Poderes, Brasília - DF, CEP 70150-900', 46366.19,
        ['Valorização dos profissionais da educação', 'Direitos das mulheres'], 'Bancada da Educação', 'Rio de Janeiro'
    )
];

const enderecoAlepe = 'Rua da União, 397 - Boa Vista, Recife - PE, CEP 50050-010';
const enderecoAlba = '1ª Avenida do Centro Administrativo da Bahia, nº 130, Salvador - BA, CEP 41745-001';

const deputadosEstaduaisDePernambuco = [
    new DeputadoEstadual(
        'Abimael Santos', 'PL', 'Pernambuco', 'Assembleia Legislativa de Pernambuco',
        enderecoAlepe, 30000, ['PL 1234/2024', 'PL 5678/2024'],
        ['Comissão de Assuntos Municipais', 'Comissão Especial da PMPE']
    ),
    new DeputadoEstadual(
        'Adalto Santos', 'PP', 'Pernambuco', 'Assembleia Legislativa de Pernambuco',
        enderecoAlepe, 30000, ['Destinação de multas de trânsito', 'Financiamento contra o Câncer'],
        ['Comissão de Ética Parlamentar', 'Comissão de Saúde e Assistência Social']
    ),
    new DeputadoEstadual(
        'Cayo Albino', 'PSB', 'Pernambuco', 'Assembleia Legislativa de Pernambuco',
        enderecoAlepe, 30000, ['PEC do Orçamento da Juventude', 'Código de Defesa dos Autistas'],
        ['Comissão de Desenvolvimento Econômico e Turismo', 'Comissão de Constituição, Legislação e Justiça']
    )
];

const deputadosEstaduaisDeOutroEstado = [
    new DeputadoEstadual(
        'Adolfo Menezes', 'PSD', 'Bahia', 'Assembleia Legislativa da Bahia',
        enderecoAlba, 30000, ['Título de Capital do Couro a Ipirá', 'Democratização cultural'],
        ['Comissão de Finanças, Orçamento, Fiscalização e Controle', 'Comissão de Direitos Humanos e Segurança Pública']
    ),
    new DeputadoEstadual(
        'Alex Piatã', 'PSD', 'Bahia', 'Assembleia Legislativa da Bahia',
        enderecoAlba, 30000, ['Aplicativo para denúncias de violência doméstica', 'Combate ao bullying escolar'],
        ['Comissão de Saúde e Saneamento', 'Comissão Especial de Desenvolvimento Regional']
    )
];

console.log('=== Presidente ===');
presidente.imprimeinfo();

console.log('\n=== Governadores ===');
governadores.forEach((governador) => governador.imprimeinfo());

console.log('\n=== Senadores de Pernambuco ===');
senadoresDePernambuco.forEach((senador) => senador.imprimeinformacoes());

console.log('\n=== Senador de outro estado ===');
senadorDeOutroEstado.imprimeinformacoes();

console.log('\n=== Deputados federais de Pernambuco ===');
deputadosFederaisDePernambuco.forEach((deputado) => deputado.imprimeInfo());

console.log('\n=== Deputados federais de outro estado ===');
deputadosFederaisDeOutroEstado.forEach((deputado) => deputado.imprimeInfo());

console.log('\n=== Deputados estaduais de Pernambuco ===');
deputadosEstaduaisDePernambuco.forEach((deputado) => deputado.imprimirInformacoes());

console.log('\n=== Deputados estaduais de outro estado ===');
deputadosEstaduaisDeOutroEstado.forEach((deputado) => deputado.imprimirInformacoes());