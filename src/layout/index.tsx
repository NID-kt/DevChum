import type { NextPage } from "next";

import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

export const Layout = (page: NextPage) => {
  return (
    <main className="rounded-lg py-4 px-5 w-72 h-auto justify-center border overflow-hidden">
      <LayoutErrorBoundary>{page}</LayoutErrorBoundary>

      {/* Loading Chrome scripts */}
      <script defer src="../content.js"></script>
      <script defer src="../background.js"></script>
    </main>
  );
};
