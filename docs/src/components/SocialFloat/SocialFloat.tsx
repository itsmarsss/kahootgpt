import { Github, Youtube, MessageCircle } from "lucide-react";
import "./SocialFloat.css";

function SocialFloat() {
    return (
        <div className="social-float">
            <a
                href="https://www.youtube.com/@itsmarsss"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
            >
                <Youtube size={20} />
            </a>
            <a
                href="https://github.com/itsmarsss/kahootgpt"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
            >
                <Github size={20} />
            </a>
            <a
                href="https://discord.gg/K8hgFHWeJQ"
                target="_blank"
                rel="noopener noreferrer"
                title="Discord"
            >
                <MessageCircle size={20} />
            </a>
        </div>
    );
}

export default SocialFloat;
