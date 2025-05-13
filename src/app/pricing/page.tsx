'use client';

import PriceGrid from "./PriceGrid";
import PricingCalculator from "./PricingCalculator";
import { commonStyles, geologica } from "@/app/styles/common";
import Cta from "./Cta";
import EarlyAccessModal from "@/app/components/EarlyAccessModal";
import { useState } from "react";

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const priceGridProp = {
    heading: (
      <span className={`text-3xl md:text-4xl font-bold ${geologica.className}`}>Free to Start, Affordable at Scale</span>
    ),
    subHeading: "",
    description: "From open source to serverless to enterprise, choose the best option for your AI journey.",
    prices: [
      {
        title: "Cosdata OSS",
        description: "Blazing fast, open source vector database for embedded and cloud applications.",
        note: "Free • Apache 2.0 License",
        details: [
          "Open source and free forever",
          "Fully featured and easy to install",
          "Scalable and runs everywhere",
          "Native TypeScript, Python, and Rust support"
        ],
        button: {
          active: true,
          text: "View Docs",
          link: "/docs/oss"
        }
      },
      {
        title: "Cosdata Serverless",
        description: "Pay-as-you-go, infinitely scalable vector database. No infrastructure to manage.",
        note: "Usage-based pricing",
        details: [
          "Serverless retrieval, nothing to manage",
          "Intuitive UI to manage and explore data",
          "Automatic indexing and compaction",
          "Seamless local-to-cloud migration"
        ],
        button: {
          active: true,
          text: "Estimate Pricing",
          link: "#calculator"
        }
      },
      {
        title: "Enterprise",
        description: "For large teams and regulated industries. Run Cosdata Serverless in your own environment.",
        note: "Custom pricing • Contact us",
        details: [
          "Deploy on your own cloud or on-prem",
          "Enterprise security and compliance",
          "Dedicated infrastructure and support",
          "24/7 premium support"
        ],
        button: {
          active: true,
          text: "Contact Sales",
          link: "/contact"
        }
      }
    ],
    onContactSales: openModal
  };

  return (
    <div className="min-h-[100vh] bg-white flex flex-col">
      <PriceGrid {...priceGridProp} />
      <div id="calculator" />
      <PricingCalculator />
      <Cta onClick={openModal} />
      <EarlyAccessModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

/*import { commonStyles } from "@/app/styles/common"
import PriceGrid from "./PriceGrid"
import PricingCalulator from "./PricingCalculator"
import Cta from "./Cta"
import React from 'react'

export default function Page() {
    const priceGridProp = {
        heading: "Cosdata Pricing",
        subHeading: "Cloud & Enterprise solutions",
        description: "Choose the deployment option for your application and explore our transparent pricing plans.",
        prices: [
            {
                title: "Cosdata OSS",
                description: "Cosdata OSS is fully featured and architected with open standards. Available in Rust, Python, and JavaScript SDKs.",
                note: "",
                details: [
                    "Open source and free forever",
                    "Fully featured and easy to install",
                    "Scalable and runs everywhere",
                    "Native Javascript/TypeScript, Python, and Rust support"
                ],
                button: {
                    active: false,
                    text: "View Docs",
                    link: "link-to-docs"
                }
            },
            {
                title: "Cosdata Cloud",
                description: "Cosdata Cloud is a hosted serverless solution for vector search. We take care of tasks like reindexing, compaction, cleanup, and more so you don't have to.",
                note: "",
                details: [
                    "Serverless vector database",
                    "Automatic compaction, indexing, and data cleanup",
                    "Seamless transition from local to cloud using the same SDK"
                ],
                button: {
                    active: true,
                    text: "Get Started",
                    link: "link-to-cloud-get-started"
                }
            },
            {
                title: "Cosdata Enterprise",
                description: "Cosdata Enterprise is for teams with large datasets, want dedicated infrastructure and support, and enterprise security features.",
                note: "This plan offers all Cloud Plan features, with self-managed database service deployed in your VPC.",
                details: [
                    "Flexible deployment: Choose your infrastructure and cloud platforms",
                    "Enterprise Security: Benefit from advanced security features",
                    "Dedicated premium support with 24/7 Monitoring"
                ],
                button: {
                    active: false,
                    text: "Contact Sales",
                    link: "link-to-contact-sales"
                }
            }
        ]
    }
    return (
        <div className="min-h-[100vh] bg-white flex flex-col">
            <PriceGrid {...priceGridProp} />
            <PricingCalulator />
            <Cta />
        </div>
    )
}*/
