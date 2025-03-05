import React from 'react'

const RootLayout = ({children}) => {
    return (
        <html lang={"tr"}>
        <head>
            <meta charSet={"utf-8"}/>
            <meta httpEquiv={"X-UA-Compatible"} content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="description" content=""/>
            <meta name="author" content=""/>
            <title>SB Admin 2 - Dashboard</title>

            <link href="/back/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"/>
            <link
                href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
                rel="stylesheet"/>

            <link href="/back/css/sb-admin-2.min.css" rel="stylesheet"/>
        </head>

        <body id="page-top">

        <div id="wrapper">
            {children}
        </div>

        <a className={"scroll-to-top rounded"} href="#page-top">
            <i className={"fas fa-angle-up"}></i>
        </a>

        <script src="/back/vendor/jquery/jquery.min.js"></script>
        <script src="/back/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/back/vendor/jquery-easing/jquery.easing.min.js"></script>
        <script src="/back/js/sb-admin-2.min.js"></script>
        <script src="/back/vendor/chart.js/Chart.min.js"></script>
        <script src="/back/js/demo/chart-area-demo.js"></script>
        <script src="/back/js/demo/chart-pie-demo.js"></script>
        </body>
        </html>
    )
}

export default RootLayout;
