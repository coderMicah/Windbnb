import './globals.css'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='max-w-[1440px] mx-[3%]  text-[#333333] xl:px-[3%] xl:max-w-max xl:mx-auto ' >{children}</body>
    </html>
  )
}
