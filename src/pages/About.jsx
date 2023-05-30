import React, { useState } from 'react';
import styles from './css/About.module.css';
import sun from '../imgs/youl.png';
import youl from '../imgs/sun.png';
import FadeIn from 'react-fade-in';
import { TbWorld } from 'react-icons/tb';

export default function About() {
  const [english, setEnglish] = useState(true);
  const toggleLanguage = () => {
    setEnglish(!english);
  };
  return (
    <section className={styles.container}>
      <button className={styles.button} onClick={toggleLanguage}>
        <TbWorld />
        <div>{english ? 'German' : 'English'}</div>
      </button>
      <hr />
      {
        //english
        english && (
          <>
            <img className={styles.img} src={sun} alt='Sunyoul Choi' />
            <ul className={styles.ul}>
              <FadeIn>
                <li className={styles.li}>
                  The Korean violinist <b>Sunyoul Choi</b> is a versatile artist
                  who works equally well passionately playing solo, chamber
                  music and orchestra.
                </li>
                <li className={styles.li}>
                  He celebrated numerous national and international successes as
                  a prize winner Competitions and as final list. Most recently
                  he won ‘18th Padova international Competition Virtuosite 2021’
                  as 1st Prize , ‘2021 Quebec Music Competition’ as Platinum
                  Medal , ‘2nd France Music Competition 2020’ as 1st Prize and
                  ‘Les Musicales Du Center the Lending Competition in 2020’ as
                  First Named,
                </li>
                <li className={styles.li}>
                  He also played in 2019-2020 as an internship member of the
                  German Radio Philharmonic in Saarbrucken Kaiserslautern.
                  Mr.Choi was also invited to the Lucern Festival Academy since
                  2021 and he was invited 2022 Lucern Festival Contemporary
                  Orchestra Co-reader.
                </li>
                <li className={styles.li}>
                  As a soloist he has already given concerts with the Seoul
                  Symphony Orchestra, Korea National Military Symphony Orchestra
                  and the Ippolitov Chamber Orchestra. it further play to
                  concerts and recital in South Korea, Italy, Germany and
                  Austria followed as a Soloist and Chamber Musician, e.g. Winer
                  Saal in Salzburg, Padova, Abano Terme, Sardinia , Atri in
                  Italy etc.
                </li>
                <li className={styles.li}>
                  Grew up in Korea, he started his musical career at the age of
                  10 years. After graduating from Seoul Arts High School, he
                  graduated the Yonsei University in Seoul with Prof.Dong-Suk
                  Kang.
                </li>
                <li className={styles.li}>
                  He also received important musical instincts from Viviane
                  Hagner, Ik-Hwan Bae, Roman Simovic , Gordan Nikolitch , David
                  Grimal , Alina Ibragimova and Petrica Kopatchinskaja.
                </li>
                <li className={styles.li}>
                  After his Master degree with Viviane Hagner at Mannheim
                  University of music and Performing Arts. He is currently
                  completing his Concert Exam’s degree with Prof. Gordan
                  Nikolitch at the Saar University of music and Performing Arts.
                </li>
              </FadeIn>
            </ul>
          </>
        )
      }

      {
        //german
        !english && (
          <>
            <img className={styles.img} src={youl} alt='Sunyoul Choi' />
            <ul className={styles.ul}>
              <FadeIn>
                <li className={styles.li}>
                  Der Koreanische Geiger <b>Sunyoul Choi</b> ist ein vielseitige
                  Künstler, der gleichermaßen leidenschaftlich Solo, Kammermusik
                  und Orchester spielt.
                </li>
                <li className={styles.li}>
                  Er feierte zahlreiche nationale und internationale Erfolge als
                  Preisträger bei Wettbewerben. Zuletzt gewann er den ‘18.Padova
                  International Competition Virtuosite 2021’ als 1. Preis, den
                  ‘2021 Quebec Music Competition’ als Platinum Medal, den
                  ‘2.France Music Competition 2020’ als 1. Preis und als und ́Les
                  Musicales Du Centre the Lending Competition 2020 ́ als Erster
                  genannt.
                </li>
                <li className={styles.li}>
                  Er spielte außerdem 2019-2020 als Plaktikums Mitglied der
                  Deutsche Radio Philharmonie in Saarbrücken Kaiserslautern.
                  Herr Choi wurde seit 2021 zur Lucerne Festival Academy
                  eingeladen und wurde er 2022 Lucerne Festival Contemporary
                  Orchestra Stellv.Konzertmeister eingeladen.
                </li>
                <li className={styles.li}>
                  Als Solist konzertierte er bereits mit dem Seoul Symphony
                  Orchestra, dem Korea National Military Symphony Orchestra und
                  dem Ippolitov Chamber Orchestra. Es folgten weitere konzerte
                  in Südkorea, Italien, Deutschland und Österreich als Solist
                  und Kammermusiker z.B Winer Saal in Salzburg, Sardinien, Atri
                  in Italien usw. Letzten Februar hatte er erfolgreich zwei
                  Rezital in Padova Italien.
                </li>
                <li className={styles.li}>
                  Aufgewachsen in Korea, begann er seine musikalische Laufbahn
                  im Alter von 10Jahren. Nach seinem Abschluss an der Seoul Art
                  High school absolvierte er die Yonsei University in Seoul bei
                  Prof.Dong Suk Kang. Wichtige musikalische Impulse erhielt er
                  auch von Viviane Hagner, Ik Hwan Bae, Roman Simovic, Gordan
                  Nikolitch, David Grimal und Patricia Kopatchinskaja.
                </li>
                <li className={styles.li}>
                  He also received important musical instincts from Viviane
                  Hagner, Ik-Hwan Bae, Roman Simovic , Gordan Nikolitch , David
                  Grimal , Alina Ibragimova and Petrica Kopatchinskaja.
                </li>
                <li className={styles.li}>
                  Nach seinem Masterstudium bei Viviane Hagner an der Hochschule
                  für Musik Mannheim, Derzeit absolviert er sein Konzertexamen
                  bei Prof. Gordan Nikolitch an der Hochschule für Musik Saar.
                </li>
              </FadeIn>
            </ul>
          </>
        )
      }
    </section>
  );
}
