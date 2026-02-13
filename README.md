# KahootGPT - [kahootgpt.itsmarsss.com](https://kahootgpt.itsmarsss.com)

AI-powered Kahoot assistant. Now with a free tier.

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/mmnbfkefbancfkmcbfeepiiniggfaobm)](https://chrome.google.com/webstore/detail/mmnbfkefbancfkmcbfeepiiniggfaobm)
[![Firefox](https://img.shields.io/amo/v/kahootgpt)](https://addons.mozilla.org/firefox/addon/kahootgpt/)
[![License](https://img.shields.io/github/license/itsmarsss/kahootgpt)](LICENSE)

---

## What's New (v4.0.0)

- Free tier: 5 queries/week, resets Mondays
- No API key needed for setup anymore (backend-powered)
- Use your own API key as fallback when free queries run out
- New subscription plans: Light ($4.99), Monthly ($9.99), Yearly ($89.99)
- +10 bonus queries if you leave a 5-star rating
- Real-time query count updates
- Fixed subscription renewal webhook bug

---

## Features

- AI answer suggestions
- Auto-highlight best answer
- Auto-tap (premium only) - hands-free mode
- File upload support
- Multi-select answer support
- Works with any Kahoot (public or private)

---

## Installation

**Chrome:** [Web Store Link](https://chrome.google.com/webstore/detail/mmnbfkefbancfkmcbfeepiiniggfaobm)

**Firefox:** [Add-ons Link](https://addons.mozilla.org/firefox/addon/kahootgpt/)

---

## Pricing

| Plan    | Price     | Queries   | Features                          |
| ------- | --------- | --------- | --------------------------------- |
| Free    | $0        | 5/week    | Basic features, resets Monday     |
| Light   | $4.99/mo  | 100/week  | All features, weekly reset        |
| Monthly | $9.99/mo  | Unlimited | All features + auto-tap           |
| Yearly  | $89.99/yr | Unlimited | Save 25%, all features + auto-tap |

**Bonus:** +10 queries for leaving a 5-star review

---

## Usage

1. Install extension
2. Join a Kahoot (host must enable "Show questions & answers")
3. Click extension → "Attach to Game"
4. Get AI-generated answers

Full tutorial: [kahootgpt.itsmarsss.com/#/tutorial](https://kahootgpt.itsmarsss.com/#/tutorial)

---

## Disclaimers

**Not affiliated with Kahoot!** - Kahoot! and K! logo are trademarks of Kahoot! AS.

**Host requirement:** Must enable "Show questions & answers" for extension to work.

---

## Development

### Project Structure

```
frontend/
├── popup-react/       # React popup UI
├── scripts-ts/        # TypeScript content/background scripts
├── static/           # Icons, manifests
└── build.js          # Build script

backend/
└── src/
    ├── functions/    # AWS Lambda functions
    └── tools/        # Utilities
```

### Building

```bash
cd frontend
pnpm install
pnpm run build
```

Outputs to `frontend/dist/chrome/` and `frontend/dist/firefox/`

### Tech Stack

- Frontend: React, TypeScript, Vite
- Backend: AWS Lambda (Serverless), DynamoDB, Stripe
- AI: OpenAI API (backend)

---

## Contributing

1. Fork repo
2. Create branch
3. Make changes
4. Submit PR

Keep code style consistent. Test before submitting.

---

## Privacy

- No personal data collected
- No tracking
- Local storage only
- Payments via Stripe

Full policy: [kahootgpt.itsmarsss.com/#/privacy](https://kahootgpt.itsmarsss.com/#/privacy)

---

## License

GNU GPL v3.0 - [LICENSE](LICENSE)

---

## Links

- **Website:** [kahootgpt.itsmarsss.com/#/](https://kahootgpt.itsmarsss.com/#/)
- **Discord:** [discord.gg/K8hgFHWeJQ](https://discord.gg/K8hgFHWeJQ)
- **YouTube:** [@itsmarsss](https://www.youtube.com/@itsmarsss)
- **Issues:** [GitHub Issues](https://github.com/itsmarsss/kahootgpt/issues)

---

## Changelog

**v4.0.0** - Full UI rewrite, free tier, new pricing, backend-powered, no API key

**v3.9.0** - Multi-select, file upload, performance improvements

[Full changelog](https://github.com/itsmarsss/kahootgpt/releases)
