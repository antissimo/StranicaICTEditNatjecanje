AOS.init();/* Inicijalizacija library-a za efekte pri skrolanju*/
$(document).ready(function(){
  $('.aniview').AniView();
});
$('.aniview').AniView(options);/* Inicijalizacija library-a*/
function Cijena() {
    document.getElementById("tekst_za_minjat").innerHTML = "Nedavna istraživanja su pokazala kako je proizvodnja električnih automobila sve jeftinija i kako bi u neko dogledno vrijeme mogla sustići cijenu proizvodnje benzinskih automobila.Iako je cijena električnih automobila još uvijek veća od cijene benzinskih, pomoć okolišu i manji trošak energije čine električni automobil jeftinijom varijantom";
    document.getElementById("misto_za_tekst").style.visibility='visible';/*Pojavi se bijeli div preko slike da se bolje tekst vidi*/
}
function Potrošnja() {
    document.getElementById("tekst_za_minjat").innerHTML = "Izravne emisije ugljikova dioksida iz električnog automobila nema, a izravna emisija dizelskog automobila je 82 grama/km. Dizelaš ima prosječnu izravnu potrošnju oko 145 MJ/100 km, što je energetska vrijednost 3,8 litara dizelskoga goriva. Električni ima prosječnu izravnu potrošnju 44 MJ/100 km, uz 3,6 MJ/kWh, što je samo oko 30 posto potrošnje dizelskog";
    document.getElementById("misto_za_tekst").style.visibility='visible';

  }
function Sigurnost() {
    document.getElementById("tekst_za_minjat").innerHTML = "Električni automobili podvrgavaju se jednakim sigurnosnim testiranjima kao i 'obični' i legalno im je dozvoljeno da voze po javnim cestama i sudjeluju u prometu,osim toga električni auti u sebi nemaju eksplozivnu tekućinu pa su u slučajima sudara sigurniji.Sve u svemu, električni auti su u najmanju ruku jednako sigurni kao i ostala auta, ako ne i sigurnija za pojedinca"
    document.getElementById("misto_za_tekst").style.visibility='visible';
  }
function Borna(){
  document.getElementById("Bornin_lik").innerHTML = "Borna Čotić"
  document.getElementById("Bornina_za_sliku").innerHTML = "Klikni na sliku za dodatne informacije";
  document.getElementById("Lukina_za_sliku").innerHTML = " ";
  
}
function Ante(){
  document.getElementById("Antin_lik").innerHTML = "Ante Bošković"
  document.getElementById("Antina_za_sliku").innerHTML = "Klikni na sliku za dodatne informacije"
  document.getElementById("Lukina_za_sliku").innerHTML = " ";
}
function Luka(){
  document.getElementById("Lukin_lik").innerHTML = "Luka Katić"
  document.getElementById("Lukina_za_sliku").innerHTML = "Klikni na sliku za dodatne informacije"
}
function Mice_se_tekst(){/*Kad se miš makne sa avatar nestaje tekst*/
  document.getElementById("Bornin_lik").innerHTML = ""
  document.getElementById("Lukin_lik").innerHTML = ""
  document.getElementById("Antin_lik").innerHTML = ""
  document.getElementById("Bornina_za_sliku").innerHTML = ""
  document.getElementById("Antina_za_sliku").innerHTML = ""
  document.getElementById("Lukina_za_sliku").innerHTML = "Pređite preko avatara"
}
function punionice(){
  var puni=document.getElementById("punionice2").innerHTML
  if (puni==""){/*Funkcija koja omogućuje da kad prvi put kliknemo botun tekst se pojavi, a kad drugi put nestane*/
  puni="Trenutno u Hrvatskoj ima 20 punionica od kojih je 7 javnih, zasad ih većina omogućuju besplatno punjenje jer su u fazi razvijanja";
  }
  else{
    puni=""
  }
  document.getElementById("punionice2").innerHTML=puni;
  document.getElementById("punionice2").style.fontSize="30px";
}
function izumitelj(){
  var smisli=document.getElementById("izumitelj2").innerHTML
  if (smisli==""){
  smisli="Prvi električni automobil proizveden je još u 19. stoljeću, ali na točnom datumu se lome koplja. Dok neki podaci govore da je prvo električno vozilo osposobio engleski izumitelj Thomas Parker 1884. godine, njemački mediji nedavno su pisali kako je njegov tvorac ustvari slavni Ferdinand Porsche i da je godina izuma 1898.";
  }
  else{
    smisli=""
  }
  document.getElementById("izumitelj2").innerHTML=smisli;
  document.getElementById("izumitelj2").style.fontSize="30px";
}
function isplativost(){
  var isplati=document.getElementById("isplative2").innerHTML
  if (isplati==""){
  isplati="Najčešći odgovor je: više nego što vam treba, naravno koliko auto može proći sa punom baterijom ovisi o autu, no većina električnih auta danas može prijeći 300-tinjak kilometra sa jednom baterijom i taj broj svakim danom raste";
  }
  else{
    isplati=""
  }
  document.getElementById("isplative2").innerHTML=isplati;
  document.getElementById("isplative2").style.fontSize="30px";
}
function brzina(){
  var brzi=document.getElementById("brzina2").innerHTML
  if (brzi==""){
  brzi="Vrlo često baterija traje jednako dugo kao i sam automobil ali da bi to uspjeli moramo 'poštediti' bateriju tako što je pokušavamo održati između 50% i 80% napunjenu(iznad 80% zagrijava se nepotrebno baterija), i držimo auto u uvjetima koji nisu ni prehladni ni prevrući za bateriju";
  }
  else{
    brzi=""
  }
  document.getElementById("brzina2").innerHTML=brzi;
  document.getElementById("brzina2").style.fontSize="30px";
}
function Vrati(){//Nakon što se miš makne sa slike vraća se ovaj tekst
  document.getElementById("tekst_o_nama").innerHTML ="Pređite preko slika da se pojavi tekst"
}
function BornaCotic(){
  document.getElementById("tekst_o_nama").innerHTML ="Borna Čotić, učenik 2. razreda Prirodoslovne škole Split.Svoje slobodno vrijeme volim provoditi igrajući igrice ili biti u društvu šahista. Ova godina donijela mi je puno uspjeha na području šaha (1. mjesto), sudokua , matematike i informatike. Trenutno nisam siguran s čim se želim baviti u budućnosti, ali zahvaljujući ovoj radionici dobio sam bolju sliku što me očekuje ukoliko se odlučim za informatiku.Najdraži dio informatike su mi programiranje i rad s robotom. Ove godine su na Festivalu znanosti studenti PMF-a na zabavan način prikazali su nam što se sve može naučiti i napraviti, te bio volio kada bi bilo više radionica tog tipa (robot, mikro:bit, raspberry pi)."
}
function LukaKatic(){
  document.getElementById("tekst_o_nama").innerHTML ="Luka Katić, učenik 2. razreda Prirodoslovne škole Split. Ova radionica mi nije bila zahtjeva s obzirom na prethodno znanje iz programiranja koje sam stekao u SŠ učeći Python. Sljedeće godine želio bih nastaviti na napredni tečaj te naučiti tehnologije koje se korite u firmama. Slobodno vrijeme najrađe provodim u prirodi s društvom, a ponekad i u društvu šahista „Mornar“. U budućnosti bih se volio baviti programiranjem.Zahvaljujući svojim profesorima iz škole koji nam daju mnogo praktičnog znanja na vježbama, imam bolji uvid što me čeka na fakultetu."
}
function AnteBoskovic(){
  document.getElementById("tekst_o_nama").innerHTML ="Ante Bošković, učenik 2. razreda Prirodoslovne škole Split. Sudjelujem na ovoj radionici kako bi proširio svoje informatičko znanje te stekao iskustvo u daljnjem školovanju. S ostatkom svojeg tima sudjelujemo na mnogobrojnim radionicama i natjecanjima. Ove godine po prvi put sudjelovao sam na natjecanju iz informatike Dabar i Infokup, te sam stekao nova iskustva i znanja. Zahvaljujući svojoj profesorici koja nas je uključila u različite izvannastavne aktivnosti informatika me još više zaintrigirala te se planiram dalje razvijati u području programiranja (npr. Izrada aplikacija, igrica..)."
}
function MijenjanjeZanimljivosti(){ 
  broj_ponavljanja=document.getElementById("auto_za_efekt").innerHTML.valueOf("animation-iteration-count") 
  alert(broj_ponavljanja)
} 
var animacija = document.getElementById("auto_ide");
anim.addEventListener("animationiteration", AnimationListener, false);


function gorivo(){
  var value = document.getElementById("postotak").value;
  if (value<=50){
      document.getElementById("stupac").style.height = value*2 + "%";
  }   
  else if(value>50){
    document.getElementById("stupac").style.height = "100%"
  }
  else{
      document.getElementById("stupac").style.height = "0" + "%";
      value=0
  }    
  document.getElementById("stupac").style.width = "100%";
}
function predaj(){
  var value = document.getElementById("postotak").value;
  if (value>0 ){
    value=value;
  }
  else{
    value=0;
  }
  document.getElementById("litre").innerHTML=value;
  document.getElementById("energija").innerHTML=Math.round(value*34.5)+" MJ";
  document.getElementById("udaljenost_benzin").innerHTML=Math.round(value*6)+" ";
  document.getElementById("udaljenost_elektricni").innerHTML=Math.round(value*24.3) +" kilometara ";

}

function promijeni_zanimljivost(){
  zanimljivost=document.getElementById("zanimljivost_za_minjat").innerHTML;
  function mijenjaj(){
    if (zanimljivost=="Trenutno najbrži auto na svijetu je električan, i osmislio ga je hrvatski poduzetnik Mate Rimac"){ 
      zanimljivost="Tesla Roadster 2 trenutno je električni auto sa najvećim dometom u jednom punjenju";
    }
    else if(zanimljivost=="Tesla Roadster 2 trenutno je električni auto sa najvećim dometom u jednom punjenju"){
      zanimljivost="Iako je pušten u prodaju prije već 9 godina Nissan Leaf još uvijek je najuspješniji električni automobil";
    }
    else if(zanimljivost=="Iako je pušten u prodaju prije već 9 godina Nissan Leaf još uvijek je najuspješniji električni automobil"){
      zanimljivost="Krajem 19. i početkom 20.stoljeća većina automobila je bila električna, no tokom 20.stoljeća oni su pali u zaborav";
    }
    else if(zanimljivost=="Krajem 19. i početkom 20.stoljeća većina automobila je bila električna, no tokom 20.stoljeća oni su pali u zaborav"){
      zanimljivost="Trenutno najbrži auto na svijetu je električan, i osmislio ga je hrvatski poduzetnik Mate Rimac";
    }

    document.getElementById("zanimljivost_za_minjat").innerHTML=zanimljivost;
  }   
    
    window.setInterval(mijenjaj, 9999);/*setInterval(naziv funkcije,trajanje intervala u milisekundama) */ 
}
