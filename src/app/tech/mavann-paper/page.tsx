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
  title: "MAVANN: Metadata-Aware Vector Approximate Nearest Neighbor",
  description: "Technical paper detailing MAVANN architecture and implementation for metadata-based filtering in vector databases",
};

export default function MavannPaper() {
  return (
    <div className={`bg-white min-h-screen ${noto_sans_mono.className}`}>
      <article className="max-w-[60em] mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-[#374151]">
            MAVANN: Metadata-Aware Vector Approximate Nearest Neighbor
          </h1>
          <p className={`text-gray-500 ${afacad.className} text-lg`}>
            Cosdata Research
          </p>
        </header>

        <div className={`prose prose-lg max-w-none text-[#374151] ${afacad.className}`}>
          {/* Table of Contents */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Table of Contents</h2>
          <ul className="list-disc list-inside mb-8 text-lg">
            <li><a href="#introduction" className="text-blue-600 hover:underline">1. Introduction</a></li>
            <li>
              <a href="#comparison" className="text-blue-600 hover:underline">2. Comparison with Traditional Filtering Approaches</a>
              <ul className="list-disc list-inside ml-4">
                <li><a href="#pre-filtering" className="text-blue-600 hover:underline">2.1. Pre-Filtering</a></li>
                <li><a href="#post-filtering" className="text-blue-600 hover:underline">2.2. Post-Filtering</a></li>
                <li><a href="#mavann-approach" className="text-blue-600 hover:underline">2.3. MAVANN&apos;s Novel Approach</a></li>
              </ul>
            </li>
            <li><a href="#vector-structure" className="text-blue-600 hover:underline">3. Vector Structure in MAVANN</a></li>
            <li>
              <a href="#phased-distance" className="text-blue-600 hover:underline">4. Phased Distance Metric Computation</a>
              <ul className="list-disc list-inside ml-4">
                <li><a href="#metadata-evaluation" className="text-blue-600 hover:underline">4.1. Step 1: Metadata Segment Evaluation</a></li>
                <li><a href="#full-vector-computation" className="text-blue-600 hover:underline">4.2. Step 2: Full Vector Similarity Computation</a></li>
              </ul>
            </li>
            <li>
              <a href="#index-structure" className="text-blue-600 hover:underline">5. Index Structure</a>
              <ul className="list-disc list-inside ml-4">
                <li><a href="#base-vector" className="text-blue-600 hover:underline">5.1. Base Vector Representation</a></li>
                <li>
                  <a href="#metadata-encoding" className="text-blue-600 hover:underline">5.2. Metadata Segment Encoding</a>
                  <ul className="list-disc list-inside ml-4">
                    <li><a href="#dimension-allocation" className="text-blue-600 hover:underline">5.2.1. Dimension Allocation</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#metadata-schema" className="text-blue-600 hover:underline">5.3. Metadata Schema</a>
                  <ul className="list-disc list-inside ml-4">
                    <li><a href="#updating-schema" className="text-blue-600 hover:underline">5.3.1. Updating Metadata Schema</a></li>
                  </ul>
                </li>
                <li><a href="#filtering-index" className="text-blue-600 hover:underline">5.4. Metadata Filtering Index</a></li>
                <li><a href="#vector-extension" className="text-blue-600 hover:underline">5.5. Vector Extension and Indexing Process</a></li>
              </ul>
            </li>
            <li>
              <a href="#query-processing" className="text-blue-600 hover:underline">6. Query Processing</a>
              <ul className="list-disc list-inside ml-4">
                <li><a href="#pure-search" className="text-blue-600 hover:underline">6.1. Pure Similarity Search</a></li>
                <li><a href="#filtering-queries" className="text-blue-600 hover:underline">6.2. Metadata Filtering Queries</a></li>
                <li>
                  <a href="#query-encoding" className="text-blue-600 hover:underline">6.3. Query Vector Encoding Details</a>
                  <ul className="list-disc list-inside ml-4">
                    <li><a href="#equality-encoding" className="text-blue-600 hover:underline">6.3.1. Equality Filter Encoding</a></li>
                    <li><a href="#inequality-encoding" className="text-blue-600 hover:underline">6.3.2. Inequality Filter Encoding</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#performance" className="text-blue-600 hover:underline">7. Performance Considerations</a></li>
            <li><a href="#conclusion" className="text-blue-600 hover:underline">8. Conclusion</a></li>
          </ul>

          {/* Content Sections */}
          <section id="introduction" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">1. Introduction</h2>
            <p className="text-lg mb-6">
              This document details the design and implementation of metadata-based filtering capabilities 
              in the Cosdata vector database, specifically for HNSW dense vectors. The core innovation 
              of MAVANN (Metadata-Aware Vector Approximate Nearest Neighbor) lies in extending vector 
              dimensions to encode metadata directly within the vector space. By appending metadata 
              dimensions to the base vector representation, MAVANN enables efficient filtering while 
              preserving the accuracy of similarity search.
            </p>
          </section>

          <section id="comparison" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">2. Comparison with Traditional Filtering Approaches</h2>
            
            <section id="pre-filtering" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">2.1. Pre-Filtering</h3>
              <p className="text-lg mb-4">
                Pre-filtering applies constraints before the similarity search begins, reducing the candidate pool. 
                While effective, it suffers from:
              </p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li className="mb-2"><strong>Reduced Search Space:</strong> By filtering before the vector search, 
                it artificially limits the potential matches and may miss semantically relevant results that 
                don&apos;t exactly match the metadata criteria.</li>
                <li><strong>Performance Issues:</strong> Maintaining separate metadata indexes alongside vector 
                indexes can be slow, especially with high-cardinality metadata fields. Query planning overhead 
                also adds complexity.</li>
              </ul>
            </section>

            <section id="post-filtering" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">2.2. Post-Filtering</h3>
              <p className="text-lg mb-4">
                Post-filtering applies metadata constraints after retrieving the nearest neighbors. 
                While preserving ANN speed, it introduces:
              </p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li className="mb-2"><strong>Inefficient Resource Usage:</strong> Full vector similarity search 
                is performed before filtering, leading to wasted computation on discarded results.</li>
                <li className="mb-2"><strong>Result Quality Issues:</strong> If too many top matches are filtered 
                out, the final result set may be insufficient, requiring retrieval of more candidates.</li>
                <li><strong>Architectural Complexity:</strong> Requires separate filtering logic, complicating 
                caching, optimization, and ranking.</li>
              </ul>
            </section>

            <section id="mavann-approach" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">2.3. MAVANN&apos;s Novel Approach</h3>
              <p className="text-lg mb-6">
                MAVANN eliminates the inefficiencies of pre- and post-filtering by integrating metadata into 
                the vector representation itself. By encoding metadata within the vector space, filtering 
                becomes an inherent part of the ANN search process, avoiding unnecessary computation and 
                improving precision.
              </p>
            </section>
          </section>

          <section id="vector-structure" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">3. Vector Structure in MAVANN</h2>
            <p className="text-lg mb-6">
              Instead of treating metadata as separate filters applied before or after the similarity search, 
              MAVANN expands the vector space by appending metadata dimensions to the core feature vector. 
              This means each vector has two segments:
            </p>
            <ul className="list-disc list-inside mb-6 text-lg">
              <li className="mb-2">
                <strong>Values Segment:</strong> The primary dimensions capturing the core vector 
                representation (e.g., an embedding from a neural network).
              </li>
              <li className="mb-2">
                <strong>Metadata Segment:</strong> Additional dimensions encoding metadata, such as 
                categorical tags, numerical constraints, or temporal information.
              </li>
            </ul>
            <p className="text-lg mb-6">
              Formally, for an original vector <code>v</code> with <code>d</code> dimensions, 
              MAVANN extends it to <code>v&apos;</code> with <code>d + m</code> dimensions, where 
              <code>m</code> represents metadata dimensions.
            </p>
          </section>

          <section id="phased-distance" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">4. Phased Distance Metric Computation</h2>
            <p className="text-lg mb-6">
              MAVANN enables a staged similarity computation, optimizing performance while maintaining precision. 
              This staged approach is particularly beneficial in hierarchical search structures like HNSW and 
              is relevant to both indexing and query processing.
            </p>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">Step 1: Metadata Segment Evaluation</h3>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li className="mb-2">
                  Compute the distance metric (e.g., cosine similarity, Euclidean distance) only on the 
                  <strong> metadata segment</strong>.
                </li>
                <li className="mb-2">
                  If the metadata segment satisfies the required constraints (e.g., similarity threshold is met), 
                  proceed to the next step.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">Step 2: Full Vector Similarity Computation</h3>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li className="mb-2">
                  Compute the similarity using the full vector (<strong>values + metadata</strong>).
                </li>
                <li className="mb-2">
                  This ensures that filtering is integrated into the ANN search without requiring explicit 
                  pre- or post-processing.
                </li>
              </ul>
            </section>
          </section>

          <section id="index-structure" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">5. Index Structure</h2>
            
            <section id="base-vector" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">5.1. Base Vector Representation</h3>
              <p className="text-lg mb-6">
                All vectors in the system, whether used for pure similarity search or metadata filtering, 
                must maintain the same dimensionality for HNSW graph construction and search. To achieve 
                this, MAVANN extends the values segment with additional metadata segment dimensions, 
                ensuring consistent indexing across all vectors.
              </p>
            </section>

            <section id="metadata-encoding" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">5.2. Metadata Segment Encoding</h3>
              <p className="text-lg mb-6">
                The metadata segment follows a carefully designed encoding scheme that balances accuracy, 
                efficiency, and storage requirements. Each metadata field requires a specific number of 
                additional dimensions based on its cardinality (number of possible values).
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Dimension Allocation</h4>
              <p className="text-lg mb-4">
                For each metadata field, the number of required dimensions is calculated by rounding up 
                the field&apos;s cardinality to the nearest power of 2. This allocation ensures efficient 
                binary encoding of values. Examples include:
              </p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li className="mb-2">
                  A field representing months (12 possible values) requires 4 dimensions (equivalent to 
                  <code>2^4 = 16</code> binary bits).
                </li>
                <li className="mb-2">
                  A field for days of the week (7 values) requires 3 dimensions (equivalent to 
                  <code>2^3</code> binary bits).
                </li>
                <li className="mb-2">
                  A binary field (2 values) requires 1 dimension (equivalent to <code>2^1</code> binary bit).
                </li>
                <li className="mb-2">
                  A field with 100 possible values requires 7 dimensions (equivalent to <code>2^7</code> binary bits).
                </li>
              </ul>
            </section>

            <section id="metadata-schema" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">5.3. Metadata Schema</h3>
              <p className="text-lg mb-4">
                At the time of creating a collection, the user specifies a <strong>metadata schema</strong>, 
                which includes:
              </p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li className="mb-2">Metadata fields that require filtering.</li>
                <li className="mb-2">
                  Unique values for each metadata field, allowing implicit lexicographical sorting for 
                  numeric mapping.
                </li>
                <li className="mb-2">
                  AND/OR query support specifications to optimize logical index creation.
                </li>
              </ul>
              <p className="text-lg mb-6">
                The metadata schema is stored in LMDB. If an insert request contains metadata values 
                outside the schema, an error is returned.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Updating Metadata Schema</h4>
              <p className="text-lg mb-6">
                If new metadata values need to be added, there may be available dimensions due to 
                power-of-2 rounding. If no room exists, a reindexing process is required. Adding a 
                new metadata field also necessitates reindexing due to dimensionality changes.
              </p>
            </section>

            <section id="filtering-index" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">5.4. Metadata Filtering Index</h3>
              <p className="text-lg mb-6">
                The unified index structure contains multiple copies of each vector, where each copy 
                is optimized for different metadata filtering scenarios. While these appear logically 
                separate, they are physically stored within a single HNSW graph structure sharing a 
                common root node. The key aspects are:
              </p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li className="mb-2">Base Vector Copy: Contains metadata dimensions but no high-weight values</li>
                <li className="mb-2">
                  Combined Field Copies: For AND query support, vectors are copied with high-weight values 
                  for multiple field combinations. The field combinations that need to be supported will be 
                  specified in the <code>metadata_schema</code> at the time of collection creation
                </li>
                <li className="mb-2">
                  All fields combined copy: For OR query support, a single copy with high-weight values for 
                  all the fields is sufficient. This way, we avoid creating copies for individual fields. 
                  If the <code>metadata_schema</code> includes AND query support for all fields, then this 
                  copy will be created anyway
                </li>
              </ul>

              <h4 className="text-xl font-semibold mt-6 mb-3">Vector Extension and Indexing Process</h4>
              <p className="text-lg mb-4">The indexing process requires multiple passes for each vector:</p>
              <ol className="list-decimal list-inside mb-6 text-lg">
                <li className="mb-2">
                  First Pass: Index the base vector with metadata dimensions (no high weights)
                </li>
                <li className="mb-2">
                  Subsequent Passes: For each required metadata field combination (AND query support):
                  <ul className="list-disc list-inside ml-8 mt-2">
                    <li>Create a copy of the vector</li>
                    <li>Set appropriate high-weight values in the metadata dimensions for all relevant fields</li>
                    <li>Index this copy</li>
                  </ul>
                </li>
                <li className="mb-2">
                  Additional Pass (Optional): For all fields combination (OR query support):
                  <ul className="list-disc list-inside ml-8 mt-2">
                    <li>Create a copy with high-weight values for all fields</li>
                    <li>Index this combination copy</li>
                    <li>
                      This step is optional because if the <code>metadata_schema</code> requires AND field 
                      support for all the fields, then this copy would have already been created in step 2
                    </li>
                  </ul>
                </li>
              </ol>
              <p className="text-lg mb-6">
                All these passes contribute to building the unified HNSW graph structure. The metadata 
                dimensions ensure consistent vector dimensionality across all copies, while the high-weight 
                values enable effective filtering during queries.
              </p>
            </section>
          </section>

          <section id="query-processing" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">6. Query Processing</h2>
            
            <section id="pure-search" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">6.1. Pure Similarity Search</h3>
              <p className="text-lg mb-6">
                When no metadata filtering is needed, queries use vectors with metadata dimensions 
                (no high weights), effectively matching the base vector copies in the index.
              </p>
            </section>

            <section id="filtering-queries" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">6.2. Metadata Filtering Queries</h3>
              <p className="text-lg mb-6">
                For metadata-filtered searches, the query vector is constructed with appropriate +1/-1 
                values in the metadata dimensions:
              </p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li className="mb-2">+1 for matching the desired value&apos;s position</li>
                <li className="mb-2">-1 for other positions to prevent false matches</li>
              </ul>
              <p className="text-lg mb-4">
                The system automatically routes the query to the appropriate vector copies based on 
                the filtering criteria:
              </p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li className="mb-2">Single field filters use the all-fields copy</li>
                <li className="mb-2">
                  A naive implementation for OR conditions will require multiple searches using 
                  all-fields copy, with results merged
                </li>
                <li className="mb-2">AND conditions use the pre-computed combination copies</li>
              </ul>
            </section>

            <section id="query-encoding" className="mb-8">
              <h3 className="text-2xl font-semibold mt-8 mb-4">6.3. Query Vector Encoding Details</h3>
              <p className="text-lg mb-6">
                The effectiveness of metadata filtering relies on a carefully designed query vector 
                encoding scheme that uses +1/-1 values to ensure precise matching. This encoding 
                scheme is fundamental to supporting both equality and inequality filters.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Equality Filter Encoding</h4>
              <p className="text-lg mb-4">
                When searching for vectors with a specific metadata value, the system employs a binary 
                encoding strategy across the dimensions allocated for that field. For example, when 
                filtering for value 1 in a field, the query vector would have:
              </p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li className="mb-2">A positive value (+1) in the position corresponding to bit 0</li>
                <li className="mb-2">A negative value (-1) in the position corresponding to bit 1</li>
                <li className="mb-2">Similar negative values in all other bit positions for that field</li>
              </ul>
              <p className="text-lg mb-6">
                This encoding ensures accurate discrimination between different values. For instance, 
                when searching for value 1, a vector with value 3 (binary 11) will not match because 
                the negative query value at position 1 will create a repelling force in the dot product 
                calculation, effectively eliminating false matches.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Inequality Filter Encoding</h4>
              <p className="text-lg mb-4">
                For inequality filters (field != x), the system inverts the encoding used in equality 
                filters. Taking the same example of filtering for &quot;not equal to 1&quot;:
              </p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li className="mb-2">The positive and negative values from the equality encoding are inverted</li>
                <li className="mb-2">Position 0 becomes -1</li>
                <li className="mb-2">Position 1 becomes +1</li>
                <li className="mb-2">Other positions retain appropriate values to maintain filtering accuracy</li>
              </ul>
              <p className="text-lg mb-6">
                During dot product calculations, these inverted values create attractive forces for all 
                values except the one being excluded, effectively implementing the inequality constraint.
              </p>
              <p className="text-lg mb-6">
                The high-weight values used in the indexed vectors, combined with the +1/-1 encoding in 
                query vectors, create substantial differences in dot product results between matching and 
                non-matching vectors. This ensures reliable filtering even in the presence of approximate 
                nearest neighbor search.
              </p>
            </section>
          </section>

          <section id="performance" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">7. Performance Considerations</h2>
            <p className="text-lg mb-6">
              MAVANN achieves efficient ANN filtering without degrading search performance:
            </p>
            <ul className="list-disc list-inside mb-6 text-lg">
              <li className="mb-2">
                <strong>Metadata dimensions do not impact pure similarity searches.</strong>
              </li>
              <li className="mb-2">
                <strong>Staged filtering minimizes unnecessary similarity computations.</strong>
              </li>
              <li className="mb-2">
                <strong>High-weight metadata values create definitive separation in dot product calculations.</strong>
              </li>
              <li className="mb-2">
                <strong>Logical indexing balances storage overhead with retrieval speed.</strong>
              </li>
            </ul>
          </section>

          <section id="conclusion" className="mb-12">
            <h2 className="text-3xl font-semibold mt-12 mb-6">8. Conclusion</h2>
            <p className="text-lg mb-6">
              MAVANN integrates metadata filtering seamlessly into the ANN search process by expanding 
              the vector space and encoding metadata within the vector representation. By leveraging 
              metadata-aware indexing and staged similarity computation, MAVANN ensures efficient and 
              accurate retrieval while preserving the high performance of HNSW-based vector search. 
              Unlike traditional pre-filtering and post-filtering methods, MAVANN optimally balances 
              precision, recall, and computational efficiency, making it a superior approach for 
              metadata-aware ANN search.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
} 