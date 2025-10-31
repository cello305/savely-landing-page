import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import NavigationMenu from './Components/landing/NavigationMenu';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/20 antialiased">
            {/* Floating gradient orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
                />
                <div
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
                />
            </div>

            {/* Navigation */}
            <NavigationMenu />

            {/* Content */}
            <div className="relative pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Back to Home Link */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Back to Home</span>
                    </Link>

                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                            <Shield className="w-8 h-8 text-blue-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-gray-600 mb-2">
                            for Discount Gift Card Finder Safely
                        </p>
                        <p className="text-base text-gray-500">
                            Effective Date: October 30, 2025
                        </p>
                        <p className="text-base text-gray-500">
                            Last Updated: October 30, 2025
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Discount Gift Card Finder Safely ("the Extension," "we," "us," or "our") is a Chrome browser extension that identifies potential discounts on gift cards by analyzing the webpage you are viewing. When a better offer is detected, the Extension may display a local notification.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We are committed to protecting your privacy. The Extension does not collect, store, or transmit any personal information to external servers. All data processing occurs exclusively on your device.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                This Privacy Policy explains:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                                <li>What information, if any, the Extension accesses or stores</li>
                                <li>The purpose of each requested browser permission</li>
                                <li>How we ensure your data remains secure</li>
                                <li>Your control over stored information</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                                By installing or using the Extension, you acknowledge and agree to the terms of this Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data Access and Storage</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">No Personal Data Collection</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                                <li>We do not collect, store, or share personal identifiers such as your name, email address, or IP address.</li>
                                <li>The Extension does not track browsing history, set cookies, or use third-party analytics or trackers.</li>
                                <li>No data is transmitted to any server—processing is entirely local to your device.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Temporary Access (Active Tab Only)</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                                <li>The Extension may temporarily access the visible content of the active tab (such as displayed prices or gift card details) solely when you manually activate it by clicking the Extension icon.</li>
                                <li>Accessed data is used immediately for discount analysis and is not retained afterward.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Locally Stored Data (Optional)</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                                <li>User-defined settings (e.g., preferred retailers, alert thresholds).</li>
                                <li>Recently detected discounts (e.g., "20% off at Store X") without purchase or payment details.</li>
                                <li>Stored via Chrome's localStorage API and remains on your device until manually deleted.</li>
                            </ul>

                            <div className="overflow-x-auto mt-6">
                                <table className="min-w-full border border-gray-300 rounded-lg">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">Data Type</th>
                                            <th className="border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-900">Accessed?</th>
                                            <th className="border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-900">Stored?</th>
                                            <th className="border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-900">Shared?</th>
                                            <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Page prices / gift card info</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 text-center">Yes (temporary, active tab only)</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 text-center">No</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 text-center">No</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Detect discounts</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">User settings</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 text-center">No</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 text-center">Yes (local)</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 text-center">No</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Customize experience</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Personal information</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 text-center">No</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 text-center">No</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 text-center">No</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">N/A</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Browsing history</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 text-center">No</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 text-center">No</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 text-center">No</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">N/A</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Browser Permissions</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The Extension requests only the minimal permissions required for core functionality.
                            </p>
                            <div className="overflow-x-auto mt-6">
                                <table className="min-w-full border border-gray-300 rounded-lg">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">Permission</th>
                                            <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">Purpose</th>
                                            <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">Functionality Enabled</th>
                                            <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">Privacy Impact</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-medium">activeTab</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">To analyze the current webpage when activated by the user</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Read tab URL and title; inject analysis script</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">None – limited to user action, single tab only</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-medium">storage</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">To retain user preferences and recent deals</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Store local settings and alerts</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">None – data remains on device</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-medium">tabs</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">To identify whether the current tab is a gift card page</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Query active tab metadata</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Minimal – no browsing history access</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-medium">scripting</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">To perform price and discount checks</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Inject lightweight scanner script</td>
                                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">None – executes once, then removed</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                The Extension does not request host-level permissions (e.g., &lt;all_urls&gt;). We cannot access or interact with any webpage unless explicitly initiated by you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How Discounts Are Detected</h2>
                            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                                <li>You click the Extension icon on a webpage containing gift card offers.</li>
                                <li>The Extension reads visible price elements within that page's content.</li>
                                <li>It compares the observed values against predefined, local discount criteria.</li>
                                <li>If a better deal is found, a popup appears with relevant information.</li>
                                <li>All processing completes locally; no external servers are contacted.</li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security and Third-Party Sharing</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li><strong>Local Processing:</strong> All operations occur within your browser environment.</li>
                                <li><strong>No Network Transmission:</strong> The Extension functions without any outbound requests.</li>
                                <li><strong>No Third Parties:</strong> We do not partner with advertisers, affiliates, or data brokers.</li>
                                <li><strong>Chrome Security:</strong> Data stored via Chrome APIs is isolated from other extensions and websites.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Control</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                You retain complete control over your data:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li><strong>View Data:</strong> Open the Extension settings to review stored deals or preferences.</li>
                                <li><strong>Delete Data:</strong> Clear saved data through the Extension's settings or by clearing extension storage in Chrome.</li>
                                <li><strong>Disable or Uninstall:</strong> You may disable or remove the Extension at any time. Uninstallation permanently deletes all locally stored data.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                The Extension does not collect personal data and is safe for users of all ages. It is not specifically directed toward children under 13.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to This Policy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may update this Privacy Policy periodically to reflect product or regulatory changes. The "Last Updated" date will indicate the latest revision. For any material changes, users will be notified through the Extension interface.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For questions or concerns regarding this Privacy Policy, please contact us:
                            </p>
                            <Link
                                to="/contact-us"
                                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                            >
                                Contact Us Form
                                <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                            </Link>
                        </section>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-gray-200/50 backdrop-blur-sm bg-white/30 py-6">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-600 text-sm">
                            © 2025 Savely. Save smarter, shop better.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link
                                to="/contact-us"
                                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                            >
                                Contact Us
                            </Link>
                            <Link
                                to="/privacy-policy"
                                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>

            <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
        </div>
    );
}

