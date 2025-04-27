export interface Patient {
  id: string;
  name: string;
  age: number;
  status: "stable" | "needs_attention" | "critical";
  heartRate: number;
  notes: {
    id: string;
    content: string;
    timestamp: string;
  }[];
}
