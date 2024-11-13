import { commonStyles } from "../styles/common";
import React from 'react';

export default function TechPreface() {
    return (
        <div className={`${commonStyles.mainContainer} py-[40px] 2xl:py-[80px]`}>
            <div className={`${commonStyles.sectionTitle}`}>
                Preface: The Need for CHANNI
            </div>
            
            <div className="space-y-12">
                <div>
                    <h3 className={commonStyles.featureTitle}>The Vector Search Challenge</h3>
                    <p className={commonStyles.featureDescription}>
                        Vector search systems today face a critical dilemma: choose between the blazing speed of in-memory solutions like HNSW or the cost-effective scalability of disk-based approaches like DiskANN. This trade-off has forced organizations to either bear excessive infrastructure costs or accept compromised performance.
                    </p>
                </div>

                <div>
                    <h3 className={`${commonStyles.featureTitle} mb-6`}>Current Approaches and Their Limitations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-b from-white to-[#f5dede] rounded-xl p-6 shadow-md">
                            <h4 className={commonStyles.featureTitle}>HNSW (In-Memory)</h4>
                            <ul className="mt-4">
                                <li className="flex items-center text-gray-700 mb-3">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Exceptional query performance
                                </li>
                                <li className="flex items-center text-gray-700 mb-3">
                                    <span className="text-green-500 mr-2">✓</span>
                                    High recall rates
                                </li>
                                <li className="flex items-center text-gray-700 mb-3">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Ideal for real-time applications
                                </li>
                                <li className="flex items-center text-red-600 mb-3">
                                    <span className="text-red-500 mr-2">✗</span>
                                    Requires entire index in RAM
                                </li>
                                <li className="flex items-center text-red-600">
                                    <span className="text-red-500 mr-2">✗</span>
                                    Costly at scale
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-b from-white to-[#f5dede] rounded-xl p-6 shadow-md">
                            <h4 className={commonStyles.featureTitle}>Disk-Based ANN</h4>
                            <ul className="mt-4">
                                <li className="flex items-center text-gray-700 mb-3">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Excellent scalability
                                </li>
                                <li className="flex items-center text-gray-700 mb-3">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Cost-effective storage
                                </li>
                                <li className="flex items-center text-gray-700 mb-3">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Efficient memory usage
                                </li>
                                <li className="flex items-center text-red-600 mb-3">
                                    <span className="text-red-500 mr-2">✗</span>
                                    Higher query latency
                                </li>
                                <li className="flex items-center text-red-600">
                                    <span className="text-red-500 mr-2">✗</span>
                                    Complex maintenance
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className={commonStyles.featureTitle}>The CHANNI Solution</h3>
                    <p className={`${commonStyles.featureDescription} mb-6`}>
                        CHANNI bridges this gap with a novel multi-level architecture that combines the best aspects of both approaches. By intelligently managing data between memory and disk through its unique cluster-primary representation and nested navigation structure, CHANNI achieves:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Near-HNSW query performance while keeping most data on disk",
                            "Dramatic reduction in infrastructure costs (up to 90% less RAM required)",
                            "Ability to scale to billions of vectors without performance degradation",
                            "Simplified maintenance through intelligent cluster operations"
                        ].map((benefit, index) => (
                            <div key={index} className={`${commonStyles.featureDescription} flex items-center`}>
                                <span className={`${commonStyles.featureLink} mr-3`}>→</span>
                                {benefit}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 