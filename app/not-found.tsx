import Link from "next/link";

export default function NotFound() {
  return (
    <div className="col-span-full text-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="underline cursor-pointer text-blue" href="/">
        Return Home
      </Link>
    </div>
  );
}
