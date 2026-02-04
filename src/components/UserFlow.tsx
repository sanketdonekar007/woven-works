
import React from 'react';
import { RevealOnScroll } from "./RevealOnScroll";

const FlowStep = ({ number, title, content, children, isLast }: { number: string, title: string, content: string, children?: React.ReactNode, isLast?: boolean }) => (
    <div className="relative flex gap-6 md:gap-8 pb-12">
        {!isLast && (
            <div className="absolute left-[1.125rem] md:left-[1.375rem] top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-200/20 opacity-30"></div>
        )}

        <div className="flex-shrink-0 z-10">
            <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-blue-950 border border-blue-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <span className="text-blue-400 font-bold text-sm md:text-base">{number.replace(/[^0-9]/g, '')}</span>
            </div>
        </div>

        <div className="flex-grow pt-1">
            <RevealOnScroll key={number}>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{title.replace(/^[0-9]+️⃣/, '').trim()}</h3>
                {content && <div className="text-gray-600 mb-4 whitespace-pre-wrap leading-relaxed">{content}</div>}

                {children && (
                    <div className="space-y-4 mt-4">
                        {children}
                    </div>
                )}
            </RevealOnScroll>
        </div>
    </div>
);

const FlowNode = ({ label, subtext, type = 'default' }: { label: string, subtext?: string, type?: 'default' | 'branch' | 'action' }) => {
    const getStyles = () => {
        switch (type) {
            case 'branch':
                return 'border-l-4 border-purple-500 bg-purple-50/50';
            case 'action':
                return 'border-l-4 border-emerald-500 bg-emerald-50/50';
            default:
                return 'border-l-4 border-blue-500 bg-blue-50/50';
        }
    };

    return (
        <div className={`${getStyles()} p-4 rounded-r-lg shadow-sm border border-gray-100 border-l-0`}>
            <div className="font-semibold text-gray-800">{label}</div>
            {subtext && <div className="text-sm text-gray-600 mt-1 leading-relaxed">{subtext}</div>}
        </div>
    );
};

export const UserFlow = () => {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">
            <div className="mb-16 text-center">
                <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Process Architecture</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">User Task Flow</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    A comprehensive breakdown of valid user journeys, ensuring seamless navigation, efficient task execution, and clear role-based interactions across the platform.
                </p>
            </div>

            <div className="relative">
                <FlowStep
                    number="1️⃣"
                    title="Entry & Authentication Flow"
                    content="Start → Landing Page → Decision: User Type"
                >
                    <div className="grid md:grid-cols-2 gap-4">
                        <FlowNode
                            type="branch"
                            label="A. New User (Compliance Service Provider)"
                            subtext="Get Started → Sign Up → Enter Business Details → Verify Email / OTP → Set Preferences (States, Services, Team Size) → Valid → Dashboard (Super Admin)"
                        />
                        <FlowNode
                            type="branch"
                            label="B. Existing User"
                            subtext="Login → Enter Credentials → Decision: Credentials Valid? → Yes: Dashboard / No: Error Message → Forgot Password → Reset via Email → Login → Dashboard"
                        />
                    </div>
                </FlowStep>

                <FlowStep
                    number="2️⃣"
                    title="Role-Based Dashboard Flow"
                    content="After Login → Role Check"
                >
                    <div className="space-y-3">
                        <FlowNode
                            label="A. Super Admin"
                            subtext="Super Admin Dashboard → Overview Widgets (Clients, Orders, Compliance Alerts, Revenue). Actions: Manage Clients, Manage Employees, Configure Services, View Reports, Billing & Subscriptions, System Settings."
                        />
                        <FlowNode
                            label="B. Employee"
                            subtext="Employee Dashboard → Assigned Orders & Tasks → Client Queries → Status Updates → Document Uploads."
                        />
                        <FlowNode
                            label="C. Client Admin"
                            subtext="Client Dashboard → Company Overview → Orders & Filings → Compliance Calendar → Notifications → Payments."
                        />
                    </div>
                </FlowStep>

                <FlowStep
                    number="3️⃣"
                    title="Client & Company Management Flow"
                    content="Dashboard → Clients → Client List → Search / Filter Clients → Select Client → Client Profile"
                >
                    <FlowNode
                        type="action"
                        label="From Client Profile Actions"
                        subtext="View Companies, Add New Company, Assign Employees, Manage Contacts, Compliance History."
                    />
                </FlowStep>

                <FlowStep
                    number="4️⃣"
                    title="Order & Filing Flow"
                    content="Client / Employee Dashboard → Create New Order"
                >
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 uppercase tracking-widest">
                            <div className="h-px bg-gray-300 flex-grow"></div>
                            <span>Creation</span>
                            <div className="h-px bg-gray-300 flex-grow"></div>
                        </div>
                        <FlowNode
                            label="Order Creation Journey"
                            subtext="Select Company → Select Service Category → Choose Filing Type → Upload Documents → Review Order Summary → Payment (Pay Now / Pay Later) → Order Created."
                        />
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 uppercase tracking-widest mt-2">
                            <div className="h-px bg-gray-300 flex-grow"></div>
                            <span>Order Status Flow</span>
                            <div className="h-px bg-gray-300 flex-grow"></div>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {['New', 'In Progress', 'Query Raised', 'Under Review', 'Completed', 'Delivered'].map((status, i) => (
                                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                                    {status}
                                </span>
                            ))}
                        </div>
                    </div>
                </FlowStep>

                <FlowStep
                    number="5️⃣"
                    title="Compliance Tracking Flow"
                    content="Dashboard → Compliance Calendar → Upcoming Deadlines"
                >
                    <FlowNode
                        type="action"
                        label="Compliance Detail View"
                        subtext="Upload Required Docs → Mark as Filed → Notify Client → Archive Compliance."
                    />
                </FlowStep>

                <FlowStep
                    number="6️⃣"
                    title="Notifications & Communication Flow"
                    content="Trigger Events: Order Created, Query Raised, Payment Approved / Rejected, Filing Completed, Subscription Renewal"
                >
                    <FlowNode
                        label="Flow"
                        subtext="Event Triggered → Notification Engine → Send Email + In-App Notification → User Action (View / Acknowledge)."
                    />
                </FlowStep>

                <FlowStep
                    number="7️⃣"
                    title="Billing & Subscription Flow"
                    content="Dashboard → Billing"
                >
                    <FlowNode
                        label="Subscription Actions"
                        subtext="Subscription Plan → Upgrade / Downgrade → Invoice History → Payment Status → Renewal Reminder."
                    />
                </FlowStep>

                <FlowStep
                    number="8️⃣"
                    title="Settings & Access Control Flow"
                    content="Dashboard → Settings"
                >
                    <FlowNode
                        label="Roles & Permissions"
                        subtext="Add / Edit Roles → Assign Access → Save Configuration → Applied Across Platform."
                    />
                </FlowStep>

                <FlowStep
                    number="9️⃣"
                    title="Logout / Session Flow"
                    content="User Menu → Logout"
                    isLast={true}
                >
                    <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-md border border-red-100 text-sm font-medium">
                        Session End → Redirect to Login Page
                    </div>
                </FlowStep>
            </div>
        </div>
    );
};
