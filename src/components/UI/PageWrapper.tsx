import React, { FC } from 'react'
import Head from 'next/head'

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
        <meta name="description" content="This is the way" />
      </Head>
      <main className="container">{children}</main>
    </>
  )
}
