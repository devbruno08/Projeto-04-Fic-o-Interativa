const prompt = require ("prompt-sync")();

const dadosMago = {
    classe: 'Mago',
    arma: 'cajado-de-madeira',
    poder: 1
};

const Player = {
    nome: '',
    classe: 'Mago',
    arma: '',
    energia: 15,
    AtackPlayer: [3, 4, 5]
};

const MagiadeFogo = {
    energia: 15,
    atributos: function(){
        this.energia--
    }
};

const MagiadeAgua = {
    energia: 15,
    atributos: function(){
        this.energia++
    }
};

const BackupPlayer = {
    energia: 15
};

const Mob = {
    Energia: 10,
    AtackMob: [1, 2, 3]
};

const BackupMob = {
    Energia: 10
};

const Guerreiro = {
    Energia: 15,
    AtackGuerreiro: [1, 2, 3]
};

const BackupGuerreiro = {
    Energia: 15
};

const Bruxa = {
    Energia: 20,
    AtackBruxa: [3, 4, 5]
};

const BackupBruxa = {
    Energia: 20
};

const Guerreiros = {
    Energia: 10,
    AtackGuerreiros: [1, 2, 3]
};

const BackupGuerreiros = {
    Energia: 10
};


const Vilarejos = ["[1]Zotis - 4 dias de caminhada", "[2]Tunig - 3 dias de caminhada", "[3]Niroda - 2 dias de caminhada"];

Inicio: while(true){

let escolhaMagia = 0

console.clear();
console.log();
console.log('A história a seguir fala de um mago.');
console.log();
console.log('Cujo o nome era...');
console.log();
Player.nome = prompt('Digite o nome do seu personagem: ');
console.clear();
console.log();
console.log('A história a seguir fala de um mago.');
console.log();
console.log(`Cujo o nome era ${Player.nome}.`);
 
if(Player.classe == 'Mago'){
    Object.assign(Player, dadosMago);
    console.log(`
    ${Player.nome}, era da família de grandes alquimistas. Porém a sua
    trajetória foi marcada por uma grande trajédia, seu irmão mais novo em uma tentativa
    de desenvolver um elixir para a vida eterna, ficou aprisionado no próprio frasco em que 
    produzira a poção. E agora, o mago precisa enfrentar uma longa jornada de 3 semanas de 
    desafios e treinamentos, pois só quando atingir o seu poder máximo, 
    poderá invocar um feitiço para salvar seu irmão...`);
    prompt();
    console.clear();
    console.log(`
    Para o início de sua jornada, ${Player.nome} precisará escolher
    qual o tipo de magia que irá lhe guiar durante o processo, lembrando que cada escolha
    acarretará em atributos e caminhos diferentes no seu processo...`);
    console.log();
    
    while(true){
    escolhaMagia = +prompt('[1]Magia de Fogo, [2]Magia de Água: ');
        if(escolhaMagia == 1 || escolhaMagia == 2){
            if(escolhaMagia == 1){
                MagiadeFogo.atributos();
                Object.assign(Player, MagiadeFogo);
            }else if(escolhaMagia == 2){
                MagiadeAgua.atributos();
                Object.assign(Player, MagiadeAgua);
            };
            break;
        }else{
            escolhaMagia = +prompt('[1]Magia de Fogo, [2]Magia de Água ');        
        };
    };
    console.clear();
    console.log();
    console.log(
`Como seus primeiros passos, ${Player.nome} passará por alguns desafios, ele precisará encontrar um portal, 
que o levará para a cidade onde o seu irmão colheu os elementos para criar o elixir...`);
    prompt();
    console.clear();

let TempoSemana1 = 7;

    
console.log(`______________________________SEMANA 1______________________________`)
console.log();
    Semana1 : while(true){
console.log(`Estes são os possíveis destinos dessa aventura, porém você precisará escolher com sabedoria pois 
cada caminho está em um direção e o portal abre apenas uma época do ano, durante a alvorada na primeira
semana do inverno`);
    console.log();
    console.log(`Tempo restante, em dias: ${TempoSemana1}`);

    for(const listaVilarejos of Vilarejos){
        console.log(listaVilarejos);
    };

    console.log();
    let escolhaVilarejo = +prompt('Selecione o número respectivo ao Vilarejo que você irá visitar: ')
    console.clear();

    for( ; ; ){
        if(escolhaVilarejo == 1){
            TempoSemana1 = TempoSemana1 - 4;
            Vilarejos.splice(0, 1);
        
            if(TempoSemana1 <= 0){
                console.log('Você ultrapassou o tempo limite para o portal, poderá tentar no próximo solstício!')
                prompt();
                break Inicio;
            };
            console.log(`
Após a longa caminhada, ${Player.nome} chega até Zotis, onde encontra um grande Goblin. 
Os dois se preparam para uma batalha! `);

            while(true){
            prompt();
            console.clear();
            console.log(`${Player.nome}, é o seu turno. Aperte [ENTER] para atacar...`)
            prompt();
            //SoltaPoderzin();
            AtackPlayerMob();
            prompt();
                if(Mob.Energia <= 0){
                console.log('O Goblin foi derrotado!')
                prompt();
                console.clear();
                console.log(`O Goblin morreu, mas eu não estou vendo nenhuma passagem para a cidade. 
Terei de procurar na próxima... `); 
                prompt();
                console.clear();
                console.log();
                Object.assign(Mob, BackupMob);
                if(escolhaMagia == 1){
                    Object.assign(BackupPlayer, MagiadeFogo);
                    Object.assign(Player, BackupPlayer);
                } else if(escolhaMagia == 2){
                    Object.assign(BackupPlayer, MagiadeAgua);
                    Object.assign(Player, BackupPlayer);
                };
                continue Semana1;
                };
            console.clear();
            console.log('Agora é o turno do seu oponente...')
            prompt();
            MobAtack();
                if(Player.energia <= 0){
                console.log('Você foi derrotado, tente novamente!')
                prompt();
                console.clear();
                break Semana1;
                };   
            };           
        }; 

        if(escolhaVilarejo == 2){
            TempoSemana1 = TempoSemana1 -3;
            Vilarejos.splice(1, 1);

            if(TempoSemana1 <= 0){
                prompt();
                console.log('Você ultrapassou o tempo limite para o portal, poderá tentar no próximo solstício!')
                prompt();
                break Inicio;
            };
            console.log(`Esta cidade está vazia, parece que a população foi dizimada. 
E só vejo alguns bastões de Bambu no caminho`);
prompt();
console.clear();
            continue Semana1;
        };

        if(escolhaVilarejo == 3){
            TempoSemana1 = TempoSemana1 -2;
            Vilarejos.splice(2, 1);

            if(TempoSemana1 <= 0){
                console.log('Você ultrapassou o tempo limite para o portal, poderá tentar no próximo solstício!');
                prompt();
                break Inicio;
            };
            console.log('Lá está o portal, vou entrar logo antes que ele se feche!');
            prompt();
            console.clear();
            break;
        };

    };
    break; 
};

const AltConversa = ["[1]Tentar fugir", "[2]Desafiar um guerreiro, em troca de lealdade", "[3]Pergunta sobre a história do seu povo"];


console.log(`______________________________SEMANA 2______________________________`)
//Semana2 : while(true){
console.log();
console.log(`Chegando a cidade perdida, onde seu irmão coletou os ingredientes para a poção, foram avistados inúmeros guerreiros
que vieram para cima do mago com um 'ar' de fúria. `)
prompt();
console.log(
`Acontece que estes guerreiros moravam na cidade onde o irmão de ${Player.nome}, buscava seus ingredientes, e estes eram
sagrados para o seu povo. E na busca incansável pelo seu propósito, supostamente o irmão do mago junto de outros componentes 
de sua guilda, transformaram as espadas dos guerreiros em bastões de bambu para que seu objetivo não fosse interrompido.`);
prompt();
console.clear();
console.log(`
${Player.nome}: Esperem, eu não sei nada sobre quem acabou com a honra de vocês mas preciso continuar meu treinamento e talvez 
possa ajudar vocês com a minha magia.

Guerreiros: Nunca aceitaríamos ajuda de magos sujos!`);
console.clear();
Semana2 : while(true){
console.log(`[...]`);
console.log('O que você faz...');
console.log();
for(const alternativas of AltConversa){
    console.log(alternativas)
};
console.log();
let conversa = +prompt(`Digite [1], [2] ou [3] `)

console.clear();
    
while(true){
    if(conversa == 1 || conversa == 2 || conversa == 3){
        if(conversa == 1){
            AltConversa.splice(0, 1);
            console.log('Você tenta fugir, porém os guerreiros o buscam e o apunhalam pelas costas.')
            console.log('Tentar novamente?')
            let again = 0;
            again = +prompt('Digite [1] para "SIM" ou [2] para "NÃO"  ');
            console.clear();
            while(true){
            if(again == 1 || again == 2){
                if(again == 1){
                    continue Semana2;
                } else if(again == 2){
                    break Inicio;
                }else{
                    again = +prompt('Digite [1] para SIM ou [2] para NÃO');
                    console.clear();
                };
                };
            };

        }else if(conversa == 2){
            AltConversa.splice(1, 1);
            console.log(`Os Guerreiros buscam o seu melhor soldado para a batalha...`)
            
            while(true){
                prompt();
                console.clear();
                console.log(`${Player.nome}, é o seu turno. Aperte [ENTER] para atacar...`)
                prompt();
                AtackPlayerGuerreiro();
                prompt();
                    if(Guerreiro.Energia <= 0){
                    console.log('O Guerreiro foi derrotado!')
                    prompt();
                    console.clear();
                    console.log(`Após a vitória sobre o seu melhor soldado, os guerreiros aceitam o mago para
lhe ajudar frente a um grande desafio.`); 
                    Object.assign(Guerreiro, BackupGuerreiro);
                        if(escolhaMagia == 1){
                        Object.assign(BackupPlayer, MagiadeFogo);
                        Object.assign(Player, BackupPlayer);
                        } else if(escolhaMagia == 2){
                        Object.assign(BackupPlayer, MagiadeAgua);
                        Object.assign(Player, BackupPlayer);
                    };
                    prompt();
                    console.clear();
                    console.log();
                    continue Semana2;
                    };
                console.clear();
                console.log('Agora é o turno do seu oponente...')
                prompt();
                GuerreiroAtack();
                    if(Player.energia <= 0){
                    console.log('Você foi derrotado, tente novamente!')
                    prompt();
                    console.clear();
                    break Semana2;
                    };   
                };          

        }else if(conversa == 3){
            AltConversa.splice(2, 1);
            console.log(`
${Player.nome}: Me falem sobre a história do seu povo, com a minha sabedoria talvez eu possa os ajudar.

Guerreiros: O nosso clã era derivado de um grande clã de espadachins, nossa maior honra era empunhar 
nossas espadas, até que o seu irmão veio em busca de nossas ervas sagradas. E então após algumas discussões
todos da nossa tribo foram arruinados com um feitiço onde nossas espadas se transformam em bastões de bambu 
no instante em que a tocamos.`);
            prompt();
            break Semana2;
        };

    } else{
        conversa = +prompt(`Digite [1], [2] ou [3]: `);
    };
};
};
}; 
console.clear();
console.log(`______________________________SEMANA 3______________________________`)
console.log();
Semana3 : while(true){
console.log(
`Nessa última semana, nosso herói já passou por alguns desafios mas o maior deles se revela agora:
Surge dos céus, em sua vassoura, uma bruxa...

Bruxa: Vocês ai brigando, quando na verdade fui eu quem armei tudo isso. Atraí o jovem mago para a
cidade dos guerreios com a falsa promessa do Elixir de vida eterna. E agora atraí mais algumas almas
para levar comigo. Se preparem pois iremos batalhar por elas. Se vencerem , o que não faz sentido,
prometo devolver suas vidas ao normal...
`);

while(true){
console.clear();
console.log(`${Player.nome}, é o seu turno. Aperte [ENTER] para atacar...`)
prompt();
AtackPlayerBruxa();
if(Bruxa.Energia < 1){
    console.log('A bruxa foi derrotada!')
    prompt();
    console.clear();
    console.log(`Você derrotou a bruxa, salvando seu irmão e a guilda dos Guerreiros.
    PARABÉNS!!!`); 
    prompt();
    console.clear();
    console.log();
    break Inicio;
};
prompt();
console.clear();
console.log('Agora é o turno da Bruxa...')
prompt();
BruxaAtack();
if(Player.energia < 1){
    console.log('Você foi derrotado, tente novamente!')
    prompt();
    console.clear();
    continue Semana3;
};   
prompt();
console.clear();
console.log('Agora é o turno dos guerreiros...')
console.log();
AtackGuerreirosBruxa();
console.log();
if(Bruxa.Energia < 1){
    console.log('A bruxa foi derrotada!')
    prompt();
    console.clear();
    console.log(`Você derrotou a bruxa, salvando seu irmão e a guilda dos Guerreiros.
    PARABÉNS!!!`); 
    prompt();
    console.clear();
    console.log();
    break Inicio;
};
prompt();    
};          
};
};

function MobAtack(){
    let Atack = Math.floor(Math.random() * Mob.AtackMob.length);
    let dano = Player.energia - (Mob.AtackMob[Atack]);
    console.log(`-${(Mob.AtackMob[Atack])} de dano em sua energia`);
    console.log(`Sua energia atual é de: ${dano}`);
    Player.energia = dano;
    return Player.energia;

};

function GuerreiroAtack(){
    let Atack = Math.floor(Math.random() * Guerreiro.AtackGuerreiro.length);
    let dano = Player.energia - (Guerreiro.AtackGuerreiro[Atack]);
    console.log(`-${(Guerreiro.AtackGuerreiro[Atack])} de dano em sua energia`);
    console.log(`Sua energia atual é de: ${dano}`);
    Player.energia = dano;
    return Player.energia;
};

function BruxaAtack(){
    let Atack = Math.floor(Math.random() * Bruxa.AtackBruxa.length);
    let dano = Player.energia - (Bruxa.AtackBruxa[Atack]);
    console.log(`-${(Bruxa.AtackBruxa[Atack])} de dano em sua energia`);
    console.log(`Sua energia atual é de: ${dano}`);
    Player.energia = dano;
    return Player.energia; 
}

function AtackPlayerMob(){
    let Atack = Math.floor(Math.random() * Player.AtackPlayer.length);
    let dano = Mob.Energia - (Player.AtackPlayer[Atack]);
    console.log(`-${(Player.AtackPlayer[Atack])} de dano na energia do monstro`);
    console.log(`A energia do monstro é de: ${dano}`);
    Mob.Energia = dano;
    return Mob.Energia;
};

function AtackPlayerGuerreiro(){
    let Atack = Math.floor(Math.random() * Player.AtackPlayer.length);
    let dano = Guerreiro.Energia - (Player.AtackPlayer[Atack]);
    console.log(`-${(Player.AtackPlayer[Atack])} de dano na energia do guerreiro`);
    console.log(`A energia do guerreiro é de: ${dano}`);
    Guerreiro.Energia = dano;
    return Guerreiro.Energia;
};

function AtackPlayerBruxa(){
    let Atack = Math.floor(Math.random() * Player.AtackPlayer.length);
    let dano = Bruxa.Energia - (Player.AtackPlayer[Atack]);
    console.log(`-${(Player.AtackPlayer[Atack])} de dano na energia da Bruxa`);
    console.log(`A energia da Bruxa é de: ${dano}`);
    Bruxa.Energia = dano;
    return Bruxa.Energia;
};

function AtackGuerreirosBruxa(){
    let Atack = Math.floor(Math.random() * Guerreiros.AtackGuerreiros.length);
    let dano = Bruxa.Energia - (Guerreiros.AtackGuerreiros[Atack]);
    console.log(`-${(Guerreiros.AtackGuerreiros[Atack])} de dano na energia da Bruxa`);
    console.log(`A energia da Bruxa é de: ${dano}`);
    Bruxa.Energia = dano;
    return Bruxa.Energia;
};

