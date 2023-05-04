import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'imp/styles/Home.module.css'
import CusStyles from 'imp/styles/Customs.module.css'
import {MainCont, Clouds, Logo} from 'components/customLayouts.js'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
          <Clouds ids={CusStyles.leftClouds}><Image
            src="/images/realClouds-left.png"
            height={712}
            width={1416}
            alt='leftBigCloud'
          /></Clouds>
          <Clouds ids={CusStyles.leftBottomClouds}><Image
            src="/images/realClouds-leftBottom.png"
            height={995}
            width={1416}
            alt='leftBigCloud'
          /></Clouds>
          <Clouds ids={CusStyles.rightClouds}><Image
            src={"/images/realClouds-right.png"}
            height={712}
            width={1920}            
            alt='rightBigCloud'
          /></Clouds>
          <Logo>
          <Image
            src={"/images/logoSample.png"}
            height={995}
            width={1920}            
            alt='rightBigCloud'
          />
          </Logo>
          <Clouds ids={CusStyles.rightBottomClouds}><Image
            src={"/images/realClouds-rightBottom.png"}
            height={995}
            width={1920}            
            alt='rightBigCloud'
          /></Clouds>

          
        </MainCont>
      </main>
    </>
  )
}
