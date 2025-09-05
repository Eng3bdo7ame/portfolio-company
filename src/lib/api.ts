import axios from "axios";
import { Service, Partner } from "../types/index";

const BASE_URL = "https://homehunter.kemitbrand.com/api/website";

export async function getHomeData() {
  try {
    const { data } = await axios.get<{
      success: boolean;
      data: {
        partners: { items: Partner[] };
        clients: { items: Partner[] };
        services: { items: Service[] };
      };
    }>(`${BASE_URL}/home-page`);

    return {
      partners: data.data.partners.items,
      clients: data.data.clients.items,
      services: data.data.services.items,
    };
  } catch (error: unknown) {
    console.error("Failed to get home data:", error);
    throw new Error(
      `Failed to fetch home data: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}
