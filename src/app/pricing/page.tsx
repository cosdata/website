import {commonStyles} from "@/app/styles/common"
import PriceGrid from "./PriceGrid"
import React from 'react'

export default function Page() {
    const priceGridProp={
        heading:"Cosdata Pricing",
        subHeading:"Cloud & Enterprise solutions",
        description:"Choose the deployment option for your application and explore our transparent pricing plans.",
        prices:[
            {
                title: "Managed Cloud",
                pricing: {
                    starting_price: "$0",
                    description: "Starts with 1GB free cluster, no credit card required."
                },
                cta: {
                    text: "Start Free",
                    subtext: "Scale your production solutions without deployment and upkeep. Calculate your usage."
                },
                details: [
                    "1GB free forever cluster. No credit card required.",
                    "Fully managed with central cluster management",
                    "Multiple cloud providers and regions (AWS, GCP, Azure)",
                    "Horizontal & vertical scaling",
                    "Central monitoring, log management and alerting",
                    "High availability, auto-healing",
                    "Backup & disaster recovery",
                    "Zero-downtime upgrades",
                    "Unlimited users",
                    "Standard support and uptime SLAs, can be upgraded to Premium"
                ]
            },
            {
                title: "Hybrid Cloud",
                pricing: {
                    starting_price: "$0.014",
                    description: "Starting price per hour."
                },
                "cta": {
                    text: "Get Started",
                    subtext: "Bring your own cluster from any cloud provider, on-premise infrastructure, or edge locations and connect them to the managed cloud."
                },
                details: [
                    "All the benefits of Qdrant Cloud",
                    "Security, data isolation, optimal latency",
                    "Use the Managed Cloud Central Cluster Management",
                    "Standard support and uptime SLAs, can be upgraded to Premium"
                ]
            },
            {
                title: "Private Cloud",
                pricing: {
                    starting_price: "Custom",
                    description: "Price on request."
                },
                cta: {
                    text: "Contact Sales",
                    subtext: "Deploy Qdrant fully on premise for maximum control and data sovereignty."
                },
                details: [
                    "All the benefits of Hybrid Cloud",
                    "Security, data isolation, optimal latency",
                    "Manage Qdrant database clusters on your infrastructure, in the cloud, on-premise at the edge, even fully air-gapped without a connection to Qdrant Cloud",
                    "Premium Support Plan"
                ]
            }
    
        ]
    }
  return (
    <div className="min-h-[100vh] bg-white flex flex-col">
      <PriceGrid {...priceGridProp}/>
    </div>
  )
}
