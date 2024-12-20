'use client';

import './globals.scss';
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
                        <h1 className="text">TODOS-LIKE-PROJECT</h1>
                    </header>
                    <main>{children}</main>
                    <footer>
                        <h3 className="text">BY DENIS ILCHUK</h3>
                    </footer>
                </Provider>
            </body>
        </html>
    );
}
