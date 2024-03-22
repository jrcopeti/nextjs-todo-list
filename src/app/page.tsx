import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Home Page</h1>
      <Link href="/about" className="btn btn-accent">
        Get Started
      </Link>
    </div>
  );
}

export default HomePage;
