import Link from "next/link";
import drinkImg from "./drink.jpg";
import Image from "next/image";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
console.log(drinkImg);

async function getSingleDrink(id: string) {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch drink");
  }
  return res.json();
}

interface SingleDrinkPageProps {
  params: {
    id: string;
  };
}

async function SingleDrinkPage({ params }: SingleDrinkPageProps) {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>

      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 shadow-lg mb-4"
        priority
        alt={title}
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
}

export default SingleDrinkPage;
