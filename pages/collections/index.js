import Head from 'next/head'
import styles from '../../styles/item.module.scss';

export const getStaticProps = async () => {
    const resource = await fetch('https://www.dnd5eapi.co/api/races');
    const data = await resource.json();

    return {
        props: {classes: data['results']}
    }
}

const CollectionPage = ({classes}) => {

    console.log(classes);

    return (
        <>
            <Head>
                <title>Homebrew | Collections</title>
                <meta name="keywords" content="home"/>
            </Head>
            <div>
                <h2>Collections</h2>
                {
                    classes.map((item, index) => (
                        <div key={index}>
                            <a className={styles.single}>
                                <h4>{item.name}</h4>
                            </a>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
 
export default CollectionPage;