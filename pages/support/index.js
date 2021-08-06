import supportStyle from '../../styles/support.module.scss';
import Head from 'next/head';

const SupportPage = () => {
    return (
        <>
            <Head>
                <title>Homebrew | Support us</title>
                <meta name="keywords" content="home"/>
            </Head>
            <div className={supportStyle.container}>
                <img src="/chest-illustration.png" alt="treasure.png"/>
                <h2 className={supportStyle.title}>Support Us</h2>
                <p className={supportStyle.text}>Moonlight Inn is a passionate Indonesia-based D&D community that offers a vast amount of free and definitely epic D&D resources such as extended campaign from the WoTC resource, homebrew adventures, and even more homebrew classes, monsters, etc. Some little donations would be a <b>perfect roll-20 </b>for growing this community, keeping up this server and in the end, keeping us to sharing exclusive resources for free. Nevertheless, supporting this community by simply use our resources and connect with us below is definitely a hit.</p>
                <a href="https://www.buymeacoffee.com/fullstackdre" target="_blank"><img className={supportStyle.support_btn} src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee"/></a>
            </div>
        </>
    );
}
 
export default SupportPage;