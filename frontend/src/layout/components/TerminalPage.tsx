import type { ReactNode } from "react";

type TerminalPageProps = {
    children: ReactNode;
    title?: string;
}


export function TerminalPage({ children, title }: TerminalPageProps) {
    return (
        <div className="terminal-page">
            {title &&
                <>
                    <h1 className="terminal-title">
                        {title}
                    </h1>
                    <div className="terminal-body">
                        {children}
                    </div>
                </>
            }
        </div>
    );
}