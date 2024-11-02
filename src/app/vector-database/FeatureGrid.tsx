import { afacad, commonStyles } from "../styles/common";
import React from 'react';
import "../globals.css";

export default function FeatureGrid() {
    const Features = [
        {
            heading: "Advanced Compression",
            description: "Scalar, Product, and unique Binary Quantization features significantly reduce memory usage and improve search performance (40x) for high-dimensional vectors.",
            link_text: "Learn More"
        },
        {
            heading: "Quantization",
            description: "Cloud-Managed, Distributed, Cloud-Native Design with managed cloud services on AWS, GCP, and Azure for scalable, maintenance-free vector search. Advanced sharding available.",
            link_text: "Cloud Options"
        },
        {
            heading: "Easy to Use API",
            description: "Offers OpenAPI v3 specification for generating client libraries in almost any programming language.",
            link_text: "Rocket"
        },
        {
            heading: "Enterprise-grade Security",
            description: "Includes robust access management, backup options, and disaster recovery. Dedicated Enterprise Solutions available.",
            link_text: "Enterprise Solutions"
        },
        {
            heading: "Integrations",
            description: "Qdrant supports a wide range of integrations for all leading embeddings and frameworks.",
            link_text: "See Integrations"
        },
        {
            heading: "Multitenancy Support",
            description: "Ability to segment a single collection for organized and efficient retrieval, data isolation, and privacy. Vital for applications needing distinct vector dataset management.",
            link_text: "Multitenancy"
        },
        {
            heading: "Memory Maps and IO Uring",
            description: "Effective on-disk storage options and low-level hardware optimization.",
            link_text: "Learn More"
        },
        {
            heading: "Fast and Precise Matching",
            description: "Unparalleled speed and accuracy, powered by a bespoke modification of the HNSW algorithm for Approximate Nearest Neighbor Search.",
            link_text: "Learn More"
        },
        {
            heading: "Payloads & Advanced Filtering",
            description: "Vector payload supports a large variety of data types and query conditions, including string matching, numerical ranges, geo-locations, and more.",
            link_text: "Learn More"
        },
        {
            heading: "Sparse Vector Support",
            description: "Efficient handling of sparse vectors for enhanced text retrieval and memory-efficient data representation for high-dimensional data sets.",
            link_text: "Learn More"
        }
    ];

    return (
        <div className={`${commonStyles.mainContainer} py-[40px] 2xl:py-[80px]`}>
            <div className={`${commonStyles.sectionTitle}`}>
                Feature Overview
            </div>
            <div className={`${commonStyles.sectionSubtitle}`}>
                Built as a dedicated similarity search engine, Cosdata provides unique features to provide unparalleled performance and efficiency in managing your vector data workloads.
            </div>
            <div className=" flex justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  max-w-[1200px]">
                    {Features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col justify-between p-6 sm:p-8 text-[#374151] transition-transform rounded-lg shadow-md bg-gray-50 hover:shadow-lg ${(index % 4 === 0 || index % 4 === 3) ? "lg:col-span-2" : "lg:col-span-1"}  row-span-1`}
                        >
                            <div className={`${commonStyles.featureTitle}`}>{feature.heading}</div>
                            <div className={`${commonStyles.featureDescription}`}>{feature.description}</div>
                            <a href="#" className={`border-0 ${commonStyles.featureLink}`}>{feature.link_text}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
