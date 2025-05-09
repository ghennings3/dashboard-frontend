import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from 'next/font/google';
import { Sidebar } from "@/components/sidebar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Painel de Vendas - Acompanhe seus Resultados em Tempo Real",
  description: "Visualize métricas de vendas, novos clientes e pedidos em tempo real com o painel interativo. Acompanhe o desempenho do seu negócio facilmente.",
  icons: {
    icon: '/favicon1.png',
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
