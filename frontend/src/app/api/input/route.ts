import { NextResponse } from "next/server";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChromaClient } from "chromadb";
import { z } from "zod";
import { LucideArrowDownLeftFromCircle } from "lucide-react";

const client = new ChromaClient({ path: "http://localhost:8000" });
const collection = await client.getOrCreateCollection({
    name: "my_collection",
});

const questions = [
    // economic feasibility
    'What is ROI of online education platform.',
    'What is ROI back period for the online education platform.',
    'What is development margin for the online education platform for the online education platform.',
    'What is benefit-cost ratio for the online education platform.',
    'What is cash flow for the online education platform.',
    'What is rental yield for the online education platform.',
    'What is capitalization rate for the online education platform.',
    'How to improve economic feasibility for the online education platform.',

    // technical feasibility
    'What is technical feasibility for the online education platform.',
    'What is required resources for expansion for the online education platform.',
    'How to improve technical feasibility for the online education platform.',

    // legal feasibility
    'What is intellectual property compliance rate for the online education platform.',
    'What is registration process for the online education platform.',
    'How to improve legal feasibility for the online education platform.',

    // managerial feasibility
    'What is staff requirements for the online education platform.',
    'How to improve managerial feasibility for the online education platform.',

    // Market feasibility
    'What is market size for the online education platform.',
    'What is estimated annual growth rate for the online education platform.',
    'What is customer lifetime value (CLV) for the online education platform.',
    'What is customer acquisition cost (CAC) for the online education platform.',
    'What is customer retention rate of 80% for the online education platform.',
    'What are the potential competitors in the online education space',
    'How to improve market feasibility for the online education platform.'
]

const Agent_1 = new ChatGoogleGenerativeAI({
    modelName: "gemini-pro",
    temperature: 0.7,
    cache: true,
    apiKey: process.env.API_KEY_1,
});

const Agent_2 = new ChatGoogleGenerativeAI({
    modelName: "gemini-pro",
    temperature: 0.7,
    cache: true,
    apiKey: process.env.API_KEY_2,
});

const Agent_3 = new ChatGoogleGenerativeAI({
    modelName: "gemini-pro",
    temperature: 0.7,
    cache: true,
    apiKey: process.env.API_KEY_3,
});

const Agent_4 = new ChatGoogleGenerativeAI({
    modelName: "gemini-pro",
    temperature: 0.7,
    cache: true,
    // google_api_key: process.env.LLM_API_KEY_4,
    apiKey: process.env.LLM_API_KEY_4,
});

const Agent_5 = new ChatGoogleGenerativeAI({
    modelName: "gemini-pro",
    temperature: 0.7,
    cache: true,
    apiKey: process.env.API_KEY_5,
});

const economicFeasibility_schema = z.object({
    ROI: z.string().describe("What is ROI of online education platform."),
    ROI_back_period: z.string().describe("What is ROI back period for the online education platform."),
    development_margin: z.object({
        x: z.string().describe("all Years list"),
        y: z.string().describe("all percentage list")
    }).describe("What is development margin for the online education platform."),
    benefit_cost_ratio: z.string().describe("What is benefit-cost ratio for the online education platform,"),
    cash_flow: z.object({
        x: z.string().describe("all Years list"),
        y: z.string().describe("all cast flow list")
    }).describe("The cash flow for the year for the online education platform is expected to reach Rs.195,000, Rs.210,000, Rs.110,000, Rs.145,000 over January, April, August, December.  "),
    rental_yield: z.string().describe("What is rental yield for the online education platform."),
    capitalization_rate: z.string().describe('What is capitalization rate for the online education platform.'),
    Inprovement: z.string().describe("How to improve economic feasibility for the online education platform.")
});

const legalFeasibility_schema = z.object({
    intellectual_property_compliance_rate: z.string().describe("What is the intellectual property compliance rate for the online education platform."),
    registration_process_duration: z.string().describe("What is the registration process duration for the online education platform."),
    regulatory_compliance: z.string().describe("What is the regulatory compliance percentage for the online education platform."),
    data_privacy_measures: z.string().describe("What are the data privacy and cybersecurity measures for the online education platform."),
    improvement_strategies: z.string().describe("How to improve legal feasibility for the online education platform.")
});

const marketFeasibility_schema = z.object({
    market_size: z.string().describe("What is the market size for the online education platform."),
    annual_growth_rate: z.object({
        x: z.string().describe("List of years"),
        y: z.string().describe("Annual growth rate per year")
    }).describe("Annual growth rate of the online education platform over different years."),
    customer_lifetime_value: z.object({
        x: z.string().describe("List of years"),
        y: z.string().describe("Customer lifetime value per year")
    }).describe("Customer Lifetime Value (CLV) over different years."),
    customer_acquisition_cost: z.string().describe("What is the customer acquisition cost (CAC) for the online education platform."),
    customer_retention_rate: z.string().describe("What is the customer retention rate for the online education platform."),
    competitors: z.array(z.object({
        name: z.string().describe("Competitor name"),
        market_share: z.string().describe("Market share percentage"),
        annual_growth_rate: z.string().describe("Annual growth rate"),
        customer_lifetime_value: z.string().describe("CLV of the competitor")
    })).describe("Potential competitors in the online education space."),
    improvement_strategies: z.string().describe("How to improve market feasibility for the online education platform.")
});

const technicalFeasibility_schema = z.object({
    existing_resources: z.array(z.string()).describe("List of existing technical resources such as cloud-based servers, LMS, AI-driven analytics."),
    required_resources: z.array(z.string()).describe("List of required resources for expansion such as additional cloud storage, AI-driven personalization."),
    estimated_development_time: z.string().describe("Estimated development time for implementing technical upgrades."),
    technological_needs: z.array(z.string()).describe("Key technological needs like high-speed internet infrastructure, adaptive learning algorithms."),
    improvement_strategies: z.string().describe("How to improve technical feasibility for the online education platform.")
});

const managerialFeasibility_schema = z.object({
    staff_requirements: z.array(z.object({
        role: z.string().describe("Staff role (e.g., Content Developer, Technical Expert, Marketing Specialist)"),
        count: z.number().describe("Number of required staff for this role"),
        qualification: z.string().describe("Required qualification for this role")
    })).describe("Staffing requirements for the online education platform."),
    workspace_requirement: z.string().describe("Estimated workspace required for the online education platform."),
    estimated_preparation_time: z.string().describe("Estimated time required for startup preparation."),
    improvement_strategies: z.string().describe("How to improve managerial feasibility for the online education platform.")
});


export async function POST(request) {
    try {
        const { message } = await request.json();
        console.log(1)

        if (!message) {
            return NextResponse.json({ error: "message are required" }, { status: 400 });
        }

        // economics
        const ecoSearchResult = []
        for (let i = 0; i <= 7; i++) {
            ecoSearchResult[i] = await collection.query({
                queryTexts: questions[i].trim(),
                nResults: 1
            });
        }

        const structuredLlm_1 = Agent_1.withStructuredOutput(economicFeasibility_schema);
        const a = await structuredLlm_1.invoke(message);
        console.log(a)



        // technical
        const tecSearchResult = []
        for (let i = 8; i <= 10; i++) {
            tecSearchResult[i] = await collection.query({
                queryTexts: questions[i].trim(),
                nResults: 1
            });
        }

        const structuredLlm_2 = Agent_2.withStructuredOutput(technicalFeasibility_schema);
        const b = await structuredLlm_2.invoke(message);
        console.log(b)


        // Legal
        const legSearchResult = []
        for (let i = 11; i <= 13; i++) {
            legSearchResult[i] = await collection.query({
                queryTexts: questions[i].trim(),
                nResults: 1
            });
        }

        const structuredLlm_3 = Agent_3.withStructuredOutput(legalFeasibility_schema);
        const c = await structuredLlm_3.invoke(message);
        console.log(c)


        // managerial
        const manSearchResult = []
        for (let i = 14; i <= 15; i++) {
            manSearchResult[i] = await collection.query({
                queryTexts: questions[i].trim(),
                nResults: 1
            });
        }

        const structuredLlm_5 = Agent_5.withStructuredOutput(managerialFeasibility_schema);
        const e = await structuredLlm_5.invoke(message);
        console.log(e)

        // Market
        const marSearchResult = []
        for (let i = 16; i <= 22; i++) {
            marSearchResult[i] = await collection.query({
                queryTexts: questions[i].trim(),
                nResults: 1
            });
        }

        const structuredLlm_4 = Agent_4.withStructuredOutput(marketFeasibility_schema);
        const d = await structuredLlm_4.invoke(message);
        console.log(d)


        // Return all responses
        return NextResponse.json({
            economicFeasibility: a,
            technicalFeasibility: b,
            legalFeasibility: c,
            marketFeasibility: d,
            culturalFeasibility: LucideArrowDownLeftFromCircle,
            history,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}