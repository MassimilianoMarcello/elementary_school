 "use client"


import Image from "next/image";

import { ThemeProvider } from 'styled-components'
import GlobalStyles from "@/app/global_styledcomponents";
import theme from "@/app/theme_styled_comp";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
    <main>
<h1>penis</h1>
    </main>
    </ThemeProvider>
  );
}
