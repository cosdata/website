import { QuestionOption, QuizQuestion } from '@/components/vector-database-guide/Question';

export interface QuestionData {
  questionNumber: number;
  title: string;
  description: string;
  options: QuestionOption[];
  overview?: string;
  quiz?: QuizQuestion[];
}

export const questionOne: QuestionData = {
  questionNumber: 1,
  title: 'Vector Database or RAG-as-a-Service?',
  overview: "Vector databases provide full control and customization but require more technical expertise. Choose this path if you have engineering resources or need specific optimizations. RAG-as-a-Service solutions offer faster implementation with minimal setup but less flexibility, ideal if you need to launch quickly or lack ML expertise.",
  quiz: [
    {
      question: "How much engineering resources do you have available?",
      answers: [
        { 
          text: "We have a strong engineering team with ML expertise", 
          points: { "vector-db": 3, "rag-service": 0 } 
        },
        { 
          text: "Limited engineering resources, need quick implementation", 
          points: { "vector-db": 0, "rag-service": 3 } 
        },
        { 
          text: "Average engineering team, but limited ML expertise", 
          points: { "vector-db": 1, "rag-service": 2 } 
        }
      ]
    },
    {
      question: "How important is full control over your data pipeline?",
      answers: [
        { 
          text: "Critical - we need complete control over data and infrastructure", 
          points: { "vector-db": 3, "rag-service": 0 } 
        },
        { 
          text: "We prioritize convenience over complete control", 
          points: { "vector-db": 0, "rag-service": 3 } 
        },
        { 
          text: "We need a balance of control and convenience", 
          points: { "vector-db": 2, "rag-service": 1 } 
        }
      ]
    },
    {
      question: "What's your development timeline?",
      answers: [
        { 
          text: "We need to launch as quickly as possible", 
          points: { "vector-db": 0, "rag-service": 3 } 
        },
        { 
          text: "We can invest time for a more customized solution", 
          points: { "vector-db": 3, "rag-service": 0 } 
        },
        { 
          text: "We have a moderate timeline, but need predictability", 
          points: { "vector-db": 1, "rag-service": 2 } 
        }
      ]
    }
  ],
  description: `
    <div>
      <div class="mb-4">
        <h4 class="text-lg font-medium text-gray-900 mb-2">Quick Comparison</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-blue-50 rounded-lg">
            <p class="font-medium text-[#0055c8] mb-2">Vector Database</p>
            <ul class="list-disc pl-5 space-y-1 text-sm">
              <li>Complete control over infrastructure</li>
              <li>Customizable for specific use cases</li>
              <li>Better for cost optimization at scale</li>
              <li>Requires ML expertise for embeddings</li>
              <li>Higher development and maintenance effort</li>
            </ul>
          </div>
          <div class="p-4 bg-green-50 rounded-lg">
            <p class="font-medium text-green-700 mb-2">RAG-as-a-Service</p>
            <ul class="list-disc pl-5 space-y-1 text-sm">
              <li>Minimal development effort</li>
              <li>Quick time-to-market</li>
              <li>No ML expertise required</li>
              <li>Built-in LLM integrations</li>
              <li>Higher per-usage costs but less maintenance</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="mb-4">
        <h4 class="text-lg font-medium text-gray-900 mb-2">Key Considerations</h4>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left border">Factor</th>
                <th class="p-2 text-left border">Vector Database</th>
                <th class="p-2 text-left border">RAG-as-a-Service</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border font-medium">Control</td>
                <td class="p-2 border">High</td>
                <td class="p-2 border">Limited</td>
              </tr>
              <tr>
                <td class="p-2 border font-medium">Development Effort</td>
                <td class="p-2 border">Higher</td>
                <td class="p-2 border">Lower</td>
              </tr>
              <tr>
                <td class="p-2 border font-medium">Maintenance</td>
                <td class="p-2 border">Your responsibility</td>
                <td class="p-2 border">Handled by provider</td>
              </tr>
              <tr>
                <td class="p-2 border font-medium">Data Privacy</td>
                <td class="p-2 border">Full control</td>
                <td class="p-2 border">May leave your environment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  options: [
    { 
      id: "vector-db", 
      label: "Use a Vector Database", 
      description: "More control and flexibility for custom implementations. Ideal for teams with ML expertise who need specific optimizations.", 
      targetSectionId: "question-2" 
    },
    { 
      id: "rag-service", 
      label: "Use a RAG-as-a-Service Solution", 
      description: "Faster implementation with minimal development effort. Best for teams that want to focus on application logic.", 
      targetSectionId: "rag-service-guide" 
    }
  ]
};

export const questionTwo: QuestionData = {
  questionNumber: 2,
  title: 'Purpose-built Vector Database or Hybrid Solution?',
  overview: "Purpose-built vector databases are optimized specifically for vector search, offering better performance for AI-centric applications. Choose this when vector search is your primary workload. Hybrid solutions add vector capabilities to existing databases, better when you need to combine vector search with traditional database features or when vector search is just one part of your application.",
  quiz: [
    {
      question: "What's the primary focus of your application?",
      answers: [
        { 
          text: "Primarily vector similarity search and AI/ML features", 
          points: { "purpose-built": 3, "hybrid": 0 } 
        },
        { 
          text: "Mostly traditional data workloads with some vector search", 
          points: { "purpose-built": 0, "hybrid": 3 } 
        },
        { 
          text: "Equal mix of vector search and traditional database needs", 
          points: { "purpose-built": 1, "hybrid": 2 } 
        }
      ]
    },
    {
      question: "Do you need to integrate with existing database systems?",
      answers: [
        { 
          text: "Yes, we have existing data in traditional databases we need to leverage", 
          points: { "purpose-built": 0, "hybrid": 3 } 
        },
        { 
          text: "No, we're building a new system from scratch", 
          points: { "purpose-built": 3, "hybrid": 0 } 
        },
        { 
          text: "Partially, but could extract what we need into a new system", 
          points: { "purpose-built": 2, "hybrid": 1 } 
        }
      ]
    },
    {
      question: "How important is query performance for vector operations?",
      answers: [
        { 
          text: "Critical - we need the fastest possible vector search", 
          points: { "purpose-built": 3, "hybrid": 0 } 
        },
        { 
          text: "Important, but we need other database features more", 
          points: { "purpose-built": 0, "hybrid": 3 } 
        },
        { 
          text: "We need both good vector performance and other database features", 
          points: { "purpose-built": 1, "hybrid": 2 } 
        }
      ]
    }
  ],
  description: `
    <div>
      <div class="mb-4">
        <h4 class="text-lg font-medium text-gray-900 mb-2">Solution Types</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-blue-50 rounded-lg">
            <p class="font-medium text-[#0055c8] mb-2">Purpose-Built Vector Databases</p>
            <p class="text-sm mb-2"><strong>Examples:</strong> Pinecone, Qdrant, Weaviate, Milvus</p>
            <p class="text-sm"><strong>Optimized for:</strong> High-performance vector search</p>
          </div>
          <div class="p-4 bg-purple-50 rounded-lg">
            <p class="font-medium text-purple-800 mb-2">Hybrid Solutions</p>
            <ul class="text-sm space-y-1">
              <li><strong>SQL:</strong> PostgreSQL (pgvector), MySQL</li>
              <li><strong>Search:</strong> Elasticsearch, OpenSearch</li>
              <li><strong>NoSQL:</strong> MongoDB Atlas, Couchbase</li>
              <li><strong>Graph:</strong> Neo4j, ArangoDB</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="mb-4">
        <h4 class="text-lg font-medium text-gray-900 mb-2">When to Choose Each Option</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-blue-50 rounded-lg">
            <p class="font-medium text-[#0055c8] mb-2">Choose Purpose-Built When:</p>
            <ul class="list-disc pl-5 space-y-1 text-sm">
              <li>Vector search is your primary workload</li>
              <li>You need highest performance for vectors</li>
              <li>Scale is critical (millions to billions)</li>
              <li>Vector search latency is a top priority</li>
              <li>You're building a dedicated AI/ML app</li>
            </ul>
          </div>
          <div class="p-4 bg-purple-50 rounded-lg">
            <p class="font-medium text-purple-800 mb-2">Choose Hybrid When:</p>
            <ul class="list-disc pl-5 space-y-1 text-sm">
              <li>You already use an existing database</li>
              <li>Vector search is an add-on feature</li>
              <li>You need transactional guarantees</li>
              <li>Data has complex relationships</li>
              <li>You want full-text + vector search</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  options: [
    { 
      id: "purpose-built", 
      label: "Use a Purpose-built Vector Database", 
      description: "Specialized for vector operations with high performance. Best for dedicated vector search applications.", 
      targetSectionId: "question-3" 
    },
    { 
      id: "hybrid", 
      label: "Use a Hybrid Solution", 
      description: "Add vector capabilities to existing database systems. Ideal when you need to combine vector operations with traditional database features.", 
      targetSectionId: "hybrid-solution-guide" 
    }
  ]
};

export const questionThree: QuestionData = {
  questionNumber: 3,
  title: 'Self-hosted, Serverless, or Managed Service?',
  overview: "Self-hosted databases give you maximum control and potential cost savings but require operational expertise. Serverless options eliminate infrastructure management with pay-per-use pricing, ideal for minimal operational overhead. Managed services balance control and convenience, providing dedicated resources with configuration options while handling the underlying infrastructure.",
  quiz: [
    {
      question: "What level of operational expertise do you have?",
      answers: [
        { 
          text: "Strong DevOps team with experience running databases", 
          points: { "self-hosted": 3, "serverless": 0, "managed": 1 } 
        },
        { 
          text: "Limited or no operational expertise", 
          points: { "self-hosted": 0, "serverless": 3, "managed": 2 } 
        },
        { 
          text: "Some DevOps expertise, but prefer to focus elsewhere", 
          points: { "self-hosted": 1, "serverless": 2, "managed": 3 } 
        }
      ]
    },
    {
      question: "What's your cost model preference?",
      answers: [
        { 
          text: "Prefer lower costs at scale, willing to manage infrastructure", 
          points: { "self-hosted": 3, "serverless": 0, "managed": 1 } 
        },
        { 
          text: "Prefer predictable per-operation pricing", 
          points: { "self-hosted": 0, "serverless": 3, "managed": 1 } 
        },
        { 
          text: "Need a balance of cost efficiency and management overhead", 
          points: { "self-hosted": 1, "serverless": 1, "managed": 3 } 
        }
      ]
    },
    {
      question: "How important is customization of the database configuration?",
      answers: [
        { 
          text: "We need full control over configuration and tuning", 
          points: { "self-hosted": 3, "serverless": 0, "managed": 1 } 
        },
        { 
          text: "We prefer a standard configuration that 'just works'", 
          points: { "self-hosted": 0, "serverless": 3, "managed": 1 } 
        },
        { 
          text: "We need some customization options but not complete control", 
          points: { "self-hosted": 1, "serverless": 0, "managed": 3 } 
        }
      ]
    }
  ],
  description: `
    <div>
      <div class="mb-4">
        <h4 class="text-lg font-medium text-gray-900 mb-2">Deployment Models</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 bg-blue-50 rounded-lg">
            <p class="font-medium text-[#0055c8] mb-2">Self-hosted</p>
            <p class="text-sm mb-2">Run in your own infrastructure</p>
            <ul class="list-disc pl-5 space-y-1 text-sm">
              <li>Maximum control</li>
              <li>Data stays in your environment</li>
              <li>Requires ops expertise</li>
              <li>Lower cloud costs at scale</li>
            </ul>
          </div>
          <div class="p-4 bg-green-50 rounded-lg">
            <p class="font-medium text-green-700 mb-2">Serverless</p>
            <p class="text-sm mb-2">Fully managed, pay-per-use</p>
            <ul class="list-disc pl-5 space-y-1 text-sm">
              <li>No infrastructure management</li>
              <li>Automatic scaling</li>
              <li>Predictable per-operation pricing</li>
              <li>Limited configuration options</li>
            </ul>
          </div>
          <div class="p-4 bg-purple-50 rounded-lg">
            <p class="font-medium text-purple-800 mb-2">Managed Service</p>
            <p class="text-sm mb-2">Hosted cloud service</p>
            <ul class="list-disc pl-5 space-y-1 text-sm">
              <li>Balance of control & convenience</li>
              <li>More configuration options</li>
              <li>Dedicated infrastructure</li>
              <li>Enterprise support options</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="mb-4">
        <h4 class="text-lg font-medium text-gray-900 mb-2">Key Considerations</h4>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left border">Factor</th>
                <th class="p-2 text-left border">Self-hosted</th>
                <th class="p-2 text-left border">Serverless</th>
                <th class="p-2 text-left border">Managed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border font-medium">Operational Effort</td>
                <td class="p-2 border">High</td>
                <td class="p-2 border">Minimal</td>
                <td class="p-2 border">Low</td>
              </tr>
              <tr>
                <td class="p-2 border font-medium">Cost Model</td>
                <td class="p-2 border">Infrastructure</td>
                <td class="p-2 border">Per operation</td>
                <td class="p-2 border">Instance-based</td>
              </tr>
              <tr>
                <td class="p-2 border font-medium">Scalability</td>
                <td class="p-2 border">Manual</td>
                <td class="p-2 border">Automatic</td>
                <td class="p-2 border">Semi-automatic</td>
              </tr>
              <tr>
                <td class="p-2 border font-medium">Customization</td>
                <td class="p-2 border">Complete</td>
                <td class="p-2 border">Limited</td>
                <td class="p-2 border">Moderate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  options: [
    { 
      id: "self-hosted", 
      label: "Self-hosted Vector Database", 
      description: "Deploy and manage the vector database in your own infrastructure. Maximum control and potential cost savings at scale.", 
      targetSectionId: "self-hosted-guide" 
    },
    { 
      id: "serverless", 
      label: "Serverless Vector Database", 
      description: "Use a fully managed, pay-per-use vector database service. Minimal operational overhead with automatic scaling.", 
      targetSectionId: "serverless-guide" 
    },
    { 
      id: "managed", 
      label: "Managed Vector Database Service", 
      description: "Use a cloud-hosted vector database with dedicated resources. Balance of control and convenience with more configuration options.", 
      targetSectionId: "managed-guide" 
    }
  ]
}; 