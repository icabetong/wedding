import Head from "next/head";
import React, { type PropsWithChildren} from "react";

type PageProps = PropsWithChildren & {
  title: string,
  description?: string

} & Partial<typeof defaultProps>
const defaultProps = {
  description: '',
}

/**
 * The Page component encapsulates the `<Head>` component from Next together
 * with the elements in the actual page.
 */
export default function Page({ children, title, description }: PageProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name='description' content={description} />}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      {children}
    </>
  )
}
Page.defaultProps = defaultProps