import { Footer } from "./Footer"
import { MyHeader } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <>
      <MyHeader title="Dio Bank" />
      { children }
      <Footer />
    </>
  )
}
