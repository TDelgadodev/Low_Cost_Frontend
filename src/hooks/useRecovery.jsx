import { useContext } from "react";
import { RecoveryContext } from "../context/recoveryProvider";

export function useRecovery() {
    return useContext(RecoveryContext)
}
