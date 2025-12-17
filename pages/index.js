import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

const FEATURES = [
	{
		title: "Addons",
		description: (
			<>
				A collection of third-party addons for Jecs
				<div class="card__footer">
					<Link
						class="button button--outline button--secondary button--block"
						to="/docs/addons"
					>
						Addons
					</Link>
				</div>
			</>
		),
	},
	{
		title: "Resources",
		description: (
			<>
				Various resources for implementing and learning about ECS and Jecs
				<div class="card__footer">
					<Link
						class="button button--outline button--secondary button--block"
						to="/docs/resources"
					>
						Resources
					</Link>
				</div>
			</>
		),
	},
	{
		title: "FAQ",
		description: (
			<>
				Frequently Asked Questions by the Community
				<div class="card__footer">
					<Link
						class="button button--outline button--secondary button--block"
						to="/docs/faq"
					>
						FAQ
					</Link>
				</div>
			</>
		),
	},
	{
		title: "API",
		description: (
			<>
				<p>
					A detailed API reference for Jecs, built with{" "}
					<Link to="https://eryn.io/moonwave">Moonwave</Link>
				</p>
				<div class="card__footer">
					<Link
						class="button button--outline button--secondary button--block"
						to="/api"
					>
						API Reference
					</Link>
				</div>
			</>
		),
	},
];

function Feature({ title, description }) {
	return (
		<div class="col margin-bottom--lg" style={{ display: "flex" }}>
			<div class="card">
				<div class="card__header">
					<h2>{title}</h2>
				</div>
				<div
					class="card__body"
					style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
				>
					{description}
				</div>
			</div>
		</div>
	);
}

function HomepageFeatures() {
	return (
		<div className="container">
			<div class="row">
				{FEATURES.map((props, idx) => (
					<Feature key={idx} {...props} />
				))}
			</div>
		</div>
	);
}

function HeroBanner() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<div
			class="hero hero--primary"
			style={{
				height: "25rem",
				marginBottom: "5rem",
			}}
		>
			<div class="container">
				<h1 class="hero__title" style={{ color: "var(--ifm-color-secondary)" }}>
					{siteConfig.title}
				</h1>
				<p
					class="hero__subtitle"
					style={{ color: "var(--ifm-color-secondary)" }}
				>
					{siteConfig.tagline}
				</p>
				<div>
					<Link
						class="button button--secondary button--lg"
						style={{ marginRight: "1rem" }}
						to="/docs/intro"
					>
						<span>Introduction</span>
					</Link>

					<Link
						class="button button--outline button--secondary button--lg hero-button"
						style={{ marginRight: "1rem" }}
						to="/api"
					>
						<span>API</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default function Homepage() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={siteConfig.title} description={siteConfig.tagline}>
			<main>
				<HeroBanner />
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
