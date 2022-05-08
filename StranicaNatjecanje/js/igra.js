//ovo je phaser 3 funkcija kojom stvaramo podrucje za igru definiramo funkcije i sa parent:'', oznacavamo element u htmlu po idu u kojem ce se nalaziti nasa igra
const config = {
  width: 700,
  height: 600,
  backgroundColor: 'rgba(34,139,34)',
  parent:'container_igre',
  scene: {
    preload,
    create,
    update
  },
}

const game = new Phaser.Game(config)

const gameState = {};
//preload ucitava elemente prije nego sto pocnemo ista raditi npr ove slike za auto i za igrac koje cemo koristiti u igri

function preload() {
  //phaser 3 ne dozvoljava da se koriste file/ predmeti pa moramo sa sigurnog hosta(https) uzeti fileove
  this.load.image('auto', 'https://i.imgur.com/UkLnBcR.png1');
  this.load.image('igrac', 'https://i.imgur.com/jlhyMFo.png?1');
}

//create stvara elemente koji ce kasnije nesto obavljati kao sto je gameState.tipke koji ce pratiti koje tipke su stisnute na tipkovnici
function create() {
  gameState.active = true;
  gameState.tipke = this.input.keyboard.createCursorKeys();
//this. se referira na vlasnicki objekt
  gameState.cesta1 = this.add.rectangle(config.width / 2, 150, config.width, 200, 0xbbbbbb);
  gameState.cesta2 = this.add.rectangle(config.width / 2, 450, config.width, 200, 0xbbbbbb);
//u phaser3 .add.group stvara grupu istih elemenata u ovom slucaju neprijatelja(auta)  
  gameState.neprijatelji = this.add.group()

  function napraviAuto() {
    const red = this.red
    const isEven = Boolean(red % 2);
//Oznacavamo pocetnu tocku visine reda da mozemo stvoriti auta
    const startY = config.height - (25 + (red* 50));
    let startX, kut;
//Da postignemo to da se svaki red auta mijenjaju smjer u redovima jednakog broja auti imaju jedan kut dok u drugom imaju obrnuti
    if (isEven) {
      //config.width je sirina nase igre jer se tocka (x,y) koja je 0,0 gleda kao tocka u gornjem lijevom kutu
      startX = config.width;
      kut = 90;
    } else {
      startX = 0;
      kut = -90;
    }
//stvaramo neprijatelje sa prijasnjim parametrima
    const neprijatelj = gameState.neprijatelji.create(startX, startY,'auto').setAngle(kut)
    neprijatelj.brzina = this.brzina
  }

  const redovi = [1, 2, 3, 4, 7, 8, 9, 10];
  const brzine = [3, 3, 5, 4, 8, 9, 10,11];  

  gameState.autoCreationEvents = [];

  for (let i = 0; i < redovi.length; i++) {
    // stvaramo auta svako 1.1sek+ 0.6sek*(0-1)
    gameState.autoCreationEvents.push(this.time.addEvent({
      delay: Math.random() * 600 + 1100,
      //callback se dogada nakon sto se ostatak funkcije izvrsio(pricekali smo delay) i on vrsi napraviAuto(stvara neprijatelja(auto))
      callback: napraviAuto,
      callbackScope: { red: redovi[i], brzina: brzine[i] },
      loop: true,
    }))
  }
//stvaramo lik igraca 
  gameState.igrac = this.add.sprite(config.width / 2, config.height - 25, 'igrac');
   
//u slucaju da zavrsi igra tako sto kliknemo misem ponovno pokrecemo program
  this.input.on('pointerup', () => {
    if (gameState.active === false) {
      this.scene.restart();
    }
  })
}
//u funkciji update unosimo sve sto ce se ucestalo pregledavati npr. jesmo li stisnuli lijevi gumb ili ne
function update(vrijeme) {
  if (gameState.active) {
    // odgadamo kretanje igraca za 3 sekunde da se auta stvore
    if (vrijeme > 3000) {
      if(gameState.tipke.left.isDown && gameState.igrac.x>25){
        gameState.igrac.x -=5;
    } else if(gameState.tipke.right.isDown && gameState.igrac.x<config.width-25){
        gameState.igrac.x +=5;
    }
      if(Phaser.Input.Keyboard.JustDown(gameState.tipke.up) && gameState.igrac.y>25){
          gameState.igrac.y -=50;
    } else if(Phaser.Input.Keyboard.JustDown(gameState.tipke.down) && gameState.igrac.y<config.height-25){
        gameState.igrac.y +=50;
    }
  }
}
//sa x.getBounds() uzimamo koordinate kutova lika da kasnije mozemo provjeriti jesmo li se zabili u auto

    gameState.neprijatelji.getChildren().forEach(auto => {
      // zadajemo stvorenim autima brzinu iz prijasnje liste ovisno o redu i kutu
      if (auto.angle === 90) {
        auto.x -= auto.brzina
      } else if (auto.angle === -90) {
        auto.x += auto.brzina
      }
      // u slucaju da se koordinati tocaka auta i igraca presijeku zaustavljamo igru i pisemo poruku
      if (Phaser.Geom.Intersects.RectangleToRectangle(gameState.igrac.getBounds(), auto.getBounds())) {
        gameState.active = false

        this.add.text(275, 300, 'GAME OVER!', { fontSize: '30px', fill: '#000000' })
      }
    })
//ako igrac dode do cilja(x,0) pisemo pobjeda ali provjeravamo jeli igrac na y=25 jer igrac je  visine 50 a spriteovima se (x,y) pozicija gleda prema sredistu tijela
    if (gameState.igrac.y === 25) {
      this.add.text(275, 300, 'POBJEDA!', { fontSize: '30px', fill: '#000000' })
      gameState.active = false
    }
  }


