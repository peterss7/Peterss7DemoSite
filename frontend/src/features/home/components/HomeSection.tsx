import { TerminalPage } from "../../../layout";
import { TerminalPanel } from "../../../shared";

export function HomeSection() {
    return (
        <TerminalPage title="Home">
            <div className="flex-column">
                <div className="flex-row" style={{ gap: "50px"}}>
                    <div className="flex-column">
                        <div>
                            <p className="lead">
                                Hi, I’m Steven. I build .NET + React stuff and I like making weird
                                interactive portfolio experiences.
                            </p>
                            <p>
                                This site is intentionally simple: black background, green text,
                                and clear sections.
                            </p>
                        </div>
                        <div>
                            <TerminalPanel header="CURRENT FOCUS">
                                <ul className="terminal-list">
                                    <li>PizzaCs: .NET API + React + Postgres; A Restaurant Sim</li>
                                    <li>The Meaning Discordancy: Simulation of Sociosemiotic Evolution (on backburner)</li>
                                </ul>
                            </TerminalPanel>
                        </div>
                    </div>
                    <img
                        src="/main-img-placeholder.png"
                        alt="Image!"
                        id="main-img"                        
                    />
                </div>
                <TerminalPanel header="CONTACT">
                    <p>See contact page</p>
                </TerminalPanel>
            </div>
        </TerminalPage>
    );
}