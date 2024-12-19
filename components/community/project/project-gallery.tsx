"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ProjectGalleryProps {
  images: string[]
  video?: string
}

export function ProjectGallery({ images, video }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-video">
        <Dialog>
          <DialogTrigger asChild>
            <div className="cursor-pointer">
              <Image
                src={images[currentIndex]}
                alt={`Project image ${currentIndex + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <div className="relative aspect-video">
              <Image
                src={images[currentIndex]}
                alt={`Project image ${currentIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Project thumbnail ${index + 1}`}
            width={100}
            height={100}
            className={`object-cover rounded-md cursor-pointer ${
              index === currentIndex ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      {video && (
        <div className="mt-4">
          <video src={video} controls className="w-full rounded-lg" />
        </div>
      )}
    </div>
  )
}

