import { Component, OnInit } from '@angular/core';
import { filmes } from '../model/filmes';
import { series } from '../model/series';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor() { }

  exibeTabela: boolean = false;
  exibeTabelaS: boolean = false;


  listaFilmes: filmes[] = [

    {
      nome:'O Dilema das Redes',
      img: 'https://i1.wp.com/direcionalescolas.com.br/wp-content/uploads/2020/12/1ODilemadasRedes.jpg?fit=800%2C450&ssl=1',
      urlTrailer: 'https://www.youtube.com/embed/uaaC57tcci0',
      urlIMDb: 'https://www.imdb.com/title/tt11464826/?ref_=fn_al_tt_1 da Computacao',
      genero: 'Documentário', lancamento: '26/01/2020',
      descricao:'Ao revelarem o que está do outro lado das telas, especialistas em tecnologia mostram como as redes sociais estão reprogramando a civilização, já que estamos constantemente conectados por meio de plataformas digitais.'
    },
    {
      nome:'A Chegada',
      img: 'https://3.bp.blogspot.com/-x0FYmgWyYy0/WKy7SCqCDaI/AAAAAAAAEIU/YFazNK26TjIHA3uj5ylACzsY0CK-k-FFACLcB/s1600/a%2Bchegada.jpg',
      urlTrailer: 'https://www.youtube.com/embed/rNciXGzYZms',
      urlIMDb: 'https://www.imdb.com/title/tt2543164/?ref_=fn_al_tt_1',
      genero: 'Drama', lancamento: '24/11/2016',
      descricao:'Um lingüista trabalha com os militares para se comunicar com formas de vida extraterrestres depois que doze naves espaciais misteriosas aparecem ao redor do mundo.'
    },
    {
      nome:'Hacker',
      img: 'https://i1.sndcdn.com/artworks-000120202261-gzhrw0-t500x500.jpg',
      urlTrailer: 'https://www.youtube.com/embed/Jsj8ylQLlFg',
      urlIMDb: 'https://www.imdb.com/title/tt2717822/?ref_=fn_al_tt_1',
      genero: 'Ação', lancamento: '05/03/2015',
      descricao:'Um condenado e seus parceiros americanos e chineses caçam uma rede de crimes cibernéticos de alto nível de Chicago até Los Angeles, de Hong Kong a Jacarta.'
    },
    {
      nome:'Creed: Nascido para Lutar',
      img: 'https://s2.glbimg.com/s70B4P9jgGtqUIlVIJ9jwyUIdU4=/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2019/8/N/CD950aT6uhX1VDxPugpw/foto20cul-201-dvd2-d30.jpg',
      urlTrailer: 'https://www.youtube.com/embed/661sQScpXJc',
      urlIMDb: 'https://www.imdb.com/title/tt3076658/?ref_=nv_sr_srsg_0',
      genero: 'Ação', lancamento: '06/12/2015',
      descricao:'O ex-campeão mundial dos pesos pesados Rocky Balboa é treinador e mentor de Adonis Johnson, filho de seu falecido amigo e ex-rival Apollo Creed.'
    },
    {
      nome:'Velozes e Furiosos 7',
      img: 'https://i1.wp.com/www.autocustom.com.br/wp-content/uploads/2015/04/capa-velozes-e-furiosos-7.jpg',
      urlTrailer: 'https://www.youtube.com/embed/hujU0dw6Erk',
      urlIMDb: 'https://www.imdb.com/title/tt2820852/',
      genero: 'Ação', lancamento: '03/04/2015',
      descricao:'O Deckard Shaw procura vingar-se do Dominic Toretto e sua familia.'
    },
    {
      nome:'Vingadores: Ultimato',
      img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/50E7617453E81AE39D1B4F54060E67756FB292ED3C5E68C96690B307FC436419/scale?width=1200&aspectRatio=1.78&format=jpeg',
      urlTrailer: 'https://www.youtube.com/embed/g6ng8iy-l0U',
      urlIMDb: 'https://www.imdb.com/title/tt4154796/?ref_=fn_al_tt_1',
      genero: 'Ação', lancamento: '25/04/2019',
      descricao:'Após os eventos devastadores de Vingadores: Guerra Infinita , o universo está em ruínas, e com a ajuda de aliados os Vingadores se reúnem para desfazer as ações de Thanos e restaurar a ordem.'
    },
  ];


  listaSeries: series[] = [

    {
      nome:'Arrow',
      qtdTemporada: '8',
      img: 'https://www.oficinadanet.com.br/imagens/post/28167/arrow.jpg',
      urlTrailer: 'https://www.youtube.com/embed/Ws9X6I5CvcE',
      urlIMDb: 'https://www.imdb.com/title/tt2193021/?ref_=nv_sr_srsg_0',
      genero: 'Ação', lancamento: '10/10/2012',
      descricao:'O bilionário Oliver Queen está desaparecido e é considerado mortor. Ele retorna cinco anos depois como um homem mudado para limpar a cidade armado com um arco.'
    },
    {
      nome:'The Flash',
      qtdTemporada: '7',
      img: 'https://i.ytimg.com/vi/fa6SMlq0oO0/maxresdefault.jpg',
      urlTrailer: 'https://www.youtube.com/embed/fymU5y3Xm14',
      urlIMDb: 'https://www.imdb.com/title/tt3107288/?ref_=fn_al_tt_1',
      genero: 'Ação', lancamento: '07/10/2014',
      descricao:'Depois de ser atingido por um raio, Barry Allen acorda de seu coma para descobrir que recebeu o poder da super velocidade, tornando se em Flash e lutando contra o crime na cidade.'
    },
    {
      nome:'Gotham',
      qtdTemporada: '5',
      img: 'https://1.bp.blogspot.com/-uUMJfKzGOww/U8gEqHnjQII/AAAAAAAAITM/d8L6aAUB5Ds/s1600/gothan.jpg',
      urlTrailer: 'https://www.youtube.com/embed/UEUU8OyPOyI',
      urlIMDb: 'https://www.imdb.com/title/tt3749900/?ref_=fn_al_tt_1',
      genero: 'Ação', lancamento: '22/09/2014',
      descricao:'A história por trás da ascensão do detetive James Gordon à proeminência em Gotham City nos anos anteriores à chegada de Batman.'
    },
    {
      nome:'Punho de Ferro',
      qtdTemporada: '2',
      img: 'https://deliriumnerd.com/wp-content/uploads/2017/09/Netflix-Iron-Fist-1-620x310.jpg',
      urlTrailer: 'https://www.youtube.com/embed/03W2ffgkYDM',
      urlIMDb: 'https://www.imdb.com/title/tt3322310/?ref_=nv_sr_srsg_0',
      genero: 'Ação', lancamento: '17/03/2017',
      descricao:'Um jovem é conferido com a capacidade das artes marciais é uma mística força conhecida como o punho de ferro.'
    },
    {
      nome:'Falcão e Soldado Invernal',
      qtdTemporada: '1',
      img: 'https://disneyplusbrasil.com.br/wp-content/uploads/2021/03/Falcao-e-o-Soldado-Invernal-Fundo-1024x576.jpg',
      urlTrailer: 'https://www.youtube.com/embed/ZHaokMTWgdY',
      urlIMDb: 'https://www.imdb.com/title/tt9208876/',
      genero: 'Ação', lancamento: '19/03/2021',
      descricao:'Uma produção da Disney e da Marvel Studios, estrelando os personagens carismáticos Falcão e Soldado Invernal.'
    },
    {
      nome:'Os Defensores',
      qtdTemporada: '1',
      img: 'https://miro.medium.com/max/2560/1*HNMF98U11_gELQzp-Oc1HQ.jpeg',
      urlTrailer: 'https://www.youtube.com/embed/bWbLfm0_SXA',
      urlIMDb: 'https://www.imdb.com/title/tt4230076/?ref_=tt_sims_tt',
      genero: 'Ação', lancamento: '18/08/2017',
      descricao:'Situado alguns meses após os eventos da segunda temporada de Demolidor, e um mês após os eventos de Punho de Ferro, os vigilantes Demolidor, Jessica Jones, Luke Cage e Punho de Ferro se unem em Nova York para lutar contra um inimigo comum: o Mão.'
    },

  ];




  ngOnInit(): void {

  }

  mudarValor() {
    this.exibeTabela = false;
  }

  mudarValorS() {
    this.exibeTabelaS = false;
  }

  exibirTabela() {
    this.exibeTabela = true;
  }

  exibirTabelaS() {
    this.exibeTabelaS = true;
  }

  constructor(public sanitizer: DomSanitizer) { }

  listarTrailers(url: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}