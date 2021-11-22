import styles from '../styles/Home.module.css'
import Link from 'next/Link'
import {useRouter} from "next/router";
import Head from 'next/Head';

export default function Home() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <Head>
                <title>My title</title>
            </Head>
            <h1>Home Page</h1>
            <InsideDiv data={"inside div text"}/>
            <InsideDiv data={"second - inside div text"}/>
            <div>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
            </div>

            <style jsx>{`
                h1 {
                font-size:3rem;
                color: green;
                }
            `}</style>
        </div>
    )

}

const InsideDiv = ({data}) => {
    return (
        <div>{data}</div>
    )
}
