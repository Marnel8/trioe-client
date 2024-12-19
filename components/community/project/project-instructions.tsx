import Image from "next/image"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Instruction {
  step: number
  text: string
  image: string
}

interface ProjectInstructionsProps {
  instructions: Instruction[]
}

export function ProjectInstructions({ instructions }: ProjectInstructionsProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {instructions.map((instruction) => (
        <AccordionItem key={instruction.step} value={`step-${instruction.step}`}>
          <AccordionTrigger>Step {instruction.step}</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative aspect-video">
                <Image
                  src={instruction.image}
                  alt={`Step ${instruction.step}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p>{instruction.text}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

