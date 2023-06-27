import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>

        {children}
      </section>
    </ReactQueryProvider>
  );
}
