import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ErrorPage = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);

    return (
        <div className="error">zw
            <h1>Oops!</h1>
            <h2>That page cannot be found</h2>
            <Link href="/"><a>Back to Homepage</a></Link>
        </div>
    );
}
 
export default ErrorPage;