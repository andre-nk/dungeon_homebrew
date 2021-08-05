import supportStyle from '../../styles/support.module.scss';

const SupportPage = () => {
    return (
        <div className={supportStyle.container}>
            <img src="https://i.ibb.co/2Y3vbrx/chest-illustration.png" alt="treasure.png"/>
            <h2 className={supportStyle.title}>Support Us</h2>
            <p className={supportStyle.text}>Moonlight Inn is a passionate Indonesia-based D&D community that offers a vast amount of free and definitely epic D&D resources such as extended campaign from the WoTC resource, homebrew adventures, and even more homebrew classes, monsters, etc. Some little donations would be a perfect roll-20 for growing this community, keeping up this server and in the end, keeping us to sharing exclusive resources for free. Nevertheless, supporting this community by simply use our resources and connect with us below is definitely a hit.</p>
        </div>
    );
}
 
export default SupportPage;