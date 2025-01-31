


"use client";

import { useState } from "react";
import { Search, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/User/card";
import { carData } from "@/data";

export default function CarListingPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex-1">
      <div className="mb-8 flex flex-col sm:flex-row items-center">
        <div className="relative w-full sm:w-auto mb-6 sm:mb-0 sm:mr-4">
          <Input
            type="text"
            placeholder="Search cars..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-96 theme-input pr-12"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 theme-search-icon h-6 w-6" />
        </div>
        <Button className="w-full sm:w-auto theme-button-outline text-lg px-6 py-3">Search</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {carData.map((car) => (
          <Card key={car.id} className="theme-card text-lg theme-text hover-scale flex flex-col overflow-x-hidden">
            <CardContent className="p-6 flex-grow">
              <div className="image-zoom rounded-lg overflow-hidden mb-6">
                <img src={car.image || "/placeholder.svg"} alt={car.name} className="w-full object-cover h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center lg:text-left">{car.name}</h3>
              <p className="mb-4 text-lg theme-text text-center lg:text-left">
                {car.type} • {car.fuel} • {car.transmission}
              </p>
              <p className="font-bold text-xl text-center lg:text-left">{car.price.toLocaleString()} $</p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row justify-center xl:justify-between items-center gap-4 p-6 theme-card theme-footer mt-auto">
              <Button variant="outline" size="lg" className="button-hover theme-button-solid theme-button-outline px-6 py-3 text-lg w-full xl:w-auto">
                <Car className="mr-3 h-5 w-5" /> AR View
              </Button>
              <Button variant="outline" size="lg" className="button-hover theme-button-outline theme-button-solid px-6 py-3 text-lg w-full xl:w-auto">
                Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}