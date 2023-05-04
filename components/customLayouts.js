import styles from 'imp/styles/Customs.module.css'


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

export const Logo = ({children}) => {

    return(
        <>
            <div class={styles.mainLogo}>
                {children}
            </div>
        </>
    );
};