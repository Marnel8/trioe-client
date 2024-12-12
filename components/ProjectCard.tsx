import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  id: string;
  title: string;
  image: string;
  author: string;
  category: string;
}

export function ProjectCard({
  title,
  image,
  author,
  category,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3]">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">{title}</h3>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Like</span>
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              {category}
            </span>
            <p className="text-sm text-muted-foreground">By {author}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
