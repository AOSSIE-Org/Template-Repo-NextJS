import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://TODO:project.aossie.org";
  const siteUrl = rawSiteUrl.replace(/\/$/, "");

  return NextResponse.json({
    name: "TODO: Project Name (AOSSIE Webpage Starter)",
    version: "1.0.0",
    description: "TODO: Project Description (AOSSIE Webpage Starter)",
    repository: "https://github.com/AOSSIE-Org/Template-Repo-NextJS",
    features: [
      "Next.js 16 (App Router)",
      "React 19",
      "Tailwind CSS v4",
      "Internationalization (next-intl)",
      "AI Agent Readiness (LLMs.txt, OpenAPI, MCP)"
    ],
    links: {
      home: `${siteUrl}/`,
      docs: `${siteUrl}/api/`,
      openapi: `${siteUrl}/openapi.json`,
      llms: `${siteUrl}/llms.txt`
    }
  });
}
