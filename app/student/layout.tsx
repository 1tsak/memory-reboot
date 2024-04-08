import { Sidebar } from "./components/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" w-screen flex flex-row">
      <Sidebar />
      <main className="w-full">{children}</main>
    </div>
  );
}
