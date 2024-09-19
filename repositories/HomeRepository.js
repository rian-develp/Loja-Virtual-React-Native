import {Launch} from "../model/Launch"

class HomeRepository {

    getAllLaunchs = () => {
        const data = [
            {   id: 1,
                launch: new Launch("Paçoca", 2.25, "https://media.istockphoto.com/id/812334264/pt/foto/pacoca-traditional-brazilian-peanut-candy.jpg?s=612x612&w=0&k=20&c=U353OLEwAWzzp0nWoYpxi0dvTP-Vuobd1T6Z4Nw7qOQ=", 4)
            },
            {
                id: 2,
                launch: new Launch("Bolo de Pote", 4.80,"https://media.istockphoto.com/id/1292533119/pt/foto/chocolate-cake-in-a-glass-on-a-white-background.jpg?s=612x612&w=0&k=20&c=vHqfeI5BiKT44mummHiguucc9wnFNpuZp6eQS-OPXiM=",10)
            },
            {   
                id: 3,
                launch: new Launch("Pastelão", 4.80,"https://radiobaraofm.com.br/wp-content/uploads/2024/04/prato-com-fatia-de-torta-de-frango-com-legumes-isolado-em-fundo-transparente-stockpack-adobe-stock-696x503.jpg",6)
            },
            {
                id: 4,
                launch: new Launch("Brownie" , 3.25 ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3wGzN0KD1xypaDC4a3z_UfBFNeNiBB2PZEA&s", 3)
            },
            {
                id: 5,
                launch: new Launch("Pizza + Óreo", 2.22, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqGZOYczIXv2X3VWIqpqah8UrMZiYmMgLXLQ&s", 7)
            },
            {
                id: 6,
                launch: new Launch("Pizza Calabresa", 3.50,"https://img.freepik.com/fotos-premium/uma-pizza-com-calabresa-em-um-fundo-branco_859451-345.jpg",4)
            },
            {
                id: 7,
                launch: new Launch("Pão Pizza", 5.53,"https://thumbs.dreamstime.com/b/pizza-de-p%C3%A3o-liso-pepperoni-pimento-e-achatado-queijo-isolada-em-fundo-branco-174526480.jpg",2)
            },
            {
                id: 8,
                launch: new Launch("Bolo de Morango", 6.43, "https://img.freepik.com/fotos-premium/bolo-de-morango-isolado-em-fundo-branco-liso_146508-7035.jpg", 4)
            },
            {
                id: 9,
                launch: new Launch("Palha Italiana", 3.50, "https://img.freepik.com/fotos-premium/doce-brasileiro-chamado-palha-italiana-feito-com-chocolate-doce-de-leite-e-cacau-fundo-branco-isolado_72932-2480.jpg", 2)
            },

            {   id: 10,
                launch: new Launch("Pizza Chocolate", 2.66, "https://img.freepik.com/fotos-premium/pizza-de-chocolate-com-morangos-e-chocolate-branco-na-superficie-branca_70216-3345.jpg" ,1)
            },
        ];
        return data;
    }
}
export { HomeRepository as HomeRepository }