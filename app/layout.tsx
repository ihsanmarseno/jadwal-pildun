import "./globals.css";
import "moment/locale/id";

export const metadata = {
  title: "Jadwal Piala Dunia",
  description: "Generated by create next app",
  icons: ["./favicon.ico"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="font-poppins">
        <main className="container min-h-screen mb-[60px]">{children}</main>
        <footer className="flex items-center justify-center p-5 mx-auto text-2xl italic">
          <p className="bg-[#6790C9] p-2 rounded-md shadow-lg hover:bg-white text-white hover:text-black">
            Made by Ihsan Tri Marseno
          </p>
        </footer>
      </body>
    </html>
  );
}
