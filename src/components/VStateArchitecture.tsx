import React from "react";

interface TreeNode {
    label: string;
    color: string;
    children?: TreeNode[];
}

const treeData: TreeNode = {
    label: "Client Dashboard",
    color: "bg-amber-300 border-amber-400",
    children: [
        {
            label: "Services",
            color: "bg-blue-100 border-blue-200",
            children: [
                { label: "Info", color: "bg-rose-100 border-rose-200" },
                { label: "Tracking", color: "bg-rose-100 border-rose-200" },
                { label: "Fax", color: "bg-rose-100 border-rose-200" },
            ],
        },
        {
            label: "Navigation",
            color: "bg-blue-100 border-blue-200",
            children: [
                { label: "Billing", color: "bg-yellow-100 border-yellow-200" },
                {
                    label: "Companies",
                    color: "bg-emerald-100 border-emerald-200",
                    children: [
                        { label: "Tax Profiles", color: "bg-emerald-50 border-emerald-100" },
                        { label: "Contact Info", color: "bg-emerald-50 border-emerald-100" },
                        { label: "Products & Service", color: "bg-emerald-50 border-emerald-100" },
                    ],
                },
                {
                    label: "Orders",
                    color: "bg-yellow-100 border-yellow-200",
                    children: [
                        { label: "Create", color: "bg-yellow-50 border-yellow-100" },
                    ],
                },
                {
                    label: "Users",
                    color: "bg-yellow-100 border-yellow-200",
                    children: [
                        { label: "Permissions", color: "bg-yellow-50 border-yellow-100" },
                        { label: "Profile", color: "bg-yellow-50 border-yellow-100" },
                        { label: "Status", color: "bg-yellow-50 border-yellow-100" },
                    ],
                },
                {
                    label: "Profile",
                    color: "bg-purple-100 border-purple-200",
                    children: [
                        { label: "Auth Settings", color: "bg-purple-50 border-purple-100" },
                        { label: "Support", color: "bg-purple-50 border-purple-100" },
                    ]
                }
            ],
        },
        {
            label: "Visual Data",
            color: "bg-blue-100 border-blue-200",
            children: [
                { label: "Updates", color: "bg-blue-50 border-blue-100" },
                { label: "Highlights/Notifs", color: "bg-blue-50 border-blue-100" },
            ],
        },
    ],
};

const NodeCard = ({ label, color }: { label: string, color: string }) => (
    <div className={`
        relative z-10 px-4 py-2 rounded-lg border shadow-sm 
        font-medium text-xs md:text-sm text-slate-900 text-center whitespace-nowrap 
        transition-all hover:scale-105 hover:shadow-md ${color}
    `}>
        {label}
    </div>
);

const TreeLevel = ({ node, isRoot = false }: { node: TreeNode, isRoot?: boolean }) => {
    return (
        <div className="flex flex-col items-center">
            {/* The layout for a single node: Card -> Vertical Line -> Children Wrapper */}

            <NodeCard label={node.label} color={node.color} />

            {node.children && node.children.length > 0 && (
                <>
                    {/* Vertical line descending from this node */}
                    <div className="w-px h-6 bg-slate-300"></div>

                    {/* Wrapper for children */}
                    <div className="flex justify-center pt-3 relative">
                        {/* 
                            This defines the children row. 
                            We need 'relative' here to position connecting lines if needed, 
                            but the specific lines are better handled per-child.
                        */}

                        {node.children.map((child, index) => (
                            <div key={index} className="flex flex-col items-center px-2 relative">
                                {/* Connector Lines Logic */}

                                {/* 
                                    Horizontal Line (The "Bar"):
                                    - Extends towards left for right-side children
                                    - Extends towards right for left-side children
                                    - Covers full width for middle children
                                    - Hidden for single child
                                */}
                                {node.children!.length > 1 && (
                                    <>
                                        {/* Left Extension */}
                                        {index > 0 && (
                                            <div className="absolute top-0 right-1/2 left-0 h-px bg-slate-400 -translate-y-3"></div>
                                        )}
                                        {/* Right Extension */}
                                        {index < node.children!.length - 1 && (
                                            <div className="absolute top-0 left-1/2 right-0 h-px bg-slate-400 -translate-y-3"></div>
                                        )}
                                    </>
                                )}

                                {/* Vertical line ascending from child to the bar */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-3 bg-slate-400 -translate-y-3"></div>

                                {/* Render the child tree recursively */}
                                <TreeLevel node={child} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export const VStateArchitecture = () => {
    return (
        <div className="w-full overflow-x-auto pb-8 pt-4 cursor-grab active:cursor-grabbing">
            <div className="min-w-fit px-4 mx-auto flex justify-center transform origin-top scale-100 md:scale-95 lg:scale-100">
                <TreeLevel node={treeData} isRoot={true} />
            </div>
        </div>
    );
};
