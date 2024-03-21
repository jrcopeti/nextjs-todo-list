import Link from "next/link";

function HomePage() {
  return (
    <div className="text-7xl">
      <h1>Home Page</h1>
      <Link href="/about" className="text-2xl">
        About page
      </Link>
    </div>
  );
}

export default HomePage;
