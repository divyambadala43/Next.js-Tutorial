import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>Page not found.</h2>
            <p>Go back to <Link href="/"><a>Home</a></Link></p>
        </div>);
}
 
export default NotFound;