import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    /**Theme Provider carrega o css de acordo com tema perferido (Claro / Escuro )
     * Possibilidade de detectar o thema do sistema.
     * enableSystem={true/false}
     */

    <ThemeProvider enableSystem={false} attribute="class">
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
