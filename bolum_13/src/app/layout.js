export default function RootLayout({children}) {
    return (
        <html>
            <body>
                <h1>Ana Layout Header</h1>
                    {children}
                <footer>Ana Layout Footer</footer>
            </body>
        </html>
    );
}
