'use client'

import Link from "next/link";
import { useState } from "react";

function ClientPage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 className="text-7xl font-bold mb-4">{count}</h2>
      <button className="btn btn-accent" onClick={() => setCount(count + 1) }>Increase</button>

      <Link href="/">homepage</Link>
    </div>
  );
}

export default ClientPage;
