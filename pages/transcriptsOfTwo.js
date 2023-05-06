import Pages from 'imp/styles/transcriptoftwo.module.css'
import styles from 'imp/styles/Customs.module.css'
import intro from 'imp/styles/Intro.module.css'
import CusStyles from 'imp/styles/Customs.module.css'
import Link from 'next/link';
import { useState } from 'react';
import { Tabs } from 'imp/components/customLayouts';

export default function TranscriptOfTwo(){

    return(
        <>
            <Tabs c={CusStyles.tabsContShow} />
           <div class={Pages.main}>
            <hr width ="100%" align = "center" size="1"></hr>
            <h1>Transcripts of Two Recent Videos</h1>
            <hr width ="100%" align = "center" size="1"></hr>
            <br></br>
            <p>
            These videotapes were two attempts at covering the same material. They are very similar in content, though they each have a unique quality and some minor differences.
            <br></br><br></br>(One of our correspondents from Germany offered to translate these transcripts into German.)

            <br></br><br></br>09/29/06:
            <br></br><br></br>09/29/06:
            
                        </p>




            </div>

        </>
    );
}