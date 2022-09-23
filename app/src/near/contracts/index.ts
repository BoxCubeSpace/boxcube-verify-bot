// import settings from "../../../config/settings.json"
import { wallet } from ".."
import { Contract } from "./func"

const contractName = "nft.bi-polar.testnet";

export const TenK = new Contract(wallet.account(), contractName)
