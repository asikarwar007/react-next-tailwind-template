import React, { Suspense } from 'react';
const title = 'legal pages';

export const metadata = {
  title,
  openGraph: {
    title,
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
  );
}
