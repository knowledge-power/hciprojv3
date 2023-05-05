import styles from 'imp/styles/Customs.module.css'
import intro from 'imp/styles/Intro.module.css'
import CusStyle from 'imp/styles/Customs.module.css'
import Link from 'next/link';
import { useState } from 'react';


export const MainCont = ({children}) => {

    return(
        <>
            <div class={styles.main}>
                {children}
            </div>
        </>
    );
};

export const Clouds = ({children, ids}) => {

    return(
        <>
            <div class={styles.clouds} id={ids}>
                 {children}
            </div>
        </>
    );
};

export const Logo = ({children, c}) => {

    return(
        <>
            <div class={c}>
                {children}
            </div>
        </>
    );
};

export const CloudsCont = ({children}) => {

    return(
        <>
            <div >
                {children}
            </div>
        </>
    );
};

export const Intro = ({children, ids, imgids, titleIds}) => {
    
    
    return(
        <>
            <div class={intro.intCont}>
                <div class={intro.sec}>
                    <div class={intro.textStyle} id={titleIds}>
                    <h1>HALE-BOPP Brings Closure to:</h1>
                    </div>
                    <div class={intro.textStyle} id={ids}>                        
                        <p>
                        Whether Hale-Bopp has a "companion" or not is irrelevant from our perspective. However, its arrival is joyously very significant to us at "Heaven's Gate." The joy is that our Older Member in the Evolutionary Level Above Human (the "Kingdom of Heaven") has made it clear to us that Hale-Bopp's approach is the "marker" we've been waiting for -- the time for the arrival of the spacecraft from the Level Above Human to take us home to "Their World" -- in the literal Heavens. Our 22 years of classroom here on planet Earth is finally coming to conclusion -- "graduation" from the Human Evolutionary Level. We are happily prepared to leave "this world" and go with Ti's crew.
If you study the material on this website you will hopefully understand our joy and what our purpose here on Earth has been. You may even find your "boarding pass" to leave with us during this brief "window."
We are so very thankful that we have been recipients of this opportunity to prepare for membership in Their Kingdom, and to experience Their boundless Caring and Nurturing.
                        </p>
                    </div>

                </div>
                <div class={intro.sec} id={imgids}>

                </div>
            </div>
        </>
    );
};

export const Tabs = ({c}) => {
    const [keysDD, setKeyDD] = useState(CusStyle.navDDContHide);

    return(
        <>
            <div class={c}>
                <div class={CusStyle.tabsSec}>
                    <Link href="/" class={CusStyle.navs}>Home</Link>
                    <div class={CusStyle.navs} onMouseEnter={()=>{setKeyDD(CusStyle.navDDContShow)}} onClick={()=>{setKeyDD(CusStyle.navDDContHide)}}>
                        Keys                                                
                    </div>
                    <div class={keysDD} onMouseLeave={()=>{setKeyDD(CusStyle.navDDContHide)}}>
                        <div class={CusStyle.navDD}><Link href={'/dosIntro'}>Do's Intro: Our Purpose -- The Simple Bottom Line</Link></div>
                        <div class={CusStyle.navDD}><Link href={'/statement'}>Statement by an E.T Presently Incarnate</Link></div>
                        <div class={CusStyle.navDD}><Link href={'/OverviewOfPresentMission'}>Overview of Present Mission</Link></div>
                        <div class={CusStyle.navDD}><Link href={'/lastChance'}>Last Chance To Advance Beyond Human</Link></div>
                        <div class={CusStyle.navDD}><Link href={'/accessBook'}>To Access Our Book Online in its Entirety</Link></div>
                        <div class={CusStyle.navDD}><Link href={'/transcriptsOfTwo'}>Transcripts of Two Recent Videos</Link></div>
                        <div class={CusStyle.navDD}><Link href={'/positionAgainstSuicide'}>Our Position Against Suicide</Link></div>
                        <div class={CusStyle.navDD}><Link href={'/HowAMember'}>How a member of the kingdom of Heaven Might Appear</Link></div>
                        <div class={CusStyle.navDD}><Link href={'/earthExitStatement'}>Earth Exit Statements by Students</Link></div>
                        <div class={CusStyle.navDD}><Link href={'/ExitPressRelease'}>Exit Press Release</Link></div>
                        <div class={CusStyle.navDD}><Link href={'/awayTeam'}>Away Team Returns to Level Above Human</Link></div>
                    </div>
                    <div class={CusStyle.navs}>Order</div>
                    <div class={CusStyle.navs}>About</div>
                </div>
            </div>
        </>
    );
};