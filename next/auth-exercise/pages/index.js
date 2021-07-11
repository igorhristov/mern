import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Authentication exercise</title>
        <meta name="description" content="Authentication app" />
      </Head>

      <h1 className="display-4 bg-primary square p-5 text-center">Online Authorisation</h1>
      <p>Home Page</p>
    </>
  )
}
