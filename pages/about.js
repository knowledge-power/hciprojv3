import Pages from 'imp/styles/about.module.css'
import styles from 'imp/styles/Customs.module.css'
import intro from 'imp/styles/Intro.module.css'
import CusStyle from 'imp/styles/Customs.module.css'
import Link from 'next/link';
import { useState } from 'react';

export default function order(){

    return(
        <>
            <div class={Pages.main}>
            <h2>About</h2>
            
            <br></br><br></br><br></br><br></br> Requests For Materials Can Be Emailed To:   rep@heavensgate.com
            <br></br>Or Sent Via Postal Service To:

            <br></br><br></br><br></br><br></br> TELAH Services
            <br></br> 4757 E. Greenway Rd. Ste. 103-178
            <br></br> Phoenix, AZ 85032




            </div>
        </>
    );
}