import Link from 'next/link';

const FullButton = ({ href, children }) => (
    <>
        <style jsx>{`
            a {
                font-size: 16px;
                color: #fff;
                background-color: blue;
                border-radius: 7px;
                padding: 9px 8px;            
            }

            a:hover {
                box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),
                0 5px 15px 0 rgba(0,0,0,0.08);
            }
    
        `}</style>
        <Link href={href}>
            <a>
                {children}
            </a>
        </Link>
    </>
);

export default FullButton;