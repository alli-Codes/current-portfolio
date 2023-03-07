import Head from "next/head";

export default function DomHead({ pageName = "Home Page" }) {
  return (
    <Head>
      <title>Evans Allison Portfolio Website </title>
      <link
        href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        rel="stylesheet"
      ></link>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    </Head>
  );
}
