"use client";

import Image from "next/image";

import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";

interface IItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: IItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) {
      return;
    }
    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
      <Hint label={name} sideOffset={18} side="right" align="start">
        <Image
          fill
          src={imageUrl}
          alt={name}
          onClick={onClick}
          className={cn(
            "rounded-md cursor-pointer opacity-25 hover:opacity-100 transition",
            isActive && "opacity-100",
          )}
        />
      </Hint>
    </div>
  );
};
