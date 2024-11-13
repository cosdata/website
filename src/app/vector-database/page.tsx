/*import { afacad, commonStyles } from "@/app/styles/common";
import HeroSection from "./HeroSection"
import Benefits from "./Benefits"
import FeatureGrid from "./FeatureGrid"
import Resourse from "./Resourse";
import Benchmark from "./Benchmark-viz";
import Cta from "./Cta";

export default function VectorDatabase() {

    const HeroSectionProp = {
        heading: "Vector Database",
        subHeading: "Cosdata is the most advanced vector database with highest RPS, minimal latency, fast indexing, high control with accuracy, and so much more.",
        buttonText1: "Get Started",
        buttonLink1: "#",
        buttonText2: "Talk to Sales",
        buttonLink2: "#"
    }

    const BenefitProp = {
        heading: "Unlock Your Data's Potential",
        subHeading: "Leverage embeddings, hybrid search, and knowledge graphs to power applications in search, recommendations, anomaly detection, and more.",
        Benefits: [
            {
                title: "Retrieval Augmented Generation (RAG)",
                description: "Enhance the quality of AI-generated content. Leverage Cosdata's powerful hybrid search capabilities, combining dense and sparse vectors with knowledge graphs, to retrieve contextually relevant data points for retrieval-augmented generation.",
                image: "/svgs/RAG.svg",
                link: "#"
            },
            {
                title: "Retrieval Augmented Generation (RAG)",
                description: "Enhance the quality of AI-generated content. Leverage Cosdata's powerful hybrid search capabilities, combining dense and sparse vectors with knowledge graphs, to retrieve contextually relevant data points for retrieval-augmented generation.",
                image: "/svgs/RAG.svg",
                link: "#"
            },
            {
                title: "Retrieval Augmented Generation (RAG)",
                description: "Enhance the quality of AI-generated content. Leverage Cosdata's powerful hybrid search capabilities, combining dense and sparse vectors with knowledge graphs, to retrieve contextually relevant data points for retrieval-augmented generation.",
                image: "/svgs/RAG.svg",
                link: "#"
            }
        ]
    }

    const FeatureProp = {
        heading: "Feature Overview",
        subHeading: "Built as a dedicated similarity search engine, Cosdata provides unique features to provide unparalleled performance and efficiency in managing your vector data workloads.",
        Features: [
            {
                title: "Advanced Compression",
                description: "Scalar, Product, and unique Binary Quantization features significantly reduce memory usage and improve search performance (40x) for high-dimensional vectors.",
                link_text: "Learn More",
                link: "#"
            },
            {
                title: "Quantization",
                description: "Cloud-Managed, Distributed, Cloud-Native Design with managed cloud services on AWS, GCP, and Azure for scalable, maintenance-free vector search. Advanced sharding available.",
                link_text: "Cloud Options",
                link: "#"
            },
            {
                title: "Easy to Use API",
                description: "Offers OpenAPI v3 specification for generating client libraries in almost any programming language.",
                link_text: "Rocket",
                link: "#"
            },
            {
                title: "Enterprise-grade Security",
                description: "Includes robust access management, backup options, and disaster recovery. Dedicated Enterprise Solutions available.",
                link_text: "Enterprise Solutions",
                link: "#"
            },
            {
                title: "Integrations",
                description: "Qdrant supports a wide range of integrations for all leading embeddings and frameworks.",
                link_text: "See Integrations",
                link: "#"
            },
            {
                title: "Multitenancy Support",
                description: "Ability to segment a single collection for organized and efficient retrieval, data isolation, and privacy. Vital for applications needing distinct vector dataset management.",
                link_text: "Multitenancy",
                link: "#"
            },
            {
                title: "Memory Maps and IO Uring",
                description: "Effective on-disk storage options and low-level hardware optimization.",
                link_text: "Learn More",
                link: "#"
            },
            {
                title: "Fast and Precise Matching",
                description: "Unparalleled speed and accuracy, powered by a bespoke modification of the HNSW algorithm for Approximate Nearest Neighbor Search.",
                link_text: "Learn More",
                link: "#"
            },
            {
                title: "Payloads & Advanced Filtering",
                description: "Vector payload supports a large variety of data types and query conditions, including string matching, numerical ranges, geo-locations, and more.",
                link_text: "Learn More",
                link: "#"
            },
            {
                title: "Sparse Vector Support",
                description: "Efficient handling of sparse vectors for enhanced text retrieval and memory-efficient data representation for high-dimensional data sets.",
                link_text: "Learn More",
                link: "#"
            }
        ]
    }

    const ResourceProp = {
        heading: "Additional Resource",
        subHeading: "",
        Resources: [
            {
                title: "Documentation",
                description: "Discover more about cosdata by checking out our documentation for details on advanced features and functionalities.",
                link_text: "Read More",
                link: "#",
                svg: "/svgs/features/icon(1).drawio.svg"
            },
            {
                title: "Enterprise Solutions",
                description: "For maximal control for production-ready applications cosdata is available as a Hybrid Cloud and Private Cloud (Full On Premise) solution.",
                link_text: "Contact Sales",
                link: "#",
                svg: "/svgs/features/icon(2).drawio.svg"
            },
            {
                title: "Benchmarks",
                description: "Learn how cosdata is designed to deliver the fastest and most accurate results and how it compares to alternatives in our benchmarks.",
                link_text: "Compare",
                link: "#",
                svg: "/svgs/features/icon(3).drawio.svg"
            },
            {
                title: "Pricing",
                description: "Visit our pricing page for more details on cosdata's free tier, managed cloud, and enterprise plans.",
                link_text: "Pricing",
                link: "#",
                svg: "/svgs/features/icon(4).drawio.svg"
            }
        ]
    }
    return (
        <div className="flex flex-col">
            <HeroSection {...HeroSectionProp} />
            <div className="w-full bg-white">
                <Benefits {...BenefitProp} />
                <FeatureGrid {...FeatureProp} />
                <Benchmark />
                <Cta/>
                <Resourse {...ResourceProp} />
            </div>
        </div>
    )
}*/