import { homeFaqs } from "@/content/homepage";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Homepage FAQ (PRD §3.12): general, factual answers only. FAQPage JSON-LD
 * is emitted in page.tsx, not here.
 */
export function FaqSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="FAQ"
        title="Common questions, straight answers"
        align="center"
      />

      <div className="mx-auto mt-12 max-w-3xl">
        <Reveal>
          <Accordion>
            {homeFaqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
