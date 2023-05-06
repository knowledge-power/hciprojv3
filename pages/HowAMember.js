import Pages from 'imp/styles/howamember.module.css'
import styles from 'imp/styles/Customs.module.css'
import intro from 'imp/styles/Intro.module.css'
import CusStyles from 'imp/styles/Customs.module.css'
import Link from 'next/link';
import { useState } from 'react';
import { Tabs } from 'imp/components/customLayouts';


export default function HowAMember(){

    return(
        <>
            <Tabs c={CusStyles.tabsContShow} />
            <div class={Pages.main}>
            <h2>How a Member of the Kingdom of Heaven might appear</h2>
           


            </div>
        </>
    );
}