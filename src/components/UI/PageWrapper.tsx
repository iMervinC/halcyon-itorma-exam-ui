import React, { FC } from 'react'
import Head from 'next/head'
import Img from 'next/image'

interface Layout {
  title: string
  otherPage?: boolean
}

export const PageWrap: FC<Layout> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="On our way" />
      </Head>
      <main className="max-w-[375px] mx-auto bg-gray-100">
        <div className="absolute transform -translate-y-2 z-0">
          <Img src="/assets/wave.png" height={125} width={375} />
        </div>
        {children}
      </main>
    </>
  )
}
