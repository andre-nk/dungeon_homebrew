import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src="/icon.png" alt="" />
            </div>  
            <div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/collections"><a>Collection</a></Link>
                <Link href="/support"><a>Support us</a></Link>
            </div>
        </nav>
    );
}
 
export default Navbar;