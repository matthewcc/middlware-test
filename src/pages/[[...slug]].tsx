import NextLink from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <NextLink href="/page1">Page 1</NextLink>
      </div>
      <div>
        <NextLink href="/page2">Page 2</NextLink>
      </div>
      <div>
        <NextLink href="/page3">Page 3</NextLink>
      </div>
      <p>Change locales:</p>
      <div>
        <NextLink href="/" locale="en-US">en-US</NextLink>
      </div>
      <div>
        <NextLink href="/" locale="fr-FR">fr-FR</NextLink>
      </div>
      <div>
        <NextLink href="/" locale="nl-NL">nl-NL</NextLink>
      </div>
    </main>
  )
}
