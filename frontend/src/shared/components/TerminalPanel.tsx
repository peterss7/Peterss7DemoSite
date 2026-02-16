import type { ReactNode } from "react";

type TerminalPanelProps = {
    header: string;
    children: ReactNode;
}

export function TerminalPanel(props: TerminalPanelProps) {
    const { header, children } = props;

    return (
        <section className="terminal-panel">
            {header &&
                <>
                    <div className="terminal-panel-header">
                        {header}
                    </div>
                    <div className="terminal-panel-body">
                        {children}
                    </div>
                </>
            }
        </section>
    );
}