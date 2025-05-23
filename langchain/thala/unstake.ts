import { convertAmountFromHumanReadableToOnChain } from "@aptos-labs/ts-sdk"
import { Tool } from "langchain/tools"
import type { AgentRuntime } from "@/agent"
import { parseJson } from "../../utils"
export class ThalaUnstakeTokenTool extends Tool {
	name = "thala_unstake_token"
	description = `this tool can be used to unstake thAPT in Thala

    Inputs ( input is a JSON string ):
    amount: number, eg 1 or 0.01 (required)
    `

	constructor(private agent: AgentRuntime) {
		super()
	}

	protected async _call(input: string): Promise<string> {
		try {
			const parsedInput = parseJson(input)

			const unstakeTransactionHash = await this.agent.unstakeTokensWithThala(
				convertAmountFromHumanReadableToOnChain(parsedInput.amount, 8)
			)

			return JSON.stringify({
				status: "success",
				unstakeTransactionHash,
				token: {
					name: "APT",
					decimals: 8,
				},
			})
		} catch (error: any) {
			return JSON.stringify({
				status: "error",
				message: error.message,
				code: error.code || "UNKNOWN_ERROR",
			})
		}
	}
}
