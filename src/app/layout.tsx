'use client';

import './globals.css';
import { Provider } from 'react-redux';
import store from '../store/index';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Provider store={store}>
                    <header>
                        <h1 className="header-text">TODOS-LIKE-PROJECT</h1>
                    </header>
                    <main>{children}</main>
                </Provider>
            </body>
        </html>
    );
}
