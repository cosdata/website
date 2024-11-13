import { afacad, commonStyles } from "@/app/styles/common";
import TechHeroSection from "./TechHeroSection"
import TechBenefits from "./TechBenefits"
import TechResources from "./TechResources"
import TechCta from "./TechCta";

export default function TechPage() {
    const HeroSectionProp = {
        heading: "Vector Search Reimagined",
        subHeading: "Powered by CHANNI, a ground-breaking multi-level vector search index that combines hierarchical graph navigation with intelligent clustering, Cosdata's vector database delivers unmatched performance by combining blazing-fast in-memory search capabilities with disk-based scalability.",
        buttonText1: "Read CHANNI Paper",
        buttonLink1: "/tech/channi-paper"
    }

    const BenefitProp = {
        heading: "Advanced Vector Database Architecture",
        subHeading: "Powered by CHANNI, our vector database combines the best aspects of in-memory and disk-based solutions while eliminating their traditional drawbacks.",
        Benefits: [
            {
                title: "Revolutionary Multi-Level Architecture",
                description: "CHANNI's dual-level navigation system combines a hierarchical graph for cluster routing with flat navigable graphs within clusters. This unique architecture delivers microsecond query times while efficiently managing massive vector datasets on disk, bridging the gap between memory-efficient clustering and high-performance graph navigation.",
                image: "/svgs/database-scale.svg",
                link: "/tech/channi-paper"
            },
            {
                title: "Intelligent Resource Management",
                description: "Unlike traditional approaches that compromise between memory usage and speed, CHANNI's primary-based cluster representation eliminates centroid computation overhead while maintaining search accuracy. Our innovative caching strategy and asynchronous I/O capabilities ensure optimal resource utilization across distributed environments.",
                image: "/svgs/RAG.svg",
                link: "/tech/channi-paper"
            },
            {
                title: "Advanced Cluster Operations",
                description: "CHANNI features sophisticated split and merge operations with built-in Out-of-Distribution (OOD) detection. Our unique dual-primary routing approach maintains multiple valid paths to merged clusters, ensuring reliable vector retrieval even for outlier data while supporting concurrent operations at scale.",
                image: "/svgs/configure.svg",
                link: "/tech/channi-paper"
            }
        ]
    }

    const ResourceProp = {
        heading: "Technical Resources",
        subHeading: "Explore the technology powering Cosdata's vector database",
        Resources: [
            {
                title: "CHANNI White Paper",
                description: "Learn how our revolutionary CHANNI technology enables unprecedented vector search performance and scalability.",
                link_text: "Read Paper",
                link: "/tech/channi-paper",
                svg: "/svgs/features/icon(1).drawio.svg"
            },
            {
                title: "Performance Benchmarks",
                description: "See how Cosdata's CHANNI-powered database outperforms traditional vector databases across all key metrics.",
                link_text: "Coming Soon",
                link: "#",
                svg: "/svgs/features/icon(2).drawio.svg",
                disabled: true
            },
            {
                title: "Documentation",
                description: "Comprehensive documentation for implementing and optimizing Cosdata's vector database in your stack.",
                link_text: "Coming Soon",
                link: "#",
                svg: "/svgs/features/icon(3).drawio.svg",
                disabled: true
            },
            {
                title: "Enterprise Solutions",
                description: "Learn about our enterprise-grade vector database solutions powered by CHANNI technology.",
                link_text: "Coming Soon",
                link: "#",
                svg: "/svgs/features/icon(4).drawio.svg",
                disabled: true
            }
        ]
    }

    return (
        <div className="flex flex-col">
            <TechHeroSection {...HeroSectionProp} />
            <div className="w-full bg-white">
                <TechBenefits {...BenefitProp} />
                <TechResources {...ResourceProp} />
                <TechCta pdfLink="/tech/channi-paper" />
            </div>
        </div>
    )
} 