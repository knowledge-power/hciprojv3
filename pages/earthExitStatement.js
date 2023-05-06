import Pages from 'imp/styles/earthexitstatement.module.css'
import styles from 'imp/styles/Customs.module.css'
import intro from 'imp/styles/Intro.module.css'
import CusStyles from 'imp/styles/Customs.module.css'
import Link from 'next/link';
import { useState } from 'react';
import { Tabs } from 'imp/components/customLayouts';

export default function EarthExitStatement(){

    return(
        <>
            <Tabs c={CusStyles.tabsContShow} />
            <div class={Pages.main}>
            <hr width ="100%" align = "center" size="1"></hr>
            <h2>Earth Exit Statements by Students</h2>
            <hr width ="100%" align = "center" size="1"></hr><br></br>
            <p>Chkody's
            <br></br>Glnody's
            <br></br>Glnody's

                </p>
           


            </div>
        </>
    );
}