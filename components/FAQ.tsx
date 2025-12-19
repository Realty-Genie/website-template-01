"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What is the current real estate market trend in Vancouver, BC?",
        answer:
            "As of now, Vancouver's real estate market experiences a dynamic blend of demand and supply, characterized by a slight increase in home prices due to limited inventory. Communities like Kitsilano and Mount Pleasant continue to attract buyers with their vibrant atmospheres and proximity to amenities.",
    },
    {
        question: "How do I find the best real estate agent in Vancouver, BC?",
        answer:
            "To find the best real estate agent in Vancouver, BC, consider reaching out to colleagues, checking online reviews, and asking potential agents about their experience in specific neighborhoods. An expert like Denise Mai can provide tailored insights based on extensive market knowledge and client satisfaction.",
    },
    {
        question: "What neighborhoods in Vancouver, BC, are best for first-time homebuyers?",
        answer:
            "Neighborhoods such as East Vancouver, specifically areas like Commercial Drive and Main Street, offer a mix of affordability and community charm. These areas attract first-time buyers with their unique character and diverse amenities.",
    },
    {
        question: "What should I know before buying a home in Vancouver, BC?",
        answer:
            "Before buying in Vancouver, it's crucial to understand the varying property guidelines, the importance of hiring a seasoned real estate agent, and upcoming developments that could affect property values. An experienced agent can provide insight into neighborhoods that align with your needs and budget.",
    },
    {
        question: "How does the process of selling a home in Vancouver, BC, work?",
        answer:
            "Selling a home in Vancouver typically involves preparing your property for the market, pricing it competitively based on recent sales, and leveraging local marketing expertise for maximum exposure. Partnering with a knowledgeable realtor like Denise Mai can streamline this process.",
    },
    {
        question: "Is it a good time to invest in Vancouver real estate?",
        answer:
            "While market conditions can fluctuate, investing in Vancouver real estate often proves beneficial due to its historic appreciation rates. Areas that are undergoing revitalization or development tend to yield promising returns in the long run.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-background text-foreground">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase opacity-90 block">
                        Common Questions
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={cn(
                                    "border border-white/10 rounded-xl overflow-hidden transition-all duration-300",
                                    isOpen ? "bg-white/5 border-primary/30" : "hover:border-primary/50"
                                )}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                                >
                                    <span className="text-lg md:text-xl font-serif font-medium text-white/90 pr-8">
                                        {faq.question}
                                    </span>
                                    <span className="flex-shrink-0 text-primary">
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 md:px-8 pb-6 md:pb-8 text-white/70 leading-relaxed font-light">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
