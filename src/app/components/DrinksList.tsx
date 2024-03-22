import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Drinks {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

interface DrinksListProps {
  drinks: Drinks[];
}

function DrinksList({ drinks }: DrinksListProps) {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6 ">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link href={`/drinks/${drink.idDrink}`} className="text-xl font-medium">
            <div className="relative h-48 mb-4">
              <Image
                src={drink.strDrinkThumb}
                fill
                sizes="(max-width: 768px) 100dvw, (max-width: 1200px 50dvw)"
                alt={drink.strDrink}
                className="rounded-md object-cover"
              />
            </div>
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default DrinksList;
