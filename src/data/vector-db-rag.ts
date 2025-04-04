// Interface for RAG-as-a-Service offerings
export interface RagService {
  id: string;
  name: string;
  website: string;
  overview: string;
  keyCapabilities: string[];
  bestFor: string[];
}

// Create the RAG-as-a-Service offerings data
export const ragServices: RagService[] = [
  {
    id: "glean",
    name: "Glean",
    website: "https://www.glean.com/",
    overview: "Enterprise AI search platform that connects to all your company's apps, providing a unified search experience across company data.",
    keyCapabilities: [
      "Connects to 80+ enterprise applications",
      "Personalized search results based on permissions",
      "Secure, private enterprise search",
      "Natural language chat interface",
      "Document understanding and text extraction"
    ],
    bestFor: [
      "Enterprise knowledge management",
      "Internal documentation search",
      "Cross-application content discovery",
      "Companies with sensitive data requirements"
    ]
  },
  {
    id: "algolia",
    name: "Algolia",
    website: "https://www.algolia.com/",
    overview: "API-first search and discovery platform that combines keyword search, vector search, and AI to deliver relevant results.",
    keyCapabilities: [
      "Hybrid search combining keywords and vectors",
      "AI-powered relevance optimization",
      "Real-time indexing and updates",
      "Analytics and insights",
      "Customizable UI components"
    ],
    bestFor: [
      "E-commerce search and recommendation",
      "Content discovery",
      "Media platforms",
      "Consumer-facing applications"
    ]
  },
  {
    id: "nucliadb",
    name: "NucliaDB",
    website: "https://nuclia.com/",
    overview: "Knowledge management platform that automatically processes, indexes, and understands unstructured data to make it searchable.",
    keyCapabilities: [
      "Automatic content understanding",
      "Multilingual support",
      "Rich multimedia indexing (text, audio, video)",
      "Semantic search capabilities",
      "Automatic metadata extraction"
    ],
    bestFor: [
      "Unstructured data management",
      "Multimedia content search",
      "Multilingual organizations",
      "Knowledge-intensive industries"
    ]
  },
  {
    id: "qatalog",
    name: "Qatalog",
    website: "https://qatalog.com/",
    overview: "Work hub that integrates with your existing tools to create a unified workspace with powerful search and AI assistance.",
    keyCapabilities: [
      "Connects work across tools into a single workspace",
      "Centralized search across workflows",
      "AI-powered insights and automation",
      "Structured knowledge organization",
      "Workflow automation"
    ],
    bestFor: [
      "Team collaboration",
      "Project management",
      "Distributed teams",
      "Cross-functional workflows"
    ]
  },
  {
    id: "elasticsearch-rag",
    name: "Elastic Search RAG",
    website: "https://www.elastic.co/guide/en/machine-learning/current/ml-nlp-rag.html",
    overview: "Elastic's RAG capabilities providing semantic search and generative AI responses utilizing Elasticsearch's scalable infrastructure.",
    keyCapabilities: [
      "Enterprise-grade security and compliance",
      "Hybrid search combining keyword and vectors",
      "Custom model support",
      "Observability and monitoring",
      "Scalable deployment options"
    ],
    bestFor: [
      "Large-scale enterprise deployments",
      "Security-sensitive applications",
      "Organizations already using Elasticsearch",
      "Customizable RAG pipelines"
    ]
  },
  {
    id: "chatgpt-enterprise",
    name: "ChatGPT Enterprise",
    website: "https://openai.com/enterprise",
    overview: "Enterprise version of ChatGPT with features for knowledge retrieval from company data and enhanced security.",
    keyCapabilities: [
      "Advanced data analysis",
      "Private knowledge retrieval",
      "Enterprise-grade security",
      "Unlimited higher-speed GPT-4 access",
      "Longer context windows"
    ],
    bestFor: [
      "Organizations needing advanced AI capabilities",
      "Teams wanting to integrate LLMs with company data",
      "Enterprise knowledge management",
      "Customer support automation"
    ]
  },
  {
    id: "vectara",
    name: "Vectara",
    website: "https://vectara.com/",
    overview: "Neural information retrieval platform for building trustworthy conversational search applications with advanced RAG capabilities.",
    keyCapabilities: [
      "Grounded generation with source citations",
      "Multi-vector hybrid search",
      "Cross-lingual search and retrieval",
      "Summarization capabilities",
      "Zero-shot learning"
    ],
    bestFor: [
      "Building RAG applications",
      "Documentation and knowledge base search",
      "Multilingual content management",
      "Applications requiring trustworthy AI responses"
    ]
  }
]; 