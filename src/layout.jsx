export default function Layout({children}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}