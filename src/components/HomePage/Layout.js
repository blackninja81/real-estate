import Navbar from '@/Layout/Navbar'
import Footer from '@/Layout/Footer'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}