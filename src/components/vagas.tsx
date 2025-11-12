"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function VagasCarousel() {
  return (
    <section className="w-full bg-[#30BDFE] py-16 flex flex-col items-center text-center">
      <h2 className="text-3xl font-extrabold mb-12 text-neutral-900">
        Essas são algumas das vagas da{" "}
        <span className="text-white drop-shadow-md">LABOR</span>
      </h2>

      <div className="w-full max-w-[1100px] px-4">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, i) => (
              <CarouselItem
                key={i}
                className="basis-full sm:basis-1/2 md:basis-1/3 flex justify-center"
              >
                <Card className="border-none bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-full sm:w-[90%] overflow-hidden">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    {/* Imagem maior */}
                    <div className="relative w-48 h-48 mb-4">
                      <Image
                        src="/vaga.svg"
                        alt={`Vaga ${i + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-neutral-800">
                      Vaga {i + 1}
                    </h3>

                    {/* Separator */}
                    <div className="w-16 h-[3px] bg-[#30BDFE] my-4 rounded-full" />

                    {/* Descrição */}
                    <p className="text-neutral-600 text-sm leading-relaxed px-2">
                      Procuramos profissionais dedicados e criativos para fazer
                      parte da equipe LABOR. Essa vaga oferece um ambiente
                      dinâmico e oportunidades reais de crescimento.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Botões de navegação */}
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
