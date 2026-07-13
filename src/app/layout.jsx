import GlobalStyles from '@/styles/global'

export const metadata = {
  title: 'Sofia Franek',
  description: 'Graphic Designer'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalStyles />
        {children}
      </body>
    </html>
  )
}