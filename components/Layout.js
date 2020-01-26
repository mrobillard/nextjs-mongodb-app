import React, { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import FullButton from './FullButton';

export default ({children}) => {
    return (
        <>
            <style jsx global>{`
                .row {
                    width: 1040px;
                    margin: 0 auto;
                }
                
                a {
                    text-decoration: none !important;
                    cursor: pointer;
                    color: #0070f3;
                }

                a:hover {
                    color: #0366d6
                }

                body {
                    margin: 0;
                    padding: 0;
                    color: #111;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto';
                    background-color: #fff;
                }

                footer {
                    text-align: center;
                    font-size: 0.8rem;
                    margin-top: 15px;
                    margin-bottom: 15px;
                    color: #888;
                    position: absolute;
                    bottom: 0;
                    width: 100vw;
                }

                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .nav__title {
                    margin-left: 10px;
                }

                .nav__signin {
                    margin-right: 10px;
                }

                .nav__signin--signin {
                    margin-right: 20px;
                }

                .footer__container {
                    display: felx;
                    justify-content: space-between;
                    align-items: bottom;
                }

                .footer__container--left {
                    margin-left: 15px;
                    padding-bottom: 5px;
                }

                .footer__container--right {
                    margin-right: 5px; 
                }
            `}
            </style>
            <div className="row">
                <Head>
                    <title>Next.js + MongoDB App</title>
                    <meta
                        key="viewport"
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <meta
                        name="description"
                        content="Boilerplate for a Next.js + MongoDB App."
                    />
                    <meta
                        property="og:title"
                        content="Next.js + MongoDB App"
                    />
                    <meta
                        property="og:description"
                        content="Boilerplate for a Next.js + MongoDB App."
                    />
                </Head>
                <header>
                    <nav>
                        <div className="nav__title">
                            <Link href="/">
                                <a>
                                    <h1>Next.js + MongoDB App</h1>
                                </a>
                            </Link>
                        </div>
                        <div className="nav__signin">
                            <Link href="/Login">
                                <a className="nav__signin--signin">Sign in</a>
                            </Link>
                            <FullButton href="/Signup">
                                Sign up
                            </FullButton>
                        </div>
                    </nav>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <div className="footer__container">
                        <p className="footer__container--left">
                            Made with {' '} <span role="img" aria-label="Fire">🔥</span>
                        </p>
                        <p className="footer__container--right">
                            &copy; Matt Robillard 2020
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
};