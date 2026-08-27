import { notFound } from "next/navigation";
import VillaDetail from "../../../villas/VillaDetail";
import { villas } from "../../../villas/villasData";

type PageProps = {
  params: Promise<{ ref: string }>;
};

export function generateStaticParams() {
  return villas.map((villa) => ({ ref: villa.id }));
}

export default async function Page({ params }: PageProps) {
  const { ref } = await params;
  const villa = villas.find((item) => item.id === ref);

  if (!villa) notFound();

  return <VillaDetail villa={villa} localePrefix="/nl" />;
}
