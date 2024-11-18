"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export const SearchDialog = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set("q", searchQuery);
    console.log(searchQuery);
    //router.push(``);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Search className="hover:text-orange-300 cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Faça uma busca</DialogTitle>
        <DialogDescription>Encontre o produto que deseja...</DialogDescription>
        <form onSubmit={handleSubmit} className="relative">
          <Input
            onChange={handleSearchChange}
            className="h-12"
            value={searchQuery}
          />
          <button>
            <Search className="absolute right-3 top-3 text-gray-400" />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
