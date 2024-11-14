import React from "react";
import { Afacad, Noto_Sans_Mono } from "next/font/google";

const afacad = Afacad({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const noto_sans_mono = Noto_Sans_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "CHANNI: A Multi-Level Vector Search Index with Nested Graph Navigation",
  description:
    "Technical paper detailing CHANNI architecture and implementation",
};

export default function ChanniPaper() {
  return (
    <div className={`bg-white min-h-screen ${noto_sans_mono.className}`}>
      <article className="max-w-[60em] mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-[#374151]">
            CHANNI: A Multi-Level Vector Search Index with Nested Graph
            Navigation
          </h1>
          <p className={`text-gray-500 ${afacad.className} text-lg`}>
            Cosdata Research
          </p>
        </header>

        <div className={`prose prose-lg max-w-none text-[#374151] ${afacad.className}`}>
          {/* Table of Contents */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Table of Contents</h2>
          <ul className="list-disc list-inside mb-8 text-lg">
            <li><a href="#abstract" className="text-blue-600 hover:underline">1. Abstract</a></li>
            <li><a href="#introduction" className="text-blue-600 hover:underline">2. Introduction</a></li>
            <li>
              <a href="#core-innovation" className="text-blue-600 hover:underline">3. Core Innovation</a>
              <ul className="list-disc list-inside ml-4">
                <li><a href="#multi-level-navigation" className="text-blue-600 hover:underline">3.1. Multi-Level Navigation Architecture</a></li>
                <li>
                  <a href="#primary-based-cluster" className="text-blue-600 hover:underline">3.2. Primary-Based Cluster Representation</a>
                  <ul className="list-disc list-inside ml-8">
                    <li><a href="#advantages" className="text-blue-600 hover:underline">3.2.1. Advantages</a></li>
                    <li><a href="#hybrid-approach" className="text-blue-600 hover:underline">3.2.2. Hybrid Approach for Splits</a></li>
                    <li><a href="#trade-offs" className="text-blue-600 hover:underline">3.2.3. Trade-offs</a></li>
                    <li><a href="#implementation-impact" className="text-blue-600 hover:underline">3.2.4. Implementation Impact</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#illustration" className="text-blue-600 hover:underline">4. Illustration</a></li>
            <li>
              <a href="#clustering-strategy" className="text-blue-600 hover:underline">5. Clustering Strategy</a>
              <ul className="list-disc list-inside ml-4">
                <li><a href="#initial-cluster-selection" className="text-blue-600 hover:underline">5.1. Initial Cluster Primary Selection</a></li>
                <li><a href="#theoretical-analysis" className="text-blue-600 hover:underline">5.2. Theoretical Analysis</a></li>
              </ul>
            </li>
            <li>
              <a href="#index-construction" className="text-blue-600 hover:underline">6. Index Construction and Performance</a>
              <ul className="list-disc list-inside ml-4">
                <li><a href="#build-process" className="text-blue-600 hover:underline">6.1. Build Process Overview</a></li>
                <li><a href="#build-time-optimizations" className="text-blue-600 hover:underline">6.2. Build-Time Optimizations</a></li>
                <li><a href="#search-performance-relationship" className="text-blue-600 hover:underline">6.3. Relationship to Search Performance</a></li>
                <li><a href="#resource-requirements" className="text-blue-600 hover:underline">6.4. Resource Requirements</a></li>
              </ul>
            </li>
            <li>
              <a href="#technical-architecture" className="text-blue-600 hover:underline">7. Technical Architecture</a>
              <ul className="list-disc list-inside ml-4">
                <li><a href="#search-process" className="text-blue-600 hover:underline">7.1. Search Process</a></li>
                <li><a href="#parameter-configuration" className="text-blue-600 hover:underline">7.2. Parameter Configuration</a></li>
              </ul>
            </li>
            <li>
              <a href="#dynamic-index-maintenance" className="text-blue-600 hover:underline">8. Dynamic Index Maintenance</a>
              <ul className="list-disc list-inside ml-4">
                <li>
                  <a href="#split-merge-operations" className="text-blue-600 hover:underline">8.1. Split & Merge Operations</a>
                  <ul className="list-disc list-inside ml-8">
                    <li><a href="#cluster-split-strategy" className="text-blue-600 hover:underline">8.1.1. Cluster Split Strategy</a></li>
                    <li><a href="#cluster-merge-operations" className="text-blue-600 hover:underline">8.1.2. Cluster Merge Operations</a></li>
                    <li><a href="#transaction-management" className="text-blue-600 hover:underline">8.1.3. Transaction Management</a></li>
                    <li><a href="#performance-implications" className="text-blue-600 hover:underline">8.1.4. Performance Implications</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#parallel-maintenance" className="text-blue-600 hover:underline">8.2. Parallel Maintenance Operations</a>
                  <ul className="list-disc list-inside ml-8">
                    <li><a href="#concurrent-operations" className="text-blue-600 hover:underline">8.2.1. Concurrent Cluster Operations</a></li>
                    <li><a href="#resource-coordination" className="text-blue-600 hover:underline">8.2.2. Resource Coordination</a></li>
                    <li><a href="#monitoring-recovery" className="text-blue-600 hover:underline">8.2.3. Monitoring and Recovery</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#system-implementation" className="text-blue-600 hover:underline">9. System Implementation</a>
              <ul className="list-disc list-inside ml-4">
                <li><a href="#resource-management" className="text-blue-600 hover:underline">9.1. Resource Management</a></li>
              </ul>
            </li>
            <li>
              <a href="#performance-characteristics" className="text-blue-600 hover:underline">10. Performance Characteristics</a>
              <ul className="list-disc list-inside ml-4">
                <li><a href="#search-efficiency" className="text-blue-600 hover:underline">10.1. Search Efficiency</a></li>
                <li><a href="#io-patterns" className="text-blue-600 hover:underline">10.2. I/O Patterns</a></li>
              </ul>
            </li>
            <li>
              <a href="#search-parallelization" className="text-blue-600 hover:underline">11. Search Parallelization Strategy</a>
              <ul className="list-disc list-inside ml-4">
                <li><a href="#distributed-search" className="text-blue-600 hover:underline">11.1. Distributed Search Architecture</a></li>
                <li><a href="#parallel-resource-management" className="text-blue-600 hover:underline">11.2. Resource Management</a></li>
                <li><a href="#scaling-behavior" className="text-blue-600 hover:underline">11.3. Scaling Behavior</a></li>
              </ul>
            </li>
            <li>
              <a href="#scalability-features" className="text-blue-600 hover:underline">12. Scalability Features</a>
              <ul className="list-disc list-inside ml-4">
                <li><a href="#horizontal-scaling" className="text-blue-600 hover:underline">12.1. Horizontal Scaling</a></li>
                <li><a href="#resource-adaptation" className="text-blue-600 hover:underline">12.2. Resource Adaptation</a></li>
              </ul>
            </li>
            <li>
              <a href="#experimental-results" className="text-blue-600 hover:underline">13. Experimental Results</a>
              <ul className="list-disc list-inside ml-4">
                <li><a href="#dataset-characteristics" className="text-blue-600 hover:underline">13.1. Dataset Characteristics</a></li>
                <li><a href="#performance-metrics" className="text-blue-600 hover:underline">13.2. Performance Metrics</a></li>
              </ul>
            </li>
            <li>
              <a href="#future-research" className="text-blue-600 hover:underline">14. Future Research Directions</a>
              <ul className="list-disc list-inside ml-4">
                <li><a href="#theoretical-developments" className="text-blue-600 hover:underline">14.1. Theoretical Developments</a></li>
                <li><a href="#technical-enhancements" className="text-blue-600 hover:underline">14.2. Technical Enhancements</a></li>
                <li><a href="#potential-applications" className="text-blue-600 hover:underline">14.3. Potential Applications</a></li>
              </ul>
            </li>
            <li>
              <a href="#advantages" className="text-blue-600 hover:underline">15. Advantages over Existing Approaches</a>
            </li>
            <li>
              <a href="#conclusion" className="text-blue-600 hover:underline">16. Conclusion</a>
            </li>
            <li>
              <a href="#acknowledgments" className="text-blue-600 hover:underline">17. Acknowledgments</a>
            </li>
            <li>
              <a href="#references" className="text-blue-600 hover:underline">18. References</a>
            </li>
            <li>
              <a href="#todo" className="text-blue-600 hover:underline">19. TODO</a>
            </li>
          </ul>

          {/* Content Sections */}
          <section id="abstract" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">1. Abstract</h2>
            <p className="text-lg mb-6">
              CHANNI (Clustered Hierarchical Approximate Nested Navigable Index) introduces 
              a novel vector indexing architecture that bridges the gap between memory-efficient 
              clustering and high-performance graph navigation. By combining a hierarchical 
              navigable small world graph at the cluster level with hierarchical navigable 
              graphs within clusters, CHANNI achieves superior performance while maintaining 
              efficient resource utilization for large-scale vector search applications.
            </p>
          </section>

          <section id="introduction" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">2. Introduction</h2>
            <p className="text-lg mb-6">
              Vector similarity search at scale presents significant challenges in balancing 
              memory usage, search speed, and result quality. Traditional approaches either 
              consume excessive memory like pure HNSW implementations, or compromise on 
              accuracy through quantization-based methods. CHANNI addresses these limitations 
              through a novel multi-level architecture that intelligently combines clustering 
              with navigable graphs at different granularities.
            </p>
          </section>

          <section id="core-innovation" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">3. Core Innovation</h2>
            
            <section id="multi-level-navigation" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">3.1. Multi-Level Navigation Architecture</h3>
              <p className="text-lg mb-6">
                The fundamental innovation in CHANNI lies in its dual-level navigation 
                approach. At the top level, a hierarchical navigable small world graph 
                connects cluster primaries, enabling rapid identification of relevant 
                clusters. Within each cluster, a hierarchical navigable graph structure 
                facilitates efficient local search with high precision. This separation 
                allows for independent parameter tuning at each level, optimizing both 
                coarse and fine-grained search operations while maintaining an optimal 
                balance between disk usage and memory consumption.
              </p>
            </section>

            <section id="primary-based-cluster" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">3.2. Primary-Based Cluster Representation</h3>
              <p className="text-lg mb-6">
                A key innovation in CHANNI is using actual vectors from the dataset as 
                cluster representatives (primaries), rather than maintaining computed 
                centroids. Unlike traditional clustering approaches like k-means that 
                continuously calculate and update centroids, CHANNI uses these primary 
                vectors for both top-level HNSW navigation and intra-cluster organization.
              </p>

              <section id="advantages" className="ml-4 mb-6">
                <h4 className="text-xl font-semibold mt-6 mb-3">3.2.1. Advantages</h4>
                <p className="text-lg mb-4">This design choice offers several significant benefits:</p>
                <ul className="list-disc list-inside mb-6 text-lg">
                  <li>Eliminates continuous computational overhead of centroid calculations during normal operations</li>
                  <li>Avoids centroid drift during routine updates</li>
                  <li>Ensures cluster representative is always a real vector from the dataset</li>
                  <li>Reduces memory footprint by not storing additional centroid vectors</li>
                  <li>Maintains stable cluster identification through primary vectors</li>
                </ul>
              </section>

              <section id="hybrid-approach" className="ml-4 mb-6">
                <h4 className="text-xl font-semibold mt-6 mb-3">3.2.2. Hybrid Approach for Splits</h4>
                <p className="text-lg mb-4">CHANNI employs a strategic hybrid approach during cluster splits:</p>
                <ul className="list-disc list-inside mb-6 text-lg">
                  <li>Computes temporary centroids only during split operations</li>
                  <li>Selects new primaries as vectors nearest to computed centroids</li>
                  <li>One-time computation cost justified by improved cluster quality</li>
                  <li>Better balance in resulting sub-clusters</li>
                  <li>More representative space partitioning</li>
                </ul>
              </section>

              <section id="trade-offs" className="ml-4 mb-6">
                <h4 className="text-xl font-semibold mt-6 mb-3">3.2.3. Trade-offs</h4>
                <p className="text-lg mb-4">The system balances computational efficiency with cluster quality:</p>
                <ul className="list-disc list-inside mb-6 text-lg">
                  <li>Normal operations maintain zero centroid computation overhead</li>
                  <li>Split operations accept one-time computation cost for better clustering</li>
                  <li>Quality of initial cluster formation depends on primary selection strategy</li>
                  <li>Split quality improved through selective centroid computation</li>
                  <li>Memory impact limited to temporary split calculations</li>
                </ul>
              </section>

              <section id="implementation-impact" className="ml-4 mb-6">
                <h4 className="text-xl font-semibold mt-6 mb-3">3.2.4. Implementation Impact</h4>
                <p className="text-lg mb-4">This representation strategy affects several system components:</p>
                <ul className="list-disc list-inside mb-6 text-lg">
                  <li>Top-level HNSW graph connects actual data vectors (primaries)</li>
                  <li>Cluster splits use temporary centroid computation for better primary selection</li>
                  <li>Update operations maintain stable primaries unless splits/merges occur</li>
                  <li>Split operations can be scheduled during system low-load periods</li>
                </ul>
              </section>
            </section>
          </section>

          {/* Illustration Section */}
          <section id="illustration" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">4. Illustration</h2>
            <div className="bg-white p-8 rounded-lg text-center">
              <img 
                src="/svgs/CHANNI.svg" 
                alt="CHANNI Architecture Diagram"
                className="max-w-full h-auto mx-auto"
              />
            </div>
          </section>

          {/* Clustering Strategy Section */}
          <section id="clustering-strategy" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">5. Clustering Strategy: Vector Space Partitioning through Representative Sampling</h2>
            
            <section id="initial-cluster-selection" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">5.1. Initial Cluster Primary Selection</h3>
              <p className="text-lg mb-6">
                CHANNI implements a distinctive approach to cluster formation that challenges 
                traditional clustering methods. Instead of employing computationally expensive 
                k-means clustering, the system defers index construction until a substantial 
                portion of the vector embeddings are available. It then performs large-scale 
                sampling to select cluster primaries, which serve as initial primaries. This 
                strategy leverages the natural distribution properties of the vector space, 
                achieving well-distributed cluster sizes without the overhead of iterative 
                centroid refinement.
              </p>
            </section>

            <section id="theoretical-analysis" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">5.2. Theoretical Analysis</h3>
              <p className="text-lg mb-4">
                The distribution of cluster sizes in CHANNI warrants careful examination. 
                When selecting initial cluster primaries from a large sample of the vector 
                space, the resulting cluster size distribution is influenced by:
              </p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>The inherent distribution of the vector embeddings in the space</li>
                <li>Local density variations in different regions of the vector space</li>
                <li>The dimensionality and characteristics of the embedding space</li>
              </ul>

              <p className="text-lg mb-4">
                Since vectors are assigned to their closest cluster primary without a 
                similarity threshold, the cluster sizes naturally emerge from the interplay between:
              </p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>The initial sampling distribution of primaries</li>
                <li>The density distribution of vectors in different regions</li>
                <li>The relative distances between cluster primaries</li>
              </ul>

              <p className="text-lg mb-4">
                The absence of a similarity threshold means cluster boundaries are purely 
                determined by relative proximity to primaries. This raises interesting questions about:
              </p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>How the initial sampling density of primaries affects final cluster size distribution</li>
                <li>Whether certain regions of the vector space tend to accumulate larger clusters</li>
                <li>The relationship between vector space topology and resulting cluster characteristics</li>
                <li>Potential strategies for sampling primaries to achieve more balanced cluster sizes</li>
              </ul>

              <p className="text-lg mb-4">An important research direction is to empirically analyze:</p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>Typical cluster size distributions across different types of vector spaces</li>
                <li>The relationship between sampling ratio and cluster size variation</li>
                <li>The impact of non-uniform cluster sizes on search performance</li>
                <li>Whether adaptive sampling strategies could improve size distribution without sacrificing the computational efficiency of our approach</li>
              </ul>
            </section>
          </section>

          {/* Index Construction Section */}
          <section id="index-construction" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">6. Index Construction and Performance</h2>

            <section id="build-process" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">6.1. Build Process Overview</h3>
              <p className="text-lg mb-6">The construction of CHANNI index follows a distinct phased approach:</p>

              <section className="ml-4 mb-6">
                <h4 className="text-xl font-semibold mt-6 mb-3">6.1.1. Initial Sampling Phase</h4>
                <ul className="list-disc list-inside mb-6 text-lg">
                  <li>Waiting for substantial vector collection (80% of expected data)</li>
                  <li>Large-scale sampling to select cluster primaries</li>
                  <li>Time complexity: O(n) for sampling from n vectors</li>
                </ul>
              </section>

              <section className="ml-4 mb-6">
                <h4 className="text-xl font-semibold mt-6 mb-3">6.1.2. Cluster Formation Phase</h4>
                <ul className="list-disc list-inside mb-6 text-lg">
                  <li>Assignment of vectors to nearest primaries via HNSW routing</li>
                  <li>Progressive cluster building as vectors are assigned</li>
                  <li>Parallel processing capabilities during assignment</li>
                  <li>Time complexity: O(n log k) where k is number of clusters</li>
                </ul>
              </section>

              <section className="ml-4 mb-6">
                <h4 className="text-xl font-semibold mt-6 mb-3">6.1.3. Graph Construction Phase</h4>
                <ul className="list-disc list-inside mb-6 text-lg">
                  <li>Building top-level HNSW graph connecting cluster primaries</li>
                  <li>Construction of hierarchical navigable graphs within each cluster</li>
                  <li>Independent parameter tuning for each level</li>
                  <li>Time complexity: O(k log k) for cluster primaries' HNSW, O(m log m) for each cluster of size m</li>
                </ul>
              </section>
            </section>

            <section id="build-time-optimizations" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">6.2. Build-Time Optimizations</h3>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>Parallel cluster construction</li>
                <li>Efficient memory management during building</li>
                <li>Batch processing of vector assignments</li>
                <li>Progressive disk serialization of completed clusters</li>
              </ul>
            </section>

            <section id="search-performance-relationship" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">6.3. Relationship to Search Performance</h3>
              <p className="text-lg mb-4">The index construction process directly influences search efficiency:</p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>Quality of initial primary selection affects cluster balance</li>
                <li>Cluster primaries' HNSW structure determines routing efficiency</li>
                <li>Within-cluster graph connectivity impacts local search speed</li>
                <li>Build-time parameter choices influence search-time performance trade-offs</li>
              </ul>
            </section>

            <section id="resource-requirements" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">6.4. Resource Requirements</h3>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>Memory usage patterns during construction</li>
                <li>Disk I/O characteristics for cluster serialization</li>
                <li>CPU utilization during different phases</li>
                <li>Temporary storage needs</li>
              </ul>
            </section>
          </section>

          {/* Technical Architecture Section */}
          <section id="technical-architecture" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">7. Technical Architecture</h2>

            <section id="search-process" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">7.1. Search Process</h3>
              <p className="text-lg mb-6">
                The search process in CHANNI occurs in multiple phases, each optimized 
                for its specific role. Initially, the system navigates the HNSW graph 
                to identify relevant clusters. Once target clusters are identified, 
                the system accesses their hierarchical navigable graphs to perform 
                precise local searches. This multi-phase approach ensures both broad 
                coverage and detailed local exploration while maintaining efficient 
                resource utilization.
              </p>
            </section>

            <section id="parameter-configuration" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">7.2. Parameter Configuration</h3>
              <p className="text-lg mb-6">
                CHANNI's architecture enables fine-grained control over search and 
                construction parameters at each level. The top-level HNSW graph can be 
                optimized for quick cluster identification, while cluster-level graphs 
                can be tuned for precision. This flexibility allows for sophisticated 
                trade-off management between search speed and accuracy.
              </p>
            </section>
          </section>

          {/* Dynamic Index Maintenance Section */}
          <section id="dynamic-index-maintenance" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">8. Dynamic Index Maintenance</h2>

            <section id="split-merge-operations" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">8.1. Split & Merge Operations</h3>

              <section id="cluster-split-strategy" className="ml-4 mb-6">
                <h4 className="text-xl font-semibold mt-6 mb-3">8.1.1. Cluster Split Strategy</h4>
                <p className="text-lg mb-4">
                  When clusters grow beyond predetermined size thresholds, CHANNI 
                  employs an adaptive split mechanism with OOD detection:
                </p>

                <div className="ml-4">
                  <h5 className="text-lg font-semibold mt-4 mb-2">Initial Centroid Formation</h5>
                  <ul className="list-disc list-inside mb-4 text-lg">
                    <li>Compute initial split count N = max(3, log(cluster_size))</li>
                    <li>Use mini-batch k-means to form N temporary centroids</li>
                    <li>This allows detection of potential subclusters and OOD vectors</li>
                  </ul>

                  <h5 className="text-lg font-semibold mt-4 mb-2">OOD Detection & Handling</h5>
                  <ul className="list-disc list-inside mb-4 text-lg">
                    <li>Calculate mean distance μ and standard deviation σ of vectors to their nearest centroid</li>
                    <li>Flag vectors with distance %gt; μ + 2σ as potential OOD</li>
                    <li>Create separate OOD clusters if sufficient OOD vectors are detected</li>
                    <li>Limit OOD cluster size to prevent fragmentation</li>
                  </ul>

                  <h5 className="text-lg font-semibold mt-4 mb-2">Final Split Process</h5>
                  <ul className="list-disc list-inside mb-4 text-lg">
                    <li>For non-OOD vectors, merge centroids until reaching target split count (usually 2-3)</li>
                    <li>Select actual vectors nearest to final centroids as new primaries</li>
                    <li>Assign remaining vectors to nearest primary</li>
                  </ul>

                  <h5 className="text-lg font-semibold mt-4 mb-2">Primary Selection & Integration</h5>
                  <ul className="list-disc list-inside mb-4 text-lg">
                    <li>Choose vectors nearest to computed centroids as new primaries</li>
                  </ul>

                  <h5 className="text-lg font-semibold mt-4 mb-2">Efficient HNSW routing graph updates</h5>
                  <p className="text-lg mb-4">
                    CHANNI employs an innovative strategy to optimize cluster splits 
                    while maintaining routing efficiency. During a split operation, the 
                    system reuses the original cluster's primary-hash based file name 
                    for one of the new centroids, specifically selecting the centroid 
                    closest to the original primary. This approach requires only 
                    updating the cluster's internal root to point to the new centroid 
                    vector, while creating a new cluster file only for the additional 
                    centroid.
                  </p>
                  <p className="text-lg mb-4">
                    The selection of the nearest centroid for reuse is crucial for 
                    maintaining the effectiveness of the HNSW routing graph. By 
                    preserving locality in the graph traversal, vectors previously 
                    routable via the original primary remain accessible through similar 
                    paths. This strategy ensures that distance-based routing decisions 
                    remain valid and minimizes disruption to the existing HNSW graph 
                    structure while preserving locality-sensitive navigation patterns.
                  </p>
                  <p className="text-lg mb-4">
                    This optimization dramatically reduces maintenance overhead by 
                    avoiding expensive HNSW deletion operations and maintaining 
                    unidirectional neighbor relationships. The approach requires just a 
                    single update operation instead of costly deletion and multiple 
                    insertions, while preserving the existing cluster file structure.
                  </p>
                </div>
              </section>

              <section id="cluster-merge-operations" className="ml-4 mb-6">
                <h4 className="text-xl font-semibold mt-6 mb-3">8.1.2. Cluster Merge Operations</h4>
                <p className="text-lg mb-4">
                  Conversely, CHANNI identifies and merges undersized clusters, which may result from:
                </p>
                <ul className="list-disc list-inside mb-4 text-lg">
                  <li>Out-of-distribution vectors forming small clusters</li>
                  <li>Deletion operations leaving sparse clusters</li>
                  <li>Natural data distribution shifts</li>
                </ul>

                <p className="text-lg mb-4">The merge process involves:</p>
                <ul className="list-disc list-inside mb-4 text-lg">
                  <li>Size threshold monitoring during transaction commits</li>
                  <li>Identification of merge candidates based on size and proximity</li>
                  <li>Cluster consolidation with primary selection from merged set</li>
                </ul>

                <div className="ml-4">
                  <h5 className="text-lg font-semibold mt-4 mb-2">Merge Operation Strategy</h5>
                  <p className="text-lg mb-4">
                    For cluster merges, CHANNI implements a dual-primary routing 
                    approach that maintains multiple valid paths to merged clusters. 
                    Instead of deleting redundant primaries, the system updates 
                    primary-hash to cluster mappings for both original primaries to 
                    reference a single consolidated cluster file. The cluster's root 
                    is updated to reflect the new primary while maintaining both 
                    original routing paths in the HNSW graph.
                  </p>
                  <p className="text-lg mb-4">
                    This dual-primary strategy is particularly crucial for handling 
                    out-of-distribution (OOD) vectors. Since OOD clusters are typically 
                    smaller and more likely to undergo merges, maintaining multiple 
                    routing paths ensures reliable vector retrieval. OOD vectors, which 
                    may be reachable through different routing paths in the HNSW graph, 
                    remain accessible through either primary. This approach prevents 
                    potential accessibility issues during cluster consolidation while 
                    supporting efficient retrieval of outlier vectors.
                  </p>
                  <p className="text-lg mb-4">
                    The preservation of multiple valid entry points to merged clusters 
                    ensures stability in the HNSW routing structure and maintains search 
                    quality across diverse vector distributions. This strategy eliminates 
                    the need for HNSW graph deletions, simplifies recovery operations, 
                    and significantly reduces maintenance overhead while ensuring robust 
                    accessibility for all vectors, including outliers and OOD cases.
                  </p>
                </div>
              </section>

              <section id="transaction-management" className="ml-4 mb-6">
                <h4 className="text-xl font-semibold mt-6 mb-3">8.1.3. Transaction Management</h4>
                <p className="text-lg mb-4">
                  Both split and merge operations are integrated into the transaction commit process:
                </p>
                <ul className="list-disc list-inside mb-4 text-lg">
                  <li>Atomic updates ensure index consistency</li>
                  <li>Batch processing of multiple operations when possible</li>
                  <li>Efficient handling of concurrent operations</li>
                  <li>Recovery mechanisms for interrupted operations</li>
                </ul>
              </section>

              <section id="performance-implications" className="ml-4 mb-6">
                <h4 className="text-xl font-semibold mt-6 mb-3">8.1.4. Performance Implications</h4>
                <p className="text-lg mb-4">The dynamic maintenance strategy impacts several aspects:</p>
                <ul className="list-disc list-inside mb-4 text-lg">
                  <li>Search performance during reorganization</li>
                  <li>Resource utilization during splits and merges</li>
                  <li>HNSW graph quality maintenance</li>
                  <li>Overall index balance and efficiency</li>
                </ul>
                <p className="text-lg mb-4">
                  This adaptive approach ensures CHANNI maintains optimal performance 
                  characteristics even as the underlying data distribution evolves over time.
                </p>
              </section>
            </section>

            <section id="parallel-maintenance" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">8.2. Parallel Maintenance Operations</h3>

              <section id="concurrent-operations" className="ml-4 mb-6">
                <h4 className="text-xl font-semibold mt-6 mb-3">8.2.1. Concurrent Cluster Operations</h4>
                <p className="text-lg mb-4">
                  CHANNI's architecture enables parallel execution of both split and 
                  merge operations, maximizing throughput during index maintenance. 
                  Multiple large clusters can undergo split operations simultaneously, 
                  while independent merge operations can process smaller clusters in 
                  parallel. This concurrent processing capability significantly reduces 
                  maintenance windows and keeps the index optimized even under heavy 
                  update loads.
                </p>
                <p className="text-lg mb-4">
                  The system employs fine-grained locking mechanisms to ensure data 
                  consistency during parallel operations. When splitting large clusters, 
                  each operation works independently on its target cluster while 
                  maintaining HNSW graph consistency. Similarly, merge operations can 
                  process multiple sets of small clusters concurrently, with careful 
                  coordination to prevent conflicts in primaries management.
                </p>
                <p className="text-lg mb-4">Key aspects of parallel processing include:</p>
                <ul className="list-disc list-inside mb-4 text-lg">
                  <li>Independent primary sampling and vector reassignment for splits</li>
                  <li>Simultaneous merge operations for non-overlapping cluster sets</li>
                  <li>Parallel updates to the HNSW routing structure</li>
                  <li>Transaction isolation between different maintenance operations</li>
                </ul>
              </section>

              <section id="resource-coordination" className="ml-4 mb-6">
                <h4 className="text-xl font-semibold mt-6 mb-3">8.2.2. Resource Coordination</h4>
                <p className="text-lg mb-4">
                  The parallel maintenance subsystem carefully manages system resources 
                  to balance maintenance tasks with ongoing search operations. A 
                  sophisticated resource manager allocates processing power, memory, and 
                  I/O bandwidth across concurrent operations while ensuring search 
                  performance remains within acceptable bounds.
                </p>
                <p className="text-lg mb-4">
                  The system employs multi-version concurrency control (MVCC) to 
                  maintain consistency during parallel operations. This approach allows 
                  read operations to proceed unimpeded while maintenance tasks modify 
                  cluster structures. Transaction boundaries are carefully managed to 
                  ensure atomic updates and provide clear rollback points if needed.
                </p>
                <p className="text-lg mb-4">Critical resource considerations:</p>
                <ul className="list-disc list-inside mb-4 text-lg">
                  <li>Worker pool allocation between search and maintenance tasks</li>
                  <li>Memory management for concurrent operations</li>
                  <li>I/O scheduling and cache coherency</li>
                  <li>CPU quota distribution across parallel tasks</li>
                </ul>
              </section>

              <section id="monitoring-recovery" className="ml-4 mb-6">
                <h4 className="text-xl font-semibold mt-6 mb-3">8.2.3. Monitoring and Recovery</h4>
                <p className="text-lg mb-4">
                  A comprehensive monitoring system tracks the progress and health of 
                  parallel maintenance operations. Real-time monitoring enables the 
                  system to detect and respond to resource constraints or failed 
                  operations quickly. If a maintenance operation fails, the system can 
                  roll back changes while keeping other parallel operations unaffected.
                </p>
                <p className="text-lg mb-4">
                  The parallel maintenance capability significantly improves CHANNI's 
                  ability to handle dynamic workloads, ensuring the index remains 
                  optimized without impacting search availability. By carefully 
                  balancing resources and maintaining consistency, the system provides 
                  robust performance even during intensive maintenance periods.
                </p>
              </section>
            </section>
          </section>

          {/* System Implementation Section */}
          <section id="system-implementation" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">9. System Implementation</h2>

            <section id="resource-management" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">9.1. Resource Management</h3>
              <p className="text-lg mb-6">
                The implementation focuses on efficient resource utilization through 
                careful memory management and disk I/O optimization. Cluster data 
                resides primarily on disk, with active clusters cached in memory as 
                needed. The system maintains two specialized registries: a lightweight 
                node registry for HNSW navigation and a cluster registry for data 
                access, both optimized for their specific access patterns.
              </p>
            </section>
          </section>

          {/* Performance Characteristics Section */}
          <section id="performance-characteristics" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">10. Performance Characteristics</h2>

            <section id="search-efficiency" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">10.1. Search Efficiency</h3>
              <p className="text-lg mb-6">
                The multi-level structure of CHANNI enables highly efficient search 
                operations. The top-level HNSW graph of cluster primaries provides 
                rapid cluster identification in logarithmic time complexity relative 
                to the number of clusters. Within each cluster, the hierarchical 
                navigable graph structure enables precise local search, maintaining 
                high recall while minimizing distance computations.
              </p>
              <p className="text-lg mb-4">Each level can be independently tuned through its efSearch parameter:</p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>Cluster-level navigation: Controls the trade-off between search speed and cluster selection accuracy</li>
                <li>Within-cluster search: Manages the precision of local vector retrieval</li>
              </ul>
            </section>

            <section id="io-patterns" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">10.2. I/O Patterns</h3>
              <p className="text-lg mb-4">CHANNI's architecture is specifically designed for efficient disk I/O patterns:</p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>Sequential cluster reads minimize disk seek operations</li>
                <li>Single-file cluster serialization enables efficient disk access</li>
                <li>Smart caching strategies keep frequently accessed clusters in memory</li>
                <li>Asynchronous I/O capabilities for parallel cluster loading</li>
              </ul>
            </section>
          </section>

          {/* Search Parallelization Strategy Section */}
          <section id="search-parallelization" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">11. Search Parallelization Strategy</h2>

            <section id="distributed-search" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">11.1. Distributed Search Architecture</h3>
              <p className="text-lg mb-6">
                CHANNI's cluster-based design inherently supports efficient parallel 
                search operations through a map-reduce style architecture. The search 
                process begins with a mapping phase where the query is routed through 
                the cluster primaries' HNSW graph to identify relevant clusters. This 
                initial routing process, while sequential, quickly narrows down the 
                search space to a subset of promising clusters.
              </p>
              <p className="text-lg mb-6">
                Once target clusters are identified, CHANNI distributes search 
                operations across multiple workers for parallel execution. Each worker 
                independently processes the search within its assigned clusters, 
                leveraging the local hierarchical navigable graphs for precise vector 
                retrieval. This parallel execution phase significantly reduces overall 
                search latency, especially for high-recall scenarios requiring 
                exploration of multiple clusters.
              </p>
              <p className="text-lg mb-6">
                The reduce phase aggregates results through a sophisticated merging 
                process. A priority queue-based mechanism combines candidates from 
                different clusters, ensuring the global top-k results are accurately 
                identified. This phase includes distance-based filtering and 
                progressive refinement to maintain search quality while minimizing 
                resource usage.
              </p>
              <p className="text-lg mb-4">Key performance optimizations include:</p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>Dynamic worker assignment based on cluster sizes and system load</li>
                <li>Cluster affinity mechanisms for optimal cache utilization</li>
                <li>Adaptive batch processing for query efficiency</li>
              </ul>
            </section>

            <section id="parallel-resource-management" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">11.2. Resource Management</h3>
              <p className="text-lg mb-4">
                The parallel search architecture requires careful resource 
                coordination across workers. CHANNI implements a memory-aware 
                scheduling system that optimizes cluster cache utilization across 
                parallel searches. This includes:
              </p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>Coordinated cache management across search workers</li>
                <li>Intelligent prefetching based on query patterns</li>
                <li>Efficient result buffer allocation and management</li>
              </ul>
              <p className="text-lg mb-4">The system dynamically adjusts its parallelization strategy based on:</p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>Available computational resources</li>
                <li>Current system load</li>
                <li>Query characteristics</li>
                <li>Desired recall targets</li>
              </ul>
            </section>

            <section id="scaling-behavior" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">11.3. Scaling Behavior</h3>
              <p className="text-lg mb-6">
                CHANNI's parallel search capability demonstrates near-linear scaling 
                with additional search workers, particularly for large-scale 
                deployments. The cluster-based architecture minimizes cross-worker 
                communication overhead, allowing efficient resource utilization even 
                with high parallelization factors.
              </p>
              <p className="text-lg mb-4">The effectiveness of parallelization is influenced by several factors:</p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>Cluster size distribution</li>
                <li>Network topology and bandwidth</li>
                <li>Cache hit rates</li>
                <li>Query complexity</li>
              </ul>
              <p className="text-lg mb-6">
                Through careful tuning of these parameters, CHANNI maintains high 
                search performance while efficiently utilizing available computational 
                resources across distributed environments.
              </p>
            </section>
          </section>

          {/* Scalability Features Section */}
          <section id="scalability-features" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">12. Scalability Features</h2>

            <section id="horizontal-scaling" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">12.1. Horizontal Scaling</h3>
              <p className="text-lg mb-4">The cluster-based organization naturally supports distributed deployment:</p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>Clusters can be distributed across multiple machines</li>
                <li>Top-level HNSW graph serves as an efficient routing mechanism</li>
                <li>Independent cluster processing enables true parallelism</li>
                <li>Load balancing through intelligent cluster distribution</li>
              </ul>
            </section>

            <section id="resource-adaptation" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">12.2. Resource Adaptation</h3>
              <p className="text-lg mb-4">The system adapts to various hardware configurations through:</p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>Configurable cache sizes for different memory profiles</li>
                <li>Adjustable cluster sizes based on available resources</li>
                <li>Tunable graph parameters for performance optimization</li>
                <li>Flexible disk-memory trade-off management</li>
              </ul>
            </section>
          </section>

          {/* Experimental Results Section */}
          <section id="experimental-results" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">13. Experimental Results</h2>

            <section id="dataset-characteristics" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">13.1. Dataset Characteristics</h3>
              <p className="text-lg mb-6">[Details about benchmark datasets used for evaluation]</p>
            </section>

            <section id="performance-metrics" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">13.2. Performance Metrics</h3>

              <section className="ml-4 mb-6">
                <h4 className="text-xl font-semibold mt-6 mb-3">13.2.1. Search Quality</h4>
                <ul className="list-disc list-inside mb-6 text-lg">
                  <li>Recall@k measurements across different k values</li>
                  <li>Precision comparison with pure HNSW and IVF approaches</li>
                  <li>Quality-speed trade-off analysis</li>
                </ul>
              </section>

              <section className="ml-4 mb-6">
                <h4 className="text-xl font-semibold mt-6 mb-3">13.2.2. Resource Utilization</h4>
                <ul className="list-disc list-inside mb-6 text-lg">
                  <li>Memory consumption patterns</li>
                  <li>Disk I/O measurements</li>
                  <li>CPU utilization analysis</li>
                  <li>Cache hit rates</li>
                </ul>
              </section>

              <section className="ml-4 mb-6">
                <h4 className="text-xl font-semibold mt-6 mb-3">13.2.3. Scalability Tests</h4>
                <ul className="list-disc list-inside mb-6 text-lg">
                  <li>Performance scaling with dataset size</li>
                  <li>Distribution efficiency measurements</li>
                  <li>Parallel processing capabilities</li>
                </ul>
              </section>
            </section>
          </section>

          {/* Future Research Directions Section */}
          <section id="future-research" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">14. Future Research Directions</h2>

            <section id="theoretical-developments" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">14.1. Theoretical Developments</h3>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>Mathematical modeling of cluster size distributions</li>
                <li>Optimization of sampling strategies</li>
                <li>Analysis of vector space characteristics impact</li>
                <li>Performance bounds theoretical analysis</li>
              </ul>
            </section>

            <section id="technical-enhancements" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">14.2. Technical Enhancements</h3>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>Dynamic parameter adjustment mechanisms</li>
                <li>Advanced caching strategies</li>
                <li>Distributed system optimizations</li>
                <li>Update handling improvements</li>
              </ul>
            </section>

            <section id="potential-applications" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">14.3. Potential Applications</h3>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>Cross-modal vector search</li>
                <li>Dynamic vector collections</li>
                <li>Real-time search requirements</li>
                <li>Resource-constrained environments</li>
              </ul>
            </section>
          </section>

          {/* Advantages Section */}
          <section id="advantages" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">15. Advantages over Existing Approaches</h2>
            <p className="text-lg mb-6">
              CHANNI demonstrates significant advantages over both pure HNSW and 
              inverted file approaches. Compared to pure HNSW, it achieves 
              dramatically reduced memory requirements while maintaining high search 
              quality. Unlike quantization-based methods, CHANNI preserves vector 
              precision within clusters and eliminates the need for expensive 
              clustering computations through its innovative sampling-based approach.
            </p>
          </section>

          {/* Conclusion Section */}
          <section id="conclusion" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">16. Conclusion</h2>
            <p className="text-lg mb-6">
              CHANNI represents a significant advancement in large-scale vector 
              search technology. Its innovative approach combining efficient 
              sampling-based clustering with multi-level navigation provides a 
              practical solution to the challenges of scale, performance, and 
              resource utilization. The system's flexibility and scalability make it 
              particularly valuable for real-world applications requiring 
              high-performance vector similarity search.
            </p>
          </section>

          {/* Acknowledgments Section */}
          <section id="acknowledgments" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">17. Acknowledgments</h2>
            <p className="text-lg mb-6">[To be added]</p>
          </section>

          {/* References Section */}
          <section id="references" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">18. References</h2>
            <p className="text-lg mb-6">[To be added based on relevant literature and technical foundations]</p>
          </section>

          {/* TODO Section */}
          <section id="todo" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">19. TODO</h2>
            <ul className="list-disc list-inside mb-6 text-lg">
              <li>Out of distribution vectors can be kept in exclusive clusters</li>
              <li>Versioning</li>
              <li>Metadata filtering</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
