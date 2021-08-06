import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/icon.png" alt="" />
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