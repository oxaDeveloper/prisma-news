import Head from "next/head";
import Link from "next/link";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>News | 404</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="rounded-lg bg-white p-8 text-center shadow-lg">
          <h1 className="mb-4 text-6xl font-bold text-red-500">404</h1>
          <h2 className="mb-4 text-3xl font-semibold">Page Not Found</h2>
          <p className="mb-6 text-gray-600">
            Oops! The page you are looking for does not exist.
          </p>
          <Link href="/">
            <p className="rounded-md bg-blue-500 px-6 py-3 text-lg text-white hover:bg-blue-600">
              Go to Homepage
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Custom404;