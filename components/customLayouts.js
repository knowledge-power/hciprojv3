import styles from 'imp/styles/Customs.module.css'
import intro from 'imp/styles/Intro.module.css'
import CusStyle from 'imp/styles/Customs.module.css'
import Link from 'next/link';


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

export const Intro = ({children, ids, imgids}) => {
    
    
    return(
        <>
            <div class={intro.intCont}>
                <div class={intro.sec}>
                    <div class={intro.textStyle} id={intro.title}>

                    </div>
                    <div class={intro.textStyle} id={ids}>
                        <h1>HALE-BOPP Brings Closure to:</h1>
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

    return(
        <>
            <div class={c}>
                <div class={CusStyle.tabsSec}>
                    <Link href="/" class={CusStyle.navs}>Home</Link>
                    <div class={CusStyle.navs}>
                        Keys                                                
                    </div>
                    <div class={CusStyle.navDDCont}>
                        <div class={CusStyle.navDD}><Link href={'/dosIntro'}>Do's Intro: Our Purpose -- The Simple Bottom Line</Link></div>
                        <div class={CusStyle.navDD}>Statement by an E.T Presently Incarnate</div>
                        <div class={CusStyle.navDD}>Overview of Present Mission</div>
                        <div class={CusStyle.navDD}>Last Change To Advance Beyond Human</div>
                    </div>
                    <div class={CusStyle.navs}>Order</div>
                    <div class={CusStyle.navs}>About</div>
                </div>
            </div>
        </>
    );
};