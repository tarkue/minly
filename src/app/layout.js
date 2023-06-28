import 'normalize.css'
import '@/style/global.css'
import { SemiBoldFont } from "@/style/fonts"

import Header from "@/components/UI/Header/Header"


export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>minly</title>
          <meta
            name="description"
            content="Сервис для сокращения ссылок!"
          />
          <meta 
            name="viewport" 
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body className={SemiBoldFont.className}>
          <Header />
          { children }
          </body>
      </html>
    )
}