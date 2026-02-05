import { Link } from 'react-router-dom';
import {
  Chrome,
  Globe,
  CheckCircle2,
  AlertCircle,
  Zap,
  FileText,
  MousePointerClick,
  Star,
  ArrowLeft,
  Download,
  Play,
  Link as LinkIcon
} from 'lucide-react';
import './Tutorial.css';

function Tutorial() {
  const handleContactClick = () => {
    const email = 'itsmarzzzzzz@protonmail.com';
    const encodedEmail = encodeURIComponent(email);
    window.location.href = `mailto:${encodedEmail}`;
  };

  return (
    <div className="tutorial-page">
      <div className="tutorial-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        <h1>Complete Guide</h1>
        <p>Everything you need to know about KahootGPT v4.0</p>
      </div>

      <main className="tutorial-content">
        {/* Installation */}
        <section className="tutorial-section">
          <h2>
            <Download size={24} />
            Installation
          </h2>
          <div className="tutorial-grid">
            <div className="tutorial-card">
              <Chrome size={32} />
              <h3>Chrome</h3>
              <ol>
                <li>Visit the <a href="https://chrome.google.com/webstore/detail/kahootgpt-kahoot-%20-chatgp/mmnbfkefbancfkmcbfeepiiniggfaobm" target="_blank" rel="noopener noreferrer">Chrome Web Store</a></li>
                <li>Click "Add to Chrome"</li>
                <li>Confirm by clicking "Add extension"</li>
                <li>The KahootGPT icon will appear in your toolbar</li>
              </ol>
            </div>
            <div className="tutorial-card">
              <Globe size={32} />
              <h3>Firefox</h3>
              <ol>
                <li>Visit <a href="https://addons.mozilla.org/firefox/addon/kahootgpt/" target="_blank" rel="noopener noreferrer">Firefox Add-ons</a></li>
                <li>Click "Add to Firefox"</li>
                <li>Confirm by clicking "Add"</li>
                <li>The KahootGPT icon will appear in your toolbar</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="tutorial-section">
          <h2>
            <Star size={24} />
            Getting Started
          </h2>
          <div className="info-box success">
            <CheckCircle2 size={20} />
            <div>
              <strong>No Setup Required!</strong>
              <p>v4.0 runs through our backend - no API key setup needed anymore. Just install and you're ready to go.</p>
            </div>
          </div>

          <div className="tutorial-steps">
            <h3>Free Tier</h3>
            <ul>
              <li>5 queries per week (resets every Monday at midnight)</li>
              <li>Leave a 5-star review for +10 bonus queries!</li>
            </ul>

            <h3>First Time Setup</h3>
            <ol>
              <li>Click the KahootGPT extension icon in your toolbar</li>
              <li>You'll see the popup with your query count (e.g., "5/5")</li>
              <li>Join a Kahoot game to start using it</li>
            </ol>
          </div>
        </section>

        {/* Using KahootGPT */}
        <section className="tutorial-section">
          <h2>
            <Play size={24} />
            Using KahootGPT
          </h2>

          <div className="numbered-steps">
            <div className="numbered-step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Join a Kahoot Game</h3>
                <ul>
                  <li>Go to <a href="https://kahoot.it" target="_blank" rel="noopener noreferrer">kahoot.it</a> or open the Kahoot app</li>
                  <li>Enter your game PIN</li>
                  <li>Enter your nickname</li>
                  <li>Wait in the lobby</li>
                </ul>
              </div>
            </div>

            <div className="numbered-step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Attach to Game</h3>
                <ul>
                  <li>Click the KahootGPT extension icon</li>
                  <li>Click the "Attach" button in the popup</li>
                  <li>You'll see "Connected" status turn green</li>
                  <li>The extension is now monitoring your game</li>
                </ul>
              </div>
            </div>

            <div className="numbered-step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>Get AI Answers</h3>
                <p>When a question appears, KahootGPT automatically:</p>
                <ul>
                  <li>Reads the question and answer choices</li>
                  <li>Sends them to AI for analysis</li>
                  <li>Highlights the best answer on your screen</li>
                </ul>
                <p>Click the highlighted answer to select it and submit.</p>
              </div>
            </div>

            <div className="numbered-step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>Detach When Done</h3>
                <ul>
                  <li>After the game ends, click the KahootGPT icon</li>
                  <li>Click "Detach" to disconnect</li>
                  <li>Your query count will update</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="tutorial-section">
          <h2>
            <Zap size={24} />
            Features Explained
          </h2>

          <div className="feature-list">
            <div className="feature-item">
              <CheckCircle2 size={20} />
              <div>
                <h4>AI Answer Suggestions</h4>
                <p>Get instant AI-powered answer suggestions for any Kahoot question using advanced language models.</p>
              </div>
            </div>

            <div className="feature-item">
              <CheckCircle2 size={20} />
              <div>
                <h4>Auto-Highlight</h4>
                <p>The best answer is automatically highlighted on the game screen with a visual indicator.</p>
              </div>
            </div>

            <div className="feature-item">
              <FileText size={20} />
              <div>
                <h4>File Upload Support</h4>
                <p>Upload study materials, PDFs, or text files for context-aware answers specific to your course material.</p>
              </div>
            </div>

            <div className="feature-item">
              <CheckCircle2 size={20} />
              <div>
                <h4>Multi-Select Support</h4>
                <p>Works with multiple-choice questions that allow selecting more than one answer.</p>
              </div>
            </div>

            <div className="feature-item">
              <MousePointerClick size={20} />
              <div>
                <h4>Auto-Tap (Premium)</h4>
                <p>Premium feature that automatically clicks the correct answer for hands-free gameplay. Available on Monthly and Yearly plans.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="tutorial-section">
          <h2>
            <AlertCircle size={24} />
            Troubleshooting
          </h2>

          <div className="troubleshooting">
            <details className="trouble-item">
              <summary>Extension Not Connecting</summary>
              <div className="trouble-content">
                <p><strong>Problem:</strong> "Attach" button doesn't work or status stays "Disconnected"</p>
                <p><strong>Solutions:</strong></p>
                <ul>
                  <li>Make sure you're on a Kahoot game page (kahoot.it)</li>
                  <li>Refresh the page and try again</li>
                  <li>Make sure the host enabled "Show questions & answers"</li>
                  <li>Try detaching and re-attaching</li>
                </ul>
              </div>
            </details>

            <details className="trouble-item">
              <summary>No Answer Highlighting</summary>
              <div className="trouble-content">
                <p><strong>Problem:</strong> Answers aren't being highlighted on the screen</p>
                <p><strong>Solutions:</strong></p>
                <ul>
                  <li>Check that you're connected (green "Connected" status)</li>
                  <li>Make sure you have queries remaining</li>
                  <li>Verify the host enabled "Show questions & answers"</li>
                  <li>Some game modes may not be supported</li>
                </ul>
              </div>
            </details>

            <details className="trouble-item">
              <summary>Out of Queries</summary>
              <div className="trouble-content">
                <p><strong>What happens:</strong> When you run out of weekly queries, the extension will show a modal indicating you've exhausted your free queries. The extension will still attach to games, but won't process questions or provide answers until your queries reset.</p>
                <p><strong>Solutions:</strong></p>
                <ul>
                  <li><strong>Use your own API key:</strong> Click the settings icon in the extension popup and add your own OpenAI API key to bypass query limits entirely.</li>
                  <li><strong>Wait for Monday reset:</strong> Free tier queries reset every Monday at midnight UTC. Your counter will go back to 5/5.</li>
                  <li><strong>Get bonus queries:</strong> Leave a 5-star review on the Chrome/Firefox store for +10 bonus queries (one-time).</li>
                  <li><strong>Upgrade:</strong> <a href="/#pricing">Premium plans</a> offer 100/week (Light) or unlimited queries (Monthly/Yearly).</li>
                </ul>
              </div>
            </details>

            <details className="trouble-item">
              <summary>Questions Not Showing</summary>
              <div className="trouble-content">
                <p><strong>Problem:</strong> The extension can't see the questions</p>
                <p><strong>Solutions:</strong></p>
                <ul>
                  <li><strong>Host must enable "Show questions & answers"</strong> - this is the most common issue</li>
                  <li>Ask the host to enable this setting in their game options</li>
                  <li>Without this setting, KahootGPT cannot read the questions</li>
                </ul>
              </div>
            </details>

            <details className="trouble-item">
              <summary>Payment Issues</summary>
              <div className="trouble-content">
                <p><strong>Problem:</strong> Subscription not activating after payment</p>
                <p><strong>Solutions:</strong></p>
                <ul>
                  <li>Wait 1-2 minutes for the system to sync</li>
                  <li>Refresh the extension popup</li>
                  <li>Try closing and reopening your browser</li>
                  <li>Contact support: <a onClick={handleContactClick}>&#105;&#116;&#115;&#109;&#97;&#114;&#122;&#122;&#122;&#122;&#122;&#122;&commat;&#112;&#114;&#111;&#116;&#111;&#110;&#109;&#97;&#105;&#108;&period;&#99;&#111;&#109;</a></li>
                </ul>
              </div>
            </details>
          </div>
        </section>

        {/* Support */}
        <section className="tutorial-section support">
          <h2>
            <LinkIcon size={24} />
            Need More Help?
          </h2>
          <div className="support-links">
            <a onClick={handleContactClick} className="support-link">
              Email Support
            </a>
            <a href="https://discord.gg/K8hgFHWeJQ" target="_blank" rel="noopener noreferrer" className="support-link">
              Discord Community
            </a>
            <a href="https://github.com/itsmarsss/kahootgpt/issues" target="_blank" rel="noopener noreferrer" className="support-link">
              GitHub Issues
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Tutorial;
