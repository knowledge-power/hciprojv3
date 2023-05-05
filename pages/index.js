import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'imp/styles/Home.module.css'
import CusStyles from 'imp/styles/Customs.module.css'
import intro from 'imp/styles/Intro.module.css'
import {MainCont, Clouds, Logo, Intro} from 'components/customLayouts.js'
import { useCallback, useEffect, useState } from 'react'
import Keys from './keys'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [leftCloud, setLeftCloud] = useState(CusStyles.leftClouds);
  const [leftBottomCloud, setLeftBottomCloud] = useState(CusStyles.leftBottomClouds);
  const [rightCloud, setRightCloud] = useState(CusStyles.rightClouds);
  const [rightBottomCloud, setRightBottomCloud] = useState(CusStyles.rightBottomClouds);
  const [marqClouds, setMarqClouds] = useState(CusStyles.marqueeClouds);
  const [logoSize, setLogoSize] = useState({
    w: 1920,
    h: 995,
  });
  const [mainLogoSize, setMainLogoSize] = useState(CusStyles.mainLogo);
  const [introCont, setIntroCont] = useState(intro.contentHide);
  const [introImg, setIntroImg] = useState(intro.introImgHide);

  const [scrollY, setScrollY] = useState(0);
  const onScroll = useCallback(
    event => {
      const {pageYOffset, scrollY} = window;
      if(scrollY >= 50){        
        setLeftCloud(CusStyles.leftCloudsHide);
        setLeftBottomCloud(CusStyles.leftBottomCloudsHide);
        setRightCloud(CusStyles.rightCloudsHide);
        setRightBottomCloud(CusStyles.rightBottomCloudsHide);
        setMarqClouds(CusStyles.marqueeCloudsHide);
        
        setMainLogoSize(CusStyles.mainLogoResize);
        console.log("yOffset", pageYOffset, "Scrolly", scrollY);
        setScrollY(window.pageYOffset);
        //setIntroCont(intro.contentShow);
        if(scrollY >= 250){
          setIntroCont(intro.contentShow);
          if(scrollY >= 300){
            setIntroImg(intro.introImg);
          }
        }
      }else{
        console.log("ScrollY");
      }      
      
    }
  );

  useEffect(
    ()=>{
      window.addEventListener("scroll", onScroll, {passive: true});
      return () => {
        window.removeEventListener("scroll", onScroll, {passive: true});
      }
    }, []
  );

  return (
    <>
      <Head>
        <title>Heaven's Gate</title>
        <meta name="description" content="How and when it maybe entered" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/haleBoppIcon3.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <MainCont>       
          <Clouds >
          <Image
            src="/images/starts.png"
            height={995}
            width={1945}
            alt='stars'
            priority
          />
          </Clouds>
          <Clouds ids={marqClouds}>
          <Image
            src="/images/marqueeClouds.png"
            height={995}
            width={1416}
            alt='leftBigCloud'
            priority
          />
          </Clouds>   
          <Clouds ids={leftBottomCloud}><Image
            src="/images/realClouds-leftBottom.png"
            height={995}
            width={1416}
            alt='leftBigCloud'
            priority
          /></Clouds>
          <Clouds ids={rightCloud}><Image
            src={"/images/realClouds-right.png"}
            height={712}
            width={1920}            
            alt='rightBigCloud'
            priority
          /></Clouds>
          <Logo c={mainLogoSize}>
          {/*<Image
            src={"/images/logoSample.png"}
            height={logoSize.h}
            width={logoSize.w}            
            alt='rightBigCloud'
            priority
          />*/}
          </Logo>
          <Clouds ids={leftCloud}><Image
            src="/images/realClouds-left.png"
            height={712}
            width={1416}
            alt='leftBigCloud'
            priority
          /></Clouds>
          <Clouds ids={rightBottomCloud}><Image
            src={"/images/realClouds-rightBottom.png"}
            height={995}
            width={1920}            
            alt='rightBigCloud'
            priority
          /></Clouds>
          <Intro ids={introCont} imgids={introImg} />          
          
        </MainCont>
      </main>
    </>
  )
}
