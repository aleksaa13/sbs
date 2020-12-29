import React, { useState } from "react";
import styles from "../Styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import Slider from "../Slider";

const Home = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const toggleClass1 = () => {
    setVisible1(!visible1);
  };
  const toggleClass2 = () => {
    setVisible2(!visible2);
  };

  return (
    <div>
      <div className={styles.big}>
        Kvalitetno rješenje<br></br> i vrhunska podrška
      </div>

      <Slider></Slider>
      <div className={styles.boxes}>
        <div className={styles.containers}>
          <button className={styles.accordion} onClick={toggleClass1}>
            <FontAwesomeIcon icon={faAddressCard} /> Zašto baš SBS Net
            Montenegro
            <FontAwesomeIcon
              style={{ float: "right" }}
              icon={visible1 ? faMinus : faPlus}
            />
          </button>
          <div className={visible1 ? styles.panel : styles.invisible}>
            <p>
              Kompanija Satellite Broadband Service Network Montenegro je
              osnovana 2010. godine, sa sjedištem u Podgorici. Ova nova i
              savremena kompanija osnovana je sa ciljem da, po prvi put u Crnoj
              Gori, razvije i ponudi uslugu pristupa Internetu putem satelita. U
              pionirskom koracima ponude jednog od najnaprednijijih servisa u
              oblasti satelitskih širokopojasnih usluga, Tooway, SBS Network
              Montenegro je za partnera izabrao renomiranu svjetsku kompaniju
              Skylogic. Tooway predstavlja satelitski servis koji obezbjeđuje
              najjednostavniji, brz i fleksibilan dvosmjerni širokopojasni
              pristup Internetu sa maksimalnom brzinom prilikom preuzimanja
              podataka (download) od 20 Mbps i maksimalnog brzinom postavljanja
              podataka (Upload) od 6 Mbps. SBS Net Montenegro svoju ponudu
              usmjerio je ka svim segmentima tržista: fizičkim licima, biznis
              sektoru i javnim institucijama. Raznovrsnost ponude garantuje da
              svako može naći odgovarajući, pristupačan i pouzdan paket koji ce
              zadovoljiti specijalne potrebe u skladu sa projektovanim obimom
              saobraćaja.
            </p>
          </div>
        </div>
        <div className={styles.containers}>
          <button className={styles.accordion} onClick={toggleClass2}>
            <FontAwesomeIcon icon={faQuestionCircle} /> FAQ
            <FontAwesomeIcon
              style={{ float: "right" }}
              icon={visible2 ? faMinus : faPlus}
            />
          </button>
          <div className={visible2 ? styles.panel : styles.invisible}>
            <p>
              Šta je Tooway™? Tooway™ je visoko kvalitetni, pouzdan, korisnički
              satelitski širokopojasni (broadband) pristup Internetu za
              korisnike širom Evrope. Zašto bi trebao kupiti Tooway™? Ako vam je
              na raspolaganju jedino dial-up način za pristup Internetu onda je
              Tooway pravo rješenje za vas. Nudi vam alternativu za
              širokopojasni Internet a posebno je pogodan za ruralna područja I
              područja gdje nema kablovske infrastrukture drugih Internet
              operatora. Koja oprema mi treba? Sve što vam treba je satelitska
              antena prečnika 96 cm za Ku-band servis i Tooway™ satelitski
              modem. Koliko je brz Tooway™? Tooway™ nudi downlink brzine do 3.6
              Mbps pri Ku-band konfiguraciji. Uplink brzine su dostupne do 384
              kbps. Mogu li instlirati Tooway™ samostalno? Neophodno je da
              instalaciju odradi sertifikovani instalater SBS Net Montnegro.
              Koliko košta? Cjene zavise od izabranog paketa. Više detalja na
              www.sbsnetmontenegro.com. Treba li mi telefonska linija? Ne,
              Tooway™ ne zahtijeva telefonsku liniju . Postoje li monimalni
              zahtjevi za PC ? Ne, bilo koji PC sa nekim od operativnih sistema
              (MAC, Windows ilii Linux) sa mrežnom karticom (10/100 Mbps) može
              biti povezan na satelitski modem. Može li se Tooway™ integrisati u
              mrežu? Da, samo treba da povežete IP ruter izmedju mreže u vašoj
              kući I satelitskog modema. Mogu li koristiti bezžičnu kućnu mrežu
              sa Tooway™? Da, bilo koji Wi-Fi ruter može biti povezan sa Tooway™
              modemom. Mogu li igrati online igre sa Tooway™? U principu da, ali
              nije preporučljivo igrati igru zvanu "Egoshooter" jer ping vrijeme
              duže (oko 600 – 650 ms). Na kojoj tehnologiji je baziran Tooway™?
              Tooway™ je baziran na ViaSat SurfBeam® DOCSIS® dvosmjernom
              širokopojasnom satelitskom sistemu. Koliko dugo je kašnjenje pri
              prenosu podataka putem satelita? Kružno putovanje za prenos
              podataka do satelita je oko 250 msec. Dvosmjerni protokol ima
              kašnjenje oko 600 msec uključujući kašnjenje SurfBeam sistema. Da
              bi se pomenuto kašnjenje smanjilo, kako ne bi uticalo na TCP
              saobraćaj, u SurfBeam modemu I DOCSIS sistemu su implementirane
              funkcionalnost tzv. Performance Enhancing Proxy (PEP) I Web
              akceleracija. Koliko je stabilan Tooway servis kada je nevrijeme?
              Nekada se jaka kiša smatrala za potencijalnu barijeru uspješnom
              radu Ka satelitskih sistema. I zaista, smanjenje nivoa signala je
              toliko značajno da je bilo teško garantovati visokokvalitetnu
              uslugu. ViaSat je uključio u SurfBeam satelitski sistem, air
              interface tehnologiju koja rješava ovaj problem. SurfBeam system
              automatski odgovara na kišni fade sa uplink kontrolom napajanja i
              prilagodljivim tehnikama kodiranja podataka (Adaptive Coding and
              Modulation - ACM) koje prevazilaze potencijalna iskakanja,
              optimizirajući upotrebu satelitskog transponder bandwidth. Ova
              karakteristika čini Tooway™ mrežu pouzdanijom od drugih
              dvosmjernih korisničkih satelitskih usluga koje se nude u Evropi.
              Koje frekvencije koristi Tooway™? Tooway™ radi u Ku- I Ka-band
              režimu. U Crnoj Gori koristi se Ku-band kapacitet na kompanijskom
              EUROBIRD™ 3 satelitu na 33° istočno.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
